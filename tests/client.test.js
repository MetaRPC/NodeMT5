// Unit tests of MT5Client against an in-process gRPC server (no network, no MRPC account): the server implements the
// services the client calls with the SDK's own generated definitions, records what the client sent and answers with
// data or with an error reply.
const { test, before, after } = require('node:test');
const assert = require('node:assert');
const grpc = require('@grpc/grpc-js');
const { MT5Client, MrpcError } = require('../src/index.js');
// The service definitions and messages straight from the generated stubs: the server side does not depend on the client.
const ConnectionGrpc = require('../package/mt5-term-api-connection_grpc_pb');
const ConnectionPb = require('../package/mt5-term-api-connection_pb');
const AccountHelperGrpc = require('../package/mt5-term-api-account-helper_grpc_pb');
const AccountHelperPb = require('../package/mt5-term-api-account-helper_pb');
const AccountInformationGrpc = require('../package/mt5-term-api-account-information_grpc_pb');
const AccountInformationPb = require('../package/mt5-term-api-account-information_pb');
const TradingHelperGrpc = require('../package/mt5-term-api-trading-helper_grpc_pb');
const TradingHelperPb = require('../package/mt5-term-api-trading-helper_pb');
const SubscriptionsGrpc = require('../package/mt5-term-api-subscriptions_grpc_pb');
const SubscriptionsPb = require('../package/mt5-term-api-subscriptions_pb');
const ErrorPb = require('../package/mrpc-mt5-error_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');

const TERMINAL = 'mt5_live_0123456789abcdef0123456789abcdef';
const seen = [];          // { method, request, apikey, id }
let failNext = null;      // { code, message } -> the next unary call answers with an error reply

function record(method, call) {
  seen.push({ method, request: call.request, apikey: call.metadata.get('apikey')[0], id: call.metadata.get('id')[0] });
}

function errorReply(ReplyType) {
  const reply = new ReplyType();
  const err = new ErrorPb.Error();
  err.setErrorCode(failNext.code);
  err.setErrorMessage(failNext.message);
  reply.setError(err);
  failNext = null;
  return reply;
}

let server;
let port;

before(async () => {
  server = new grpc.Server();
  server.addService(ConnectionGrpc.ConnectionService, {
    connectEx: (call, cb) => {
      record('connectEx', call);
      if (failNext) return cb(null, errorReply(ConnectionPb.ConnectExReply));
      const data = new ConnectionPb.ConnectData();
      data.setTerminalInstanceGuid(TERMINAL);
      const reply = new ConnectionPb.ConnectExReply();
      reply.setData(data);
      cb(null, reply);
    },
    getId: (call, cb) => {
      record('getId', call);
      if (failNext) return cb(null, errorReply(ConnectionPb.GetIdReply));
      const data = new ConnectionPb.GetIdData();
      data.setId(TERMINAL);
      const reply = new ConnectionPb.GetIdReply();
      reply.setData(data);
      cb(null, reply);
    },
    disconnect: (call, cb) => {
      record('disconnect', call);
      cb(null, new ConnectionPb.DisconnectReply());
    },
  });
  server.addService(AccountHelperGrpc.AccountHelperService, {
    accountSummary: (call, cb) => {
      record('accountSummary', call);
      if (failNext) return cb(null, errorReply(AccountHelperPb.AccountSummaryReply));
      const data = new AccountHelperPb.AccountSummaryData();
      data.setAccountLogin(5057401134);
      data.setAccountBalance(1000.5);
      data.setAccountEquity(990.25);
      data.setAccountUserName('Jane Trader');
      data.setAccountLeverage(100);
      data.setAccountCurrency('EUR');
      const reply = new AccountHelperPb.AccountSummaryReply();
      reply.setData(data);
      cb(null, reply);
    },
  });
  const doubles = { ACCOUNT_MARGIN: 12.5, ACCOUNT_MARGIN_FREE: 977.75, ACCOUNT_MARGIN_LEVEL: 7922 };
  server.addService(AccountInformationGrpc.AccountInformationService, {
    accountInfoDouble: (call, cb) => {
      record('accountInfoDouble', call);
      const name = Object.keys(AccountInformationPb.AccountInfoDoublePropertyType)
        .find(k => AccountInformationPb.AccountInfoDoublePropertyType[k] === call.request.getPropertyId());
      const data = new AccountInformationPb.AccountInfoDoubleData();
      data.setRequestedValue(doubles[name]);
      const reply = new AccountInformationPb.AccountInfoDoubleReply();
      reply.setData(data);
      cb(null, reply);
    },
    accountInfoString: (call, cb) => {
      record('accountInfoString', call);
      const data = new AccountInformationPb.AccountInfoStringData();
      data.setRequestedValue('MetaQuotes-Demo');
      const reply = new AccountInformationPb.AccountInfoStringReply();
      reply.setData(data);
      cb(null, reply);
    },
  });
  server.addService(TradingHelperGrpc.TradingHelperService, {
    orderSend: (call, cb) => {
      record('orderSend', call);
      if (failNext) return cb(null, errorReply(TradingHelperPb.OrderSendReply));
      const data = new TradingHelperPb.OrderSendData();
      data.setReturnedCode(10009);
      data.setDeal(77);
      data.setOrder(88);
      data.setVolume(call.request.getVolume());
      data.setPrice(1.1234);
      data.setComment('Request executed');
      const reply = new TradingHelperPb.OrderSendReply();
      reply.setData(data);
      cb(null, reply);
    },
  });
  server.addService(SubscriptionsGrpc.SubscriptionServiceService, {
    onSymbolTick: (call) => {
      record('onSymbolTick', call);
      let i = 0;
      const timer = setInterval(() => {
        if (call.request.getSymbolNamesList()[0] === 'NOSUCH') {
          const err = new ErrorPb.Error();
          err.setErrorCode('SYMBOL_NOT_FOUND');
          err.setErrorMessage('Unknown symbol NOSUCH');
          const failed = new SubscriptionsPb.OnSymbolTickReply();
          failed.setError(err);
          call.write(failed);
          return;
        }
        const tick = new SubscriptionsPb.MrpcSubscriptionMqlTick();
        tick.setSymbol(call.request.getSymbolNamesList()[i % 2]);
        tick.setBid(1.1 + i / 1000);
        tick.setAsk(1.1002 + i / 1000);
        tick.setTimeUtc(Timestamp.fromDate(new Date(Date.UTC(2026, 9, 15, 12, 0, i))));
        const data = new SubscriptionsPb.OnSymbolTickData();
        data.setSymbolTick(tick);
        const reply = new SubscriptionsPb.OnSymbolTickReply();
        reply.setData(data);
        call.write(reply);
        i++;
      }, 10);
      call.on('cancelled', () => clearInterval(timer));
    },
  });
  port = await new Promise((resolve, reject) =>
    server.bindAsync('127.0.0.1:0', grpc.ServerCredentials.createInsecure(), (err, p) => (err ? reject(err) : resolve(p))));
});

after(() => server.forceShutdown());

const client = () => new MT5Client('127.0.0.1', port, 'key-1');

test('connect sends the API key, keeps the terminal id and sends it with every later call', async () => {
  seen.length = 0;
  const c = client();
  assert.strictEqual(await c.connect({ user: 123, password: 'p', server: 'MetaQuotes-Demo' }), true);
  assert.strictEqual(c.id, TERMINAL);
  const connect = seen.find(s => s.method === 'connectEx');
  assert.strictEqual(connect.apikey, 'key-1');
  assert.strictEqual(connect.id, undefined);
  assert.strictEqual(connect.request.getMtClusterName(), 'MetaQuotes-Demo');
  await c.getAccountInfo();
  assert.ok(seen.filter(s => s.method !== 'connectEx').every(s => s.id === TERMINAL && s.apikey === 'key-1'));
  await c.disconnect(true);
  assert.strictEqual(seen.find(s => s.method === 'disconnect').request.getDelete(), true);
});

test('account info is what the server answered: summary, margin values and the broker server', async () => {
  const c = client();
  await c.connect({ user: 123, password: 'p', server: 'MetaQuotes-Demo' });
  assert.deepStrictEqual(await c.getAccountInfo(), {
    login: 5057401134, currency: 'EUR', balance: 1000.5, equity: 990.25,
    margin: 12.5, freeMargin: 977.75, marginLevel: 7922, leverage: 100, name: 'Jane Trader', server: 'MetaQuotes-Demo',
  });
});

test('an error reply is an error - also for the key and login that used to get invented answers', async () => {
  const c = new MT5Client('127.0.0.1', port, 'mrpc_test_key');
  failNext = { code: 'CONNECT_INVALID_LOGIN_ERROR', message: 'Invalid account' };
  await assert.rejects(c.connect(12345678, 'demo_password'), (e) => e instanceof MrpcError && e.code === 'CONNECT_INVALID_LOGIN_ERROR');
  assert.strictEqual(c.connected, false);

  await c.connect({ user: 12345678, password: 'p', server: 'MetaQuotes-Demo' });
  failNext = { code: 'TERMINAL_INSTANCE_NOT_FOUND', message: 'no terminal' };
  await assert.rejects(c.getAccountInfo(), (e) => e.code === 'TERMINAL_INSTANCE_NOT_FOUND');
  failNext = { code: 'TRADE_RETCODE_NO_MONEY', message: 'Not enough money' };
  await assert.rejects(c.orderSend({ symbol: 'EURUSD', action: 'BUY', volume: 0.1 }), (e) => e.code === 'TRADE_RETCODE_NO_MONEY');
});

test('orderSend sends the order type asked for and returns the server result', async () => {
  const c = client();
  await c.connect({ user: 123, password: 'p', server: 'MetaQuotes-Demo' });
  for (const [action, type] of [['BUY', 'TMT5_ORDER_TYPE_BUY'], ['SELL_LIMIT', 'TMT5_ORDER_TYPE_SELL_LIMIT'], ['BUY_STOP', 'TMT5_ORDER_TYPE_BUY_STOP']]) {
    seen.length = 0;
    const res = await c.orderSend({ symbol: 'EURUSD', action, volume: 0.2, price: 1.2, stopLoss: 1.1, takeProfit: 1.3 });
    const sent = seen.find(s => s.method === 'orderSend').request;
    assert.strictEqual(sent.getOperation(), TradingHelperPb.TMT5_ENUM_ORDER_TYPE[type]);
    assert.strictEqual(sent.getStopLoss(), 1.1);
    assert.deepStrictEqual(res, { ticket: 88, retcode: 10009, deal: 77, order: 88, volume: 0.2, price: 1.1234, comment: 'Request executed' });
  }
});

test('subscribeQuotes delivers the ticks of the stream until unsubscribed', async () => {
  const c = client();
  await c.connect({ user: 123, password: 'p', server: 'MetaQuotes-Demo' });
  const quotes = [];
  const errors = [];
  await new Promise((resolve) => {
    const sub = c.subscribeQuotes(['EURUSD', 'GBPUSD'], (q) => {
      quotes.push(q);
      if (quotes.length === 4) { sub.unsubscribe(); resolve(); }
    }, (e) => errors.push(e));
  });
  await new Promise((r) => setTimeout(r, 50));
  assert.deepStrictEqual(quotes.map(q => q.symbol), ['EURUSD', 'GBPUSD', 'EURUSD', 'GBPUSD']);
  assert.strictEqual(quotes[1].bid, 1.101);
  assert.strictEqual(quotes[2].time, Date.UTC(2026, 9, 15, 12, 0, 2));
  assert.deepStrictEqual(errors, []);
});

test('getId asks the server and fails when the server refuses', async () => {
  seen.length = 0;
  assert.strictEqual(await client().getId(123, 'p'), TERMINAL);
  assert.strictEqual(seen[0].request.getUser(), '123');
  failNext = { code: 'INVALID_ACCOUNT', message: 'Invalid account' };
  await assert.rejects(client().getId(123, 'wrong'), (e) => e.code === 'INVALID_ACCOUNT');
});

test('subscribeQuotes reports an error reply of the stream instead of a quote', async () => {
  const c = client();
  await c.connect({ user: 123, password: 'p', server: 'MetaQuotes-Demo' });
  const quotes = [];
  const error = await new Promise((resolve) => {
    const sub = c.subscribeQuotes(['NOSUCH'], (q) => quotes.push(q), (e) => { sub.unsubscribe(); resolve(e); });
  });
  assert.ok(error instanceof MrpcError);
  assert.strictEqual(error.code, 'SYMBOL_NOT_FOUND');
  assert.deepStrictEqual(quotes, []);
});

test('DisconnectRequest delete parameter support', () => {
  const req = new ConnectionPb.DisconnectRequest();
  req.setDelete(true);
  const bytes = req.serializeBinary();
  const deserialized = ConnectionPb.DisconnectRequest.deserializeBinary(bytes);
  assert.strictEqual(deserialized.getDelete(), true);
});

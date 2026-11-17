// A trade is sent exactly once: a transport failure of a trade call is a TradeOutcomeUnknownError (the trade may have
// been executed), never a re-send. Also the API-key and trade-outcome flags of MrpcError and the *_utc times of the
// mapped messages. In-process gRPC server, no network.
const { test, before, after } = require('node:test');
const assert = require('node:assert');
const grpc = require('@grpc/grpc-js');
const { MT5Client, MrpcError, TradeOutcomeUnknownError } = require('../src/index.js');
const ConnectionGrpc = require('../package/mt5-term-api-connection_grpc_pb');
const ConnectionPb = require('../package/mt5-term-api-connection_pb');
const AccountHelperGrpc = require('../package/mt5-term-api-account-helper_grpc_pb');
const AccountHelperPb = require('../package/mt5-term-api-account-helper_pb');
const TradingHelperGrpc = require('../package/mt5-term-api-trading-helper_grpc_pb');
const TradingHelperPb = require('../package/mt5-term-api-trading-helper_pb');
const MarketInfoGrpc = require('../package/mt5-term-api-market-info_grpc_pb');
const MarketInfoPb = require('../package/mt5-term-api-market-info_pb');
const ErrorPb = require('../package/mrpc-mt5-error_pb');
const { Timestamp } = require('google-protobuf/google/protobuf/timestamp_pb');

const calls = {};               // method -> number of calls the server got
let transportFail = null;       // { code, details } -> the next call fails at the transport level
let replyError = null;          // { code, message, type, tradeIntCode } -> the next call answers with an error reply
const ts = (s) => { const t = new Timestamp(); t.setSeconds(s); return t; };

// Answers the call: a transport failure, an error reply or `makeData()`.
const handler = (method, ReplyType, makeData) => (call, cb) => {
  calls[method] = (calls[method] || 0) + 1;
  if (transportFail) { const f = transportFail; transportFail = null; return cb(f); }
  const reply = new ReplyType();
  if (replyError) {
    const err = new ErrorPb.Error();
    err.setErrorCode(replyError.code);
    err.setErrorMessage(replyError.message || '');
    if (replyError.type) err.setType(replyError.type);
    if (replyError.tradeIntCode) err.setMqlErrorTradeIntCode(replyError.tradeIntCode);
    replyError = null;
    reply.setError(err);
  } else {
    reply.setData(makeData(call));
  }
  cb(null, reply);
};

let server;
let port;

before(async () => {
  server = new grpc.Server();
  server.addService(ConnectionGrpc.ConnectionService, {
    connectEx: handler('connectEx', ConnectionPb.ConnectExReply, () => { const d = new ConnectionPb.ConnectData(); d.setTerminalInstanceGuid('t-1'); return d; }),
  });
  server.addService(TradingHelperGrpc.TradingHelperService, {
    orderSend: handler('orderSend', TradingHelperPb.OrderSendReply, () => { const d = new TradingHelperPb.OrderSendData(); d.setReturnedCode(10009); d.setOrder(88); return d; }),
    orderModify: handler('orderModify', TradingHelperPb.OrderModifyReply, () => { const d = new TradingHelperPb.OrderModifyData(); d.setReturnedCode(10009); return d; }),
    orderClose: handler('orderClose', TradingHelperPb.OrderCloseReply, () => { const d = new TradingHelperPb.OrderCloseData(); d.setReturnedCode(10009); return d; }),
  });
  server.addService(AccountHelperGrpc.AccountHelperService, {
    openedOrders: handler('openedOrders', AccountHelperPb.OpenedOrdersReply, () => {
      const d = new AccountHelperPb.OpenedOrdersData();
      const withUtc = new AccountHelperPb.PositionInfo();
      withUtc.setTicket(1); withUtc.setOpenTime(ts(1700010800)); withUtc.setOpenTimeUtc(ts(1700000000));
      const withoutUtc = new AccountHelperPb.PositionInfo();
      withoutUtc.setTicket(2); withoutUtc.setOpenTime(ts(1700010800));
      d.addPositionInfos(withUtc); d.addPositionInfos(withoutUtc);
      const o = new AccountHelperPb.OpenedOrderInfo();
      o.setTicket(3); o.setTimeSetup(ts(1700010800)); o.setTimeSetupUtc(ts(1700000000));
      d.addOpenedOrders(o);
      return d;
    }),
    positionsHistory: handler('positionsHistory', AccountHelperPb.PositionsHistoryReply, () => {
      const d = new AccountHelperPb.PositionsHistoryData();
      const p = new AccountHelperPb.PositionHistoryInfo();
      p.setPositionTicket(4); p.setOpenTime(ts(1700010800)); p.setCloseTime(ts(1700014400));
      p.setOpenTimeUtc(ts(1700000000)); p.setCloseTimeUtc(ts(1700003600));
      d.addHistoryPositions(p);
      return d;
    }),
    orderHistory: handler('orderHistory', AccountHelperPb.OrderHistoryReply, () => {
      const d = new AccountHelperPb.OrdersHistoryData();
      const h = new AccountHelperPb.HistoryData();
      const deal = new AccountHelperPb.DealHistoryData();
      deal.setTicket(5); deal.setTime(ts(1700010800)); deal.setTimeUtc(ts(1700000000));
      h.setHistoryDeal(deal);
      d.addHistoryData(h);
      return d;
    }),
  });
  server.addService(MarketInfoGrpc.MarketInfoService, {
    priceHistory: handler('priceHistory', MarketInfoPb.PriceHistoryReply, () => {
      const d = new MarketInfoPb.PriceHistoryData();
      const withUtc = new MarketInfoPb.PriceBar(); withUtc.setTime(1700010800); withUtc.setTimeUtc(1700000000);
      const withoutUtc = new MarketInfoPb.PriceBar(); withoutUtc.setTime(1700011100);
      d.addBars(withUtc); d.addBars(withoutUtc);
      return d;
    }),
  });
  port = await new Promise((resolve, reject) =>
    server.bindAsync('127.0.0.1:0', grpc.ServerCredentials.createInsecure(), (err, p) => (err ? reject(err) : resolve(p))));
});

after(() => server.forceShutdown());

const connected = async () => {
  const c = new MT5Client('127.0.0.1', port, 'key-1');
  await c.connect({ user: 1, password: 'p', server: 'MetaQuotes-Demo' });
  for (const k of Object.keys(calls)) delete calls[k];
  return c;
};

for (const [name, method, run] of [
  ['OrderSend', 'orderSend', (c) => c.orderSend({ symbol: 'EURUSD', action: 'BUY', volume: 0.1 })],
  ['OrderModify', 'orderModify', (c) => c.orderModify({ ticket: 88, stopLoss: 1.0 })],
  ['OrderClose', 'orderClose', (c) => c.orderClose({ ticket: 88, volume: 0.05 })],
]) {
  for (const code of [grpc.status.UNAVAILABLE, grpc.status.DEADLINE_EXCEEDED, grpc.status.UNKNOWN, grpc.status.INTERNAL]) {
    test(`${name} failing with gRPC ${grpc.status[code]} is sent once and is TRADE_OUTCOME_UNKNOWN`, async () => {
      const c = await connected();
      transportFail = { code, details: 'connection reset' };
      const err = await run(c).then(() => null, (e) => e);
      assert.strictEqual(calls[method], 1);
      assert.ok(err instanceof TradeOutcomeUnknownError && err instanceof Error);
      assert.ok(!(err instanceof MrpcError));
      assert.strictEqual(err.errorCode, 'TRADE_OUTCOME_UNKNOWN');
      assert.strictEqual(TradeOutcomeUnknownError.CODE, 'TRADE_OUTCOME_UNKNOWN');
      assert.strictEqual(err.isTradeOutcomeUnknown, true);
      assert.strictEqual(err.operation, name);
      assert.strictEqual(err.code, code);          // the gRPC status, as before
      assert.strictEqual(err.grpcCode, code);
      assert.strictEqual(err.details, 'connection reset');
      assert.strictEqual(err.cause.code, code);
      assert.match(err.message, new RegExp(`^TRADE_OUTCOME_UNKNOWN: ${name} failed with gRPC ${grpc.status[code]} .*NOT re-sent`));
    });
  }
}

test('a trade refused before the terminal (TERMINAL_INSTANCE_NOT_FOUND) is an MrpcError of that code, outcome known', async () => {
  const c = await connected();
  replyError = { code: 'TERMINAL_INSTANCE_NOT_FOUND', message: 'no terminal' };
  const err = await c.orderSend({ symbol: 'EURUSD', action: 'BUY', volume: 0.1 }).then(() => null, (e) => e);
  assert.strictEqual(calls.orderSend, 1);
  assert.ok(err instanceof MrpcError);
  assert.strictEqual(err.code, 'TERMINAL_INSTANCE_NOT_FOUND');
  assert.strictEqual(err.operation, 'OrderSend');
  assert.strictEqual(err.isTradeOutcomeUnknown, false);
  assert.strictEqual(err.isApiKeyError, false);
});

test('a refused API key is one call, keeps its code and is flagged', async () => {
  const c = await connected();
  replyError = { code: 'API_KEY_INVALID', message: 'Unknown API key' };
  const err = await c.orderSend({ symbol: 'EURUSD', action: 'BUY', volume: 0.1 }).then(() => null, (e) => e);
  assert.strictEqual(calls.orderSend, 1);
  assert.strictEqual(calls.connectEx, undefined);
  assert.ok(err instanceof MrpcError);
  assert.strictEqual(err.code, 'API_KEY_INVALID');
  assert.strictEqual(err.isApiKeyError, true);
  assert.strictEqual(err.isTradeOutcomeUnknown, false);
  replyError = { code: 'API_KEY_REQUIRED', message: 'no key' };
  await assert.rejects(c.positionsHistory(new Date(0), new Date()), (e) => e.isApiKeyError && e.code === 'API_KEY_REQUIRED');
});

test('a transport failure whose status names a refused API key is not wrapped (the trade was refused)', async () => {
  const c = await connected();
  transportFail = { code: grpc.status.UNKNOWN, details: 'API_KEY_INVALID' };
  const err = await c.orderSend({ symbol: 'EURUSD', action: 'BUY', volume: 0.1 }).then(() => null, (e) => e);
  assert.strictEqual(calls.orderSend, 1);
  assert.ok(!(err instanceof TradeOutcomeUnknownError));
  assert.strictEqual(err.code, grpc.status.UNKNOWN);
});

test('an in-band timeout of a trade is an unknown outcome; the same on a read is not', async () => {
  const c = await connected();
  replyError = { code: 'MRPC_TIMEOUT', message: 'timed out', type: ErrorPb.ErrorType.MRPC_TIMEOUT };
  await assert.rejects(c.orderClose({ ticket: 88 }), (e) => e instanceof MrpcError && e.isTradeOutcomeUnknown && e.operation === 'OrderClose');
  replyError = { code: 'MQL5_SIDE_TRADE_ERROR', message: 'Request timeout', tradeIntCode: 10031 };
  await assert.rejects(c.orderSend({ symbol: 'EURUSD', action: 'BUY', volume: 0.1 }), (e) => e.isTradeOutcomeUnknown && e.code === 'MQL5_SIDE_TRADE_ERROR');
  replyError = { code: 'MQL5_SIDE_TRADE_ERROR', message: 'No money', tradeIntCode: 10019 };
  await assert.rejects(c.orderSend({ symbol: 'EURUSD', action: 'BUY', volume: 0.1 }), (e) => e instanceof MrpcError && !e.isTradeOutcomeUnknown);
  replyError = { code: 'MRPC_TIMEOUT', message: 'timed out', type: ErrorPb.ErrorType.MRPC_TIMEOUT };
  await assert.rejects(c.openedOrders(), (e) => e instanceof MrpcError && !e.isTradeOutcomeUnknown && e.operation === undefined);
});

test('a read failing at the transport level rejects with the gRPC error itself, as before', async () => {
  const c = await connected();
  transportFail = { code: grpc.status.UNAVAILABLE, details: 'down' };
  const err = await c.openedOrders().then(() => null, (e) => e);
  assert.strictEqual(calls.openedOrders, 1);
  assert.ok(!(err instanceof TradeOutcomeUnknownError) && !(err instanceof MrpcError));
  assert.strictEqual(err.code, grpc.status.UNAVAILABLE);
  assert.strictEqual(err.isTradeOutcomeUnknown, undefined);
  assert.strictEqual((await c.openedOrders()).positions.length, 2); // the next call works
});

test('the *_utc times are mapped when the server sends them and absent otherwise', async () => {
  const c = await connected();
  const bars = await c.priceHistory('EURUSD', 'M5', { maxBars: 2 });
  assert.strictEqual(bars[0].time, 1700010800);
  assert.strictEqual(bars[0].timeUtc, 1700000000);
  assert.ok(!('timeUtc' in bars[1]));
  const { positions, orders } = await c.openedOrders();
  assert.strictEqual(positions[0].openTimeUtc, 1700000000);
  assert.ok(!('openTimeUtc' in positions[1]));
  assert.strictEqual(orders[0].timeSetupUtc, 1700000000);
  assert.ok(!('timeExpirationUtc' in orders[0]));
  const [h] = await c.positionsHistory(new Date(0), new Date());
  assert.deepStrictEqual([h.openTime, h.closeTime, h.openTimeUtc, h.closeTimeUtc], [1700010800, 1700014400, 1700000000, 1700003600]);
  const { deals } = await c.orderHistory(new Date(0), new Date());
  assert.deepStrictEqual([deals[0].time, deals[0].timeUtc], [1700010800, 1700000000]);
});

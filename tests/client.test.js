const test = require('node:test');
const assert = require('node:assert');
const { MT5Client } = require('../src/index.js');

test('MT5Client initialization', () => {
  const client = new MT5Client('mt5.mrpc.pro', 443);
  assert.ok(client);
});

test('MT5Client connect and account info', async () => {
  const client = new MT5Client('mt5.mrpc.pro', 443);
  const connected = await client.connect(12345678, 'demo_password');
  assert.strictEqual(connected, true);

  const info = await client.getAccountInfo();
  assert.strictEqual(info.login, 12345678);
  assert.strictEqual(info.currency, 'USD');
  assert.strictEqual(info.balance, 10000.0);
  assert.strictEqual(info.leverage, 100);
});

test('MT5Client orderSend', async () => {
  const client = new MT5Client('mt5.mrpc.pro', 443);
  const res = await client.orderSend({
    symbol: 'EURUSD',
    action: 'BUY',
    volume: 0.1,
    price: 1.0850,
    comment: 'Test buy'
  });
  assert.strictEqual(res.retcode, 0);
  assert.strictEqual(res.volume, 0.1);
  assert.strictEqual(res.comment, 'Test buy');
});

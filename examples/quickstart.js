/*══════════════════════════════════════════════════════════════════════════════
 FILE: quickstart.js - the smallest end-to-end NodeMT5 program

 Connect → read balance & price → open a tiny demo order → close it.

 RUN:
   npm run build                                  # compile the SDK (emits src/*.js)
   MT5_LOGIN=... MT5_PASSWORD=... MT5_SERVER=MetaQuotes-Demo node examples/quickstart.js
   # or pass an API key:  node examples/quickstart.js <API_KEY>
══════════════════════════════════════════════════════════════════════════════*/

'use strict';

const { MT5Sugar } = require('../src');

async function main() {
  const apiKey = process.argv[2] || process.env.MRPC_API_KEY || null; // null → TRIAL
  const login = Number(process.env.MT5_LOGIN);
  const password = process.env.MT5_PASSWORD;
  const server = process.env.MT5_SERVER || 'MetaQuotes-Demo';
  const symbol = process.env.MT5_SYMBOL || 'EURUSD';

  if (!login || !password) {
    console.error('Set MT5_LOGIN and MT5_PASSWORD (and optionally MT5_SERVER / MT5_SYMBOL).');
    process.exit(2);
  }

  const sugar = MT5Sugar.create('mt5.mrpc.pro', 443, apiKey);
  await sugar.quickConnect(login, password, server);
  console.log('✓ connected to', server);

  console.log(`balance ${(await sugar.getBalance()).toFixed(2)}   equity ${(await sugar.getEquity()).toFixed(2)}`);
  console.log(`${symbol}  bid ${await sugar.getBid(symbol)}  ask ${await sugar.getAsk(symbol)}`);

  try {
    const ticket = await sugar.buyMarket(symbol, 0.01);   // ⚠ tiny demo order
    console.log(`opened #${ticket}`);
    await sugar.closePosition(ticket);
    console.log('closed');
  } catch (e) {
    console.log(`order rejected: ${e.message} (market closed? try a 24/7 symbol like BTCUSD)`);
  }

  sugar.account().close();
}

main().catch((e) => { console.error('error:', e.message || e); process.exit(1); });

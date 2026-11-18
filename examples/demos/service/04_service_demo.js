/*══════════════════════════════════════════════════════════════════════════════
 FILE: 04_service_demo.js - MID-LEVEL (MT5Service) FRIENDLY DEMO

 PURPOSE:
   The same reads as the low-level demo, but through MT5Service: plain arguments
   in, typed objects out (AccountInfo, Quote, SymbolParams, Position…) — no
   protobuf, no getXxx() accessors.

 📚 WHAT THIS DEMO COVERS (3 regions):
   REGION 1: ACCOUNT  - getAccountSummary → AccountInfo
   REGION 2: MARKET   - getSymbolTick → Quote · getSymbolParams → SymbolParams · priceHistory → Bar[]
   REGION 3: STATE    - getPositionsTotal · getOpenedOrders → { positions, orders }

 🚀 RUN:  node examples/demos/main.js 4     ℹ️ SAFE: read-only.
══════════════════════════════════════════════════════════════════════════════*/

'use strict';

const { printSub } = require('../helpers/connection');

module.exports = async function demo(sugar, cfg) {
  const svc = sugar.service();                  // the friendly MT5Service
  const sym = cfg.testSymbol;

  // ════════════════════════════════════════════════════════════════════════════
  //  REGION 1: ACCOUNT
  // ════════════════════════════════════════════════════════════════════════════
  printSub('1. account');

  // ──────────────────────────────────────────────────────────────────────────────
  //  1.1  getAccountSummary()  — all account data as one friendly object
  //       Returns: AccountInfo { login, currency, balance, equity, freeMargin,
  //                              leverage, tradeMode, serverTime, … }.
  // ──────────────────────────────────────────────────────────────────────────────
  const a = await svc.getAccountSummary();
  console.log(`  ${a.login}  ${a.currency}  balance ${a.balance.toFixed(2)}  equity ${a.equity.toFixed(2)}  free ${a.freeMargin.toFixed(2)}  ${a.tradeMode}`);

  // ════════════════════════════════════════════════════════════════════════════
  //  REGION 2: MARKET DATA
  // ════════════════════════════════════════════════════════════════════════════
  printSub('2. price, spec & bars');

  // ──────────────────────────────────────────────────────────────────────────────
  //  2.1  getSymbolTick(sym)   — latest tick     → Quote { bid, ask, last, time }
  //  2.2  getSymbolParams(sym) — contract spec   → SymbolParams { digits, point, … }
  // ──────────────────────────────────────────────────────────────────────────────
  await svc.symbolSelect(sym, true);
  const q = await svc.getSymbolTick(sym);
  const sp = await svc.getSymbolParams(sym);
  console.log(`  ${sym}  bid ${q.bid}  ask ${q.ask}  digits ${sp.digits}  contract ${sp.contractSize}  volMin ${sp.volumeMin}`);

  // ──────────────────────────────────────────────────────────────────────────────
  //  2.3  priceHistory(sym, timeframe, { maxBars }) — OHLC bars
  //       Returns: Bar[] { time, open, high, low, close, tickVolume, … }.
  // ──────────────────────────────────────────────────────────────────────────────
  const bars = await svc.priceHistory(sym, 'H1', { maxBars: 5 });
  for (const b of bars) console.log(`  ${new Date(b.time * 1000).toISOString().slice(0, 16)}  O ${b.open}  H ${b.high}  L ${b.low}  C ${b.close}`);

  // ════════════════════════════════════════════════════════════════════════════
  //  REGION 3: OPEN STATE
  // ════════════════════════════════════════════════════════════════════════════
  printSub('3. open state');

  // ──────────────────────────────────────────────────────────────────────────────
  //  3.1  getPositionsTotal()  — number of open positions   → number
  //  3.2  getOpenedOrders()    — positions + pending orders → { positions, orders }
  // ──────────────────────────────────────────────────────────────────────────────
  console.log(`  open positions: ${await svc.getPositionsTotal()}`);
  const { positions, orders } = await svc.getOpenedOrders();
  console.log(`  positions ${positions.length}  pending orders ${orders.length}`);
  for (const p of positions.slice(0, 5)) console.log(`    #${p.ticket} ${p.symbol} vol ${p.volume} P/L ${p.profit.toFixed(2)}`);
};

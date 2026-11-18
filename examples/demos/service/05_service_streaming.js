/*══════════════════════════════════════════════════════════════════════════════
 FILE: 05_service_streaming.js - MID-LEVEL (MT5Service) STREAMING DEMO

 PURPOSE:
   Friendly streams: streamTicks delivers typed Quote objects (not raw protobuf);
   streamTradeUpdates delivers trade events. Each returns a { unsubscribe } handle.

 📚 WHAT THIS DEMO COVERS (2 streams):
   • streamTicks(symbols, cb)   → Quote per tick
   • streamTradeUpdates(cb)     → trade events (background)

 🚀 RUN:  node examples/demos/main.js 5     ℹ️ SAFE: read-only.
══════════════════════════════════════════════════════════════════════════════*/

'use strict';

const { printSub } = require('../helpers/connection');

module.exports = async function demo(sugar, cfg) {
  const svc = sugar.service();
  const sym = cfg.testSymbol;
  await svc.symbolSelect(sym, true);

  // ──────────────────────────────────────────────────────────────────────────────
  //  1  streamTicks([sym], cb, onError)  — subscribe to live ticks
  //     cb receives a friendly Quote { symbol, bid, ask, last, time } per tick.
  //     Returns: { unsubscribe } — keep it to cancel later.
  // ──────────────────────────────────────────────────────────────────────────────
  printSub(`streamTicks(['${sym}']) → Quote — streaming ~5s`);
  let n = 0;
  const ticks = svc.streamTicks([sym], (q) => {
    n++; if (n <= 5) console.log(`  ${q.symbol}  bid ${q.bid}  ask ${q.ask}  @ ${new Date(q.time).toISOString().slice(11, 23)}`);
  }, (e) => console.log(`  tick error: ${e.message || e}`));

  // ──────────────────────────────────────────────────────────────────────────────
  //  2  streamTradeUpdates(cb, onError)  — subscribe to trade events
  //     cb receives the raw OnTradeData per event. Returns: { unsubscribe }.
  // ──────────────────────────────────────────────────────────────────────────────
  printSub('streamTradeUpdates() — trade events (background)');
  const trades = svc.streamTradeUpdates(() => console.log('  trade update'),
    (e) => console.log(`  trade error: ${e.message || e}`));

  // ── let them run, then cancel both ──────────────────────────────────────────
  await new Promise((r) => setTimeout(r, 5000));
  ticks.unsubscribe();
  trades.unsubscribe();
  console.log(`\n  received ${n} ticks in 5s`);
};

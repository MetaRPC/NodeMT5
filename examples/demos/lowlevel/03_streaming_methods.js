/*══════════════════════════════════════════════════════════════════════════════
 FILE: 03_streaming_methods.js - LOW-LEVEL (MT5Account) STREAMING DEMO

 PURPOSE:
   Opens two raw server streams on MT5Account and prints what arrives for a few
   seconds, then unsubscribes. The callback receives raw *Data; the returned
   { unsubscribe } cancels the stream.

 📚 WHAT THIS DEMO COVERS (2 streams):
   • onSymbolTick(symbols, cb)  - live Bid/Ask ticks
   • onTrade(cb)                - trade events

 🚀 RUN:  node examples/demos/main.js 3     ℹ️ SAFE: read-only.
══════════════════════════════════════════════════════════════════════════════*/

'use strict';

const { printSub } = require('../helpers/connection');

module.exports = async function demo(sugar, cfg) {
  const acc = sugar.account();
  const sym = cfg.testSymbol;
  await acc.symbolSelect(sym, true);

  // ──────────────────────────────────────────────────────────────────────────────
  //  1  onSymbolTick([sym], cb, onError)  — subscribe to live ticks
  //     cb receives raw OnSymbolTickData per tick; getSymbolTick() → the tick
  //     (getBid()/getAsk()). Returns: { unsubscribe } — keep it to cancel later.
  // ──────────────────────────────────────────────────────────────────────────────
  printSub(`onSymbolTick(['${sym}']) — streaming ~5s`);
  let ticks = 0;
  const tickSub = acc.onSymbolTick([sym], (data) => {
    const t = data.getSymbolTick && data.getSymbolTick();
    if (t) { ticks++; if (ticks <= 5) console.log(`  tick ${sym}  bid ${t.getBid()}  ask ${t.getAsk()}`); }
  }, (e) => console.log(`  tick stream error: ${e.message || e}`));

  // ──────────────────────────────────────────────────────────────────────────────
  //  2  onTrade(cb, onError)  — subscribe to trade events (orders/positions/deals)
  //     cb receives raw OnTradeData per event. Returns: { unsubscribe }.
  // ──────────────────────────────────────────────────────────────────────────────
  printSub('onTrade() — order/position/deal events (background)');
  const tradeSub = acc.onTrade((_data) => console.log('  trade event received'),
    (e) => console.log(`  trade stream error: ${e.message || e}`));

  // ── let them run, then cancel both ──────────────────────────────────────────
  await new Promise((r) => setTimeout(r, 5000));
  tickSub.unsubscribe();
  tradeSub.unsubscribe();
  console.log(`\n  received ${ticks} ticks in 5s`);
};

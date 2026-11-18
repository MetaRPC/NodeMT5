/*══════════════════════════════════════════════════════════════════════════════
 FILE: 06_sugar_basics.js - HIGH-LEVEL (MT5Sugar) BASICS DEMO

 PURPOSE:
   The simplest way to talk to MT5: one-liners for connection health, account
   balances and prices. `sugar` arrives already connected (main.js connected it).
   Read-only — nothing is traded here (see 07 for trading).

 📚 WHAT THIS DEMO COVERS (3 regions):
   REGION 1: CONNECTION      - isConnected() / ping()
   REGION 2: BALANCE & MARGIN - getBalance / getEquity / getFreeMargin / getProfit
   REGION 3: PRICES          - getBid / getAsk / getSpread / getPriceInfo

 🔄 API LEVELS:
   HIGH-LEVEL  (MT5Sugar)   - THIS FILE
   MID-LEVEL   (MT5Service) - sugar.service()
   LOW-LEVEL   (MT5Account) - sugar.account()

 🚀 RUN:  node examples/demos/main.js 6     ℹ️ SAFE: read-only.
══════════════════════════════════════════════════════════════════════════════*/

'use strict';

const { printSub } = require('../helpers/connection');

module.exports = async function demo(sugar, cfg) {
  const sym = cfg.testSymbol;

  // ════════════════════════════════════════════════════════════════════════════
  //  REGION 1: CONNECTION
  // ════════════════════════════════════════════════════════════════════════════
  printSub('1. connection');

  // ──────────────────────────────────────────────────────────────────────────────
  //  1.1  isConnected()  — is the session up?
  //       Returns: boolean (true after a successful connect).
  //  1.2  ping()         — cheap liveness probe (CheckConnect → terminal alive?)
  //       Returns: Promise<boolean>.
  // ──────────────────────────────────────────────────────────────────────────────
  console.log(`  isConnected ${sugar.isConnected()}   ping ${await sugar.ping()}`);

  // ════════════════════════════════════════════════════════════════════════════
  //  REGION 2: BALANCE & MARGIN   (each reads one fresh AccountSummary)
  // ════════════════════════════════════════════════════════════════════════════
  printSub('2. balance & margin (one-liners)');

  // ──────────────────────────────────────────────────────────────────────────────
  //  2.1  getBalance()    — realized funds, excludes floating P/L     → number
  //  2.2  getEquity()     — balance + floating P/L                    → number
  //  2.3  getFreeMargin() — margin available for new positions        → number
  //  2.4  getProfit()     — current floating profit (equity − balance)→ number
  // ──────────────────────────────────────────────────────────────────────────────
  console.log(`  balance ${(await sugar.getBalance()).toFixed(2)}`);
  console.log(`  equity  ${(await sugar.getEquity()).toFixed(2)}`);
  console.log(`  free    ${(await sugar.getFreeMargin()).toFixed(2)}`);
  console.log(`  profit  ${(await sugar.getProfit()).toFixed(2)}`);

  // ════════════════════════════════════════════════════════════════════════════
  //  REGION 3: PRICES
  // ════════════════════════════════════════════════════════════════════════════
  printSub('3. prices');

  // ──────────────────────────────────────────────────────────────────────────────
  //  3.1  getBid(symbol) / getAsk(symbol) — latest bid / ask          → number
  //  3.2  getSpread(symbol)               — ask − bid (price units)   → number
  // ──────────────────────────────────────────────────────────────────────────────
  console.log(`  ${sym} bid ${await sugar.getBid(sym)}  ask ${await sugar.getAsk(sym)}  spread ${(await sugar.getSpread(sym)).toFixed(5)}`);

  // ──────────────────────────────────────────────────────────────────────────────
  //  3.3  getPriceInfo(symbol) — bid / ask / spread-in-pips / time in one snapshot
  //       Returns: PriceInfo { symbol, bid, ask, spreadPips, time }.
  // ──────────────────────────────────────────────────────────────────────────────
  const p = await sugar.getPriceInfo(sym);
  console.log(`  priceInfo: bid ${p.bid}  ask ${p.ask}  spread ${p.spreadPips.toFixed(1)} pips`);
};

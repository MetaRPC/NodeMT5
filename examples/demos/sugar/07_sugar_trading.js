/*══════════════════════════════════════════════════════════════════════════════
 FILE: 07_sugar_trading.js - HIGH-LEVEL (MT5Sugar) TRADING DEMO  ⚠ live demo order

 PURPOSE:
   Open a tiny market position with one line, inspect it, then close it. Sugar
   order helpers return the resulting ticket and throw MrpcError on a broker
   rejection (retcode ≠ 10009).

 📚 WHAT THIS DEMO COVERS (1 region, 3 steps):
   • buyMarket()          - open a market BUY
   • getPositionByTicket()- read the open position back
   • closePosition()      - close it

 ⚠ SAFETY: opens cfg.testVolume on the DEMO account and closes it before returning.
 🚀 RUN:  node examples/demos/main.js 7
══════════════════════════════════════════════════════════════════════════════*/

'use strict';

const { printSub } = require('../helpers/connection');

module.exports = async function demo(sugar, cfg) {
  const sym = cfg.testSymbol;
  await sugar.service().symbolSelect(sym, true);

  printSub(`open → inspect → close  (${sym} ${cfg.testVolume})`);

  // ──────────────────────────────────────────────────────────────────────────────
  //  1  buyMarket(symbol, volume)   ⚠ opens a REAL market position on the demo acct
  //     Returns: Promise<number> — the position ticket.
  //     Throws:  MrpcError if the broker rejects it (e.g. market closed).
  // ──────────────────────────────────────────────────────────────────────────────
  let ticket;
  try {
    ticket = await sugar.buyMarket(sym, cfg.testVolume);
    console.log(`  ✓ opened position #${ticket}`);
  } catch (e) {
    console.log(`  rejected: ${e.message} (market closed? try a 24/7 symbol like BTCUSD)`);
    return;
  }

  // ──────────────────────────────────────────────────────────────────────────────
  //  2  getPositionByTicket(ticket)  — fetch the open position
  //     Returns: Promise<Position | undefined>.
  // ──────────────────────────────────────────────────────────────────────────────
  const pos = await sugar.getPositionByTicket(ticket);
  if (pos) console.log(`  #${pos.ticket} ${pos.symbol} vol ${pos.volume} @ ${pos.priceOpen}  P/L ${pos.profit.toFixed(2)}`);

  // ──────────────────────────────────────────────────────────────────────────────
  //  3  closePosition(ticket)  ⚠ closes the position in full
  //     Returns: Promise<boolean>.  Throws MrpcError on a rejection.
  // ──────────────────────────────────────────────────────────────────────────────
  await sugar.closePosition(ticket);
  console.log('  ✓ closed');
};

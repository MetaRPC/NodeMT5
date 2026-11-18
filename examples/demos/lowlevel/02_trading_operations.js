/*══════════════════════════════════════════════════════════════════════════════
 FILE: 02_trading_operations.js - LOW-LEVEL (MT5Account) TRADING DEMO  ⚠ live demo order

 PURPOSE:
   Raw trading on MT5Account: build a protobuf OrderSendRequest, send it, read the
   retcode (10009 = done), then close the position with an OrderCloseRequest. On
   MT5 a filled market order's ticket IS the position ticket.

 📚 WHAT THIS DEMO COVERS (3 steps):
   • symbolInfoTick()  - current price (raw)
   • orderSend()       - market BUY (raw OrderSendRequest)
   • orderClose()      - close the position (raw OrderCloseRequest)

 ⚠ SAFETY: opens cfg.testVolume on the DEMO account and closes it before returning.
 🚀 RUN:  node examples/demos/main.js 2
══════════════════════════════════════════════════════════════════════════════*/

'use strict';

const { printSub, sdk } = require('../helpers/connection');
const { TradingHelperPb } = sdk;

module.exports = async function demo(sugar, cfg) {
  const acc = sugar.account();
  const sym = cfg.testSymbol;

  // ──────────────────────────────────────────────────────────────────────────────
  //  1  symbolSelect(sym) + symbolInfoTick(sym) — make the symbol live & read price
  //     Returns: raw MrpcMqlTick (getBid()/getAsk()).
  // ──────────────────────────────────────────────────────────────────────────────
  printSub(`prepare ${sym}`);
  await acc.symbolSelect(sym, true);
  const tick = await acc.symbolInfoTick(sym);
  console.log(`  ${sym}  bid ${tick.getBid()}  ask ${tick.getAsk()}`);

  // ──────────────────────────────────────────────────────────────────────────────
  //  2  orderSend(req)  ⚠ sends a REAL market BUY
  //     Build a TradingHelperPb.OrderSendRequest: setSymbol / setOperation
  //     (TMT5_ENUM_ORDER_TYPE) / setVolume. Returns: raw OrderSendData —
  //     getReturnedCode() (10009 = done), getOrder()/getDeal() (ticket), getPrice().
  // ──────────────────────────────────────────────────────────────────────────────
  printSub('orderSend() — market BUY (raw OrderSendRequest)');
  const req = new TradingHelperPb.OrderSendRequest();
  req.setSymbol(sym);
  req.setOperation(TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY);
  req.setVolume(cfg.testVolume);
  const res = await acc.orderSend(req);
  const retcode = res.getReturnedCode();
  const ticket = Number(res.getOrder()) || Number(res.getDeal());
  console.log(`  retcode ${retcode} (${res.getReturnedCodeDescription()})  ticket ${ticket}  price ${res.getPrice()}`);
  if (retcode !== 10009) { console.log('  not filled — nothing to close'); return; }

  // ──────────────────────────────────────────────────────────────────────────────
  //  3  orderClose(req)  ⚠ closes the position
  //     Build a TradingHelperPb.OrderCloseRequest: setTicket(ticket).
  //     Returns: raw OrderCloseData — getReturnedCode() (10009 = done).
  // ──────────────────────────────────────────────────────────────────────────────
  printSub('orderClose() — close the position');
  const close = new TradingHelperPb.OrderCloseRequest();
  close.setTicket(ticket);
  const cr = await acc.orderClose(close);
  console.log(`  retcode ${cr.getReturnedCode()} (${cr.getReturnedCodeDescription()})`);
};

/*══════════════════════════════════════════════════════════════════════════════
 FILE: 01_general_operations.js - LOW-LEVEL (MT5Account) INFORMATION DEMO

 PURPOSE:
   Read-only tour of the low-level layer: account, symbols, positions & market
   data straight off MT5Account, where methods return raw protobuf *Data (you read
   fields with getXxx() accessors). No trading here (see 02).

 📚 WHAT THIS DEMO COVERS (4 regions):
   REGION 1: ACCOUNT  - accountSummary / accountInfoDouble / accountInfoString
   REGION 2: SYMBOLS  - symbolsTotal / symbolSelect / symbolInfoTick / symbolParamsMany
   REGION 3: STATE    - positionsTotal / openedOrders

 🔄 API LEVELS:  LOW (THIS FILE, raw gRPC) → MID (MT5Service) → HIGH (MT5Sugar)
 🚀 RUN:  node examples/demos/main.js 1     ℹ️ SAFE: read-only.
══════════════════════════════════════════════════════════════════════════════*/

'use strict';

const { printSub, sdk } = require('../helpers/connection');
const { AccountInformationPb } = sdk;

module.exports = async function demo(sugar, cfg) {
  const acc = sugar.account();                 // the low-level MT5Account
  const sym = cfg.testSymbol;

  // ════════════════════════════════════════════════════════════════════════════
  //  REGION 1: ACCOUNT INFORMATION
  // ════════════════════════════════════════════════════════════════════════════
  printSub('1. account');

  // ──────────────────────────────────────────────────────────────────────────────
  //  1.1  accountSummary()  — all account data in one call
  //       Returns: raw AccountSummaryData. Read fields with getAccountLogin(),
  //       getAccountBalance(), getAccountEquity(), getAccountLeverage(), …
  // ──────────────────────────────────────────────────────────────────────────────
  const s = await acc.accountSummary();
  console.log(`  login ${s.getAccountLogin()}  ${s.getAccountCurrency()}  balance ${s.getAccountBalance().toFixed(2)}  equity ${s.getAccountEquity().toFixed(2)}  leverage 1:${s.getAccountLeverage()}`);

  // ──────────────────────────────────────────────────────────────────────────────
  //  1.2  accountInfoDouble(propertyId)  — one ACCOUNT_* double
  //       propertyId from AccountInformationPb.AccountInfoDoublePropertyType.
  //       Returns: number.
  //  1.3  accountInfoString(propertyId)  — one ACCOUNT_* string    → string
  // ──────────────────────────────────────────────────────────────────────────────
  const P = AccountInformationPb.AccountInfoDoublePropertyType;
  const [margin, freeMargin] = await Promise.all([
    acc.accountInfoDouble(P.ACCOUNT_MARGIN),
    acc.accountInfoDouble(P.ACCOUNT_MARGIN_FREE),
  ]);
  const server = await acc.accountInfoString(AccountInformationPb.AccountInfoStringPropertyType.ACCOUNT_SERVER);
  console.log(`  margin ${margin.toFixed(2)}  free margin ${freeMargin.toFixed(2)}  server ${server}`);

  // ════════════════════════════════════════════════════════════════════════════
  //  REGION 2: SYMBOL INFORMATION & OPERATIONS
  // ════════════════════════════════════════════════════════════════════════════
  printSub('2. symbols');

  // ──────────────────────────────────────────────────────────────────────────────
  //  2.1  symbolsTotal()        — count of symbols        → SymbolsTotalData (getTotal())
  //  2.2  symbolSelect(sym,true)— add to Market Watch     → boolean
  //  2.3  symbolInfoTick(sym)   — latest tick             → raw MrpcMqlTick (getBid/getAsk)
  // ──────────────────────────────────────────────────────────────────────────────
  const total = await acc.symbolsTotal();
  console.log(`  broker exposes ${Number(total.getTotal())} symbols`);
  await acc.symbolSelect(sym, true);
  const tick = await acc.symbolInfoTick(sym);
  console.log(`  ${sym}  bid ${tick.getBid()}  ask ${tick.getAsk()}  last ${tick.getLast()}`);

  // ──────────────────────────────────────────────────────────────────────────────
  //  2.4  symbolParamsMany(sym) — contract spec of one/all symbols
  //       Returns: raw data; iterate getSymbolInfosList() → getDigits()/getPoint()/…
  // ──────────────────────────────────────────────────────────────────────────────
  const params = await acc.symbolParamsMany(sym);
  const info = params.getSymbolInfosList().find((x) => x.getName() === sym) || params.getSymbolInfosList()[0];
  if (info) {
    console.log(`  digits ${info.getDigits()}  point ${info.getPoint()}  contract ${info.getTradeContractSize()}  volMin ${info.getVolumeMin()}  volStep ${info.getVolumeStep()}`);
  }

  // ════════════════════════════════════════════════════════════════════════════
  //  REGION 3: POSITIONS & ORDERS (current state)
  // ════════════════════════════════════════════════════════════════════════════
  printSub('3. open state');

  // ──────────────────────────────────────────────────────────────────────────────
  //  3.1  positionsTotal() — number of open positions   → PositionsTotalData
  //  3.2  openedOrders()   — positions + pending orders → OpenedOrdersData
  //       (getPositionInfosList() / getOpenedOrdersList()).
  // ──────────────────────────────────────────────────────────────────────────────
  const pt = await acc.positionsTotal();
  console.log(`  open positions: ${Number(pt.getTotalPositions())}`);
  const opened = await acc.openedOrders();
  console.log(`  positions in list: ${opened.getPositionInfosList().length}   pending orders: ${opened.getOpenedOrdersList().length}`);
};

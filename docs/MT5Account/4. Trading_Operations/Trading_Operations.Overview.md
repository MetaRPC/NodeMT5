# MT5Account · Trading Operations — Overview

> Place, modify and close orders, and validate / size a trade before sending it. `orderSend` / `orderModify` / `orderClose` live on `mt5_term_api.TradingHelper`; `orderCheck` / `orderCalcMargin` / `orderCalcProfit` on `mt5_term_api.TradeFunctions`.

## 📁 What lives here

* **[OrderSend](./OrderSend.md)** — send a market or pending order.
* **[OrderModify](./OrderModify.md)** — change SL/TP (and price/expiration for pendings).
* **[OrderClose](./OrderClose.md)** — close a position (full/partial) or delete a pending order.
* **[OrderCheck](./OrderCheck.md)** — validate an order before sending (margin, free margin after deal…).
* **[OrderCalcMargin](./OrderCalcMargin.md)** — required margin for a prospective order.
* **[OrderCalcProfit](./OrderCalcProfit.md)** — profit of a prospective trade.

---

## 🛑 Trade result: the retcode

> MT5 trades carry a **trade-server return code**. **`10009` = DONE (success).** `orderSend` / `orderModify` / `orderClose` **reject** only on an API/transport error; a *broker rejection* comes back **in the result** with a non-`10009` `getReturnedCode()`. Always check it.

```ts
const d = await account.orderSend(req);
if (d.getReturnedCode() === 10009) console.log('filled, ticket', d.getOrder());
else console.log('rejected:', d.getReturnedCode(), d.getReturnedCodeDescription());
```

Common codes: `10009` DONE · `10004` REQUOTE · `10006` REJECTED · `10013` INVALID · `10014` INVALID_VOLUME · `10015` INVALID_PRICE · `10016` INVALID_STOPS · `10019` NO_MONEY · `10018` MARKET_CLOSED. See [Return Codes](../../All_Guides/RETURN_CODES_REFERENCE.md).

---

## 🧱 Order type enum — `TMT5_ENUM_ORDER_TYPE`

```
TMT5_ORDER_TYPE_BUY = 0   SELL = 1   BUY_LIMIT = 2   SELL_LIMIT = 3
BUY_STOP = 4   SELL_STOP = 5   BUY_STOP_LIMIT = 6   SELL_STOP_LIMIT = 7   CLOSE_BY = 8
```

Access as `TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY`.

---

## ❌ Cross-refs & gotchas

* **Validate first.** MT5 *does* have pre-trade calculators — use `orderCheck` / `orderCalcMargin` before sending.
* **Stops level.** SL/TP closer than `SYMBOL_TRADE_STOPS_LEVEL` → retcode `10016`. See [SymbolInfoInteger](../2.%20Symbol_information/SymbolInfoInteger.md).
* **Market must be open** — `10018` out of session.
* **Deal vs order ticket.** A filled market order's `getOrder()` equals the resulting position ticket; `getDeal()` is the deal id.

---

## 🟢 Minimal snippets

```ts
// Place a BUY market order with SL/TP
import { TradingHelperPb } from '@metarpc/nodemt5';
const OT = TradingHelperPb.TMT5_ENUM_ORDER_TYPE;

const req = new TradingHelperPb.OrderSendRequest();
req.setSymbol('EURUSD');
req.setOperation(OT.TMT5_ORDER_TYPE_BUY);
req.setVolume(0.10);
req.setStopLoss(1.08000);
req.setTakeProfit(1.09000);

const d = await account.orderSend(req);
if (d.getReturnedCode() === 10009) console.log(`✅ Order placed: #${d.getOrder()}`);
else console.log(`❌ Rejected: ${d.getReturnedCodeDescription()} (code ${d.getReturnedCode()})`);
```

```ts
// Validate before sending (OrderCheck wraps a MrpcMqlTradeRequest; 0 = would be accepted)
import { TradeFunctionsPb, TradingHelperPb } from '@metarpc/nodemt5';

const tick = await account.symbolInfoTick('EURUSD');
const mql = new TradeFunctionsPb.MrpcMqlTradeRequest();
mql.setSymbol('EURUSD');
mql.setOrderType(TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY);
mql.setVolume(0.10);
mql.setPrice(tick.getAsk());

const checkReq = new TradeFunctionsPb.OrderCheckRequest();
checkReq.setMqlTradeRequest(mql);
const r = (await account.orderCheck(checkReq)).getMqlTradeCheckResult();
console.log(r.getReturnedCode() === 0 ? '✅ Validation passed' : `❌ ${r.getComment()}`);
```

```ts
// Calculate required margin, then compare with free margin
import { TradeFunctionsPb, TradingHelperPb, AccountInformationPb } from '@metarpc/nodemt5';

const mReq = new TradeFunctionsPb.OrderCalcMarginRequest();
mReq.setOrderType(TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY);
mReq.setSymbol('EURUSD');
mReq.setVolume(1.0);
mReq.setOpenPrice(1.08500);
const margin = (await account.orderCalcMargin(mReq)).getMargin();

const free = await account.accountInfoDouble(AccountInformationPb.AccountInfoDoublePropertyType.ACCOUNT_MARGIN_FREE);
console.log(margin <= free ? `✅ Sufficient margin ($${margin.toFixed(2)})` : `❌ Need $${margin.toFixed(2)}, have $${free.toFixed(2)}`);
```

```ts
// Modify SL/TP of an open position
import { TradingHelperPb } from '@metarpc/nodemt5';

const req = new TradingHelperPb.OrderModifyRequest();
req.setTicket(ticket);
req.setStopLoss(1.08200);
req.setTakeProfit(1.09500);
const d = await account.orderModify(req);
console.log(d.getReturnedCode() === 10009 ? '✅ SL/TP modified' : `❌ ${d.getReturnedCodeDescription()}`);
```

```ts
// Close a position (omit / 0 volume = full close)
import { TradingHelperPb } from '@metarpc/nodemt5';

const req = new TradingHelperPb.OrderCloseRequest();
req.setTicket(ticket);
req.setSlippage(20);
const d = await account.orderClose(req);
console.log(d.getReturnedCode() === 10009 ? `✅ Closed (mode ${d.getCloseMode()})` : `❌ ${d.getReturnedCodeDescription()}`);
```

```ts
// Estimate profit for a prospective move (+50 pips)
import { TradeFunctionsPb, TradingHelperPb } from '@metarpc/nodemt5';

const req = new TradeFunctionsPb.OrderCalcProfitRequest();
req.setOrderType(TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY);
req.setSymbol('EURUSD');
req.setVolume(0.10);
req.setOpenPrice(1.08500);
req.setClosePrice(1.09000);
console.log(`Potential profit: $${(await account.orderCalcProfit(req)).getProfit().toFixed(2)}`);
```

### 🧩 Full pre-trade workflow (size → check → send)

```ts
import { TradeFunctionsPb, TradingHelperPb, AccountInformationPb } from '@metarpc/nodemt5';
const OT = TradingHelperPb.TMT5_ENUM_ORDER_TYPE;
const symbol = 'EURUSD', volume = 0.10, sl = 1.08000, tp = 1.09000;

const tick = await account.symbolInfoTick(symbol);

// 1) margin vs free margin
const mReq = new TradeFunctionsPb.OrderCalcMarginRequest();
mReq.setOrderType(OT.TMT5_ORDER_TYPE_BUY); mReq.setSymbol(symbol); mReq.setVolume(volume); mReq.setOpenPrice(tick.getAsk());
const margin = (await account.orderCalcMargin(mReq)).getMargin();
const free = await account.accountInfoDouble(AccountInformationPb.AccountInfoDoublePropertyType.ACCOUNT_MARGIN_FREE);
if (margin > free) throw new Error('Insufficient margin');

// 2) validate
const mql = new TradeFunctionsPb.MrpcMqlTradeRequest();
mql.setSymbol(symbol); mql.setOrderType(OT.TMT5_ORDER_TYPE_BUY); mql.setVolume(volume); mql.setPrice(tick.getAsk()); mql.setStopLoss(sl); mql.setTakeProfit(tp);
const checkReq = new TradeFunctionsPb.OrderCheckRequest(); checkReq.setMqlTradeRequest(mql);
const chk = (await account.orderCheck(checkReq)).getMqlTradeCheckResult();
if (chk.getReturnedCode() !== 0) throw new Error(`Validation failed: ${chk.getComment()}`);

// 3) send
const sReq = new TradingHelperPb.OrderSendRequest();
sReq.setSymbol(symbol); sReq.setOperation(OT.TMT5_ORDER_TYPE_BUY); sReq.setVolume(volume); sReq.setStopLoss(sl); sReq.setTakeProfit(tp);
const res = await account.orderSend(sReq);
if (res.getReturnedCode() === 10009) console.log(`✅ Order placed: #${res.getOrder()}`);
else throw new Error(`Order failed: ${res.getReturnedCodeDescription()}`);
```

---

## See also

* **Read side:** [OpenedOrders](../3.%20Position_Orders_Information/OpenedOrders.md) — the positions you act on.
* **Friendly layer:** [`MT5Service.placeOrder` / `modifyOrder` / `closeOrder` / `checkOrder` / `calculateMargin` / `calculateProfit`](../../MT5Service/MT5Service.Overview.md); one-liners in [`MT5Sugar`](../../MT5Sugar/MT5Sugar.API_Overview.md).

---

**Back to:** [MT5Account — Master Overview](../MT5Account.Master.Overview.md)

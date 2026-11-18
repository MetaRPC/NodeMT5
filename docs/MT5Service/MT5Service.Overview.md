# MT5Service — Mid-Level API Overview

> A convenient wrapper over **[MT5Account](../MT5Account/MT5Account.Master.Overview.md)** that returns **clean TypeScript objects** instead of protobuf messages.

**🧩 API Layer:** **MID-LEVEL** — the balance between low-level ([MT5Account](../MT5Account/MT5Account.Master.Overview.md)) and high-level ([MT5Sugar](../MT5Sugar/MT5Sugar.API_Overview.md)).

---

## ⚠️ Same calls, cleaner results

MT5Service and MT5Account make the **same gRPC calls** — the difference is the **return type**, not the logic.

```ts
// Low-level (MT5Account) — you unwrap the protobuf:
import { MT5Account, AccountInformationPb } from '@metarpc/nodemt5';
const d = await account.accountInfoDouble(
  AccountInformationPb.AccountInfoDoublePropertyType.ACCOUNT_BALANCE,
);
const balance = d.getRequestedValue();     // ← unwrap

// Mid-level (MT5Service) — you get the value:
const balance = await service.getAccountDouble(
  AccountInformationPb.AccountInfoDoublePropertyType.ACCOUNT_BALANCE,
);                                          // ← direct number
```

**What the mid layer does for you**

* ✅ Builds the protobuf `*Request` from plain arguments.
* ✅ Unwraps the `*Data` reply (`getRequestedValue()`, `getTotal()`, lists…).
* ✅ Converts protobuf `Timestamp` → JS epoch (`number`, ms where noted).
* ✅ Returns typed objects (`AccountInfo`, `Quote`, `Position`, …), not protobuf.
* ✅ Decodes enums to friendly strings (`tradeMode: 'DEMO' | 'REAL'`, `action: 'BUY'`).

Both layers are equally valid — pick the altitude you prefer. For one-liners, go up again to [MT5Sugar](../MT5Sugar/MT5Sugar.API_Overview.md).

---

## 🏗️ Architecture layers

```
┌─────────────────────────────────────────────┐
│  MT5Sugar      one-liners, risk-based sizing  │  ← highest
├─────────────────────────────────────────────┤
│  MT5Service    plain args → typed objects     │  ← YOU ARE HERE
├─────────────────────────────────────────────┤
│  MT5Account    raw protobuf / gRPC            │  ← lowest
└─────────────────────────────────────────────┘
```

Each layer **owns** the one below it: `MT5Sugar` owns an `MT5Service`, which owns an `MT5Account`. From here you can always drop down with `service.account()`.

---

## 🧱 Construction & lifecycle

```ts
import { MT5Service } from '@metarpc/nodemt5';

// create() builds the MT5Account underneath for you
const service = MT5Service.create('mt5.mrpc.pro', 443);
await service.connect(login, 'password', 'MetaQuotes-Demo');

const acc = await service.getAccountSummary();   // AccountInfo
console.log(acc.balance, acc.currency, acc.server);

await service.disconnect();
```

* `MT5Service.create(host?, port?, apiKey?, id?)` → a service wrapping a fresh `MT5Account` (defaults `mt5.mrpc.pro:443`).
* `service.account()` → the underlying `MT5Account` (drop down a layer any time).
* `service.connect(login, password, server)` — accepts a `{ user, password, server }` options object too.
* `service.disconnect(deleteOnDisconnect?)` — pass `true` to free the terminal (otherwise it stays warm).

> **Tuning timeouts.** Unary reads use the underlying `account.callTimeoutMs` (default `30000`); set `service.account().callTimeoutMs = 60000` to change it.

---

## 📁 Method groups (40+ methods)

| # | Group | Methods |
| - | ----- | ------- |
| 1 | **[Account Methods](./1.%20Account_Methods.md)** (4) | `getAccountSummary` · `getAccountDouble` · `getAccountInteger` · `getAccountString` |
| 2 | **[Symbol Methods](./2.%20Symbol_Methods.md)** (17) | `getSymbolsTotal` · `symbolExist` · `getSymbolName` · `symbolSelect` · `isSymbolSynchronized` · `ensureSymbol` · `getSymbolTick` · `getSymbolDouble/Integer/String` · `getSymbolParams` · `getSymbolParamsMany` · `getSymbolMarginRate` · `getSymbolSessionQuote/Trade` · `priceHistory` |
| 3 | **[Position & Order Methods](./3.%20Position_Orders_Methods.md)** (6) | `getPositionsTotal` · `getOpenedOrders` · `getOpenedTickets` · `getPositions` · `getOrderHistory` · `getPositionsHistory` |
| 4 | **[Trading Methods](./4.%20Trading_Methods.md)** (6) | `placeOrder` · `modifyOrder` · `closeOrder` · `checkOrder` · `calculateMargin` · `calculateProfit` |
| 5 | **[Market Depth Methods](./5.%20MarketDepth_Methods.md)** (3) | `subscribeMarketDepth` · `getMarketDepth` · `unsubscribeMarketDepth` |
| 6 | **[Streaming Methods](./6.%20Streaming_Methods.md)** (5) | `streamTicks` · `streamTradeUpdates` · `streamPositionProfits` · `streamOpenedTickets` · `streamTransactions` |

---

## 🧾 The typed objects (DTOs)

All plain TS interfaces (each group page documents the full shape):

| DTO | From | Key fields |
| --- | ---- | ---------- |
| **`AccountInfo`** | `getAccountSummary` | `login, balance, equity, freeMargin, marginLevel, leverage, currency, tradeMode, serverTime` |
| **`Quote`** | `getSymbolTick`, tick stream | `symbol, bid, ask, last, volume, time (ms)` |
| **`SymbolParams`** | `getSymbolParams(Many)` | ~30 fields: `digits, point, spread, contractSize, volumeMin/Max/Step, …` |
| **`Bar`** | `priceHistory` | `time, open, high, low, close, tickVolume, realVolume` |
| **`Position`** / **`PendingOrder`** | `getOpenedOrders` / `getPositions` | `ticket, symbol, type, volume, priceOpen, profit, magic, …` |
| **`HistoryOrder`** / **`HistoryDeal`** / **`HistoryPosition`** | history methods | closed orders, deals, positions with P&L |
| **`OrderRequest`** → **`OrderResult`** | `placeOrder` | request: `symbol, action, volume, stopLoss?, …`; result: `ticket, retcode, deal, price` |
| **`CloseRequest`** → **`CloseResult`** | `closeOrder` | `ticket, volume?` → `retcode, closeMode` |
| **`OrderCheckResult`** | `checkOrder` | `returnedCode (0 = ok), margin, marginFree, marginLevel, comment` |
| **`SymbolMarginRate`** · **`SessionTime`** · **`BookInfo`** | margin/session/DOM | `initial/maintenanceMarginRate` · `from/to` · `type, price, volume, volumeReal` |

---

## 💡 Usage examples

### 1) Account snapshot

```ts
const a = await service.getAccountSummary();
console.log(`${a.name} #${a.login} · ${a.balance} ${a.currency} · 1:${a.leverage}`);
```

### 2) Current price

```ts
const t = await service.getSymbolTick('EURUSD');
console.log(`Bid ${t.bid}, Ask ${t.ask}, Spread ${(t.ask - t.bid).toFixed(5)}`);
```

### 3) Validate → place an order

```ts
const chk = await service.checkOrder({ symbol: 'EURUSD', action: 'BUY', volume: 0.1 });
if (chk.returnedCode !== 0) throw new Error(chk.comment);

const r = await service.placeOrder({ symbol: 'EURUSD', action: 'BUY', volume: 0.1, stopLoss: 1.08, takeProfit: 1.09 });
console.log(r.retcode === 10009 ? `✅ ticket #${r.ticket}` : `❌ ${r.retcodeDescription}`);
```

### 4) Live price + floating P&L

```ts
const t = service.streamTicks(['EURUSD'], (q) => console.log('tick', q.bid, q.ask));
const p = service.streamPositionProfits((data) => {
  const total = data.getUpdatedPositionsList().reduce((s: number, x: any) => s + x.getProfit(), 0);
  console.log('floating:', total.toFixed(2));
});
// later: t.unsubscribe(); p.unsubscribe();
```

---

## 📊 Low-level vs mid-level

| Aspect | MT5Account (low) | MT5Service (mid) |
| ------ | ---------------- | ---------------- |
| Arguments | build a `*Request`, set fields | plain args / objects |
| Return | protobuf `*Data`, call `getXxx()` | typed JS object |
| Enums | `...Pb.Enum.CONSTANT` | friendly strings (`'BUY'`, `'DEMO'`) |
| Timestamps | `getSeconds()` / raw | JS epoch `number` |
| Best for | every field, full control | everyday app code |

---

## 💡 When to use which

**Use MT5Service (recommended)** for application code — dashboards, bots, reports — where typed objects read cleaner and you don't need protobuf internals.

**Drop to MT5Account** when you need a field the DTO doesn't expose, or full control over the exact request. You can always reach it via `service.account()`.

**Go up to MT5Sugar** when you want one-liners (`buy`, `sell`, `price`, `closeAll`) with smart defaults and risk-based sizing.

---

## 🔧 Best practices

1. **Handle errors with try/catch.** Every method rejects on failure — a server rejection throws `MrpcError` (carrying `mqlCode` / `tradeCode`), a transport failure throws the gRPC error.

   ```ts
   try {
     const a = await service.getAccountSummary();
   } catch (e) {
     console.error('failed:', (e as Error).message);
   }
   ```

2. **Check the trade retcode.** `placeOrder` / `modifyOrder` / `closeOrder` reject only on transport errors — a broker rejection comes back in the result. **`10009` = DONE**; `checkOrder.returnedCode === 0` = would be accepted.

3. **Tune the timeout** via `service.account().callTimeoutMs` for slow links or heavy history pulls.

4. **Always `unsubscribe()`** streaming handles when done — they don't stop on their own.

5. **Free the terminal** with `service.disconnect(true)` at the end of a one-shot run (a trial allows one terminal per IP).

---

## 📚 Related

- **Down:** [MT5Account — Master Overview](../MT5Account/MT5Account.Master.Overview.md) — raw protobuf, full control.
- **Up:** [MT5Sugar — API Overview](../MT5Sugar/MT5Sugar.API_Overview.md) — one-line helpers.
- **Groups:** [Account](./1.%20Account_Methods.md) · [Symbol](./2.%20Symbol_Methods.md) · [Positions & Orders](./3.%20Position_Orders_Methods.md) · [Trading](./4.%20Trading_Methods.md) · [Market Depth](./5.%20MarketDepth_Methods.md) · [Streaming](./6.%20Streaming_Methods.md).
- **Reference:** [Return Codes](../All_Guides/RETURN_CODES_REFERENCE.md) · [Concurrency Model](../All_Guides/CONCURRENCY_MODEL.md).

---

## 🎯 Summary

MT5Service is the everyday layer: the **same gRPC calls** as MT5Account, but plain arguments in and typed objects out — no manual requests, no `.getXxx()` chains, enums decoded to friendly strings, timestamps as JS epochs. Drop to MT5Account for full control, go up to MT5Sugar for one-liners.

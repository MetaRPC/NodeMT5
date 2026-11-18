# MT5Account · Symbol Information — Overview

> Live quotes, symbol properties, trading rules and Market-Watch management. Discover what's tradable, read a price, and pull a symbol's contract details.

All of these live on `mt5_term_api.MarketInfo`. Each resolves with raw `*Data` (read fields with `getXxx()`), or rejects with `MrpcError`.

## 📁 What lives here

### Inventory & Market Watch
* **[SymbolsTotal](./SymbolsTotal.md)** — count of symbols (all, or only Market-Watch).
* **[SymbolExist](./SymbolExist.md)** — does a symbol exist (and is it custom)?
* **[SymbolName](./SymbolName.md)** — symbol name by index.
* **[SymbolSelect](./SymbolSelect.md)** — add/remove a symbol from Market Watch.
* **[SymbolIsSynchronized](./SymbolIsSynchronized.md)** — are the symbol's rates synced with the server?

### Prices & properties
* **[SymbolInfoTick](./SymbolInfoTick.md)** — the latest tick (bid/ask/last/volume + times) — the reliable price source.
* **[SymbolInfoDouble](./SymbolInfoDouble.md)** — one SYMBOL_* double (bid, ask, point, tick value…).
* **[SymbolInfoInteger](./SymbolInfoInteger.md)** — one SYMBOL_* integer (digits, spread, stops level…).
* **[SymbolInfoString](./SymbolInfoString.md)** — one SYMBOL_* string (description, currencies, path…).

---

## 🧭 Plain English

* **Need the price right now?** → `symbolInfoTick` (bid/ask + a timestamp; the `symbolInfo*` property prices can be stale).
* **What can I trade?** → `symbolsTotal` + `symbolName`, or `symbolExist`.
* **Why is my symbol silent?** → it's probably not in Market Watch; `symbolSelect(symbol, true)` (and `symbolIsSynchronized` to confirm it's ready).
* **One property?** → `symbolInfoDouble` / `Integer` / `String` with the matching property enum.

---

## Quick choose

| If you need…                         | Use                     | Returns                | Enums |
| ------------------------------------ | ----------------------- | ---------------------- | ----- |
| Latest price (reliable)              | `symbolInfoTick`        | `MrpcMqlTick`          | — |
| Count of symbols                     | `symbolsTotal`          | `SymbolsTotalData`     | — |
| Existence / custom flag              | `symbolExist`           | `{ exists, isCustom }` | — |
| Name by index                        | `symbolName`            | `SymbolNameData`       | — |
| Add / remove from Market Watch       | `symbolSelect`          | `SymbolSelectData`     | — |
| Rates synced?                        | `symbolIsSynchronized`  | `SymbolIsSynchronizedData` | — |
| One double / integer / string prop   | `symbolInfo{Double,Integer,String}` | `number` / `string` | **Input:** `SymbolInfo*Property` |

---

## ❌ Cross-refs & gotchas

* **Select before you read.** A symbol absent from Market Watch may return a stale/empty quote — call `symbolSelect(symbol, true)` first, then `symbolIsSynchronized`.
* **Tick vs property price.** `symbolInfoTick` is the live source; `symbolInfoDouble(SYMBOL_BID/ASK)` can lag.
* **Bid vs Ask.** BUY orders fill at **Ask**, SELL orders at **Bid** — spread = `ask − bid`.
* **Digits & Point.** `SYMBOL_DIGITS` is the decimal places (EURUSD = 5, USDJPY = 3); `SYMBOL_POINT` is the minimal price step (0.00001 for a 5-digit pair).
* **Volume limits.** Check `SYMBOL_VOLUME_MIN` / `MAX` / `STEP` before sending an order (or read them in bulk via `symbolParamsMany`).
* **Full spec in one call.** For *all* ~30 symbol fields at once, use [`symbolParamsMany`](../6.%20Additional_Methods/SymbolParamsMany.md) (group 6) instead of many `symbolInfo*` calls.

---

## 🟢 Minimal snippets

```ts
// Current quote (bid, ask, spread)
const tick = await account.symbolInfoTick('EURUSD');
console.log(`EURUSD: Bid=${tick.getBid()}, Ask=${tick.getAsk()}, Spread=${(tick.getAsk() - tick.getBid()).toFixed(5)}`);
```

```ts
// List all available symbols
import { MarketInfoPb } from '@metarpc/nodemt5';

const totalReq = new MarketInfoPb.SymbolsTotalRequest();
totalReq.setMode(false); // false = all symbols; true = Market Watch only
const total = (await account.symbolsTotal(totalReq)).getTotal();
console.log(`Available symbols: ${total}`);

for (let i = 0; i < total; i++) {
  const nameReq = new MarketInfoPb.SymbolNameRequest();
  nameReq.setIndex(i);
  nameReq.setSelected(false);
  console.log(`${i + 1}. ${(await account.symbolName(nameReq)).getName()}`);
}
```

```ts
// Add a symbol to Market Watch
const ok = await account.symbolSelect('GBPUSD', true); // returns boolean
console.log(ok ? '✅ GBPUSD added to Market Watch' : '❌ Failed to add GBPUSD');
```

```ts
// Check whether a symbol exists
import { MarketInfoPb } from '@metarpc/nodemt5';

const existReq = new MarketInfoPb.SymbolExistRequest();
existReq.setName('EURUSD');
const e = await account.symbolExist(existReq);
console.log(e.getExists() ? '✅ Symbol exists' : '❌ Symbol not found', '(custom:', e.getIsCustom(), ')');
```

```ts
// Read symbol properties — digits & point
import { MarketInfoPb } from '@metarpc/nodemt5';

const dReq = new MarketInfoPb.SymbolInfoIntegerRequest();
dReq.setSymbol('EURUSD');
dReq.setType(MarketInfoPb.SymbolInfoIntegerProperty.SYMBOL_DIGITS);
const digits = (await account.symbolInfoInteger(dReq)).getValue();

const pReq = new MarketInfoPb.SymbolInfoDoubleRequest();
pReq.setSymbol('EURUSD');
pReq.setType(MarketInfoPb.SymbolInfoDoubleProperty.SYMBOL_POINT);
const point = (await account.symbolInfoDouble(pReq)).getValue();

console.log(`EURUSD: Digits=${digits}, Point=${point}`);
```

---

## See also

* **Full spec:** [SymbolParamsMany](../6.%20Additional_Methods/SymbolParamsMany.md) · [TickValueWithSize](../6.%20Additional_Methods/TickValueWithSize.md).
* **Friendly layer:** [`MT5Service.getSymbolTick()` / `getSymbolParams()` / `getSymbolDouble()`](../../MT5Service/MT5Service.Overview.md).

---

**Back to:** [MT5Account — Master Overview](../MT5Account.Master.Overview.md)

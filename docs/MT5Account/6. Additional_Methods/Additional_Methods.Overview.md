# MT5Account · Additional Methods — Overview

> Deeper symbol data that doesn't fit the basic info group: the full contract spec in bulk, tick value & size for P&L, margin rates, and trading / quote sessions.

`symbolParamsMany` / `tickValueWithSize` live on `mt5_term_api.AccountHelper`; the margin-rate and session methods on `mt5_term_api.MarketInfo`.

## 📁 What lives here

* **[SymbolParamsMany](./SymbolParamsMany.md)** — full contract spec (~30 fields) for one or all symbols in a single call.
* **[TickValueWithSize](./TickValueWithSize.md)** — tick value / tick size / contract size for several symbols — the inputs for client-side P&L and sizing.
* **[SymbolInfoMarginRate](./SymbolInfoMarginRate.md)** — initial / maintenance margin rates for a symbol and order type.
* **[SymbolInfoSessionQuote](./SymbolInfoSessionQuote.md)** — quote-session times for a weekday.
* **[SymbolInfoSessionTrade](./SymbolInfoSessionTrade.md)** — trade-session times for a weekday.

---

## 🧭 Plain English

* **Need everything about a symbol?** → `symbolParamsMany` (one call, ~30 fields) instead of many `symbolInfo*` calls.
* **Computing P&L / sizing yourself?** → `tickValueWithSize` + the symbol's point.
* **Margin per lot?** → `symbolInfoMarginRate`.
* **When does the symbol trade?** → `symbolInfoSessionTrade` / `symbolInfoSessionQuote`.

---

## Quick choose

| If you need…                         | Use                     | Returns | Key inputs |
| ------------------------------------ | ----------------------- | ------- | ---------- |
| Full contract spec (one / all)       | `symbolParamsMany`      | `SymbolParamsManyData` (`getSymbolInfosList()` → `SymbolParameters`) | optional `symbol` |
| Tick value / size for P&L            | `tickValueWithSize`     | `TickValueWithSizeData` (`getSymbolTickSizeInfosList()` → `TickSizeSymbol`) | `setSymbolNamesList([...])` |
| Margin rates for an order type       | `symbolInfoMarginRate`  | `SymbolInfoMarginRateData` (`getInitialMarginRate()`, `getMaintenanceMarginRate()`) | `setSymbol`, `setOrderType` |
| Quote-session times for a weekday    | `symbolInfoSessionQuote`| `SymbolInfoSessionQuoteData` (`getFrom()`, `getTo()`) | `setSymbol`, `setDayOfWeek`, `setSessionIndex` |
| Trade-session times for a weekday    | `symbolInfoSessionTrade`| `SymbolInfoSessionTradeData` (`getFrom()`, `getTo()`) | `setSymbol`, `setDayOfWeek`, `setSessionIndex` |

---

## ❌ Cross-refs & gotchas

* **`symbolParamsMany` is the efficient path.** One call returns the full spec (~30 fields) for one symbol (pass the name) or *all* symbols (omit it) — cheaper than many `symbolInfo*` round-trips.
* **Session times are seconds since midnight.** `getFrom()` / `getTo()` are offsets within the day (server time), not timestamps — divide by 3600 for the hour.
* **Day of week.** `setDayOfWeek(n)` — `0` = Sunday … `6` = Saturday.
* **Session index.** Most symbols have one session (index `0`); some split day/night into several.
* **Tick-value getters are lowercase.** `TickSizeSymbol` uses `getTradetickvalue()`, `getTradeticksize()`, `getTradecontractsize()` — not camelCase.
* **Margin rates are multipliers.** `symbolInfoMarginRate` can differ per order type (BUY/SELL).

---

## 🟢 Minimal snippets

```ts
// Margin rates for a symbol + order type
import { MarketInfoPb, TradingHelperPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.SymbolInfoMarginRateRequest();
req.setSymbol('EURUSD');
req.setOrderType(TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY);
const d = await account.symbolInfoMarginRate(req);
console.log(`Initial: ${d.getInitialMarginRate()}, Maintenance: ${d.getMaintenanceMarginRate()}`);
```

```ts
// Trading-session times for Monday (seconds since midnight → hours)
import { MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.SymbolInfoSessionTradeRequest();
req.setSymbol('EURUSD');
req.setDayOfWeek(1);   // Monday
req.setSessionIndex(0);
const s = await account.symbolInfoSessionTrade(req);
console.log(`Mon session: ${(s.getFrom() / 3600).toFixed(2)}h → ${(s.getTo() / 3600).toFixed(2)}h`);
```

```ts
// Complete symbol parameters — one symbol
const d = await account.symbolParamsMany('EURUSD');
const s = d.getSymbolInfosList()[0];
console.log(`${s.getName()}: Bid=${s.getBid()}, Ask=${s.getAsk()}, Digits=${s.getDigits()}, Point=${s.getPoint()}`);
console.log(`Volume: ${s.getVolumeMin()}–${s.getVolumeMax()} (step ${s.getVolumeStep()}), contract ${s.getTradeContractSize()}`);
```

```ts
// Batch a set of majors from one all-symbols call
const majors = new Set(['EURUSD', 'GBPUSD', 'USDJPY', 'USDCHF', 'AUDUSD', 'USDCAD', 'NZDUSD']);
const all = await account.symbolParamsMany();
for (const sp of all.getSymbolInfosList()) {
  if (!majors.has(sp.getName())) continue;
  console.log(`${sp.getName().padEnd(8)} bid=${sp.getBid()} ask=${sp.getAsk()} spread=${sp.getSpread()}`);
}
```

```ts
// Tick value & size for P&L / sizing
import { AccountHelperPb } from '@metarpc/nodemt5';

const req = new AccountHelperPb.TickValueWithSizeRequest();
req.setSymbolNamesList(['EURUSD', 'XAUUSD']);
for (const i of (await account.tickValueWithSize(req)).getSymbolTickSizeInfosList()) {
  console.log(`${i.getName()}: tickValue=${i.getTradetickvalue()}, tickSize=${i.getTradeticksize()}, contract=${i.getTradecontractsize()}`);
}
```

---

## See also

* [Symbol Information — Overview](../2.%20Symbol_information/Symbol_Information.Overview.md) — the single-property reads.
* **Friendly layer:** [`MT5Service.getSymbolParamsMany` / `getSymbolMarginRate` / `getSymbolSessionQuote/Trade`](../../MT5Service/MT5Service.Overview.md).

---

**Back to:** [MT5Account — Master Overview](../MT5Account.Master.Overview.md)

# MT5Account · Account Information — Overview

> Account balance, equity, margin, leverage, currency, trade mode and server time — the complete snapshot in one call, or a single property at a time. Use this page to choose the right API for reading account state.

These methods are **read-only**. `accountSummary` lives on `mt5_term_api.AccountHelper`; the `accountInfo*` single-property methods on `mt5_term_api.AccountInformation`. Each resolves with the raw `*Data` (read fields with `getXxx()`), or rejects with `MrpcError`.

## 📁 What lives here

* **[AccountSummary](./AccountSummary.md)** — **all account info** at once (login, balance, equity, credit, leverage, currency, margin / free margin / margin level / margin mode, server time). Returns the `MrpcEnumAccountTradeMode` and `MrpcEnumAccountMarginMode` enums.
* **[AccountInfoDouble](./AccountInfoDouble.md)** — a **single double** property (balance, equity, margin, profit, credit…). Takes an `AccountInfoDoublePropertyType`.
* **[AccountInfoInteger](./AccountInfoInteger.md)** — a **single integer** property (login, leverage, limit orders…). Takes an `AccountInfoIntegerPropertyType`.
* **[AccountInfoString](./AccountInfoString.md)** — a **single string** property (name, server, currency, company). Takes an `AccountInfoStringPropertyType`.

---

## 🧭 Plain English

* **AccountSummary** → the **one-stop shop** for a complete snapshot. One RPC, everything you need for a dashboard, a pre-trade affordability check, or a connection heartbeat.
* **AccountInfoDouble / Integer / String** → grab **one property** when that's all you need — lighter than the full summary. Each takes a property enum selecting which value to read.

> Rule of thumb: need the **full snapshot** → `accountSummary`; need **one specific value** → `accountInfo*`.

---

## Quick choose

| If you need…                                      | Use                  | Returns             | Enums used |
| ------------------------------------------------- | -------------------- | ------------------- | ---------- |
| Complete account snapshot (all values)            | `accountSummary`     | `AccountSummaryData`| **Output:** `MrpcEnumAccountTradeMode`, `MrpcEnumAccountMarginMode` |
| One numeric value (balance, equity, margin, …)    | `accountInfoDouble`  | `number`            | **Input:** `AccountInfoDoublePropertyType` |
| One integer value (login, leverage, …)            | `accountInfoInteger` | `number`            | **Input:** `AccountInfoIntegerPropertyType` |
| One text value (currency, company, server, …)     | `accountInfoString`  | `string`            | **Input:** `AccountInfoStringPropertyType` |

---

## ❌ Cross-refs & gotchas

* **Margin** — `accountSummary` already returns `getAccountMargin()`, `getAccountMarginFree()`, `getAccountMarginLevel()` and `getAccountMarginMode()`; `accountInfoDouble(ACCOUNT_MARGIN_FREE / ACCOUNT_MARGIN_LEVEL)` is just the single-value alternative.
* **Floating profit** — the summary carries no dedicated profit field; compute `equity − balance`, or read `accountInfoDouble(ACCOUNT_PROFIT)`.
* **Currency** affects how profit is calculated — always check the account currency.
* **Leverage** determines margin requirements — higher leverage, less margin needed.
* **Timeouts** — read RPCs use `callTimeoutMs` (default `30000` ms); tune via `account.callTimeoutMs`.

---

## 🟢 Minimal snippets

```ts
// Complete account snapshot
const s = await account.accountSummary();
console.log(
  `Balance: $${s.getAccountBalance().toFixed(2)}, ` +
  `Equity: $${s.getAccountEquity().toFixed(2)}, ` +
  `Leverage: 1:${s.getAccountLeverage()}`,
);
```

```ts
// Single property — account balance
import { AccountInformationPb } from '@metarpc/nodemt5';

const D = AccountInformationPb.AccountInfoDoublePropertyType;
const balance = await account.accountInfoDouble(D.ACCOUNT_BALANCE); // returns a number
console.log(`Balance: $${balance.toFixed(2)}`);
```

```ts
// Single integer property — leverage
const I = AccountInformationPb.AccountInfoIntegerPropertyType;
const leverage = await account.accountInfoInteger(I.ACCOUNT_LEVERAGE);
console.log(`Leverage: 1:${leverage}`);
```

```ts
// Single string property — currency
const S = AccountInformationPb.AccountInfoStringPropertyType;
const currency = await account.accountInfoString(S.ACCOUNT_CURRENCY);
console.log(`Currency: ${currency}`);
```

```ts
// Account-health check — the summary already carries the margin level
const s = await account.accountSummary();
const marginLevel = s.getAccountMarginLevel(); // also getAccountMargin(), getAccountMarginFree()

if (marginLevel > 0 && marginLevel < 100)      console.log('⚠️ Margin level critical!');
else if (marginLevel > 0 && marginLevel < 200) console.log('⚠️ Low margin level');
else                                           console.log('✅ Healthy margin level');
```

---

## 🧱 Enums used in Account Information

All four methods use enums — either as an **input** property selector, or as an **output** field describing the account. Enums are plain namespace objects on the `*Pb` modules; use the full constant, e.g. `AccountInformationPb.AccountInfoDoublePropertyType.ACCOUNT_BALANCE`.

### Input enums (property selectors)

Passed to the `accountInfo*` methods to choose **which** property to read:

| Method | Input enum | Purpose | Example values |
|--------|------------|---------|----------------|
| **accountInfoDouble** | `AccountInfoDoublePropertyType` | which double property | `ACCOUNT_BALANCE`, `ACCOUNT_EQUITY`, `ACCOUNT_MARGIN`, `ACCOUNT_MARGIN_FREE`, `ACCOUNT_MARGIN_LEVEL`, `ACCOUNT_PROFIT`, `ACCOUNT_CREDIT`, … (14 total) |
| **accountInfoInteger** | `AccountInfoIntegerPropertyType` | which integer property | `ACCOUNT_LOGIN`, `ACCOUNT_LEVERAGE`, `ACCOUNT_TRADE_MODE`, `ACCOUNT_LIMIT_ORDERS`, `ACCOUNT_TRADE_ALLOWED`, `ACCOUNT_TRADE_EXPERT`, `ACCOUNT_MARGIN_MODE`, … (11 total) |
| **accountInfoString** | `AccountInfoStringPropertyType` | which string property | `ACCOUNT_NAME`, `ACCOUNT_SERVER`, `ACCOUNT_CURRENCY`, `ACCOUNT_COMPANY` (4 total) |

```ts
import { AccountInformationPb } from '@metarpc/nodemt5';

const balance  = await account.accountInfoDouble(AccountInformationPb.AccountInfoDoublePropertyType.ACCOUNT_BALANCE);
const leverage = await account.accountInfoInteger(AccountInformationPb.AccountInfoIntegerPropertyType.ACCOUNT_LEVERAGE);
const currency = await account.accountInfoString(AccountInformationPb.AccountInfoStringPropertyType.ACCOUNT_CURRENCY);
```

### Output enums (returned values)

Returned in `accountSummary` to describe account state:

| Method | Output enum | Accessor | Values |
|--------|-------------|----------|--------|
| **accountSummary** | `MrpcEnumAccountTradeMode` | `getAccountTradeMode()` | `..._DEMO` (0) · `..._CONTEST` (1) · `..._REAL` (2) |
| **accountSummary** | `MrpcEnumAccountMarginMode` | `getAccountMarginMode()` | `..._RETAIL_NETTING` (0) · `..._EXCHANGE` (1) · `..._RETAIL_HEDGING` (2, typical MT5) |
| **accountInfoInteger** | returned as a `number` | `RequestedValue` | querying `ACCOUNT_TRADE_MODE` yields `0`/`1`/`2` |

```ts
const s = await account.accountSummary();
const T = AccountInformationPb.MrpcEnumAccountTradeMode;
switch (s.getAccountTradeMode()) {
  case T.MRPC_ACCOUNT_TRADE_MODE_DEMO: console.log('Demo account'); break;
  case T.MRPC_ACCOUNT_TRADE_MODE_REAL: console.log('Real account'); break;
}
```

### 📝 Notes about enums

* **Input enums are required** — `accountInfo*` always needs a property constant.
* **Output enums are typed fields** — `accountSummary` returns `getAccountTradeMode()` / `getAccountMarginMode()` directly.
* **`accountInfoInteger` special case** — some integer properties (e.g. `ACCOUNT_TRADE_MODE`) encode an enum, but come back as a plain `number` (0/1/2), not a typed enum.
* **No enums on Double/String outputs** — those always return a plain `number` / `string`.

---

## See also

* **Symbols & Quotes:** [Symbol Information — Overview](../2.%20Symbol_information/Symbol_Information.Overview.md) — prices and symbol properties.
* **Friendly layer:** [`MT5Service.getAccountSummary()`](../../MT5Service/MT5Service.Overview.md) returns a named `AccountInfo` object (plain fields, UTC times).

---

**Back to:** [MT5Account — Master Overview](../MT5Account.Master.Overview.md)

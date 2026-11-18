# 🧾 Getting Full Symbol Parameters

> **Request:** the full contract spec (~40 fields) of one or all symbols (`SymbolParamsManyData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.symbolParamsMany(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.AccountHelper`
* **Proto definition:** `SymbolParamsMany` (in `mt5-term-api-account-helper.proto`)

### RPC

* **Service:** `mt5_term_api.AccountHelper`
* **Method:** `SymbolParamsMany(SymbolParamsManyRequest) → SymbolParamsManyReply`
* **Low-level client (generated):** `AccountHelperClient.symbolParamsMany(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning the complete contract spec per symbol — digits, point, contract size, volume limits, swaps, currencies, trade modes…
* **Why you need it.** Format prices, size positions and compute P&L with all the rules in a single call.
* **Sanity check.** `getSymbolInfosList()` has at least one entry.

---

## 🎯 Purpose

* Pull everything about a symbol at once instead of many `symbolInfo*` reads.
* Cache specs for a basket of instruments.
* With no symbol, snapshot **every** symbol the broker exposes.

---

## 📚 Tutorial

1. **Call** `account.symbolParamsMany('EURUSD')` for one symbol, or `account.symbolParamsMany()` for all.
2. **Iterate** `getSymbolInfosList()` → `SymbolParameters`.
3. **Read** the getters you need (`getDigits()`, `getPoint()`, `getTradeContractSize()`…).

```ts
const d = await account.symbolParamsMany('EURUSD');
const s = d.getSymbolInfosList().find((x) => x.getName() === 'EURUSD') ?? d.getSymbolInfosList()[0];
console.log(s.getDigits(), s.getPoint(), s.getTradeContractSize());
```

---

## 🧱 Signature

```ts
import { MT5Account } from '@metarpc/nodemt5';

class MT5Account {
  // Full spec of one symbol (pass the name) or all symbols (omit it). Returns raw SymbolParamsManyData.
  symbolParamsMany(symbol?: string, timeoutMs?: number): Promise<any /* SymbolParamsManyData */>;
}
```

**Request message:** `SymbolParamsManyRequest` — `setSymbolName`, `setSortType`, `setPageNumber`, `setItemsPerPage` (the SDK sets the name from your argument).

**Reply message:**

```protobuf
SymbolParamsManyReply {
  oneof response {
    SymbolParamsManyData data = 1;
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `symbol` | `string?` | One symbol; omit to return all symbols (heavier). |
| `timeoutMs` | `number?` | Per-call deadline (default 120 s for the all-symbols case). |

---

## ⬆️ Output — `SymbolParamsManyData`

`getSymbolInfosList()` → array of **`SymbolParameters`**; plus `getSymbolsTotal()`, `getPageNumber()`, `getItemsPerPage()`.

**`SymbolParameters` — key getters:**

| Getter | Description |
| ------ | ----------- |
| `getName()` | Symbol name. |
| `getDigits()` / `getPoint()` | Decimals / smallest increment. |
| `getBid()` / `getAsk()` / `getSpread()` | Current prices / spread. |
| `getTradeContractSize()` | Contract size. |
| `getTradeTickSize()` / `getTradeTickValue()` | Tick size / value (for P&L). |
| `getVolumeMin()` / `getVolumeMax()` / `getVolumeStep()` / `getVolumeLimit()` | Volume rules. |
| `getSwapLong()` / `getSwapShort()` | Swap rates. |
| `getTradeMode()` / `getTradeCalcMode()` / `getTradeExeMode()` | Trade modes. |
| `getFillingModeList()` | Allowed filling modes. |
| `getCurrencyBase()` / `getCurrencyProfit()` / `getCurrencyMargin()` | Currencies. |
| `getSymDescription()` / `getPath()` | Description / tree path. |
| `getVisible()` / `getSelect()` / `getExist()` | Market Watch flags. |

---

## 🧩 Notes & Tips

* **All symbols is heavy.** Omitting the name can return thousands of specs — prefer a single symbol unless you need the whole list.
* **One call beats many.** Everything [SymbolInfoDouble](../2.%20Symbol_information/SymbolInfoDouble.md)/[Integer](../2.%20Symbol_information/SymbolInfoInteger.md)/[String](../2.%20Symbol_information/SymbolInfoString.md) returns, in one record.
* **Friendly form.** [`MT5Service.getSymbolParams(symbol)` / `getSymbolParamsMany()`](../../MT5Service/2.%20Symbol_Methods.md) return mapped `SymbolParams`.

---

## 🔗 Usage Examples

### 1) One symbol's spec

```ts
const d = await account.symbolParamsMany('EURUSD');
const s = d.getSymbolInfosList()[0];
console.log(`digits ${s.getDigits()}  point ${s.getPoint()}  contract ${s.getTradeContractSize()}`);
```

### 2) Volume rules

```ts
const s = (await account.symbolParamsMany('EURUSD')).getSymbolInfosList()[0];
console.log('volMin', s.getVolumeMin(), 'volStep', s.getVolumeStep(), 'volMax', s.getVolumeMax());
```

### 3) Currencies & description

```ts
const s = (await account.symbolParamsMany('EURUSD')).getSymbolInfosList()[0];
console.log(`${s.getSymDescription()} — ${s.getCurrencyBase()}/${s.getCurrencyProfit()}  margin in ${s.getCurrencyMargin()}`);
```

### 4) All symbols (heavier)

```ts
const all = await account.symbolParamsMany();
console.log('symbols:', all.getSymbolInfosList().length);
```

### 5) Build a spec cache

```ts
async function specOf(account: MT5Account, sym: string) {
  const s = (await account.symbolParamsMany(sym)).getSymbolInfosList()[0];
  return { digits: s.getDigits(), point: s.getPoint(), volMin: s.getVolumeMin(), volStep: s.getVolumeStep() };
}
```

---

## 🔧 Common Patterns

### Pip size from the spec

```ts
async function pipSize(account: MT5Account, sym: string): Promise<number> {
  const s = (await account.symbolParamsMany(sym)).getSymbolInfosList()[0];
  return s.getPoint() * (s.getDigits() === 3 || s.getDigits() === 5 ? 10 : 1);
}
```

---

## 📚 See Also

* [TickValueWithSize](./TickValueWithSize.md) · [SymbolInfoDouble](../2.%20Symbol_information/SymbolInfoDouble.md)
* **Friendly layer:** [`MT5Service.getSymbolParams`](../../MT5Service/2.%20Symbol_Methods.md) → `SymbolParams` · [`MT5Sugar.getSymbolInfo`](../../MT5Sugar/9.%20Symbol_Information.md).

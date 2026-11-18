# 🔤 Getting a String Symbol Property

> **Request:** one text symbol property (`SymbolInfoStringData` → a `string`) from **MT5** — description, currencies, path, ISIN, exchange, selected by an enum.

**API Information:**

* **Low-level API:** `MT5Account.symbolInfoString(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.MarketInfo`
* **Proto definition:** `SymbolInfoString` (in `mt5-term-api-market-info.proto`)

### RPC

* **Service:** `mt5_term_api.MarketInfo`
* **Method:** `SymbolInfoString(SymbolInfoStringRequest) → SymbolInfoStringReply`
* **Low-level client (generated):** `MarketInfoClient.symbolInfoString(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning a single text property of a symbol, chosen by a `SymbolInfoStringProperty` value.
* **Why you need it.** Human-readable `SYMBOL_DESCRIPTION`, the `SYMBOL_CURRENCY_*` codes, or the `SYMBOL_PATH` grouping.
* **Sanity check.** `SYMBOL_CURRENCY_BASE` returns a 3-letter code (e.g. `"EUR"`).

---

## 🎯 Purpose

Use it for a symbol's textual identity:

* **Display** — `SYMBOL_DESCRIPTION`.
* **Currencies** — `SYMBOL_CURRENCY_BASE` / `PROFIT` / `MARGIN`.
* **Organisation** — `SYMBOL_PATH`, `SYMBOL_EXCHANGE`, `SYMBOL_ISIN`.

---

## 📚 Tutorial

1. **Select the symbol** so its data is available.
2. **Build the request** with the symbol and the property enum.
3. **Call** `account.symbolInfoString(req)` and read `getValue()`.

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.SymbolInfoStringRequest();
req.setSymbol('EURUSD');
req.setType(MarketInfoPb.SymbolInfoStringProperty.SYMBOL_DESCRIPTION);
const desc = (await account.symbolInfoString(req)).getValue();
```

---

## 🧱 Signature

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

class MT5Account {
  // Read one SYMBOL_* string property. Pass a built SymbolInfoStringRequest.
  symbolInfoString(req: any /* SymbolInfoStringRequest */, timeoutMs?: number): Promise<any /* SymbolInfoStringData */>;
}
```

**Request message:** `SymbolInfoStringRequest { string symbol = 1; SymbolInfoStringProperty type = 2; }` — `setSymbol`, `setType`.

**Reply message:**

```protobuf
SymbolInfoStringReply {
  oneof response {
    SymbolInfoStringData data = 1;   // getValue(): string
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Setter | Type | Description |
| ------ | ---- | ----------- |
| `setSymbol(symbol)` | `string` | Instrument. |
| `setType(property)` | `SymbolInfoStringProperty` | Which string property to read. |

---

## ⬆️ Output — `SymbolInfoStringData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| value | `getValue()` | `string` | The property's value. |

---

## 🧱 Related enums (from proto)

> Access as `MarketInfoPb.SymbolInfoStringProperty.SYMBOL_DESCRIPTION` (a `number`).

### `SymbolInfoStringProperty` — common values

| Constant | Meaning |
| -------- | ------- |
| `SYMBOL_DESCRIPTION` | Human-readable description. |
| `SYMBOL_CURRENCY_BASE` | Base currency. |
| `SYMBOL_CURRENCY_PROFIT` | Profit currency. |
| `SYMBOL_CURRENCY_MARGIN` | Margin currency. |
| `SYMBOL_PATH` | Tree path / grouping. |
| `SYMBOL_EXCHANGE` | Exchange name. |
| `SYMBOL_ISIN` | ISIN code (where available). |
| `SYMBOL_BANK` / `SYMBOL_BASIS` | Quote source / underlying. |
| `SYMBOL_CATEGORY` / `SYMBOL_SECTOR_NAME` / `SYMBOL_INDUSTRY_NAME` | Classification. |

---


<details markdown="1">
<summary><strong>All 15 <code>SymbolInfoStringProperty</code> string properties</strong> (click to expand)</summary>

| Constant | Value | Description |
| -------- | ----- | ----------- |
| `SYMBOL_BASIS` | 0 | Underlying asset of derivative |
| `SYMBOL_CATEGORY` | 1 | Symbol category |
| `SYMBOL_COUNTRY` | 2 | Country the symbol belongs to |
| `SYMBOL_SECTOR_NAME` | 3 | Economic sector name |
| `SYMBOL_INDUSTRY_NAME` | 4 | Industry name |
| `SYMBOL_CURRENCY_BASE` | 5 | Base currency (first currency in pair) |
| `SYMBOL_CURRENCY_PROFIT` | 6 | Profit currency (second currency in pair) |
| `SYMBOL_CURRENCY_MARGIN` | 7 | Margin calculation currency |
| `SYMBOL_BANK` | 8 | Source of last quote (bank/exchange) |
| `SYMBOL_DESCRIPTION` | 9 | Symbol description/full name |
| `SYMBOL_EXCHANGE` | 10 | Exchange the symbol is traded on |
| `SYMBOL_FORMULA` | 11 | Formula for custom symbol price calculation |
| `SYMBOL_ISIN` | 12 | International Securities Identification Number |
| `SYMBOL_PAGE` | 13 | Web page URL with symbol information |
| `SYMBOL_PATH` | 14 | Symbol path in Market Watch tree |

</details>

## 🧩 Notes & Tips

* **Currencies pair up.** `SYMBOL_CURRENCY_BASE` + `SYMBOL_CURRENCY_PROFIT` describe the pair; `SYMBOL_CURRENCY_MARGIN` is what margin is held in.
* **Some fields are empty** for certain symbols (e.g. `SYMBOL_ISIN` for FX) — expect `""`.
* **Full spec?** [SymbolParamsMany](../6.%20Additional_Methods/SymbolParamsMany.md) returns description, path and currencies together.

---

## 🔗 Usage Examples

### 1) Description

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';
const S = MarketInfoPb.SymbolInfoStringProperty;

const r = new MarketInfoPb.SymbolInfoStringRequest();
r.setSymbol('EURUSD'); r.setType(S.SYMBOL_DESCRIPTION);
console.log((await account.symbolInfoString(r)).getValue());
```

### 2) Base / profit / margin currencies

```ts
const S = MarketInfoPb.SymbolInfoStringProperty;
function symStr(sym: string, prop: number) {
  const r = new MarketInfoPb.SymbolInfoStringRequest(); r.setSymbol(sym); r.setType(prop);
  return account.symbolInfoString(r).then((d) => d.getValue());
}
const [base, profit, margin] = await Promise.all([
  symStr('EURUSD', S.SYMBOL_CURRENCY_BASE),
  symStr('EURUSD', S.SYMBOL_CURRENCY_PROFIT),
  symStr('EURUSD', S.SYMBOL_CURRENCY_MARGIN),
]);
console.log(`${base}/${profit}  margin in ${margin}`);
```

### 3) Market Watch path

```ts
const r = new MarketInfoPb.SymbolInfoStringRequest();
r.setSymbol('EURUSD'); r.setType(MarketInfoPb.SymbolInfoStringProperty.SYMBOL_PATH);
console.log('path:', (await account.symbolInfoString(r)).getValue());
```

### 4) Exchange & ISIN (equities)

```ts
const S = MarketInfoPb.SymbolInfoStringProperty;
const ex = new MarketInfoPb.SymbolInfoStringRequest(); ex.setSymbol('AAPL'); ex.setType(S.SYMBOL_EXCHANGE);
const isin = new MarketInfoPb.SymbolInfoStringRequest(); isin.setSymbol('AAPL'); isin.setType(S.SYMBOL_ISIN);
console.log((await account.symbolInfoString(ex)).getValue(), (await account.symbolInfoString(isin)).getValue());
```

### 5) A small reusable reader

```ts
function symbolString(account: MT5Account, sym: string, prop: number): Promise<string> {
  const r = new MarketInfoPb.SymbolInfoStringRequest();
  r.setSymbol(sym); r.setType(prop);
  return account.symbolInfoString(r).then((d) => d.getValue());
}
```

### 6) One-line label

```ts
const S = MarketInfoPb.SymbolInfoStringProperty;
const [desc, base, profit] = await Promise.all([
  symbolString(account, 'EURUSD', S.SYMBOL_DESCRIPTION),
  symbolString(account, 'EURUSD', S.SYMBOL_CURRENCY_BASE),
  symbolString(account, 'EURUSD', S.SYMBOL_CURRENCY_PROFIT),
]);
console.log(`${desc} (${base}/${profit})`);
```

---

## 🔧 Common Patterns

### Build a symbol label

```ts
async function label(account: MT5Account, sym: string): Promise<string> {
  const S = MarketInfoPb.SymbolInfoStringProperty;
  const desc = await symbolString(account, sym, S.SYMBOL_DESCRIPTION);
  return desc || sym;
}
```

---

## 📚 See Also

* [SymbolInfoDouble](./SymbolInfoDouble.md) · [SymbolInfoInteger](./SymbolInfoInteger.md) · [SymbolInfoTick](./SymbolInfoTick.md)
* **Friendly layer:** [`MT5Service.getSymbolString`](../../MT5Service/2.%20Symbol_Methods.md).

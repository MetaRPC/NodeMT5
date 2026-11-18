# 🔎 Checking a Symbol Exists

> **Request:** whether the broker knows a symbol, and whether it's custom (`SymbolExistData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.symbolExist(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.MarketInfo`
* **Proto definition:** `SymbolExist` (in `mt5-term-api-market-info.proto`)

### RPC

* **Service:** `mt5_term_api.MarketInfo`
* **Method:** `SymbolExist(SymbolExistRequest) → SymbolExistReply`
* **Low-level client (generated):** `MarketInfoClient.symbolExist(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC that reports whether a symbol name is known to the broker, and whether it's a **custom** symbol.
* **Why you need it.** Validate user input before selecting/trading — avoid errors on typos.
* **Sanity check.** `getExists()` is `true` for `"EURUSD"` on an FX broker.

---

## 🎯 Purpose

* Guard trading flows: check a symbol exists before [SymbolSelect](./SymbolSelect.md) / [OrderSend](../4.%20Trading_Operations/OrderSend.md).
* Distinguish broker symbols from locally-created **custom** symbols.

---

## 📚 Tutorial

1. **Build the request** with the symbol name.
2. **Call** `account.symbolExist(req)`.
3. **Read** `getExists()` and `getIsCustom()`.

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.SymbolExistRequest();
req.setName('EURUSD');
const d = await account.symbolExist(req);
console.log(d.getExists(), d.getIsCustom());
```

---

## 🧱 Signature

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

class MT5Account {
  // Check a symbol. Pass a built SymbolExistRequest (setName).
  symbolExist(req: any /* SymbolExistRequest */, timeoutMs?: number): Promise<any /* SymbolExistData */>;
}
```

**Request message:** `SymbolExistRequest { string name = 1; }` — `setName(string)`.

**Reply message:**

```protobuf
SymbolExistReply {
  oneof response {
    SymbolExistData data = 1;   // getExists(): bool, getIsCustom(): bool
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Setter | Type | Description |
| ------ | ---- | ----------- |
| `setName(name)` | `string` | Symbol name to check. |

---

## ⬆️ Output — `SymbolExistData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| exists | `getExists()` | `boolean` | `true` if the broker knows this symbol. |
| is custom | `getIsCustom()` | `boolean` | `true` if it's a custom (user-created) symbol. |

---

## 🧩 Notes & Tips

* **Case & suffix matter.** Brokers use suffixes (`EURUSD.m`, `EURUSD.r`); if `getExists()` is `false`, the exact name may differ — list names via [SymbolName](./SymbolName.md)/[SymbolsTotal](./SymbolsTotal.md).
* **Exists ≠ selected.** A symbol can exist but not be in Market Watch — call [SymbolSelect](./SymbolSelect.md) before reading live data.
* **Friendly form** returns `{ exists, isCustom }`: [`MT5Service.symbolExist`](../../MT5Service/2.%20Symbol_Methods.md).

---

## 🔗 Usage Examples

### 1) Basic check

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.SymbolExistRequest();
req.setName('EURUSD');
const d = await account.symbolExist(req);
console.log('exists?', d.getExists());
```

### 2) Guard before selecting

```ts
async function ensureKnown(account: MT5Account, sym: string): Promise<void> {
  const req = new MarketInfoPb.SymbolExistRequest(); req.setName(sym);
  if (!(await account.symbolExist(req)).getExists()) throw new Error(`unknown symbol ${sym}`);
  await account.symbolSelect(sym, true);
}
```

### 3) Custom vs broker symbol

```ts
const req = new MarketInfoPb.SymbolExistRequest(); req.setName('MYINDEX');
const d = await account.symbolExist(req);
console.log(d.getExists() ? (d.getIsCustom() ? 'custom' : 'broker') : 'unknown');
```

### 4) Validate a list of symbols

```ts
async function filterKnown(account: MT5Account, names: string[]): Promise<string[]> {
  const out: string[] = [];
  for (const n of names) {
    const r = new MarketInfoPb.SymbolExistRequest(); r.setName(n);
    if ((await account.symbolExist(r)).getExists()) out.push(n);
  }
  return out;
}
```

---

## 🔧 Common Patterns

### Boolean helper

```ts
function exists(account: MT5Account, name: string): Promise<boolean> {
  const r = new MarketInfoPb.SymbolExistRequest(); r.setName(name);
  return account.symbolExist(r).then((d) => d.getExists());
}
```

---

## 📚 See Also

* [SymbolSelect](./SymbolSelect.md) — add it to Market Watch. · [SymbolName](./SymbolName.md) · [SymbolsTotal](./SymbolsTotal.md)
* **Friendly layer:** [`MT5Service.symbolExist`](../../MT5Service/2.%20Symbol_Methods.md) · [`MT5Sugar.isSymbolAvailable`](../../MT5Sugar/9.%20Symbol_Information.md).

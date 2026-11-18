# 🔢 Counting Symbols

> **Request:** how many symbols the broker exposes, all or just those in Market Watch (`SymbolsTotalData` → a `number`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.symbolsTotal(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.MarketInfo`
* **Proto definition:** `SymbolsTotal` (in `mt5-term-api-market-info.proto`)

### RPC

* **Service:** `mt5_term_api.MarketInfo`
* **Method:** `SymbolsTotal(SymbolsTotalRequest) → SymbolsTotalReply`
* **Low-level client (generated):** `MarketInfoClient.symbolsTotal(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning the count of symbols — the whole broker list, or only the selected (Market Watch) ones.
* **Why you need it.** Size a loop over [SymbolName](./SymbolName.md), or show how many instruments are available.
* **Sanity check.** The full count is large (thousands on a typical broker).

---

## 🎯 Purpose

* Bound an index loop that reads each symbol's name.
* Report "N instruments available" / "M in Market Watch".
* Detect whether the Market Watch is empty before streaming.

---

## 📚 Tutorial

1. **Connect** so the SDK has a terminal session.
2. **Choose the scope** via `setMode` — `false` = all symbols, `true` = only selected.
3. **Call** `account.symbolsTotal(req)` and read `getTotal()`.

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.SymbolsTotalRequest();
req.setMode(false);                                   // all symbols
const total = (await account.symbolsTotal(req)).getTotal();
```

---

## 🧱 Signature

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

class MT5Account {
  // Count symbols. Pass a built SymbolsTotalRequest (setMode: false = all, true = selected only).
  // Called with no argument, it counts all symbols.
  symbolsTotal(req?: any /* SymbolsTotalRequest */, timeoutMs?: number): Promise<any /* SymbolsTotalData */>;
}
```

**Request message:** `SymbolsTotalRequest { bool mode = 1; }` — `setMode(false)` = all, `setMode(true)` = selected only.

**Reply message:**

```protobuf
SymbolsTotalReply {
  oneof response {
    SymbolsTotalData data = 1;   // getTotal(): int32
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Setter | Type | Description |
| ------ | ---- | ----------- |
| `setMode(mode)` | `boolean` | `false` = count all symbols, `true` = count only Market Watch. |

---

## ⬆️ Output — `SymbolsTotalData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| total | `getTotal()` | `number` | Number of symbols in the chosen scope. |

---

## 🧩 Notes & Tips

* **Pair it with [SymbolName](./SymbolName.md).** Loop `index` from `0` to `total − 1`, passing the same scope.
* **The friendly count** is [`MT5Service.getSymbolsTotal(selectedOnly)`](../../MT5Service/2.%20Symbol_Methods.md), which returns the number directly.
* **All symbols can be huge** — don't fetch every name unless you need to; prefer [SymbolExist](./SymbolExist.md) to check one.

---

## 🔗 Usage Examples

### 1) Count all symbols

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.SymbolsTotalRequest();
req.setMode(false);
console.log('all symbols:', (await account.symbolsTotal(req)).getTotal());
```

### 2) Count Market Watch only

```ts
const req = new MarketInfoPb.SymbolsTotalRequest();
req.setMode(true);
console.log('in Market Watch:', (await account.symbolsTotal(req)).getTotal());
```

### 3) Loop over every selected symbol's name

```ts
const tReq = new MarketInfoPb.SymbolsTotalRequest(); tReq.setMode(true);
const total = (await account.symbolsTotal(tReq)).getTotal();
for (let i = 0; i < total; i++) {
  const nReq = new MarketInfoPb.SymbolNameRequest(); nReq.setIndex(i); nReq.setSelected(true);
  console.log(i, (await account.symbolName(nReq)).getName());
}
```

### 4) Is the Market Watch empty?

```ts
const req = new MarketInfoPb.SymbolsTotalRequest(); req.setMode(true);
if ((await account.symbolsTotal(req)).getTotal() === 0) {
  await account.symbolSelect('EURUSD', true);   // add something to watch
}
```

---

## 🔧 Common Patterns

### Count both scopes

```ts
async function counts(account: MT5Account): Promise<{ all: number; selected: number }> {
  const a = new MarketInfoPb.SymbolsTotalRequest(); a.setMode(false);
  const s = new MarketInfoPb.SymbolsTotalRequest(); s.setMode(true);
  const [all, selected] = await Promise.all([
    account.symbolsTotal(a).then((d) => d.getTotal()),
    account.symbolsTotal(s).then((d) => d.getTotal()),
  ]);
  return { all, selected };
}
```

---

## 📚 See Also

* [SymbolName](./SymbolName.md) — the name at an index. · [SymbolExist](./SymbolExist.md) — check one symbol.
* **Friendly layer:** [`MT5Service.getSymbolsTotal`](../../MT5Service/2.%20Symbol_Methods.md) · [`MT5Sugar.getAllSymbols`](../../MT5Sugar/9.%20Symbol_Information.md).

# 🏷️ Getting a Symbol Name by Index

> **Request:** the name of the symbol at a given index, over all symbols or just Market Watch (`SymbolNameData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.symbolName(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.MarketInfo`
* **Proto definition:** `SymbolName` (in `mt5-term-api-market-info.proto`)

### RPC

* **Service:** `mt5_term_api.MarketInfo`
* **Method:** `SymbolName(SymbolNameRequest) → SymbolNameReply`
* **Low-level client (generated):** `MarketInfoClient.symbolName(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning the symbol name at position `index`, within either the full list or the selected (Market Watch) list.
* **Why you need it.** Enumerate symbols together with [SymbolsTotal](./SymbolsTotal.md).
* **Sanity check.** Index `0` of the selected list returns the first Market Watch symbol.

---

## 🎯 Purpose

* Build a picker / autocomplete of available instruments.
* Iterate the Market Watch to snapshot or subscribe to each symbol.

---

## 📚 Tutorial

1. **Get the count** with [SymbolsTotal](./SymbolsTotal.md) for the scope you want.
2. **For each index**, build a `SymbolNameRequest` with `setIndex` and `setSelected` (same scope).
3. **Call** `account.symbolName(req)` and read `getName()`.

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.SymbolNameRequest();
req.setIndex(0);
req.setSelected(true);                 // from Market Watch
const name = (await account.symbolName(req)).getName();
```

---

## 🧱 Signature

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

class MT5Account {
  // Name at an index. Pass a built SymbolNameRequest (setIndex, setSelected).
  symbolName(req: any /* SymbolNameRequest */, timeoutMs?: number): Promise<any /* SymbolNameData */>;
}
```

**Request message:** `SymbolNameRequest { int32 index = 1; bool selected = 2; }` — `setIndex(number)`, `setSelected(boolean)`.

**Reply message:**

```protobuf
SymbolNameReply {
  oneof response {
    SymbolNameData data = 1;   // getName(): string
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Setter | Type | Description |
| ------ | ---- | ----------- |
| `setIndex(index)` | `number` | 0-based position. |
| `setSelected(selected)` | `boolean` | `true` = index within Market Watch, `false` = within all symbols. |

---

## ⬆️ Output — `SymbolNameData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| name | `getName()` | `string` | Symbol name at the index. |

---

## 🧩 Notes & Tips

* **Keep the scope consistent.** Use the same `selected` flag for [SymbolsTotal](./SymbolsTotal.md) and the index loop.
* **Out-of-range index** yields an error reply (`MrpcError`) — stop at `total − 1`.
* **The friendly list** [`MT5Sugar.getAllSymbols`](../../MT5Sugar/9.%20Symbol_Information.md) returns every name as a `string[]` in one call.

---

## 🔗 Usage Examples

### 1) First Market Watch symbol

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.SymbolNameRequest();
req.setIndex(0); req.setSelected(true);
console.log((await account.symbolName(req)).getName());
```

### 2) Enumerate Market Watch

```ts
const tReq = new MarketInfoPb.SymbolsTotalRequest(); tReq.setMode(true);
const total = (await account.symbolsTotal(tReq)).getTotal();
for (let i = 0; i < total; i++) {
  const r = new MarketInfoPb.SymbolNameRequest(); r.setIndex(i); r.setSelected(true);
  console.log(i, (await account.symbolName(r)).getName());
}
```

### 3) First N of the full list

```ts
for (let i = 0; i < 20; i++) {
  const r = new MarketInfoPb.SymbolNameRequest(); r.setIndex(i); r.setSelected(false);
  console.log((await account.symbolName(r)).getName());
}
```

### 4) Collect all selected names

```ts
async function selectedNames(account: MT5Account): Promise<string[]> {
  const tReq = new MarketInfoPb.SymbolsTotalRequest(); tReq.setMode(true);
  const total = (await account.symbolsTotal(tReq)).getTotal();
  const names: string[] = [];
  for (let i = 0; i < total; i++) {
    const r = new MarketInfoPb.SymbolNameRequest(); r.setIndex(i); r.setSelected(true);
    names.push((await account.symbolName(r)).getName());
  }
  return names;
}
```

---

## 🔧 Common Patterns

### Index helper

```ts
function nameAt(account: MT5Account, index: number, selected = true): Promise<string> {
  const r = new MarketInfoPb.SymbolNameRequest(); r.setIndex(index); r.setSelected(selected);
  return account.symbolName(r).then((d) => d.getName());
}
```

---

## 📚 See Also

* [SymbolsTotal](./SymbolsTotal.md) — the count to bound your loop. · [SymbolExist](./SymbolExist.md)
* **Friendly layer:** [`MT5Service.getSymbolName`](../../MT5Service/2.%20Symbol_Methods.md) · [`MT5Sugar.getAllSymbols`](../../MT5Sugar/9.%20Symbol_Information.md).

# ➕ Selecting a Symbol (Market Watch)

> **Request:** add a symbol to — or remove it from — Market Watch so its live data is available (`SymbolSelectData` → a `boolean`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.symbolSelect(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.MarketInfo`
* **Proto definition:** `SymbolSelect` (in `mt5-term-api-market-info.proto`)

### RPC

* **Service:** `mt5_term_api.MarketInfo`
* **Method:** `SymbolSelect(SymbolSelectRequest) → SymbolSelectReply`
* **Low-level client (generated):** `MarketInfoClient.symbolSelect(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC that selects (adds) or deselects (removes) a symbol in Market Watch. The SDK method takes plain arguments and returns a `boolean`.
* **Why you need it.** You must select a symbol before quotes, ticks or most `SymbolInfo*` reads return live data.
* **Sanity check.** Returns `true` when the selection succeeds.

---

## 🎯 Purpose

* **Prepare a symbol** for quotes / ticks / trading.
* **Tidy up** by deselecting symbols you no longer watch.

---

## 📚 Tutorial

1. **Connect** so the SDK has a terminal session.
2. **Call** `account.symbolSelect(symbol, true)` to add it (or `false` to remove).
3. The SDK builds the request and returns the resulting `boolean`.

```ts
await account.symbolSelect('EURUSD', true);    // add to Market Watch
// … read ticks / trade …
await account.symbolSelect('EURUSD', false);   // remove when done
```

---

## 🧱 Signature

```ts
import { MT5Account } from '@metarpc/nodemt5';

class MT5Account {
  // Select (true) or deselect (false) a symbol. Plain args; returns the success boolean.
  symbolSelect(symbol: string, select?: boolean, timeoutMs?: number): Promise<boolean>;
}
```

**Request message:** `SymbolSelectRequest { string symbol = 1; bool select = 2; }` (built for you).

**Reply message:**

```protobuf
SymbolSelectReply {
  oneof response {
    SymbolSelectData data = 1;   // success flag
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `symbol` | `string` | Instrument, e.g. `"EURUSD"`. |
| `select` | `boolean` | `true` (default) = add, `false` = remove. |

---

## ⬆️ Output

`Promise<boolean>` — `true` on success. A failure (e.g. unknown symbol) rejects with an [`MrpcError`](../../All_Guides/RETURN_CODES_REFERENCE.md) (`ErrMarketSelectError` / code `4305` when the broker can't add it).

---

## 🧩 Notes & Tips

* **Select before reading.** Many `SymbolInfo*` reads return `0`/stale until the symbol is selected.
* **Give it a moment.** After selecting, the first quote may take a tick to arrive — [`MT5Service.ensureSymbol`](../../MT5Service/2.%20Symbol_Methods.md) selects **and** waits for a live quote.
* **Validate first.** If the name might be wrong, check [SymbolExist](./SymbolExist.md) to avoid a `4305`.

---

## 🔗 Usage Examples

### 1) Add a symbol

```ts
const ok = await account.symbolSelect('EURUSD', true);
console.log('selected?', ok);
```

### 2) Select, then read a tick

```ts
await account.symbolSelect('EURUSD', true);
const tick = await account.symbolInfoTick('EURUSD');
console.log(tick.getBid(), tick.getAsk());
```

### 3) Remove when finished

```ts
await account.symbolSelect('EURUSD', false);
```

### 4) Prepare a basket

```ts
for (const sym of ['EURUSD', 'GBPUSD', 'XAUUSD']) {
  await account.symbolSelect(sym, true);
}
```

### 5) Guarded select

```ts
import { MarketInfoPb } from '@metarpc/nodemt5';
async function safeSelect(account: MT5Account, sym: string): Promise<boolean> {
  const r = new MarketInfoPb.SymbolExistRequest(); r.setName(sym);
  if (!(await account.symbolExist(r)).getExists()) return false;
  return account.symbolSelect(sym, true);
}
```

---

## 🔧 Common Patterns

### Ensure selected before trading

```ts
async function ensureSelected(account: MT5Account, sym: string): Promise<void> {
  try { await account.symbolSelect(sym, true); }
  catch (e) { throw new Error(`cannot select ${sym}: ${(e as Error).message}`); }
}
```

---

## 📚 See Also

* [SymbolIsSynchronized](./SymbolIsSynchronized.md) — is its data ready? · [SymbolInfoTick](./SymbolInfoTick.md) · [SymbolExist](./SymbolExist.md)
* **Friendly layer:** [`MT5Service.symbolSelect / ensureSymbol`](../../MT5Service/2.%20Symbol_Methods.md).

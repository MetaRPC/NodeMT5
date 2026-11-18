# 🔄 Checking Symbol Synchronization

> **Request:** whether a symbol's data is synchronized with the server (`SymbolIsSynchronizedData` → a `boolean`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.symbolIsSynchronized(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.MarketInfo`
* **Proto definition:** `SymbolIsSynchronized` (in `mt5-term-api-market-info.proto`)

### RPC

* **Service:** `mt5_term_api.MarketInfo`
* **Method:** `SymbolIsSynchronized(SymbolIsSynchronizedRequest) → SymbolIsSynchronizedReply`
* **Low-level client (generated):** `MarketInfoClient.symbolIsSynchronized(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC reporting whether the terminal has fully synced a symbol's spec and quotes with the server.
* **Why you need it.** After [SymbolSelect](./SymbolSelect.md), wait until data is in sync before relying on prices or specs.
* **Sanity check.** Returns `true` for an actively-quoting selected symbol.

---

## 🎯 Purpose

* Avoid reading stale/zero properties right after selecting a symbol.
* Gate a quote-dependent action until the symbol is ready.

---

## 📚 Tutorial

1. **Select the symbol** ([SymbolSelect](./SymbolSelect.md)).
2. **Poll** `account.symbolIsSynchronized(symbol)` until it returns `true` (or use `ensureSymbol`).
3. **Proceed** to read prices / specs.

```ts
await account.symbolSelect('EURUSD', true);
while (!(await account.symbolIsSynchronized('EURUSD'))) {
  await new Promise((r) => setTimeout(r, 200));
}
```

---

## 🧱 Signature

```ts
import { MT5Account } from '@metarpc/nodemt5';

class MT5Account {
  // Is the symbol's data synced? Plain arg; returns a boolean.
  symbolIsSynchronized(symbol: string, timeoutMs?: number): Promise<boolean>;
}
```

**Request message:** `SymbolIsSynchronizedRequest { string symbol = 1; }` (built for you).

**Reply message:**

```protobuf
SymbolIsSynchronizedReply {
  oneof response {
    SymbolIsSynchronizedData data = 1;   // synchronized flag
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `symbol` | `string` | Instrument to check. |

---

## ⬆️ Output

`Promise<boolean>` — `true` when the symbol is synchronized with the server.

---

## 🧩 Notes & Tips

* **Pair with [SymbolSelect](./SymbolSelect.md).** Selecting is instant; syncing can take a moment.
* **Prefer `ensureSymbol`.** [`MT5Service.ensureSymbol`](../../MT5Service/2.%20Symbol_Methods.md) selects and waits for a live quote in one call — simpler than polling this yourself.
* **Don't hot-loop.** Add a small delay (e.g. 200 ms) between checks.

---

## 🔗 Usage Examples

### 1) Basic check

```ts
console.log('synced?', await account.symbolIsSynchronized('EURUSD'));
```

### 2) Wait until synced

```ts
async function waitSynced(account: MT5Account, sym: string, timeoutMs = 5000): Promise<boolean> {
  const until = Date.now() + timeoutMs;
  while (Date.now() < until) {
    if (await account.symbolIsSynchronized(sym)) return true;
    await new Promise((r) => setTimeout(r, 200));
  }
  return false;
}
```

### 3) Select → wait → read

```ts
await account.symbolSelect('EURUSD', true);
if (await waitSynced(account, 'EURUSD')) {
  const tick = await account.symbolInfoTick('EURUSD');
  console.log(tick.getBid(), tick.getAsk());
}
```

### 4) Guard a batch

```ts
for (const sym of ['EURUSD', 'GBPUSD']) {
  await account.symbolSelect(sym, true);
  if (!(await waitSynced(account, sym))) console.warn(sym, 'not synced');
}
```

---

## 🔧 Common Patterns

### Ready-check helper

```ts
async function symbolReady(account: MT5Account, sym: string): Promise<boolean> {
  await account.symbolSelect(sym, true);
  return account.symbolIsSynchronized(sym);
}
```

---

## 📚 See Also

* [SymbolSelect](./SymbolSelect.md) — select before syncing. · [SymbolInfoTick](./SymbolInfoTick.md)
* **Friendly layer:** [`MT5Service.isSymbolSynchronized / ensureSymbol`](../../MT5Service/2.%20Symbol_Methods.md).

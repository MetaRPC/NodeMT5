# 📡 Streaming Ticks (OnSymbolTick)

> **Subscribe:** live Bid/Ask ticks for one or more symbols (`OnSymbolTickData` per tick), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.onSymbolTick(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.SubscriptionService`
* **Proto definition:** `OnSymbolTick` (in `mt5-term-api-subscriptions.proto`)

### RPC

* **Service:** `mt5_term_api.SubscriptionService`
* **Method:** `OnSymbolTick(OnSymbolTickRequest) → stream OnSymbolTickReply`
* **Low-level client (generated):** `SubscriptionServiceClient.onSymbolTick(request, metadata)`

---

## 💬 Just the essentials

* **What it is.** A server stream that pushes a tick whenever a subscribed symbol's price changes.
* **Why you need it.** React to the market without polling [SymbolInfoTick](../2.%20Symbol_information/SymbolInfoTick.md).
* **Sanity check.** You start receiving ticks within seconds for an active symbol.

---

## 🎯 Purpose

* Drive live dashboards, signals or order logic off real-time prices.
* Keep the latest bid/ask cached for several symbols.

---

## 📚 Tutorial

1. **Call** `account.onSymbolTick(symbols, callback, onError?)`.
2. **Read** each payload's `getSymbolTick()` → `MrpcSubscriptionMqlTick`.
3. **Keep the `Subscription`** and call `unsubscribe()` when done.

```ts
const sub = account.onSymbolTick(['EURUSD'], (data) => {
  const t = data.getSymbolTick();
  console.log(t.getSymbol(), t.getBid(), t.getAsk());
});
setTimeout(() => sub.unsubscribe(), 30_000);
```

---

## 🧱 Signature

```ts
import { MT5Account, Subscription } from '@metarpc/nodemt5';

class MT5Account {
  // Stream live ticks for the given symbols. Returns a Subscription; call unsubscribe() to stop.
  onSymbolTick(
    symbols: string[],
    callback: (data: any /* OnSymbolTickData */) => void,
    onError?: (e: Error) => void,
  ): Subscription;
}
```

**Request message:** `OnSymbolTickRequest` — `setSymbolNamesList(string[])` (built from your argument).

**Reply message (streamed):**

```protobuf
OnSymbolTickReply {
  oneof response {
    OnSymbolTickData data = 1;
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `symbols` | `string[]` | Symbols to stream. |
| `callback` | `(data) => void` | Called per tick with the raw `OnSymbolTickData`. |
| `onError` | `(e) => void` | Optional; gateway/terminal errors as `MrpcError`. |

---

## ⬆️ Payload — `OnSymbolTickData`

`getSymbolTick()` → **`MrpcSubscriptionMqlTick`**:

| Getter | Description |
| ------ | ----------- |
| `getSymbol()` | Instrument. |
| `getBid()` / `getAsk()` | Best prices. |
| `getLast()` | Last deal price. |
| `getVolume()` / `getVolumeReal()` | Tick volume. |
| `getTime()` | Tick time (`Timestamp` — `.getSeconds()`). |
| `getTimeMsc()` | Milliseconds epoch. |
| `getFlags()` | Tick flags. |

---

## 🧩 Notes & Tips

* **Always `unsubscribe()`.** An un-cancelled stream leaks — tie it to teardown.
* **Keep callbacks light.** They run on the single event loop; heavy work stalls other streams. See [Concurrency Model](../../All_Guides/CONCURRENCY_MODEL.md).
* **Stream ends** surface via `onError` (`MrpcError('tick stream ended')`); reconnect + resubscribe to resume.
* **Friendly form.** [`MT5Service.streamTicks`](../../MT5Service/6.%20Streaming_Methods.md) maps each tick to a `Quote`.

---

## 🔗 Usage Examples

### 1) Stream one symbol

```ts
const sub = account.onSymbolTick(['EURUSD'], (data) => {
  const t = data.getSymbolTick();
  console.log(`${t.getSymbol()} ${t.getBid()}/${t.getAsk()}`);
}, (e) => console.error('stream error:', e.message));
```

### 2) Several symbols

```ts
const sub = account.onSymbolTick(['EURUSD', 'GBPUSD', 'XAUUSD'], (data) => {
  const t = data.getSymbolTick();
  console.log(t.getSymbol(), t.getBid());
});
```

### 3) Cache the latest prices

```ts
const latest = new Map<string, { bid: number; ask: number }>();
const sub = account.onSymbolTick(['EURUSD', 'GBPUSD'], (data) => {
  const t = data.getSymbolTick();
  latest.set(t.getSymbol(), { bid: t.getBid(), ask: t.getAsk() });
});
```

### 4) Stop after N ticks

```ts
let n = 0;
const sub = account.onSymbolTick(['EURUSD'], (data) => {
  console.log(data.getSymbolTick().getBid());
  if (++n >= 10) sub.unsubscribe();
});
```

---

## 🔧 Common Patterns

### Promise that resolves on the first tick

```ts
function firstTick(account: MT5Account, symbol: string): Promise<{ bid: number; ask: number }> {
  return new Promise((resolve) => {
    const sub = account.onSymbolTick([symbol], (data) => {
      const t = data.getSymbolTick();
      sub.unsubscribe();
      resolve({ bid: t.getBid(), ask: t.getAsk() });
    });
  });
}
```

---

## 📚 See Also

* [SymbolInfoTick](../2.%20Symbol_information/SymbolInfoTick.md) — one-shot equivalent. · [OnTrade](./OnTrade.md)
* **Friendly layer:** [`MT5Service.streamTicks`](../../MT5Service/6.%20Streaming_Methods.md) → `Quote` · [`MT5Sugar`](../../MT5Sugar/MT5Sugar.API_Overview.md).

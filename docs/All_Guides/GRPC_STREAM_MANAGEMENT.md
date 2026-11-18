# gRPC Stream Management — Node

> Every live feed in NodeMT5 is a gRPC **server stream**. The SDK wraps each one in the same simple contract: a callback per payload, an optional error callback, and a `Subscription` you must cancel. This page covers the contract, the lifecycle, and how to run streams safely.

---

## 🧰 The `Subscription` contract

```ts
interface Subscription { unsubscribe(): void; }
```

Every streaming method has the shape:

```ts
method(args?, callback: (data) => void, onError?: (e: Error) => void): Subscription
```

```ts
const sub = account.onSymbolTick(['EURUSD'], (data) => {
  const t = data.getSymbolTick();
  console.log(t.getSymbol(), t.getBid(), t.getAsk());
}, (err) => console.error('stream error:', err.message));

// stop it later — ALWAYS do this
sub.unsubscribe();
```

---

## 🔁 What happens under the hood

The low-level `openStream` opens the gRPC server stream and forwards frames:

* **data frame** → if the reply carries an `error`, your `onError` gets an [`MrpcError`](./RETURN_CODES_REFERENCE.md); otherwise your `callback` gets the reply's `data`.
* **transport error** → `onError` (unless you already unsubscribed and it's a CANCELLED).
* **stream end** → if you didn't cancel it, `onError` receives `MrpcError('… stream ended')`.
* **`unsubscribe()`** → cancels the gRPC call; the resulting CANCELLED is swallowed, not surfaced.

So a clean shutdown is silent, and an *unexpected* end is reported.

---

## 📡 The streams available

| Method (MT5Account) | Mapped variant (MT5Service) | Payload |
| ------------------- | --------------------------- | ------- |
| `onSymbolTick(symbols, cb)` | `streamTicks(symbols, cb)` → `Quote` | ticks |
| `onTrade(cb)` | `streamTradeUpdates(cb)` | trade events |
| `onPositionProfit(req, cb)` | `streamPositionProfits(cb)` | P&L on a timer |
| `onPositionsAndPendingOrdersTickets(req, cb)` | `streamOpenedTickets(cb)` | ticket snapshots on a timer |
| `onTradeTransaction(cb)` | `streamTransactions(cb)` | trade transactions |

`streamTicks` maps each tick to a friendly `Quote`; the others forward the raw `*Data` message (use its getters).

---

## ⏲️ Timer-driven streams

`onPositionProfit` and `onPositionsAndPendingOrdersTickets` push on a timer you set in the request:

```ts
import { SubscriptionsPb } from '@metarpc/nodemt5';

const req = new SubscriptionsPb.OnPositionProfitRequest();
req.setTimerPeriodMilliseconds(1000);   // every second
req.setIgnoreEmptyData(true);

const sub = account.onPositionProfit(req, (data) => {
  for (const p of data.getUpdatedPositionsList()) {
    console.log(`#${p.getTicket()} ${p.getPositionSymbol()}  ${p.getProfit()}`);
  }
});
```

---

## 🧹 Lifecycle & cleanup

* **Keep the handle.** Losing the `Subscription` means you can't stop the stream.
* **Unsubscribe on shutdown.** Tie it to your app's teardown:

```ts
const subs = [];
subs.push(service.streamTicks(['EURUSD'], onTick));
subs.push(service.streamTradeUpdates(onTrade));

process.on('SIGINT', () => {
  subs.forEach((s) => s.unsubscribe());
  process.exit(0);
});
```

* **Disconnect last.** After unsubscribing, `await sugar.service().disconnect()` to release the terminal.

---

## ⚠️ Backpressure & long work

Stream callbacks run on the single event loop ([Concurrency Model](./CONCURRENCY_MODEL.md)). If a callback does heavy synchronous work, it stalls every other callback and timer. Keep callbacks light — push data into a queue and process it elsewhere if needed. Don't `await` a slow unary call inside a high-frequency tick callback without guarding against overlap.

---

## 🔌 Reconnection

If the terminal drops, a stream ends and `onError` fires. To resume: reconnect the account (`sugar.quickConnect(...)` / `account.reconnect()`) and re-subscribe. The SDK does not silently auto-resubscribe a stream — you decide the policy (immediate retry, backoff, alert).

---

## See also

* [MT5Account · Streaming Methods](../MT5Account/7.%20Streaming_Methods/Streaming_Methods.Overview.md) — exact payload getters.
* [Concurrency Model](./CONCURRENCY_MODEL.md) · [Return Codes & errors](./RETURN_CODES_REFERENCE.md).

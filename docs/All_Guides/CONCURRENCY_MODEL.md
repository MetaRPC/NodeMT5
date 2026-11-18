# The Concurrency Model — How NodeMT5 Executes

> NodeMT5 is built on **Promises and `async`/`await`**. Unary calls are async functions you `await`; streams hand you a **callback** plus a `Subscription` you cancel. Everything runs on Node's single-threaded event loop — no threads, no locks.

---

## 🎯 Two shapes of call

| Shape | What it is | How you consume it |
| ----- | ---------- | ------------------ |
| **Unary (request / response)** | `getAccountSummary()`, `getSymbolTick()`, `placeOrder()` | `await` it; the promise resolves with the result (or rejects) |
| **Server stream** | `onSymbolTick()`, `streamTicks()` | pass a callback; it fires per payload; keep the returned `Subscription` and call `unsubscribe()` |

### Unary — `await`

Every unary method returns a `Promise`. There is nothing to poll; the gRPC round-trip happens inside the `await`.

```ts
const a = await service.getAccountSummary();     // resolves with AccountInfo
console.log(a.balance, a.equity);

const quote = await service.getSymbolTick('EURUSD');
```

A failure **rejects** the promise with an [`MrpcError`](./RETURN_CODES_REFERENCE.md) — catch it:

```ts
try {
  const t = await sugar.buyMarket('EURUSD', 0.10);
} catch (e) {
  console.error('rejected:', e.message);
}
```

### Streaming — callback + `Subscription`

A stream does not return data; it calls your callback on each payload and returns a handle to stop it.

```ts
const sub = service.streamTicks(['EURUSD'], (q) => {
  console.log(q.bid, q.ask);
}, (err) => console.error(err.message));

setTimeout(() => sub.unsubscribe(), 30_000);   // stop after 30s
```

---

## 🧵 One event loop, no threads

Node runs your JavaScript on **one thread**. `await` doesn't spawn a thread — it yields the event loop until the I/O completes, then resumes. That means:

* **No data races** on your own variables *within* a synchronous run — but another callback or timer **can** run between your `await`s. Don't assume state is unchanged across an `await`.
* A long **synchronous** loop blocks everything (including stream callbacks). Keep callbacks short; offload heavy CPU work.
* Stream callbacks are invoked as payloads arrive, interleaved with your unary `await`s on the same loop.

---

## 🔀 Running calls concurrently

`await` in sequence is serial. To run independent calls at once, start them together and `Promise.all`:

```ts
// serial — two round-trips back to back
const bid = await sugar.getBid('EURUSD');
const ask = await sugar.getAsk('EURUSD');

// concurrent — both in flight together
const [b, a] = await Promise.all([
  sugar.getBid('EURUSD'),
  sugar.getAsk('EURUSD'),
]);
```

The SDK itself does this internally — e.g. `getPriceInfo` fetches the tick and the symbol params with `Promise.all`.

---

## ⏱️ Timeouts

Every unary call carries an internal gRPC deadline; on expiry the promise rejects.

* **Default deadline — `30_000` ms.** Set on `MT5Account.callTimeoutMs`; tune it for a slow link:

  ```ts
  sugar.account().callTimeoutMs = 60_000;   // 60s for every unary call
  ```

* **Per-call override.** Methods that can run long accept a `timeoutMs` argument (e.g. `symbolParamsMany(symbol?, timeoutMs)` defaults to `120_000`; the low-level `symbolInfo*` take an optional `timeoutMs`).
* **Connect** takes `timeoutSeconds` in its options (default `60`); `reconnect` uses `70_000` ms.
* **MT5Sugar** manages timeouts for you — its methods take no timeout argument.

---

## 🧹 Lifecycle

```ts
const sugar = MT5Sugar.create('mt5.mrpc.pro', 443, apiKey);
await sugar.quickConnect(login, password, server);   // obtains the terminal session
// … use it …
await sugar.service().disconnect(true);              // stop the terminal + free resources
```

Always unsubscribe streams and disconnect when done — an open stream or warm terminal keeps resources alive on the gateway.

---

## See also

* [gRPC Stream Management](./GRPC_STREAM_MANAGEMENT.md) — streams in depth.
* [Return Codes & error model](./RETURN_CODES_REFERENCE.md).

# 📡 Streaming Trade Events (OnTrade)

> **Subscribe:** trade events — something in your account changed: orders, positions or deals (`OnTradeData` per event), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.onTrade(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.SubscriptionService`
* **Proto definition:** `OnTrade` (in `mt5-term-api-subscriptions.proto`)

### RPC

* **Service:** `mt5_term_api.SubscriptionService`
* **Method:** `OnTrade(OnTradeRequest) → stream OnTradeReply`
* **Low-level client (generated):** `SubscriptionServiceClient.onTrade(request, metadata)`

---

## 💬 Just the essentials

* **What it is.** A server stream that fires whenever the trading state changes (an order placed/filled/removed, a position opened/closed…).
* **Why you need it.** Keep your app's view of positions/orders in sync without polling.
* **Sanity check.** You receive an event shortly after you trade.

---

## 🎯 Purpose

* React to fills and closes as they happen.
* Invalidate a cached book and re-pull [OpenedOrders](../3.%20Position_Orders_Information/OpenedOrders.md) on change.

---

## 📚 Tutorial

1. **Call** `account.onTrade(callback, onError?)`.
2. **Inspect** each payload's `getType()` and `getEventData()`; `getAccountInfo()` carries a fresh account snapshot.
3. **Keep the `Subscription`** and `unsubscribe()` when done.

```ts
const sub = account.onTrade((data) => {
  console.log('trade event, type', data.getType());
});
```

---

## 🧱 Signature

```ts
import { MT5Account, Subscription } from '@metarpc/nodemt5';

class MT5Account {
  // Stream trade events. Returns a Subscription; call unsubscribe() to stop.
  onTrade(
    callback: (data: any /* OnTradeData */) => void,
    onError?: (e: Error) => void,
  ): Subscription;
}
```

**Request message:** `OnTradeRequest {}` *(empty)* — built for you.

**Reply message (streamed):**

```protobuf
OnTradeReply {
  oneof response {
    OnTradeData data = 1;
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `callback` | `(data) => void` | Called per event with the raw `OnTradeData`. |
| `onError` | `(e) => void` | Optional; errors as `MrpcError`. |

---

## ⬆️ Payload — `OnTradeData`

| Field | JS accessor | Description |
| ----- | ----------- | ----------- |
| type | `getType()` | Event type. |
| event data | `getEventData()` | Details of what changed (new/updated/removed orders, positions, deals). |
| account info | `getAccountInfo()` | Account snapshot at the event. |

---

## 🧩 Notes & Tips

* **Coarse signal.** `OnTrade` says "something changed" — for per-transaction detail use [OnTradeTransaction](./OnTradeTransaction.md).
* **Re-pull on change.** A common pattern is to fetch [OpenedOrders](../3.%20Position_Orders_Information/OpenedOrders.md) when an event arrives.
* **Always `unsubscribe()`.**
* **Friendly form.** [`MT5Service.streamTradeUpdates`](../../MT5Service/6.%20Streaming_Methods.md).

---

## 🔗 Usage Examples

### 1) Log events

```ts
const sub = account.onTrade((data) => {
  console.log('event type', data.getType());
  const acc = data.getAccountInfo();
  if (acc) console.log('equity now', acc.getAccountEquity?.());
}, (e) => console.error(e.message));
```

### 2) Refresh the book on change

```ts
const sub = account.onTrade(async () => {
  const d = await account.openedOrders();
  console.log('positions now:', d.getPositionInfosList().length);
});
```

### 3) Stop after the first event

```ts
const sub = account.onTrade((data) => {
  console.log('first event:', data.getType());
  sub.unsubscribe();
});
```

---

## 🔧 Common Patterns

### Keep a live position count

```ts
function watchPositionCount(account: MT5Account, onCount: (n: number) => void) {
  return account.onTrade(async () => {
    const d = await account.openedOrders();
    onCount(d.getPositionInfosList().length);
  });
}
```

---

## 📚 See Also

* [OnTradeTransaction](./OnTradeTransaction.md) — lower-level per-transaction detail.
* [OpenedOrders](../3.%20Position_Orders_Information/OpenedOrders.md) — pull the full state on demand.
* **Friendly layer:** [`MT5Service.streamTradeUpdates`](../../MT5Service/6.%20Streaming_Methods.md).

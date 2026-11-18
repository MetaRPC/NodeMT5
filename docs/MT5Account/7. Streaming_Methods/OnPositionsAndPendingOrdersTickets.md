# 📡 Streaming Ticket Snapshots (OnPositionsAndPendingOrdersTickets)

> **Subscribe:** periodic snapshots of your open position & pending-order tickets on a timer (`OnPositionsAndPendingOrdersTicketsData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.onPositionsAndPendingOrdersTickets(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.SubscriptionService`
* **Proto definition:** `OnPositionsAndPendingOrdersTickets` (in `mt5-term-api-subscriptions.proto`)

### RPC

* **Service:** `mt5_term_api.SubscriptionService`
* **Method:** `OnPositionsAndPendingOrdersTickets(OnPositionsAndPendingOrdersTicketsRequest) → stream OnPositionsAndPendingOrdersTicketsReply`
* **Low-level client (generated):** `SubscriptionServiceClient.onPositionsAndPendingOrdersTickets(request, metadata)`

---

## 💬 Just the essentials

* **What it is.** A server stream that pushes, on your timer, the current lists of open **position** tickets and **pending-order** tickets.
* **Why you need it.** A cheap heartbeat to know *what* is open — pull detail only when the set changes.
* **Sanity check.** Both lists reflect what you have open.

---

## 🎯 Purpose

* A lightweight "is anything open?" monitor.
* Diff against a previous snapshot to detect opens/closes.

---

## 📚 Tutorial

1. **Build a request** with the timer period.
2. **Call** `account.onPositionsAndPendingOrdersTickets(req, callback, onError?)`.
3. **Read** `getPositionTicketsList()` and `getPendingOrderTicketsList()`.

```ts
import { SubscriptionsPb } from '@metarpc/nodemt5';

const req = new SubscriptionsPb.OnPositionsAndPendingOrdersTicketsRequest();
req.setTimerPeriodMilliseconds(2000);

const sub = account.onPositionsAndPendingOrdersTickets(req, (data) => {
  console.log('positions:', data.getPositionTicketsList());
  console.log('pendings :', data.getPendingOrderTicketsList());
});
```

---

## 🧱 Signature

```ts
import { MT5Account, SubscriptionsPb, Subscription } from '@metarpc/nodemt5';

class MT5Account {
  // Stream periodic ticket snapshots. Pass a built request (timer period). Returns a Subscription.
  onPositionsAndPendingOrdersTickets(
    req: any /* OnPositionsAndPendingOrdersTicketsRequest */,
    callback: (data: any /* OnPositionsAndPendingOrdersTicketsData */) => void,
    onError?: (e: Error) => void,
  ): Subscription;
}
```

**Request setters:** `setTimerPeriodMilliseconds(number)`.

**Reply message (streamed):**

```protobuf
OnPositionsAndPendingOrdersTicketsReply {
  oneof response {
    OnPositionsAndPendingOrdersTicketsData data = 1;
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `req` | `OnPositionsAndPendingOrdersTicketsRequest` | Timer period. |
| `callback` | `(data) => void` | Per snapshot. |
| `onError` | `(e) => void` | Optional. |

---

## ⬆️ Payload — `OnPositionsAndPendingOrdersTicketsData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| position tickets | `getPositionTicketsList()` | `number[]` | Open position tickets. |
| pending tickets | `getPendingOrderTicketsList()` | `number[]` | Pending-order tickets. |
| server time | `getServerTime()` | `Timestamp` | Snapshot time. |

---

## 🧩 Notes & Tips

* **Ids only.** For full records use [OpenedOrders](../3.%20Position_Orders_Information/OpenedOrders.md).
* **Same timer model** as [OnPositionProfit](./OnPositionProfit.md).
* **Always `unsubscribe()`.**
* **Friendly form.** [`MT5Service.streamOpenedTickets`](../../MT5Service/6.%20Streaming_Methods.md).

---

## 🔗 Usage Examples

### 1) Heartbeat print

```ts
import { SubscriptionsPb } from '@metarpc/nodemt5';

const req = new SubscriptionsPb.OnPositionsAndPendingOrdersTicketsRequest();
req.setTimerPeriodMilliseconds(2000);
const sub = account.onPositionsAndPendingOrdersTickets(req, (data) => {
  console.log('open positions:', data.getPositionTicketsList().length);
});
```

### 2) Detect a new position

```ts
let prev = new Set<number>();
const sub = account.onPositionsAndPendingOrdersTickets(req, (data) => {
  const now = new Set(data.getPositionTicketsList());
  for (const t of now) if (!prev.has(t)) console.log('opened', t);
  prev = now;
});
```

### 3) Stop when flat

```ts
const sub = account.onPositionsAndPendingOrdersTickets(req, (data) => {
  if (data.getPositionTicketsList().length === 0 && data.getPendingOrderTicketsList().length === 0) {
    console.log('all closed');
    sub.unsubscribe();
  }
});
```

---

## 🔧 Common Patterns

### Keep a live ticket set

```ts
const openPositions = new Set<number>();
function watchTickets(account: MT5Account) {
  const req = new SubscriptionsPb.OnPositionsAndPendingOrdersTicketsRequest();
  req.setTimerPeriodMilliseconds(2000);
  return account.onPositionsAndPendingOrdersTickets(req, (data) => {
    openPositions.clear();
    for (const t of data.getPositionTicketsList()) openPositions.add(t);
  });
}
```

---

## 📚 See Also

* [OpenedOrdersTickets](../3.%20Position_Orders_Information/OpenedOrdersTickets.md) — one-shot equivalent. · [OnPositionProfit](./OnPositionProfit.md)
* **Friendly layer:** [`MT5Service.streamOpenedTickets`](../../MT5Service/6.%20Streaming_Methods.md).

# 📡 Streaming Position P&L (OnPositionProfit)

> **Subscribe:** periodic open-position P&L snapshots on a timer (`OnPositionProfitData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.onPositionProfit(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.SubscriptionService`
* **Proto definition:** `OnPositionProfit` (in `mt5-term-api-subscriptions.proto`)

### RPC

* **Service:** `mt5_term_api.SubscriptionService`
* **Method:** `OnPositionProfit(OnPositionProfitRequest) → stream OnPositionProfitReply`
* **Low-level client (generated):** `SubscriptionServiceClient.onPositionProfit(request, metadata)`

---

## 💬 Just the essentials

* **What it is.** A server stream that pushes, on a timer you set, the current profit of your open positions (plus which appeared/changed/closed).
* **Why you need it.** A live P&L ticker without computing it yourself.
* **Sanity check.** With positions open, updates arrive every `timerPeriodMilliseconds`.

---

## 🎯 Purpose

* Drive a real-time P&L widget.
* Trigger logic when a position crosses a profit/loss threshold.

---

## 📚 Tutorial

1. **Build an `OnPositionProfitRequest`** with the timer period (and `setIgnoreEmptyData`).
2. **Call** `account.onPositionProfit(req, callback, onError?)`.
3. **Iterate** `getUpdatedPositionsList()` (and new/deleted) → `OnPositionProfitPositionInfo`.

```ts
import { SubscriptionsPb } from '@metarpc/nodemt5';

const req = new SubscriptionsPb.OnPositionProfitRequest();
req.setTimerPeriodMilliseconds(1000);
req.setIgnoreEmptyData(true);

const sub = account.onPositionProfit(req, (data) => {
  for (const p of data.getUpdatedPositionsList()) {
    console.log(`#${p.getTicket()} ${p.getPositionSymbol()} ${p.getProfit()}`);
  }
});
```

---

## 🧱 Signature

```ts
import { MT5Account, SubscriptionsPb, Subscription } from '@metarpc/nodemt5';

class MT5Account {
  // Stream periodic position P&L. Pass a built request (timer period). Returns a Subscription.
  onPositionProfit(
    req: any /* OnPositionProfitRequest */,
    callback: (data: any /* OnPositionProfitData */) => void,
    onError?: (e: Error) => void,
  ): Subscription;
}
```

**Request setters:** `setTimerPeriodMilliseconds(number)`, `setIgnoreEmptyData(boolean)`.

**Reply message (streamed):**

```protobuf
OnPositionProfitReply {
  oneof response {
    OnPositionProfitData data = 1;
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `req` | `OnPositionProfitRequest` | Timer period + ignore-empty flag. |
| `callback` | `(data) => void` | Per snapshot. |
| `onError` | `(e) => void` | Optional. |

---

## ⬆️ Payload — `OnPositionProfitData`

| Field | JS accessor | Description |
| ----- | ----------- | ----------- |
| type | `getType()` | Snapshot/event type. |
| new positions | `getNewPositionsList()` | Positions that appeared. |
| updated positions | `getUpdatedPositionsList()` | Positions whose P&L changed. |
| deleted positions | `getDeletedPositionsList()` | Positions that closed. |
| account info | `getAccountInfo()` | Account snapshot. |

Each list element is **`OnPositionProfitPositionInfo`**: `getIndex()`, `getTicket()`, `getProfit()`, `getPositionSymbol()`.

---

## 🧩 Notes & Tips

* **Set a sane timer.** `1000` ms is a smooth ticker; very small periods add load.
* **`setIgnoreEmptyData(true)`** skips empty snapshots when nothing changed.
* **Always `unsubscribe()`.**
* **Friendly form.** [`MT5Service.streamPositionProfits`](../../MT5Service/6.%20Streaming_Methods.md).

---

## 🔗 Usage Examples

### 1) Live P&L per position

```ts
import { SubscriptionsPb } from '@metarpc/nodemt5';

const req = new SubscriptionsPb.OnPositionProfitRequest();
req.setTimerPeriodMilliseconds(1000);
req.setIgnoreEmptyData(true);

const sub = account.onPositionProfit(req, (data) => {
  for (const p of data.getUpdatedPositionsList()) {
    console.log(`#${p.getTicket()} ${p.getPositionSymbol()} P&L ${p.getProfit().toFixed(2)}`);
  }
});
```

### 2) Total floating P&L ticker

```ts
const sub = account.onPositionProfit(req, (data) => {
  const total = data.getUpdatedPositionsList().reduce((s, p) => s + p.getProfit(), 0);
  console.log('floating:', total.toFixed(2));
});
```

### 3) Alert on a threshold

```ts
const sub = account.onPositionProfit(req, (data) => {
  for (const p of data.getUpdatedPositionsList()) {
    if (p.getProfit() <= -50) console.warn(`#${p.getTicket()} down ${p.getProfit()}`);
  }
});
```

---

## 🔧 Common Patterns

### P&L map kept current

```ts
const pnl = new Map<number, number>();
function watchPnl(account: MT5Account) {
  const req = new SubscriptionsPb.OnPositionProfitRequest();
  req.setTimerPeriodMilliseconds(1000); req.setIgnoreEmptyData(true);
  return account.onPositionProfit(req, (data) => {
    for (const p of data.getUpdatedPositionsList()) pnl.set(p.getTicket(), p.getProfit());
    for (const p of data.getDeletedPositionsList()) pnl.delete(p.getTicket());
  });
}
```

---

## 📚 See Also

* [OnPositionsAndPendingOrdersTickets](./OnPositionsAndPendingOrdersTickets.md) · [PositionsTotal](../3.%20Position_Orders_Information/PositionsTotal.md)
* **Friendly layer:** [`MT5Service.streamPositionProfits`](../../MT5Service/6.%20Streaming_Methods.md).

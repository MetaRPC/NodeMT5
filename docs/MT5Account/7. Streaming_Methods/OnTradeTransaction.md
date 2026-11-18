# 📡 Streaming Trade Transactions (OnTradeTransaction)

> **Subscribe:** raw trade-transaction events — the lowest-level view of fills, requests and results (`OnTradeTransactionData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.onTradeTransaction(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.SubscriptionService`
* **Proto definition:** `OnTradeTransaction` (in `mt5-term-api-subscriptions.proto`)

### RPC

* **Service:** `mt5_term_api.SubscriptionService`
* **Method:** `OnTradeTransaction(OnTradeTransactionRequest) → stream OnTradeTransactionReply`
* **Low-level client (generated):** `SubscriptionServiceClient.onTradeTransaction(request, metadata)`

---

## 💬 Just the essentials

* **What it is.** A server stream mirroring MT5's `OnTradeTransaction` — each order/deal transaction with its originating request and result.
* **Why you need it.** Audit-grade trade tracking: match a request to its deal, watch partial fills, build an order-state machine.
* **Sanity check.** A transaction arrives for each fill/modification you make.

---

## 🎯 Purpose

* Reconcile requests with the deals that executed them.
* Detect partial fills and state transitions precisely.

---

## 📚 Tutorial

1. **Call** `account.onTradeTransaction(callback, onError?)`.
2. **Inspect** `getTradeTransaction()` → `MqlTradeTransaction`, plus `getTradeRequest()` / `getTradeResult()`.
3. **Keep the `Subscription`** and `unsubscribe()` when done.

```ts
const sub = account.onTradeTransaction((data) => {
  const tx = data.getTradeTransaction();
  console.log(tx.getSymbol(), 'deal#', tx.getDealTicket(), 'order#', tx.getOrderTicket());
});
```

---

## 🧱 Signature

```ts
import { MT5Account, Subscription } from '@metarpc/nodemt5';

class MT5Account {
  // Stream trade-transaction events. Returns a Subscription; call unsubscribe() to stop.
  onTradeTransaction(
    callback: (data: any /* OnTradeTransactionData */) => void,
    onError?: (e: Error) => void,
  ): Subscription;
}
```

**Request message:** `OnTradeTransactionRequest {}` *(empty)* — built for you.

**Reply message (streamed):**

```protobuf
OnTradeTransactionReply {
  oneof response {
    OnTradeTransactionData data = 1;
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `callback` | `(data) => void` | Per transaction with the raw `OnTradeTransactionData`. |
| `onError` | `(e) => void` | Optional; errors as `MrpcError`. |

---

## ⬆️ Payload — `OnTradeTransactionData`

| Field | JS accessor | Description |
| ----- | ----------- | ----------- |
| type | `getType()` | Event type. |
| transaction | `getTradeTransaction()` | The `MqlTradeTransaction`. |
| request | `getTradeRequest()` | Originating trade request. |
| result | `getTradeResult()` | Trade result (retcode…). |
| account info | `getAccountInfo()` | Account snapshot. |

**`MqlTradeTransaction` key getters:** `getDealTicket()`, `getOrderTicket()`, `getPositionTicket()`, `getSymbol()`, `getType()`, `getOrderType()`, `getOrderState()`, `getDealType()`, `getPrice()`, `getPriceStopLoss()`, `getPriceTakeProfit()`, `getVolume()`.

---

## 🧩 Notes & Tips

* **Lowest level.** For a simpler "something changed" signal use [OnTrade](./OnTrade.md).
* **Match by position id.** Use `getPositionTicket()` to tie transactions to a position.
* **Always `unsubscribe()`.**
* **Friendly form.** [`MT5Service.streamTransactions`](../../MT5Service/6.%20Streaming_Methods.md).

---

## 🔗 Usage Examples

### 1) Log transactions

```ts
const sub = account.onTradeTransaction((data) => {
  const tx = data.getTradeTransaction();
  console.log(`tx ${data.getType()}  ${tx.getSymbol()}  deal#${tx.getDealTicket()}  order#${tx.getOrderTicket()}`);
}, (e) => console.error(e.message));
```

### 2) Watch a specific order's fills

```ts
function watchOrder(account: MT5Account, orderTicket: number) {
  return account.onTradeTransaction((data) => {
    const tx = data.getTradeTransaction();
    if (tx.getOrderTicket() === orderTicket) {
      console.log('fill', tx.getVolume(), '@', tx.getPrice());
    }
  });
}
```

### 3) Inspect the result retcode

```ts
const sub = account.onTradeTransaction((data) => {
  const res = data.getTradeResult();
  if (res) console.log('retcode', res.getReturnedCode?.());
});
```

---

## 🔧 Common Patterns

### Build a fill log

```ts
const fills: Array<{ order: number; volume: number; price: number }> = [];
function logFills(account: MT5Account) {
  return account.onTradeTransaction((data) => {
    const tx = data.getTradeTransaction();
    if (tx.getDealTicket() > 0) fills.push({ order: tx.getOrderTicket(), volume: tx.getVolume(), price: tx.getPrice() });
  });
}
```

---

## 📚 See Also

* [OnTrade](./OnTrade.md) — higher-level "something changed" event.
* [OrderSend](../4.%20Trading_Operations/OrderSend.md) — the action that triggers transactions.
* **Friendly layer:** [`MT5Service.streamTransactions`](../../MT5Service/6.%20Streaming_Methods.md).

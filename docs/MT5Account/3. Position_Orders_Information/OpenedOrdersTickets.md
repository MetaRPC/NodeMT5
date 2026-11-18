# 🎟️ Getting Opened Tickets

> **Request:** just the ticket numbers of open positions and pending orders (`OpenedOrdersTicketsData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.openedOrdersTickets(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.AccountHelper`
* **Proto definition:** `OpenedOrdersTickets` (in `mt5-term-api-account-helper.proto`)

### RPC

* **Service:** `mt5_term_api.AccountHelper`
* **Method:** `OpenedOrdersTickets(OpenedOrdersTicketsRequest) → OpenedOrdersTicketsReply`
* **Low-level client (generated):** `AccountHelperClient.openedOrdersTickets(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning two lists of ticket numbers: open **position** tickets and pending **order** tickets.
* **Why you need it.** A light "what's open" snapshot — pull full detail only when the set changes.
* **Sanity check.** Both lists are empty when nothing is open.

---

## 🎯 Purpose

* A cheap heartbeat to diff against a previous snapshot.
* Drive per-ticket actions (modify, close) without fetching full records.

---

## 📚 Tutorial

1. **Call** `account.openedOrdersTickets()` (default request).
2. **Read** `getOpenedPositionTicketsList()` and `getOpenedOrdersTicketsList()` — both are `number[]`.

```ts
const d = await account.openedOrdersTickets();
console.log('positions:', d.getOpenedPositionTicketsList());
console.log('pendings :', d.getOpenedOrdersTicketsList());
```

---

## 🧱 Signature

```ts
import { MT5Account } from '@metarpc/nodemt5';

class MT5Account {
  // Ticket numbers of open positions and pending orders. Default request needs no arguments.
  openedOrdersTickets(req?: any /* OpenedOrdersTicketsRequest */, timeoutMs?: number): Promise<any /* OpenedOrdersTicketsData */>;
}
```

**Request message:** `OpenedOrdersTicketsRequest {}` *(empty)* — built for you.

**Reply message:**

```protobuf
OpenedOrdersTicketsReply {
  oneof response {
    OpenedOrdersTicketsData data = 1;
    Error error = 2;
  }
}
```

---

## 🔽 Input

*None* (the default request is empty).

---

## ⬆️ Output — `OpenedOrdersTicketsData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| position tickets | `getOpenedPositionTicketsList()` | `number[]` | Tickets of open positions. |
| order tickets | `getOpenedOrdersTicketsList()` | `number[]` | Tickets of pending orders. |

---

## 🧩 Notes & Tips

* **Positions vs orders.** Two distinct lists on MT5 — a position is an open trade, a pending order is waiting to trigger.
* **Need details?** [OpenedOrders](./OpenedOrders.md) returns the full records; this returns only ids.
* **Streaming equivalent:** [OnPositionsAndPendingOrdersTickets](../7.%20Streaming_Methods/OnPositionsAndPendingOrdersTickets.md) pushes these lists on a timer.

---

## 🔗 Usage Examples

### 1) List both

```ts
const d = await account.openedOrdersTickets();
console.log('positions:', d.getOpenedPositionTicketsList());
console.log('orders:', d.getOpenedOrdersTicketsList());
```

### 2) Count open positions cheaply

```ts
const d = await account.openedOrdersTickets();
console.log('open positions:', d.getOpenedPositionTicketsList().length);
```

### 3) Act on each position ticket

```ts
import { TradingHelperPb } from '@metarpc/nodemt5';
const d = await account.openedOrdersTickets();
for (const ticket of d.getOpenedPositionTicketsList()) {
  const req = new TradingHelperPb.OrderCloseRequest();
  req.setTicket(ticket);
  await account.orderClose(req);
}
```

### 4) Diff against a previous snapshot

```ts
let prev = new Set<number>();
async function changed(account: MT5Account): Promise<boolean> {
  const now = new Set((await account.openedOrdersTickets()).getOpenedPositionTicketsList());
  const diff = now.size !== prev.size || [...now].some((t) => !prev.has(t));
  prev = now;
  return diff;
}
```

---

## 🔧 Common Patterns

### Snapshot helper

```ts
async function openTickets(account: MT5Account): Promise<{ positions: number[]; orders: number[] }> {
  const d = await account.openedOrdersTickets();
  return { positions: d.getOpenedPositionTicketsList(), orders: d.getOpenedOrdersTicketsList() };
}
```

---

## 📚 See Also

* [OpenedOrders](./OpenedOrders.md) — the full records. · [PositionsTotal](./PositionsTotal.md)
* **Friendly layer:** [`MT5Service.getOpenedTickets`](../../MT5Service/3.%20Position_Orders_Methods.md) · [OnPositionsAndPendingOrdersTickets](../7.%20Streaming_Methods/OnPositionsAndPendingOrdersTickets.md).

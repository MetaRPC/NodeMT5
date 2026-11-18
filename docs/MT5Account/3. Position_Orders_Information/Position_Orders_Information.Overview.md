# MT5Account · Positions & Orders — Overview

> The current order book and the history. On MT5, **positions** (net market exposure), **orders** (pending/working) and **deals** (executed transactions) are distinct — these methods read each.

`positionsTotal` lives on `mt5_term_api.TradeFunctions`; the rest on `mt5_term_api.AccountHelper`. Each resolves with raw `*Data`, or rejects with `MrpcError`.

## 📁 What lives here

### Current state
* **[PositionsTotal](./PositionsTotal.md)** — number of open positions.
* **[OpenedOrders](./OpenedOrders.md)** — open positions **and** pending orders, with full detail.
* **[OpenedOrdersTickets](./OpenedOrdersTickets.md)** — just the ticket numbers (lightweight).

### History
* **[OrderHistory](./OrderHistory.md)** — historical orders **and** deals in a window (paged).
* **[PositionsHistory](./PositionsHistory.md)** — closed positions with P&L.

---

## 🧭 Plain English

* **How many positions are open?** → `positionsTotal`.
* **Full blotter of positions + pending orders?** → `openedOrders`.
* **Cheap "which tickets exist?" poll?** → `openedOrdersTickets`.
* **What closed, and for how much?** → `orderHistory` (orders + deals) / `positionsHistory` (closed positions).

> **🆚 Positions vs orders vs deals (MT5):** a **position** is open exposure; a **pending order** rests until it triggers; a **deal** is an executed transaction recorded in history. Realized P/L lives on deals / closed positions.

---

## Quick choose

| If you need…                         | Use                    | Returns |
| ------------------------------------ | ---------------------- | ------- |
| Count of open positions              | `positionsTotal`       | `PositionsTotalData` (`getTotalPositions()`) |
| Positions + pending orders (detail)  | `openedOrders`         | `OpenedOrdersData` |
| Just the tickets                     | `openedOrdersTickets`  | `OpenedOrdersTicketsData` |
| Closed orders + deals in a window    | `orderHistory`         | `OrdersHistoryData` |
| Closed positions with P&L            | `positionsHistory`     | `PositionsHistoryData` |

---

## ❌ Cross-refs & gotchas

* **History windows are server time.** `orderHistory` / `positionsHistory` take broker-server-time bounds — build them from UTC with `MT5Account.serverDate(utc, shiftMinutes)` (the shift comes from `accountSummary`).
* **Paging.** History methods accept page / items-per-page; loop pages for a long range.
* **Positions ≠ deals.** A single position can span several deals (in, partial out, out). `positionsHistory` is per-closed-position; `orderHistory` exposes the raw orders & deals.

---

## 🟢 Minimal snippets

```ts
// Count open positions
const total = (await account.positionsTotal()).getTotalPositions();
console.log(`Open positions: ${total}`);
```

```ts
// Full blotter — positions and pending orders
const d = await account.openedOrders();
console.log(`Positions: ${d.getPositionInfosList().length}, pending: ${d.getOpenedOrdersList().length}`);

for (const pos of d.getPositionInfosList()) {
  console.log(`#${pos.getTicket()}: ${pos.getSymbol()} ${pos.getVolume()} lots @ ${pos.getPriceOpen()}, P/L: $${pos.getProfit().toFixed(2)}`);
}
```

```ts
// Ticket numbers only (lightweight)
const t = await account.openedOrdersTickets();
console.log('Position tickets:', t.getOpenedPositionTicketsList());
console.log('Pending-order tickets:', t.getOpenedOrdersTicketsList());
```

```ts
// Historical orders — last 7 days
const now = new Date();
const weekAgo = new Date(now.getTime() - 7 * 24 * 3600 * 1000);

const h = await account.orderHistory(weekAgo, now, { page: 1, perPage: 100 });
for (const item of h.getHistoryDataList()) {
  const o = item.getHistoryOrder();
  if (o) console.log(`#${o.getTicket()}: ${o.getSymbol()} @ ${o.getPriceOpen()}`);
}
```

```ts
// Closed positions today — total realized P&L
const now = new Date();
const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

const ph = await account.positionsHistory(startOfDay, now, { page: 1, perPage: 100 });
let totalProfit = 0;
for (const pos of ph.getHistoryPositionsList()) {
  totalProfit += pos.getProfit();
  console.log(`#${pos.getPositionTicket()}: ${pos.getSymbol()} ${pos.getVolume()} lots → $${pos.getProfit().toFixed(2)}`);
}
console.log(`Total realized P&L today: $${totalProfit.toFixed(2)}`);
```

> **Dates → server time.** `orderHistory` / `positionsHistory` accept a `Date` (or unix-ms `number`); the SDK converts to the broker-server-time bounds the gateway expects.

---

## See also

* **Trading:** [OrderSend](../4.%20Trading_Operations/OrderSend.md) · [OrderClose](../4.%20Trading_Operations/OrderClose.md) — act on these.
* **Friendly layer:** [`MT5Service.getOpenedOrders()` / `getPositions()` / `getOrderHistory()` / `getPositionsHistory()`](../../MT5Service/MT5Service.Overview.md).

---

**Back to:** [MT5Account — Master Overview](../MT5Account.Master.Overview.md)

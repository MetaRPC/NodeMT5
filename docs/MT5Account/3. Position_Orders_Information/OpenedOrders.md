# 📂 Getting Opened Orders & Positions

> **Request:** all open positions and pending orders, with full detail (`OpenedOrdersData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.openedOrders(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.AccountHelper`
* **Proto definition:** `OpenedOrders` (in `mt5-term-api-account-helper.proto`)

### RPC

* **Service:** `mt5_term_api.AccountHelper`
* **Method:** `OpenedOrders(OpenedOrdersRequest) → OpenedOrdersReply`
* **Low-level client (generated):** `AccountHelperClient.openedOrders(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning two full lists: your open **positions** and your pending **orders**.
* **Why you need it.** The complete live state — tickets, volumes, prices, SL/TP, profit — for monitoring and management.
* **Sanity check.** `getPositionInfosList()` has one entry per open position.

---

## 🎯 Purpose

* Render a positions / orders table.
* Compute total floating P/L, exposure per symbol, or risk.
* Find the ticket to modify or close.

---

## 📚 Tutorial

1. **Call** `account.openedOrders()` (the default request returns everything).
2. **Iterate** `getPositionInfosList()` for open positions and `getOpenedOrdersList()` for pending orders.
3. **Read** each record's getters (ticket, symbol, volume, profit…).

```ts
const d = await account.openedOrders();
for (const p of d.getPositionInfosList()) {
  console.log(`#${p.getTicket()} ${p.getSymbol()} ${p.getVolume()} P/L ${p.getProfit()}`);
}
```

---

## 🧱 Signature

```ts
import { MT5Account } from '@metarpc/nodemt5';

class MT5Account {
  // Open positions + pending orders with full detail. Default request returns all.
  openedOrders(req?: any /* OpenedOrdersRequest */, timeoutMs?: number): Promise<any /* OpenedOrdersData */>;
}
```

**Request message:** `OpenedOrdersRequest {}` *(empty; optional sort)* — built for you.

**Reply message:**

```protobuf
OpenedOrdersReply {
  oneof response {
    OpenedOrdersData data = 1;
    Error error = 2;
  }
}
```

---

## 🔽 Input

*None* (the default request returns all open positions and orders).

---

## ⬆️ Output — `OpenedOrdersData`

| Field | JS accessor | Element type | Description |
| ----- | ----------- | ------------ | ----------- |
| positions | `getPositionInfosList()` | `PositionInfo` | Open positions. |
| pending orders | `getOpenedOrdersList()` | `OpenedOrderInfo` | Pending orders. |

### `PositionInfo` — key getters

| Getter | Description |
| ------ | ----------- |
| `getTicket()` | Position ticket. |
| `getSymbol()` | Instrument. |
| `getType()` | `0 = BUY`, `1 = SELL` (`BMT5_ENUM_POSITION_TYPE`). |
| `getVolume()` | Lots. |
| `getPriceOpen()` / `getPriceCurrent()` | Open / current price. |
| `getStopLoss()` / `getTakeProfit()` | SL / TP. |
| `getSwap()` / `getProfit()` / `getPositionCommission()` | Swap / floating P/L / commission. |
| `getMagicNumber()` | Magic (EA id). |
| `getOpenTime()` | Open time (`Timestamp`). |
| `getIdentifier()` | Position identifier. |
| `getComment()` | Comment. |

### `OpenedOrderInfo` — key getters

| Getter | Description |
| ------ | ----------- |
| `getTicket()` | Order ticket. |
| `getSymbol()` | Instrument. |
| `getType()` | Order type (`TMT5_ENUM_ORDER_TYPE`). |
| `getState()` | Order state. |
| `getVolumeInitial()` / `getVolumeCurrent()` | Initial / remaining volume. |
| `getPriceOpen()` / `getPriceCurrent()` | Trigger / current price. |
| `getStopLoss()` / `getTakeProfit()` / `getStopLimit()` | SL / TP / stop-limit. |
| `getMagicNumber()` | Magic (EA id). |
| `getTimeSetup()` / `getTimeExpiration()` | Placed / expiry time. |
| `getPositionId()` | Linked position id. |

---

## 🧩 Notes & Tips

* **Two lists, two types.** Positions are open trades; pending orders wait to trigger — don't conflate them.
* **Position type is `0`/`1`.** `getType() === 0` is a long.
* **Timestamps** are protobuf `Timestamp` — read `.getSeconds()`.
* **Friendly form.** [`MT5Service.getOpenedOrders`](../../MT5Service/3.%20Position_Orders_Methods.md) returns `{ positions, orders }` as mapped `Position[]` / `PendingOrder[]`.

---

## 🔗 Usage Examples

### 1) List open positions

```ts
const d = await account.openedOrders();
for (const p of d.getPositionInfosList()) {
  console.log(`#${p.getTicket()} ${p.getSymbol()} ${p.getType() === 0 ? 'BUY' : 'SELL'} ${p.getVolume()} → ${p.getProfit()}`);
}
```

### 2) Total floating P/L

```ts
const d = await account.openedOrders();
const pnl = d.getPositionInfosList().reduce((s, p) => s + p.getProfit(), 0);
console.log('floating P/L:', pnl.toFixed(2));
```

### 3) Pending orders

```ts
const d = await account.openedOrders();
for (const o of d.getOpenedOrdersList()) {
  console.log(`#${o.getTicket()} ${o.getSymbol()} vol ${o.getVolumeCurrent()} @ ${o.getPriceOpen()}`);
}
```

### 4) Positions on one symbol

```ts
const d = await account.openedOrders();
const eur = d.getPositionInfosList().filter((p) => p.getSymbol() === 'EURUSD');
console.log('EURUSD positions:', eur.length);
```

### 5) Find a position by ticket

```ts
function findPosition(d: any, ticket: number) {
  return d.getPositionInfosList().find((p: any) => p.getTicket() === ticket);
}
const d = await account.openedOrders();
const pos = findPosition(d, 123456);
if (pos) console.log('profit', pos.getProfit());
```

### 6) Exposure per symbol

```ts
const d = await account.openedOrders();
const exposure = new Map<string, number>();
for (const p of d.getPositionInfosList()) {
  const signed = (p.getType() === 0 ? 1 : -1) * p.getVolume();
  exposure.set(p.getSymbol(), (exposure.get(p.getSymbol()) ?? 0) + signed);
}
console.log(Object.fromEntries(exposure));
```

---

## 🔧 Common Patterns

### Summarise the book

```ts
async function summary(account: MT5Account): Promise<{ positions: number; pendings: number; pnl: number }> {
  const d = await account.openedOrders();
  const positions = d.getPositionInfosList();
  return {
    positions: positions.length,
    pendings: d.getOpenedOrdersList().length,
    pnl: positions.reduce((s: number, p: any) => s + p.getProfit(), 0),
  };
}
```

---

## 📚 See Also

* [OpenedOrdersTickets](./OpenedOrdersTickets.md) — just the ids. · [PositionsTotal](./PositionsTotal.md)
* [OrderSend](../4.%20Trading_Operations/OrderSend.md) / [OrderClose](../4.%20Trading_Operations/OrderClose.md) — act on a ticket.
* **Friendly layer:** [`MT5Service.getOpenedOrders / getPositions`](../../MT5Service/3.%20Position_Orders_Methods.md) · [`MT5Sugar.getOpenPositions`](../../MT5Sugar/6.%20Position_Management.md).

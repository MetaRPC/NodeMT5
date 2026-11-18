# 🔢 Counting Open Positions

> **Request:** how many positions are currently open (`PositionsTotalData` → a `number`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.positionsTotal(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.TradeFunctions`
* **Proto definition:** `PositionsTotal` (in `mt5-term-api-trade-functions.proto`)

### RPC

* **Service:** `mt5_term_api.TradeFunctions`
* **Method:** `PositionsTotal(google.protobuf.Empty) → PositionsTotalReply`
* **Low-level client (generated):** `TradeFunctionsClient.positionsTotal(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning the number of open **positions** (not orders, not deals).
* **Why you need it.** A cheap "do I have exposure?" check before pulling full details.
* **Sanity check.** `0` when flat; grows as you open positions.

---

## 🎯 Purpose

* A lightweight gate: skip the heavier [OpenedOrders](./OpenedOrders.md) call when the count is `0`.
* Enforce a max-positions rule before opening another.

---

## 📚 Tutorial

The request is an empty message — just call it:

```ts
const total = (await account.positionsTotal()).getTotalPositions();
console.log('open positions:', total);
```

The SDK sends `google.protobuf.Empty` for you; read `getTotalPositions()` from the reply.

---

## 🧱 Signature

```ts
import { MT5Account } from '@metarpc/nodemt5';

class MT5Account {
  // Count open positions. No arguments (the RPC uses google.protobuf.Empty).
  positionsTotal(timeoutMs?: number): Promise<any /* PositionsTotalData */>;
}
```

**Request message:** `google.protobuf.Empty {}` *(empty)* — built for you.

**Reply message:**

```protobuf
PositionsTotalReply {
  oneof response {
    PositionsTotalData data = 1;   // getTotalPositions(): int32
    Error error = 2;
  }
}
```

---

## 🔽 Input

*None.* The method takes no arguments.

---

## ⬆️ Output — `PositionsTotalData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| total positions | `getTotalPositions()` | `number` | Count of open positions. |

> ⚠️ The accessor is `getTotalPositions()` — not `getTotal()`. (The friendly layer wraps this; a wrong accessor silently returns `0`.)

---

## 🧩 Notes & Tips

* **Positions, not orders.** Pending orders are counted separately — see [OpenedOrders](./OpenedOrders.md) / [OpenedOrdersTickets](./OpenedOrdersTickets.md).
* **Friendly form.** [`MT5Service.getPositionsTotal`](../../MT5Service/3.%20Position_Orders_Methods.md) returns the number directly.

---

## 🔗 Usage Examples

### 1) Basic count

```ts
const total = (await account.positionsTotal()).getTotalPositions();
console.log('open positions:', total);
```

### 2) Skip heavy work when flat

```ts
if ((await account.positionsTotal()).getTotalPositions() === 0) {
  console.log('nothing open');
} else {
  const d = await account.openedOrders();
  console.log('positions:', d.getPositionInfosList().length);
}
```

### 3) Enforce a max-positions rule

```ts
const MAX = 5;
if ((await account.positionsTotal()).getTotalPositions() >= MAX) {
  throw new Error('position limit reached');
}
```

### 4) Poll exposure

```ts
for (let i = 0; i < 3; i++) {
  console.log('open:', (await account.positionsTotal()).getTotalPositions());
  await new Promise((r) => setTimeout(r, 1000));
}
```

---

## 🔧 Common Patterns

### Boolean "has exposure"

```ts
async function hasExposure(account: MT5Account): Promise<boolean> {
  return (await account.positionsTotal()).getTotalPositions() > 0;
}
```

---

## 📚 See Also

* [OpenedOrders](./OpenedOrders.md) — full position & order detail. · [OpenedOrdersTickets](./OpenedOrdersTickets.md)
* **Friendly layer:** [`MT5Service.getPositionsTotal`](../../MT5Service/3.%20Position_Orders_Methods.md) · [`MT5Sugar.countOpenPositions`](../../MT5Sugar/7.%20Position_Information.md).

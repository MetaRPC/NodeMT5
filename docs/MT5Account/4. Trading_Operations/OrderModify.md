# ✏️ Modifying an Order

> **Request:** change SL/TP of a position, or SL/TP/price/expiration of a pending order (`OrderModifyData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.orderModify(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.TradingHelper`
* **Proto definition:** `OrderModify` (in `mt5-term-api-trading-helper.proto`)

### RPC

* **Service:** `mt5_term_api.TradingHelper`
* **Method:** `OrderModify(OrderModifyRequest) → OrderModifyReply`
* **Low-level client (generated):** `TradingHelperClient.orderModify(request, metadata, opts)`

---

## 🛑 Result is in the retcode

> Like [OrderSend](./OrderSend.md), `orderModify` **rejects** only on a transport error. A broker rejection comes back in the result — check `getReturnedCode()`: **`10009` = DONE**.

---

## 💬 Just the essentials

* **What it is.** One RPC that updates an existing order/position by ticket.
* **Why you need it.** Move a stop (trailing), set a take-profit, re-price a pending order.
* **Sanity check.** `getReturnedCode() === 10009`.

---

## 🎯 Purpose

* Trail or tighten a stop-loss as price moves.
* Add or change a take-profit after entry.
* Re-price or re-time a pending order.

---

## 📚 Tutorial

1. **Build an `OrderModifyRequest`** with the ticket and the fields to change.
2. **Call** `account.orderModify(req)`.
3. **Check `getReturnedCode()`** (`10009` = done).

```ts
import { MT5Account, TradingHelperPb } from '@metarpc/nodemt5';

const req = new TradingHelperPb.OrderModifyRequest();
req.setTicket(ticket);
req.setStopLoss(1.0900);
req.setTakeProfit(1.1100);
const d = await account.orderModify(req);
console.log(d.getReturnedCode() === 10009 ? 'modified' : d.getReturnedCodeDescription());
```

---

## 🧱 Signature

```ts
import { MT5Account, TradingHelperPb } from '@metarpc/nodemt5';

class MT5Account {
  // Modify SL/TP/price/expiration. Pass a built OrderModifyRequest. Returns OrderModifyData.
  orderModify(req: any /* OrderModifyRequest */, timeoutMs?: number): Promise<any /* OrderModifyData */>;
}
```

**Request setters:** `setTicket(number)`, `setStopLoss(number)`, `setTakeProfit(number)`, `setPrice(number)` *(pending only)*, `setStopLimit(number)`, `setExpirationTimeType(number)`, `setExpirationTime(Timestamp)`.

**Reply message:**

```protobuf
OrderModifyReply {
  oneof response {
    OrderModifyData data = 1;
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Setter | Type | Description |
| ------ | ---- | ----------- |
| `setTicket(ticket)` | `number` | Position / order ticket. |
| `setStopLoss` / `setTakeProfit` | `number` | New SL / TP prices (`0` leaves unset where supported). |
| `setPrice` | `number` | New trigger price (pending orders). |
| `setStopLimit` | `number` | New stop-limit price. |
| `setExpirationTimeType` / `setExpirationTime` | `number` / `Timestamp` | New expiry (pending). |

---

## ⬆️ Output — `OrderModifyData`

Same shape as [OrderSend → Output](./OrderSend.md#output-ordersenddata): `getReturnedCode()` (10009 = DONE), `getReturnedCodeDescription()`, `getReturnedStringCode()`, `getOrder()`, `getDeal()`, `getPrice()`, …

---

## 🧩 Notes & Tips

* **Stops level applies.** A new SL/TP closer than `SYMBOL_TRADE_STOPS_LEVEL` → `10016`.
* **No-op is a rejection.** Re-sending identical values can return `10025 NO_CHANGES`.
* **Friendly form.** [`MT5Service.modifyOrder(ModifyRequest)`](../../MT5Service/4.%20Trading_Methods.md); [`MT5Sugar.modifyPositionSL / TP / SLTP`](../../MT5Sugar/6.%20Position_Management.md).

---

## 🔗 Usage Examples

### 1) Set SL and TP

```ts
const req = new TradingHelperPb.OrderModifyRequest();
req.setTicket(ticket);
req.setStopLoss(1.0900);
req.setTakeProfit(1.1100);
await account.orderModify(req);
```

### 2) Move the stop only (trailing step)

```ts
const req = new TradingHelperPb.OrderModifyRequest();
req.setTicket(ticket);
req.setStopLoss(newStop);
const d = await account.orderModify(req);
if (d.getReturnedCode() === 10009) console.log('stop moved to', newStop);
```

### 3) Re-price a pending order

```ts
const req = new TradingHelperPb.OrderModifyRequest();
req.setTicket(pendingTicket);
req.setPrice(1.0920);
await account.orderModify(req);
```

### 4) React to the retcode

```ts
const d = await account.orderModify(req);
switch (d.getReturnedCode()) {
  case 10009: console.log('modified'); break;
  case 10025: console.log('no changes'); break;
  case 10016: console.log('invalid stops'); break;
  default:    console.log('rejected:', d.getReturnedCodeDescription());
}
```

---

## 🔧 Common Patterns

### Trailing-stop step

```ts
async function trailStop(account: MT5Account, ticket: number, newStop: number, bestStop: number): Promise<number> {
  if (newStop <= bestStop) return bestStop;             // only move up
  const req = new TradingHelperPb.OrderModifyRequest();
  req.setTicket(ticket); req.setStopLoss(newStop);
  const d = await account.orderModify(req);
  return d.getReturnedCode() === 10009 ? newStop : bestStop;
}
```

---

## 📚 See Also

* [OrderSend](./OrderSend.md) · [OrderClose](./OrderClose.md)
* **Friendly layer:** [`MT5Service.modifyOrder`](../../MT5Service/4.%20Trading_Methods.md) · [`MT5Sugar.modifyPositionSLTP`](../../MT5Sugar/6.%20Position_Management.md).

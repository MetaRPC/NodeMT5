# ❌ Closing a Position / Deleting a Pending

> **Request:** close a position (fully or partially) or delete a pending order (`OrderCloseData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.orderClose(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.TradingHelper`
* **Proto definition:** `OrderClose` (in `mt5-term-api-trading-helper.proto`)

### RPC

* **Service:** `mt5_term_api.TradingHelper`
* **Method:** `OrderClose(OrderCloseRequest) → OrderCloseReply`
* **Low-level client (generated):** `TradingHelperClient.orderClose(request, metadata, opts)`

---

## 🛑 Result is in the retcode

> `orderClose` **rejects** only on a transport error. A broker rejection is in the result — check `getReturnedCode()`: **`10009` = DONE**.

---

## 💬 Just the essentials

* **What it is.** One RPC that closes a position (set `volume` for a partial close) or deletes a pending order, by ticket.
* **Why you need it.** Exit a trade, scale out, or cancel a pending order.
* **Sanity check.** `getReturnedCode() === 10009`.

---

## 🎯 Purpose

* Close a position fully, or scale out part of it.
* Delete a pending order you no longer want.

---

## 📚 Tutorial

1. **Build an `OrderCloseRequest`** with the ticket (and `volume` for a partial close).
2. **Call** `account.orderClose(req)`.
3. **Check `getReturnedCode()`** (`10009` = done).

```ts
import { MT5Account, TradingHelperPb } from '@metarpc/nodemt5';

const req = new TradingHelperPb.OrderCloseRequest();
req.setTicket(ticket);
const d = await account.orderClose(req);
console.log(d.getReturnedCode() === 10009 ? 'closed' : d.getReturnedCodeDescription());
```

---

## 🧱 Signature

```ts
import { MT5Account, TradingHelperPb } from '@metarpc/nodemt5';

class MT5Account {
  // Close a position (full/partial) or delete a pending order. Pass a built OrderCloseRequest.
  orderClose(req: any /* OrderCloseRequest */, timeoutMs?: number): Promise<any /* OrderCloseData */>;
}
```

**Request setters:** `setTicket(number)`, `setVolume(number)` *(omit / 0 = full close)*, `setSlippage(number)`.

**Reply message:**

```protobuf
OrderCloseReply {
  oneof response {
    OrderCloseData data = 1;
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Setter | Type | Description |
| ------ | ---- | ----------- |
| `setTicket(ticket)` | `number` | Position or pending-order ticket. |
| `setVolume(volume)` | `number` | Lots to close; omit or `0` = full close. |
| `setSlippage(points)` | `number` | Max deviation. |

---

## ⬆️ Output — `OrderCloseData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| returned code | `getReturnedCode()` | `number` | Trade retcode — **10009 = DONE**. |
| returned code desc | `getReturnedCodeDescription()` | `string` | Human-readable result. |
| returned string code | `getReturnedStringCode()` | `string` | Symbolic code. |
| close mode | `getCloseMode()` | `number` | How it was closed. |

---

## 🧩 Notes & Tips

* **Partial close keeps the rest open.** Pass a `volume` below the position size; the remainder stays with the same ticket.
* **Deleting a pending** uses the same call — pass the pending order's ticket.
* **Friendly form.** [`MT5Service.closeOrder(CloseRequest)`](../../MT5Service/4.%20Trading_Methods.md); [`MT5Sugar.closePosition / closePositionPartial / closeAllPositions`](../../MT5Sugar/6.%20Position_Management.md).

---

## 🔗 Usage Examples

### 1) Full close

```ts
const req = new TradingHelperPb.OrderCloseRequest();
req.setTicket(ticket);
const d = await account.orderClose(req);
console.log(d.getReturnedCode() === 10009 ? 'closed' : d.getReturnedCodeDescription());
```

### 2) Partial close (0.05 lots)

```ts
const req = new TradingHelperPb.OrderCloseRequest();
req.setTicket(ticket);
req.setVolume(0.05);
await account.orderClose(req);
```

### 3) Delete a pending order

```ts
const req = new TradingHelperPb.OrderCloseRequest();
req.setTicket(pendingTicket);
await account.orderClose(req);
```

### 4) Close every open position

```ts
const open = await account.openedOrders();
for (const p of open.getPositionInfosList()) {
  const req = new TradingHelperPb.OrderCloseRequest();
  req.setTicket(p.getTicket());
  const d = await account.orderClose(req);
  if (d.getReturnedCode() !== 10009) console.warn('skip', p.getTicket(), d.getReturnedCodeDescription());
}
```

### 5) React to the retcode

```ts
const d = await account.orderClose(req);
if (d.getReturnedCode() === 10009) console.log('done');
else if (d.getReturnedCode() === 10036) console.log('already closed');
else console.log('rejected:', d.getReturnedCodeDescription());
```

---

## 🔧 Common Patterns

### Close helper that throws on failure

```ts
async function close(account: MT5Account, ticket: number, volume?: number): Promise<void> {
  const req = new TradingHelperPb.OrderCloseRequest();
  req.setTicket(ticket);
  if (volume) req.setVolume(volume);
  const d = await account.orderClose(req);
  if (d.getReturnedCode() !== 10009) throw new Error(`close ${ticket} rejected: ${d.getReturnedCodeDescription()}`);
}
```

---

## 📚 See Also

* [OrderSend](./OrderSend.md) · [OrderModify](./OrderModify.md) · [OpenedOrders](../3.%20Position_Orders_Information/OpenedOrders.md)
* **Friendly layer:** [`MT5Service.closeOrder`](../../MT5Service/4.%20Trading_Methods.md) · [`MT5Sugar.closePosition / closeAllPositions`](../../MT5Sugar/6.%20Position_Management.md).

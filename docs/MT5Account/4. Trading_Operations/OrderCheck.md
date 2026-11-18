# ✅ Validating an Order (OrderCheck)

> **Request:** validate a prospective order before sending it — margin, balance / equity / free margin after the deal (`OrderCheckData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.orderCheck(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.TradeFunctions`
* **Proto definition:** `OrderCheck` (in `mt5-term-api-trade-functions.proto`)

### RPC

* **Service:** `mt5_term_api.TradeFunctions`
* **Method:** `OrderCheck(OrderCheckRequest) → OrderCheckReply`
* **Low-level client (generated):** `TradeFunctionsClient.orderCheck(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC that pre-flights an order — the broker checks it **without sending**.
* **Why you need it.** Confirm an order is fundable and legal (margin, stops) before [OrderSend](./OrderSend.md).
* **Sanity check.** `getMqlTradeCheckResult().getReturnedCode()` is `0` when the order would be accepted.

---

## 🎯 Purpose

* Pre-validate size and stops to avoid `10019` / `10016` on the real send.
* Preview balance / equity / free margin **after** the hypothetical deal.

---

## 📚 Tutorial

1. **Build an `MrpcMqlTradeRequest`** describing the order (symbol, volume, action…).
2. **Wrap it** in an `OrderCheckRequest` via `setMqlTradeRequest`.
3. **Call** `account.orderCheck(req)` and read `getMqlTradeCheckResult()`.

```ts
import { MT5Account, TradeFunctionsPb } from '@metarpc/nodemt5';

const mql = new TradeFunctionsPb.MrpcMqlTradeRequest();
mql.setSymbol('EURUSD');
mql.setVolume(0.10);
// set action / order type / price as needed …

const req = new TradeFunctionsPb.OrderCheckRequest();
req.setMqlTradeRequest(mql);

const r = (await account.orderCheck(req)).getMqlTradeCheckResult();
console.log('ok?', r.getReturnedCode() === 0, 'margin', r.getMargin());
```

---

## 🧱 Signature

```ts
import { MT5Account, TradeFunctionsPb } from '@metarpc/nodemt5';

class MT5Account {
  // Validate an order. Pass a built OrderCheckRequest (wraps an MqlTradeRequest). Returns OrderCheckData.
  orderCheck(req: any /* OrderCheckRequest */, timeoutMs?: number): Promise<any /* OrderCheckData */>;
}
```

**Request:** `OrderCheckRequest.setMqlTradeRequest(MrpcMqlTradeRequest)`. The `MrpcMqlTradeRequest` carries `setAction`, `setOrderType`, `setSymbol`, `setVolume`, `setPrice`, `setStopLoss`, `setTakeProfit`, `setDeviation`, `setExpertAdvisorMagicNumber`, … (the full trade request).

**Reply message:**

```protobuf
OrderCheckReply {
  oneof response {
    OrderCheckData data = 1;   // getMqlTradeCheckResult()
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Setter | Type | Description |
| ------ | ---- | ----------- |
| `setMqlTradeRequest(req)` | `MrpcMqlTradeRequest` | The prospective order to validate. |

---

## ⬆️ Output — `OrderCheckData` → `getMqlTradeCheckResult()`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| returned code | `getReturnedCode()` | `number` | `0` = would be accepted. |
| balance after | `getBalanceAfterDeal()` | `number` | Balance after the deal. |
| equity after | `getEquityAfterDeal()` | `number` | Equity after the deal. |
| profit | `getProfit()` | `number` | Expected profit. |
| margin | `getMargin()` | `number` | Margin the order would use. |
| free margin | `getFreeMargin()` | `number` | Free margin after the deal. |
| margin level | `getMarginLevel()` | `number` | Margin level after the deal. |
| comment | `getComment()` | `string` | Broker comment. |

---

## 🧩 Notes & Tips

* **`0` is good here.** Unlike [OrderSend](./OrderSend.md) (where `10009` = done), the check's `getReturnedCode()` is `0` when the order would be accepted.
* **Check doesn't trade.** It only simulates — follow with [OrderSend](./OrderSend.md) to actually place it.
* **Friendly form.** [`MT5Service.checkOrder`](../../MT5Service/4.%20Trading_Methods.md) returns a mapped `OrderCheckResult`.

---

## 🔗 Usage Examples

### 1) Basic pre-flight

```ts
import { MT5Account, TradeFunctionsPb } from '@metarpc/nodemt5';

const mql = new TradeFunctionsPb.MrpcMqlTradeRequest();
mql.setSymbol('EURUSD');
mql.setVolume(0.10);

const req = new TradeFunctionsPb.OrderCheckRequest();
req.setMqlTradeRequest(mql);

const r = (await account.orderCheck(req)).getMqlTradeCheckResult();
console.log('accepted?', r.getReturnedCode() === 0);
```

### 2) Preview free margin after the deal

```ts
const r = (await account.orderCheck(req)).getMqlTradeCheckResult();
console.log('free margin after:', r.getFreeMargin().toFixed(2));
```

### 3) Gate a real send on the check

```ts
const r = (await account.orderCheck(req)).getMqlTradeCheckResult();
if (r.getReturnedCode() === 0) {
  // build & send the matching OrderSendRequest …
} else {
  console.warn('check failed:', r.getComment());
}
```

---

## 🔧 Common Patterns

### Fundable check

```ts
async function isFundable(account: MT5Account, checkReq: any): Promise<boolean> {
  const r = (await account.orderCheck(checkReq)).getMqlTradeCheckResult();
  return r.getReturnedCode() === 0 && r.getFreeMargin() >= 0;
}
```

---

## 📚 See Also

* [OrderCalcMargin](./OrderCalcMargin.md) · [OrderCalcProfit](./OrderCalcProfit.md) · [OrderSend](./OrderSend.md)
* **Friendly layer:** [`MT5Service.checkOrder`](../../MT5Service/4.%20Trading_Methods.md) → `OrderCheckResult`.

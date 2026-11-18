# 💰 Calculating Profit (OrderCalcProfit)

> **Request:** the profit of a prospective trade between two prices (`OrderCalcProfitData` → a `number`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.orderCalcProfit(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.TradeFunctions`
* **Proto definition:** `OrderCalcProfit` (in `mt5-term-api-trade-functions.proto`)

### RPC

* **Service:** `mt5_term_api.TradeFunctions`
* **Method:** `OrderCalcProfit(OrderCalcProfitRequest) → OrderCalcProfitReply`
* **Low-level client (generated):** `TradeFunctionsClient.orderCalcProfit(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning the profit of moving `volume` lots of a symbol from `openPrice` to `closePrice` in the given direction.
* **Why you need it.** Preview the money value of a target or a stop — "what would 40 pips be worth?"
* **Sanity check.** A BUY from a lower to a higher price returns a positive number.

---

## 🎯 Purpose

* Convert a price target into account-currency profit.
* Size a take-profit by the money you want to make.

---

## 📚 Tutorial

1. **Build an `OrderCalcProfitRequest`** — order type, symbol, volume, open and close prices.
2. **Call** `account.orderCalcProfit(req)` and read `getProfit()`.

```ts
import { MT5Account, TradeFunctionsPb, TradingHelperPb } from '@metarpc/nodemt5';

const req = new TradeFunctionsPb.OrderCalcProfitRequest();
req.setOrderType(TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY);
req.setSymbol('EURUSD');
req.setVolume(0.10);
req.setOpenPrice(1.0950);
req.setClosePrice(1.1000);
const profit = (await account.orderCalcProfit(req)).getProfit();
```

---

## 🧱 Signature

```ts
import { MT5Account, TradeFunctionsPb } from '@metarpc/nodemt5';

class MT5Account {
  // Profit of a prospective trade. Pass a built OrderCalcProfitRequest. Returns OrderCalcProfitData.
  orderCalcProfit(req: any /* OrderCalcProfitRequest */, timeoutMs?: number): Promise<any /* OrderCalcProfitData */>;
}
```

**Request setters:** `setOrderType(TMT5_ENUM_ORDER_TYPE)`, `setSymbol(string)`, `setVolume(number)`, `setOpenPrice(number)`, `setClosePrice(number)`.

**Reply message:**

```protobuf
OrderCalcProfitReply {
  oneof response {
    OrderCalcProfitData data = 1;   // getProfit(): double
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Setter | Type | Description |
| ------ | ---- | ----------- |
| `setOrderType(type)` | `TMT5_ENUM_ORDER_TYPE` | BUY / SELL / … |
| `setSymbol(symbol)` | `string` | Instrument. |
| `setVolume(volume)` | `number` | Lots. |
| `setOpenPrice(price)` | `number` | Entry price. |
| `setClosePrice(price)` | `number` | Exit price. |

---

## ⬆️ Output — `OrderCalcProfitData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| profit | `getProfit()` | `number` | Profit (negative = loss), in the deposit currency. |

---

## 🧩 Notes & Tips

* **Direction matters.** For a SELL, a profit occurs when `closePrice < openPrice`.
* **Excludes costs.** This is gross price P/L — commissions and swap are separate.
* **Friendly form.** [`MT5Service.calculateProfit(action, symbol, volume, openPrice, closePrice)`](../../MT5Service/4.%20Trading_Methods.md) returns the number directly.

---

## 🔗 Usage Examples

### 1) Profit of a 50-pip BUY move

```ts
import { MT5Account, TradeFunctionsPb, TradingHelperPb } from '@metarpc/nodemt5';
const OT = TradingHelperPb.TMT5_ENUM_ORDER_TYPE;

const req = new TradeFunctionsPb.OrderCalcProfitRequest();
req.setOrderType(OT.TMT5_ORDER_TYPE_BUY);
req.setSymbol('EURUSD');
req.setVolume(0.10);
req.setOpenPrice(1.0950);
req.setClosePrice(1.1000);
console.log('profit:', (await account.orderCalcProfit(req)).getProfit().toFixed(2));
```

### 2) Value of a stop-loss

```ts
const OT = TradingHelperPb.TMT5_ENUM_ORDER_TYPE;
const r = new TradeFunctionsPb.OrderCalcProfitRequest();
r.setOrderType(OT.TMT5_ORDER_TYPE_BUY); r.setSymbol('EURUSD'); r.setVolume(0.10);
r.setOpenPrice(1.0950); r.setClosePrice(1.0900);   // 50 pips against
console.log('risk:', (await account.orderCalcProfit(r)).getProfit().toFixed(2));
```

### 3) A reusable helper

```ts
function calcProfit(account: MT5Account, type: number, symbol: string, volume: number, open: number, close: number): Promise<number> {
  const r = new TradeFunctionsPb.OrderCalcProfitRequest();
  r.setOrderType(type); r.setSymbol(symbol); r.setVolume(volume); r.setOpenPrice(open); r.setClosePrice(close);
  return account.orderCalcProfit(r).then((d) => d.getProfit());
}
```

---

## 🔧 Common Patterns

### Risk-reward of a planned trade

```ts
async function riskReward(account: MT5Account, symbol: string, volume: number, entry: number, sl: number, tp: number) {
  const OT = TradingHelperPb.TMT5_ENUM_ORDER_TYPE;
  const risk = Math.abs(await calcProfit(account, OT.TMT5_ORDER_TYPE_BUY, symbol, volume, entry, sl));
  const reward = Math.abs(await calcProfit(account, OT.TMT5_ORDER_TYPE_BUY, symbol, volume, entry, tp));
  return { risk, reward, ratio: reward / risk };
}
```

---

## 📚 See Also

* [OrderCalcMargin](./OrderCalcMargin.md) · [OrderCheck](./OrderCheck.md) · [OrderSend](./OrderSend.md)
* **Friendly layer:** [`MT5Service.calculateProfit`](../../MT5Service/4.%20Trading_Methods.md) · [`MT5Sugar.calculateSLTP`](../../MT5Sugar/11.%20Trading_Helpers.md).

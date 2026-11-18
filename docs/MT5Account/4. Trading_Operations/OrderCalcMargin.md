# 🧮 Calculating Required Margin (OrderCalcMargin)

> **Request:** the margin a prospective order would require (`OrderCalcMarginData` → a `number`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.orderCalcMargin(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.TradeFunctions`
* **Proto definition:** `OrderCalcMargin` (in `mt5-term-api-trade-functions.proto`)

### RPC

* **Service:** `mt5_term_api.TradeFunctions`
* **Method:** `OrderCalcMargin(OrderCalcMarginRequest) → OrderCalcMarginReply`
* **Low-level client (generated):** `TradeFunctionsClient.orderCalcMargin(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning the margin needed to open `volume` lots of a symbol at a price.
* **Why you need it.** Size positions to your free margin before sending anything.
* **Sanity check.** Returns a positive number for a valid symbol/volume.

---

## 🎯 Purpose

* Pre-compute margin for a prospective trade.
* Build a "max lot I can afford" calculation.

---

## 📚 Tutorial

1. **Build an `OrderCalcMarginRequest`** — order type, symbol, volume and the open price.
2. **Call** `account.orderCalcMargin(req)` and read `getMargin()`.

```ts
import { MT5Account, TradeFunctionsPb, TradingHelperPb } from '@metarpc/nodemt5';

const req = new TradeFunctionsPb.OrderCalcMarginRequest();
req.setOrderType(TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY);
req.setSymbol('EURUSD');
req.setVolume(0.10);
req.setOpenPrice(1.0950);
const margin = (await account.orderCalcMargin(req)).getMargin();
```

> ⚠️ The price setter is **`setOpenPrice`** — there is no `setPrice` on this request.

---

## 🧱 Signature

```ts
import { MT5Account, TradeFunctionsPb } from '@metarpc/nodemt5';

class MT5Account {
  // Required margin for a prospective order. Pass a built OrderCalcMarginRequest. Returns OrderCalcMarginData.
  orderCalcMargin(req: any /* OrderCalcMarginRequest */, timeoutMs?: number): Promise<any /* OrderCalcMarginData */>;
}
```

**Request setters:** `setOrderType(TMT5_ENUM_ORDER_TYPE)`, `setSymbol(string)`, `setVolume(number)`, `setOpenPrice(number)`.

**Reply message:**

```protobuf
OrderCalcMarginReply {
  oneof response {
    OrderCalcMarginData data = 1;   // getMargin(): double
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
| `setOpenPrice(price)` | `number` | Price to calculate at. |

---

## ⬆️ Output — `OrderCalcMarginData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| margin | `getMargin()` | `number` | Required margin, in the deposit currency. |

---

## 🧩 Notes & Tips

* **Buy vs sell can differ** — the margin rate may depend on the order type (see [SymbolInfoMarginRate](../6.%20Additional_Methods/SymbolInfoMarginRate.md)).
* **Use the current ask/bid** for `setOpenPrice` to estimate a market order.
* **Friendly form.** [`MT5Service.calculateMargin(action, symbol, volume, price)`](../../MT5Service/4.%20Trading_Methods.md) returns the number directly; [`MT5Sugar.calculateRequiredMargin`](../../MT5Sugar/10.%20Risk_Management.md) uses the current ask.

---

## 🔗 Usage Examples

### 1) Margin for 0.10 lots

```ts
import { MT5Account, TradeFunctionsPb, TradingHelperPb } from '@metarpc/nodemt5';
const OT = TradingHelperPb.TMT5_ENUM_ORDER_TYPE;

const req = new TradeFunctionsPb.OrderCalcMarginRequest();
req.setOrderType(OT.TMT5_ORDER_TYPE_BUY);
req.setSymbol('EURUSD');
req.setVolume(0.10);
req.setOpenPrice(1.0950);
console.log('margin:', (await account.orderCalcMargin(req)).getMargin().toFixed(2));
```

### 2) Max affordable lots

```ts
const OT = TradingHelperPb.TMT5_ENUM_ORDER_TYPE;
const r = new TradeFunctionsPb.OrderCalcMarginRequest();
r.setOrderType(OT.TMT5_ORDER_TYPE_BUY); r.setSymbol('EURUSD'); r.setVolume(1.0); r.setOpenPrice(1.0950);
const perLot = (await account.orderCalcMargin(r)).getMargin();
// freeMargin / perLot → max lots (then clamp to volume step)
```

### 3) A reusable helper

```ts
function calcMargin(account: MT5Account, type: number, symbol: string, volume: number, price: number): Promise<number> {
  const r = new TradeFunctionsPb.OrderCalcMarginRequest();
  r.setOrderType(type); r.setSymbol(symbol); r.setVolume(volume); r.setOpenPrice(price);
  return account.orderCalcMargin(r).then((d) => d.getMargin());
}
```

---

## 🔧 Common Patterns

### Fundability gate

```ts
async function canAfford(account: MT5Account, symbol: string, volume: number, ask: number, freeMargin: number): Promise<boolean> {
  const OT = TradingHelperPb.TMT5_ENUM_ORDER_TYPE;
  const r = new TradeFunctionsPb.OrderCalcMarginRequest();
  r.setOrderType(OT.TMT5_ORDER_TYPE_BUY); r.setSymbol(symbol); r.setVolume(volume); r.setOpenPrice(ask);
  return (await account.orderCalcMargin(r)).getMargin() <= freeMargin;
}
```

---

## 📚 See Also

* [OrderCalcProfit](./OrderCalcProfit.md) · [OrderCheck](./OrderCheck.md) · [SymbolInfoMarginRate](../6.%20Additional_Methods/SymbolInfoMarginRate.md)
* **Friendly layer:** [`MT5Service.calculateMargin`](../../MT5Service/4.%20Trading_Methods.md) · [`MT5Sugar.calculateRequiredMargin / getMaxLotSize`](../../MT5Sugar/10.%20Risk_Management.md).

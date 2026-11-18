# 📐 Getting Margin Rates (SymbolInfoMarginRate)

> **Request:** the initial / maintenance margin rates for a symbol and order type (`SymbolInfoMarginRateData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.symbolInfoMarginRate(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.MarketInfo`
* **Proto definition:** `SymbolInfoMarginRate` (in `mt5-term-api-market-info.proto`)

### RPC

* **Service:** `mt5_term_api.MarketInfo`
* **Method:** `SymbolInfoMarginRate(SymbolInfoMarginRateRequest) → SymbolInfoMarginRateReply`
* **Low-level client (generated):** `MarketInfoClient.symbolInfoMarginRate(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning the margin-rate multipliers for a symbol + order type.
* **Why you need it.** Margin per lot depends on the order type (buy vs sell can differ); these are the multipliers the broker applies.
* **Sanity check.** Rates are typically `1.0` on FX majors.

---

## 🎯 Purpose

* Understand how much margin a side will cost before trading.
* Combine with [OrderCalcMargin](../4.%20Trading_Operations/OrderCalcMargin.md) for exact figures.

---

## 📚 Tutorial

1. **Build a `SymbolInfoMarginRateRequest`** with the symbol and order type.
2. **Call** `account.symbolInfoMarginRate(req)`.
3. **Read** `getInitialMarginRate()` and `getMaintenanceMarginRate()`.

```ts
import { MT5Account, MarketInfoPb, TradingHelperPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.SymbolInfoMarginRateRequest();
req.setSymbol('EURUSD');
req.setOrderType(TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY);
const d = await account.symbolInfoMarginRate(req);
console.log(d.getInitialMarginRate(), d.getMaintenanceMarginRate());
```

---

## 🧱 Signature

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

class MT5Account {
  // Margin rates for a symbol + order type. Pass a built request. Returns raw data.
  symbolInfoMarginRate(req: any /* SymbolInfoMarginRateRequest */, timeoutMs?: number): Promise<any /* SymbolInfoMarginRateData */>;
}
```

**Request setters:** `setSymbol(string)`, `setOrderType(TMT5_ENUM_ORDER_TYPE)`.

**Reply message:**

```protobuf
SymbolInfoMarginRateReply {
  oneof response {
    SymbolInfoMarginRateData data = 1;
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Setter | Type | Description |
| ------ | ---- | ----------- |
| `setSymbol(symbol)` | `string` | Instrument. |
| `setOrderType(type)` | `TMT5_ENUM_ORDER_TYPE` | Order type (buy/sell can differ). |

---

## ⬆️ Output — `SymbolInfoMarginRateData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| initial margin rate | `getInitialMarginRate()` | `number` | Multiplier for the initial margin. |
| maintenance margin rate | `getMaintenanceMarginRate()` | `number` | Multiplier for the maintenance margin. |

---

## 🧩 Notes & Tips

* **Rate ≠ amount.** These are multipliers; for the money figure use [OrderCalcMargin](../4.%20Trading_Operations/OrderCalcMargin.md).
* **Check both sides.** Query BUY and SELL if the instrument has asymmetric rates.
* **Friendly form.** [`MT5Service.getSymbolMarginRate(symbol, orderType)`](../../MT5Service/2.%20Symbol_Methods.md) returns a mapped `SymbolMarginRate`.

---

## 🔗 Usage Examples

### 1) Rates for a BUY

```ts
import { MT5Account, MarketInfoPb, TradingHelperPb } from '@metarpc/nodemt5';
const OT = TradingHelperPb.TMT5_ENUM_ORDER_TYPE;

const req = new MarketInfoPb.SymbolInfoMarginRateRequest();
req.setSymbol('EURUSD'); req.setOrderType(OT.TMT5_ORDER_TYPE_BUY);
const d = await account.symbolInfoMarginRate(req);
console.log('initial', d.getInitialMarginRate(), 'maintenance', d.getMaintenanceMarginRate());
```

### 2) Compare buy vs sell

```ts
const OT = TradingHelperPb.TMT5_ENUM_ORDER_TYPE;
async function rate(type: number) {
  const r = new MarketInfoPb.SymbolInfoMarginRateRequest(); r.setSymbol('EURUSD'); r.setOrderType(type);
  return (await account.symbolInfoMarginRate(r)).getInitialMarginRate();
}
console.log('buy', await rate(OT.TMT5_ORDER_TYPE_BUY), 'sell', await rate(OT.TMT5_ORDER_TYPE_SELL));
```

### 3) A reusable helper

```ts
function marginRate(account: MT5Account, symbol: string, type: number) {
  const r = new MarketInfoPb.SymbolInfoMarginRateRequest(); r.setSymbol(symbol); r.setOrderType(type);
  return account.symbolInfoMarginRate(r);
}
```

---

## 🔧 Common Patterns

### Rate summary

```ts
async function rateSummary(account: MT5Account, symbol: string) {
  const OT = TradingHelperPb.TMT5_ENUM_ORDER_TYPE;
  const r = new MarketInfoPb.SymbolInfoMarginRateRequest();
  r.setSymbol(symbol); r.setOrderType(OT.TMT5_ORDER_TYPE_BUY);
  const d = await account.symbolInfoMarginRate(r);
  return { initial: d.getInitialMarginRate(), maintenance: d.getMaintenanceMarginRate() };
}
```

---

## 📚 See Also

* [OrderCalcMargin](../4.%20Trading_Operations/OrderCalcMargin.md) · [SymbolParamsMany](./SymbolParamsMany.md)
* **Friendly layer:** [`MT5Service.getSymbolMarginRate`](../../MT5Service/2.%20Symbol_Methods.md) → `SymbolMarginRate`.

# 📊 Getting a Double Symbol Property

> **Request:** one floating-point symbol property (`SymbolInfoDoubleData` → a `number`) from **MT5** — bid, ask, point, tick value/size, contract size, volume limits, swaps, selected by an enum.

**API Information:**

* **Low-level API:** `MT5Account.symbolInfoDouble(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.MarketInfo`
* **Proto definition:** `SymbolInfoDouble` (in `mt5-term-api-market-info.proto`)

### RPC

* **Service:** `mt5_term_api.MarketInfo`
* **Method:** `SymbolInfoDouble(SymbolInfoDoubleRequest) → SymbolInfoDoubleReply`
* **Low-level client (generated):** `MarketInfoClient.symbolInfoDouble(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning a single `double` property of a symbol, chosen by a `SymbolInfoDoubleProperty` value.
* **Why you need it.** Read exactly the number you need — `SYMBOL_POINT` to size pips, `SYMBOL_TRADE_TICK_VALUE` for P&L — without pulling the whole [SymbolParamsMany](../6.%20Additional_Methods/SymbolParamsMany.md).
* **Sanity check.** `SYMBOL_BID` returns a positive price for a selected symbol.

---

## 🎯 Purpose

Use it for one precise contract/price figure:

* **Pip & price math** — `SYMBOL_POINT`, `SYMBOL_TRADE_TICK_SIZE`.
* **Position sizing & P&L** — `SYMBOL_TRADE_TICK_VALUE`, `SYMBOL_TRADE_CONTRACT_SIZE`.
* **Volume rules** — `SYMBOL_VOLUME_MIN` / `MAX` / `STEP`.

---

## 📚 Tutorial

1. **Select the symbol** first (`account.symbolSelect('EURUSD')`) so the broker streams its data.
2. **Build the request** with the symbol and the property enum.
3. **Call** `account.symbolInfoDouble(req)` and read `getValue()`.

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.SymbolInfoDoubleRequest();
req.setSymbol('EURUSD');
req.setType(MarketInfoPb.SymbolInfoDoubleProperty.SYMBOL_POINT);
const point = (await account.symbolInfoDouble(req)).getValue();
```

---

## 🧱 Signature

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

class MT5Account {
  // Read one SYMBOL_* double property. Pass a built SymbolInfoDoubleRequest.
  symbolInfoDouble(req: any /* SymbolInfoDoubleRequest */, timeoutMs?: number): Promise<any /* SymbolInfoDoubleData */>;
}
```

**Request message:** `SymbolInfoDoubleRequest { string symbol = 1; SymbolInfoDoubleProperty type = 2; }` — setters `setSymbol(string)`, `setType(SymbolInfoDoubleProperty)`.

**Reply message:**

```protobuf
SymbolInfoDoubleReply {
  oneof response {
    SymbolInfoDoubleData data = 1;   // getValue(): double
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Setter | Type | Description |
| ------ | ---- | ----------- |
| `setSymbol(symbol)` | `string` | Instrument, e.g. `"EURUSD"`. |
| `setType(property)` | `SymbolInfoDoubleProperty` | Which double property to read. |

---

## ⬆️ Output — `SymbolInfoDoubleData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| value | `getValue()` | `number` | The property's value. |

---

## 🧱 Related enums (from proto)

> Access as `MarketInfoPb.SymbolInfoDoubleProperty.SYMBOL_POINT` (a `number`).

### `SymbolInfoDoubleProperty` — common values

| Constant | Meaning |
| -------- | ------- |
| `SYMBOL_BID` / `SYMBOL_ASK` | Best bid / ask price. |
| `SYMBOL_LAST` | Last deal price. |
| `SYMBOL_POINT` | Smallest price increment. |
| `SYMBOL_TRADE_TICK_SIZE` | Minimal price change for a tick. |
| `SYMBOL_TRADE_TICK_VALUE` | Money value of one tick (for P&L). |
| `SYMBOL_TRADE_TICK_VALUE_PROFIT` / `_LOSS` | Tick value on the profit / loss side. |
| `SYMBOL_TRADE_CONTRACT_SIZE` | Contract size (e.g. 100 000 for FX). |
| `SYMBOL_VOLUME_MIN` / `MAX` / `STEP` / `LIMIT` | Volume constraints. |
| `SYMBOL_SWAP_LONG` / `SYMBOL_SWAP_SHORT` | Swap rates. |

---


<details markdown="1">
<summary><strong>All 60 <code>SymbolInfoDoubleProperty</code> double properties</strong> (click to expand)</summary>

| Constant | Value | Description |
| -------- | ----- | ----------- |
| `SYMBOL_BID` | 0 | Current Bid price |
| `SYMBOL_BIDHIGH` | 1 | Highest Bid of the day |
| `SYMBOL_BIDLOW` | 2 | Lowest Bid of the day |
| `SYMBOL_ASK` | 3 | Current Ask price |
| `SYMBOL_ASKHIGH` | 4 | Highest Ask of the day |
| `SYMBOL_ASKLOW` | 5 | Lowest Ask of the day |
| `SYMBOL_LAST` | 6 | Last deal price |
| `SYMBOL_LASTHIGH` | 7 | Highest Last price of the day |
| `SYMBOL_LASTLOW` | 8 | Lowest Last price of the day |
| `SYMBOL_VOLUME_REAL` | 9 | Last deal volume |
| `SYMBOL_VOLUMEHIGH_REAL` | 10 | Maximum volume of the day |
| `SYMBOL_VOLUMELOW_REAL` | 11 | Minimum volume of the day |
| `SYMBOL_OPTION_STRIKE` | 12 | Option strike price |
| `SYMBOL_POINT` | 13 | Point size (smallest price change) |
| `SYMBOL_TRADE_TICK_VALUE` | 14 | Tick value in account currency |
| `SYMBOL_TRADE_TICK_VALUE_PROFIT` | 15 | Tick value for profit position |
| `SYMBOL_TRADE_TICK_VALUE_LOSS` | 16 | Tick value for loss position |
| `SYMBOL_TRADE_TICK_SIZE` | 17 | Minimum price change |
| `SYMBOL_TRADE_CONTRACT_SIZE` | 18 | Contract size (lot size in base currency) |
| `SYMBOL_TRADE_ACCRUED_INTEREST` | 19 | Accrued interest |
| `SYMBOL_TRADE_FACE_VALUE` | 20 | Face value (for bonds) |
| `SYMBOL_TRADE_LIQUIDITY_RATE` | 21 | Liquidity rate |
| `SYMBOL_VOLUME_MIN` | 22 | Minimum volume for trading |
| `SYMBOL_VOLUME_MAX` | 23 | Maximum volume for trading |
| `SYMBOL_VOLUME_STEP` | 24 | Volume step (lot size increment) |
| `SYMBOL_VOLUME_LIMIT` | 25 | Maximum total volume of open positions |
| `SYMBOL_SWAP_LONG` | 26 | Swap for long positions |
| `SYMBOL_SWAP_SHORT` | 27 | Swap for short positions |
| `SYMBOL_SWAP_SUNDAY` | 28 | Triple swap day - Sunday |
| `SYMBOL_SWAP_MONDAY` | 29 | Triple swap day - Monday |
| `SYMBOL_SWAP_TUESDAY` | 30 | Triple swap day - Tuesday |
| `SYMBOL_SWAP_WEDNESDAY` | 31 | Triple swap day - Wednesday |
| `SYMBOL_SWAP_THURSDAY` | 32 | Triple swap day - Thursday |
| `SYMBOL_SWAP_FRIDAY` | 33 | Triple swap day - Friday |
| `SYMBOL_SWAP_SATURDAY` | 34 | Triple swap day - Saturday |
| `SYMBOL_MARGIN_INITIAL` | 35 | Initial margin |
| `SYMBOL_MARGIN_MAINTENANCE` | 36 | Maintenance margin |
| `SYMBOL_SESSION_VOLUME` | 37 | Summary volume of the current session |
| `SYMBOL_SESSION_TURNOVER` | 38 | Summary turnover of the current session |
| `SYMBOL_SESSION_INTEREST` | 39 | Summary open interest |
| `SYMBOL_SESSION_BUY_ORDERS_VOLUME` | 40 | Current volume of Buy orders |
| `SYMBOL_SESSION_SELL_ORDERS_VOLUME` | 41 | Current volume of Sell orders |
| `SYMBOL_SESSION_OPEN` | 42 | Open price of the current session |
| `SYMBOL_SESSION_CLOSE` | 43 | Close price of the current session |
| `SYMBOL_SESSION_AW` | 44 | Average weighted price of the current session |
| `SYMBOL_SESSION_PRICE_SETTLEMENT` | 45 | Settlement price of the current session |
| `SYMBOL_SESSION_PRICE_LIMIT_MIN` | 46 | Minimum price of the current session |
| `SYMBOL_SESSION_PRICE_LIMIT_MAX` | 47 | Maximum price of the current session |
| `SYMBOL_MARGIN_HEDGED` | 48 | Hedged margin |
| `SYMBOL_PRICE_CHANGE` | 49 | Change of price in % |
| `SYMBOL_PRICE_VOLATILITY` | 50 | Price volatility in % |
| `SYMBOL_PRICE_THEORETICAL` | 51 | Theoretical option price |
| `SYMBOL_PRICE_DELTA` | 52 | Option/warrant delta |
| `SYMBOL_PRICE_THETA` | 53 | Option/warrant theta |
| `SYMBOL_PRICE_GAMMA` | 54 | Option/warrant gamma |
| `SYMBOL_PRICE_VEGA` | 55 | Option/warrant vega |
| `SYMBOL_PRICE_RHO` | 56 | Option/warrant rho |
| `SYMBOL_PRICE_OMEGA` | 57 | Option/warrant omega |
| `SYMBOL_PRICE_SENSITIVITY` | 58 | Option/warrant sensitivity |
| `SYMBOL_COUNT` | 59 | Total number of properties (not used) |

</details>

## 🧩 Notes & Tips

* **Select first.** On a symbol not in Market Watch some properties read `0` — call [SymbolSelect](./SymbolSelect.md) first, or use [SymbolInfoTick](./SymbolInfoTick.md)/`ensureSymbol`.
* **Pip size.** This SDK treats `pip = point × (digits is 3 or 5 ? 10 : 1)` — combine `SYMBOL_POINT` with [SymbolInfoInteger](./SymbolInfoInteger.md) `SYMBOL_DIGITS`.
* **Many at once?** Prefer [SymbolParamsMany](../6.%20Additional_Methods/SymbolParamsMany.md) over dozens of single reads.

---

## 🔗 Usage Examples

### 1) Point and digits for pip math

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';
const D = MarketInfoPb.SymbolInfoDoubleProperty;

const req = new MarketInfoPb.SymbolInfoDoubleRequest();
req.setSymbol('EURUSD');
req.setType(D.SYMBOL_POINT);
const point = (await account.symbolInfoDouble(req)).getValue();
console.log('point:', point);
```

### 2) Current bid / ask

```ts
const D = MarketInfoPb.SymbolInfoDoubleProperty;
async function price(sym: string, prop: number) {
  const r = new MarketInfoPb.SymbolInfoDoubleRequest();
  r.setSymbol(sym); r.setType(prop);
  return (await account.symbolInfoDouble(r)).getValue();
}
const [bid, ask] = await Promise.all([price('EURUSD', D.SYMBOL_BID), price('EURUSD', D.SYMBOL_ASK)]);
console.log(bid, ask, 'spread', (ask - bid).toFixed(5));
```

### 3) Tick value & size for P&L

```ts
const D = MarketInfoPb.SymbolInfoDoubleProperty;
const r1 = new MarketInfoPb.SymbolInfoDoubleRequest(); r1.setSymbol('EURUSD'); r1.setType(D.SYMBOL_TRADE_TICK_VALUE);
const r2 = new MarketInfoPb.SymbolInfoDoubleRequest(); r2.setSymbol('EURUSD'); r2.setType(D.SYMBOL_TRADE_TICK_SIZE);
const [tickValue, tickSize] = await Promise.all([
  account.symbolInfoDouble(r1).then(d => d.getValue()),
  account.symbolInfoDouble(r2).then(d => d.getValue()),
]);
console.log('value per tick move:', tickValue / tickSize);
```

### 4) Volume constraints

```ts
const D = MarketInfoPb.SymbolInfoDoubleProperty;
for (const [name, prop] of [['min', D.SYMBOL_VOLUME_MIN], ['max', D.SYMBOL_VOLUME_MAX], ['step', D.SYMBOL_VOLUME_STEP]] as const) {
  const r = new MarketInfoPb.SymbolInfoDoubleRequest(); r.setSymbol('EURUSD'); r.setType(prop);
  console.log(name, (await account.symbolInfoDouble(r)).getValue());
}
```

### 5) Contract size

```ts
const r = new MarketInfoPb.SymbolInfoDoubleRequest();
r.setSymbol('EURUSD');
r.setType(MarketInfoPb.SymbolInfoDoubleProperty.SYMBOL_TRADE_CONTRACT_SIZE);
console.log('contract size:', (await account.symbolInfoDouble(r)).getValue());
```

### 6) A small reusable reader

```ts
function symbolDouble(account: MT5Account, sym: string, prop: number): Promise<number> {
  const r = new MarketInfoPb.SymbolInfoDoubleRequest();
  r.setSymbol(sym); r.setType(prop);
  return account.symbolInfoDouble(r).then((d) => d.getValue());
}
```

---

## 🔧 Common Patterns

### Pip size helper

```ts
async function pipSize(account: MT5Account, sym: string): Promise<number> {
  const D = MarketInfoPb.SymbolInfoDoubleProperty;
  const I = MarketInfoPb.SymbolInfoIntegerProperty;
  const pReq = new MarketInfoPb.SymbolInfoDoubleRequest(); pReq.setSymbol(sym); pReq.setType(D.SYMBOL_POINT);
  const dReq = new MarketInfoPb.SymbolInfoIntegerRequest(); dReq.setSymbol(sym); dReq.setType(I.SYMBOL_DIGITS);
  const [point, digits] = await Promise.all([
    account.symbolInfoDouble(pReq).then((d) => d.getValue()),
    account.symbolInfoInteger(dReq).then((d) => Number(d.getValue())),
  ]);
  return point * (digits === 3 || digits === 5 ? 10 : 1);
}
```

---

## 📚 See Also

* [SymbolInfoInteger](./SymbolInfoInteger.md) · [SymbolInfoString](./SymbolInfoString.md) · [SymbolInfoTick](./SymbolInfoTick.md)
* **Full spec:** [SymbolParamsMany](../6.%20Additional_Methods/SymbolParamsMany.md).
* **Friendly layer:** [`MT5Service.getSymbolDouble`](../../MT5Service/2.%20Symbol_Methods.md) · [`MT5Sugar.getSymbolInfo`](../../MT5Sugar/9.%20Symbol_Information.md).

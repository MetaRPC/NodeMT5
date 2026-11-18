# 🛒 Sending an Order (Market or Pending)

> **Request:** place a **market** or **pending** order (`OrderSendData`) on **MT5**. A filled market order's ticket is its position ticket.

**API Information:**

* **Low-level API:** `MT5Account.orderSend(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.TradingHelper`
* **Proto definition:** `OrderSend` (in `mt5-term-api-trading-helper.proto`)

### RPC

* **Service:** `mt5_term_api.TradingHelper`
* **Method:** `OrderSend(OrderSendRequest) → OrderSendReply`
* **Low-level client (generated):** `TradingHelperClient.orderSend(request, metadata, opts)`

---

## 🛑 Result is in the retcode

> `orderSend` **rejects the promise** only on an API/transport error. A **broker rejection is in the result** — check `getReturnedCode()`: **`10009` = DONE**. There is no exception for an ordinary rejection.

---

## 💬 Just the essentials

* **What it is.** One RPC that opens a market order or places a pending order.
* **Why you need it.** It's how you enter the market — everything else acts on the ticket it returns.
* **Sanity check.** `getReturnedCode() === 10009` and `getOrder()` is non-zero.

---

## 🎯 Purpose

* Open a position at market, or arm a pending order (LIMIT / STOP / STOP_LIMIT).
* Attach SL/TP and a magic number at entry.
* Get back the ticket to manage the trade.

---

## 📚 Tutorial

1. **Select the symbol** ([SymbolSelect](../2.%20Symbol_information/SymbolSelect.md)).
2. **Build an `OrderSendRequest`** — at minimum symbol, operation and volume.
3. **Call** `account.orderSend(req)` and **check `getReturnedCode()`** (`10009` = done).

```ts
import { MT5Account, TradingHelperPb } from '@metarpc/nodemt5';
const OT = TradingHelperPb.TMT5_ENUM_ORDER_TYPE;

const req = new TradingHelperPb.OrderSendRequest();
req.setSymbol('EURUSD');
req.setOperation(OT.TMT5_ORDER_TYPE_BUY);
req.setVolume(0.10);

const d = await account.orderSend(req);
if (d.getReturnedCode() === 10009) console.log('opened #', d.getOrder());
```

---

## 🧱 Signature

```ts
import { MT5Account, TradingHelperPb } from '@metarpc/nodemt5';

class MT5Account {
  // Place a market/pending order. Pass a built OrderSendRequest. Returns raw OrderSendData.
  orderSend(req: any /* OrderSendRequest */, timeoutMs?: number): Promise<any /* OrderSendData */>;
}
```

**Request message (`OrderSendRequest`) — key setters:**

| Setter | Meaning |
| ------ | ------- |
| `setSymbol(string)` | Instrument. |
| `setOperation(TMT5_ENUM_ORDER_TYPE)` | BUY / SELL / *_LIMIT / *_STOP / *_STOP_LIMIT. |
| `setVolume(number)` | Lots. |
| `setPrice(number)` | Required for pending; reference price for market. |
| `setStopLoss(number)` / `setTakeProfit(number)` | SL / TP prices. |
| `setSlippage(number)` | Max deviation (points). |
| `setExpertId(number)` | Magic number. |
| `setStopLimitPrice(number)` | For *_STOP_LIMIT. |
| `setExpirationTimeType(number)` / `setExpirationTime(Timestamp)` | Pending expiry. |
| `setQuotesWaitMs(number)` | How long to wait for the first quote (ms). |

**Reply message:**

```protobuf
OrderSendReply {
  oneof response {
    OrderSendData data = 1;
    Error error = 2;
  }
}
```

---

## 🧱 Order type enum — `TMT5_ENUM_ORDER_TYPE`

```
TMT5_ORDER_TYPE_BUY = 0   SELL = 1   BUY_LIMIT = 2   SELL_LIMIT = 3
BUY_STOP = 4   SELL_STOP = 5   BUY_STOP_LIMIT = 6   SELL_STOP_LIMIT = 7   CLOSE_BY = 8
```

Access as `TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY`.

---

## ⬆️ Output — `OrderSendData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| returned code | `getReturnedCode()` | `number` | Trade retcode — **10009 = DONE**. |
| returned code desc | `getReturnedCodeDescription()` | `string` | Human-readable result. |
| returned string code | `getReturnedStringCode()` | `string` | Symbolic code (e.g. `TRADE_RETCODE_DONE`). |
| order | `getOrder()` | `number` | Order / position ticket. |
| deal | `getDeal()` | `number` | Deal id (market fills). |
| volume | `getVolume()` | `number` | Filled volume. |
| price | `getPrice()` | `number` | Fill / set price. |
| bid / ask | `getBid()` / `getAsk()` | `number` | Prices at execution. |
| comment | `getComment()` | `string` | Broker comment. |
| request id | `getRequestId()` | `number` | Request id. |
| external code | `getRetCodeExternal()` | `number` | External system code. |

---

## 🧩 Notes & Tips

* **Always check `getReturnedCode()`.** `10019` = no money, `10016` = invalid stops, `10018` = market closed — see [Return Codes](../../All_Guides/RETURN_CODES_REFERENCE.md).
* **Stops level.** SL/TP closer than `SYMBOL_TRADE_STOPS_LEVEL` → `10016`. See [SymbolInfoInteger](../2.%20Symbol_information/SymbolInfoInteger.md).
* **Pending needs a price.** Market orders fill at the current price; pending orders require `setPrice`.
* **Deal vs order ticket.** For a filled market order `getOrder()` equals the position ticket; `getDeal()` is the deal id.
* **Friendly form.** [`MT5Service.placeOrder(OrderRequest)`](../../MT5Service/4.%20Trading_Methods.md) builds all of this from plain fields and maps the result to `OrderResult`.

---

## 🔗 Usage Examples

### 1) Market BUY

```ts
import { MT5Account, TradingHelperPb } from '@metarpc/nodemt5';
const OT = TradingHelperPb.TMT5_ENUM_ORDER_TYPE;

const req = new TradingHelperPb.OrderSendRequest();
req.setSymbol('EURUSD');
req.setOperation(OT.TMT5_ORDER_TYPE_BUY);
req.setVolume(0.10);

const d = await account.orderSend(req);
if (d.getReturnedCode() === 10009) console.log('opened #' + d.getOrder(), '@', d.getPrice());
else console.log('rejected:', d.getReturnedCode(), d.getReturnedCodeDescription());
```

### 2) Pending BUY LIMIT with SL/TP

```ts
const req = new TradingHelperPb.OrderSendRequest();
req.setSymbol('EURUSD');
req.setOperation(OT.TMT5_ORDER_TYPE_BUY_LIMIT);
req.setVolume(0.10);
req.setPrice(1.0900);           // required for pending
req.setStopLoss(1.0850);
req.setTakeProfit(1.1000);
const d = await account.orderSend(req);
```

### 3) Market SELL with a magic number

```ts
const req = new TradingHelperPb.OrderSendRequest();
req.setSymbol('EURUSD');
req.setOperation(OT.TMT5_ORDER_TYPE_SELL);
req.setVolume(0.10);
req.setExpertId(600042);
await account.orderSend(req);
```

### 4) React to the retcode

```ts
const d = await account.orderSend(req);
switch (d.getReturnedCode()) {
  case 10009: console.log('done, ticket', d.getOrder()); break;
  case 10019: console.log('not enough money'); break;
  case 10016: console.log('invalid stops'); break;
  case 10018: console.log('market closed'); break;
  default:    console.log('rejected:', d.getReturnedCodeDescription());
}
```

### 5) BUY STOP LIMIT

```ts
const req = new TradingHelperPb.OrderSendRequest();
req.setSymbol('EURUSD');
req.setOperation(OT.TMT5_ORDER_TYPE_BUY_STOP_LIMIT);
req.setVolume(0.10);
req.setPrice(1.1050);           // stop trigger
req.setStopLimitPrice(1.1045);  // limit once triggered
await account.orderSend(req);
```

### 6) A tiny open helper

```ts
async function buy(account: MT5Account, symbol: string, volume: number): Promise<number> {
  const OT = TradingHelperPb.TMT5_ENUM_ORDER_TYPE;
  const req = new TradingHelperPb.OrderSendRequest();
  req.setSymbol(symbol); req.setOperation(OT.TMT5_ORDER_TYPE_BUY); req.setVolume(volume);
  const d = await account.orderSend(req);
  if (d.getReturnedCode() !== 10009) throw new Error(`rejected ${d.getReturnedCode()}: ${d.getReturnedCodeDescription()}`);
  return d.getOrder();
}
```

---

## 🔧 Common Patterns

### Open with retry on requote

```ts
async function openWithRetry(account: MT5Account, req: any, tries = 3): Promise<any> {
  for (let i = 0; i < tries; i++) {
    const d = await account.orderSend(req);
    const code = d.getReturnedCode();
    if (code === 10009) return d;                 // done
    if (code !== 10004 && code !== 10020) return d; // non-requote → stop
  }
  throw new Error('requoted too many times');
}
```

---

## 📚 See Also

* [OrderModify](./OrderModify.md) · [OrderClose](./OrderClose.md) · [OrderCheck](./OrderCheck.md) — validate before sending.
* [Return Codes Reference](../../All_Guides/RETURN_CODES_REFERENCE.md).
* **Friendly layer:** [`MT5Service.placeOrder`](../../MT5Service/4.%20Trading_Methods.md) → `OrderResult` · [`MT5Sugar.buyMarket / sellMarket / buyLimit`](../../MT5Sugar/4.%20Simple_Trading.md).

# MT5 Return Codes (RetCodes) Reference — Node

## What is a RetCode?

A **RetCode** (return code) is the status the MT5 trade server returns after a trading operation. It tells you success, or the exact reason for a failure (insufficient margin, invalid price, market closed…).

RetCodes appear **only in trading methods** — opening, modifying and closing orders — because only those go through the broker and can be rejected.

---

## 📌 Source

RetCodes are standard **MQL5** codes — identical across every language (Node.js, Python, C#, Go…) and returned straight from the trade server. See the MQL5 reference: [Trade Server Return Codes (ENUM_TRADE_RETCODE)](https://www.mql5.com/en/docs/constants/errorswarnings/enum_trade_return_codes).

**`10009` = `TRADE_RETCODE_DONE` = success.**

---

## Where a RetCode reaches you

It arrives one of two ways — **handle both**:

1. **In the reply.** `placeOrder` / `modifyOrder` / `closeOrder` resolve with a result whose `retcode` field carries it:

```ts
const r = await service.placeOrder({ action: 'BUY', symbol: 'EURUSD', volume: 0.10 });
if (r.retcode === 10009) console.log('done, ticket', r.ticket);
else console.log('rejected:', r.retcode, r.retcodeDescription);
```

2. **As a thrown `MrpcError`.** A request the terminal refuses outright (e.g. an invalid volume) rejects the promise with an **`MrpcError`** (see [the error object](#the-error-object-mrpcerror) below) whose `tradeCode` / `tradeDescription` carry the RetCode:

```ts
import { MrpcError } from '@metarpc/nodemt5';

try {
  await account.orderSend(req);
} catch (e) {
  if (e instanceof MrpcError && e.tradeCode) {
    console.log('trade code:', e.tradeCode, e.tradeDescription);
  } else {
    throw e;   // transport / gateway error
  }
}
```

> The high-level [MT5Sugar](../MT5Sugar/MT5Sugar.API_Overview.md) trading helpers **throw** on any non-`10009` retcode, so there you only `try/catch`.

---

## 🧯 The error object — `MrpcError`

A trade rejection and a gateway/terminal error both surface as **`MrpcError`** (exported alias `MT5Error`); a pure transport failure throws the gRPC error instead.

| Field | Description |
| ----- | ----------- |
| `code` | error code — `TERMINAL_INSTANCE_NOT_FOUND`, or a retcode like `10018`. |
| `message` | human-readable (`"<code>: <message>"`). |
| `error` | the raw reply `error` object (absent for a transport failure or a sugar-layer rejection). |
| `mqlCode` / `mqlDescription` | the terminal's MQL error, when the terminal refused. |
| `tradeCode` / `tradeDescription` | the trade server's RetCode of a refused order. |
| `isInvalidLogin` | `true` for `INVALID_LOGIN` / `WRONG_PASSWORD` / `INVALID_ACCOUNT` — **never retry** these. |

`NotConnectedError` (code `NOT_CONNECTED`) is a subclass thrown when you call a method before `connect()` succeeds.

```ts
import { MrpcError } from '@metarpc/nodemt5';

try {
  await service.placeOrder({ symbol: 'EURUSD', action: 'BUY', volume: 0.01 });
} catch (e) {
  if (e instanceof MrpcError) {
    console.log(e.code, e.message);          // e.g. "10018", "...: Market is closed"
    console.log(e.tradeCode, e.mqlCode);     // decoded codes when present
  } else throw e;                            // transport failure
}
```

**Codes you'll meet:** `TERMINAL_INSTANCE_NOT_FOUND` (reconnect) · `MQL5_SIDE_TRADE_ERROR` (read `tradeCode`) · `NOT_CONNECTED` (connect first) · `INVALID_LOGIN` / `WRONG_PASSWORD` (don't retry) · plus the trade retcodes below.

---

## ✅ Success codes

| Code | Name | Meaning | Example |
| ---- | ---- | ------- | ------- |
| **10009** | `TRADE_RETCODE_DONE` | **Completed successfully** | Market order opened/closed |
| **10010** | `TRADE_RETCODE_DONE_PARTIAL` | Partial execution | Only part of the volume filled |
| **10008** | `TRADE_RETCODE_PLACED` | Pending order placed | Limit/Stop order placed |

## 🔁 Requote / price moved — retry

| Code | Name | Meaning |
| ---- | ---- | ------- |
| **10004** | `TRADE_RETCODE_REQUOTE` | Price changed, retry |
| **10020** | `TRADE_RETCODE_PRICE_CHANGED` | Price changed, retry |

## 🧾 Validation — fix the request

| Code | Name | Meaning |
| ---- | ---- | ------- |
| **10013** | `TRADE_RETCODE_INVALID` | Invalid request / parameters |
| **10014** | `TRADE_RETCODE_INVALID_VOLUME` | Volume below min or above max |
| **10015** | `TRADE_RETCODE_INVALID_PRICE` | Price doesn't match symbol rules |
| **10016** | `TRADE_RETCODE_INVALID_STOPS` | SL/TP too close (check `SYMBOL_TRADE_STOPS_LEVEL`) |
| **10022** | `TRADE_RETCODE_INVALID_EXPIRATION` | Bad expiration time |
| **10030** | `TRADE_RETCODE_INVALID_FILL` | Filling type not allowed |
| **10035** | `TRADE_RETCODE_INVALID_ORDER` | Order type prohibited for symbol |
| **10038** | `TRADE_RETCODE_INVALID_CLOSE_VOLUME` | Close volume exceeds position |

## 🚫 Restrictions — check trading conditions

| Code | Name | Meaning |
| ---- | ---- | ------- |
| **10017** | `TRADE_RETCODE_TRADE_DISABLED` | Trading disabled for the symbol |
| **10018** | `TRADE_RETCODE_MARKET_CLOSED` | Outside trading hours |
| **10026** | `TRADE_RETCODE_SERVER_DISABLES_AT` | Auto-trading disabled by server |
| **10027** | `TRADE_RETCODE_CLIENT_DISABLES_AT` | Auto-trading disabled by terminal |
| **10032** | `TRADE_RETCODE_ONLY_REAL` | Unavailable on demo |
| **10042** | `TRADE_RETCODE_LONG_ONLY` | Only long allowed |
| **10043** | `TRADE_RETCODE_SHORT_ONLY` | Only short allowed |
| **10044** | `TRADE_RETCODE_CLOSE_ONLY` | Only closing allowed |
| **10045** | `TRADE_RETCODE_FIFO_CLOSE` | Must close by FIFO |
| **10046** | `TRADE_RETCODE_HEDGE_PROHIBITED` | Hedging disabled |

## 💸 Limits — reduce volume / positions

| Code | Name | Meaning |
| ---- | ---- | ------- |
| **10019** | `TRADE_RETCODE_NO_MONEY` | Insufficient funds — check free margin |
| **10033** | `TRADE_RETCODE_LIMIT_ORDERS` | Pending-orders limit reached |
| **10034** | `TRADE_RETCODE_LIMIT_VOLUME` | Volume limit reached |
| **10040** | `TRADE_RETCODE_LIMIT_POSITIONS` | Positions limit reached |

## ⏳ Temporary — retry with a delay

| Code | Name | Meaning | Retry? |
| ---- | ---- | ------- | ------ |
| **10011** | `TRADE_RETCODE_ERROR` | Processing error | No |
| **10012** | `TRADE_RETCODE_TIMEOUT` | Request timeout | Yes |
| **10021** | `TRADE_RETCODE_NO_QUOTES` | No quotes | Yes |
| **10024** | `TRADE_RETCODE_TOO_MANY_REQUESTS` | Rate limited | Yes (with delay) |
| **10028** | `TRADE_RETCODE_LOCKED` | Locked for processing | Yes |
| **10029** | `TRADE_RETCODE_FROZEN` | Order/position frozen | Yes |
| **10031** | `TRADE_RETCODE_CONNECTION` | No connection | Yes |

## 🔃 State

| Code | Name | Meaning |
| ---- | ---- | ------- |
| **10023** | `TRADE_RETCODE_ORDER_CHANGED` | Order state changed |
| **10025** | `TRADE_RETCODE_NO_CHANGES` | New params equal current |
| **10036** | `TRADE_RETCODE_POSITION_CLOSED` | Position no longer exists |
| **10039** | `TRADE_RETCODE_CLOSE_ORDER_EXIST` | A close order already exists |

## ❌ Rejected / cancelled

| Code | Name | Meaning |
| ---- | ---- | ------- |
| **10006** | `TRADE_RETCODE_REJECT` | Broker rejected |
| **10007** | `TRADE_RETCODE_CANCEL` | Cancelled by trader |
| **10041** | `TRADE_RETCODE_REJECT_CANCEL` | Pending activation rejected & cancelled |

---

## 🧭 Handling by category

| Category | Codes | What to do |
| -------- | ----- | ---------- |
| **Success** | 10008, 10009, 10010 | Continue |
| **Requote** | 10004, 10020 | Retry immediately |
| **Temporary** | 10012, 10021, 10024, 10028, 10029, 10031 | Retry after a short delay |
| **Validation** | 10013–10016, 10022, 10030, 10035, 10038 | Fix parameters |
| **Restrictions** | 10017, 10018, 10026, 10027, 10032, 10042–10046 | Check trading conditions |
| **Limits** | 10019, 10033, 10034, 10040 | Reduce volume / positions |
| **State** | 10023, 10025, 10036, 10039 | Re-read current state |

```ts
const r = await service.placeOrder(req);
switch (r.retcode) {
  case 10009: /* done */ break;
  case 10004: case 10020: /* requote → retry now */ break;
  case 10019: console.warn('not enough money'); break;
  case 10016: console.warn('invalid stops — widen SL/TP'); break;
  case 10018: console.warn('market closed'); break;
  default:    console.warn('rejected:', r.retcode, r.retcodeDescription);
}
```

---

## See also

* [Trading Operations](../MT5Account/4.%20Trading_Operations/Trading_Operations.Overview.md) · [MT5Service Trading Methods](../MT5Service/4.%20Trading_Methods.md).
* [Concurrency Model](./CONCURRENCY_MODEL.md) — timeouts & retries · [Glossary → MrpcError](./GLOSSARY.md).

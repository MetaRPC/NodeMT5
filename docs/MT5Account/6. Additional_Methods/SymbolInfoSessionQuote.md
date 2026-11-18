# 🕑 Getting Quote Sessions (SymbolInfoSessionQuote)

> **Request:** the quote-session start/end times for a symbol on a given weekday (`SymbolInfoSessionQuoteData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.symbolInfoSessionQuote(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.MarketInfo`
* **Proto definition:** `SymbolInfoSessionQuote` (in `mt5-term-api-market-info.proto`)

### RPC

* **Service:** `mt5_term_api.MarketInfo`
* **Method:** `SymbolInfoSessionQuote(SymbolInfoSessionQuoteRequest) → SymbolInfoSessionQuoteReply`
* **Low-level client (generated):** `MarketInfoClient.symbolInfoSessionQuote(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning when quotes flow for a symbol on a weekday — a symbol can have several quote sessions per day (index `0`, `1`, …).
* **Why you need it.** Know when prices update before you rely on a fresh quote.
* **Sanity check.** `getFrom()` / `getTo()` are seconds from midnight.

---

## 🎯 Purpose

* Display a symbol's quoting hours.
* Decide whether a stale quote is expected (outside a session).

---

## 📚 Tutorial

1. **Build a `SymbolInfoSessionQuoteRequest`** with the symbol, weekday (`0 = Sunday … 6 = Saturday`) and session index.
2. **Call** `account.symbolInfoSessionQuote(req)`.
3. **Read** `getFrom()` / `getTo()` — seconds since midnight (server time).

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.SymbolInfoSessionQuoteRequest();
req.setSymbol('EURUSD');
req.setDayOfWeek(1);     // Monday
req.setSessionIndex(0);
const d = await account.symbolInfoSessionQuote(req);
console.log(d.getFrom(), d.getTo());
```

---

## 🧱 Signature

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

class MT5Account {
  // Quote session [from,to] for a symbol/weekday/index. Pass a built request. Raw data.
  symbolInfoSessionQuote(req: any /* SymbolInfoSessionQuoteRequest */, timeoutMs?: number): Promise<any /* SymbolInfoSessionQuoteData */>;
}
```

**Request setters:** `setSymbol(string)`, `setDayOfWeek(number)` *(0 = Sunday … 6 = Saturday)*, `setSessionIndex(number)` *(0-based)*.

**Reply message:**

```protobuf
SymbolInfoSessionQuoteReply {
  oneof response {
    SymbolInfoSessionQuoteData data = 1;   // getFrom(), getTo()
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Setter | Type | Description |
| ------ | ---- | ----------- |
| `setSymbol(symbol)` | `string` | Instrument. |
| `setDayOfWeek(day)` | `number` | `0 = Sunday … 6 = Saturday`. |
| `setSessionIndex(i)` | `number` | 0-based session index. |

---

## ⬆️ Output — `SymbolInfoSessionQuoteData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| from | `getFrom()` | `number` | Session start — seconds since midnight. |
| to | `getTo()` | `number` | Session end — seconds since midnight. |

> Times are **seconds from midnight** (server time), not a `Timestamp`. `08:00` → `28800`.

---

## 🧩 Notes & Tips

* **Multiple sessions.** Increment `sessionIndex` until the call errors to enumerate all sessions of a day.
* **Server time.** The seconds are in the broker's time zone — see `AccountInfo.utcServerShiftMinutes`.
* **Friendly form.** [`MT5Service.getSymbolSessionQuote(symbol, dayOfWeek, index)`](../../MT5Service/2.%20Symbol_Methods.md) → `SessionTime`.

---

## 🔗 Usage Examples

### 1) Monday's first quote session

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.SymbolInfoSessionQuoteRequest();
req.setSymbol('EURUSD'); req.setDayOfWeek(1); req.setSessionIndex(0);
const d = await account.symbolInfoSessionQuote(req);
const hhmm = (s: number) => `${String(Math.floor(s / 3600)).padStart(2, '0')}:${String(Math.floor((s % 3600) / 60)).padStart(2, '0')}`;
console.log('quotes', hhmm(d.getFrom()), '→', hhmm(d.getTo()));
```

### 2) Enumerate a day's sessions

```ts
async function quoteSessions(account: MT5Account, sym: string, day: number) {
  const out: Array<{ from: number; to: number }> = [];
  for (let i = 0; ; i++) {
    try {
      const r = new MarketInfoPb.SymbolInfoSessionQuoteRequest();
      r.setSymbol(sym); r.setDayOfWeek(day); r.setSessionIndex(i);
      const d = await account.symbolInfoSessionQuote(r);
      out.push({ from: d.getFrom(), to: d.getTo() });
    } catch { break; }
  }
  return out;
}
```

### 3) Is it quoting now?

```ts
const r = new MarketInfoPb.SymbolInfoSessionQuoteRequest();
r.setSymbol('EURUSD'); r.setDayOfWeek(new Date().getUTCDay()); r.setSessionIndex(0);
const d = await account.symbolInfoSessionQuote(r);
const nowSec = new Date().getUTCHours() * 3600 + new Date().getUTCMinutes() * 60;
console.log('in quote session?', nowSec >= d.getFrom() && nowSec <= d.getTo());
```

---

## 🔧 Common Patterns

### Session helper

```ts
function quoteSession(account: MT5Account, sym: string, day: number, index = 0) {
  const r = new MarketInfoPb.SymbolInfoSessionQuoteRequest();
  r.setSymbol(sym); r.setDayOfWeek(day); r.setSessionIndex(index);
  return account.symbolInfoSessionQuote(r);
}
```

---

## 📚 See Also

* [SymbolInfoSessionTrade](./SymbolInfoSessionTrade.md) · [SymbolInfoTick](../2.%20Symbol_information/SymbolInfoTick.md)
* **Friendly layer:** [`MT5Service.getSymbolSessionQuote`](../../MT5Service/2.%20Symbol_Methods.md) → `SessionTime`.

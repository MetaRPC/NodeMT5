# 🕒 Getting Trade Sessions (SymbolInfoSessionTrade)

> **Request:** the trade-session start/end times for a symbol on a given weekday (`SymbolInfoSessionTradeData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.symbolInfoSessionTrade(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.MarketInfo`
* **Proto definition:** `SymbolInfoSessionTrade` (in `mt5-term-api-market-info.proto`)

### RPC

* **Service:** `mt5_term_api.MarketInfo`
* **Method:** `SymbolInfoSessionTrade(SymbolInfoSessionTradeRequest) → SymbolInfoSessionTradeReply`
* **Low-level client (generated):** `MarketInfoClient.symbolInfoSessionTrade(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning when a symbol is **tradable** on a weekday — a symbol can have several trade sessions per day (index `0`, `1`, …).
* **Why you need it.** Avoid `10018 MARKET_CLOSED` by checking you're inside a trade session before sending an order.
* **Sanity check.** `getFrom()` / `getTo()` are seconds from midnight.

---

## 🎯 Purpose

* Gate order sending to a symbol's trading hours.
* Explain a `10018` rejection (outside a session).

---

## 📚 Tutorial

1. **Build a `SymbolInfoSessionTradeRequest`** with the symbol, weekday and session index.
2. **Call** `account.symbolInfoSessionTrade(req)`.
3. **Read** `getFrom()` / `getTo()` — seconds since midnight (server time).

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.SymbolInfoSessionTradeRequest();
req.setSymbol('EURUSD');
req.setDayOfWeek(1);     // Monday
req.setSessionIndex(0);
const d = await account.symbolInfoSessionTrade(req);
console.log(d.getFrom(), d.getTo());
```

---

## 🧱 Signature

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

class MT5Account {
  // Trade session [from,to] for a symbol/weekday/index. Pass a built request. Raw data.
  symbolInfoSessionTrade(req: any /* SymbolInfoSessionTradeRequest */, timeoutMs?: number): Promise<any /* SymbolInfoSessionTradeData */>;
}
```

**Request setters:** `setSymbol(string)`, `setDayOfWeek(number)` *(0 = Sunday … 6 = Saturday)*, `setSessionIndex(number)` *(0-based)*.

**Reply message:**

```protobuf
SymbolInfoSessionTradeReply {
  oneof response {
    SymbolInfoSessionTradeData data = 1;   // getFrom(), getTo()
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

## ⬆️ Output — `SymbolInfoSessionTradeData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| from | `getFrom()` | `number` | Trade-session start — seconds since midnight. |
| to | `getTo()` | `number` | Trade-session end — seconds since midnight. |

> Times are **seconds from midnight** (server time). `22:00` → `79200`.

---

## 🧩 Notes & Tips

* **Quote ≠ trade.** A symbol may quote outside the hours it can be traded — check this, not [SymbolInfoSessionQuote](./SymbolInfoSessionQuote.md), before an order.
* **Multiple sessions.** Increment `sessionIndex` until the call errors to list a day's sessions.
* **Friendly form.** [`MT5Service.getSymbolSessionTrade(symbol, dayOfWeek, index)`](../../MT5Service/2.%20Symbol_Methods.md) → `SessionTime`.

---

## 🔗 Usage Examples

### 1) Monday's first trade session

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.SymbolInfoSessionTradeRequest();
req.setSymbol('EURUSD'); req.setDayOfWeek(1); req.setSessionIndex(0);
const d = await account.symbolInfoSessionTrade(req);
console.log('tradable', d.getFrom(), '→', d.getTo(), '(seconds from midnight)');
```

### 2) Is it tradable now?

```ts
const r = new MarketInfoPb.SymbolInfoSessionTradeRequest();
r.setSymbol('EURUSD'); r.setDayOfWeek(new Date().getUTCDay()); r.setSessionIndex(0);
const d = await account.symbolInfoSessionTrade(r);
const nowSec = new Date().getUTCHours() * 3600 + new Date().getUTCMinutes() * 60;
if (nowSec < d.getFrom() || nowSec > d.getTo()) console.warn('market likely closed — expect 10018');
```

### 3) Enumerate a day's trade sessions

```ts
async function tradeSessions(account: MT5Account, sym: string, day: number) {
  const out: Array<{ from: number; to: number }> = [];
  for (let i = 0; ; i++) {
    try {
      const r = new MarketInfoPb.SymbolInfoSessionTradeRequest();
      r.setSymbol(sym); r.setDayOfWeek(day); r.setSessionIndex(i);
      const d = await account.symbolInfoSessionTrade(r);
      out.push({ from: d.getFrom(), to: d.getTo() });
    } catch { break; }
  }
  return out;
}
```

---

## 🔧 Common Patterns

### Trade-window guard before an order

```ts
async function marketOpen(account: MT5Account, sym: string): Promise<boolean> {
  const r = new MarketInfoPb.SymbolInfoSessionTradeRequest();
  r.setSymbol(sym); r.setDayOfWeek(new Date().getUTCDay()); r.setSessionIndex(0);
  try {
    const d = await account.symbolInfoSessionTrade(r);
    const nowSec = new Date().getUTCHours() * 3600 + new Date().getUTCMinutes() * 60;
    return nowSec >= d.getFrom() && nowSec <= d.getTo();
  } catch { return false; }
}
```

---

## 📚 See Also

* [SymbolInfoSessionQuote](./SymbolInfoSessionQuote.md) · [OrderSend](../4.%20Trading_Operations/OrderSend.md)
* **Friendly layer:** [`MT5Service.getSymbolSessionTrade`](../../MT5Service/2.%20Symbol_Methods.md) → `SessionTime`.

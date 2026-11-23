# 💱 Getting the Latest Tick

> **Request:** the current tick of a symbol — bid, ask, last, volume and time (`MrpcMqlTick`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.symbolInfoTick(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.MarketInfo`
* **Proto definition:** `SymbolInfoTick` (in `mt5-term-api-market-info.proto`)

### RPC

* **Service:** `mt5_term_api.MarketInfo`
* **Method:** `SymbolInfoTick(SymbolInfoTickRequest) → SymbolInfoTickReply`
* **Low-level client (generated):** `MarketInfoClient.symbolInfoTick(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning the latest tick of a symbol as an `MrpcMqlTick`.
* **Why you need it.** The cheapest way to read the current **bid/ask** without opening a stream.
* **Sanity check.** `getBid()` and `getAsk()` are positive for a selected, trading symbol.

---

## 🎯 Purpose

* A one-shot **price read** for a decision or a display.
* Compute **spread** (`ask − bid`) and **mid** (`(bid + ask) / 2`).
* Check **quote freshness** via the tick's time.

---

## 📚 Tutorial

1. **Select the symbol** so it quotes ([SymbolSelect](./SymbolSelect.md)).
2. **Call** `account.symbolInfoTick(symbol)` — the SDK builds the request and returns the raw `MrpcMqlTick`.
3. **Read** `getBid()` / `getAsk()` / `getTime()`; convert the timestamp with `getSeconds() * 1000` → `Date`.

```ts
const tick = await account.symbolInfoTick('EURUSD');
console.log(tick.getBid(), tick.getAsk());
```

---

## 🧱 Signature

```ts
import { MT5Account } from '@metarpc/nodemt5';

class MT5Account {
  // Current tick of a symbol. Plain arg; returns the raw MrpcMqlTick.
  symbolInfoTick(symbol: string, timeoutMs?: number): Promise<any /* MrpcMqlTick */>;
}
```

**Request message:** `SymbolInfoTickRequest { string symbol = 1; }` (built for you).

**Reply message:**

```protobuf
SymbolInfoTickReply {
  oneof response {
    MrpcMqlTick data = 1;
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `symbol` | `string` | Instrument, e.g. `"EURUSD"`. |

---

## ⬆️ Output — `MrpcMqlTick`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| bid | `getBid()` | `number` | Best bid price. |
| ask | `getAsk()` | `number` | Best ask price. |
| last | `getLast()` | `number` | Last deal price. |
| volume | `getVolume()` | `number` | Tick volume (integer). |
| volume (real) | `getVolumeReal()` | `number` | Real volume. |
| time | `getTime()` | `Timestamp` | Tick time (broker tz) — `.getSeconds() * 1000` → `Date`. |
| time (UTC) | `getTimeUtc()` | `Timestamp` | Same moment in UTC. |
| time (ms) | `getTimeMsc()` | `number` | Milliseconds since epoch. |
| time (ms, UTC) | `getTimeMscUtc()` | `number` | Milliseconds since epoch (UTC). |
| flags | `getFlags()` | `number` | Tick flags bitmask. |

---

## 🧩 Notes & Tips

* **Select first.** On an unselected symbol the tick may be empty — [SymbolSelect](./SymbolSelect.md) / [`ensureSymbol`](../../MT5Service/2.%20Symbol_Methods.md).
* **Timestamps.** `getTime()` is a protobuf `Timestamp`; read `.getSeconds()`. `getTimeMsc()` gives milliseconds directly.
* **Need a stream?** For continuous updates use [OnSymbolTick](../7.%20Streaming_Methods/OnSymbolTick.md) instead of polling this.
* **Friendly form.** [`MT5Service.getSymbolTick`](../../MT5Service/2.%20Symbol_Methods.md) returns a mapped `Quote` (`{ symbol, bid, ask, last, volume, time (ms), flags }`).

---

## 🔗 Usage Examples

### 1) Basic bid / ask

```ts
const tick = await account.symbolInfoTick('EURUSD');
console.log('bid', tick.getBid(), 'ask', tick.getAsk());
```

### 2) Spread and mid price

```ts
const t = await account.symbolInfoTick('EURUSD');
const spread = t.getAsk() - t.getBid();
const mid = (t.getBid() + t.getAsk()) / 2;
console.log({ spread: spread.toFixed(5), mid: mid.toFixed(5) });
```

### 3) Tick time as a Date

```ts
const t = await account.symbolInfoTick('EURUSD');
const when = new Date(t.getTimeUtc().getSeconds() * 1000);
console.log('quote at', when.toISOString());
```

### 4) Quote freshness check

```ts
const t = await account.symbolInfoTick('EURUSD');
const ageMs = Date.now() - t.getTimeMsc();
if (ageMs > 5000) console.warn(`stale quote (${(ageMs / 1000).toFixed(1)}s old)`);
```

### 5) Spread in pips

```ts
import { MarketInfoPb } from '@metarpc/nodemt5';
const D = MarketInfoPb.SymbolInfoDoubleProperty;
const I = MarketInfoPb.SymbolInfoIntegerProperty;

const t = await account.symbolInfoTick('EURUSD');
const pReq = new MarketInfoPb.SymbolInfoDoubleRequest(); pReq.setSymbol('EURUSD'); pReq.setType(D.SYMBOL_POINT);
const dReq = new MarketInfoPb.SymbolInfoIntegerRequest(); dReq.setSymbol('EURUSD'); dReq.setType(I.SYMBOL_DIGITS);
const [point, digits] = await Promise.all([
  account.symbolInfoDouble(pReq).then((d) => d.getValue()),
  account.symbolInfoInteger(dReq).then((d) => Number(d.getValue())),
]);
const pip = point * (digits === 3 || digits === 5 ? 10 : 1);
console.log('spread pips:', ((t.getAsk() - t.getBid()) / pip).toFixed(1));
```

### 6) Poll a few quotes

```ts
for (let i = 0; i < 5; i++) {
  const t = await account.symbolInfoTick('EURUSD');
  console.log(t.getBid(), t.getAsk());
  await new Promise((r) => setTimeout(r, 1000));
}
```

> For many updates, prefer the [OnSymbolTick](../7.%20Streaming_Methods/OnSymbolTick.md) stream over a polling loop.

---

## 🔧 Common Patterns

### Safe price read with select

```ts
async function currentPrice(account: MT5Account, sym: string): Promise<{ bid: number; ask: number }> {
  await account.symbolSelect(sym, true);
  const t = await account.symbolInfoTick(sym);
  return { bid: t.getBid(), ask: t.getAsk() };
}
```

### Mid-price helper

```ts
async function mid(account: MT5Account, sym: string): Promise<number> {
  const t = await account.symbolInfoTick(sym);
  return (t.getBid() + t.getAsk()) / 2;
}
```

---

## 📚 See Also

* [OnSymbolTick](../7.%20Streaming_Methods/OnSymbolTick.md) — the streaming equivalent.
* [SymbolInfoDouble](./SymbolInfoDouble.md) — individual price / spec properties. · [SymbolSelect](./SymbolSelect.md)
* **Friendly layer:** [`MT5Service.getSymbolTick`](../../MT5Service/2.%20Symbol_Methods.md) → `Quote` · [`MT5Sugar.getBid / getAsk / getPriceInfo`](../../MT5Sugar/3.%20Prices_Quotes.md).

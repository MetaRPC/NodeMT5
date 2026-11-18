# Glossary

> The MT5, trading and SDK terms you'll meet in these docs, grouped by kind.

---

## 🏗️ Architectural terms

**Three-layer architecture** — the SDK is three decoupled layers, each owning the one below (`sugar.service()` → `MT5Service`, `service.account()` → `MT5Account`). See the [Project Map](./PROJECT_MAP.md).

**MT5Account** — the low-level layer. Raw gRPC: you pass protobuf `*Request` messages and read `*Data` replies with `getXxx()` getters. Owns the channel, the gRPC clients, auth metadata, reconnect and streaming. → [overview](../MT5Account/MT5Account.Master.Overview.md)

**MT5Service** — the mid layer. Same calls, but it builds the protobuf from plain arguments and returns typed objects (`AccountInfo`, `Quote`, `Position`…). → [overview](../MT5Service/MT5Service.Overview.md)

**MT5Sugar** — the high layer. One-line helpers (`buyMarket`, `closeAllPositions`) with smart defaults; throws on failure. → [overview](../MT5Sugar/MT5Sugar.API_Overview.md)

**DTO** — "data transfer object": the plain TypeScript interfaces `MT5Service` returns instead of protobuf (`AccountInfo`, `Quote`, `Position`, `SymbolParams`…).

**MrpcError** — the error thrown when the gateway or terminal reports a problem. Carries `code`, `message`, and for trade rejections `tradeCode` / `tradeDescription` (and `mqlCode` / `mqlDescription`); `isInvalidLogin` flags never-retry auth errors. Alias: `MT5Error`. See [Return Codes → the error object](./RETURN_CODES_REFERENCE.md).

**Subscription** — what a streaming method returns: `{ unsubscribe(): void }`. Call `unsubscribe()` to stop the stream.

---

## 🧩 Node / TypeScript-specific concepts

**Async / await** — every network call returns a `Promise`; `await` it inside `async` functions and wrap in `try/catch`.

```ts
const sugar = MT5Sugar.create('mt5.mrpc.pro', 443, process.env.MRPC_API_KEY);
await sugar.quickConnect(login, 'password', 'MetaQuotes-Demo');
const balance = await sugar.getBalance();
```

**`Promise.all` for parallel reads** — independent calls run concurrently instead of one-by-one.

```ts
const [tick, params] = await Promise.all([
  service.getSymbolTick('EURUSD'),
  service.getSymbolParams('EURUSD'),
]);
```

**Typed objects vs protobuf stubs** — the low layer returns generated protobuf objects (`reply.getXxx()`); the mid layer unwraps them into typed DTOs. The stubs are typed `any`, so discover real names with the [Protobuf Inspector](./PROTOBUF_INSPECTOR_GUIDE.md).

```ts
const d = await account.openedOrders();          // low: protobuf, d.getPositionInfosList()
const { positions } = await service.getOpenedOrders(); // mid: typed Position[]
```

**Streaming — the Subscription/callback model** — a streaming method returns a `Subscription` and invokes your callback per payload; errors go to the optional `onError`. Always `unsubscribe()` when done. See [gRPC Stream Management](./GRPC_STREAM_MANAGEMENT.md).

```ts
const sub = service.streamTicks(['EURUSD'], (q) => console.log(q.bid, q.ask));
// later:
sub.unsubscribe();
```

**Connection & cleanup** — `connect` / `quickConnect` opens the terminal session; `disconnect(true)` closes it and **frees the terminal** (a trial allows one per IP). Use `try/finally`.

```ts
try { /* … */ } finally { await sugar.service().disconnect(true); }
```

---

## 🎓 Trading terms

### Account

**Balance** — closed-trade money; excludes floating P/L. **Equity** — balance + floating P/L; moves with open positions. **Margin** — funds locked to hold positions. **Free margin** — equity − margin; available to open more. **Margin level** — equity / margin × 100 (%); low levels risk a **stop-out**. **Leverage** — the multiplier (1:100) setting margin need. **Trade mode** — `DEMO`, `CONTEST` or `REAL`.

### Instruments & prices

**Symbol** — a tradable instrument (`EURUSD`, `XAUUSD`). **Bid / Ask** — sell / buy price; **spread** = ask − bid. **Digits** — decimal places (5 for EURUSD, 3 for JPY). **Tick** — one price update (`symbolInfoTick` / `onSymbolTick`). **DOM (Depth of Market)** — the order book: pending volume at each price level.

### Orders, positions & deals (MT5 model)

**Order** — an instruction to trade. **Market** fills now; **pending** (LIMIT/STOP/STOP_LIMIT) waits for a price. **Position** — an *open* trade; on MT5 distinct from the order and the deals. **Deal** — a single execution (fill); a position is the net of its deals. **Ticket** — the numeric id (a filled market order's order ticket = its position ticket). **Order type** (`TMT5_ENUM_ORDER_TYPE`): `BUY=0, SELL=1, BUY_LIMIT=2, SELL_LIMIT=3, BUY_STOP=4, SELL_STOP=5, …`. **Position type**: `0 = BUY`, `1 = SELL`. **SL / TP** — stop-loss / take-profit auto-close levels. **Magic number** — a client id (`expertId`) tagging a strategy's orders. **RetCode** — the trade-server return code; **`10009` = DONE**. See [Return Codes](./RETURN_CODES_REFERENCE.md).

---

## 📦 Technical concepts

**Point** — the smallest price increment (`0.00001` on 5-digit EURUSD). **Pip** — the conventional move unit; in this SDK `pip = point × (digits is 3 or 5 ? 10 : 1)`, so one pip on EURUSD = `0.0001`. **Tick value / tick size** — the money value of one tick, and the price change one tick represents — inputs for P&L and sizing.

**Lot / volume** — trade size in lots (`0.01` = micro). Must obey **volume limits** (`volumeMin` / `volumeMax` / `volumeStep`). **Contract size** — units of the base instrument per 1.0 lot.

**Risk-based sizing** — picking the lot so a stop of N pips loses a fixed % of balance: [`calculatePositionSize(symbol, riskPercent, stopLossPips)`](../MT5Sugar/10.%20Risk_Management.md). **Risk amount** = `balance × riskPercent / 100`. **Required margin** — margin a prospective order needs. **Drawdown** — the drop from a peak to current equity, %.

**Stops level** (`SYMBOL_TRADE_STOPS_LEVEL`) — minimum distance, in points, SL/TP may sit from the market; closer → retcode `10016`.

**Trailing stop** — a stop that ratchets in your favour, never back ([orchestrator](../Orchestrators/11_Trailing_stop.md)). **Breakeven** — moving the stop to entry once in profit. **Hedging** — holding BUY and SELL on one symbol at once (hedging accounts). **Grid trading** — bracketing price with pending orders ([orchestrator](../Orchestrators/13_Grid_trader.md)). **Scalping** — many small short-lived trades. **News trading** — trading around releases; expect wide spreads / rejections. **Kill-switch** — close everything on a drawdown/margin breach ([risk manager](../Orchestrators/14_Risk_manager.md)).

---

## 🔌 gRPC & protocol terms

**gRPC** — the RPC protocol the SDK speaks to `mt5.mrpc.pro:443` (HTTP/2 + protobuf over TLS).

**Protobuf** — the binary message format. On the low layer you build `*Request` messages and read `*Data` replies with `getXxx()` getters; `MT5Service` hides this behind typed objects.

**Streaming pattern** — a server stream delivered via callback: a streaming method returns a `Subscription` and calls your callback per payload. See [gRPC Stream Management](./GRPC_STREAM_MANAGEMENT.md).

**Gateway** — the MetaRPC service (`mt5.mrpc.pro`) bridging the SDK to MT5 terminals and managing sessions. **Terminal** — the MT5 instance your account runs on behind the gateway. **Session / terminal instance guid** — the id obtained on `connect` (ConnectEx), attached with your API key to every later call automatically. **API key** — your MetaRPC key; pass it to `MT5Sugar.create(...)`, or use `TRIAL`.

---

## See also

* [Project Map](./PROJECT_MAP.md) · [MT5 for Beginners](./MT5_For_Beginners.md) · [Getting Started](./GETTING_STARTED.md) · [Return Codes](./RETURN_CODES_REFERENCE.md)

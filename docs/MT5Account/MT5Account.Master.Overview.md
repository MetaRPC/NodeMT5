# MT5Account — Master Overview

> One page to **orient fast**: what lives where, how to choose the right API, and jump links to every **overview** and **method spec** in this docs set.

`metarpc.MT5Account` (from `@metarpc/nodemt5`) is the **low-level** layer — a thin, 1:1-with-the-wire client. Each method maps to a single gRPC RPC: you pass a generated protobuf `*Request` and get back the reply's `*Data` payload, or it rejects with an `MrpcError`. It owns the gRPC channel, the seven service clients, the auth metadata (apikey + terminal id) and the connection lifecycle.

```ts
import { MT5Account } from '@metarpc/nodemt5';
```

!!! note "When to use this layer"
    Use `MT5Account` when you need a field the friendly layers do not expose, or full control over the exact request. For everyday work prefer [`MT5Service`](../MT5Service/MT5Service.Overview.md) (plain args + typed objects) or [`MT5Sugar`](../MT5Sugar/MT5Sugar.API_Overview.md) (one-liners).

---

## 🚦 Start here — Section Overviews

* **[Account Information — Overview](./1.%20Account_information/Account_Information.Overview.md)**
  Account balance / equity / margin / leverage — the complete snapshot in one call, or single properties.

* **[Symbol Information — Overview](./2.%20Symbol_information/Symbol_Information.Overview.md)**
  Quotes, symbol properties, trading rules, Market Watch management.

* **[Positions & Orders — Overview](./3.%20Position_Orders_Information/Position_Orders_Information.Overview.md)**
  Open positions, pending orders, historical deals and order history.

* **[Trading Operations — Overview](./4.%20Trading_Operations/Trading_Operations.Overview.md)**
  Order execution, position management, margin/profit calculations, trade validation.

* **[Market Depth (DOM) — Overview](./5.%20Market_Depth(DOM)/Market_Depth.Overview.md)**
  Level-II quotes / order book — subscribe, read, release.

* **[Additional Methods — Overview](./6.%20Additional_Methods/Additional_Methods.Overview.md)**
  Margin rates, trading sessions, batch symbol params, tick value.

* **[Streaming Methods — Overview](./7.%20Streaming_Methods/Streaming_Methods.Overview.md)**
  Real-time streams: ticks, trades, position-profit, ticket snapshots, transactions.

---

## 🧭 How to pick an API

| If you need…                        | Go to…                    | Typical calls                                                   |
| ----------------------------------- | ------------------------- | -------------------------------------------------------------- |
| Account snapshot                    | Account Information       | `accountSummary`                                               |
| A single account property           | Account Information       | `accountInfoDouble` / `Integer` / `String`                     |
| Live quotes / symbol props          | Symbol Information        | `symbolInfoTick`, `symbolInfoDouble`, `symbolSelect`           |
| Open positions / pending orders     | Positions & Orders        | `openedOrders`, `positionsTotal`, `openedOrdersTickets`        |
| Closed deals / order history        | Positions & Orders        | `orderHistory`, `positionsHistory`                             |
| Place / modify / close an order     | Trading Operations        | `orderSend`, `orderModify`, `orderClose`                       |
| Validate / size before trading      | Trading Operations        | `orderCheck`, `orderCalcMargin`, `orderCalcProfit`             |
| Level-II order book                 | Market Depth (DOM)        | `marketBookAdd`, `marketBookGet`, `marketBookRelease`          |
| Margin rates / sessions / batch     | Additional Methods        | `symbolInfoMarginRate`, `symbolParamsMany`, `tickValueWithSize`|
| Real-time updates                   | Streaming Methods         | `onSymbolTick`, `onTrade`, `onPositionProfit`                  |

---

## 🔌 Usage pattern (raw gRPC)

Every method is called on an `MT5Account`. It owns the gRPC channel, sends the terminal id and API key as metadata, and unwraps the reply — returning the protobuf `*Data` payload or **rejecting** with an error.

```ts
import { MT5Account } from '@metarpc/nodemt5';
const pb = MT5Account; // the generated *Pb bindings are exported from the module

// Create the client (prepares the gRPC channel; apiKey from MRPC_API_KEY, else TRIAL)
const account = new MT5Account('mt5.mrpc.pro', 443);

// Connect the terminal (ConnectEx by broker server name)
await account.connect({ user: 500000, password: 'password', server: 'MetaQuotes-Demo' });
// The gateway returns a terminal session GUID; later calls reuse it automatically.

// Call a method: returns the Data payload, or throws MrpcError / a transport error
const s = await account.accountSummary();
console.log('Balance:', s.getAccountBalance(), s.getAccountCurrency());
```

Every method follows the same shape:

* **Proto Service/Method:** `Service.Method(Request) → Reply`
* **Client call:** `account.method(req?)` resolves with the `*Data` payload.
* **Reply structure:** the reply carries either a `data` payload or an `error`; `MT5Account` returns the `data` and turns `error` into a thrown **`MrpcError`**.
* **Errors are exceptions** — there are no error return values; `await` inside `try/catch`.

**Timestamps:** proto uses `google.protobuf.Timestamp` (or raw unix seconds on some messages); read `.getSeconds()`. The friendly `MT5Service` layer converts these to numbers / UTC for you.

**Streaming methods:** return a `{ unsubscribe() }` handle. The SDK reads the stream and invokes your callback for each payload; call `unsubscribe()` to stop.

---

## 📚 Full index · all method specs

### 1 · Account Information · [Overview](./1.%20Account_information/Account_Information.Overview.md)
* [AccountSummary](./1.%20Account_information/AccountSummary.md) — all account data in one call.
* [AccountInfoDouble](./1.%20Account_information/AccountInfoDouble.md) — one ACCOUNT_* double property.
* [AccountInfoInteger](./1.%20Account_information/AccountInfoInteger.md) — one ACCOUNT_* integer property.
* [AccountInfoString](./1.%20Account_information/AccountInfoString.md) — one ACCOUNT_* string property.

### 2 · Symbol Information · [Overview](./2.%20Symbol_information/Symbol_Information.Overview.md)
* [SymbolsTotal](./2.%20Symbol_information/SymbolsTotal.md) · [SymbolExist](./2.%20Symbol_information/SymbolExist.md) · [SymbolName](./2.%20Symbol_information/SymbolName.md)
* [SymbolSelect](./2.%20Symbol_information/SymbolSelect.md) · [SymbolIsSynchronized](./2.%20Symbol_information/SymbolIsSynchronized.md)
* [SymbolInfoDouble](./2.%20Symbol_information/SymbolInfoDouble.md) · [SymbolInfoInteger](./2.%20Symbol_information/SymbolInfoInteger.md) · [SymbolInfoString](./2.%20Symbol_information/SymbolInfoString.md)
* [SymbolInfoTick](./2.%20Symbol_information/SymbolInfoTick.md)

### 3 · Positions & Orders · [Overview](./3.%20Position_Orders_Information/Position_Orders_Information.Overview.md)
* [PositionsTotal](./3.%20Position_Orders_Information/PositionsTotal.md) · [OpenedOrders](./3.%20Position_Orders_Information/OpenedOrders.md) · [OpenedOrdersTickets](./3.%20Position_Orders_Information/OpenedOrdersTickets.md)
* [OrderHistory](./3.%20Position_Orders_Information/OrderHistory.md) · [PositionsHistory](./3.%20Position_Orders_Information/PositionsHistory.md)

### 4 · Trading Operations · [Overview](./4.%20Trading_Operations/Trading_Operations.Overview.md)
* [OrderSend](./4.%20Trading_Operations/OrderSend.md) · [OrderModify](./4.%20Trading_Operations/OrderModify.md) · [OrderClose](./4.%20Trading_Operations/OrderClose.md)
* [OrderCheck](./4.%20Trading_Operations/OrderCheck.md) · [OrderCalcMargin](./4.%20Trading_Operations/OrderCalcMargin.md) · [OrderCalcProfit](./4.%20Trading_Operations/OrderCalcProfit.md)

### 5 · Market Depth (DOM) · [Overview](./5.%20Market_Depth(DOM)/Market_Depth.Overview.md)
* [MarketBookAdd](./5.%20Market_Depth(DOM)/MarketBookAdd.md) · [MarketBookGet](./5.%20Market_Depth(DOM)/MarketBookGet.md) · [MarketBookRelease](./5.%20Market_Depth(DOM)/MarketBookRelease.md)

### 6 · Additional Methods · [Overview](./6.%20Additional_Methods/Additional_Methods.Overview.md)
* [SymbolParamsMany](./6.%20Additional_Methods/SymbolParamsMany.md) · [TickValueWithSize](./6.%20Additional_Methods/TickValueWithSize.md)
* [SymbolInfoMarginRate](./6.%20Additional_Methods/SymbolInfoMarginRate.md) · [SymbolInfoSessionQuote](./6.%20Additional_Methods/SymbolInfoSessionQuote.md) · [SymbolInfoSessionTrade](./6.%20Additional_Methods/SymbolInfoSessionTrade.md)

### 7 · Streaming Methods · [Overview](./7.%20Streaming_Methods/Streaming_Methods.Overview.md)
* [OnSymbolTick](./7.%20Streaming_Methods/OnSymbolTick.md) · [OnTrade](./7.%20Streaming_Methods/OnTrade.md)
* [OnPositionProfit](./7.%20Streaming_Methods/OnPositionProfit.md) · [OnPositionsAndPendingOrdersTickets](./7.%20Streaming_Methods/OnPositionsAndPendingOrdersTickets.md) · [OnTradeTransaction](./7.%20Streaming_Methods/OnTradeTransaction.md)

---

## 🏗️ API Architecture

### Layer 1: MT5Account (Low-Level) — You are here!

**What:** direct protobuf/gRPC communication with the MT5 terminal. Works with protobuf `*Request` / `*Data` objects; raw gRPC calls; complete access to every MT5 function; highest complexity.

**Location:** `src/MT5Account.ts`

### Layer 2: MT5Service

**What:** a friendly facade over `MT5Account` — plain arguments and typed objects (`AccountInfo`, `Quote`, `Position`…). No protobuf. **Location:** `src/MT5Service.ts` → [overview](../MT5Service/MT5Service.Overview.md).

### Layer 3: MT5Sugar

**What:** high-level convenience API — one-liners, risk-based position sizing, smart defaults. **Location:** `src/MT5Sugar.ts` → [overview](../MT5Sugar/MT5Sugar.API_Overview.md).

Each layer **owns** the one below it: `MT5Sugar` owns an `MT5Service`, which owns an `MT5Account`. From Sugar you can always reach down with `sugar.service()` and `sugar.account()`.

---

## 💡 Key concepts

* **Errors are exceptions.** A server-side rejection throws `metarpc.MrpcError` (carrying `mqlCode` / `tradeCode`); a transport failure throws the gRPC error. There are no error return values.
* **Session id is automatic.** `connect()` (ConnectEx) obtains a terminal session GUID; the SDK attaches it (+ your apikey) to every later call and stream. You never call `GetId` manually.
* **Trade retcode.** `orderSend` / `orderClose` carry a trade-server result code — **`10009` = DONE** (success). See [Return Codes](../All_Guides/RETURN_CODES_REFERENCE.md).
* **MT5 has positions.** Unlike MT4, MT5 separates **positions** (net market exposure), **orders** (pending/working) and **deals** (executed transactions in history).

---

"Trade safe, code clean, and may your gRPC streams always flow smoothly."

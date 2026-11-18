# MT5Account · Streaming Methods — Overview

> Server-streaming subscriptions: live ticks, trade events, periodic P&L, ticket snapshots and trade transactions. All live on `mt5_term_api.SubscriptionService`.

## 📁 What lives here

* **[OnSymbolTick](./OnSymbolTick.md)** — live Bid/Ask ticks for one or more symbols.
* **[OnTrade](./OnTrade.md)** — trade events (orders/positions/deals changed).
* **[OnPositionProfit](./OnPositionProfit.md)** — periodic open-position P&L snapshots on a timer.
* **[OnPositionsAndPendingOrdersTickets](./OnPositionsAndPendingOrdersTickets.md)** — periodic ticket snapshots on a timer.
* **[OnTradeTransaction](./OnTradeTransaction.md)** — raw trade-transaction events (fills, requests, results).

---

## 🧰 The subscription model

Every streaming method returns a **`Subscription`** — `{ unsubscribe(): void }` — and calls your callback on each payload:

```ts
interface Subscription { unsubscribe(): void; }

const sub = account.onSymbolTick(['EURUSD'], (tick) => { /* … */ });
// later:
sub.unsubscribe();
```

* **Payload** is the raw `*Data` message (same `getXxx()` accessors as the unary calls).
* **Errors** arrive via the optional `onError` callback; a gateway/terminal error is an `MrpcError`.
* The SDK attaches the session guid + api key automatically — just `connect()` first.

> Always keep the returned `Subscription` and call `unsubscribe()` when done — an un-cancelled stream leaks.

---

## 🧭 Plain English

| You want… | Use |
| --------- | --- |
| Live prices | `onSymbolTick` |
| "Something changed in my account" | `onTrade` |
| A P&L ticker for open positions | `onPositionProfit` |
| A heartbeat list of open tickets | `onPositionsAndPendingOrdersTickets` |
| Low-level fill/transaction detail | `onTradeTransaction` |

---

## Quick choose

| If you need…                         | Use                                   | Callback payload | Key inputs |
| ------------------------------------ | ------------------------------------- | ---------------- | ---------- |
| Live price ticks                     | `onSymbolTick`                        | `OnSymbolTickData` (`getSymbolTick()` → `MrpcSubscriptionMqlTick`) | `symbols: string[]` |
| "Something changed" trade events     | `onTrade`                             | `OnTradeData` (`getType()`) | *(none)* |
| Detailed transaction audit          | `onTradeTransaction`                  | `OnTradeTransactionData` (`getTradeTransaction()`) | *(none)* |
| Periodic P&L of open positions       | `onPositionProfit`                    | `OnPositionProfitData` (`getUpdatedPositionsList()`) | `setTimerPeriodMilliseconds`, `setIgnoreEmptyData` |
| Periodic ticket snapshots            | `onPositionsAndPendingOrdersTickets`  | `OnPositionsAndPendingOrdersTicketsData` | `setTimerPeriodMilliseconds` |

---

## ❌ Cross-refs & gotchas

* **Callbacks, not channels.** Each method returns a `Subscription` and invokes your callback per payload — no manual loop; errors go to the optional `onError`.
* **Always `unsubscribe()`.** An un-cancelled stream keeps the gRPC call (and terminal) alive.
* **`onSymbolTick` is high-frequency.** Many updates per second per symbol — keep the callback cheap.
* **Timer streams need a period.** `onPositionProfit` / `onPositionsAndPendingOrdersTickets` take `setTimerPeriodMilliseconds(...)`; `1000` ms is a smooth ticker.
* **No symbol filter on P&L.** `onPositionProfit` streams all positions — filter by `getPositionSymbol()` on the client side.
* **`onTrade` vs `onTradeTransaction`.** `onTrade` = coarse "state changed"; `onTradeTransaction` = per-transaction detail (fills, requests, results).

---

## 🟢 Minimal snippets

```ts
// Live ticks for EURUSD
const sub = account.onSymbolTick(['EURUSD'], (data) => {
  const t = data.getSymbolTick();
  console.log(`${t.getSymbol()}: Bid=${t.getBid()}, Ask=${t.getAsk()}`);
}, (e) => console.error(e.message));
// later: sub.unsubscribe();
```

```ts
// Trade events — re-pull the book on change
const sub = account.onTrade(async (data) => {
  console.log('trade event, type', data.getType());
  const d = await account.openedOrders();
  console.log('positions now:', d.getPositionInfosList().length);
});
```

```ts
// Periodic position P&L (all positions; filter client-side)
import { SubscriptionsPb } from '@metarpc/nodemt5';

const req = new SubscriptionsPb.OnPositionProfitRequest();
req.setTimerPeriodMilliseconds(1000);
req.setIgnoreEmptyData(true);
const sub = account.onPositionProfit(req, (data) => {
  for (const p of data.getUpdatedPositionsList()) {
    console.log(`#${p.getTicket()} ${p.getPositionSymbol()} P&L ${p.getProfit().toFixed(2)}`);
  }
});
```

```ts
// Heartbeat of open tickets
import { SubscriptionsPb } from '@metarpc/nodemt5';

const req = new SubscriptionsPb.OnPositionsAndPendingOrdersTicketsRequest();
req.setTimerPeriodMilliseconds(2000);
const sub = account.onPositionsAndPendingOrdersTickets(req, (data) => {
  console.log('positions:', data.getPositionTicketsList());
  console.log('pendings :', data.getPendingOrderTicketsList());
});
```

```ts
// Raw transaction log
const sub = account.onTradeTransaction((data) => {
  const tx = data.getTradeTransaction();
  console.log(`tx ${data.getType()} ${tx.getSymbol()} deal#${tx.getDealTicket()} order#${tx.getOrderTicket()}`);
});
```

```ts
// Several streams at once — collect handles, unsubscribe all
const subs = [
  account.onSymbolTick(['EURUSD'], (d) => console.log('[TICK]', d.getSymbolTick().getBid())),
  account.onTrade((d) => console.log('[TRADE] type', d.getType())),
];
// later:
for (const s of subs) s.unsubscribe();
```

---

## See also

* **Friendly layer:** [`MT5Service`](../../MT5Service/MT5Service.Overview.md) wraps these into mapped objects; [`MT5Sugar`](../../MT5Sugar/MT5Sugar.API_Overview.md) exposes `onTick` / `onTrade` one-liners.

---

**Back to:** [MT5Account — Master Overview](../MT5Account.Master.Overview.md)

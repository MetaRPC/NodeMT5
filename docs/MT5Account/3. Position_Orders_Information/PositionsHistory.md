# 🗂️ Getting Positions History

> **Request:** closed positions whose open time falls in a window (`PositionsHistoryData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.positionsHistory(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.AccountHelper`
* **Proto definition:** `PositionsHistory` (in `mt5-term-api-account-helper.proto`)

### RPC

* **Service:** `mt5_term_api.AccountHelper`
* **Method:** `PositionsHistory(PositionsHistoryRequest) → PositionsHistoryReply`
* **Low-level client (generated):** `AccountHelperClient.positionsHistory(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning **closed positions** (net results), whose **open** time is in `[from, to]`.
* **Why you need it.** Per-position P/L for journals and statistics, already netted (unlike raw deals).
* **Sanity check.** `getHistoryPositionsList()` has one entry per closed position.

---

## 🎯 Purpose

* Daily / weekly / monthly P/L and win-rate.
* A clean "trades" list without reconstructing positions from deals.

---

## 📚 Tutorial

1. **Pick a window** — note it filters on the position's **open** time.
2. **Call** `account.positionsHistory(from, to, opts?)`.
3. **Iterate** `getHistoryPositionsList()` → `PositionHistoryInfo`.

```ts
const from = new Date(Date.now() - 30 * 864e5);
const data = await account.positionsHistory(from, new Date());
for (const p of data.getHistoryPositionsList()) {
  console.log(p.getPositionTicket(), p.getSymbol(), p.getProfit());
}
```

---

## 🧱 Signature

```ts
import { MT5Account } from '@metarpc/nodemt5';

class MT5Account {
  // Closed positions whose OPEN time is in the window. from/to are Date or epoch (server time).
  positionsHistory(
    from: Date | number,
    to: Date | number,
    opts?: { sort?: number; page?: number; perPage?: number },
    timeoutMs?: number,
  ): Promise<any /* PositionsHistoryData */>;
}
```

**Request message:** `PositionsHistoryRequest` — `setSortType(AH_ENUM_POSITIONS_HISTORY_SORT_TYPE)`, `setPositionOpenTimeFrom(Timestamp)`, `setPositionOpenTimeTo(Timestamp)`, optional `setPageNumber` / `setItemsPerPage` (built from your arguments).

**Reply message:**

```protobuf
PositionsHistoryReply {
  oneof response {
    PositionsHistoryData data = 1;
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `from` / `to` | `Date \| number` | Window on the position's **open** time (server time). |
| `opts.sort` | `number` | `AH_ENUM_POSITIONS_HISTORY_SORT_TYPE` (default `AH_POSITION_OPEN_TIME_DESC`). |
| `opts.page` / `opts.perPage` | `number` | Paging. |

---

## ⬆️ Output — `PositionsHistoryData`

| Field | JS accessor | Description |
| ----- | ----------- | ----------- |
| positions | `getHistoryPositionsList()` | Array of `PositionHistoryInfo`. |
| total | `getTotalCount()` | Total closed positions in the range. |
| next page | `getNextPageToken()` | Continuation token. |

**`PositionHistoryInfo`** (key getters): `getPositionTicket()`, `getSymbol()`, `getOrderType()`, `getVolume()`, `getOpenPrice()`, `getClosePrice()`, `getStopLoss()`, `getTakeProfit()`, `getProfit()`, `getSwap()`, `getCommission()`, `getFee()`, `getOpenTime()`, `getCloseTime()`, `getMagic()`, `getComment()`.

---

## 🧩 Notes & Tips

* **Window is on OPEN time.** A position opened before `from` but closed inside the window is **not** returned — widen `from` if needed.
* **Net profit per position** = `getProfit() + getSwap() + getCommission() + getFee()`.
* **Friendly form.** [`MT5Service.getPositionsHistory`](../../MT5Service/3.%20Position_Orders_Methods.md) returns mapped `HistoryPosition[]`; [`MT5Sugar.getDealsToday / getDailyStats`](../../MT5Sugar/8.%20History_Statistics.md) wrap common windows.

---

## 🔗 Usage Examples

### 1) Last 30 days

```ts
const from = new Date(Date.now() - 30 * 864e5);
const data = await account.positionsHistory(from, new Date());
console.log('closed positions:', data.getHistoryPositionsList().length);
```

### 2) Net P/L over the window

```ts
const data = await account.positionsHistory(from, new Date());
const net = data.getHistoryPositionsList().reduce(
  (s, p) => s + p.getProfit() + p.getSwap() + p.getCommission() + p.getFee(), 0);
console.log('net P/L:', net.toFixed(2));
```

### 3) Win rate

```ts
const list = (await account.positionsHistory(from, new Date())).getHistoryPositionsList();
const wins = list.filter((p) => p.getProfit() >= 0).length;
console.log(`${wins}/${list.length} winners (${((wins / list.length) * 100).toFixed(0)}%)`);
```

### 4) Positions on one symbol

```ts
const list = (await account.positionsHistory(from, new Date())).getHistoryPositionsList();
console.log('EURUSD closed:', list.filter((p) => p.getSymbol() === 'EURUSD').length);
```

### 5) Oldest-first sort

```ts
import { AccountHelperPb } from '@metarpc/nodemt5';
const data = await account.positionsHistory(from, new Date(), {
  sort: AccountHelperPb.AH_ENUM_POSITIONS_HISTORY_SORT_TYPE.AH_POSITION_OPEN_TIME_ASC,
});
```

---

## 🔧 Common Patterns

### Daily statistics

```ts
async function dailyStats(account: MT5Account, from: Date, to: Date) {
  const list = (await account.positionsHistory(from, to)).getHistoryPositionsList();
  let net = 0, wins = 0;
  for (const p of list) {
    const r = p.getProfit() + p.getSwap() + p.getCommission() + p.getFee();
    net += r;
    if (r >= 0) wins++;
  }
  return { trades: list.length, net, winRate: list.length ? (wins / list.length) * 100 : 0 };
}
```

---

## 📚 See Also

* [OrderHistory](./OrderHistory.md) — raw orders & deals. · [OpenedOrders](./OpenedOrders.md) — current state.
* **Friendly layer:** [`MT5Service.getPositionsHistory`](../../MT5Service/3.%20Position_Orders_Methods.md) · [`MT5Sugar.getDealsToday / getProfitToday / getDailyStats`](../../MT5Sugar/8.%20History_Statistics.md).

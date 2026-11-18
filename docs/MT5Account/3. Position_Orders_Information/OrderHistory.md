# 📜 Getting Order History

> **Request:** closed orders and their deals in a time window (`OrdersHistoryData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.orderHistory(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.AccountHelper`
* **Proto definition:** `OrderHistory` (in `mt5-term-api-account-helper.proto`)

### RPC

* **Service:** `mt5_term_api.AccountHelper`
* **Method:** `OrderHistory(OrderHistoryRequest) → OrderHistoryReply`
* **Low-level client (generated):** `AccountHelperClient.orderHistory(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning the historical **orders** (and their **deals**) whose close time falls in `[from, to]`.
* **Why you need it.** Audit what was executed; reconcile orders with the deals that filled them.
* **Sanity check.** `getHistoryDataList()` has one entry per history record.

---

## 🎯 Purpose

* Build a trade journal / statement.
* Match an order to the deal(s) that executed it.
* Feed P/L and win-rate analytics.

---

## 📚 Tutorial

1. **Pick a window** — `from` / `to` as `Date` or epoch; the SDK converts to the protobuf `Timestamp` (server time).
2. **Call** `account.orderHistory(from, to, opts?)` — `opts` can set `sort`, `page`, `perPage`.
3. **Iterate** `getHistoryDataList()`; each `HistoryData` carries a `getHistoryOrder()` and a `getHistoryDeal()`.

```ts
const from = new Date(Date.now() - 7 * 864e5);
const data = await account.orderHistory(from, new Date());
for (const h of data.getHistoryDataList()) {
  const o = h.getHistoryOrder();
  if (o) console.log(o.getTicket(), o.getSymbol(), o.getState());
}
```

---

## 🧱 Signature

```ts
import { MT5Account } from '@metarpc/nodemt5';

class MT5Account {
  // Closed orders + deals in a window. from/to are Date or epoch (server time).
  orderHistory(
    from: Date | number,
    to: Date | number,
    opts?: { sort?: number; page?: number; perPage?: number },
    timeoutMs?: number,
  ): Promise<any /* OrdersHistoryData */>;
}
```

**Request message:** `OrderHistoryRequest` — `setInputfrom(Timestamp)`, `setInputto(Timestamp)`, `setInputsortmode(BMT5_ENUM_ORDER_HISTORY_SORT_TYPE)`, optional `setPagenumber` / `setItemsperpage` (all built from your arguments).

**Reply message:**

```protobuf
OrderHistoryReply {
  oneof response {
    OrdersHistoryData data = 1;
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `from` / `to` | `Date \| number` | Window bounds (server time). |
| `opts.sort` | `number` | `BMT5_ENUM_ORDER_HISTORY_SORT_TYPE` (default `BMT5_SORT_BY_CLOSE_TIME_DESC`). |
| `opts.page` / `opts.perPage` | `number` | Paging. |

---

## ⬆️ Output — `OrdersHistoryData`

| Field | JS accessor | Description |
| ----- | ----------- | ----------- |
| records | `getHistoryDataList()` | Array of `HistoryData`. |
| total | `getArraytotal()` | Total records in the range. |
| page | `getPagenumber()` / `getItemsperpage()` | Paging info. |
| next page | `getNextPageToken()` | Continuation token. |

Each **`HistoryData`**: `getIndex()`, `getHistoryOrder()` → `HistoryOrderInfo`, `getHistoryDeal()` → `DealHistoryData`.

**`HistoryOrderInfo`** (key getters): `getTicket()`, `getSymbol()`, `getType()`, `getState()`, `getTimeSetup()`, `getTimeDone()`, `getPriceOpen()`, `getSl()`, `getTp()`, `getVolumeInitial()`, `getVolumeCurrent()`, `getMagic()`, `getPositionId()`, `getComment()`.

**`DealHistoryData`** (key getters): `getTicket()`, `getOrder()`, `getSymbol()`, `getType()`, `getEntryType()`, `getPrice()`, `getVolume()`, `getProfit()`, `getCommission()`, `getFee()`, `getSwap()`, `getTime()`, `getPositionId()`, `getMagic()`.

---

## 🧩 Notes & Tips

* **Window is server time.** Build bounds with `AccountInfo.utcServerShiftMinutes` when you need exact alignment.
* **Orders vs deals.** An order is the instruction; deals are the fills. One order may have several deals.
* **Friendly form.** [`MT5Service.getOrderHistory`](../../MT5Service/3.%20Position_Orders_Methods.md) returns `{ orders, deals }` already mapped.

---

## 🔗 Usage Examples

### 1) Last 7 days of orders

```ts
const from = new Date(Date.now() - 7 * 864e5);
const data = await account.orderHistory(from, new Date());
console.log('records:', data.getHistoryDataList().length);
```

### 2) Orders only

```ts
const data = await account.orderHistory(from, new Date());
for (const h of data.getHistoryDataList()) {
  const o = h.getHistoryOrder();
  if (o) console.log(o.getTicket(), o.getSymbol(), o.getVolumeInitial());
}
```

### 3) Deals only (realised figures)

```ts
const data = await account.orderHistory(from, new Date());
let realised = 0;
for (const h of data.getHistoryDataList()) {
  const d = h.getHistoryDeal();
  if (d) realised += d.getProfit() + d.getSwap() + d.getCommission() + d.getFee();
}
console.log('realised P/L:', realised.toFixed(2));
```

### 4) Custom sort

```ts
import { AccountHelperPb } from '@metarpc/nodemt5';
const data = await account.orderHistory(from, new Date(), {
  sort: AccountHelperPb.BMT5_ENUM_ORDER_HISTORY_SORT_TYPE.BMT5_SORT_BY_CLOSE_TIME_ASC,
});
```

### 5) Paging through a large range

```ts
let page = 1;
for (;;) {
  const data = await account.orderHistory(from, new Date(), { page, perPage: 100 });
  const rows = data.getHistoryDataList();
  if (rows.length === 0) break;
  console.log(`page ${page}: ${rows.length} records`);
  page++;
}
```

---

## 🔧 Common Patterns

### Realised P/L over a window

```ts
async function realisedPnl(account: MT5Account, from: Date, to: Date): Promise<number> {
  const data = await account.orderHistory(from, to);
  let pnl = 0;
  for (const h of data.getHistoryDataList()) {
    const d = h.getHistoryDeal();
    if (d) pnl += d.getProfit() + d.getSwap() + d.getCommission() + d.getFee();
  }
  return pnl;
}
```

---

## 📚 See Also

* [PositionsHistory](./PositionsHistory.md) — closed positions (not raw orders/deals).
* **Friendly layer:** [`MT5Service.getOrderHistory`](../../MT5Service/3.%20Position_Orders_Methods.md) · [`MT5Sugar.getDealsToday / getDailyStats`](../../MT5Sugar/8.%20History_Statistics.md).

# MT5Account · Market Depth (DOM) — Overview

> Level-II quotes — the order book. Subscribe to a symbol's Depth of Market, read the current snapshot, then release the subscription. All on `mt5_term_api.MarketInfo`.

## 📁 What lives here

* **[MarketBookAdd](./MarketBookAdd.md)** — subscribe to DOM updates for a symbol.
* **[MarketBookGet](./MarketBookGet.md)** — current market-depth snapshot (book rows).
* **[MarketBookRelease](./MarketBookRelease.md)** — unsubscribe.

---

## 🧭 Plain English

Call **add → get (repeatedly) → release**. `add` opens the book on the gateway; `get` returns the current rows (bids/asks with volume); `release` closes it.

> **⚠️ DOM availability.** Depth of Market is typically **not** available for forex pairs on demo accounts; it's meaningful for exchange-traded instruments. `marketBookAdd` may report the book did not open.

---

## Quick choose

| If you need…               | Use                  | Returns |
| -------------------------- | -------------------- | ------- |
| Subscribe to the order book| `marketBookAdd`      | `MarketBookAddData` (`getOpenedSuccessfully()`) |
| Read the book snapshot     | `marketBookGet`      | `MarketBookGetData` (`getMqlBookInfosList()`) |
| Unsubscribe                | `marketBookRelease`  | `MarketBookReleaseData` (`getClosedSuccessfully()`) |

---

## ❌ Cross-refs & gotchas

* **Subscribe first.** `marketBookGet` returns rows only after a successful `marketBookAdd`.
* **Not every broker/symbol has DOM.** Forex on a demo usually has none — `marketBookAdd` may report `getOpenedSuccessfully() === false`.
* **Book rows.** Each `MrpcMqlBookInfo` has `getType()` (level type — MQL5 `ENUM_BOOK_TYPE`: `1` = sell, `2` = buy, `3`/`4` = sell/buy market), `getPrice()`, `getVolume()`, `getVolumeReal()`.
* **Symbol in Market Watch.** Add it with [`symbolSelect`](../2.%20Symbol_information/SymbolSelect.md) first.
* **Always release.** Call `marketBookRelease` when done to free the subscription.

---

## 🟢 Minimal snippets

```ts
// Subscribe to Market Depth
import { MarketInfoPb } from '@metarpc/nodemt5';

const addReq = new MarketInfoPb.MarketBookAddRequest();
addReq.setSymbol('EURUSD');
const added = await account.marketBookAdd(addReq);
console.log(added.getOpenedSuccessfully() ? '✅ Subscribed to EURUSD DOM' : '❌ DOM not available');
```

```ts
// Read the current order book, split by side
import { MarketInfoPb } from '@metarpc/nodemt5';

const getReq = new MarketInfoPb.MarketBookGetRequest();
getReq.setSymbol('EURUSD');
const rows = (await account.marketBookGet(getReq)).getMqlBookInfosList();

for (const r of rows) {
  const side = r.getType() === 2 ? 'BUY ' : 'SELL'; // 2 = buy, 1 = sell
  console.log(`${side} ${r.getPrice()}: ${r.getVolumeReal()} lots`);
}
```

```ts
// Order-book imbalance, then release
import { MarketInfoPb } from '@metarpc/nodemt5';

const getReq = new MarketInfoPb.MarketBookGetRequest();
getReq.setSymbol('EURUSD');
const rows = (await account.marketBookGet(getReq)).getMqlBookInfosList();

let buyVol = 0, sellVol = 0;
for (const r of rows) (r.getType() === 2 ? (buyVol += r.getVolumeReal()) : (sellVol += r.getVolumeReal()));
console.log(buyVol > sellVol ? '📈 Bullish pressure' : '📉 Bearish pressure');

const relReq = new MarketInfoPb.MarketBookReleaseRequest();
relReq.setSymbol('EURUSD');
await account.marketBookRelease(relReq);
```

---

## See also

* **Friendly layer:** [`MT5Service.subscribeMarketDepth` / `getMarketDepth` / `unsubscribeMarketDepth`](../../MT5Service/MT5Service.Overview.md).

---

**Back to:** [MT5Account — Master Overview](../MT5Account.Master.Overview.md)

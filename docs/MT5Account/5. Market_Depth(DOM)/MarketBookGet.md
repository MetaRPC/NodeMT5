# 📖 Reading the Order Book (MarketBookGet)

> **Request:** the current Depth-of-Market levels of a subscribed symbol (`MarketBookGetData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.marketBookGet(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.MarketInfo`
* **Proto definition:** `MarketBookGet` (in `mt5-term-api-market-info.proto`)

### RPC

* **Service:** `mt5_term_api.MarketInfo`
* **Method:** `MarketBookGet(MarketBookGetRequest) → MarketBookGetReply`
* **Low-level client (generated):** `MarketInfoClient.marketBookGet(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning the order-book levels (price + volume per level) for a symbol you've subscribed to.
* **Why you need it.** See resting buy/sell liquidity around the market.
* **Sanity check.** After [MarketBookAdd](./MarketBookAdd.md), `getMqlBookInfosList()` has entries (when the broker provides DOM).

---

## 🎯 Purpose

* Inspect bid/ask depth and sizes.
* Build a DOM ladder display or liquidity metric.

---

## 📚 Tutorial

1. **Subscribe first** with [MarketBookAdd](./MarketBookAdd.md).
2. **Build a `MarketBookGetRequest`** with the symbol.
3. **Call** `account.marketBookGet(req)` and iterate `getMqlBookInfosList()`.

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.MarketBookGetRequest();
req.setSymbol('EURUSD');
for (const lvl of (await account.marketBookGet(req)).getMqlBookInfosList()) {
  console.log(lvl.getType(), lvl.getPrice(), lvl.getVolume());
}
```

---

## 🧱 Signature

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

class MT5Account {
  // Read the order book. Pass a built MarketBookGetRequest (setSymbol).
  marketBookGet(req: any /* MarketBookGetRequest */, timeoutMs?: number): Promise<any /* MarketBookGetData */>;
}
```

**Request message:** `MarketBookGetRequest { string symbol = 1; }` — `setSymbol(string)`.

**Reply message:**

```protobuf
MarketBookGetReply {
  oneof response {
    MarketBookGetData data = 1;   // getMqlBookInfosList(): MrpcMqlBookInfo[]
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Setter | Type | Description |
| ------ | ---- | ----------- |
| `setSymbol(symbol)` | `string` | Subscribed instrument. |

---

## ⬆️ Output — `MarketBookGetData`

`getMqlBookInfosList()` → array of **`MrpcMqlBookInfo`**:

| Getter | Type | Description |
| ------ | ---- | ----------- |
| `getType()` | `number` | Level type — MQL5 `ENUM_BOOK_TYPE` (sell / buy / sell-market / buy-market). |
| `getPrice()` | `number` | Price of the level. |
| `getVolume()` | `number` | Volume (integer). |
| `getVolumeReal()` | `number` | Real volume. |

---

## 🧩 Notes & Tips

* **Subscribe first.** Without [MarketBookAdd](./MarketBookAdd.md) the list is empty.
* **Empty is valid.** A symbol without DOM returns `[]` even after a successful subscribe.
* **Poll, don't spin.** Add a delay between reads; there's no push here (use the streaming methods for events).
* **Friendly form.** [`MT5Service.getMarketDepth(symbol)`](../../MT5Service/5.%20MarketDepth_Methods.md) returns mapped `BookInfo[]`.

---

## 🔗 Usage Examples

### 1) List all levels

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.MarketBookGetRequest();
req.setSymbol('EURUSD');
const book = (await account.marketBookGet(req)).getMqlBookInfosList();
book.forEach((l) => console.log(l.getType(), l.getPrice(), l.getVolume()));
```

### 2) Total bid vs ask volume

```ts
const book = (await account.marketBookGet(req)).getMqlBookInfosList();
let buyVol = 0, sellVol = 0;
for (const l of book) {
  // even/odd type codes split buy vs sell depending on the broker's ENUM_BOOK_TYPE
  (l.getType() % 2 === 0 ? (sellVol += l.getVolume()) : (buyVol += l.getVolume()));
}
console.log({ buyVol, sellVol });
```

### 3) Best bid / ask from the book

```ts
const book = (await account.marketBookGet(req)).getMqlBookInfosList();
const prices = book.map((l) => l.getPrice()).filter((p) => p > 0);
console.log('tightest levels:', Math.min(...prices), Math.max(...prices));
```

---

## 🔧 Common Patterns

### Read with auto subscribe/release

```ts
async function readBook(account: MT5Account, symbol: string): Promise<any[]> {
  const add = new MarketInfoPb.MarketBookAddRequest(); add.setSymbol(symbol);
  await account.marketBookAdd(add);
  try {
    const get = new MarketInfoPb.MarketBookGetRequest(); get.setSymbol(symbol);
    return (await account.marketBookGet(get)).getMqlBookInfosList();
  } finally {
    const rel = new MarketInfoPb.MarketBookReleaseRequest(); rel.setSymbol(symbol);
    await account.marketBookRelease(rel);
  }
}
```

---

## 📚 See Also

* [MarketBookAdd](./MarketBookAdd.md) — subscribe first. · [MarketBookRelease](./MarketBookRelease.md)
* **Friendly layer:** [`MT5Service.getMarketDepth`](../../MT5Service/5.%20MarketDepth_Methods.md) → `BookInfo[]`.

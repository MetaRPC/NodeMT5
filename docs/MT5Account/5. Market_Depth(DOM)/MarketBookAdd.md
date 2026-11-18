# 📖 Subscribing to Market Depth (MarketBookAdd)

> **Request:** subscribe to the order book (Depth of Market) of a symbol (`MarketBookAddData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.marketBookAdd(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.MarketInfo`
* **Proto definition:** `MarketBookAdd` (in `mt5-term-api-market-info.proto`)

### RPC

* **Service:** `mt5_term_api.MarketInfo`
* **Method:** `MarketBookAdd(MarketBookAddRequest) → MarketBookAddReply`
* **Low-level client (generated):** `MarketInfoClient.marketBookAdd(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC that opens a Depth-of-Market subscription for a symbol so [MarketBookGet](./MarketBookGet.md) can return levels.
* **Why you need it.** You must subscribe **before** reading the book.
* **Sanity check.** `getOpenedSuccessfully()` is `true`.

---

## 🎯 Purpose

* Begin watching the order book of a symbol that provides DOM.
* First step of the **subscribe → read → release** lifecycle.

---

## 📚 Tutorial

1. **Build a `MarketBookAddRequest`** with the symbol.
2. **Call** `account.marketBookAdd(req)` and check `getOpenedSuccessfully()`.
3. Then poll [MarketBookGet](./MarketBookGet.md); [MarketBookRelease](./MarketBookRelease.md) when done.

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.MarketBookAddRequest();
req.setSymbol('EURUSD');
const ok = (await account.marketBookAdd(req)).getOpenedSuccessfully();
```

---

## 🧱 Signature

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

class MT5Account {
  // Subscribe to DOM for a symbol. Pass a built MarketBookAddRequest (setSymbol).
  marketBookAdd(req: any /* MarketBookAddRequest */, timeoutMs?: number): Promise<any /* MarketBookAddData */>;
}
```

**Request message:** `MarketBookAddRequest { string symbol = 1; }` — `setSymbol(string)`.

**Reply message:**

```protobuf
MarketBookAddReply {
  oneof response {
    MarketBookAddData data = 1;   // getOpenedSuccessfully(): bool
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Setter | Type | Description |
| ------ | ---- | ----------- |
| `setSymbol(symbol)` | `string` | Instrument to subscribe to. |

---

## ⬆️ Output — `MarketBookAddData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| opened | `getOpenedSuccessfully()` | `boolean` | `true` if the subscription opened. |

---

## 🧩 Notes & Tips

* **Not every symbol has DOM.** Even on a successful subscribe, [MarketBookGet](./MarketBookGet.md) may return an empty book.
* **Always release.** Pair every `marketBookAdd` with a [MarketBookRelease](./MarketBookRelease.md) to free the subscription.
* **Friendly form.** [`MT5Service.subscribeMarketDepth(symbol)`](../../MT5Service/5.%20MarketDepth_Methods.md) returns the boolean directly.

---

## 🔗 Usage Examples

### 1) Subscribe

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.MarketBookAddRequest();
req.setSymbol('EURUSD');
console.log('subscribed?', (await account.marketBookAdd(req)).getOpenedSuccessfully());
```

### 2) Subscribe, read, release

```ts
const add = new MarketInfoPb.MarketBookAddRequest(); add.setSymbol('EURUSD');
await account.marketBookAdd(add);

const get = new MarketInfoPb.MarketBookGetRequest(); get.setSymbol('EURUSD');
const book = (await account.marketBookGet(get)).getMqlBookInfosList();
console.log('levels:', book.length);

const rel = new MarketInfoPb.MarketBookReleaseRequest(); rel.setSymbol('EURUSD');
await account.marketBookRelease(rel);
```

### 3) Guard on the result

```ts
const req = new MarketInfoPb.MarketBookAddRequest(); req.setSymbol('EURUSD');
if (!(await account.marketBookAdd(req)).getOpenedSuccessfully()) {
  console.warn('DOM not available for EURUSD');
}
```

---

## 🔧 Common Patterns

### Subscribe helper

```ts
async function subscribeDepth(account: MT5Account, symbol: string): Promise<boolean> {
  const req = new MarketInfoPb.MarketBookAddRequest();
  req.setSymbol(symbol);
  return (await account.marketBookAdd(req)).getOpenedSuccessfully();
}
```

---

## 📚 See Also

* [MarketBookGet](./MarketBookGet.md) — read the levels. · [MarketBookRelease](./MarketBookRelease.md) — unsubscribe.
* **Friendly layer:** [`MT5Service.subscribeMarketDepth`](../../MT5Service/5.%20MarketDepth_Methods.md).

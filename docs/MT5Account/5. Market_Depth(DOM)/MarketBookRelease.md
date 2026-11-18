# 📕 Unsubscribing from Market Depth (MarketBookRelease)

> **Request:** close a Depth-of-Market subscription for a symbol (`MarketBookReleaseData`), on **MT5**.

**API Information:**

* **Low-level API:** `MT5Account.marketBookRelease(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.MarketInfo`
* **Proto definition:** `MarketBookRelease` (in `mt5-term-api-market-info.proto`)

### RPC

* **Service:** `mt5_term_api.MarketInfo`
* **Method:** `MarketBookRelease(MarketBookReleaseRequest) → MarketBookReleaseReply`
* **Low-level client (generated):** `MarketInfoClient.marketBookRelease(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC that ends a DOM subscription opened by [MarketBookAdd](./MarketBookAdd.md).
* **Why you need it.** Free the subscription when you're done watching the book.
* **Sanity check.** `getClosedSuccessfully()` is `true`.

---

## 🎯 Purpose

* The final step of the **subscribe → read → release** lifecycle.
* Avoid leaking server-side DOM subscriptions.

---

## 📚 Tutorial

1. **Build a `MarketBookReleaseRequest`** with the symbol.
2. **Call** `account.marketBookRelease(req)` and check `getClosedSuccessfully()`.

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.MarketBookReleaseRequest();
req.setSymbol('EURUSD');
const ok = (await account.marketBookRelease(req)).getClosedSuccessfully();
```

---

## 🧱 Signature

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

class MT5Account {
  // Unsubscribe from DOM for a symbol. Pass a built MarketBookReleaseRequest (setSymbol).
  marketBookRelease(req: any /* MarketBookReleaseRequest */, timeoutMs?: number): Promise<any /* MarketBookReleaseData */>;
}
```

**Request message:** `MarketBookReleaseRequest { string symbol = 1; }` — `setSymbol(string)`.

**Reply message:**

```protobuf
MarketBookReleaseReply {
  oneof response {
    MarketBookReleaseData data = 1;   // getClosedSuccessfully(): bool
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Setter | Type | Description |
| ------ | ---- | ----------- |
| `setSymbol(symbol)` | `string` | Subscribed instrument to release. |

---

## ⬆️ Output — `MarketBookReleaseData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| closed | `getClosedSuccessfully()` | `boolean` | `true` if the subscription closed. |

---

## 🧩 Notes & Tips

* **Always pair with [MarketBookAdd](./MarketBookAdd.md).** Release every symbol you subscribed to.
* **Idempotent-ish.** Releasing a symbol you didn't subscribe to simply reports failure — handle the boolean.
* **Friendly form.** [`MT5Service.unsubscribeMarketDepth(symbol)`](../../MT5Service/5.%20MarketDepth_Methods.md) returns the boolean directly.

---

## 🔗 Usage Examples

### 1) Release

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.MarketBookReleaseRequest();
req.setSymbol('EURUSD');
console.log('released?', (await account.marketBookRelease(req)).getClosedSuccessfully());
```

### 2) Release a basket

```ts
for (const sym of ['EURUSD', 'GBPUSD', 'XAUUSD']) {
  const req = new MarketInfoPb.MarketBookReleaseRequest(); req.setSymbol(sym);
  await account.marketBookRelease(req);
}
```

### 3) Guaranteed cleanup with `finally`

```ts
const add = new MarketInfoPb.MarketBookAddRequest(); add.setSymbol('EURUSD');
await account.marketBookAdd(add);
try {
  // … read the book …
} finally {
  const rel = new MarketInfoPb.MarketBookReleaseRequest(); rel.setSymbol('EURUSD');
  await account.marketBookRelease(rel);
}
```

---

## 🔧 Common Patterns

### Release helper

```ts
async function releaseDepth(account: MT5Account, symbol: string): Promise<boolean> {
  const req = new MarketInfoPb.MarketBookReleaseRequest();
  req.setSymbol(symbol);
  return (await account.marketBookRelease(req)).getClosedSuccessfully();
}
```

---

## 📚 See Also

* [MarketBookAdd](./MarketBookAdd.md) — subscribe. · [MarketBookGet](./MarketBookGet.md) — read.
* **Friendly layer:** [`MT5Service.unsubscribeMarketDepth`](../../MT5Service/5.%20MarketDepth_Methods.md).

# 🔤 Getting Account String Properties

> **Request:** one text account property (`AccountInfoStringData` → a `string`) from **MT5** — holder name, trade server, deposit currency, or broker name, selected by an enum.

**API Information:**

* **Low-level API:** `MT5Account.accountInfoString(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.AccountInformation`
* **Proto definition:** `AccountInfoString` (in `mt5-term-api-account-information.proto`)

### RPC

* **Service:** `mt5_term_api.AccountInformation`
* **Method:** `AccountInfoString(AccountInfoStringRequest) → AccountInfoStringReply`
* **Low-level client (generated):** `AccountInformationClient.accountInfoString(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC that returns a single text account property, chosen by an `AccountInfoStringPropertyType` value.
* **Why you need it.** Read the **deposit currency** to format money, or the **server** / **broker** / **holder name** for a header.
* **Sanity check.** `ACCOUNT_CURRENCY` returns a 3-letter code like `"USD"`.

---

## 🎯 Purpose

Use it for the account's textual identity:

* **Currency** — to label and format every money figure.
* **Server** — which trade server you're connected to (e.g. `MetaQuotes-Demo`).
* **Name / Company** — for dashboards and reports.

---

## 📚 Tutorial

1. **Connect** so the SDK has a terminal session.
2. **Pick the property** from `AccountInfoStringPropertyType`, e.g. `ACCOUNT_CURRENCY`.
3. **Call** `account.accountInfoString(propertyId)` — it builds the request, sends it, and unwraps `getRequestedValue()`.
4. **Use the string** — e.g. append the currency to your balance readouts.

```ts
import { MT5Account, AccountInformationPb } from '@metarpc/nodemt5';
const P = AccountInformationPb.AccountInfoStringPropertyType;

const currency = await account.accountInfoString(P.ACCOUNT_CURRENCY);   // "USD"
```

---

## 🧱 Signature

```ts
import { MT5Account, AccountInformationPb } from '@metarpc/nodemt5';

class MT5Account {
  // Read one ACCOUNT_* string property. Pass an AccountInfoStringPropertyType value.
  // Returns getRequestedValue() directly.
  accountInfoString(propertyId: number, timeoutMs?: number): Promise<string>;
}
```

**Request message:**

```protobuf
AccountInfoStringRequest { AccountInfoStringPropertyType property_id = 1; }
```

**Reply message:**

```protobuf
AccountInfoStringReply {
  oneof response {
    AccountInfoStringData data = 1;   // getRequestedValue(): string
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `propertyId` | `number` (`AccountInfoStringPropertyType`) | Which string property to read. |
| `timeoutMs` | `number?` | Optional per-call deadline (default 15 s). |

---

## ⬆️ Output — `AccountInfoStringData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| requested value | `getRequestedValue()` | `string` | The property's value. Returned directly. |

---

## 🧱 Related enums (from proto)

> Access as `AccountInformationPb.AccountInfoStringPropertyType.ACCOUNT_CURRENCY` (a `number`).

### `AccountInfoStringPropertyType`

| Constant | Meaning |
| -------- | ------- |
| `ACCOUNT_NAME` | Account holder's name. |
| `ACCOUNT_SERVER` | Trade server (e.g. `MetaQuotes-Demo`). |
| `ACCOUNT_CURRENCY` | Deposit currency (`USD`, `EUR`, …). |
| `ACCOUNT_COMPANY` | Broker / company name. |

---

## 🧩 Notes & Tips

* **Currency drives formatting.** Read `ACCOUNT_CURRENCY` once and reuse it to label balance, equity and P/L.
* **For everything at once**, [AccountSummary](./AccountSummary.md) already returns name, server, company and currency.
* **Errors are exceptions** — a failure rejects with an [`MrpcError`](../../All_Guides/RETURN_CODES_REFERENCE.md).

---

## 🔗 Usage Examples

### 1) Deposit currency

```ts
import { MT5Account, AccountInformationPb } from '@metarpc/nodemt5';
const P = AccountInformationPb.AccountInfoStringPropertyType;

const currency = await account.accountInfoString(P.ACCOUNT_CURRENCY);
console.log('currency:', currency);
```

### 2) Trade server

```ts
const server = await account.accountInfoString(P.ACCOUNT_SERVER);
console.log('connected to', server);
```

### 3) Account holder & broker

```ts
const [name, company] = await Promise.all([
  account.accountInfoString(P.ACCOUNT_NAME),
  account.accountInfoString(P.ACCOUNT_COMPANY),
]);
console.log(`${name} @ ${company}`);
```

### 4) Build a header line

```ts
const P = AccountInformationPb.AccountInfoStringPropertyType;
const [name, server, currency] = await Promise.all([
  account.accountInfoString(P.ACCOUNT_NAME),
  account.accountInfoString(P.ACCOUNT_SERVER),
  account.accountInfoString(P.ACCOUNT_CURRENCY),
]);
console.log(`${name} · ${server} · ${currency}`);
```

### 5) Format money with the right currency

```ts
const P = AccountInformationPb.AccountInfoStringPropertyType;
const D = AccountInformationPb.AccountInfoDoublePropertyType;
const [currency, balance] = await Promise.all([
  account.accountInfoString(P.ACCOUNT_CURRENCY),
  account.accountInfoDouble(D.ACCOUNT_BALANCE),
]);
console.log(`${balance.toFixed(2)} ${currency}`);
```

### 6) Verify you're on the expected server

```ts
const server = await account.accountInfoString(P.ACCOUNT_SERVER);
if (server !== 'MetaQuotes-Demo') console.warn('unexpected server:', server);
```

---

## 🔧 Common Patterns

### Cache the currency once

```ts
let cachedCurrency: string | null = null;
async function currency(account: MT5Account): Promise<string> {
  if (cachedCurrency) return cachedCurrency;
  const P = AccountInformationPb.AccountInfoStringPropertyType;
  cachedCurrency = await account.accountInfoString(P.ACCOUNT_CURRENCY);
  return cachedCurrency;
}
```

### One-line account header

```ts
async function header(account: MT5Account): Promise<string> {
  const P = AccountInformationPb.AccountInfoStringPropertyType;
  const [name, server, currency] = await Promise.all([
    account.accountInfoString(P.ACCOUNT_NAME),
    account.accountInfoString(P.ACCOUNT_SERVER),
    account.accountInfoString(P.ACCOUNT_CURRENCY),
  ]);
  return `${name} · ${server} · ${currency}`;
}
```

---

## 📚 See Also

* [AccountSummary](./AccountSummary.md) — name, server, company and currency in one call.
* [AccountInfoDouble](./AccountInfoDouble.md) · [AccountInfoInteger](./AccountInfoInteger.md)
* **Friendly layer:** [`MT5Service.getAccountString`](../../MT5Service/1.%20Account_Methods.md).

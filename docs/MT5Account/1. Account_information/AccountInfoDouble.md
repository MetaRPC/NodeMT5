# 📊 Getting Account Double Properties

> **Request:** one floating-point account property (`AccountInfoDoubleData` → a `number`) from **MT5** — balance, equity, profit, margin figures, and more, selected by an enum.

**API Information:**

* **Low-level API:** `MT5Account.accountInfoDouble(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.AccountInformation`
* **Proto definition:** `AccountInfoDouble` (in `mt5-term-api-account-information.proto`)

### RPC

* **Service:** `mt5_term_api.AccountInformation`
* **Method:** `AccountInfoDouble(AccountInfoDoubleRequest) → AccountInfoDoubleReply`
* **Low-level client (generated):** `AccountInformationClient.accountInfoDouble(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC that returns a single `double` account property, chosen by an `AccountInfoDoublePropertyType` value.
* **Why you need it.** Read exactly the number you care about (e.g. `ACCOUNT_EQUITY`) without pulling the whole [AccountSummary](./AccountSummary.md).
* **Sanity check.** `ACCOUNT_BALANCE` returns a positive number on a funded account.

---

## 🎯 Purpose

Use it when you want one precise figure, cheaply:

* A live **equity** or **free-margin** readout for a dashboard.
* A **margin-level** gate right before placing a trade.
* Polling a single metric on a timer without the overhead of the full summary.

---

## 📚 Tutorial

A typical call, step by step:

1. **Connect** so the SDK has a terminal session (`sugar.quickConnect(...)` or `account.connect(...)`).
2. **Pick the property** from the `AccountInfoDoublePropertyType` enum, e.g. `ACCOUNT_EQUITY`.
3. **Call** `account.accountInfoDouble(propertyId)` — it builds the protobuf request, sends it, and **unwraps** the reply's `getRequestedValue()` for you.
4. **Use the number** — it's a plain `number`, already in the account's deposit currency.

```ts
import { MT5Account, AccountInformationPb } from '@metarpc/nodemt5';
const P = AccountInformationPb.AccountInfoDoublePropertyType;

const equity = await account.accountInfoDouble(P.ACCOUNT_EQUITY);
```

---

## 🧱 Signature

```ts
import { MT5Account, AccountInformationPb } from '@metarpc/nodemt5';

class MT5Account {
  // Read one ACCOUNT_* double property. Pass an AccountInfoDoublePropertyType value.
  // Returns the value already unwrapped from AccountInfoDoubleData.getRequestedValue().
  accountInfoDouble(propertyId: number, timeoutMs?: number): Promise<number>;
}
```

**Request message:**

```protobuf
AccountInfoDoubleRequest { AccountInfoDoublePropertyType property_id = 1; }
```

**Reply message:**

```protobuf
AccountInfoDoubleReply {
  oneof response {
    AccountInfoDoubleData data = 1;   // getRequestedValue(): double
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `propertyId` | `number` (`AccountInfoDoublePropertyType`) | Which double property to read. |
| `timeoutMs` | `number?` | Optional per-call deadline (defaults to the SDK's 15 s). |

> The low-level method takes the enum **value** directly — there's no request object to build by hand. For plain arguments at the mid layer, see [`MT5Service.getAccountDouble`](../../MT5Service/1.%20Account_Methods.md).

---

## ⬆️ Output — `AccountInfoDoubleData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| requested value | `getRequestedValue()` | `number` | The property's value. The SDK returns this directly. |

---

## 🧱 Related enums (from proto)

> **💡 Enum usage.** In Node these are namespace objects — access a value as `AccountInformationPb.AccountInfoDoublePropertyType.ACCOUNT_EQUITY` (a `number`).

### `AccountInfoDoublePropertyType`

| Constant | Meaning |
| -------- | ------- |
| `ACCOUNT_BALANCE` | Balance (excludes floating P/L). |
| `ACCOUNT_CREDIT` | Credit. |
| `ACCOUNT_PROFIT` | Current floating profit of all open positions. |
| `ACCOUNT_EQUITY` | Equity = balance + floating P/L. |
| `ACCOUNT_MARGIN` | Margin used by open positions. |
| `ACCOUNT_MARGIN_FREE` | Free margin for new positions. |
| `ACCOUNT_MARGIN_LEVEL` | Margin level, percent (`equity / margin × 100`). |
| `ACCOUNT_MARGIN_SO_CALL` | Margin call level. |
| `ACCOUNT_MARGIN_SO_SO` | Stop-out level. |
| `ACCOUNT_MARGIN_INITIAL` | Reserved initial margin. |
| `ACCOUNT_MARGIN_MAINTENANCE` | Reserved maintenance margin. |
| `ACCOUNT_ASSETS` | Current assets. |
| `ACCOUNT_LIABILITIES` | Current liabilities. |
| `ACCOUNT_COMMISSION_BLOCKED` | Blocked commission. |

---

## 🧩 Notes & Tips

* **One value per call.** For many figures at once prefer [AccountSummary](./AccountSummary.md) — it returns them all in a single RPC.
* **Currency.** All these doubles are in the account's deposit currency (read via [AccountInfoString](./AccountInfoString.md) `ACCOUNT_CURRENCY`).
* **Margin level is `0` when flat.** With no open positions `ACCOUNT_MARGIN` is `0`, so `ACCOUNT_MARGIN_LEVEL` reads `0` — don't treat that as "danger".
* **Errors are exceptions.** A gateway/terminal failure rejects the promise with an [`MrpcError`](../../All_Guides/RETURN_CODES_REFERENCE.md).

---

## 🔗 Usage Examples

### 1) Get account balance

```ts
import { MT5Account, AccountInformationPb } from '@metarpc/nodemt5';
const P = AccountInformationPb.AccountInfoDoublePropertyType;

const balance = await account.accountInfoDouble(P.ACCOUNT_BALANCE);
console.log('balance:', balance.toFixed(2));
```

### 2) Get current equity

```ts
const equity = await account.accountInfoDouble(P.ACCOUNT_EQUITY);
console.log('equity:', equity.toFixed(2));
```

### 3) Check margin level before trading

```ts
const level = await account.accountInfoDouble(P.ACCOUNT_MARGIN_LEVEL);
if (level !== 0 && level < 200) {
  console.warn(`margin level ${level.toFixed(0)}% — too low to add risk`);
}
```

### 4) Free margin available

```ts
const free = await account.accountInfoDouble(P.ACCOUNT_MARGIN_FREE);
console.log('free margin:', free.toFixed(2));
```

### 5) Floating profit / loss

```ts
const profit = await account.accountInfoDouble(P.ACCOUNT_PROFIT);
console.log(profit >= 0 ? `in profit +${profit.toFixed(2)}` : `drawdown ${profit.toFixed(2)}`);
```

### 6) Read several properties at once

```ts
const P = AccountInformationPb.AccountInfoDoublePropertyType;
const [balance, equity, free, level] = await Promise.all([
  account.accountInfoDouble(P.ACCOUNT_BALANCE),
  account.accountInfoDouble(P.ACCOUNT_EQUITY),
  account.accountInfoDouble(P.ACCOUNT_MARGIN_FREE),
  account.accountInfoDouble(P.ACCOUNT_MARGIN_LEVEL),
]);
console.log({ balance, equity, free, level });
```

> Running them with `Promise.all` sends the calls concurrently — see [Concurrency Model](../../All_Guides/CONCURRENCY_MODEL.md).

---

## 🔧 Common Patterns

### Pre-trade funding check

```ts
async function canAfford(account: MT5Account, requiredMargin: number): Promise<boolean> {
  const P = AccountInformationPb.AccountInfoDoublePropertyType;
  const free = await account.accountInfoDouble(P.ACCOUNT_MARGIN_FREE);
  return free >= requiredMargin;
}
```

### Margin-level warning

```ts
async function marginWarning(account: MT5Account): Promise<string | null> {
  const P = AccountInformationPb.AccountInfoDoublePropertyType;
  const level = await account.accountInfoDouble(P.ACCOUNT_MARGIN_LEVEL);
  if (level === 0) return null;                 // flat
  if (level < 100) return `CRITICAL ${level.toFixed(0)}%`;
  if (level < 200) return `low ${level.toFixed(0)}%`;
  return null;
}
```

---

## 📚 See Also

* [AccountSummary](./AccountSummary.md) — all account figures in one call.
* [AccountInfoInteger](./AccountInfoInteger.md) · [AccountInfoString](./AccountInfoString.md)
* **Friendly layer:** [`MT5Service.getAccountDouble`](../../MT5Service/1.%20Account_Methods.md) · [`MT5Sugar.getBalance / getEquity / getFreeMargin`](../../MT5Sugar/2.%20Balance_Margin.md).

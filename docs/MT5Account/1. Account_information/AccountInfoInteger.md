# 🔢 Getting Account Integer Properties

> **Request:** one integer account property (`AccountInfoIntegerData` → a `number`) from **MT5** — login, leverage, trade mode, and the trade/hedge flags, selected by an enum.

**API Information:**

* **Low-level API:** `MT5Account.accountInfoInteger(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.AccountInformation`
* **Proto definition:** `AccountInfoInteger` (in `mt5-term-api-account-information.proto`)

### RPC

* **Service:** `mt5_term_api.AccountInformation`
* **Method:** `AccountInfoInteger(AccountInfoIntegerRequest) → AccountInfoIntegerReply`
* **Low-level client (generated):** `AccountInformationClient.accountInfoInteger(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC that returns a single integer/flag account property, chosen by an `AccountInfoIntegerPropertyType` value.
* **Why you need it.** Read `ACCOUNT_LEVERAGE`, the trade mode, or a boolean flag like `ACCOUNT_TRADE_ALLOWED` without the full [AccountSummary](./AccountSummary.md).
* **Sanity check.** `ACCOUNT_LOGIN` returns your account number.

---

## 🎯 Purpose

Use it to read account identity, configuration and permission flags:

* The account **login** and **leverage**.
* Whether **trading / Expert Advisors** are allowed right now.
* The **margin mode** (netting vs hedging) and FIFO / hedge rules.

---

## 📚 Tutorial

1. **Connect** so the SDK has a terminal session.
2. **Pick the property** from `AccountInfoIntegerPropertyType`, e.g. `ACCOUNT_LEVERAGE`.
3. **Call** `account.accountInfoInteger(propertyId)` — it builds the request, sends it, and unwraps `getRequestedValue()` (coerced to a JS `number`).
4. **Interpret** booleans as `1 = true / 0 = false`, and enums (trade mode, margin mode) against their enum tables.

```ts
import { MT5Account, AccountInformationPb } from '@metarpc/nodemt5';
const P = AccountInformationPb.AccountInfoIntegerPropertyType;

const leverage = await account.accountInfoInteger(P.ACCOUNT_LEVERAGE);   // e.g. 100
const canTrade = (await account.accountInfoInteger(P.ACCOUNT_TRADE_ALLOWED)) === 1;
```

---

## 🧱 Signature

```ts
import { MT5Account, AccountInformationPb } from '@metarpc/nodemt5';

class MT5Account {
  // Read one ACCOUNT_* integer property. Pass an AccountInfoIntegerPropertyType value.
  // Returns getRequestedValue() coerced to a JS number.
  accountInfoInteger(propertyId: number, timeoutMs?: number): Promise<number>;
}
```

**Request message:**

```protobuf
AccountInfoIntegerRequest { AccountInfoIntegerPropertyType property_id = 1; }
```

**Reply message:**

```protobuf
AccountInfoIntegerReply {
  oneof response {
    AccountInfoIntegerData data = 1;   // getRequestedValue(): int64
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `propertyId` | `number` (`AccountInfoIntegerPropertyType`) | Which integer property to read. |
| `timeoutMs` | `number?` | Optional per-call deadline (default 15 s). |

---

## ⬆️ Output — `AccountInfoIntegerData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| requested value | `getRequestedValue()` | `number` | The property's value. Returned directly, coerced to `number`. |

> The proto type is `int64`; the SDK coerces it with `Number(...)`. `ACCOUNT_LOGIN` fits safely in a JS number.

---

## 🧱 Related enums (from proto)

> Access as `AccountInformationPb.AccountInfoIntegerPropertyType.ACCOUNT_LEVERAGE` (a `number`).

### `AccountInfoIntegerPropertyType`

| Constant | Meaning |
| -------- | ------- |
| `ACCOUNT_LOGIN` | Account number (ID). |
| `ACCOUNT_TRADE_MODE` | `0 = DEMO`, `1 = CONTEST`, `2 = REAL` (see [AccountSummary](./AccountSummary.md)). |
| `ACCOUNT_LEVERAGE` | Leverage, e.g. `100` for 1:100. |
| `ACCOUNT_LIMIT_ORDERS` | Max allowed pending orders. |
| `ACCOUNT_MARGIN_SO_MODE` | Stop-out mode (percent vs money). |
| `ACCOUNT_TRADE_ALLOWED` | `1` if trading is allowed for the account. |
| `ACCOUNT_TRADE_EXPERT` | `1` if automated (EA) trading is allowed. |
| `ACCOUNT_MARGIN_MODE` | `0 = RETAIL_NETTING`, `1 = EXCHANGE`, `2 = RETAIL_HEDGING`. |
| `ACCOUNT_CURRENCY_DIGITS` | Decimal places of the deposit currency. |
| `ACCOUNT_FIFO_CLOSE` | `1` if positions must be closed FIFO. |
| `ACCOUNT_HEDGE_ALLOWED` | `1` if opposite positions per symbol are allowed. |

---

## 🧩 Notes & Tips

* **Booleans are `0`/`1`.** Compare `=== 1` for the `*_ALLOWED` / `*_CLOSE` flags.
* **Enums come back as numbers.** Map `ACCOUNT_TRADE_MODE` / `ACCOUNT_MARGIN_MODE` against their tables (or use [AccountSummary](./AccountSummary.md) which maps trade mode to a string).
* **For everything at once**, [AccountSummary](./AccountSummary.md) already carries login, leverage, trade mode, margin mode and the flags.

---

## 🔗 Usage Examples

### 1) Account login & leverage

```ts
import { MT5Account, AccountInformationPb } from '@metarpc/nodemt5';
const P = AccountInformationPb.AccountInfoIntegerPropertyType;

const login = await account.accountInfoInteger(P.ACCOUNT_LOGIN);
const leverage = await account.accountInfoInteger(P.ACCOUNT_LEVERAGE);
console.log(`#${login}  leverage 1:${leverage}`);
```

### 2) Is trading allowed right now?

```ts
const allowed = (await account.accountInfoInteger(P.ACCOUNT_TRADE_ALLOWED)) === 1;
const expert  = (await account.accountInfoInteger(P.ACCOUNT_TRADE_EXPERT))  === 1;
if (!allowed) console.warn('account trading disabled');
if (!expert)  console.warn('automated trading disabled');
```

### 3) Hedging or netting?

```ts
const mode = await account.accountInfoInteger(P.ACCOUNT_MARGIN_MODE);
console.log(mode === 2 ? 'HEDGING (multiple positions/symbol)' : mode === 0 ? 'NETTING' : 'EXCHANGE');
```

### 4) Pending-order budget

```ts
const limit = await account.accountInfoInteger(P.ACCOUNT_LIMIT_ORDERS);
console.log('max pending orders:', limit || 'unlimited');
```

### 5) FIFO rule check

```ts
const fifo = (await account.accountInfoInteger(P.ACCOUNT_FIFO_CLOSE)) === 1;
if (fifo) console.log('positions must be closed in FIFO order');
```

### 6) Read a batch concurrently

```ts
const P = AccountInformationPb.AccountInfoIntegerPropertyType;
const [login, leverage, tradeMode, marginMode] = await Promise.all([
  account.accountInfoInteger(P.ACCOUNT_LOGIN),
  account.accountInfoInteger(P.ACCOUNT_LEVERAGE),
  account.accountInfoInteger(P.ACCOUNT_TRADE_MODE),
  account.accountInfoInteger(P.ACCOUNT_MARGIN_MODE),
]);
console.log({ login, leverage, tradeMode, marginMode });
```

---

## 🔧 Common Patterns

### Trading-enabled guard

```ts
async function tradingEnabled(account: MT5Account): Promise<boolean> {
  const P = AccountInformationPb.AccountInfoIntegerPropertyType;
  const [acc, ea] = await Promise.all([
    account.accountInfoInteger(P.ACCOUNT_TRADE_ALLOWED),
    account.accountInfoInteger(P.ACCOUNT_TRADE_EXPERT),
  ]);
  return acc === 1 && ea === 1;
}
```

### Describe the account configuration

```ts
async function describeConfig(account: MT5Account): Promise<string> {
  const P = AccountInformationPb.AccountInfoIntegerPropertyType;
  const [lev, mm] = await Promise.all([
    account.accountInfoInteger(P.ACCOUNT_LEVERAGE),
    account.accountInfoInteger(P.ACCOUNT_MARGIN_MODE),
  ]);
  const margin = mm === 2 ? 'hedging' : mm === 0 ? 'netting' : 'exchange';
  return `1:${lev}, ${margin}`;
}
```

---

## 📚 See Also

* [AccountSummary](./AccountSummary.md) — login, leverage, modes and flags in one call.
* [AccountInfoDouble](./AccountInfoDouble.md) · [AccountInfoString](./AccountInfoString.md)
* **Friendly layer:** [`MT5Service.getAccountInteger`](../../MT5Service/1.%20Account_Methods.md).

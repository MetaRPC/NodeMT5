# ✅ Getting an Account Summary

> **Request:** full account summary (`AccountSummaryData`) from **MT5**. Fetch all core account metrics in a single call.

**API Information:**

* **Low-level API:** `MT5Account.accountSummary(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.AccountHelper`
* **Proto definition:** `AccountSummary` (defined in `mt5-term-api-account-helper.proto`)

### RPC

* **Service:** `mt5_term_api.AccountHelper`
* **Method:** `AccountSummary(AccountSummaryRequest) → AccountSummaryReply`
* **Low-level client (generated):** `AccountHelperClient.accountSummary(request, metadata, opts, cb)`

---

## 💬 Just the essentials

* **What it is.** A single RPC returning full account state: balance, equity, credit, currency, leverage, trade mode, margin / free margin / margin level / margin mode, and server time.
* **Why you need it.** Fast dashboard / CLI status; double-check login / currency / leverage; connection heartbeat via `getServerTime()`.
* **Sanity check.** If `getAccountLogin()`, `getAccountCurrency()`, `getAccountLeverage()`, `getAccountEquity()` are set → the connection is alive.

---

## 🎯 Purpose

Use it to display real-time account state and sanity-check connectivity:

* Dashboard / CLI status in one call.
* Verify balance & equity before trading.
* Terminal heartbeat via `getServerTime()` / `getServerTimeUtc()` and `getServerUtcOffsetSeconds()`.

> **Prefer plain values?** [`MT5Service.getAccountSummary()`](../../MT5Service/MT5Service.Overview.md) returns a friendly `AccountInfo` object (named fields, times as numbers) instead of protobuf.

---

## 🧱 Signature

```ts
import { MT5Account, AccountHelperPb } from '@metarpc/nodemt5';

class MT5Account {
  // Retrieves full account information in a single call.
  // Returns the raw AccountSummaryData (read fields with getXxx()); throws MrpcError on failure.
  accountSummary(req?: any /* AccountSummaryRequest */): Promise<any /* AccountSummaryData */>;
}
```

**Request message:**

`AccountSummaryRequest {}` *(empty message — the argument is optional and defaults to an empty request)*

**Reply message:**

```protobuf
AccountSummaryReply {
  oneof response {
    AccountSummaryData data = 1;
    Error error = 2;
  }
}
```

`MT5Account` unwraps the `oneof`: it resolves with `data` on success and **rejects** with `MrpcError` (carrying the server-side `Error`) otherwise.

---

## 🔽 Input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `req` | `AccountSummaryRequest` *(optional)* | Empty request message. Omit it to use `new AccountHelperPb.AccountSummaryRequest()`. |

**There is no `ctx`/timeout parameter.** Each call runs on a per-call deadline from the client (`callTimeoutMs`, default `30000` ms). Tune it on the account:

```ts
account.callTimeoutMs = 5000;   // deadline for ordinary read RPCs
```

---

## ⬆️ Output — `AccountSummaryData`

| Field (proto) | JS accessor | Type | Description |
| ------------- | ----------- | ---- | ----------- |
| `AccountLogin` | `getAccountLogin()` | `number` | Trading account login (ID). |
| `AccountBalance` | `getAccountBalance()` | `number` | Balance excluding floating P/L. |
| `AccountEquity` | `getAccountEquity()` | `number` | Equity = balance + floating P/L. |
| `AccountUserName` | `getAccountUserName()` | `string` | Account holder name. |
| `AccountLeverage` | `getAccountLeverage()` | `number` | Leverage (e.g. `100` for 1:100). |
| `AccountTradeMode` | `getAccountTradeMode()` | `MrpcEnumAccountTradeMode` | Demo / Contest / Real — see enum below. |
| `AccountCompanyName` | `getAccountCompanyName()` | `string` | Broker / company display name. |
| `AccountCurrency` | `getAccountCurrency()` | `string` | Deposit currency (e.g. `"USD"`). |
| `ServerTime` | `getServerTime()` | `Timestamp` | Server time at response (broker time zone). `.getSeconds()` → unix seconds. |
| `ServerTimeUtc` | `getServerTimeUtc()` | `Timestamp` | The same moment in UTC. |
| `UtcTimezoneServerTimeShiftMinutes` | `getUtcTimezoneServerTimeShiftMinutes()` | `number` | Server offset from UTC (minutes). |
| `AccountCredit` | `getAccountCredit()` | `number` | Credit amount. |
| `ServerUtcOffsetSeconds` | `getServerUtcOffsetSeconds()` | `number` | Broker offset from UTC in seconds (positive = ahead). |
| `AccountMargin` | `getAccountMargin()` | `number` | Margin currently used by open positions. |
| `AccountMarginFree` | `getAccountMarginFree()` | `number` | Free margin available for new positions. |
| `AccountMarginLevel` | `getAccountMarginLevel()` | `number` | Margin level in percent (`equity / margin × 100`); `0` when no margin is used. |
| `AccountMarginMode` | `getAccountMarginMode()` | `MrpcEnumAccountMarginMode` | Margin mode (MT5 demo = `RETAIL_HEDGING`) — see enum below. |
| `AccountTradeAllowed` | `getAccountTradeAllowed()` | `boolean` | Trading allowed for this account. |
| `AccountTradeExpert` | `getAccountTradeExpert()` | `boolean` | Automated (EA) trading allowed. |
| `TerminalConnected` | `getTerminalConnected()` | `boolean` | Terminal is connected to the broker. |
| `TerminalTradeAllowed` | `getTerminalTradeAllowed()` | `boolean` | Trading is allowed in the terminal. |

> **🧮 Floating profit:** the summary has no dedicated profit field — compute `getAccountEquity() - getAccountBalance()`, or read `accountInfoDouble(ACCOUNT_PROFIT)`.

---

## 🧱 Related enums (from proto)

> **💡 Enum usage note:** the generated enums are namespace objects on the `*Pb` modules. Compare against the full constant, e.g. `s.getAccountTradeMode() === AccountHelperPb.MrpcEnumAccountTradeMode.MRPC_ACCOUNT_TRADE_MODE_DEMO`.

### `MrpcEnumAccountTradeMode`

```protobuf
enum MrpcEnumAccountTradeMode {
  MRPC_ACCOUNT_TRADE_MODE_DEMO    = 0;  // demo / practice
  MRPC_ACCOUNT_TRADE_MODE_CONTEST = 1;  // contest
  MRPC_ACCOUNT_TRADE_MODE_REAL    = 2;  // real trading
}
```

```ts
import { AccountHelperPb } from '@metarpc/nodemt5';
const M = AccountHelperPb.MrpcEnumAccountTradeMode;

function tradeModeToString(mode: number): string {
  switch (mode) {
    case M.MRPC_ACCOUNT_TRADE_MODE_DEMO:    return 'DEMO';
    case M.MRPC_ACCOUNT_TRADE_MODE_CONTEST: return 'CONTEST';
    case M.MRPC_ACCOUNT_TRADE_MODE_REAL:    return 'REAL';
    default:                                return `UNKNOWN(${mode})`;
  }
}
```

### `MrpcEnumAccountMarginMode`

```protobuf
enum MrpcEnumAccountMarginMode {
  MRPC_ACCOUNT_MARGIN_MODE_RETAIL_NETTING = 0;  // netting (one position per symbol)
  MRPC_ACCOUNT_MARGIN_MODE_EXCHANGE       = 1;  // exchange margin
  MRPC_ACCOUNT_MARGIN_MODE_RETAIL_HEDGING = 2;  // hedging (many positions per symbol) — typical MT5
}
```

---

## 🧩 Notes & Tips

* **Errors are exceptions:** a server-side rejection rejects with `metarpc.MrpcError`; a transport failure rejects with the gRPC error. `await` inside `try/catch`.
* **Default timeout:** read RPCs use `callTimeoutMs` (default `30000` ms).
* **Timestamps:** `getServerTime()` / `getServerTimeUtc()` are `google.protobuf.Timestamp`; read `.getSeconds()` for unix seconds, or use the friendly `MT5Service.getAccountSummary()` which returns numbers.
* **Session is automatic:** `connect()` obtains the terminal id and the SDK attaches it to this call — you never pass it yourself.

---

## 🔗 Usage Examples

### 1) Basic usage

```ts
import { MT5Account } from '@metarpc/nodemt5';

async function main() {
  const account = new MT5Account('mt5.mrpc.pro', 443);     // apiKey from MRPC_API_KEY, else TRIAL
  await account.connect({ user: 591129415, password: 'password', server: 'MetaQuotes-Demo' });

  const s = await account.accountSummary();
  console.log('Account Login:', s.getAccountLogin());
  console.log(`Balance: ${s.getAccountBalance().toFixed(2)} ${s.getAccountCurrency()}`);
  console.log('Equity:', s.getAccountEquity().toFixed(2));
  console.log('Leverage: 1:' + s.getAccountLeverage());

  account.close();
}
main().catch(console.error);
```

### 2) Compact status line for a CLI

```ts
async function printAccountStatus(account: MT5Account) {
  try {
    const s = await account.accountSummary();
    console.log(
      `Acc ${s.getAccountLogin()} | ${s.getAccountCurrency()} | ` +
      `Bal ${s.getAccountBalance().toFixed(2)} | Eq ${s.getAccountEquity().toFixed(2)} | ` +
      `Lev 1:${s.getAccountLeverage()} | Mode ${tradeModeToString(s.getAccountTradeMode())}`
    );
  } catch (e: any) {
    console.log('❌ Error:', e.message);
  }
}
// Output: Acc 591129415 | USD | Bal 10000.00 | Eq 10050.25 | Lev 1:100 | Mode DEMO
```

### 3) Floating profit & margin health

```ts
async function printHealth(account: MT5Account) {
  const s = await account.accountSummary();
  const floating = s.getAccountEquity() - s.getAccountBalance();   // no dedicated profit field
  const level = s.getAccountMarginLevel();                         // 0 when flat

  console.log('Floating P/L:', floating.toFixed(2));
  if (level === 0)        console.log('No open margin');
  else if (level < 100)   console.log('⚠️ Margin level critical!');
  else if (level < 200)   console.log('⚠️ Low margin level');
  else                    console.log('✅ Healthy margin level');
}
```

### 4) Server time with timezone shift

```ts
async function printServerTime(account: MT5Account) {
  const s = await account.accountSummary();
  const utc = new Date(s.getServerTimeUtc().getSeconds() * 1000);
  const broker = new Date(s.getServerTime().getSeconds() * 1000);
  console.log('Server time (UTC):', utc.toISOString());
  console.log('Server time (broker):', broker.toISOString());
  console.log('Broker offset from UTC:', s.getServerUtcOffsetSeconds(), 'seconds');
}
```

### 5) Structured data model

```ts
interface AccountSummaryView {
  login: number; currency: string; balance: number; equity: number;
  floating: number; leverage: number; tradeMode: string; company: string;
}

function fromProto(s: any): AccountSummaryView {
  return {
    login: s.getAccountLogin(), currency: s.getAccountCurrency(),
    balance: s.getAccountBalance(), equity: s.getAccountEquity(),
    floating: s.getAccountEquity() - s.getAccountBalance(),
    leverage: s.getAccountLeverage(), tradeMode: tradeModeToString(s.getAccountTradeMode()),
    company: s.getAccountCompanyName(),
  };
}

const view = fromProto(await account.accountSummary());
console.log(view);
```

### 6) Error handling (reconnect is automatic)

```ts
async function tryGetSummary(account: MT5Account) {
  try {
    return await account.accountSummary();   // transient errors already retried inside
  } catch (e: any) {
    console.log('Failed to get account summary:', e.message);
    return null;
  }
}
```

---

## 🔧 Common Patterns

### Health check

```ts
async function isAccountHealthy(account: MT5Account): Promise<boolean> {
  try {
    const s = await account.accountSummary();
    return s.getAccountLogin() > 0 && s.getAccountCurrency() !== '' && s.getAccountLeverage() > 0;
  } catch {
    return false;
  }
}
```

### Monitor account changes

```ts
function monitorAccount(account: MT5Account, intervalMs: number) {
  setInterval(async () => {
    try {
      const s = await account.accountSummary();
      console.log(`[${new Date().toISOString().slice(11, 19)}] Balance: ${s.getAccountBalance().toFixed(2)} | Equity: ${s.getAccountEquity().toFixed(2)}`);
    } catch (e: any) {
      console.log('❌ Error:', e.message);
    }
  }, intervalMs);
}
// Usage: monitorAccount(account, 5000);
```

---

## 📚 See Also

* [AccountInfoDouble](./AccountInfoDouble.md) — one double account property (balance, equity, margin, profit…).
* [AccountInfoInteger](./AccountInfoInteger.md) — one integer account property (login, leverage…).
* [AccountInfoString](./AccountInfoString.md) — one string account property (currency, company, server).
* **Friendly layer:** [`MT5Service.getAccountSummary()`](../../MT5Service/MT5Service.Overview.md) → a named `AccountInfo` object.

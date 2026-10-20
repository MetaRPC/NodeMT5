# Account

```javascript
const account = await client.getAccountInfo();
console.log(account.login, account.name, account.server);
console.log(`Balance ${account.balance} ${account.currency}, equity ${account.equity}, leverage 1:${account.leverage}`);
```

| Field | Source |
|---|---|
| `login`, `name`, `server` | account number, owner name, broker server (`AccountInfoString(ACCOUNT_SERVER)`) |
| `balance`, `equity`, `currency`, `leverage` | `AccountSummary` |
| `margin`, `freeMargin`, `marginLevel` | `AccountInfoDouble(ACCOUNT_MARGIN / ACCOUNT_MARGIN_FREE / ACCOUNT_MARGIN_LEVEL)` |

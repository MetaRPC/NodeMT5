# MT5Sugar — High-Level API Overview

> One-line helpers for everyday trading: connect, read balances, quote, buy/sell, manage positions, size risk. The friendliest layer — built on **[MT5Service](../MT5Service/MT5Service.Overview.md)**, which is built on **[MT5Account](../MT5Account/MT5Account.Master.Overview.md)**.

**🧩 API Layer:** **HIGH-LEVEL** — maximum convenience, minimum boilerplate.

---

## 🧱 One call builds the whole stack

```ts
import { MT5Sugar } from '@metarpc/nodemt5';

const sugar = MT5Sugar.create('mt5.mrpc.pro', 443);
await sugar.quickConnect(login, 'password', 'MetaQuotes-Demo');

const ticket = await sugar.buyMarket('EURUSD', 0.10);
await sugar.modifyPositionSLTP(ticket, 1.0850, 1.1000);
console.log('balance', await sugar.getBalance());
```

* `MT5Sugar.create(host?, port?, apiKey?, id?)` → builds `MT5Sugar → MT5Service → MT5Account`.
* `sugar.service()` → the mid layer · `sugar.account()` → the low layer. Drop down any time.

---

## 🛑 How errors surface

The trading one-liners (`buyMarket`, `closePosition`, …) **throw `MrpcError`** on a broker rejection (retcode ≠ `10009`) — you don't inspect retcodes here, you `try/catch`:

```ts
try {
  const t = await sugar.buyMarket('EURUSD', 0.10);
} catch (e) {
  console.error('rejected:', e.message);
}
```

Read helpers return plain values; `ping()` / `isConnected()` never throw.

---

## 📁 Method groups

| # | Group | What's inside |
| - | ----- | ------------- |
| 1 | **[Connection](./1.%20Connection.md)** | `quickConnect` · `isConnected` · `ping` |
| 2 | **[Balance & Margin](./2.%20Balance_Margin.md)** | `getBalance/Equity/Margin/FreeMargin/MarginLevel/Profit` |
| 3 | **[Prices & Quotes](./3.%20Prices_Quotes.md)** | `getBid/Ask/Spread` · `getPriceInfo` · `waitForPrice` |
| 4 | **[Simple Trading](./4.%20Simple_Trading.md)** | `buy/sellMarket` · `buy/sellLimit` · `buy/sellStop` |
| 5 | **[Trading with SL/TP](./5.%20Trading_SLTP.md)** | `buy/sellMarketWithSLTP` · `buy/sellLimitWithSLTP` |
| 6 | **[Position Management](./6.%20Position_Management.md)** | `closePosition(Partial)` · `closeAllPositions` · `modifyPositionSL/TP/SLTP` · `getOpenPositions` |
| 7 | **[Position Information](./7.%20Position_Information.md)** | `countOpenPositions` · `hasOpenPosition` · `getTotalProfit` |
| 8 | **[History & Statistics](./8.%20History_Statistics.md)** | `getDeals*` · `getProfit*` |
| 9 | **[Symbol Information](./9.%20Symbol_Information.md)** | `getSymbolInfo` · `getAllSymbols` · `getMinStopLevel` · `getSymbolDigits` |
| 10 | **[Risk Management](./10.%20Risk_Management.md)** | `calculatePositionSize` · `getMaxLotSize` · `canOpenPosition` · `calculateRequiredMargin` · `calculateSLTP` |
| 11 | **[Trading Helpers](./11.%20Trading_Helpers.md)** | `buy/sellMarketWithPips` |
| 12 | **[Account Information](./12.%20Account_Information.md)** | `getAccountInfo` · `getDailyStats` |

---

## 🧮 Pips on MT5

Helpers measure "pips" as `pipSize = point × (digits is 3 or 5 ? 10 : 1)`. So on 5-digit EURUSD one pip = `0.0001`, on 3-digit JPY pairs one pip = `0.01`. SL/TP pip distances everywhere use this convention.

---

## See also

* **Down:** [MT5Service — Overview](../MT5Service/MT5Service.Overview.md) · [MT5Account — Master Overview](../MT5Account/MT5Account.Master.Overview.md).

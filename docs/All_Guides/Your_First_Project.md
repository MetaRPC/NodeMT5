# Your First Project

> Build a small, complete NodeMT5 script: connect, quote, trade with risk sizing, and report.

---

## 1 · Set up

```bash
mkdir mt5-bot && cd mt5-bot
npm init -y
npm install @metarpc/nodemt5
```

Create `index.mjs`.

---

## 2 · Connect

```ts
import { MT5Sugar } from '@metarpc/nodemt5';

const sugar = MT5Sugar.create('mt5.mrpc.pro', 443, process.env.MRPC_API_KEY);
await sugar.quickConnect(
  Number(process.env.MT5_LOGIN),
  process.env.MT5_PASSWORD,
  process.env.MT5_SERVER,         // e.g. MetaQuotes-Demo
);
console.log('connected?', sugar.isConnected());
```

> Need the `MRPC_API_KEY`? Register at [https://mrpc.pro/signup](https://mrpc.pro/signup) — your key is then provisioned automatically and shown in the [MT5 Client API Explorer](https://mrpc.pro/explorer/mt5-client) (*Copy key*). See [Getting Started → API Key](./GETTING_STARTED.md). (Or omit it for keyless `TRIAL` access while testing.)

---

## 3 · Look at the market

```ts
const symbol = 'EURUSD';
const price = await sugar.getPriceInfo(symbol);
console.log(`${symbol}  bid ${price.bid}  ask ${price.ask}  ${price.spreadPips.toFixed(1)} pips`);
```

---

## 4 · Trade with risk sizing

```ts
// risk 1% of balance over a 20-pip stop, 40-pip target
const lots = await sugar.calculatePositionSize(symbol, 1, 20);

const { ok, reason } = await sugar.canOpenPosition(symbol, lots);
if (!ok) throw new Error('cannot trade: ' + reason);

const ticket = await sugar.buyMarketWithPips(symbol, lots, 20, 40);
console.log('opened #', ticket, 'with', lots, 'lots');
```

---

## 5 · Manage & report

```ts
console.log('open positions:', await sugar.countOpenPositions());
console.log('floating P/L:', await sugar.getTotalProfit());

// tidy up for the demo
await sugar.closeAllPositions();

const stats = await sugar.getDailyStats();
console.log(`today: ${stats.totalDeals} deals, net ${stats.totalProfit.toFixed(2)}`);
```

---

## 6 · Run it

```bash
MT5_LOGIN=5057947437 MT5_PASSWORD=secret MT5_SERVER=MetaQuotes-Demo \
MRPC_API_KEY=YOUR_KEY node index.mjs
```

---

## Where to go next

* Stream live prices → [Streams](./GRPC_STREAM_MANAGEMENT.md).
* Strategy loops → [Orchestrators](../Orchestrators/Strategies.Master.Overview.md).
* Full helper list → [MT5Sugar API](../MT5Sugar/MT5Sugar.API_Overview.md).

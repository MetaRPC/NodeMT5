# Getting Started with NodeMT5

This guide shows you how to install NodeMT5, authenticate with an MT5 server, and place your first trade.

## Prerequisites

- **Node.js 18.0+**
- MT5 Account credentials (Host, Port, Login ID, Password)

## Quick Example

Create a file named `quickstart.ts`:

```typescript
import { MT5Client } from '@metarpc/nodemt5';

async function main() {
  const client = new MT5Client('mt5.broker.com', 443);

  // Authenticate
  console.log('Connecting to MT5...');
  await client.connect(12345678, 'your_password');
  console.log('Connected!');

  // Fetch account overview
  const account = await client.getAccountInfo();
  console.log(`Account Balance: ${account.balance} ${account.currency}`);
  console.log(`Leverage: 1:${account.leverage}`);

  // Subscribe to live EURUSD ticks
  await client.subscribeQuotes(['EURUSD'], (quote) => {
    console.log(`[EURUSD] Bid: ${quote.bid} | Ask: ${quote.ask}`);
  });

  // Open a 0.01 lot Buy order
  const order = await client.orderSend({
    symbol: 'EURUSD',
    action: 'BUY',
    volume: 0.01,
    comment: 'NodeMT5 Quickstart'
  });

  console.log(`Order placed! Ticket: #${order.ticket}`);
}

main().catch(console.error);
```

Run with `ts-node` or compile with `tsc`:

```bash
npx ts-node quickstart.ts
```

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
  const client = new MT5Client('mt5.mrpc.pro', 443);

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


> **Authentication Note**: Connecting to `mt5.mrpc.pro:443` requires a valid MetaRPC API key. Register for free at [https://mrpc.pro/signup](https://mrpc.pro/signup) and generate your token in [https://mrpc.pro/my](https://mrpc.pro/my).



---

## 🆔 Automatic Account ID & Authentication

MetaRPC endpoints require two credentials for all terminal operations:
1. **`APIKey`**: Your personal authentication token from [https://mrpc.pro/my](https://mrpc.pro/my) (obtained by registering at [https://mrpc.pro/signup](https://mrpc.pro/signup)). Sent in the `APIKey` header.
2. **`id`**: A deterministic account GUID derived from your MetaTrader `user` (login number) and `password`.

> 💡 **Seamless Automation**: You do not need to call `GetId` manually. The SDK automatically derives your deterministic account ID from your credentials upon initialization and attaches both the `id` and `APIKey` headers to all requests and streaming subscriptions.


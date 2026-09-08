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

## 🆔 Account ID Generation (`GetId`)

> ⚠️ **Important**: You must generate your deterministic account ID with `GetId` **firstly** before connecting or streaming.

MetaRPC endpoints require two essential credentials for all operations:
1. **`APIKey`**: Your personal authentication token from [https://mrpc.pro/my](https://mrpc.pro/my) (obtained by registering at [https://mrpc.pro/signup](https://mrpc.pro/signup)). Sent in the `APIKey` header.
2. **`id`**: A deterministic account GUID generated from your MetaTrader `user` (login number) and `password`. The same credentials always produce the exact same GUID.

### Calling GetId

#### Via REST API:
```bash
curl -X GET "https://mt5.mrpc.pro/GetId?user=YOUR_LOGIN&password=YOUR_PASSWORD" \
     -H "APIKey: YOUR_API_KEY"
```

Response:
```json
{
  "data": {
    "id": "e8d91060-c3d3-4f4d-8d2a-9e1b2c3d4e5f"
  }
}
```

#### Via gRPC:
Send a `GetIdRequest` with `user` and `password` to the connection service before calling `ConnectEx`.

Use this returned `id` GUID in the `id` header or session parameter for `ConnectEx`, `AccountSummary`, and all other terminal operations.

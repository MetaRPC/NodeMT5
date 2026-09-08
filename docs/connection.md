
## 🆔 Generate Account ID (`GetId`)

> ⚠️ **Important**: You must generate your deterministic account ID with `GetId` **firstly** before connecting or streaming.

Before establishing a connection, call `GetId` with your trading account number and password to obtain your deterministic terminal GUID:

```bash
curl -X GET "https://mt5.mrpc.pro/GetId?user=YOUR_LOGIN&password=YOUR_PASSWORD" \
     -H "APIKey: YOUR_API_KEY"
```

The resulting `id` must be provided as the `id` header alongside `APIKey` for all subsequent operations.


# Connection & Authentication

Managing connections and sessions with MetaTrader 5.

## Basic Connection

```typescript
import { MT5Client } from '@metarpc/nodemt5';

const client = new MT5Client('mt5.mrpc.pro', 443);
await client.connect(12345678, 'investor_or_master_password');
```

## Session Management & Auto-Reconnect

```typescript
client.on('disconnected', async (reason) => {
  console.warn('Disconnected:', reason);
  console.log('Reconnecting in 5 seconds...');
  setTimeout(() => client.connect(12345678, 'password'), 5000);
});
```

## Graceful Shutdown

```typescript
process.on('SIGINT', () => {
  console.log('Shutting down...');
  client.disconnect();
  process.exit(0);
});
```


> **Authentication Note**: Connecting to `mt5.mrpc.pro:443` requires a valid MetaRPC API key. Register for free at [https://mrpc.pro/signup](https://mrpc.pro/signup) and generate your token in [https://mrpc.pro/my](https://mrpc.pro/my).


# Connection & Authentication

Managing connections and sessions with MetaTrader 5.

## Basic Connection

```typescript
import { MT5Client } from '@metarpc/nodemt5';

const client = new MT5Client('mt5demo.broker.com', 443);
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

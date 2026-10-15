# Getting Started with NodeMT5

Requires Node.js 18 or newer, an MRPC API key and an MT5 account (any broker; or open a demo account with
`MT5Client.openDemoAccount('MetaQuotes-Demo', apiKey)`).

```bash
npm install github:MetaRPC/NodeMT5 @grpc/grpc-js
```

The package is installed from GitHub; it is not on the npm registry. It is named `@metarpc/nodemt5`, so `require('@metarpc/nodemt5')` works as usual.

```javascript
const { MT5Client } = require('@metarpc/nodemt5');

async function main() {
  const client = new MT5Client('mt5.mrpc.pro', 443, process.env.MRPC_API_KEY);
  await client.connect({ user: Number(process.env.MT5_LOGIN), password: process.env.MT5_PASSWORD, server: 'MetaQuotes-Demo' });
  try {
    const account = await client.getAccountInfo();
    console.log(`Balance: ${account.balance} ${account.currency}, equity ${account.equity}, leverage 1:${account.leverage}`);

    const order = await client.orderSend({ symbol: 'EURUSD', action: 'BUY', volume: 0.01, comment: 'first order' });
    console.log(`Deal #${order.deal}, position #${order.order} at ${order.price} (return code ${order.retcode})`);
  } finally {
    await client.disconnect();
  }
}

main().catch((err) => { console.error(err.message); process.exit(1); });
```
The same program with a demo account and error handling is
[`examples/quickstart.js`](https://github.com/MetaRPC/NodeMT5/blob/main/examples/quickstart.js).

## API key and terminal id

- **`APIKey`**: your key from [https://mrpc.pro/my](https://mrpc.pro/my) (sign up free at [https://mrpc.pro/signup](https://mrpc.pro/signup)).
  Pass it to the constructor or set `MRPC_API_KEY`; without one the client sends `TRIAL`.
- **`id`**: the terminal id. `connect()` receives it from the server (`terminalInstanceGuid`), keeps it in `client.id` and
  sends it with every later call and stream. You don't need to call `getId()` first.

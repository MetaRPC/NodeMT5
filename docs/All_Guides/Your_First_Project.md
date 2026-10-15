# Your First Project in 10 Minutes (Node.js)

> **Hands-on Quick Start** - A working MetaTrader 5 project with NodeMT5 from scratch.

---

## Step 0: API key

1. Register free at [https://mrpc.pro/signup](https://mrpc.pro/signup).
2. Create your API key at [https://mrpc.pro/my](https://mrpc.pro/my).
3. Put it in `MRPC_API_KEY`.

---

## Step 1: Create the project

```bash
mkdir my-mt5-bot
cd my-mt5-bot
npm init -y
npm install github:MetaRPC/NodeMT5 @grpc/grpc-js
```

---

## Step 2: Write the program

Save as `index.js` (it connects, reads the account, buys 0.01 lot of EURUSD and disconnects):

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
---

## Step 3: Run it

```bash
export MRPC_API_KEY=your-api-key MT5_LOGIN=your-login MT5_PASSWORD=your-password
node index.js
```

No account yet? `MT5Client.openDemoAccount('MetaQuotes-Demo', apiKey)` opens a demo account and returns its login and password;
[`examples/quickstart.js`](https://github.com/MetaRPC/NodeMT5/blob/main/examples/quickstart.js) does that when no login is set.

---

## Next steps

- **[Quotes](../quotes.md)** - stream ticks with `subscribeQuotes`.
- **[API Reference](../api.md)** - everything `MT5Client` does, and the generated clients for the rest of the API.
- **[gRPC Streaming](GRPC_STREAM_MANAGEMENT.md)** - the other streams.

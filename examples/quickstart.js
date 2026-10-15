/**
 * MetaRPC NodeMT5 Quickstart Example
 * Demonstrates:
 * 1. Initializing the client with an API key
 * 2. Using your MT5 credentials (MT5_LOGIN / MT5_PASSWORD / MT5_SERVER) or opening a new demo account
 * 3. Connecting to mt5.mrpc.pro:443 (MRPC_GRPC_HOST overrides the host)
 * 4. Reading the account and placing a 0.01 lot buy
 * 5. Disconnecting
 */

const { MT5Client } = require('../src/index.js');

async function main() {
  const apiKey = process.argv[2] || process.env.MRPC_API_KEY || 'TRIAL';
  const host = (process.env.MRPC_GRPC_HOST || 'mt5.mrpc.pro').replace(/:443$/, '');
  const client = new MT5Client(host, 443, apiKey);

  const login = process.env.MT5_LOGIN || process.env.MT5_USER;
  let user = login ? parseInt(login, 10) : null;
  let password = process.env.MT5_PASSWORD || null;
  let server = process.env.MT5_SERVER || 'MetaQuotes-Demo';

  if (!user || !password) {
    console.log('--- Step 0: Opening a demo account ---');
    const demo = await MT5Client.openDemoAccount(server, apiKey, host);
    user = demo.login;
    password = demo.password;
    server = demo.server;
    console.log(`Demo account opened: #${user} (server ${server})`);
  }

  console.log('\n--- Step 1: Connect ---');
  await client.connect({ user, password, server });
  console.log(`Connected to ${host}:443 (terminal ${client.id})`);
  try {
    console.log('\n--- Step 2: Account ---');
    const account = await client.getAccountInfo();
    console.log(`Account:  ${account.login} (${account.name}) on ${account.server}`);
    console.log(`Balance:  ${account.balance} ${account.currency}, equity ${account.equity}, free margin ${account.freeMargin}`);
    console.log(`Leverage: 1:${account.leverage}`);

    console.log('\n--- Step 3: Market order ---');
    const order = await client.orderSend({ symbol: 'EURUSD', action: 'BUY', volume: 0.01, comment: 'MetaRPC Node quickstart' });
    console.log(`Order placed: deal #${order.deal}, position #${order.order} at ${order.price} (return code ${order.retcode})`);
  } finally {
    console.log('\n--- Step 4: Disconnect ---');
    await client.disconnect();
    console.log('Disconnected.');
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});

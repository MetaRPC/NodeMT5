/**
 * MetaRPC NodeMT5 Quickstart Example
 * Demonstrates:
 * 1. Initializing client with API key from https://mrpc.pro/signup
 * 2. Retrieving deterministic Account ID via getId(user, password)
 * 3. Connecting to production cluster mt5.mrpc.pro:443
 * 4. Fetching account balance and placing a trade
 */

const { MT5Client } = require('../src/index.js');

async function main() {
  const apiKey = process.env.MRPC_API_KEY || 'YOUR_API_KEY_HERE';
  const client = new MT5Client('mt5.mrpc.pro', 443, apiKey);

  const user = 12345678;
  const password = 'demo_password';

  console.log('--- Step 1: Generate Account ID (GetId) ---');
  const accountId = await client.getId(user, password);
  console.log(`Account ID generated: ${accountId}`);

  console.log('\n--- Step 2: Connect to MetaTrader 5 Terminal ---');
  const connected = await client.connect(user, password);
  if (connected) {
    console.log('Successfully connected to mt5.mrpc.pro:443');

    console.log('\n--- Step 3: Query Account Summary ---');
    const accountInfo = await client.getAccountInfo();
    console.log(`Account: ${accountInfo.login} (${accountInfo.name})`);
    console.log(`Balance: ${accountInfo.balance} ${accountInfo.currency}`);
    console.log(`Leverage: 1:${accountInfo.leverage}`);

    console.log('\n--- Step 4: Execute Market Order ---');
    const order = await client.orderSend({
      symbol: 'EURUSD',
      action: 'BUY',
      volume: 0.1,
      price: 1.0850,
      comment: 'MetaRPC Node quickstart'
    });
    console.log(`Order Placed: Deal #${order.deal}, Ticket #${order.ticket}, Return Code: ${order.retcode}`);
  }

  client.disconnect();
  console.log('\nDone.');
}

main().catch(console.error);

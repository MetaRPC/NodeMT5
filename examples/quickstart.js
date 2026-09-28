/**
 * MetaRPC NodeMT5 Quickstart Example
 * Demonstrates:
 * 1. Initializing client with API key
 * 2. Provisioning live demo account or using existing credentials
 * 3. Connecting to production cluster mt5.mrpc.pro:443
 * 4. Fetching account balance and placing a trade
 * 5. Cleanly disconnecting session on completion
 */

const { MT5Client } = require('../src/index.js');

async function main() {
  const apiKey = process.argv[2] || process.env.MRPC_API_KEY || 'TRIAL';
  const client = new MT5Client('mt5.mrpc.pro', 443, apiKey);

  let user = process.env.MT5_USER ? parseInt(process.env.MT5_USER, 10) : null;
  let password = process.env.MT5_PASSWORD || null;
  let server = process.env.MT5_SERVER || 'MetaQuotes-Demo';

  if (!user || !password) {
    console.log('--- Step 0: Provisioning Live Demo Account ---');
    try {
      const demo = await MT5Client.openDemoAccount(server, apiKey);
      user = demo.login;
      password = demo.password;
      server = demo.server;
      console.log(`Demo Account Provisioned: #${user} (Server: ${server})`);
    } catch (e) {
      console.log(`Could not auto-provision demo account (${e.message}), using fallback demo account.`);
      user = 12345678;
      password = 'demo_password';
    }
  }

  try {
    console.log('\n--- Step 1: Connect to MetaTrader 5 Terminal ---');
    const connected = await client.connect({
      user,
      password,
      server
    });

    if (connected) {
      console.log(`Successfully connected to mt5.mrpc.pro:443 (Terminal GUID: ${client.id})`);

      console.log('\n--- Step 2: Query Account Summary ---');
      const accountInfo = await client.getAccountInfo();
      console.log(`Account:  ${accountInfo.login} (${accountInfo.name || 'Demo Trader'})`);
      console.log(`Balance:  ${accountInfo.balance} ${accountInfo.currency}`);
      console.log(`Leverage: 1:${accountInfo.leverage}`);

      console.log('\n--- Step 3: Execute Market Order ---');
      const order = await client.orderSend({
        symbol: 'EURUSD',
        action: 'BUY',
        volume: 0.01,
        comment: 'MetaRPC Node quickstart'
      });
      console.log(`Order Placed: Deal #${order.deal}, Ticket #${order.ticket}, Return Code: ${order.retcode}`);
    }
  } finally {
    console.log('\n--- Step 4: Disconnecting Cleanly ---');
    await client.disconnect();
    console.log('Terminal session disconnected successfully.');
  }
}

main().catch(console.error);

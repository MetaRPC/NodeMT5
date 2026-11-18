/*
 * ════════════════════════════════════════════════════════════════════════════
 *  @metarpc/nodemt5 — MetaTrader 5 Node.js & TypeScript SDK
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  Three composable layers over the MetaRPC MT5 gRPC gateway — enter at any level:
 *
 *      MT5Account   (low)   raw gRPC: protobuf Request/Data, channel & streaming
 *      MT5Service   (mid)   friendly facade: plain args, typed objects, UTC times
 *      MT5Sugar     (high)  one-liners: balances, prices, orders, risk sizing
 *
 *  Quick start:
 *      import { MT5Sugar } from '@metarpc/nodemt5';
 *      const sugar = MT5Sugar.create('mt5.mrpc.pro', 443);   // apikey from MRPC_API_KEY, else TRIAL
 *      await sugar.quickConnect(5057947437, 'password', 'MetaQuotes-Demo');
 *      console.log(await sugar.getBalance(), await sugar.getBid('EURUSD'));
 * ════════════════════════════════════════════════════════════════════════════
 */

// Layer 1 — low-level client + generated bindings, TIMEFRAMES, Subscription, ConnectOptions, toTimestamp
export * from './MT5Account';

// Layer 2 — friendly facade + all data-transfer objects (AccountInfo, Quote, Position, …)
export * from './MT5Service';

// Layer 3 — one-liner API + PriceInfo / DailyStats
export * from './MT5Sugar';

// Errors — MrpcError / MT5Error / NotConnectedError
export * from './errors';

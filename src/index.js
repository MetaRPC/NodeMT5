"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Layer 1 — low-level client + generated bindings, TIMEFRAMES, Subscription, ConnectOptions, toTimestamp
__exportStar(require("./MT5Account"), exports);
// Layer 2 — friendly facade + all data-transfer objects (AccountInfo, Quote, Position, …)
__exportStar(require("./MT5Service"), exports);
// Layer 3 — one-liner API + PriceInfo / DailyStats
__exportStar(require("./MT5Sugar"), exports);
// Errors — MrpcError / MT5Error / NotConnectedError
__exportStar(require("./errors"), exports);

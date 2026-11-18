"use strict";
/*
 * ════════════════════════════════════════════════════════════════════════════
 *  MT5Account — Low-Level MetaTrader 5 gRPC Client (Layer 1 of 3)
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  The base layer. It owns the gRPC channel, the seven generated service clients,
 *  the auth metadata (apikey + terminal session id), the unary `call()` wrapper
 *  and the connection lifecycle. Every RPC method is a thin 1:1 wrapper: you pass
 *  a generated protobuf `*Request` (or let it default) and get back the reply's
 *  `data` payload (raw protobuf `*Data`), or it throws `MrpcError`.
 *
 *  Friendly C++-struct-like objects and plain arguments live one layer up in
 *  `MT5Service`; one-liners in `MT5Sugar`.
 *
 *  METHOD GROUPS
 *  ──────────────────────────────────────────────────────────────────────────
 *   1. CONNECTION (7)
 *      • connect / connectEx     — connect by broker server name or address
 *      • connectProxy            — connect through a proxy
 *      • checkConnect            — verify the terminal connection
 *      • reconnect               — re-establish a dropped terminal
 *      • disconnect              — stop the terminal on the gateway + close channel
 *      • getId                   — the deterministic terminal id for user/password
 *      • close                   — close the gRPC channel only
 *
 *   2. ACCOUNT INFORMATION (4)
 *      • accountSummary          — all account data in one call (recommended)
 *      • accountInfoDouble       — one ACCOUNT_* double property
 *      • accountInfoInteger      — one ACCOUNT_* integer property
 *      • accountInfoString       — one ACCOUNT_* string property
 *
 *   3. SYMBOL INFORMATION & OPERATIONS (15)
 *      • symbolsTotal / symbolExist / symbolName
 *      • symbolSelect / symbolIsSynchronized
 *      • symbolInfoDouble / Integer / String / MarginRate
 *      • symbolInfoTick / symbolInfoSessionQuote / symbolInfoSessionTrade
 *      • symbolParamsMany / priceHistory / tickValueWithSize
 *
 *   4. POSITIONS & ORDERS INFORMATION (5)
 *      • positionsTotal          — number of open positions
 *      • openedOrders            — open positions + pending orders (full detail)
 *      • openedOrdersTickets     — just the ticket numbers (lightweight)
 *      • orderHistory            — historical orders + deals (paged)
 *      • positionsHistory        — closed positions with P&L
 *
 *   5. MARKET DEPTH / DOM (3)
 *      • marketBookAdd           — subscribe to Depth-of-Market updates
 *      • marketBookRelease       — unsubscribe from DOM
 *      • marketBookGet           — current market-depth snapshot
 *
 *   6. TRADING OPERATIONS (6)
 *      • orderSend / orderModify / orderClose
 *      • orderCheck              — validate an order before sending
 *      • orderCalcMargin         — required margin for a prospective order
 *      • orderCalcProfit         — profit of a prospective trade
 *
 *   7. STREAMING METHODS (5)
 *      • onSymbolTick            — live Bid/Ask ticks
 *      • onTrade                 — trade events
 *      • onPositionProfit        — periodic position P&L updates
 *      • onPositionsAndPendingOrdersTickets — periodic ticket snapshots
 *      • onTradeTransaction      — trade-transaction events
 *
 *  Errors are exceptions: `MrpcError` (the gateway answered with an error, carries
 *  the MQL/trade codes) or a transport failure. Streaming methods return a
 *  `Subscription` whose `unsubscribe()` cancels the stream.
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MT5Account = exports.TIMEFRAMES = exports.EmptyPb = exports.TimestampPb = exports.MarketInfoPb = exports.MarketInfoGrpc = exports.SubscriptionsPb = exports.SubscriptionsGrpc = exports.TradeFunctionsPb = exports.TradeFunctionsGrpc = exports.TradingHelperPb = exports.TradingHelperGrpc = exports.AccountInformationPb = exports.AccountInformationGrpc = exports.AccountHelperPb = exports.AccountHelperGrpc = exports.ConnectionPb = exports.ConnectionGrpc = void 0;
exports.toTimestamp = toTimestamp;
const grpc = __importStar(require("@grpc/grpc-js"));
const crypto = __importStar(require("crypto"));
const errors_1 = require("./errors");
// ── Generated gRPC + protobuf bindings (from the MetaRPC MT5 protos) ──────────
exports.ConnectionGrpc = require('../package/mt5-term-api-connection_grpc_pb');
exports.ConnectionPb = require('../package/mt5-term-api-connection_pb');
exports.AccountHelperGrpc = require('../package/mt5-term-api-account-helper_grpc_pb');
exports.AccountHelperPb = require('../package/mt5-term-api-account-helper_pb');
exports.AccountInformationGrpc = require('../package/mt5-term-api-account-information_grpc_pb');
exports.AccountInformationPb = require('../package/mt5-term-api-account-information_pb');
exports.TradingHelperGrpc = require('../package/mt5-term-api-trading-helper_grpc_pb');
exports.TradingHelperPb = require('../package/mt5-term-api-trading-helper_pb');
exports.TradeFunctionsGrpc = require('../package/mt5-term-api-trade-functions_grpc_pb');
exports.TradeFunctionsPb = require('../package/mt5-term-api-trade-functions_pb');
exports.SubscriptionsGrpc = require('../package/mt5-term-api-subscriptions_grpc_pb');
exports.SubscriptionsPb = require('../package/mt5-term-api-subscriptions_pb');
exports.MarketInfoGrpc = require('../package/mt5-term-api-market-info_grpc_pb');
exports.MarketInfoPb = require('../package/mt5-term-api-market-info_pb');
exports.TimestampPb = require('google-protobuf/google/protobuf/timestamp_pb');
exports.EmptyPb = require('google-protobuf/google/protobuf/empty_pb');
/** MQL5 ENUM_TIMEFRAMES values accepted by PriceHistory. */
exports.TIMEFRAMES = {
    M1: 1, M2: 2, M3: 3, M4: 4, M5: 5, M6: 6, M10: 10, M12: 12, M15: 15, M20: 20, M30: 30,
    H1: 16385, H2: 16386, H3: 16387, H4: 16388, H6: 16390, H8: 16392, H12: 16396,
    D1: 16408, W1: 32769, MN1: 49153,
};
/** Build a protobuf Timestamp from a Date or unix-seconds number. */
function toTimestamp(d) {
    const ts = new exports.TimestampPb.Timestamp();
    const ms = d instanceof Date ? d.getTime() : Number(d) * 1000;
    ts.setSeconds(Math.floor(ms / 1000));
    ts.setNanos(Math.floor((ms % 1000) * 1e6));
    return ts;
}
/**
 * Low-level MetaTrader 5 gRPC client. Construct it, `connect()`, then call the thin RPC wrappers.
 * Every method rejects with {@link MrpcError} on an API error and with the raw transport error on a
 * gRPC failure.
 */
class MT5Account {
    host;
    port;
    apiKey;
    id;
    connected = false;
    channel;
    connectionClient; // Connection
    accountClient; // AccountHelper
    accountInformationClient; // AccountInformation
    tradingClient; // TradingHelper
    tradeFunctionsClient; // TradeFunctions
    subscriptionClient; // SubscriptionService
    marketInfoClient; // MarketInfo
    /** Default deadline for unary calls, ms. */
    callTimeoutMs = 30000;
    lastServer;
    // ── statics ─────────────────────────────────────────────────────────────────
    /** RFC 4122 UUID v5 (SHA-1) — derive a stable terminal id from a strategy name. */
    static uuid5(namespace, name) {
        const nsHex = namespace.replace(/-/g, '');
        if (nsHex.length !== 32)
            throw new Error('uuid5: namespace must be a UUID');
        const nsBytes = Buffer.from(nsHex, 'hex');
        const hash = crypto.createHash('sha1').update(Buffer.concat([nsBytes, Buffer.from(name, 'utf8')])).digest();
        const b = Buffer.from(hash.subarray(0, 16));
        b[6] = (b[6] & 0x0f) | 0x50;
        b[8] = (b[8] & 0x3f) | 0x80;
        const hex = b.toString('hex');
        return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
    }
    /** Convert a UTC instant to broker server time using the shift reported by AccountSummary. */
    static serverDate(utc, utcServerShiftMinutes) {
        return new Date(utc.getTime() + utcServerShiftMinutes * 60000);
    }
    /** Opens a new demo account through the REST API and returns its credentials. */
    static async openDemoAccount(server = 'MetaQuotes-Demo', apiKey = 'TRIAL', host = 'mt5.mrpc.pro') {
        const url = `https://${host}/DemoAccount/Open?server=${encodeURIComponent(server)}`;
        const res = await fetch(url, { headers: { APIKey: apiKey } });
        if (!res.ok)
            throw new errors_1.MrpcError(`Failed to open demo account: HTTP ${res.status} ${res.statusText}`);
        const data = await res.json();
        const body = data.data || data;
        if (data.error || !body.login) {
            throw new errors_1.MrpcError(data.error?.errorMessage || `No account opened (result code ${body.resultCode})`, data.error?.errorCode || '');
        }
        return { login: Number(body.login), password: String(body.password), server: String(body.server || server) };
    }
    constructor(host = 'mt5.mrpc.pro', port = 443, apiKey = null, id = null) {
        this.host = host;
        this.port = port;
        this.apiKey = apiKey || (typeof process !== 'undefined' ? process.env.MRPC_API_KEY || 'TRIAL' : 'TRIAL');
        this.id = id || null;
        const target = `${this.host}:${this.port}`;
        const credentials = this.port === 443 ? grpc.credentials.createSsl() : grpc.credentials.createInsecure();
        // One shared channel for every client (keep-alive so idle tick streams survive NAT timeouts).
        this.channel = new grpc.Channel(target, credentials, {
            'grpc.keepalive_time_ms': 30000,
            'grpc.keepalive_timeout_ms': 10000,
            'grpc.keepalive_permit_without_calls': 1,
            'grpc.max_receive_message_length': 64 * 1024 * 1024,
        });
        const opts = { channelOverride: this.channel };
        this.connectionClient = new exports.ConnectionGrpc.ConnectionClient(target, credentials, opts);
        this.accountClient = new exports.AccountHelperGrpc.AccountHelperClient(target, credentials, opts);
        this.accountInformationClient = new exports.AccountInformationGrpc.AccountInformationClient(target, credentials, opts);
        this.tradingClient = new exports.TradingHelperGrpc.TradingHelperClient(target, credentials, opts);
        this.tradeFunctionsClient = new exports.TradeFunctionsGrpc.TradeFunctionsClient(target, credentials, opts);
        this.subscriptionClient = new exports.SubscriptionsGrpc.SubscriptionServiceClient(target, credentials, opts);
        this.marketInfoClient = new exports.MarketInfoGrpc.MarketInfoClient(target, credentials, opts);
    }
    // ── plumbing ────────────────────────────────────────────────────────────────
    /** `true` after a successful connect. */
    isConnected() { return this.connected; }
    /** The auth headers (terminal id + apikey) sent as metadata on every call. */
    getHeaders() {
        const headers = {};
        if (this.id)
            headers['id'] = this.id;
        headers['apikey'] = this.apiKey || 'TRIAL';
        return headers;
    }
    /** The same headers as gRPC {@link grpc.Metadata}. */
    getGrpcMetadata() {
        const meta = new grpc.Metadata();
        if (this.id)
            meta.set('id', this.id);
        meta.set('apikey', this.apiKey || 'TRIAL');
        return meta;
    }
    /**
     * A unary call through one of the generated clients: resolves with the reply's `data`, rejects with
     * the reply's `error` (as {@link MrpcError}) or the call's transport failure.
     */
    call(client, method, request, timeoutMs = this.callTimeoutMs) {
        return new Promise((resolve, reject) => {
            const deadline = new Date(Date.now() + timeoutMs);
            client[method](request, this.getGrpcMetadata(), { deadline }, (err, reply) => {
                if (err)
                    return reject(err);
                const error = reply?.getError?.();
                if (error)
                    return reject(errors_1.MrpcError.fromReply(error));
                resolve(typeof reply?.getData === 'function' ? reply.getData() : reply);
            });
        });
    }
    ensureConnected() {
        if (!this.connected)
            throw new errors_1.NotConnectedError();
    }
    // #region 1. CONNECTION ────────────────────────────────────────────────────────
    /**
     * The terminal id the server assigns to these credentials (Connection.GetId). Cached on `this.id`.
     */
    async getId(user, password) {
        if (this.id)
            return this.id;
        const req = new exports.ConnectionPb.GetIdRequest();
        req.setUser(String(user));
        req.setPassword(String(password));
        const data = await this.call(this.connectionClient, 'getId', req, 30000);
        if (!data?.getId())
            throw new errors_1.MrpcError('GetId returned no id');
        this.id = data.getId();
        return this.id;
    }
    /**
     * Connect by broker server name (ConnectEx) or by address (Connect). `id` (a stable GUID) is sent so
     * the gateway reuses that terminal; `name` labels it. On success `this.id` holds the terminal id.
     */
    async connect(loginOrOptions, password, server = 'MetaQuotes-Demo') {
        const options = typeof loginOrOptions === 'object'
            ? loginOrOptions
            : { user: loginOrOptions, password: password || '', server };
        const timeoutSec = options.timeoutSeconds || 60;
        const timeoutMs = (timeoutSec + 10) * 1000;
        if (options.id)
            this.id = options.id;
        let data;
        if (options.server) {
            const req = new exports.ConnectionPb.ConnectExRequest();
            req.setUser(options.user);
            req.setPassword(options.password);
            req.setMtClusterName(options.server);
            req.setTimeoutSeconds(timeoutSec);
            if (options.name)
                req.setName(options.name);
            if (options.expiration)
                req.setExpiration(options.expiration);
            data = await this.call(this.connectionClient, 'connectEx', req, timeoutMs);
        }
        else if (options.host) {
            const req = new exports.ConnectionPb.ConnectRequest();
            req.setUser(options.user);
            req.setPassword(options.password);
            req.setHost(options.host);
            req.setPort(options.port || 443);
            req.setTimeoutSeconds(timeoutSec);
            data = await this.call(this.connectionClient, 'connect', req, timeoutMs);
        }
        else {
            throw new errors_1.MrpcError('connect needs a broker server name (server) or host');
        }
        if (!data?.getTerminalInstanceGuid())
            throw new errors_1.MrpcError('Connect returned no terminal id');
        this.id = data.getTerminalInstanceGuid();
        this.lastServer = options.server || options.host;
        this.connected = true;
        return true;
    }
    /** Connect through a proxy (Connection.ConnectProxy) — pass a built `ConnectProxyRequest`. */
    async connectProxy(req) {
        const data = await this.call(this.connectionClient, 'connectProxy', req, 70000);
        if (data?.getTerminalInstanceGuid?.()) {
            this.id = data.getTerminalInstanceGuid();
            this.connected = true;
        }
        return data;
    }
    /** Verify the terminal connection (Connection.CheckConnect). */
    async checkConnect(req = new exports.ConnectionPb.CheckConnectRequest()) {
        return this.call(this.connectionClient, 'checkConnect', req, 15000);
    }
    /** Re-establish a dropped terminal (Connection.Reconnect). */
    async reconnect(req = new exports.ConnectionPb.ReconnectRequest()) {
        const data = await this.call(this.connectionClient, 'reconnect', req, 70000);
        this.connected = true;
        return data;
    }
    /** Stop the terminal on the gateway (`true` also deletes it) and close the channel. */
    async disconnect(deleteOnDisconnect = false) {
        this.connected = false;
        try {
            if (this.id) {
                const req = new exports.ConnectionPb.DisconnectRequest();
                req.setDelete(deleteOnDisconnect);
                await this.call(this.connectionClient, 'disconnect', req, 10000);
            }
        }
        finally {
            this.close();
        }
    }
    /** Close the gRPC channel without touching the terminal on the gateway. */
    close() {
        try {
            this.channel.close();
        }
        catch { /* already closed */ }
    }
    // #endregion
    // #region 2. ACCOUNT INFORMATION ───────────────────────────────────────────────
    /** All account data in one call (AccountHelper.AccountSummary) — raw AccountSummaryData. */
    async accountSummary(req = new exports.AccountHelperPb.AccountSummaryRequest()) {
        this.ensureConnected();
        return this.call(this.accountClient, 'accountSummary', req, 15000);
    }
    /** One ACCOUNT_* double property (AccountInformation.AccountInfoDouble). */
    async accountInfoDouble(propertyId) {
        this.ensureConnected();
        const req = new exports.AccountInformationPb.AccountInfoDoubleRequest();
        req.setPropertyId(propertyId);
        const d = await this.call(this.accountInformationClient, 'accountInfoDouble', req, 15000);
        return d ? d.getRequestedValue() : 0;
    }
    /** One ACCOUNT_* integer property (AccountInformation.AccountInfoInteger). */
    async accountInfoInteger(propertyId) {
        this.ensureConnected();
        const req = new exports.AccountInformationPb.AccountInfoIntegerRequest();
        req.setPropertyId(propertyId);
        const d = await this.call(this.accountInformationClient, 'accountInfoInteger', req, 15000);
        return d ? Number(d.getRequestedValue()) : 0;
    }
    /** One ACCOUNT_* string property (AccountInformation.AccountInfoString). */
    async accountInfoString(propertyId) {
        this.ensureConnected();
        const req = new exports.AccountInformationPb.AccountInfoStringRequest();
        req.setPropertyId(propertyId);
        const d = await this.call(this.accountInformationClient, 'accountInfoString', req, 15000);
        return d ? d.getRequestedValue() : '';
    }
    // #endregion
    // #region 3. SYMBOL INFORMATION & OPERATIONS ───────────────────────────────────
    /** Count of all / Market-Watch symbols (MarketInfo.SymbolsTotal). */
    async symbolsTotal(req = new exports.MarketInfoPb.SymbolsTotalRequest()) {
        this.ensureConnected();
        return this.call(this.marketInfoClient, 'symbolsTotal', req);
    }
    /** Whether a symbol exists (MarketInfo.SymbolExist) — pass a built `SymbolExistRequest`. */
    async symbolExist(req) {
        this.ensureConnected();
        return this.call(this.marketInfoClient, 'symbolExist', req);
    }
    /** Symbol name by index (MarketInfo.SymbolName) — pass a built `SymbolNameRequest`. */
    async symbolName(req) {
        this.ensureConnected();
        return this.call(this.marketInfoClient, 'symbolName', req);
    }
    /** Names of every symbol the account can see (MarketInfo.SymbolList). */
    async symbolList() {
        this.ensureConnected();
        const d = await this.call(this.marketInfoClient, 'symbolList', new exports.MarketInfoPb.SymbolListRequest());
        return d ? d.getSymbolsList() : [];
    }
    /** Add (select=true) or remove a symbol from Market Watch (MarketInfo.SymbolSelect). */
    async symbolSelect(symbol, select = true) {
        this.ensureConnected();
        const req = new exports.MarketInfoPb.SymbolSelectRequest();
        req.setSymbol(symbol);
        req.setSelect(select);
        const d = await this.call(this.marketInfoClient, 'symbolSelect', req);
        return !!(d && d.getSuccess());
    }
    /** Whether a symbol's rates are synchronized with the server (MarketInfo.SymbolIsSynchronized). */
    async symbolIsSynchronized(symbol) {
        this.ensureConnected();
        const req = new exports.MarketInfoPb.SymbolIsSynchronizedRequest();
        req.setSymbol(symbol);
        const d = await this.call(this.marketInfoClient, 'symbolIsSynchronized', req);
        return !!(d && d.getSynchronized());
    }
    /** One SYMBOL_* double property (MarketInfo.SymbolInfoDouble) — pass a built request. */
    async symbolInfoDouble(req) {
        this.ensureConnected();
        return this.call(this.marketInfoClient, 'symbolInfoDouble', req);
    }
    /** One SYMBOL_* integer property (MarketInfo.SymbolInfoInteger) — pass a built request. */
    async symbolInfoInteger(req) {
        this.ensureConnected();
        return this.call(this.marketInfoClient, 'symbolInfoInteger', req);
    }
    /** One SYMBOL_* string property (MarketInfo.SymbolInfoString) — pass a built request. */
    async symbolInfoString(req) {
        this.ensureConnected();
        return this.call(this.marketInfoClient, 'symbolInfoString', req);
    }
    /** Margin rates for a symbol's order types (MarketInfo.SymbolInfoMarginRate) — pass a built request. */
    async symbolInfoMarginRate(req) {
        this.ensureConnected();
        return this.call(this.marketInfoClient, 'symbolInfoMarginRate', req);
    }
    /** Current tick of a symbol (MarketInfo.SymbolInfoTick) — raw MrpcMqlTick. */
    async symbolInfoTick(symbol) {
        this.ensureConnected();
        const req = new exports.MarketInfoPb.SymbolInfoTickRequest();
        req.setSymbol(symbol);
        const t = await this.call(this.marketInfoClient, 'symbolInfoTick', req);
        if (!t)
            throw new errors_1.MrpcError(`SymbolInfoTick returned no data for ${symbol}`);
        return t;
    }
    /** Quote-session times of a symbol (MarketInfo.SymbolInfoSessionQuote) — pass a built request. */
    async symbolInfoSessionQuote(req) {
        this.ensureConnected();
        return this.call(this.marketInfoClient, 'symbolInfoSessionQuote', req);
    }
    /** Trade-session times of a symbol (MarketInfo.SymbolInfoSessionTrade) — pass a built request. */
    async symbolInfoSessionTrade(req) {
        this.ensureConnected();
        return this.call(this.marketInfoClient, 'symbolInfoSessionTrade', req);
    }
    /**
     * Full contract spec of one or all symbols (AccountHelper.SymbolParamsMany) — raw data.
     * With `symbol` omitted it returns every symbol (one unfiltered call; paging is unreliable).
     */
    async symbolParamsMany(symbol, timeoutMs = 120000) {
        this.ensureConnected();
        const req = new exports.AccountHelperPb.SymbolParamsManyRequest();
        if (symbol)
            req.setSymbolName(symbol);
        return this.call(this.accountClient, 'symbolParamsMany', req, timeoutMs);
    }
    /**
     * OHLC history (MarketInfo.PriceHistory) — raw data. `from`/`to` are unix seconds in the broker's
     * server timezone; with both omitted it returns the newest `maxBars` bars (default 500).
     */
    async priceHistory(symbol, timeframe, opts = {}) {
        this.ensureConnected();
        const tf = typeof timeframe === 'number' ? timeframe : exports.TIMEFRAMES[timeframe];
        if (!tf)
            throw new errors_1.MrpcError(`priceHistory: unknown timeframe ${timeframe}`);
        const req = new exports.MarketInfoPb.PriceHistoryRequest();
        req.setSymbol(symbol);
        req.setTimeframe(tf);
        const secs = (d) => d === undefined ? 0 : (d instanceof Date ? Math.floor(d.getTime() / 1000) : Math.floor(Number(d)));
        req.setFromTime(secs(opts.from));
        req.setToTime(secs(opts.to));
        if (opts.maxBars)
            req.setMaxBars(opts.maxBars);
        return this.call(this.marketInfoClient, 'priceHistory', req, 60000);
    }
    /** Tick value / tick size / contract size for several symbols (AccountHelper.TickValueWithSize). */
    async tickValueWithSize(req) {
        this.ensureConnected();
        return this.call(this.accountClient, 'tickValueWithSize', req);
    }
    // #endregion
    // #region 4. POSITIONS & ORDERS INFORMATION ────────────────────────────────────
    /** Number of open positions (TradeFunctions.PositionsTotal). Request is `google.protobuf.Empty`. */
    async positionsTotal() {
        this.ensureConnected();
        return this.call(this.tradeFunctionsClient, 'positionsTotal', new exports.EmptyPb.Empty(), 15000);
    }
    /** Open positions and pending orders with full detail (AccountHelper.OpenedOrders) — raw data. */
    async openedOrders(req = new exports.AccountHelperPb.OpenedOrdersRequest()) {
        this.ensureConnected();
        return this.call(this.accountClient, 'openedOrders', req);
    }
    /** Just the ticket numbers of open orders/positions (AccountHelper.OpenedOrdersTickets). */
    async openedOrdersTickets(req = new exports.AccountHelperPb.OpenedOrdersTicketsRequest()) {
        this.ensureConnected();
        return this.call(this.accountClient, 'openedOrdersTickets', req);
    }
    /** Closed orders + deals in a window (AccountHelper.OrderHistory) — raw data. Times are server time. */
    async orderHistory(from, to, opts = {}) {
        this.ensureConnected();
        const req = new exports.AccountHelperPb.OrderHistoryRequest();
        req.setInputfrom(toTimestamp(from));
        req.setInputto(toTimestamp(to));
        req.setInputsortmode(opts.sort ?? exports.AccountHelperPb.BMT5_ENUM_ORDER_HISTORY_SORT_TYPE.BMT5_SORT_BY_CLOSE_TIME_DESC);
        if (opts.page)
            req.setPagenumber(opts.page);
        if (opts.perPage)
            req.setItemsperpage(opts.perPage);
        return this.call(this.accountClient, 'orderHistory', req, 60000);
    }
    /** Closed positions whose OPEN time is in the window (AccountHelper.PositionsHistory) — raw data. */
    async positionsHistory(from, to, opts = {}) {
        this.ensureConnected();
        const req = new exports.AccountHelperPb.PositionsHistoryRequest();
        req.setSortType(opts.sort ?? exports.AccountHelperPb.AH_ENUM_POSITIONS_HISTORY_SORT_TYPE.AH_POSITION_OPEN_TIME_DESC);
        req.setPositionOpenTimeFrom(toTimestamp(from));
        req.setPositionOpenTimeTo(toTimestamp(to));
        if (opts.page)
            req.setPageNumber(opts.page);
        if (opts.perPage)
            req.setItemsPerPage(opts.perPage);
        return this.call(this.accountClient, 'positionsHistory', req, 60000);
    }
    // #endregion
    // #region 5. MARKET DEPTH / DOM ────────────────────────────────────────────────
    /** Subscribe to Depth-of-Market updates for a symbol (MarketInfo.MarketBookAdd) — pass a built request. */
    async marketBookAdd(req) {
        this.ensureConnected();
        return this.call(this.marketInfoClient, 'marketBookAdd', req);
    }
    /** Unsubscribe from DOM for a symbol (MarketInfo.MarketBookRelease) — pass a built request. */
    async marketBookRelease(req) {
        this.ensureConnected();
        return this.call(this.marketInfoClient, 'marketBookRelease', req);
    }
    /** Current market-depth snapshot (MarketInfo.MarketBookGet) — pass a built request. */
    async marketBookGet(req) {
        this.ensureConnected();
        return this.call(this.marketInfoClient, 'marketBookGet', req);
    }
    // #endregion
    // #region 6. TRADING OPERATIONS ────────────────────────────────────────────────
    /**
     * A trade call through `call()`: sent exactly once, never re-sent. An error reply gets the trade call tagged in
     * its `operation`; a transport failure after which the trade may have executed becomes a `TradeOutcomeUnknownError`
     * (same gRPC `code`), so the caller can tell a trade whose outcome is unknown from a plain read failure.
     */
    async tradeCall(operation, method, request, timeoutMs) {
        try {
            return await this.call(this.tradingClient, method, request, timeoutMs);
        }
        catch (err) {
            if (err instanceof errors_1.MrpcError) {
                err.operation = operation;
            }
            else if (err && errors_1.TradeOutcomeUnknownError.isUnknownOutcome(err.code) && !(0, errors_1.isApiKeyText)(`${err.details ?? ''} ${err.message ?? ''}`)) {
                throw new errors_1.TradeOutcomeUnknownError(operation, err);
            }
            throw err;
        }
    }
    /** Place a market or pending order (TradingHelper.OrderSend) — pass a built `OrderSendRequest`. */
    async orderSend(req) {
        this.ensureConnected();
        const d = await this.tradeCall('OrderSend', 'orderSend', req, 60000);
        if (!d)
            throw new errors_1.MrpcError('OrderSend returned no data');
        return d;
    }
    /** Modify SL/TP/price/expiration of a position or pending order (TradingHelper.OrderModify). */
    async orderModify(req) {
        this.ensureConnected();
        const d = await this.tradeCall('OrderModify', 'orderModify', req, 60000);
        if (!d)
            throw new errors_1.MrpcError('OrderModify returned no data');
        return d;
    }
    /** Close a position (full/partial) or delete a pending order (TradingHelper.OrderClose). */
    async orderClose(req) {
        this.ensureConnected();
        const d = await this.tradeCall('OrderClose', 'orderClose', req, 60000);
        if (!d)
            throw new errors_1.MrpcError('OrderClose returned no data');
        return d;
    }
    /** Validate an order before sending it (TradeFunctions.OrderCheck) — pass a built `OrderCheckRequest`. */
    async orderCheck(req) {
        this.ensureConnected();
        return this.call(this.tradeFunctionsClient, 'orderCheck', req, 30000);
    }
    /** Required margin for a prospective order (TradeFunctions.OrderCalcMargin). */
    async orderCalcMargin(req) {
        this.ensureConnected();
        return this.call(this.tradeFunctionsClient, 'orderCalcMargin', req, 30000);
    }
    /** Profit of a prospective trade (TradeFunctions.OrderCalcProfit). */
    async orderCalcProfit(req) {
        this.ensureConnected();
        return this.call(this.tradeFunctionsClient, 'orderCalcProfit', req, 30000);
    }
    // #endregion
    // #region 7. STREAMING METHODS ─────────────────────────────────────────────────
    /** Stream live ticks (SubscriptionService.OnSymbolTick) — raw OnSymbolTickData per tick. */
    onSymbolTick(symbols, callback, onError) {
        const req = new exports.SubscriptionsPb.OnSymbolTickRequest();
        req.setSymbolNamesList(symbols || []);
        return this.openStream('onSymbolTick', req, callback, onError, 'tick');
    }
    /** Stream trade events (SubscriptionService.OnTrade) — raw OnTradeData per event. */
    onTrade(callback, onError) {
        return this.openStream('onTrade', new exports.SubscriptionsPb.OnTradeRequest(), callback, onError, 'trade');
    }
    /** Stream periodic position P&L updates (SubscriptionService.OnPositionProfit). */
    onPositionProfit(req, callback, onError) {
        return this.openStream('onPositionProfit', req ?? new exports.SubscriptionsPb.OnPositionProfitRequest(), callback, onError, 'position-profit');
    }
    /** Stream periodic ticket snapshots (SubscriptionService.OnPositionsAndPendingOrdersTickets). */
    onPositionsAndPendingOrdersTickets(req, callback, onError) {
        return this.openStream('onPositionsAndPendingOrdersTickets', req ?? new exports.SubscriptionsPb.OnPositionsAndPendingOrdersTicketsRequest(), callback, onError, 'tickets');
    }
    /** Stream trade-transaction events (SubscriptionService.OnTradeTransaction). */
    onTradeTransaction(callback, onError) {
        return this.openStream('onTradeTransaction', new exports.SubscriptionsPb.OnTradeTransactionRequest(), callback, onError, 'transaction');
    }
    /** Open a server stream on the subscription client and forward each reply's `data` to the callback. */
    openStream(method, req, callback, onError, label) {
        const stream = this.subscriptionClient[method](req, this.getGrpcMetadata());
        let cancelled = false;
        stream.on('data', (reply) => {
            const error = reply.getError?.();
            if (error) {
                onError?.(errors_1.MrpcError.fromReply(error));
                return;
            }
            const data = reply.getData?.();
            if (data)
                callback(data);
        });
        stream.on('error', (err) => {
            if (cancelled && err?.code === grpc.status.CANCELLED)
                return;
            onError?.(err);
        });
        stream.on('end', () => { if (!cancelled)
            onError?.(new errors_1.MrpcError(`${label} stream ended`)); });
        return { unsubscribe: () => { cancelled = true; stream.cancel(); } };
    }
}
exports.MT5Account = MT5Account;

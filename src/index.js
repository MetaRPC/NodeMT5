"use strict";
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
exports.MT5Client = exports.MT5Error = exports.MrpcError = exports.TIMEFRAMES = exports.TimestampPb = exports.TradeFunctionsPb = exports.TradeFunctionsGrpc = exports.MarketInfoPb = exports.MarketInfoGrpc = exports.SubscriptionsPb = exports.SubscriptionsGrpc = exports.TradingHelperPb = exports.TradingHelperGrpc = exports.AccountInformationPb = exports.AccountInformationGrpc = exports.AccountHelperPb = exports.AccountHelperGrpc = exports.ConnectionPb = exports.ConnectionGrpc = void 0;
const grpc = __importStar(require("@grpc/grpc-js"));
const crypto = __importStar(require("crypto"));
// Low-level gRPC and Protobuf bindings (generated from the MetaRPC MT5 protos)
exports.ConnectionGrpc = require('../package/mt5-term-api-connection_grpc_pb');
exports.ConnectionPb = require('../package/mt5-term-api-connection_pb');
exports.AccountHelperGrpc = require('../package/mt5-term-api-account-helper_grpc_pb');
exports.AccountHelperPb = require('../package/mt5-term-api-account-helper_pb');
exports.AccountInformationGrpc = require('../package/mt5-term-api-account-information_grpc_pb');
exports.AccountInformationPb = require('../package/mt5-term-api-account-information_pb');
exports.TradingHelperGrpc = require('../package/mt5-term-api-trading-helper_grpc_pb');
exports.TradingHelperPb = require('../package/mt5-term-api-trading-helper_pb');
exports.SubscriptionsGrpc = require('../package/mt5-term-api-subscriptions_grpc_pb');
exports.SubscriptionsPb = require('../package/mt5-term-api-subscriptions_pb');
exports.MarketInfoGrpc = require('../package/mt5-term-api-market-info_grpc_pb');
exports.MarketInfoPb = require('../package/mt5-term-api-market-info_pb');
exports.TradeFunctionsGrpc = require('../package/mt5-term-api-trade-functions_grpc_pb');
exports.TradeFunctionsPb = require('../package/mt5-term-api-trade-functions_pb');
exports.TimestampPb = require('google-protobuf/google/protobuf/timestamp_pb');
/** MQL5 ENUM_TIMEFRAMES values accepted by PriceHistory. */
exports.TIMEFRAMES = {
    M1: 1, M2: 2, M3: 3, M4: 4, M5: 5, M6: 6, M10: 10, M12: 12, M15: 15, M20: 20, M30: 30,
    H1: 16385, H2: 16386, H3: 16387, H4: 16388, H6: 16390, H8: 16392, H12: 16396,
    D1: 16408, W1: 32769, MN1: 49153,
};
/**
 * An error the MRPC API answered with (the reply's `error`), or a failed call. `error` is the reply's error message
 * itself (absent for a failed call): `getMqlErrorCode()`, `getMqlErrorTradeIntCode()` and the rest of its fields.
 * The MQL and trade codes of an error reply are also exposed as `mqlCode`, `mqlDescription`, `tradeCode`,
 * `tradeDescription`.
 */
class MrpcError extends Error {
    code;
    error;
    mqlCode;
    mqlDescription;
    tradeCode;
    tradeDescription;
    constructor(message, code = '', error) {
        super(code ? `${code}: ${message}` : message);
        this.code = code;
        this.error = error;
        this.name = 'MrpcError';
        const str = (getter) => (error && typeof error[getter] === 'function') ? String(error[getter]() ?? '') : '';
        this.mqlCode = str('getMqlErrorCode');
        this.mqlDescription = str('getMqlErrorDescription');
        this.tradeCode = str('getMqlErrorTradeCode');
        this.tradeDescription = str('getMqlErrorTradeDescription');
    }
    /** Builds the error of an error reply (the reply's `error` message). */
    static fromReply(error) {
        const message = error.getErrorMessage?.() || error.getMqlErrorDescription?.() || error.getMqlErrorTradeDescription?.() || 'request failed';
        return new MrpcError(message, error.getErrorCode?.() || '', error);
    }
    /** INVALID_LOGIN / wrong password errors must never be retried (brokers lock accounts). */
    get isInvalidLogin() {
        const s = `${this.code} ${this.message}`.toUpperCase();
        return s.includes('INVALID_LOGIN') || s.includes('WRONG_PASSWORD') || s.includes('INVALID_ACCOUNT');
    }
}
exports.MrpcError = MrpcError;
/** The name the fleet audit used for `MrpcError`. */
exports.MT5Error = MrpcError;
const ORDER_TYPES = {
    BUY: exports.TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY,
    SELL: exports.TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_SELL,
    BUY_LIMIT: exports.TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY_LIMIT,
    SELL_LIMIT: exports.TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_SELL_LIMIT,
    BUY_STOP: exports.TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY_STOP,
    SELL_STOP: exports.TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_SELL_STOP,
    BUY_STOP_LIMIT: exports.TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY_STOP_LIMIT,
    SELL_STOP_LIMIT: exports.TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_SELL_STOP_LIMIT,
};
const tsToSeconds = (ts) => (ts && ts.getSeconds ? Number(ts.getSeconds()) : 0);
const tsToMs = (ts) => (ts && ts.getSeconds ? Number(ts.getSeconds()) * 1000 + Math.floor(Number(ts.getNanos() || 0) / 1e6) : 0);
const toTimestamp = (d) => {
    const ts = new exports.TimestampPb.Timestamp();
    const ms = d instanceof Date ? d.getTime() : Number(d) * 1000;
    ts.setSeconds(Math.floor(ms / 1000));
    ts.setNanos(Math.floor((ms % 1000) * 1e6));
    return ts;
};
/** A tick's time in ms: the UTC fields when the server fills them, the server-time ones otherwise. */
const tickTimeMs = (t) => Number(t.getTimeMscUtc?.()) || tsToMs(t.getTimeUtc?.()) || Number(t.getTimeMsc?.()) || tsToSeconds(t.getTime?.()) * 1000;
const mapTick = (symbol, t) => ({
    symbol: t.getSymbol?.() || symbol,
    bid: t.getBid(),
    ask: t.getAsk(),
    last: t.getLast(),
    volume: Number(t.getVolumeReal ? t.getVolumeReal() : t.getVolume()),
    time: tickTimeMs(t),
    flags: Number(t.getFlags()),
});
class MT5Client {
    host;
    port;
    apiKey;
    id;
    connected = false;
    channel;
    connectionClient;
    accountClient;
    accountInformationClient;
    tradingClient;
    subscriptionClient;
    marketInfoClient;
    tradeFunctionsClient;
    /** Default deadline for unary calls, ms. */
    callTimeoutMs = 30000;
    lastServer;
    /** RFC 4122 UUID v5 (SHA-1) - use it to derive a stable terminal id from a strategy name. */
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
    /**
     * Opens a new demo account through the API (GET /DemoAccount/Open) and returns its credentials.
     * @param host the REST host of the platform, e.g. "mt5.mrpc.pro"
     */
    static async openDemoAccount(server = 'MetaQuotes-Demo', apiKey = 'TRIAL', host = 'mt5.mrpc.pro') {
        const url = `https://${host}/DemoAccount/Open?server=${encodeURIComponent(server)}`;
        const res = await fetch(url, { headers: { APIKey: apiKey } });
        if (!res.ok) {
            throw new MrpcError(`Failed to open demo account: HTTP ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        const body = data.data || data;
        if (data.error || !body.login) {
            throw new MrpcError(data.error?.errorMessage || `No account opened (result code ${body.resultCode})`, data.error?.errorCode || '');
        }
        return { login: Number(body.login), password: String(body.password), server: String(body.server || server) };
    }
    constructor(host = 'mt5.mrpc.pro', port = 443, apiKey = null, id = null) {
        this.host = host;
        this.port = port;
        this.apiKey = apiKey || (typeof process !== 'undefined' ? process.env.MRPC_API_KEY || 'TRIAL' : 'TRIAL');
        this.id = id || null;
        const target = `${this.host}:${this.port}`;
        const credentials = this.port === 443
            ? grpc.credentials.createSsl()
            : grpc.credentials.createInsecure();
        // One shared channel for every service client (keep-alive so idle tick streams survive NAT timeouts).
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
        this.subscriptionClient = new exports.SubscriptionsGrpc.SubscriptionServiceClient(target, credentials, opts);
        this.marketInfoClient = new exports.MarketInfoGrpc.MarketInfoClient(target, credentials, opts);
        this.tradeFunctionsClient = new exports.TradeFunctionsGrpc.TradeFunctionsClient(target, credentials, opts);
    }
    getHeaders() {
        const headers = {};
        if (this.id)
            headers['id'] = this.id;
        headers['apikey'] = this.apiKey || 'TRIAL';
        return headers;
    }
    getGrpcMetadata() {
        const meta = new grpc.Metadata();
        if (this.id)
            meta.set('id', this.id);
        meta.set('apikey', this.apiKey || 'TRIAL');
        return meta;
    }
    /**
     * A unary call `client[method](request, metadata, {deadline}, cb)` through one of the exported generated clients:
     * resolves with the reply's data, rejects with the reply's error (`MrpcError`) or the call's failure.
     */
    call(client, method, request, timeoutMs = this.callTimeoutMs) {
        return new Promise((resolve, reject) => {
            const deadline = new Date(Date.now() + timeoutMs);
            client[method](request, this.getGrpcMetadata(), { deadline }, (err, reply) => {
                if (err)
                    return reject(err);
                const error = reply?.getError?.();
                if (error)
                    return reject(MrpcError.fromReply(error));
                resolve(typeof reply?.getData === 'function' ? reply.getData() : reply);
            });
        });
    }
    /** The terminal id the server assigns to these credentials (Connection.GetId). */
    async getId(user, password) {
        if (this.id)
            return this.id;
        const req = new exports.ConnectionPb.GetIdRequest();
        req.setUser(String(user));
        req.setPassword(String(password));
        const data = await this.call(this.connectionClient, 'getId', req, 30000);
        if (!data?.getId())
            throw new MrpcError('GetId returned no id');
        this.id = data.getId();
        return this.id;
    }
    /**
     * Connects by broker server name (ConnectEx: `server`, e.g. "MetaQuotes-Demo") or by address (Connect: `host`/`port`).
     * `id` (a stable GUID) is sent with the call so the gateway reuses that terminal; `name` labels it in the Accounts
     * listing. On success `id` is the terminal id the server answered with.
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
            throw new MrpcError('connect needs a broker server name (server) or host');
        }
        if (!data?.getTerminalInstanceGuid())
            throw new MrpcError('Connect returned no terminal id');
        this.id = data.getTerminalInstanceGuid();
        this.lastServer = options.server || options.host;
        this.connected = true;
        return true;
    }
    static tradeModeName(code) {
        switch (code) {
            case 0: return 'DEMO';
            case 1: return 'CONTEST';
            case 2: return 'REAL';
            default: return 'UNKNOWN';
        }
    }
    async getAccountInfo() {
        const doubleOf = (property) => {
            const req = new exports.AccountInformationPb.AccountInfoDoubleRequest();
            req.setPropertyId(exports.AccountInformationPb.AccountInfoDoublePropertyType[property]);
            return this.call(this.accountInformationClient, 'accountInfoDouble', req, 15000).then((d) => d.getRequestedValue());
        };
        const serverReq = new exports.AccountInformationPb.AccountInfoStringRequest();
        serverReq.setPropertyId(exports.AccountInformationPb.AccountInfoStringPropertyType.ACCOUNT_SERVER);
        const [summary, margin, freeMargin, marginLevel, server] = await Promise.all([
            this.call(this.accountClient, 'accountSummary', new exports.AccountHelperPb.AccountSummaryRequest(), 15000),
            doubleOf('ACCOUNT_MARGIN'),
            doubleOf('ACCOUNT_MARGIN_FREE'),
            doubleOf('ACCOUNT_MARGIN_LEVEL'),
            this.call(this.accountInformationClient, 'accountInfoString', serverReq, 15000).then((d) => d.getRequestedValue()),
        ]);
        if (!summary)
            throw new MrpcError('AccountSummary returned no data');
        const code = summary.getAccountTradeMode();
        return {
            login: summary.getAccountLogin(),
            currency: summary.getAccountCurrency(),
            balance: summary.getAccountBalance(),
            equity: summary.getAccountEquity(),
            credit: summary.getAccountCredit(),
            margin,
            freeMargin,
            marginLevel,
            leverage: summary.getAccountLeverage(),
            name: summary.getAccountUserName(),
            server: server || this.lastServer || '',
            company: summary.getAccountCompanyName(),
            tradeMode: MT5Client.tradeModeName(code),
            tradeModeCode: code,
            serverTime: tsToSeconds(summary.getServerTime()),
            utcServerShiftMinutes: summary.getUtcTimezoneServerTimeShiftMinutes(),
        };
    }
    // ------------------------------------------------------------------ symbols
    /** Add (select=true) or remove a symbol from Market Watch. */
    async symbolSelect(symbol, select = true) {
        const req = new exports.MarketInfoPb.SymbolSelectRequest();
        req.setSymbol(symbol);
        req.setSelect(select);
        const data = await this.call(this.marketInfoClient, 'symbolSelect', req);
        return !!(data && data.getSuccess());
    }
    async symbolIsSynchronized(symbol) {
        const req = new exports.MarketInfoPb.SymbolIsSynchronizedRequest();
        req.setSymbol(symbol);
        const data = await this.call(this.marketInfoClient, 'symbolIsSynchronized', req);
        return !!(data && data.getSynchronized());
    }
    /** Names of every symbol the account can see (SymbolList). */
    async symbolList() {
        const req = new exports.MarketInfoPb.SymbolListRequest();
        const data = await this.call(this.marketInfoClient, 'symbolList', req);
        return data ? data.getSymbolsList() : [];
    }
    /** Current tick (the only reliable price source - SymbolParamsMany prices can be stale). */
    async symbolInfoTick(symbol) {
        const req = new exports.MarketInfoPb.SymbolInfoTickRequest();
        req.setSymbol(symbol);
        const t = await this.call(this.marketInfoClient, 'symbolInfoTick', req);
        if (!t)
            throw new MrpcError(`SymbolInfoTick returned no data for ${symbol}`);
        return mapTick(symbol, t);
    }
    static mapSymbolParams(s) {
        return {
            name: s.getName(),
            digits: s.getDigits(),
            point: s.getPoint(),
            bid: s.getBid(),
            ask: s.getAsk(),
            spread: s.getSpread(),
            contractSize: s.getTradeContractSize(),
            tickSize: s.getTradeTickSize(),
            tickValue: s.getTradeTickValue(),
            volumeMin: s.getVolumeMin(),
            volumeMax: s.getVolumeMax(),
            volumeStep: s.getVolumeStep(),
            volumeLimit: s.getVolumeLimit(),
            swapLong: s.getSwapLong(),
            swapShort: s.getSwapShort(),
            stopsLevel: s.getTradeStopsLevel(),
            freezeLevel: s.getTradeFreezeLevel(),
            tradeMode: s.getTradeMode(),
            tradeCalcMode: s.getTradeCalcMode(),
            tradeExeMode: s.getTradeExeMode(),
            fillingModes: s.getFillingModeList ? s.getFillingModeList() : [],
            currencyBase: s.getCurrencyBase(),
            currencyProfit: s.getCurrencyProfit(),
            currencyMargin: s.getCurrencyMargin(),
            description: s.getSymDescription(),
            path: s.getPath(),
            visible: !!s.getVisible(),
            selected: !!s.getSelect(),
            exists: !!s.getExist(),
        };
    }
    /** Contract specification of one symbol (SymbolParamsMany filtered by name). */
    async symbolParams(symbol) {
        const req = new exports.AccountHelperPb.SymbolParamsManyRequest();
        req.setSymbolName(symbol);
        const data = await this.call(this.accountClient, 'symbolParamsMany', req);
        const list = data ? data.getSymbolInfosList() : [];
        const hit = list.find((s) => s.getName() === symbol) || list[0];
        if (!hit)
            throw new MrpcError(`SymbolParamsMany: symbol ${symbol} not found`);
        return MT5Client.mapSymbolParams(hit);
    }
    /** Contract specification of every symbol (one unfiltered call - paging is unreliable). */
    async symbolParamsAll() {
        const req = new exports.AccountHelperPb.SymbolParamsManyRequest();
        const data = await this.call(this.accountClient, 'symbolParamsMany', req, 120000);
        return data ? data.getSymbolInfosList().map(MT5Client.mapSymbolParams) : [];
    }
    /**
     * Make sure a symbol is in Market Watch and has a two-sided quote. Returns the first usable tick.
     * A freshly added symbol reports bid/ask 0 until synchronized, so we poll briefly.
     */
    async ensureSymbol(symbol, waitMs = 10000) {
        await this.symbolSelect(symbol, true);
        const until = Date.now() + waitMs;
        let last = null;
        while (Date.now() < until) {
            try {
                last = await this.symbolInfoTick(symbol);
                if (last.bid > 0 && last.ask > 0)
                    return last;
            }
            catch { /* not synchronized yet */ }
            await new Promise(r => setTimeout(r, 500));
        }
        if (last)
            return last;
        throw new MrpcError(`ensureSymbol: no quote for ${symbol} within ${waitMs} ms`);
    }
    // --------------------------------------------------------------------- bars
    /**
     * OHLC history. With from/to omitted, returns the newest `maxBars` bars (default 500).
     * Times are seconds since epoch in the broker's server timezone.
     */
    async priceHistory(symbol, timeframe, opts = {}) {
        const tf = typeof timeframe === 'number' ? timeframe : exports.TIMEFRAMES[timeframe];
        if (!tf)
            throw new MrpcError(`priceHistory: unknown timeframe ${timeframe}`);
        const req = new exports.MarketInfoPb.PriceHistoryRequest();
        req.setSymbol(symbol);
        req.setTimeframe(tf);
        const secs = (d) => d === undefined ? 0 : (d instanceof Date ? Math.floor(d.getTime() / 1000) : Math.floor(Number(d)));
        req.setFromTime(secs(opts.from));
        req.setToTime(secs(opts.to));
        if (opts.maxBars)
            req.setMaxBars(opts.maxBars);
        const data = await this.call(this.marketInfoClient, 'priceHistory', req, 60000);
        const bars = data ? data.getBarsList() : [];
        return bars.map((b) => ({
            time: Number(b.getTime()),
            open: b.getOpen(), high: b.getHigh(), low: b.getLow(), close: b.getClose(),
            tickVolume: Number(b.getTickVolume()), spread: Number(b.getSpread()), realVolume: Number(b.getRealVolume()),
        }));
    }
    // ------------------------------------------------------------------- trading
    static mapOrderResult(data) {
        const order = Number(data.getOrder());
        const deal = Number(data.getDeal());
        return {
            ticket: order || deal,
            retcode: data.getReturnedCode(),
            retcodeDescription: data.getReturnedCodeDescription(),
            deal,
            order,
            volume: data.getVolume(),
            price: data.getPrice(),
            bid: data.getBid(),
            ask: data.getAsk(),
            comment: data.getComment(),
            requestId: Number(data.getRequestId()),
        };
    }
    /**
     * Market or pending order. An error reply rejects with `MrpcError`; a broker rejection is in the result
     * (`retcode` is 10009 when done).
     */
    async orderSend(req) {
        if (!(req.action in ORDER_TYPES))
            throw new MrpcError(`Unknown order action ${req.action}`);
        const grpcReq = new exports.TradingHelperPb.OrderSendRequest();
        grpcReq.setSymbol(req.symbol);
        grpcReq.setOperation(ORDER_TYPES[req.action]);
        grpcReq.setVolume(req.volume);
        if (req.price !== undefined)
            grpcReq.setPrice(req.price);
        if (req.stopLoss !== undefined)
            grpcReq.setStopLoss(req.stopLoss);
        if (req.takeProfit !== undefined)
            grpcReq.setTakeProfit(req.takeProfit);
        if (req.comment !== undefined)
            grpcReq.setComment(req.comment);
        if (req.slippage !== undefined)
            grpcReq.setSlippage(req.slippage);
        if (req.magic !== undefined)
            grpcReq.setExpertId(req.magic);
        if (req.stopLimitPrice !== undefined)
            grpcReq.setStopLimitPrice(req.stopLimitPrice);
        if (req.expirationTimeType !== undefined)
            grpcReq.setExpirationTimeType(req.expirationTimeType);
        if (req.expirationTime)
            grpcReq.setExpirationTime(toTimestamp(req.expirationTime));
        if (req.quotesWaitMs !== undefined)
            grpcReq.setQuotesWaitMs(req.quotesWaitMs);
        const data = await this.call(this.tradingClient, 'orderSend', grpcReq, 60000);
        if (!data)
            throw new MrpcError('Order execution returned no data');
        return MT5Client.mapOrderResult(data);
    }
    /** Change SL/TP of a position, or SL/TP/price/expiration of a pending order. */
    async orderModify(req) {
        const grpcReq = new exports.TradingHelperPb.OrderModifyRequest();
        grpcReq.setTicket(req.ticket);
        if (req.stopLoss !== undefined)
            grpcReq.setStopLoss(req.stopLoss);
        if (req.takeProfit !== undefined)
            grpcReq.setTakeProfit(req.takeProfit);
        if (req.price !== undefined)
            grpcReq.setPrice(req.price);
        if (req.stopLimit !== undefined)
            grpcReq.setStopLimit(req.stopLimit);
        if (req.expirationTimeType !== undefined)
            grpcReq.setExpirationTimeType(req.expirationTimeType);
        if (req.expirationTime)
            grpcReq.setExpirationTime(toTimestamp(req.expirationTime));
        const data = await this.call(this.tradingClient, 'orderModify', grpcReq, 60000);
        if (!data)
            throw new MrpcError('OrderModify returned no data');
        return MT5Client.mapOrderResult(data);
    }
    /** Close a position (fully or partially) or delete a pending order. */
    async orderClose(req) {
        const grpcReq = new exports.TradingHelperPb.OrderCloseRequest();
        grpcReq.setTicket(req.ticket);
        if (req.volume !== undefined)
            grpcReq.setVolume(req.volume);
        if (req.slippage !== undefined)
            grpcReq.setSlippage(req.slippage);
        const data = await this.call(this.tradingClient, 'orderClose', grpcReq, 60000);
        if (!data)
            throw new MrpcError('OrderClose returned no data');
        return {
            retcode: data.getReturnedCode(),
            retcodeDescription: data.getReturnedCodeDescription(),
            closeMode: data.getCloseMode(),
        };
    }
    /** Open positions and pending orders. */
    async openedOrders() {
        const req = new exports.AccountHelperPb.OpenedOrdersRequest();
        const data = await this.call(this.accountClient, 'openedOrders', req);
        const positions = (data ? data.getPositionInfosList() : []).map((p) => ({
            ticket: Number(p.getTicket()),
            symbol: p.getSymbol(),
            type: p.getType(),
            volume: p.getVolume(),
            priceOpen: p.getPriceOpen(),
            priceCurrent: p.getPriceCurrent(),
            stopLoss: p.getStopLoss(),
            takeProfit: p.getTakeProfit(),
            swap: p.getSwap(),
            profit: p.getProfit(),
            commission: p.getPositionCommission ? p.getPositionCommission() : 0,
            magic: Number(p.getMagicNumber()),
            comment: p.getComment(),
            openTime: tsToSeconds(p.getOpenTime()),
            identifier: Number(p.getIdentifier()),
        }));
        const orders = (data ? data.getOpenedOrdersList() : []).map((o) => ({
            ticket: Number(o.getTicket()),
            symbol: o.getSymbol(),
            type: o.getType(),
            state: o.getState(),
            volumeInitial: o.getVolumeInitial(),
            volumeCurrent: o.getVolumeCurrent(),
            priceOpen: o.getPriceOpen(),
            priceCurrent: o.getPriceCurrent(),
            stopLoss: o.getStopLoss(),
            takeProfit: o.getTakeProfit(),
            stopLimit: o.getStopLimit(),
            magic: Number(o.getMagicNumber()),
            comment: o.getComment(),
            timeSetup: tsToSeconds(o.getTimeSetup()),
            timeExpiration: tsToSeconds(o.getTimeExpiration()),
            positionId: Number(o.getPositionId()),
        }));
        return { positions, orders };
    }
    /** Open positions, optionally only those carrying a given magic number. */
    async positions(magic) {
        const { positions } = await this.openedOrders();
        return magic === undefined ? positions : positions.filter(p => p.magic === magic);
    }
    // ------------------------------------------------------------------- history
    /**
     * Closed orders + deals in a window. `from`/`to` are SERVER time (broker timezone); use
     * `serverDate()` to build them from UTC.
     */
    async orderHistory(from, to, opts = {}) {
        const req = new exports.AccountHelperPb.OrderHistoryRequest();
        req.setInputfrom(toTimestamp(from));
        req.setInputto(toTimestamp(to));
        req.setInputsortmode(opts.sort ?? exports.AccountHelperPb.BMT5_ENUM_ORDER_HISTORY_SORT_TYPE.BMT5_SORT_BY_CLOSE_TIME_DESC);
        if (opts.page)
            req.setPagenumber(opts.page);
        if (opts.perPage)
            req.setItemsperpage(opts.perPage);
        const data = await this.call(this.accountClient, 'orderHistory', req, 60000);
        const orders = [];
        const deals = [];
        for (const h of (data ? data.getHistoryDataList() : [])) {
            const o = h.getHistoryOrder && h.getHistoryOrder();
            if (o) {
                orders.push({
                    ticket: Number(o.getTicket()), symbol: o.getSymbol(), type: o.getType(), state: o.getState(),
                    volumeInitial: o.getVolumeInitial(), volumeCurrent: o.getVolumeCurrent(), priceOpen: o.getPriceOpen(),
                    stopLoss: o.getStopLoss(), takeProfit: o.getTakeProfit(), magic: Number(o.getMagicNumber()),
                    positionId: Number(o.getPositionId()), comment: o.getComment(),
                    timeSetup: tsToSeconds(o.getSetupTime()), timeDone: tsToSeconds(o.getDoneTime()),
                });
            }
            const d = h.getHistoryDeal && h.getHistoryDeal();
            if (d) {
                deals.push({
                    ticket: Number(d.getTicket()), symbol: d.getSymbol(), type: d.getType(), entry: d.getEntryType(),
                    volume: d.getVolume(), price: d.getPrice(), profit: d.getProfit(), commission: d.getCommission(),
                    swap: d.getSwap(), fee: d.getFee(), positionId: Number(d.getPositionId()), comment: d.getComment(),
                    time: tsToSeconds(d.getTime()),
                });
            }
        }
        return { orders, deals };
    }
    /** Closed positions whose OPEN time falls in the window (server time). */
    async positionsHistory(from, to, opts = {}) {
        const req = new exports.AccountHelperPb.PositionsHistoryRequest();
        req.setSortType(opts.sort ?? exports.AccountHelperPb.AH_ENUM_POSITIONS_HISTORY_SORT_TYPE.AH_POSITION_OPEN_TIME_DESC);
        req.setPositionOpenTimeFrom(toTimestamp(from));
        req.setPositionOpenTimeTo(toTimestamp(to));
        if (opts.page)
            req.setPageNumber(opts.page);
        if (opts.perPage)
            req.setItemsPerPage(opts.perPage);
        const data = await this.call(this.accountClient, 'positionsHistory', req, 60000);
        return (data ? data.getHistoryPositionsList() : []).map((p) => ({
            ticket: Number(p.getPositionTicket()), symbol: p.getSymbol(), type: p.getOrderType(), volume: p.getVolume(),
            openTime: tsToSeconds(p.getOpenTime()), closeTime: tsToSeconds(p.getCloseTime()),
            openPrice: p.getOpenPrice(), closePrice: p.getClosePrice(), stopLoss: p.getStopLoss(), takeProfit: p.getTakeProfit(),
            profit: p.getProfit(), commission: p.getCommission(), swap: p.getSwap(), fee: p.getFee(),
            magic: Number(p.getMagic()), comment: p.getComment(),
        }));
    }
    /** Convert a UTC instant to broker server time using the shift reported by AccountSummary. */
    static serverDate(utc, utcServerShiftMinutes) {
        return new Date(utc.getTime() + utcServerShiftMinutes * 60000);
    }
    // ----------------------------------------------------------------- streaming
    /**
     * Streams the ticks of the symbols (every Market Watch symbol when the list is empty). `onError` receives an
     * error reply of the stream, the stream's failure or its end (a cancelled stream - `unsubscribe()` - is not an
     * error); the stream is not re-subscribed on its own.
     */
    subscribeQuotes(symbols, callback, onError) {
        const req = new exports.SubscriptionsPb.OnSymbolTickRequest();
        req.setSymbolNamesList(symbols || []);
        const stream = this.subscriptionClient.onSymbolTick(req, this.getGrpcMetadata());
        let cancelled = false;
        stream.on('data', (reply) => {
            const error = reply.getError();
            if (error) {
                onError?.(MrpcError.fromReply(error));
                return;
            }
            const tick = reply.getData()?.getSymbolTick();
            if (!tick)
                return; // a heartbeat
            callback(mapTick('', tick));
        });
        stream.on('error', (err) => {
            if (cancelled && err?.code === grpc.status.CANCELLED)
                return;
            onError?.(err);
        });
        stream.on('end', () => { if (!cancelled)
            onError?.(new MrpcError('tick stream ended')); });
        return {
            unsubscribe: () => { cancelled = true; stream.cancel(); }
        };
    }
    /** Raw OnTrade event stream (order/position/deal updates). Delivers the protobuf OnTradeData. */
    subscribeTrades(callback, onError) {
        const req = new exports.SubscriptionsPb.OnTradeRequest();
        const stream = this.subscriptionClient.onTrade(req, this.getGrpcMetadata());
        let cancelled = false;
        stream.on('data', (reply) => {
            const error = reply.getError();
            if (error) {
                onError?.(MrpcError.fromReply(error));
                return;
            }
            const data = reply.getData();
            if (data)
                callback(data);
        });
        stream.on('error', (err) => {
            if (cancelled && err?.code === grpc.status.CANCELLED)
                return;
            onError?.(err);
        });
        stream.on('end', () => { if (!cancelled)
            onError?.(new MrpcError('trade stream ended')); });
        return { unsubscribe: () => { cancelled = true; stream.cancel(); } };
    }
    /**
     * Stops the terminal on the gateway (`true` also deletes it) and closes the channel. A strategy that wants its
     * terminal kept warm between runs should call `close()` instead: the gateway keeps the terminal under the id.
     */
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
        catch { }
    }
}
exports.MT5Client = MT5Client;

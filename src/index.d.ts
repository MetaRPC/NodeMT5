import * as grpc from '@grpc/grpc-js';
export declare const ConnectionGrpc: any;
export declare const ConnectionPb: any;
export declare const AccountHelperGrpc: any;
export declare const AccountHelperPb: any;
export declare const AccountInformationGrpc: any;
export declare const AccountInformationPb: any;
export declare const TradingHelperGrpc: any;
export declare const TradingHelperPb: any;
export declare const SubscriptionsGrpc: any;
export declare const SubscriptionsPb: any;
export declare const MarketInfoGrpc: any;
export declare const MarketInfoPb: any;
export declare const TradeFunctionsGrpc: any;
export declare const TradeFunctionsPb: any;
export declare const TimestampPb: any;
/** MQL5 ENUM_TIMEFRAMES values accepted by PriceHistory. */
export declare const TIMEFRAMES: Record<string, number>;
export type Timeframe = keyof typeof TIMEFRAMES | number;
export type OrderAction = 'BUY' | 'SELL' | 'BUY_LIMIT' | 'SELL_LIMIT' | 'BUY_STOP' | 'SELL_STOP' | 'BUY_STOP_LIMIT' | 'SELL_STOP_LIMIT';
export type TradeMode = 'DEMO' | 'CONTEST' | 'REAL' | 'UNKNOWN';
export interface AccountInfo {
    login: number;
    currency: string;
    balance: number;
    equity: number;
    credit: number;
    margin: number;
    freeMargin: number;
    marginLevel: number;
    leverage: number;
    name: string;
    /** The broker server the account is on (e.g. "MetaQuotes-Demo"). */
    server: string;
    company: string;
    /** DEMO | CONTEST | REAL (MrpcEnumAccountTradeMode 0/1/2). */
    tradeMode: TradeMode;
    tradeModeCode: number;
    /** Broker server time (seconds since epoch, server timezone) at the time of the call. */
    serverTime: number;
    /** server_time = utc + utcServerShiftMinutes * 60. Use it to build server-time history windows. */
    utcServerShiftMinutes: number;
    /** The same instant in UTC (seconds since epoch, server_time_utc); absent when the server does not send it. */
    serverTimeUtc?: number;
}
export interface Quote {
    symbol: string;
    bid: number;
    ask: number;
    last: number;
    volume: number;
    /** Tick time, milliseconds since the epoch (UTC when the server reports it, otherwise the server-time tick time). */
    time: number;
    flags: number;
}
export interface SymbolParams {
    name: string;
    digits: number;
    point: number;
    bid: number;
    ask: number;
    spread: number;
    contractSize: number;
    tickSize: number;
    tickValue: number;
    volumeMin: number;
    volumeMax: number;
    volumeStep: number;
    volumeLimit: number;
    swapLong: number;
    swapShort: number;
    stopsLevel: number;
    freezeLevel: number;
    tradeMode: number;
    tradeCalcMode: number;
    tradeExeMode: number;
    fillingModes: number[];
    currencyBase: string;
    currencyProfit: string;
    currencyMargin: string;
    description: string;
    path: string;
    visible: boolean;
    selected: boolean;
    exists: boolean;
}
export interface Bar {
    /** Bar open time in seconds since epoch (server timezone). */
    time: number;
    /** Bar open time in seconds since epoch, UTC (time_utc); absent when the server does not send it. */
    timeUtc?: number;
    open: number;
    high: number;
    low: number;
    close: number;
    tickVolume: number;
    spread: number;
    realVolume: number;
}
export interface OrderRequest {
    symbol: string;
    action: OrderAction;
    volume: number;
    price?: number;
    stopLoss?: number;
    takeProfit?: number;
    slippage?: number;
    comment?: string;
    /** Expert Advisor id (magic number). Required for per-strategy position filtering. */
    magic?: number;
    stopLimitPrice?: number;
    /** TMT5_ENUM_ORDER_TYPE_TIME value for pending orders. */
    expirationTimeType?: number;
    /** Expiration time (server time) for pending orders. */
    expirationTime?: Date;
    /** How long OrderSend waits for the first quote of a symbol (ms, default 5000). */
    quotesWaitMs?: number;
}
export interface OrderResult {
    /** Order ticket (== position ticket for a filled market order on MT5). */
    ticket: number;
    retcode: number;
    retcodeDescription: string;
    deal: number;
    order: number;
    volume: number;
    price: number;
    bid: number;
    ask: number;
    comment: string;
    requestId: number;
}
export interface ModifyRequest {
    ticket: number;
    stopLoss?: number;
    takeProfit?: number;
    /** New price - pending orders only. */
    price?: number;
    stopLimit?: number;
    expirationTimeType?: number;
    expirationTime?: Date;
}
export interface CloseRequest {
    ticket: number;
    /** Omit or 0 to close the whole position; a smaller volume closes partially. */
    volume?: number;
    slippage?: number;
}
export interface CloseResult {
    retcode: number;
    retcodeDescription: string;
    closeMode: number;
}
export interface Position {
    ticket: number;
    symbol: string;
    /** BMT5_ENUM_POSITION_TYPE: 0 = BUY, 1 = SELL. */
    type: number;
    volume: number;
    priceOpen: number;
    priceCurrent: number;
    stopLoss: number;
    takeProfit: number;
    swap: number;
    profit: number;
    commission: number;
    magic: number;
    comment: string;
    /** Position open time (seconds since epoch). */
    openTime: number;
    /** Position open time in UTC (seconds since epoch, open_time_utc); absent when the server does not send it. */
    openTimeUtc?: number;
    identifier: number;
}
export interface PendingOrder {
    ticket: number;
    symbol: string;
    type: number;
    state: number;
    volumeInitial: number;
    volumeCurrent: number;
    priceOpen: number;
    priceCurrent: number;
    stopLoss: number;
    takeProfit: number;
    stopLimit: number;
    magic: number;
    comment: string;
    timeSetup: number;
    timeExpiration: number;
    /** `timeSetup` / `timeExpiration` in UTC (seconds since epoch); absent when the server does not send them. */
    timeSetupUtc?: number;
    timeExpirationUtc?: number;
    positionId: number;
}
export interface HistoryDeal {
    ticket: number;
    symbol: string;
    /** BMT5_ENUM_DEAL_TYPE: 0 = BUY, 1 = SELL, 2 = BALANCE ... */
    type: number;
    /** BMT5_ENUM_DEAL_ENTRY_TYPE: 0 = IN, 1 = OUT, 2 = INOUT, 3 = OUT_BY. */
    entry: number;
    volume: number;
    price: number;
    profit: number;
    commission: number;
    swap: number;
    fee: number;
    positionId: number;
    comment: string;
    /** Deal time (seconds since epoch). */
    time: number;
    /** Deal time in UTC (seconds since epoch, time_utc); absent when the server does not send it. */
    timeUtc?: number;
}
export interface HistoryOrder {
    ticket: number;
    symbol: string;
    type: number;
    state: number;
    volumeInitial: number;
    volumeCurrent: number;
    priceOpen: number;
    stopLoss: number;
    takeProfit: number;
    magic: number;
    positionId: number;
    comment: string;
    timeSetup: number;
    timeDone: number;
    /** `timeSetup` / `timeDone` in UTC (seconds since epoch); absent when the server does not send them. */
    timeSetupUtc?: number;
    timeDoneUtc?: number;
}
export interface HistoryPosition {
    ticket: number;
    symbol: string;
    type: number;
    volume: number;
    openTime: number;
    closeTime: number;
    /** `openTime` / `closeTime` in UTC (seconds since epoch); absent when the server does not send them. */
    openTimeUtc?: number;
    closeTimeUtc?: number;
    openPrice: number;
    closePrice: number;
    stopLoss: number;
    takeProfit: number;
    profit: number;
    commission: number;
    swap: number;
    fee: number;
    magic: number;
    comment: string;
}
export interface ConnectOptions {
    user: number;
    password: string;
    /** Broker server name (mtClusterName), e.g. "MetaQuotes-Demo". Preferred. */
    server?: string;
    /** Direct host:port connection (alternative to server). */
    host?: string;
    port?: number;
    timeoutSeconds?: number;
    /** Human label shown in the portal / Accounts listing. */
    name?: string;
    /**
     * Stable terminal id (GUID). The gateway keeps one terminal per id, so a strategy MUST reuse the
     * same id on every run, otherwise it orphans a new terminal each start.
     */
    id?: string;
    /** Terminal lifetime in minutes (0 = infinite). */
    expiration?: number;
}
export interface Subscription {
    unsubscribe: () => void;
}
/**
 * An error the MRPC API answered with (the reply's `error`), or a failed call. `error` is the reply's error message
 * itself (absent for a failed call): `getMqlErrorCode()`, `getMqlErrorTradeIntCode()` and the rest of its fields.
 * The MQL and trade codes of an error reply are also exposed as `mqlCode`, `mqlDescription`, `tradeCode`,
 * `tradeDescription`.
 */
export declare class MrpcError extends Error {
    readonly code: string;
    readonly error?: any;
    readonly mqlCode: string;
    readonly mqlDescription: string;
    readonly tradeCode: string;
    readonly tradeDescription: string;
    constructor(message: string, code?: string, error?: any);
    /** Builds the error of an error reply (the reply's `error` message). */
    static fromReply(error: any): MrpcError;
    /** INVALID_LOGIN / wrong password errors must never be retried (brokers lock accounts). */
    get isInvalidLogin(): boolean;
    /** The API key was refused (API_KEY_INVALID / API_KEY_REQUIRED): retrying or reconnecting does not help. */
    get isApiKeyError(): boolean;
    /** The trade call this error came from (`OrderSend`, `OrderModify`, `OrderClose`); unset for other calls. */
    operation?: string;
    /**
     * The outcome of the trade call is unknown: it timed out on the gateway or in the terminal (MRPC_TIMEOUT,
     * TERMINAL_API_TIMEOUT, ...) or the trade server answered 10012 TIMEOUT / 10028 LOCKED / 10031 CONNECTION. The
     * trade may or may not have been executed: check the open positions / orders before sending it again.
     */
    get isTradeOutcomeUnknown(): boolean;
}
/**
 * A trade call (`orderSend`, `orderModify`, `orderClose`) failed at the transport level - gRPC UNAVAILABLE,
 * DEADLINE_EXCEEDED, UNKNOWN or INTERNAL - after the request may already have reached the terminal: the trade may or
 * may not have been executed. The SDK never re-sends a trade: check the open positions / orders (and the history)
 * before sending it again.
 * It keeps the shape of the gRPC error it stands for: `code` is still the gRPC status number (also in `grpcCode`),
 * `details` and `metadata` are the original ones and `cause` is the original error, so existing
 * `err.code === grpc.status.UNAVAILABLE` checks keep working. `errorCode` is `TRADE_OUTCOME_UNKNOWN`, `operation` the
 * trade call (e.g. `OrderSend`).
 */
export declare class TradeOutcomeUnknownError extends Error {
    /** The error code of this condition, the same in every MetaRPC SDK. */
    static readonly CODE = "TRADE_OUTCOME_UNKNOWN";
    readonly errorCode: string;
    readonly isTradeOutcomeUnknown: boolean;
    /** The gRPC status number of the transport failure (unchanged, as on the original error). */
    readonly code: number;
    readonly grpcCode: number;
    readonly details: string;
    readonly metadata: any;
    readonly operation: string;
    constructor(operation: string, transportError: any);
    /** True for the gRPC status codes after which a trade's outcome is unknown. */
    static isUnknownOutcome(code: number): boolean;
}
/** The name the fleet audit used for `MrpcError`. */
export declare const MT5Error: typeof MrpcError;
export type MT5Error = MrpcError;
export declare class MT5Client {
    host: string;
    port: number;
    apiKey: string | null;
    id: string | null;
    connected: boolean;
    channel: grpc.Channel;
    connectionClient: any;
    accountClient: any;
    accountInformationClient: any;
    tradingClient: any;
    subscriptionClient: any;
    marketInfoClient: any;
    tradeFunctionsClient: any;
    /** Default deadline for unary calls, ms. */
    callTimeoutMs: number;
    private lastServer?;
    /** RFC 4122 UUID v5 (SHA-1) - use it to derive a stable terminal id from a strategy name. */
    static uuid5(namespace: string, name: string): string;
    /**
     * Opens a new demo account through the API (GET /DemoAccount/Open) and returns its credentials.
     * @param host the REST host of the platform, e.g. "mt5.mrpc.pro"
     */
    static openDemoAccount(server?: string, apiKey?: string, host?: string): Promise<{
        login: number;
        password: string;
        server: string;
    }>;
    constructor(host?: string, port?: number, apiKey?: string | null, id?: string | null);
    getHeaders(): Record<string, string>;
    getGrpcMetadata(): grpc.Metadata;
    /**
     * A unary call `client[method](request, metadata, {deadline}, cb)` through one of the exported generated clients:
     * resolves with the reply's data, rejects with the reply's error (`MrpcError`) or the call's failure.
     */
    call(client: any, method: string, request: any, timeoutMs?: number): Promise<any>;
    /**
     * A trade call through `call()`: sent exactly once, never re-sent. An error reply gets the trade call in its
     * `operation`; a transport failure after which the trade may have been executed becomes a
     * `TradeOutcomeUnknownError` (same gRPC `code`).
     */
    private tradeCall;
    /** The terminal id the server assigns to these credentials (Connection.GetId). */
    getId(user: number | string, password: string): Promise<string>;
    /**
     * Connects by broker server name (ConnectEx: `server`, e.g. "MetaQuotes-Demo") or by address (Connect: `host`/`port`).
     * `id` (a stable GUID) is sent with the call so the gateway reuses that terminal; `name` labels it in the Accounts
     * listing. On success `id` is the terminal id the server answered with.
     */
    connect(loginOrOptions: number | ConnectOptions, password?: string, server?: string): Promise<boolean>;
    private static tradeModeName;
    getAccountInfo(): Promise<AccountInfo>;
    /** Add (select=true) or remove a symbol from Market Watch. */
    symbolSelect(symbol: string, select?: boolean): Promise<boolean>;
    symbolIsSynchronized(symbol: string): Promise<boolean>;
    /** Names of every symbol the account can see (SymbolList). */
    symbolList(): Promise<string[]>;
    /** Current tick (the only reliable price source - SymbolParamsMany prices can be stale). */
    symbolInfoTick(symbol: string): Promise<Quote>;
    private static mapSymbolParams;
    /** Contract specification of one symbol (SymbolParamsMany filtered by name). */
    symbolParams(symbol: string): Promise<SymbolParams>;
    /** Contract specification of every symbol (one unfiltered call - paging is unreliable). */
    symbolParamsAll(): Promise<SymbolParams[]>;
    /**
     * Make sure a symbol is in Market Watch and has a two-sided quote. Returns the first usable tick.
     * A freshly added symbol reports bid/ask 0 until synchronized, so we poll briefly.
     */
    ensureSymbol(symbol: string, waitMs?: number): Promise<Quote>;
    /**
     * OHLC history. With from/to omitted, returns the newest `maxBars` bars (default 500).
     * Times are seconds since epoch in the broker's server timezone.
     */
    priceHistory(symbol: string, timeframe: Timeframe, opts?: {
        from?: Date | number;
        to?: Date | number;
        maxBars?: number;
    }): Promise<Bar[]>;
    private static mapOrderResult;
    /**
     * Market or pending order. An error reply rejects with `MrpcError`; a broker rejection is in the result
     * (`retcode` is 10009 when done).
     */
    orderSend(req: OrderRequest): Promise<OrderResult>;
    /** Change SL/TP of a position, or SL/TP/price/expiration of a pending order. */
    orderModify(req: ModifyRequest): Promise<OrderResult>;
    /** Close a position (fully or partially) or delete a pending order. */
    orderClose(req: CloseRequest): Promise<CloseResult>;
    /** Open positions and pending orders. */
    openedOrders(): Promise<{
        positions: Position[];
        orders: PendingOrder[];
    }>;
    /** Open positions, optionally only those carrying a given magic number. */
    positions(magic?: number): Promise<Position[]>;
    /**
     * Closed orders + deals in a window. `from`/`to` are SERVER time (broker timezone); use
     * `serverDate()` to build them from UTC.
     */
    orderHistory(from: Date | number, to: Date | number, opts?: {
        sort?: number;
        page?: number;
        perPage?: number;
    }): Promise<{
        orders: HistoryOrder[];
        deals: HistoryDeal[];
    }>;
    /** Closed positions whose OPEN time falls in the window (server time). */
    positionsHistory(from: Date | number, to: Date | number, opts?: {
        sort?: number;
        page?: number;
        perPage?: number;
    }): Promise<HistoryPosition[]>;
    /** Convert a UTC instant to broker server time using the shift reported by AccountSummary. */
    static serverDate(utc: Date, utcServerShiftMinutes: number): Date;
    /**
     * Streams the ticks of the symbols (every Market Watch symbol when the list is empty). `onError` receives an
     * error reply of the stream, the stream's failure or its end (a cancelled stream - `unsubscribe()` - is not an
     * error); the stream is not re-subscribed on its own.
     */
    subscribeQuotes(symbols: string[], callback: (quote: Quote) => void, onError?: (error: Error) => void): Subscription;
    /** Raw OnTrade event stream (order/position/deal updates). Delivers the protobuf OnTradeData. */
    subscribeTrades(callback: (event: any) => void, onError?: (error: Error) => void): Subscription;
    /**
     * Stops the terminal on the gateway (`true` also deletes it) and closes the channel. A strategy that wants its
     * terminal kept warm between runs should call `close()` instead: the gateway keeps the terminal under the id.
     */
    disconnect(deleteOnDisconnect?: boolean): Promise<void>;
    /** Close the gRPC channel without touching the terminal on the gateway. */
    close(): void;
}

import * as grpc from '@grpc/grpc-js';
export declare const ConnectionGrpc: any;
export declare const ConnectionPb: any;
export declare const AccountHelperGrpc: any;
export declare const AccountHelperPb: any;
export declare const AccountInformationGrpc: any;
export declare const AccountInformationPb: any;
export declare const TradingHelperGrpc: any;
export declare const TradingHelperPb: any;
export declare const TradeFunctionsGrpc: any;
export declare const TradeFunctionsPb: any;
export declare const SubscriptionsGrpc: any;
export declare const SubscriptionsPb: any;
export declare const MarketInfoGrpc: any;
export declare const MarketInfoPb: any;
export declare const TimestampPb: any;
export declare const EmptyPb: any;
/** MQL5 ENUM_TIMEFRAMES values accepted by PriceHistory. */
export declare const TIMEFRAMES: Record<string, number>;
export type Timeframe = keyof typeof TIMEFRAMES | number;
/** A running server-stream subscription; call `unsubscribe()` to cancel it. */
export interface Subscription {
    unsubscribe: () => void;
}
/** Options for {@link MT5Account.connect}. */
export interface ConnectOptions {
    user: number;
    password: string;
    /** Broker server name (mtClusterName), e.g. "MetaQuotes-Demo". Preferred. */
    server?: string;
    /** Direct host:port connection (alternative to `server`). */
    host?: string;
    port?: number;
    timeoutSeconds?: number;
    /** Human label shown in the portal / Accounts listing. */
    name?: string;
    /** Stable terminal id (GUID). Reuse the same id every run so the gateway reuses one terminal. */
    id?: string;
    /** Terminal lifetime in minutes (0 = infinite). */
    expiration?: number;
}
/** Build a protobuf Timestamp from a Date or unix-seconds number. */
export declare function toTimestamp(d: Date | number): any;
/**
 * Low-level MetaTrader 5 gRPC client. Construct it, `connect()`, then call the thin RPC wrappers.
 * Every method rejects with {@link MrpcError} on an API error and with the raw transport error on a
 * gRPC failure.
 */
export declare class MT5Account {
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
    tradeFunctionsClient: any;
    subscriptionClient: any;
    marketInfoClient: any;
    /** Default deadline for unary calls, ms. */
    callTimeoutMs: number;
    lastServer?: string;
    /** RFC 4122 UUID v5 (SHA-1) — derive a stable terminal id from a strategy name. */
    static uuid5(namespace: string, name: string): string;
    /** Convert a UTC instant to broker server time using the shift reported by AccountSummary. */
    static serverDate(utc: Date, utcServerShiftMinutes: number): Date;
    /** Opens a new demo account through the REST API and returns its credentials. */
    static openDemoAccount(server?: string, apiKey?: string, host?: string): Promise<{
        login: number;
        password: string;
        server: string;
    }>;
    constructor(host?: string, port?: number, apiKey?: string | null, id?: string | null);
    /** `true` after a successful connect. */
    isConnected(): boolean;
    /** The auth headers (terminal id + apikey) sent as metadata on every call. */
    getHeaders(): Record<string, string>;
    /** The same headers as gRPC {@link grpc.Metadata}. */
    getGrpcMetadata(): grpc.Metadata;
    /**
     * A unary call through one of the generated clients: resolves with the reply's `data`, rejects with
     * the reply's `error` (as {@link MrpcError}) or the call's transport failure.
     */
    call(client: any, method: string, request: any, timeoutMs?: number): Promise<any>;
    private ensureConnected;
    /**
     * The terminal id the server assigns to these credentials (Connection.GetId). Cached on `this.id`.
     */
    getId(user: number | string, password: string): Promise<string>;
    /**
     * Connect by broker server name (ConnectEx) or by address (Connect). `id` (a stable GUID) is sent so
     * the gateway reuses that terminal; `name` labels it. On success `this.id` holds the terminal id.
     */
    connect(loginOrOptions: number | ConnectOptions, password?: string, server?: string): Promise<boolean>;
    /** Connect through a proxy (Connection.ConnectProxy) — pass a built `ConnectProxyRequest`. */
    connectProxy(req: any): Promise<any>;
    /** Verify the terminal connection (Connection.CheckConnect). */
    checkConnect(req?: any): Promise<any>;
    /** Re-establish a dropped terminal (Connection.Reconnect). */
    reconnect(req?: any): Promise<any>;
    /** Stop the terminal on the gateway (`true` also deletes it) and close the channel. */
    disconnect(deleteOnDisconnect?: boolean): Promise<void>;
    /** Close the gRPC channel without touching the terminal on the gateway. */
    close(): void;
    /** All account data in one call (AccountHelper.AccountSummary) — raw AccountSummaryData. */
    accountSummary(req?: any): Promise<any>;
    /** One ACCOUNT_* double property (AccountInformation.AccountInfoDouble). */
    accountInfoDouble(propertyId: number): Promise<number>;
    /** One ACCOUNT_* integer property (AccountInformation.AccountInfoInteger). */
    accountInfoInteger(propertyId: number): Promise<number>;
    /** One ACCOUNT_* string property (AccountInformation.AccountInfoString). */
    accountInfoString(propertyId: number): Promise<string>;
    /** Count of all / Market-Watch symbols (MarketInfo.SymbolsTotal). */
    symbolsTotal(req?: any): Promise<any>;
    /** Whether a symbol exists (MarketInfo.SymbolExist) — pass a built `SymbolExistRequest`. */
    symbolExist(req: any): Promise<any>;
    /** Symbol name by index (MarketInfo.SymbolName) — pass a built `SymbolNameRequest`. */
    symbolName(req: any): Promise<any>;
    /** Names of every symbol the account can see (MarketInfo.SymbolList). */
    symbolList(): Promise<string[]>;
    /** Add (select=true) or remove a symbol from Market Watch (MarketInfo.SymbolSelect). */
    symbolSelect(symbol: string, select?: boolean): Promise<boolean>;
    /** Whether a symbol's rates are synchronized with the server (MarketInfo.SymbolIsSynchronized). */
    symbolIsSynchronized(symbol: string): Promise<boolean>;
    /** One SYMBOL_* double property (MarketInfo.SymbolInfoDouble) — pass a built request. */
    symbolInfoDouble(req: any): Promise<any>;
    /** One SYMBOL_* integer property (MarketInfo.SymbolInfoInteger) — pass a built request. */
    symbolInfoInteger(req: any): Promise<any>;
    /** One SYMBOL_* string property (MarketInfo.SymbolInfoString) — pass a built request. */
    symbolInfoString(req: any): Promise<any>;
    /** Margin rates for a symbol's order types (MarketInfo.SymbolInfoMarginRate) — pass a built request. */
    symbolInfoMarginRate(req: any): Promise<any>;
    /** Current tick of a symbol (MarketInfo.SymbolInfoTick) — raw MrpcMqlTick. */
    symbolInfoTick(symbol: string): Promise<any>;
    /** Quote-session times of a symbol (MarketInfo.SymbolInfoSessionQuote) — pass a built request. */
    symbolInfoSessionQuote(req: any): Promise<any>;
    /** Trade-session times of a symbol (MarketInfo.SymbolInfoSessionTrade) — pass a built request. */
    symbolInfoSessionTrade(req: any): Promise<any>;
    /**
     * Full contract spec of one or all symbols (AccountHelper.SymbolParamsMany) — raw data.
     * With `symbol` omitted it returns every symbol (one unfiltered call; paging is unreliable).
     */
    symbolParamsMany(symbol?: string, timeoutMs?: number): Promise<any>;
    /**
     * OHLC history (MarketInfo.PriceHistory) — raw data. `from`/`to` are unix seconds in the broker's
     * server timezone; with both omitted it returns the newest `maxBars` bars (default 500).
     */
    priceHistory(symbol: string, timeframe: Timeframe, opts?: {
        from?: Date | number;
        to?: Date | number;
        maxBars?: number;
    }): Promise<any>;
    /** Tick value / tick size / contract size for several symbols (AccountHelper.TickValueWithSize). */
    tickValueWithSize(req: any): Promise<any>;
    /** Number of open positions (TradeFunctions.PositionsTotal). Request is `google.protobuf.Empty`. */
    positionsTotal(): Promise<any>;
    /** Open positions and pending orders with full detail (AccountHelper.OpenedOrders) — raw data. */
    openedOrders(req?: any): Promise<any>;
    /** Just the ticket numbers of open orders/positions (AccountHelper.OpenedOrdersTickets). */
    openedOrdersTickets(req?: any): Promise<any>;
    /** Closed orders + deals in a window (AccountHelper.OrderHistory) — raw data. Times are server time. */
    orderHistory(from: Date | number, to: Date | number, opts?: {
        sort?: number;
        page?: number;
        perPage?: number;
    }): Promise<any>;
    /** Closed positions whose OPEN time is in the window (AccountHelper.PositionsHistory) — raw data. */
    positionsHistory(from: Date | number, to: Date | number, opts?: {
        sort?: number;
        page?: number;
        perPage?: number;
    }): Promise<any>;
    /** Subscribe to Depth-of-Market updates for a symbol (MarketInfo.MarketBookAdd) — pass a built request. */
    marketBookAdd(req: any): Promise<any>;
    /** Unsubscribe from DOM for a symbol (MarketInfo.MarketBookRelease) — pass a built request. */
    marketBookRelease(req: any): Promise<any>;
    /** Current market-depth snapshot (MarketInfo.MarketBookGet) — pass a built request. */
    marketBookGet(req: any): Promise<any>;
    /**
     * A trade call through `call()`: sent exactly once, never re-sent. An error reply gets the trade call tagged in
     * its `operation`; a transport failure after which the trade may have executed becomes a `TradeOutcomeUnknownError`
     * (same gRPC `code`), so the caller can tell a trade whose outcome is unknown from a plain read failure.
     */
    private tradeCall;
    /** Place a market or pending order (TradingHelper.OrderSend) — pass a built `OrderSendRequest`. */
    orderSend(req: any): Promise<any>;
    /** Modify SL/TP/price/expiration of a position or pending order (TradingHelper.OrderModify). */
    orderModify(req: any): Promise<any>;
    /** Close a position (full/partial) or delete a pending order (TradingHelper.OrderClose). */
    orderClose(req: any): Promise<any>;
    /** Validate an order before sending it (TradeFunctions.OrderCheck) — pass a built `OrderCheckRequest`. */
    orderCheck(req: any): Promise<any>;
    /** Required margin for a prospective order (TradeFunctions.OrderCalcMargin). */
    orderCalcMargin(req: any): Promise<any>;
    /** Profit of a prospective trade (TradeFunctions.OrderCalcProfit). */
    orderCalcProfit(req: any): Promise<any>;
    /** Stream live ticks (SubscriptionService.OnSymbolTick) — raw OnSymbolTickData per tick. */
    onSymbolTick(symbols: string[], callback: (data: any) => void, onError?: (e: Error) => void): Subscription;
    /** Stream trade events (SubscriptionService.OnTrade) — raw OnTradeData per event. */
    onTrade(callback: (data: any) => void, onError?: (e: Error) => void): Subscription;
    /** Stream periodic position P&L updates (SubscriptionService.OnPositionProfit). */
    onPositionProfit(req: any, callback: (data: any) => void, onError?: (e: Error) => void): Subscription;
    /** Stream periodic ticket snapshots (SubscriptionService.OnPositionsAndPendingOrdersTickets). */
    onPositionsAndPendingOrdersTickets(req: any, callback: (data: any) => void, onError?: (e: Error) => void): Subscription;
    /** Stream trade-transaction events (SubscriptionService.OnTradeTransaction). */
    onTradeTransaction(callback: (data: any) => void, onError?: (e: Error) => void): Subscription;
    /** Open a server stream on the subscription client and forward each reply's `data` to the callback. */
    private openStream;
}

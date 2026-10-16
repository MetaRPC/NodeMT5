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
export interface AccountInfo {
    login: number;
    currency: string;
    balance: number;
    equity: number;
    margin: number;
    freeMargin: number;
    marginLevel: number;
    leverage: number;
    name: string;
    /** The broker server the account is on (e.g. "MetaQuotes-Demo"). */
    server: string;
}
export interface Quote {
    symbol: string;
    bid: number;
    ask: number;
    /** Tick time, milliseconds since the epoch (UTC). */
    time: number;
}
export interface OrderRequest {
    symbol: string;
    action: 'BUY' | 'SELL' | 'BUY_LIMIT' | 'SELL_LIMIT' | 'BUY_STOP' | 'SELL_STOP';
    volume: number;
    price?: number;
    stopLoss?: number;
    takeProfit?: number;
    slippage?: number;
    comment?: string;
}
export interface OrderResult {
    ticket: number;
    retcode: number;
    deal: number;
    order: number;
    volume: number;
    price: number;
    comment: string;
}
export interface ConnectOptions {
    user: number;
    password: string;
    server?: string;
    host?: string;
    port?: number;
    timeoutSeconds?: number;
}
/**
 * An error the MRPC API answered with (the reply's `error`), or a failed call. `error` is the reply's error message
 * itself (absent for a failed call): `getMqlErrorCode()`, `getMqlErrorTradeIntCode()` and the rest of its fields.
 */
export declare class MrpcError extends Error {
    readonly code: string;
    readonly error?: any;
    constructor(message: string, code?: string, error?: any);
}
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
    private lastServer?;
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
    /** A unary call: resolves with the reply's data, rejects with the reply's error or the call's failure. */
    private call;
    /** The terminal id the server assigns to these credentials (Connection.GetId). */
    getId(user: number | string, password: string): Promise<string>;
    /** Connects by broker server name (ConnectEx: `server`, e.g. "MetaQuotes-Demo") or by address (Connect: `host`/`port`). */
    connect(loginOrOptions: number | ConnectOptions, password?: string, server?: string): Promise<boolean>;
    getAccountInfo(): Promise<AccountInfo>;
    orderSend(req: OrderRequest): Promise<OrderResult>;
    /**
     * Streams the ticks of the symbols. `onError` receives an error reply of the stream or the stream's failure
     * (a cancelled stream - `unsubscribe()` - is not an error).
     */
    subscribeQuotes(symbols: string[], callback: (quote: Quote) => void, onError?: (error: Error) => void): {
        unsubscribe: () => void;
    };
    disconnect(deleteOnDisconnect?: boolean): Promise<void>;
}

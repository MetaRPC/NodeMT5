import { MT5Account, Timeframe, Subscription, ConnectOptions } from './MT5Account';
export type TradeMode = 'DEMO' | 'CONTEST' | 'REAL' | 'UNKNOWN';
export type OrderAction = 'BUY' | 'SELL' | 'BUY_LIMIT' | 'SELL_LIMIT' | 'BUY_STOP' | 'SELL_STOP' | 'BUY_STOP_LIMIT' | 'SELL_STOP_LIMIT';
/** Account snapshot, from {@link MT5Service.getAccountSummary}. */
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
    tradeMode: TradeMode;
    tradeModeCode: number;
    /** Broker server time (seconds since epoch, server timezone) at the time of the call. */
    serverTime: number;
    /** server_time = utc + utcServerShiftMinutes * 60. Build server-time history windows with it. */
    utcServerShiftMinutes: number;
}
/** A single quote / tick, from {@link MT5Service.getSymbolTick} and the tick stream. */
export interface Quote {
    symbol: string;
    bid: number;
    ask: number;
    last: number;
    volume: number;
    /** Tick time, milliseconds since epoch (UTC when the server reports it). */
    time: number;
    flags: number;
}
/** Contract specification of a symbol, from {@link MT5Service.getSymbolParams}. */
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
/** One OHLC bar, from {@link MT5Service.priceHistory}. */
export interface Bar {
    /** Bar open time in seconds since epoch (server timezone). */
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
    tickVolume: number;
    spread: number;
    realVolume: number;
}
/** What you pass to {@link MT5Service.placeOrder}. */
export interface OrderRequest {
    symbol: string;
    action: OrderAction;
    volume: number;
    price?: number;
    stopLoss?: number;
    takeProfit?: number;
    slippage?: number;
    comment?: string;
    /** Expert Advisor id (magic number) — required for per-strategy position filtering. */
    magic?: number;
    stopLimitPrice?: number;
    /** TMT5_ENUM_ORDER_TYPE_TIME value for pending orders. */
    expirationTimeType?: number;
    /** Expiration time (server time) for pending orders. */
    expirationTime?: Date;
    /** How long OrderSend waits for the first quote of a symbol (ms, default 5000). */
    quotesWaitMs?: number;
}
/** Result of {@link MT5Service.placeOrder} / {@link MT5Service.modifyOrder}. */
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
/** What you pass to {@link MT5Service.modifyOrder}. */
export interface ModifyRequest {
    ticket: number;
    stopLoss?: number;
    takeProfit?: number;
    /** New price — pending orders only. */
    price?: number;
    stopLimit?: number;
    expirationTimeType?: number;
    expirationTime?: Date;
}
/** What you pass to {@link MT5Service.closeOrder}. */
export interface CloseRequest {
    ticket: number;
    /** Omit or 0 to close the whole position; a smaller volume closes partially. */
    volume?: number;
    slippage?: number;
}
/** Result of {@link MT5Service.closeOrder}. */
export interface CloseResult {
    retcode: number;
    retcodeDescription: string;
    closeMode: number;
}
/** An open position, from {@link MT5Service.getOpenedOrders} / {@link MT5Service.getPositions}. */
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
    identifier: number;
}
/** A working pending order, from {@link MT5Service.getOpenedOrders}. */
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
    positionId: number;
}
/** A historical deal, from {@link MT5Service.getOrderHistory}. */
export interface HistoryDeal {
    ticket: number;
    symbol: string;
    /** BMT5_ENUM_DEAL_TYPE: 0 = BUY, 1 = SELL, 2 = BALANCE … */
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
}
/** A historical order, from {@link MT5Service.getOrderHistory}. */
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
}
/** A closed position, from {@link MT5Service.getPositionsHistory}. */
export interface HistoryPosition {
    ticket: number;
    symbol: string;
    type: number;
    volume: number;
    openTime: number;
    closeTime: number;
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
/** Margin rates of a symbol, from {@link MT5Service.getSymbolMarginRate}. */
export interface SymbolMarginRate {
    initialMarginRate: number;
    maintenanceMarginRate: number;
}
/** A trading/quote session window, from {@link MT5Service.getSymbolSessionQuote}. */
export interface SessionTime {
    /** Session start, seconds since epoch (server timezone). */
    from: number;
    /** Session end, seconds since epoch (server timezone). */
    to: number;
}
/** One Depth-of-Market level, from {@link MT5Service.getMarketDepth}. */
export interface BookInfo {
    /** MQL5 ENUM_BOOK_TYPE (sell / buy / sell-market / buy-market). */
    type: number;
    price: number;
    volume: number;
    volumeReal: number;
}
/** Result of {@link MT5Service.checkOrder}. */
export interface OrderCheckResult {
    returnedCode: number;
    balance: number;
    equity: number;
    profit: number;
    margin: number;
    marginFree: number;
    marginLevel: number;
    comment: string;
}
export declare class MT5Service {
    private readonly acc;
    constructor(acc: MT5Account);
    /** Construct the Service together with a fresh {@link MT5Account}. */
    static create(host?: string, port?: number, apiKey?: string | null, id?: string | null): MT5Service;
    /** The underlying low-level client, for raw RPCs this facade does not surface. */
    account(): MT5Account;
    /** Connect the terminal (delegates to {@link MT5Account.connect}). */
    connect(loginOrOptions: number | ConnectOptions, password?: string, server?: string): Promise<boolean>;
    /** Stop the terminal on the gateway and close the channel. */
    disconnect(deleteOnDisconnect?: boolean): Promise<void>;
    /** All account data as one friendly {@link AccountInfo} (composes AccountSummary + margin + server). */
    getAccountSummary(): Promise<AccountInfo>;
    /** One ACCOUNT_* double property (e.g. `AccountInfoDoublePropertyType.ACCOUNT_BALANCE`). */
    getAccountDouble(propertyId: number): Promise<number>;
    /** One ACCOUNT_* integer property (e.g. login, leverage). */
    getAccountInteger(propertyId: number): Promise<number>;
    /** One ACCOUNT_* string property (e.g. currency, company). */
    getAccountString(propertyId: number): Promise<string>;
    /** Number of symbols — all, or only those in Market Watch when `selectedOnly` is true. */
    getSymbolsTotal(selectedOnly?: boolean): Promise<number>;
    /** Whether a symbol exists; also reports whether it is a custom symbol. */
    symbolExist(symbol: string): Promise<{
        exists: boolean;
        isCustom: boolean;
    }>;
    /** Symbol name by index (over all symbols, or only Market-Watch ones when `selectedOnly`). */
    getSymbolName(index: number, selectedOnly?: boolean): Promise<string>;
    /** Add (select=true) or remove a symbol from Market Watch. */
    symbolSelect(symbol: string, select?: boolean): Promise<boolean>;
    /** Whether a symbol's rates are synchronized with the server. */
    isSymbolSynchronized(symbol: string): Promise<boolean>;
    /** One SYMBOL_* double property (e.g. `SymbolInfoDoubleProperty.SYMBOL_BID`). */
    getSymbolDouble(symbol: string, property: number): Promise<number>;
    /** One SYMBOL_* integer property (e.g. digits, spread). */
    getSymbolInteger(symbol: string, property: number): Promise<number>;
    /** One SYMBOL_* string property (e.g. description, base currency). */
    getSymbolString(symbol: string, property: number): Promise<string>;
    /** Initial / maintenance margin rates for a symbol and order type. */
    getSymbolMarginRate(symbol: string, orderType: OrderAction): Promise<SymbolMarginRate>;
    /** Latest tick of a symbol as a friendly {@link Quote}. */
    getSymbolTick(symbol: string): Promise<Quote>;
    /** Quote-session window for a symbol on a weekday (0 = Sunday … 6 = Saturday). */
    getSymbolSessionQuote(symbol: string, dayOfWeek: number, sessionIndex?: number): Promise<SessionTime>;
    /** Trade-session window for a symbol on a weekday (0 = Sunday … 6 = Saturday). */
    getSymbolSessionTrade(symbol: string, dayOfWeek: number, sessionIndex?: number): Promise<SessionTime>;
    /** Full contract specification of one symbol. */
    getSymbolParams(symbol: string): Promise<SymbolParams>;
    /** Full contract specification of every symbol (one unfiltered call). */
    getSymbolParamsMany(): Promise<SymbolParams[]>;
    /**
     * OHLC history as friendly {@link Bar}s. With `from`/`to` omitted, returns the newest `maxBars`
     * bars (default 500). Times are seconds since epoch in the broker's server timezone.
     */
    priceHistory(symbol: string, timeframe: Timeframe, opts?: {
        from?: Date | number;
        to?: Date | number;
        maxBars?: number;
    }): Promise<Bar[]>;
    /**
     * Make sure a symbol is in Market Watch and has a two-sided quote; returns the first usable tick.
     * A freshly added symbol reports bid/ask 0 until synchronized, so we poll briefly.
     */
    ensureSymbol(symbol: string, waitMs?: number): Promise<Quote>;
    /** Number of open positions. */
    getPositionsTotal(): Promise<number>;
    /** Open positions and pending orders with full detail. */
    getOpenedOrders(): Promise<{
        positions: Position[];
        orders: PendingOrder[];
    }>;
    /** Just the ticket numbers (lightweight): open positions and pending orders. */
    getOpenedTickets(): Promise<{
        positionTickets: number[];
        orderTickets: number[];
    }>;
    /** Open positions, optionally only those carrying a given magic number. */
    getPositions(magic?: number): Promise<Position[]>;
    /** Closed orders + deals in a window (server time). Use {@link MT5Account.serverDate} to build it from UTC. */
    getOrderHistory(from: Date | number, to: Date | number, opts?: {
        sort?: number;
        page?: number;
        perPage?: number;
    }): Promise<{
        orders: HistoryOrder[];
        deals: HistoryDeal[];
    }>;
    /** Closed positions whose OPEN time falls in the window (server time). */
    getPositionsHistory(from: Date | number, to: Date | number, opts?: {
        sort?: number;
        page?: number;
        perPage?: number;
    }): Promise<HistoryPosition[]>;
    /** Subscribe to Depth-of-Market updates for a symbol; returns whether the book opened. */
    subscribeMarketDepth(symbol: string): Promise<boolean>;
    /** Unsubscribe from DOM for a symbol; returns whether the book closed. */
    unsubscribeMarketDepth(symbol: string): Promise<boolean>;
    /** Current market-depth snapshot for a symbol. */
    getMarketDepth(symbol: string): Promise<BookInfo[]>;
    /** Place a market or pending order. A broker rejection is in the result (`retcode` 10009 = done). */
    placeOrder(req: OrderRequest): Promise<OrderResult>;
    /** Change SL/TP of a position, or SL/TP/price/expiration of a pending order. */
    modifyOrder(req: ModifyRequest): Promise<OrderResult>;
    /** Close a position (fully or partially) or delete a pending order. */
    closeOrder(req: CloseRequest): Promise<CloseResult>;
    /** Validate an order before sending it. `req` is a built `OrderCheckRequest` (it wraps an MqlTradeRequest). */
    checkOrder(req: any): Promise<OrderCheckResult>;
    /** Margin required to open `volume` lots of `symbol` as `action` at `price`. */
    calculateMargin(action: OrderAction, symbol: string, volume: number, price: number): Promise<number>;
    /** Profit of `volume` lots of `symbol` moving `action` from `openPrice` to `closePrice`. */
    calculateProfit(action: OrderAction, symbol: string, volume: number, openPrice: number, closePrice: number): Promise<number>;
    /** Stream live ticks of the given symbols (all Market-Watch symbols when the list is empty). */
    streamTicks(symbols: string[], callback: (quote: Quote) => void, onError?: (e: Error) => void): Subscription;
    /** Stream trade events (order/position/deal updates) — delivers the raw OnTradeData. */
    streamTradeUpdates(callback: (event: any) => void, onError?: (e: Error) => void): Subscription;
    /** Stream periodic position-profit snapshots — delivers the raw OnPositionProfitData. */
    streamPositionProfits(callback: (data: any) => void, onError?: (e: Error) => void): Subscription;
    /** Stream periodic ticket snapshots — delivers the raw OnPositionsAndPendingOrdersTicketsData. */
    streamOpenedTickets(callback: (data: any) => void, onError?: (e: Error) => void): Subscription;
    /** Stream trade-transaction events — delivers the raw OnTradeTransactionData. */
    streamTransactions(callback: (data: any) => void, onError?: (e: Error) => void): Subscription;
}

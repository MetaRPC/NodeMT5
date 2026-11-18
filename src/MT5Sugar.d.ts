import { MT5Account } from './MT5Account';
import { MT5Service, AccountInfo, SymbolParams, Position, HistoryPosition } from './MT5Service';
/** Compact price snapshot, from {@link MT5Sugar.getPriceInfo}. */
export interface PriceInfo {
    symbol: string;
    bid: number;
    ask: number;
    /** ask − bid, expressed in pips. */
    spreadPips: number;
    /** Tick time, milliseconds since epoch. */
    time: number;
}
/** A day's trading summary, from {@link MT5Sugar.getDailyStats}. */
export interface DailyStats {
    totalDeals: number;
    winningDeals: number;
    losingDeals: number;
    /** winning / total, in percent. */
    winRate: number;
    totalProfit: number;
    bestDeal: number;
    worstDeal: number;
}
export declare class MT5Sugar {
    private readonly svc;
    constructor(svc: MT5Service);
    /** Construct the whole stack (Sugar → Service → Account) in one call. */
    static create(host?: string, port?: number, apiKey?: string | null, id?: string | null): MT5Sugar;
    /** The friendly facade underneath. */
    service(): MT5Service;
    /** The low-level client underneath. */
    account(): MT5Account;
    /** Connect using login / password / server (or the env vars MT5_LOGIN / MT5_PASSWORD / MT5_SERVER). */
    quickConnect(login?: number, password?: string, server?: string): Promise<boolean>;
    /** `true` after a successful connect. */
    isConnected(): boolean;
    /** Lightweight liveness probe: checks the terminal is connected and alive. */
    ping(): Promise<boolean>;
    private summary;
    /** Account balance (excludes floating P/L). */
    getBalance(): Promise<number>;
    /** Account equity (balance + floating P/L). */
    getEquity(): Promise<number>;
    /** Margin currently in use. */
    getMargin(): Promise<number>;
    /** Free margin available for new positions. */
    getFreeMargin(): Promise<number>;
    /** Margin level, percent (0 when flat). */
    getMarginLevel(): Promise<number>;
    /** Current floating profit (equity − balance). */
    getProfit(): Promise<number>;
    /** Current bid of a symbol. */
    getBid(symbol: string): Promise<number>;
    /** Current ask of a symbol. */
    getAsk(symbol: string): Promise<number>;
    /** Current spread (ask − bid), in price units. */
    getSpread(symbol: string): Promise<number>;
    /** Bid / ask / spread-in-pips / time in one snapshot. */
    getPriceInfo(symbol: string): Promise<PriceInfo>;
    /**
     * Poll until the bid reaches `targetBid` (or just the next tick when `targetBid` is 0), up to
     * `timeoutMs`. Returns the last price seen, or `null` on timeout.
     */
    waitForPrice(symbol: string, targetBid: number, timeoutMs?: number): Promise<PriceInfo | null>;
    /** Send an order and return the ticket; throws `MrpcError` on a broker rejection (retcode ≠ 10009). */
    private send;
    /** Open a market BUY; returns the ticket. */
    buyMarket(symbol: string, volume: number): Promise<number>;
    /** Open a market SELL; returns the ticket. */
    sellMarket(symbol: string, volume: number): Promise<number>;
    /** Place a BUY LIMIT at `price`. */
    buyLimit(symbol: string, volume: number, price: number): Promise<number>;
    /** Place a SELL LIMIT at `price`. */
    sellLimit(symbol: string, volume: number, price: number): Promise<number>;
    /** Place a BUY STOP at `price`. */
    buyStop(symbol: string, volume: number, price: number): Promise<number>;
    /** Place a SELL STOP at `price`. */
    sellStop(symbol: string, volume: number, price: number): Promise<number>;
    /** Market BUY with absolute SL/TP prices. */
    buyMarketWithSLTP(symbol: string, volume: number, sl: number, tp: number): Promise<number>;
    /** Market SELL with absolute SL/TP prices. */
    sellMarketWithSLTP(symbol: string, volume: number, sl: number, tp: number): Promise<number>;
    /** Pending BUY LIMIT at `price` with absolute SL/TP. */
    buyLimitWithSLTP(symbol: string, volume: number, price: number, sl: number, tp: number): Promise<number>;
    /** Pending SELL LIMIT at `price` with absolute SL/TP. */
    sellLimitWithSLTP(symbol: string, volume: number, price: number, sl: number, tp: number): Promise<number>;
    /** Close a position fully (deletes a pending order). Throws on a rejection. */
    closePosition(ticket: number): Promise<boolean>;
    /** Close part of a position (`volume` lots). */
    closePositionPartial(ticket: number, volume: number): Promise<boolean>;
    /** Close every open position; returns how many were closed. */
    closeAllPositions(): Promise<number>;
    /** Close every open position on one symbol; returns how many were closed. */
    closeAllBySymbol(symbol: string): Promise<number>;
    private closePositions;
    /** Set a position's stop-loss (keeps its take-profit). */
    modifyPositionSL(ticket: number, sl: number): Promise<boolean>;
    /** Set a position's take-profit (keeps its stop-loss). */
    modifyPositionTP(ticket: number, tp: number): Promise<boolean>;
    /** Set both stop-loss and take-profit of a position. */
    modifyPositionSLTP(ticket: number, sl: number, tp: number): Promise<boolean>;
    /** All open positions. */
    getOpenPositions(): Promise<Position[]>;
    /** The open position with this ticket, or `undefined`. */
    getPositionByTicket(ticket: number): Promise<Position | undefined>;
    /** Open positions on one symbol. */
    getPositionsBySymbol(symbol: string): Promise<Position[]>;
    /** Whether any position is open on a symbol. */
    hasOpenPosition(symbol: string): Promise<boolean>;
    /** Number of open positions. */
    countOpenPositions(): Promise<number>;
    /** Summed floating profit across all open positions. */
    getTotalProfit(): Promise<number>;
    /** Summed floating profit of the positions on one symbol. */
    getProfitBySymbol(symbol: string): Promise<number>;
    /** Closed positions opened today (server day boundaries approximated by the local day). */
    getDealsToday(): Promise<HistoryPosition[]>;
    /** Closed positions opened yesterday. */
    getDealsYesterday(): Promise<HistoryPosition[]>;
    /** Closed positions opened since the start of this week (Monday). */
    getDealsThisWeek(): Promise<HistoryPosition[]>;
    /** Closed positions opened since the start of this month. */
    getDealsThisMonth(): Promise<HistoryPosition[]>;
    /** Closed positions opened in a custom window. */
    getDealsDateRange(from: Date, to: Date): Promise<HistoryPosition[]>;
    /** Net profit of positions opened today. */
    getProfitToday(): Promise<number>;
    /** Net profit of positions opened this week. */
    getProfitThisWeek(): Promise<number>;
    /** Net profit of positions opened this month. */
    getProfitThisMonth(): Promise<number>;
    /** Full contract specification of a symbol. */
    getSymbolInfo(symbol: string): Promise<SymbolParams>;
    /** Every symbol name the account can see. */
    getAllSymbols(): Promise<string[]>;
    /** Whether the broker knows this symbol. */
    isSymbolAvailable(symbol: string): Promise<boolean>;
    /** Minimum SL/TP distance from the market, in points. */
    getMinStopLevel(symbol: string): Promise<number>;
    /** Price decimal places of a symbol. */
    getSymbolDigits(symbol: string): Promise<number>;
    /** Lot size so that a `stopLossPips` stop risks `riskPercent`% of the balance. */
    calculatePositionSize(symbol: string, riskPercent: number, stopLossPips: number): Promise<number>;
    /** Largest lot the current free margin (80% of it) can open on this symbol. */
    getMaxLotSize(symbol: string): Promise<number>;
    /** Whether a `volume`-lot order can be opened now; the string explains a `false`. */
    canOpenPosition(symbol: string, volume: number): Promise<{
        ok: boolean;
        reason: string;
    }>;
    /** Margin required to open `volume` lots of `symbol` at the current ask. */
    calculateRequiredMargin(symbol: string, volume: number): Promise<number>;
    /**
     * Absolute SL/TP prices for a `direction` ("BUY"/"SELL") given pip distances from `entryPrice`
     * (0 = use the current ask for BUY / bid for SELL).
     */
    calculateSLTP(symbol: string, direction: 'BUY' | 'SELL', entryPrice: number, stopLossPips: number, takeProfitPips: number): Promise<{
        sl: number;
        tp: number;
    }>;
    private clampVolume;
    /** Market BUY with SL/TP given as pip distances from entry. */
    buyMarketWithPips(symbol: string, volume: number, stopLossPips: number, takeProfitPips: number): Promise<number>;
    /** Market SELL with SL/TP given as pip distances from entry. */
    sellMarketWithPips(symbol: string, volume: number, stopLossPips: number, takeProfitPips: number): Promise<number>;
    /** Full account snapshot. */
    getAccountInfo(): Promise<AccountInfo>;
    /** Today's win/loss summary from the positions opened today. */
    getDailyStats(): Promise<DailyStats>;
}

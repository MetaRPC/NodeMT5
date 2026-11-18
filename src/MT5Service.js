"use strict";
/*
 * ════════════════════════════════════════════════════════════════════════════
 *  MT5Service — Friendly Facade over MT5Account (Layer 2 of 3)
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  A thin wrapper over {@link MT5Account} that trades raw protobuf for plain
 *  JavaScript: you pass simple arguments and get back typed objects (AccountInfo,
 *  Quote, Position, …) — no `*Request` building, no `getXxx()` accessors. Times
 *  are normalized to friendly numbers (seconds / ms since epoch).
 *
 *      LOW  → MT5Account   (protobuf Request/Data, direct gRPC)
 *      MID  → MT5Service   (plain args, typed objects)   ← you are here
 *      HIGH → MT5Sugar     (one-liners, business logic)
 *
 *  METHOD GROUPS
 *  ──────────────────────────────────────────────────────────────────────────
 *   • Account    : getAccountSummary · getAccountDouble/Integer/String
 *   • Symbol     : getSymbolsTotal · symbolExist · getSymbolName · symbolSelect ·
 *                  isSymbolSynchronized · getSymbolDouble/Integer/String ·
 *                  getSymbolMarginRate · getSymbolTick · getSymbolSessionQuote/Trade ·
 *                  getSymbolParams · getSymbolParamsMany · priceHistory · ensureSymbol
 *   • Positions  : getPositionsTotal · getOpenedOrders · getOpenedTickets ·
 *                  getPositions · getOrderHistory · getPositionsHistory
 *   • DOM        : subscribeMarketDepth · unsubscribeMarketDepth · getMarketDepth
 *   • Trading    : placeOrder · modifyOrder · closeOrder · checkOrder ·
 *                  calculateMargin · calculateProfit
 *   • Streaming  : streamTicks · streamTradeUpdates · streamPositionProfits ·
 *                  streamOpenedTickets · streamTransactions
 *
 *  Errors propagate from MT5Account unchanged (`MrpcError` / transport failures).
 * ════════════════════════════════════════════════════════════════════════════
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MT5Service = void 0;
const MT5Account_1 = require("./MT5Account");
const errors_1 = require("./errors");
// ── internal helpers ──────────────────────────────────────────────────────────
const ORDER_TYPES = {
    BUY: MT5Account_1.TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY,
    SELL: MT5Account_1.TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_SELL,
    BUY_LIMIT: MT5Account_1.TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY_LIMIT,
    SELL_LIMIT: MT5Account_1.TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_SELL_LIMIT,
    BUY_STOP: MT5Account_1.TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY_STOP,
    SELL_STOP: MT5Account_1.TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_SELL_STOP,
    BUY_STOP_LIMIT: MT5Account_1.TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY_STOP_LIMIT,
    SELL_STOP_LIMIT: MT5Account_1.TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_SELL_STOP_LIMIT,
};
const tsToSeconds = (ts) => (ts && ts.getSeconds ? Number(ts.getSeconds()) : 0);
const tsToMs = (ts) => (ts && ts.getSeconds ? Number(ts.getSeconds()) * 1000 + Math.floor(Number(ts.getNanos() || 0) / 1e6) : 0);
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
const mapSymbolParams = (s) => ({
    name: s.getName(), digits: s.getDigits(), point: s.getPoint(), bid: s.getBid(), ask: s.getAsk(), spread: s.getSpread(),
    contractSize: s.getTradeContractSize(), tickSize: s.getTradeTickSize(), tickValue: s.getTradeTickValue(),
    volumeMin: s.getVolumeMin(), volumeMax: s.getVolumeMax(), volumeStep: s.getVolumeStep(), volumeLimit: s.getVolumeLimit(),
    swapLong: s.getSwapLong(), swapShort: s.getSwapShort(), stopsLevel: s.getTradeStopsLevel(), freezeLevel: s.getTradeFreezeLevel(),
    tradeMode: s.getTradeMode(), tradeCalcMode: s.getTradeCalcMode(), tradeExeMode: s.getTradeExeMode(),
    fillingModes: s.getFillingModeList ? s.getFillingModeList() : [],
    currencyBase: s.getCurrencyBase(), currencyProfit: s.getCurrencyProfit(), currencyMargin: s.getCurrencyMargin(),
    description: s.getSymDescription(), path: s.getPath(),
    visible: !!s.getVisible(), selected: !!s.getSelect(), exists: !!s.getExist(),
});
const mapOrderResult = (data) => {
    const order = Number(data.getOrder());
    const deal = Number(data.getDeal());
    return {
        ticket: order || deal,
        retcode: data.getReturnedCode(), retcodeDescription: data.getReturnedCodeDescription(),
        deal, order, volume: data.getVolume(), price: data.getPrice(), bid: data.getBid(), ask: data.getAsk(),
        comment: data.getComment(), requestId: Number(data.getRequestId()),
    };
};
const tradeModeName = (code) => code === 0 ? 'DEMO' : code === 1 ? 'CONTEST' : code === 2 ? 'REAL' : 'UNKNOWN';
// #endregion
class MT5Service {
    acc;
    constructor(acc) {
        this.acc = acc;
    }
    /** Construct the Service together with a fresh {@link MT5Account}. */
    static create(host = 'mt5.mrpc.pro', port = 443, apiKey = null, id = null) {
        return new MT5Service(new MT5Account_1.MT5Account(host, port, apiKey, id));
    }
    /** The underlying low-level client, for raw RPCs this facade does not surface. */
    account() { return this.acc; }
    /** Connect the terminal (delegates to {@link MT5Account.connect}). */
    connect(loginOrOptions, password, server) {
        return this.acc.connect(loginOrOptions, password, server);
    }
    /** Stop the terminal on the gateway and close the channel. */
    disconnect(deleteOnDisconnect = false) { return this.acc.disconnect(deleteOnDisconnect); }
    // #region ACCOUNT INFORMATION ─────────────────────────────────────────────────
    /** All account data as one friendly {@link AccountInfo} (composes AccountSummary + margin + server). */
    async getAccountSummary() {
        const P = MT5Account_1.AccountInformationPb.AccountInfoDoublePropertyType;
        const serverReq = new MT5Account_1.AccountInformationPb.AccountInfoStringRequest();
        serverReq.setPropertyId(MT5Account_1.AccountInformationPb.AccountInfoStringPropertyType.ACCOUNT_SERVER);
        const [summary, margin, freeMargin, marginLevel, server] = await Promise.all([
            this.acc.accountSummary(),
            this.acc.accountInfoDouble(P.ACCOUNT_MARGIN),
            this.acc.accountInfoDouble(P.ACCOUNT_MARGIN_FREE),
            this.acc.accountInfoDouble(P.ACCOUNT_MARGIN_LEVEL),
            this.acc.accountInfoString(MT5Account_1.AccountInformationPb.AccountInfoStringPropertyType.ACCOUNT_SERVER),
        ]);
        if (!summary)
            throw new errors_1.MrpcError('AccountSummary returned no data');
        const code = summary.getAccountTradeMode();
        return {
            login: summary.getAccountLogin(), currency: summary.getAccountCurrency(),
            balance: summary.getAccountBalance(), equity: summary.getAccountEquity(), credit: summary.getAccountCredit(),
            margin, freeMargin, marginLevel, leverage: summary.getAccountLeverage(),
            name: summary.getAccountUserName(), server: server || this.acc.lastServer || '',
            company: summary.getAccountCompanyName(), tradeMode: tradeModeName(code), tradeModeCode: code,
            serverTime: tsToSeconds(summary.getServerTime()),
            utcServerShiftMinutes: summary.getUtcTimezoneServerTimeShiftMinutes(),
        };
    }
    /** One ACCOUNT_* double property (e.g. `AccountInfoDoublePropertyType.ACCOUNT_BALANCE`). */
    getAccountDouble(propertyId) { return this.acc.accountInfoDouble(propertyId); }
    /** One ACCOUNT_* integer property (e.g. login, leverage). */
    getAccountInteger(propertyId) { return this.acc.accountInfoInteger(propertyId); }
    /** One ACCOUNT_* string property (e.g. currency, company). */
    getAccountString(propertyId) { return this.acc.accountInfoString(propertyId); }
    // #endregion
    // #region SYMBOL INFORMATION & OPERATIONS ─────────────────────────────────────
    /** Number of symbols — all, or only those in Market Watch when `selectedOnly` is true. */
    async getSymbolsTotal(selectedOnly = false) {
        const req = new MT5Account_1.MarketInfoPb.SymbolsTotalRequest();
        req.setMode(selectedOnly);
        const d = await this.acc.symbolsTotal(req);
        return d ? Number(d.getTotal()) : 0;
    }
    /** Whether a symbol exists; also reports whether it is a custom symbol. */
    async symbolExist(symbol) {
        const req = new MT5Account_1.MarketInfoPb.SymbolExistRequest();
        req.setName(symbol);
        const d = await this.acc.symbolExist(req);
        return { exists: !!d?.getExists(), isCustom: !!d?.getIsCustom() };
    }
    /** Symbol name by index (over all symbols, or only Market-Watch ones when `selectedOnly`). */
    async getSymbolName(index, selectedOnly = false) {
        const req = new MT5Account_1.MarketInfoPb.SymbolNameRequest();
        req.setIndex(index);
        req.setSelected(selectedOnly);
        const d = await this.acc.symbolName(req);
        return d ? d.getName() : '';
    }
    /** Add (select=true) or remove a symbol from Market Watch. */
    symbolSelect(symbol, select = true) { return this.acc.symbolSelect(symbol, select); }
    /** Whether a symbol's rates are synchronized with the server. */
    isSymbolSynchronized(symbol) { return this.acc.symbolIsSynchronized(symbol); }
    /** One SYMBOL_* double property (e.g. `SymbolInfoDoubleProperty.SYMBOL_BID`). */
    async getSymbolDouble(symbol, property) {
        const req = new MT5Account_1.MarketInfoPb.SymbolInfoDoubleRequest();
        req.setSymbol(symbol);
        req.setType(property);
        const d = await this.acc.symbolInfoDouble(req);
        return d ? d.getValue() : 0;
    }
    /** One SYMBOL_* integer property (e.g. digits, spread). */
    async getSymbolInteger(symbol, property) {
        const req = new MT5Account_1.MarketInfoPb.SymbolInfoIntegerRequest();
        req.setSymbol(symbol);
        req.setType(property);
        const d = await this.acc.symbolInfoInteger(req);
        return d ? Number(d.getValue()) : 0;
    }
    /** One SYMBOL_* string property (e.g. description, base currency). */
    async getSymbolString(symbol, property) {
        const req = new MT5Account_1.MarketInfoPb.SymbolInfoStringRequest();
        req.setSymbol(symbol);
        req.setType(property);
        const d = await this.acc.symbolInfoString(req);
        return d ? d.getValue() : '';
    }
    /** Initial / maintenance margin rates for a symbol and order type. */
    async getSymbolMarginRate(symbol, orderType) {
        const req = new MT5Account_1.MarketInfoPb.SymbolInfoMarginRateRequest();
        req.setSymbol(symbol);
        req.setOrderType(ORDER_TYPES[orderType]);
        const d = await this.acc.symbolInfoMarginRate(req);
        return { initialMarginRate: d?.getInitialMarginRate() ?? 0, maintenanceMarginRate: d?.getMaintenanceMarginRate() ?? 0 };
    }
    /** Latest tick of a symbol as a friendly {@link Quote}. */
    async getSymbolTick(symbol) {
        const t = await this.acc.symbolInfoTick(symbol);
        return mapTick(symbol, t);
    }
    /** Quote-session window for a symbol on a weekday (0 = Sunday … 6 = Saturday). */
    async getSymbolSessionQuote(symbol, dayOfWeek, sessionIndex = 0) {
        const req = new MT5Account_1.MarketInfoPb.SymbolInfoSessionQuoteRequest();
        req.setSymbol(symbol);
        req.setDayOfWeek(dayOfWeek);
        req.setSessionIndex(sessionIndex);
        const d = await this.acc.symbolInfoSessionQuote(req);
        return { from: tsToSeconds(d?.getFrom?.()), to: tsToSeconds(d?.getTo?.()) };
    }
    /** Trade-session window for a symbol on a weekday (0 = Sunday … 6 = Saturday). */
    async getSymbolSessionTrade(symbol, dayOfWeek, sessionIndex = 0) {
        const req = new MT5Account_1.MarketInfoPb.SymbolInfoSessionTradeRequest();
        req.setSymbol(symbol);
        req.setDayOfWeek(dayOfWeek);
        req.setSessionIndex(sessionIndex);
        const d = await this.acc.symbolInfoSessionTrade(req);
        return { from: tsToSeconds(d?.getFrom?.()), to: tsToSeconds(d?.getTo?.()) };
    }
    /** Full contract specification of one symbol. */
    async getSymbolParams(symbol) {
        const data = await this.acc.symbolParamsMany(symbol);
        const list = data ? data.getSymbolInfosList() : [];
        const hit = list.find((s) => s.getName() === symbol) || list[0];
        if (!hit)
            throw new errors_1.MrpcError(`SymbolParamsMany: symbol ${symbol} not found`);
        return mapSymbolParams(hit);
    }
    /** Full contract specification of every symbol (one unfiltered call). */
    async getSymbolParamsMany() {
        const data = await this.acc.symbolParamsMany();
        return data ? data.getSymbolInfosList().map(mapSymbolParams) : [];
    }
    /**
     * OHLC history as friendly {@link Bar}s. With `from`/`to` omitted, returns the newest `maxBars`
     * bars (default 500). Times are seconds since epoch in the broker's server timezone.
     */
    async priceHistory(symbol, timeframe, opts = {}) {
        const data = await this.acc.priceHistory(symbol, timeframe, opts);
        const bars = data ? data.getBarsList() : [];
        return bars.map((b) => ({
            time: Number(b.getTime()), open: b.getOpen(), high: b.getHigh(), low: b.getLow(), close: b.getClose(),
            tickVolume: Number(b.getTickVolume()), spread: Number(b.getSpread()), realVolume: Number(b.getRealVolume()),
        }));
    }
    /**
     * Make sure a symbol is in Market Watch and has a two-sided quote; returns the first usable tick.
     * A freshly added symbol reports bid/ask 0 until synchronized, so we poll briefly.
     */
    async ensureSymbol(symbol, waitMs = 10000) {
        await this.acc.symbolSelect(symbol, true);
        const until = Date.now() + waitMs;
        let last = null;
        while (Date.now() < until) {
            try {
                last = await this.getSymbolTick(symbol);
                if (last.bid > 0 && last.ask > 0)
                    return last;
            }
            catch { /* not synchronized yet */ }
            await new Promise(r => setTimeout(r, 500));
        }
        if (last)
            return last;
        throw new errors_1.MrpcError(`ensureSymbol: no quote for ${symbol} within ${waitMs} ms`);
    }
    // #endregion
    // #region POSITIONS & ORDERS INFORMATION ──────────────────────────────────────
    /** Number of open positions. */
    async getPositionsTotal() {
        const d = await this.acc.positionsTotal();
        return d ? Number(d.getTotalPositions()) : 0;
    }
    /** Open positions and pending orders with full detail. */
    async getOpenedOrders() {
        const data = await this.acc.openedOrders();
        const positions = (data ? data.getPositionInfosList() : []).map((p) => ({
            ticket: Number(p.getTicket()), symbol: p.getSymbol(), type: p.getType(), volume: p.getVolume(),
            priceOpen: p.getPriceOpen(), priceCurrent: p.getPriceCurrent(), stopLoss: p.getStopLoss(), takeProfit: p.getTakeProfit(),
            swap: p.getSwap(), profit: p.getProfit(), commission: p.getPositionCommission ? p.getPositionCommission() : 0,
            magic: Number(p.getMagicNumber()), comment: p.getComment(),
            openTime: tsToSeconds(p.getOpenTime()), identifier: Number(p.getIdentifier()),
        }));
        const orders = (data ? data.getOpenedOrdersList() : []).map((o) => ({
            ticket: Number(o.getTicket()), symbol: o.getSymbol(), type: o.getType(), state: o.getState(),
            volumeInitial: o.getVolumeInitial(), volumeCurrent: o.getVolumeCurrent(),
            priceOpen: o.getPriceOpen(), priceCurrent: o.getPriceCurrent(),
            stopLoss: o.getStopLoss(), takeProfit: o.getTakeProfit(), stopLimit: o.getStopLimit(),
            magic: Number(o.getMagicNumber()), comment: o.getComment(),
            timeSetup: tsToSeconds(o.getTimeSetup()), timeExpiration: tsToSeconds(o.getTimeExpiration()),
            positionId: Number(o.getPositionId()),
        }));
        return { positions, orders };
    }
    /** Just the ticket numbers (lightweight): open positions and pending orders. */
    async getOpenedTickets() {
        const d = await this.acc.openedOrdersTickets();
        return {
            positionTickets: (d?.getOpenedPositionTicketsList?.() || []).map(Number),
            orderTickets: (d?.getOpenedOrdersTicketsList?.() || []).map(Number),
        };
    }
    /** Open positions, optionally only those carrying a given magic number. */
    async getPositions(magic) {
        const { positions } = await this.getOpenedOrders();
        return magic === undefined ? positions : positions.filter(p => p.magic === magic);
    }
    /** Closed orders + deals in a window (server time). Use {@link MT5Account.serverDate} to build it from UTC. */
    async getOrderHistory(from, to, opts = {}) {
        const data = await this.acc.orderHistory(from, to, opts);
        const orders = [];
        const deals = [];
        for (const h of (data ? data.getHistoryDataList() : [])) {
            const o = h.getHistoryOrder && h.getHistoryOrder();
            if (o)
                orders.push({
                    ticket: Number(o.getTicket()), symbol: o.getSymbol(), type: o.getType(), state: o.getState(),
                    volumeInitial: o.getVolumeInitial(), volumeCurrent: o.getVolumeCurrent(), priceOpen: o.getPriceOpen(),
                    stopLoss: o.getStopLoss(), takeProfit: o.getTakeProfit(), magic: Number(o.getMagicNumber()),
                    positionId: Number(o.getPositionId()), comment: o.getComment(),
                    timeSetup: tsToSeconds(o.getSetupTime()), timeDone: tsToSeconds(o.getDoneTime()),
                });
            const d = h.getHistoryDeal && h.getHistoryDeal();
            if (d)
                deals.push({
                    ticket: Number(d.getTicket()), symbol: d.getSymbol(), type: d.getType(), entry: d.getEntryType(),
                    volume: d.getVolume(), price: d.getPrice(), profit: d.getProfit(), commission: d.getCommission(),
                    swap: d.getSwap(), fee: d.getFee(), positionId: Number(d.getPositionId()), comment: d.getComment(),
                    time: tsToSeconds(d.getTime()),
                });
        }
        return { orders, deals };
    }
    /** Closed positions whose OPEN time falls in the window (server time). */
    async getPositionsHistory(from, to, opts = {}) {
        const data = await this.acc.positionsHistory(from, to, opts);
        return (data ? data.getHistoryPositionsList() : []).map((p) => ({
            ticket: Number(p.getPositionTicket()), symbol: p.getSymbol(), type: p.getOrderType(), volume: p.getVolume(),
            openTime: tsToSeconds(p.getOpenTime()), closeTime: tsToSeconds(p.getCloseTime()),
            openPrice: p.getOpenPrice(), closePrice: p.getClosePrice(), stopLoss: p.getStopLoss(), takeProfit: p.getTakeProfit(),
            profit: p.getProfit(), commission: p.getCommission(), swap: p.getSwap(), fee: p.getFee(),
            magic: Number(p.getMagic()), comment: p.getComment(),
        }));
    }
    // #endregion
    // #region MARKET DEPTH / DOM ───────────────────────────────────────────────────
    /** Subscribe to Depth-of-Market updates for a symbol; returns whether the book opened. */
    async subscribeMarketDepth(symbol) {
        const req = new MT5Account_1.MarketInfoPb.MarketBookAddRequest();
        req.setSymbol(symbol);
        const d = await this.acc.marketBookAdd(req);
        return !!d?.getOpenedSuccessfully();
    }
    /** Unsubscribe from DOM for a symbol; returns whether the book closed. */
    async unsubscribeMarketDepth(symbol) {
        const req = new MT5Account_1.MarketInfoPb.MarketBookReleaseRequest();
        req.setSymbol(symbol);
        const d = await this.acc.marketBookRelease(req);
        return !!d?.getClosedSuccessfully();
    }
    /** Current market-depth snapshot for a symbol. */
    async getMarketDepth(symbol) {
        const req = new MT5Account_1.MarketInfoPb.MarketBookGetRequest();
        req.setSymbol(symbol);
        const d = await this.acc.marketBookGet(req);
        return (d?.getMqlBookInfosList?.() || []).map((b) => ({
            type: b.getType(), price: b.getPrice(), volume: Number(b.getVolume()), volumeReal: b.getVolumeReal(),
        }));
    }
    // #endregion
    // #region TRADING OPERATIONS ──────────────────────────────────────────────────
    /** Place a market or pending order. A broker rejection is in the result (`retcode` 10009 = done). */
    async placeOrder(req) {
        if (!(req.action in ORDER_TYPES))
            throw new errors_1.MrpcError(`Unknown order action ${req.action}`);
        const g = new MT5Account_1.TradingHelperPb.OrderSendRequest();
        g.setSymbol(req.symbol);
        g.setOperation(ORDER_TYPES[req.action]);
        g.setVolume(req.volume);
        if (req.price !== undefined)
            g.setPrice(req.price);
        if (req.stopLoss !== undefined)
            g.setStopLoss(req.stopLoss);
        if (req.takeProfit !== undefined)
            g.setTakeProfit(req.takeProfit);
        if (req.comment !== undefined)
            g.setComment(req.comment);
        if (req.slippage !== undefined)
            g.setSlippage(req.slippage);
        if (req.magic !== undefined)
            g.setExpertId(req.magic);
        if (req.stopLimitPrice !== undefined)
            g.setStopLimitPrice(req.stopLimitPrice);
        if (req.expirationTimeType !== undefined)
            g.setExpirationTimeType(req.expirationTimeType);
        if (req.expirationTime)
            g.setExpirationTime((0, MT5Account_1.toTimestamp)(req.expirationTime));
        if (req.quotesWaitMs !== undefined)
            g.setQuotesWaitMs(req.quotesWaitMs);
        return mapOrderResult(await this.acc.orderSend(g));
    }
    /** Change SL/TP of a position, or SL/TP/price/expiration of a pending order. */
    async modifyOrder(req) {
        const g = new MT5Account_1.TradingHelperPb.OrderModifyRequest();
        g.setTicket(req.ticket);
        if (req.stopLoss !== undefined)
            g.setStopLoss(req.stopLoss);
        if (req.takeProfit !== undefined)
            g.setTakeProfit(req.takeProfit);
        if (req.price !== undefined)
            g.setPrice(req.price);
        if (req.stopLimit !== undefined)
            g.setStopLimit(req.stopLimit);
        if (req.expirationTimeType !== undefined)
            g.setExpirationTimeType(req.expirationTimeType);
        if (req.expirationTime)
            g.setExpirationTime((0, MT5Account_1.toTimestamp)(req.expirationTime));
        return mapOrderResult(await this.acc.orderModify(g));
    }
    /** Close a position (fully or partially) or delete a pending order. */
    async closeOrder(req) {
        const g = new MT5Account_1.TradingHelperPb.OrderCloseRequest();
        g.setTicket(req.ticket);
        if (req.volume !== undefined)
            g.setVolume(req.volume);
        if (req.slippage !== undefined)
            g.setSlippage(req.slippage);
        const d = await this.acc.orderClose(g);
        return { retcode: d.getReturnedCode(), retcodeDescription: d.getReturnedCodeDescription(), closeMode: d.getCloseMode() };
    }
    /** Validate an order before sending it. `req` is a built `OrderCheckRequest` (it wraps an MqlTradeRequest). */
    async checkOrder(req) {
        const data = await this.acc.orderCheck(req);
        const r = data?.getMqlTradeCheckResult?.();
        if (!r)
            throw new errors_1.MrpcError('CheckOrder: the reply has no check result');
        return {
            returnedCode: r.getReturnedCode(), balance: r.getBalanceAfterDeal(), equity: r.getEquityAfterDeal(),
            profit: r.getProfit(), margin: r.getMargin(), marginFree: r.getFreeMargin(),
            marginLevel: r.getMarginLevel(), comment: r.getComment(),
        };
    }
    /** Margin required to open `volume` lots of `symbol` as `action` at `price`. */
    async calculateMargin(action, symbol, volume, price) {
        const req = new MT5Account_1.TradeFunctionsPb.OrderCalcMarginRequest();
        req.setOrderType(ORDER_TYPES[action]);
        req.setSymbol(symbol);
        req.setVolume(volume);
        req.setOpenPrice(price);
        const d = await this.acc.orderCalcMargin(req);
        return d ? d.getMargin() : 0;
    }
    /** Profit of `volume` lots of `symbol` moving `action` from `openPrice` to `closePrice`. */
    async calculateProfit(action, symbol, volume, openPrice, closePrice) {
        const req = new MT5Account_1.TradeFunctionsPb.OrderCalcProfitRequest();
        req.setOrderType(ORDER_TYPES[action]);
        req.setSymbol(symbol);
        req.setVolume(volume);
        req.setOpenPrice(openPrice);
        req.setClosePrice(closePrice);
        const d = await this.acc.orderCalcProfit(req);
        return d ? d.getProfit() : 0;
    }
    // #endregion
    // #region STREAMING METHODS ───────────────────────────────────────────────────
    /** Stream live ticks of the given symbols (all Market-Watch symbols when the list is empty). */
    streamTicks(symbols, callback, onError) {
        return this.acc.onSymbolTick(symbols, (data) => {
            const t = data.getSymbolTick?.();
            if (t)
                callback(mapTick('', t));
        }, onError);
    }
    /** Stream trade events (order/position/deal updates) — delivers the raw OnTradeData. */
    streamTradeUpdates(callback, onError) {
        return this.acc.onTrade(callback, onError);
    }
    /** Stream periodic position-profit snapshots — delivers the raw OnPositionProfitData. */
    streamPositionProfits(callback, onError) {
        return this.acc.onPositionProfit(undefined, callback, onError);
    }
    /** Stream periodic ticket snapshots — delivers the raw OnPositionsAndPendingOrdersTicketsData. */
    streamOpenedTickets(callback, onError) {
        return this.acc.onPositionsAndPendingOrdersTickets(undefined, callback, onError);
    }
    /** Stream trade-transaction events — delivers the raw OnTradeTransactionData. */
    streamTransactions(callback, onError) {
        return this.acc.onTradeTransaction(callback, onError);
    }
}
exports.MT5Service = MT5Service;

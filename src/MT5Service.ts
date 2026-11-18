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

import {
  MT5Account, Timeframe, Subscription, ConnectOptions, toTimestamp,
  AccountHelperPb, AccountInformationPb, MarketInfoPb, TradingHelperPb, TradeFunctionsPb,
} from './MT5Account';
import { MrpcError } from './errors';

// #region DATA TRANSFER OBJECTS (DTOs) ───────────────────────────────────────

export type TradeMode = 'DEMO' | 'CONTEST' | 'REAL' | 'UNKNOWN';
export type OrderAction =
  | 'BUY' | 'SELL' | 'BUY_LIMIT' | 'SELL_LIMIT' | 'BUY_STOP' | 'SELL_STOP'
  | 'BUY_STOP_LIMIT' | 'SELL_STOP_LIMIT';

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
  /** The same instant in UTC (seconds since epoch); absent when the server does not send it. */
  serverTimeUtc?: number;
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
  /** Bar open time in seconds since epoch, UTC; absent when the server does not send it. */
  timeUtc?: number;
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
  /** Position open time in UTC (seconds since epoch); absent when the server does not send it. */
  openTimeUtc?: number;
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
  /** `timeSetup` / `timeExpiration` in UTC (seconds since epoch); absent when the server does not send them. */
  timeSetupUtc?: number;
  timeExpirationUtc?: number;
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
  /** Deal time in UTC (seconds since epoch); absent when the server does not send it. */
  timeUtc?: number;
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
  /** `timeSetup` / `timeDone` in UTC (seconds since epoch); absent when the server does not send them. */
  timeSetupUtc?: number;
  timeDoneUtc?: number;
}

/** A closed position, from {@link MT5Service.getPositionsHistory}. */
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

// ── internal helpers ──────────────────────────────────────────────────────────

const ORDER_TYPES: Record<OrderAction, number> = {
  BUY: TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY,
  SELL: TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_SELL,
  BUY_LIMIT: TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY_LIMIT,
  SELL_LIMIT: TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_SELL_LIMIT,
  BUY_STOP: TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY_STOP,
  SELL_STOP: TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_SELL_STOP,
  BUY_STOP_LIMIT: TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_BUY_STOP_LIMIT,
  SELL_STOP_LIMIT: TradingHelperPb.TMT5_ENUM_ORDER_TYPE.TMT5_ORDER_TYPE_SELL_STOP_LIMIT,
};

const tsToSeconds = (ts: any): number => (ts && ts.getSeconds ? Number(ts.getSeconds()) : 0);
const tsToMs = (ts: any): number =>
  (ts && ts.getSeconds ? Number(ts.getSeconds()) * 1000 + Math.floor(Number(ts.getNanos() || 0) / 1e6) : 0);

/** A tick's time in ms: the UTC fields when the server fills them, the server-time ones otherwise. */
const tickTimeMs = (t: any): number =>
  Number(t.getTimeMscUtc?.()) || tsToMs(t.getTimeUtc?.()) || Number(t.getTimeMsc?.()) || tsToSeconds(t.getTime?.()) * 1000;

/** `{ [key]: seconds }` of the message's optional UTC Timestamp `field` when the server sent it, `{}` otherwise. */
const utcSeconds = (key: string, msg: any, field: string): Record<string, number> =>
  (msg && typeof msg[`has${field}`] === 'function' && msg[`has${field}`]() ? { [key]: tsToSeconds(msg[`get${field}`]()) } : {});

const mapTick = (symbol: string, t: any): Quote => ({
  symbol: t.getSymbol?.() || symbol,
  bid: t.getBid(),
  ask: t.getAsk(),
  last: t.getLast(),
  volume: Number(t.getVolumeReal ? t.getVolumeReal() : t.getVolume()),
  time: tickTimeMs(t),
  flags: Number(t.getFlags()),
});

const mapSymbolParams = (s: any): SymbolParams => ({
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

const mapOrderResult = (data: any): OrderResult => {
  const order = Number(data.getOrder());
  const deal = Number(data.getDeal());
  return {
    ticket: order || deal,
    retcode: data.getReturnedCode(), retcodeDescription: data.getReturnedCodeDescription(),
    deal, order, volume: data.getVolume(), price: data.getPrice(), bid: data.getBid(), ask: data.getAsk(),
    comment: data.getComment(), requestId: Number(data.getRequestId()),
  };
};

const tradeModeName = (code: number): TradeMode =>
  code === 0 ? 'DEMO' : code === 1 ? 'CONTEST' : code === 2 ? 'REAL' : 'UNKNOWN';

// #endregion

export class MT5Service {
  constructor(private readonly acc: MT5Account) {}

  /** Construct the Service together with a fresh {@link MT5Account}. */
  static create(host = 'mt5.mrpc.pro', port = 443, apiKey: string | null = null, id: string | null = null): MT5Service {
    return new MT5Service(new MT5Account(host, port, apiKey, id));
  }

  /** The underlying low-level client, for raw RPCs this facade does not surface. */
  account(): MT5Account { return this.acc; }

  /** Connect the terminal (delegates to {@link MT5Account.connect}). */
  connect(loginOrOptions: number | ConnectOptions, password?: string, server?: string): Promise<boolean> {
    return this.acc.connect(loginOrOptions as any, password, server);
  }

  /** Stop the terminal on the gateway and close the channel. */
  disconnect(deleteOnDisconnect = false): Promise<void> { return this.acc.disconnect(deleteOnDisconnect); }

  // #region ACCOUNT INFORMATION ─────────────────────────────────────────────────

  /** All account data as one friendly {@link AccountInfo} (composes AccountSummary + margin + server). */
  async getAccountSummary(): Promise<AccountInfo> {
    const P = AccountInformationPb.AccountInfoDoublePropertyType;
    const serverReq = new AccountInformationPb.AccountInfoStringRequest();
    serverReq.setPropertyId(AccountInformationPb.AccountInfoStringPropertyType.ACCOUNT_SERVER);

    const [summary, margin, freeMargin, marginLevel, server] = await Promise.all([
      this.acc.accountSummary(),
      this.acc.accountInfoDouble(P.ACCOUNT_MARGIN),
      this.acc.accountInfoDouble(P.ACCOUNT_MARGIN_FREE),
      this.acc.accountInfoDouble(P.ACCOUNT_MARGIN_LEVEL),
      this.acc.accountInfoString(AccountInformationPb.AccountInfoStringPropertyType.ACCOUNT_SERVER),
    ]);
    if (!summary) throw new MrpcError('AccountSummary returned no data');
    const code = summary.getAccountTradeMode();
    return {
      login: summary.getAccountLogin(), currency: summary.getAccountCurrency(),
      balance: summary.getAccountBalance(), equity: summary.getAccountEquity(), credit: summary.getAccountCredit(),
      margin, freeMargin, marginLevel, leverage: summary.getAccountLeverage(),
      name: summary.getAccountUserName(), server: server || this.acc.lastServer || '',
      company: summary.getAccountCompanyName(), tradeMode: tradeModeName(code), tradeModeCode: code,
      serverTime: tsToSeconds(summary.getServerTime()),
      ...utcSeconds('serverTimeUtc', summary, 'ServerTimeUtc'),
      utcServerShiftMinutes: summary.getUtcTimezoneServerTimeShiftMinutes(),
    };
  }

  /** One ACCOUNT_* double property (e.g. `AccountInfoDoublePropertyType.ACCOUNT_BALANCE`). */
  getAccountDouble(propertyId: number): Promise<number> { return this.acc.accountInfoDouble(propertyId); }

  /** One ACCOUNT_* integer property (e.g. login, leverage). */
  getAccountInteger(propertyId: number): Promise<number> { return this.acc.accountInfoInteger(propertyId); }

  /** One ACCOUNT_* string property (e.g. currency, company). */
  getAccountString(propertyId: number): Promise<string> { return this.acc.accountInfoString(propertyId); }

  // #endregion

  // #region SYMBOL INFORMATION & OPERATIONS ─────────────────────────────────────

  /** Number of symbols — all, or only those in Market Watch when `selectedOnly` is true. */
  async getSymbolsTotal(selectedOnly = false): Promise<number> {
    const req = new MarketInfoPb.SymbolsTotalRequest();
    req.setMode(selectedOnly);
    const d = await this.acc.symbolsTotal(req);
    return d ? Number(d.getTotal()) : 0;
  }

  /** Whether a symbol exists; also reports whether it is a custom symbol. */
  async symbolExist(symbol: string): Promise<{ exists: boolean; isCustom: boolean }> {
    const req = new MarketInfoPb.SymbolExistRequest();
    req.setName(symbol);
    const d = await this.acc.symbolExist(req);
    return { exists: !!d?.getExists(), isCustom: !!d?.getIsCustom() };
  }

  /** Symbol name by index (over all symbols, or only Market-Watch ones when `selectedOnly`). */
  async getSymbolName(index: number, selectedOnly = false): Promise<string> {
    const req = new MarketInfoPb.SymbolNameRequest();
    req.setIndex(index);
    req.setSelected(selectedOnly);
    const d = await this.acc.symbolName(req);
    return d ? d.getName() : '';
  }

  /** Add (select=true) or remove a symbol from Market Watch. */
  symbolSelect(symbol: string, select = true): Promise<boolean> { return this.acc.symbolSelect(symbol, select); }

  /** Whether a symbol's rates are synchronized with the server. */
  isSymbolSynchronized(symbol: string): Promise<boolean> { return this.acc.symbolIsSynchronized(symbol); }

  /** One SYMBOL_* double property (e.g. `SymbolInfoDoubleProperty.SYMBOL_BID`). */
  async getSymbolDouble(symbol: string, property: number): Promise<number> {
    const req = new MarketInfoPb.SymbolInfoDoubleRequest();
    req.setSymbol(symbol); req.setType(property);
    const d = await this.acc.symbolInfoDouble(req);
    return d ? d.getValue() : 0;
  }

  /** One SYMBOL_* integer property (e.g. digits, spread). */
  async getSymbolInteger(symbol: string, property: number): Promise<number> {
    const req = new MarketInfoPb.SymbolInfoIntegerRequest();
    req.setSymbol(symbol); req.setType(property);
    const d = await this.acc.symbolInfoInteger(req);
    return d ? Number(d.getValue()) : 0;
  }

  /** One SYMBOL_* string property (e.g. description, base currency). */
  async getSymbolString(symbol: string, property: number): Promise<string> {
    const req = new MarketInfoPb.SymbolInfoStringRequest();
    req.setSymbol(symbol); req.setType(property);
    const d = await this.acc.symbolInfoString(req);
    return d ? d.getValue() : '';
  }

  /** Initial / maintenance margin rates for a symbol and order type. */
  async getSymbolMarginRate(symbol: string, orderType: OrderAction): Promise<SymbolMarginRate> {
    const req = new MarketInfoPb.SymbolInfoMarginRateRequest();
    req.setSymbol(symbol); req.setOrderType(ORDER_TYPES[orderType]);
    const d = await this.acc.symbolInfoMarginRate(req);
    return { initialMarginRate: d?.getInitialMarginRate() ?? 0, maintenanceMarginRate: d?.getMaintenanceMarginRate() ?? 0 };
  }

  /** Latest tick of a symbol as a friendly {@link Quote}. */
  async getSymbolTick(symbol: string): Promise<Quote> {
    const t = await this.acc.symbolInfoTick(symbol);
    return mapTick(symbol, t);
  }

  /** Quote-session window for a symbol on a weekday (0 = Sunday … 6 = Saturday). */
  async getSymbolSessionQuote(symbol: string, dayOfWeek: number, sessionIndex = 0): Promise<SessionTime> {
    const req = new MarketInfoPb.SymbolInfoSessionQuoteRequest();
    req.setSymbol(symbol); req.setDayOfWeek(dayOfWeek); req.setSessionIndex(sessionIndex);
    const d = await this.acc.symbolInfoSessionQuote(req);
    return { from: tsToSeconds(d?.getFrom?.()), to: tsToSeconds(d?.getTo?.()) };
  }

  /** Trade-session window for a symbol on a weekday (0 = Sunday … 6 = Saturday). */
  async getSymbolSessionTrade(symbol: string, dayOfWeek: number, sessionIndex = 0): Promise<SessionTime> {
    const req = new MarketInfoPb.SymbolInfoSessionTradeRequest();
    req.setSymbol(symbol); req.setDayOfWeek(dayOfWeek); req.setSessionIndex(sessionIndex);
    const d = await this.acc.symbolInfoSessionTrade(req);
    return { from: tsToSeconds(d?.getFrom?.()), to: tsToSeconds(d?.getTo?.()) };
  }

  /** Full contract specification of one symbol. */
  async getSymbolParams(symbol: string): Promise<SymbolParams> {
    const data = await this.acc.symbolParamsMany(symbol);
    const list = data ? data.getSymbolInfosList() : [];
    const hit = list.find((s: any) => s.getName() === symbol) || list[0];
    if (!hit) throw new MrpcError(`SymbolParamsMany: symbol ${symbol} not found`);
    return mapSymbolParams(hit);
  }

  /** Full contract specification of every symbol (one unfiltered call). */
  async getSymbolParamsMany(): Promise<SymbolParams[]> {
    const data = await this.acc.symbolParamsMany();
    return data ? data.getSymbolInfosList().map(mapSymbolParams) : [];
  }

  /**
   * OHLC history as friendly {@link Bar}s. With `from`/`to` omitted, returns the newest `maxBars`
   * bars (default 500). Times are seconds since epoch in the broker's server timezone.
   */
  async priceHistory(symbol: string, timeframe: Timeframe,
    opts: { from?: Date | number; to?: Date | number; maxBars?: number } = {}): Promise<Bar[]> {
    const data = await this.acc.priceHistory(symbol, timeframe, opts);
    const bars = data ? data.getBarsList() : [];
    return bars.map((b: any) => ({
      time: Number(b.getTime()), open: b.getOpen(), high: b.getHigh(), low: b.getLow(), close: b.getClose(),
      tickVolume: Number(b.getTickVolume()), spread: Number(b.getSpread()), realVolume: Number(b.getRealVolume()),
      ...(Number(b.getTimeUtc?.()) ? { timeUtc: Number(b.getTimeUtc()) } : {}),
    }));
  }

  /**
   * Make sure a symbol is in Market Watch and has a two-sided quote; returns the first usable tick.
   * A freshly added symbol reports bid/ask 0 until synchronized, so we poll briefly.
   */
  async ensureSymbol(symbol: string, waitMs = 10000): Promise<Quote> {
    await this.acc.symbolSelect(symbol, true);
    const until = Date.now() + waitMs;
    let last: Quote | null = null;
    while (Date.now() < until) {
      try {
        last = await this.getSymbolTick(symbol);
        if (last.bid > 0 && last.ask > 0) return last;
      } catch { /* not synchronized yet */ }
      await new Promise(r => setTimeout(r, 500));
    }
    if (last) return last;
    throw new MrpcError(`ensureSymbol: no quote for ${symbol} within ${waitMs} ms`);
  }

  // #endregion

  // #region POSITIONS & ORDERS INFORMATION ──────────────────────────────────────

  /** Number of open positions. */
  async getPositionsTotal(): Promise<number> {
    const d = await this.acc.positionsTotal();
    return d ? Number(d.getTotalPositions()) : 0;
  }

  /** Open positions and pending orders with full detail. */
  async getOpenedOrders(): Promise<{ positions: Position[]; orders: PendingOrder[] }> {
    const data = await this.acc.openedOrders();
    const positions: Position[] = (data ? data.getPositionInfosList() : []).map((p: any) => ({
      ticket: Number(p.getTicket()), symbol: p.getSymbol(), type: p.getType(), volume: p.getVolume(),
      priceOpen: p.getPriceOpen(), priceCurrent: p.getPriceCurrent(), stopLoss: p.getStopLoss(), takeProfit: p.getTakeProfit(),
      swap: p.getSwap(), profit: p.getProfit(), commission: p.getPositionCommission ? p.getPositionCommission() : 0,
      magic: Number(p.getMagicNumber()), comment: p.getComment(),
      openTime: tsToSeconds(p.getOpenTime()), ...utcSeconds('openTimeUtc', p, 'OpenTimeUtc'), identifier: Number(p.getIdentifier()),
    }));
    const orders: PendingOrder[] = (data ? data.getOpenedOrdersList() : []).map((o: any) => ({
      ticket: Number(o.getTicket()), symbol: o.getSymbol(), type: o.getType(), state: o.getState(),
      volumeInitial: o.getVolumeInitial(), volumeCurrent: o.getVolumeCurrent(),
      priceOpen: o.getPriceOpen(), priceCurrent: o.getPriceCurrent(),
      stopLoss: o.getStopLoss(), takeProfit: o.getTakeProfit(), stopLimit: o.getStopLimit(),
      magic: Number(o.getMagicNumber()), comment: o.getComment(),
      timeSetup: tsToSeconds(o.getTimeSetup()), timeExpiration: tsToSeconds(o.getTimeExpiration()),
      ...utcSeconds('timeSetupUtc', o, 'TimeSetupUtc'), ...utcSeconds('timeExpirationUtc', o, 'TimeExpirationUtc'),
      positionId: Number(o.getPositionId()),
    }));
    return { positions, orders };
  }

  /** Just the ticket numbers (lightweight): open positions and pending orders. */
  async getOpenedTickets(): Promise<{ positionTickets: number[]; orderTickets: number[] }> {
    const d = await this.acc.openedOrdersTickets();
    return {
      positionTickets: (d?.getOpenedPositionTicketsList?.() || []).map(Number),
      orderTickets: (d?.getOpenedOrdersTicketsList?.() || []).map(Number),
    };
  }

  /** Open positions, optionally only those carrying a given magic number. */
  async getPositions(magic?: number): Promise<Position[]> {
    const { positions } = await this.getOpenedOrders();
    return magic === undefined ? positions : positions.filter(p => p.magic === magic);
  }

  /** Closed orders + deals in a window (server time). Use {@link MT5Account.serverDate} to build it from UTC. */
  async getOrderHistory(from: Date | number, to: Date | number,
    opts: { sort?: number; page?: number; perPage?: number } = {}): Promise<{ orders: HistoryOrder[]; deals: HistoryDeal[] }> {
    const data = await this.acc.orderHistory(from, to, opts);
    const orders: HistoryOrder[] = [];
    const deals: HistoryDeal[] = [];
    for (const h of (data ? data.getHistoryDataList() : [])) {
      const o = h.getHistoryOrder && h.getHistoryOrder();
      if (o) orders.push({
        ticket: Number(o.getTicket()), symbol: o.getSymbol(), type: o.getType(), state: o.getState(),
        volumeInitial: o.getVolumeInitial(), volumeCurrent: o.getVolumeCurrent(), priceOpen: o.getPriceOpen(),
        stopLoss: o.getStopLoss(), takeProfit: o.getTakeProfit(), magic: Number(o.getMagicNumber()),
        positionId: Number(o.getPositionId()), comment: o.getComment(),
        timeSetup: tsToSeconds(o.getSetupTime()), timeDone: tsToSeconds(o.getDoneTime()),
        ...utcSeconds('timeSetupUtc', o, 'SetupTimeUtc'), ...utcSeconds('timeDoneUtc', o, 'DoneTimeUtc'),
      });
      const d = h.getHistoryDeal && h.getHistoryDeal();
      if (d) deals.push({
        ticket: Number(d.getTicket()), symbol: d.getSymbol(), type: d.getType(), entry: d.getEntryType(),
        volume: d.getVolume(), price: d.getPrice(), profit: d.getProfit(), commission: d.getCommission(),
        swap: d.getSwap(), fee: d.getFee(), positionId: Number(d.getPositionId()), comment: d.getComment(),
        time: tsToSeconds(d.getTime()), ...utcSeconds('timeUtc', d, 'TimeUtc'),
      });
    }
    return { orders, deals };
  }

  /** Closed positions whose OPEN time falls in the window (server time). */
  async getPositionsHistory(from: Date | number, to: Date | number,
    opts: { sort?: number; page?: number; perPage?: number } = {}): Promise<HistoryPosition[]> {
    const data = await this.acc.positionsHistory(from, to, opts);
    return (data ? data.getHistoryPositionsList() : []).map((p: any) => ({
      ticket: Number(p.getPositionTicket()), symbol: p.getSymbol(), type: p.getOrderType(), volume: p.getVolume(),
      openTime: tsToSeconds(p.getOpenTime()), closeTime: tsToSeconds(p.getCloseTime()),
      ...utcSeconds('openTimeUtc', p, 'OpenTimeUtc'), ...utcSeconds('closeTimeUtc', p, 'CloseTimeUtc'),
      openPrice: p.getOpenPrice(), closePrice: p.getClosePrice(), stopLoss: p.getStopLoss(), takeProfit: p.getTakeProfit(),
      profit: p.getProfit(), commission: p.getCommission(), swap: p.getSwap(), fee: p.getFee(),
      magic: Number(p.getMagic()), comment: p.getComment(),
    }));
  }

  // #endregion

  // #region MARKET DEPTH / DOM ───────────────────────────────────────────────────

  /** Subscribe to Depth-of-Market updates for a symbol; returns whether the book opened. */
  async subscribeMarketDepth(symbol: string): Promise<boolean> {
    const req = new MarketInfoPb.MarketBookAddRequest();
    req.setSymbol(symbol);
    const d = await this.acc.marketBookAdd(req);
    return !!d?.getOpenedSuccessfully();
  }

  /** Unsubscribe from DOM for a symbol; returns whether the book closed. */
  async unsubscribeMarketDepth(symbol: string): Promise<boolean> {
    const req = new MarketInfoPb.MarketBookReleaseRequest();
    req.setSymbol(symbol);
    const d = await this.acc.marketBookRelease(req);
    return !!d?.getClosedSuccessfully();
  }

  /** Current market-depth snapshot for a symbol. */
  async getMarketDepth(symbol: string): Promise<BookInfo[]> {
    const req = new MarketInfoPb.MarketBookGetRequest();
    req.setSymbol(symbol);
    const d = await this.acc.marketBookGet(req);
    return (d?.getMqlBookInfosList?.() || []).map((b: any) => ({
      type: b.getType(), price: b.getPrice(), volume: Number(b.getVolume()), volumeReal: b.getVolumeReal(),
    }));
  }

  // #endregion

  // #region TRADING OPERATIONS ──────────────────────────────────────────────────

  /** Place a market or pending order. A broker rejection is in the result (`retcode` 10009 = done). */
  async placeOrder(req: OrderRequest): Promise<OrderResult> {
    if (!(req.action in ORDER_TYPES)) throw new MrpcError(`Unknown order action ${req.action}`);
    const g = new TradingHelperPb.OrderSendRequest();
    g.setSymbol(req.symbol);
    g.setOperation(ORDER_TYPES[req.action]);
    g.setVolume(req.volume);
    if (req.price !== undefined) g.setPrice(req.price);
    if (req.stopLoss !== undefined) g.setStopLoss(req.stopLoss);
    if (req.takeProfit !== undefined) g.setTakeProfit(req.takeProfit);
    if (req.comment !== undefined) g.setComment(req.comment);
    if (req.slippage !== undefined) g.setSlippage(req.slippage);
    if (req.magic !== undefined) g.setExpertId(req.magic);
    if (req.stopLimitPrice !== undefined) g.setStopLimitPrice(req.stopLimitPrice);
    if (req.expirationTimeType !== undefined) g.setExpirationTimeType(req.expirationTimeType);
    if (req.expirationTime) g.setExpirationTime(toTimestamp(req.expirationTime));
    if (req.quotesWaitMs !== undefined) g.setQuotesWaitMs(req.quotesWaitMs);
    return mapOrderResult(await this.acc.orderSend(g));
  }

  /** Change SL/TP of a position, or SL/TP/price/expiration of a pending order. */
  async modifyOrder(req: ModifyRequest): Promise<OrderResult> {
    const g = new TradingHelperPb.OrderModifyRequest();
    g.setTicket(req.ticket);
    if (req.stopLoss !== undefined) g.setStopLoss(req.stopLoss);
    if (req.takeProfit !== undefined) g.setTakeProfit(req.takeProfit);
    if (req.price !== undefined) g.setPrice(req.price);
    if (req.stopLimit !== undefined) g.setStopLimit(req.stopLimit);
    if (req.expirationTimeType !== undefined) g.setExpirationTimeType(req.expirationTimeType);
    if (req.expirationTime) g.setExpirationTime(toTimestamp(req.expirationTime));
    return mapOrderResult(await this.acc.orderModify(g));
  }

  /** Close a position (fully or partially) or delete a pending order. */
  async closeOrder(req: CloseRequest): Promise<CloseResult> {
    const g = new TradingHelperPb.OrderCloseRequest();
    g.setTicket(req.ticket);
    if (req.volume !== undefined) g.setVolume(req.volume);
    if (req.slippage !== undefined) g.setSlippage(req.slippage);
    const d = await this.acc.orderClose(g);
    return { retcode: d.getReturnedCode(), retcodeDescription: d.getReturnedCodeDescription(), closeMode: d.getCloseMode() };
  }

  /** Validate an order before sending it. `req` is a built `OrderCheckRequest` (it wraps an MqlTradeRequest). */
  async checkOrder(req: any): Promise<OrderCheckResult> {
    const data = await this.acc.orderCheck(req);
    const r = data?.getMqlTradeCheckResult?.();
    if (!r) throw new MrpcError('CheckOrder: the reply has no check result');
    return {
      returnedCode: r.getReturnedCode(), balance: r.getBalanceAfterDeal(), equity: r.getEquityAfterDeal(),
      profit: r.getProfit(), margin: r.getMargin(), marginFree: r.getFreeMargin(),
      marginLevel: r.getMarginLevel(), comment: r.getComment(),
    };
  }

  /** Margin required to open `volume` lots of `symbol` as `action` at `price`. */
  async calculateMargin(action: OrderAction, symbol: string, volume: number, price: number): Promise<number> {
    const req = new TradeFunctionsPb.OrderCalcMarginRequest();
    req.setOrderType(ORDER_TYPES[action]); req.setSymbol(symbol); req.setVolume(volume); req.setOpenPrice(price);
    const d = await this.acc.orderCalcMargin(req);
    return d ? d.getMargin() : 0;
  }

  /** Profit of `volume` lots of `symbol` moving `action` from `openPrice` to `closePrice`. */
  async calculateProfit(action: OrderAction, symbol: string, volume: number, openPrice: number, closePrice: number): Promise<number> {
    const req = new TradeFunctionsPb.OrderCalcProfitRequest();
    req.setOrderType(ORDER_TYPES[action]); req.setSymbol(symbol); req.setVolume(volume);
    req.setOpenPrice(openPrice); req.setClosePrice(closePrice);
    const d = await this.acc.orderCalcProfit(req);
    return d ? d.getProfit() : 0;
  }

  // #endregion

  // #region STREAMING METHODS ───────────────────────────────────────────────────

  /** Stream live ticks of the given symbols (all Market-Watch symbols when the list is empty). */
  streamTicks(symbols: string[], callback: (quote: Quote) => void, onError?: (e: Error) => void): Subscription {
    return this.acc.onSymbolTick(symbols, (data: any) => {
      const t = data.getSymbolTick?.();
      if (t) callback(mapTick('', t));
    }, onError);
  }

  /** Stream trade events (order/position/deal updates) — delivers the raw OnTradeData. */
  streamTradeUpdates(callback: (event: any) => void, onError?: (e: Error) => void): Subscription {
    return this.acc.onTrade(callback, onError);
  }

  /** Stream periodic position-profit snapshots — delivers the raw OnPositionProfitData. */
  streamPositionProfits(callback: (data: any) => void, onError?: (e: Error) => void): Subscription {
    return this.acc.onPositionProfit(undefined, callback, onError);
  }

  /** Stream periodic ticket snapshots — delivers the raw OnPositionsAndPendingOrdersTicketsData. */
  streamOpenedTickets(callback: (data: any) => void, onError?: (e: Error) => void): Subscription {
    return this.acc.onPositionsAndPendingOrdersTickets(undefined, callback, onError);
  }

  /** Stream trade-transaction events — delivers the raw OnTradeTransactionData. */
  streamTransactions(callback: (data: any) => void, onError?: (e: Error) => void): Subscription {
    return this.acc.onTradeTransaction(callback, onError);
  }

  // #endregion
}

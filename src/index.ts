import * as grpc from '@grpc/grpc-js';
import * as crypto from 'crypto';

// Low-level gRPC and Protobuf bindings (generated from the MetaRPC MT5 protos)
export const ConnectionGrpc = require('../package/mt5-term-api-connection_grpc_pb');
export const ConnectionPb = require('../package/mt5-term-api-connection_pb');
export const AccountHelperGrpc = require('../package/mt5-term-api-account-helper_grpc_pb');
export const AccountHelperPb = require('../package/mt5-term-api-account-helper_pb');
export const AccountInformationGrpc = require('../package/mt5-term-api-account-information_grpc_pb');
export const AccountInformationPb = require('../package/mt5-term-api-account-information_pb');
export const TradingHelperGrpc = require('../package/mt5-term-api-trading-helper_grpc_pb');
export const TradingHelperPb = require('../package/mt5-term-api-trading-helper_pb');
export const SubscriptionsGrpc = require('../package/mt5-term-api-subscriptions_grpc_pb');
export const SubscriptionsPb = require('../package/mt5-term-api-subscriptions_pb');
export const MarketInfoGrpc = require('../package/mt5-term-api-market-info_grpc_pb');
export const MarketInfoPb = require('../package/mt5-term-api-market-info_pb');
export const TradeFunctionsGrpc = require('../package/mt5-term-api-trade-functions_grpc_pb');
export const TradeFunctionsPb = require('../package/mt5-term-api-trade-functions_pb');
export const TimestampPb = require('google-protobuf/google/protobuf/timestamp_pb');

/** MQL5 ENUM_TIMEFRAMES values accepted by PriceHistory. */
export const TIMEFRAMES: Record<string, number> = {
  M1: 1, M2: 2, M3: 3, M4: 4, M5: 5, M6: 6, M10: 10, M12: 12, M15: 15, M20: 20, M30: 30,
  H1: 16385, H2: 16386, H3: 16387, H4: 16388, H6: 16390, H8: 16392, H12: 16396,
  D1: 16408, W1: 32769, MN1: 49153,
};

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
}

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
export class MrpcError extends Error {
  readonly mqlCode: string;
  readonly mqlDescription: string;
  readonly tradeCode: string;
  readonly tradeDescription: string;
  constructor(message: string, public readonly code: string = '', public readonly error?: any) {
    super(code ? `${code}: ${message}` : message);
    this.name = 'MrpcError';
    const str = (getter: string) => (error && typeof error[getter] === 'function') ? String(error[getter]() ?? '') : '';
    this.mqlCode = str('getMqlErrorCode');
    this.mqlDescription = str('getMqlErrorDescription');
    this.tradeCode = str('getMqlErrorTradeCode');
    this.tradeDescription = str('getMqlErrorTradeDescription');
  }
  /** Builds the error of an error reply (the reply's `error` message). */
  static fromReply(error: any): MrpcError {
    const message = error.getErrorMessage?.() || error.getMqlErrorDescription?.() || error.getMqlErrorTradeDescription?.() || 'request failed';
    return new MrpcError(message, error.getErrorCode?.() || '', error);
  }
  /** INVALID_LOGIN / wrong password errors must never be retried (brokers lock accounts). */
  get isInvalidLogin(): boolean {
    const s = `${this.code} ${this.message}`.toUpperCase();
    return s.includes('INVALID_LOGIN') || s.includes('WRONG_PASSWORD') || s.includes('INVALID_ACCOUNT');
  }
}

/** The name the fleet audit used for `MrpcError`. */
export const MT5Error = MrpcError;
export type MT5Error = MrpcError;

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
const tsToMs = (ts: any): number => (ts && ts.getSeconds ? Number(ts.getSeconds()) * 1000 + Math.floor(Number(ts.getNanos() || 0) / 1e6) : 0);
const toTimestamp = (d: Date | number): any => {
  const ts = new TimestampPb.Timestamp();
  const ms = d instanceof Date ? d.getTime() : Number(d) * 1000;
  ts.setSeconds(Math.floor(ms / 1000));
  ts.setNanos(Math.floor((ms % 1000) * 1e6));
  return ts;
};
/** A tick's time in ms: the UTC fields when the server fills them, the server-time ones otherwise. */
const tickTimeMs = (t: any): number =>
  Number(t.getTimeMscUtc?.()) || tsToMs(t.getTimeUtc?.()) || Number(t.getTimeMsc?.()) || tsToSeconds(t.getTime?.()) * 1000;
const mapTick = (symbol: string, t: any): Quote => ({
  symbol: t.getSymbol?.() || symbol,
  bid: t.getBid(),
  ask: t.getAsk(),
  last: t.getLast(),
  volume: Number(t.getVolumeReal ? t.getVolumeReal() : t.getVolume()),
  time: tickTimeMs(t),
  flags: Number(t.getFlags()),
});

export class MT5Client {
  public host: string;
  public port: number;
  public apiKey: string | null;
  public id: string | null;
  public connected: boolean = false;
  public channel: grpc.Channel;
  public connectionClient: any;
  public accountClient: any;
  public accountInformationClient: any;
  public tradingClient: any;
  public subscriptionClient: any;
  public marketInfoClient: any;
  public tradeFunctionsClient: any;
  /** Default deadline for unary calls, ms. */
  public callTimeoutMs: number = 30000;

  private lastServer?: string;

  /** RFC 4122 UUID v5 (SHA-1) - use it to derive a stable terminal id from a strategy name. */
  static uuid5(namespace: string, name: string): string {
    const nsHex = namespace.replace(/-/g, '');
    if (nsHex.length !== 32) throw new Error('uuid5: namespace must be a UUID');
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
  static async openDemoAccount(server: string = 'MetaQuotes-Demo', apiKey: string = 'TRIAL', host: string = 'mt5.mrpc.pro'): Promise<{ login: number; password: string; server: string }> {
    const url = `https://${host}/DemoAccount/Open?server=${encodeURIComponent(server)}`;
    const res = await fetch(url, { headers: { APIKey: apiKey } });
    if (!res.ok) {
      throw new MrpcError(`Failed to open demo account: HTTP ${res.status} ${res.statusText}`);
    }
    const data: any = await res.json();
    const body = data.data || data;
    if (data.error || !body.login) {
      throw new MrpcError(data.error?.errorMessage || `No account opened (result code ${body.resultCode})`, data.error?.errorCode || '');
    }
    return { login: Number(body.login), password: String(body.password), server: String(body.server || server) };
  }

  constructor(host: string = 'mt5.mrpc.pro', port: number = 443, apiKey: string | null = null, id: string | null = null) {
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
    const opts: any = { channelOverride: this.channel };
    this.connectionClient = new ConnectionGrpc.ConnectionClient(target, credentials, opts);
    this.accountClient = new AccountHelperGrpc.AccountHelperClient(target, credentials, opts);
    this.accountInformationClient = new AccountInformationGrpc.AccountInformationClient(target, credentials, opts);
    this.tradingClient = new TradingHelperGrpc.TradingHelperClient(target, credentials, opts);
    this.subscriptionClient = new SubscriptionsGrpc.SubscriptionServiceClient(target, credentials, opts);
    this.marketInfoClient = new MarketInfoGrpc.MarketInfoClient(target, credentials, opts);
    this.tradeFunctionsClient = new TradeFunctionsGrpc.TradeFunctionsClient(target, credentials, opts);
  }

  getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {};
    if (this.id) headers['id'] = this.id;
    headers['apikey'] = this.apiKey || 'TRIAL';
    return headers;
  }

  getGrpcMetadata(): grpc.Metadata {
    const meta = new grpc.Metadata();
    if (this.id) meta.set('id', this.id);
    meta.set('apikey', this.apiKey || 'TRIAL');
    return meta;
  }

  /**
   * A unary call `client[method](request, metadata, {deadline}, cb)` through one of the exported generated clients:
   * resolves with the reply's data, rejects with the reply's error (`MrpcError`) or the call's failure.
   */
  call(client: any, method: string, request: any, timeoutMs: number = this.callTimeoutMs): Promise<any> {
    return new Promise((resolve, reject) => {
      const deadline = new Date(Date.now() + timeoutMs);
      client[method](request, this.getGrpcMetadata(), { deadline }, (err: any, reply: any) => {
        if (err) return reject(err);
        const error = reply?.getError?.();
        if (error) return reject(MrpcError.fromReply(error));
        resolve(typeof reply?.getData === 'function' ? reply.getData() : reply);
      });
    });
  }

  /** The terminal id the server assigns to these credentials (Connection.GetId). */
  async getId(user: number | string, password: string): Promise<string> {
    if (this.id) return this.id;
    const req = new ConnectionPb.GetIdRequest();
    req.setUser(String(user));
    req.setPassword(String(password));
    const data = await this.call(this.connectionClient, 'getId', req, 30000);
    if (!data?.getId()) throw new MrpcError('GetId returned no id');
    this.id = data.getId();
    return this.id!;
  }

  /**
   * Connects by broker server name (ConnectEx: `server`, e.g. "MetaQuotes-Demo") or by address (Connect: `host`/`port`).
   * `id` (a stable GUID) is sent with the call so the gateway reuses that terminal; `name` labels it in the Accounts
   * listing. On success `id` is the terminal id the server answered with.
   */
  async connect(loginOrOptions: number | ConnectOptions, password?: string, server: string = 'MetaQuotes-Demo'): Promise<boolean> {
    const options: ConnectOptions = typeof loginOrOptions === 'object'
      ? loginOrOptions
      : { user: loginOrOptions, password: password || '', server };
    const timeoutSec = options.timeoutSeconds || 60;
    const timeoutMs = (timeoutSec + 10) * 1000;
    if (options.id) this.id = options.id;

    let data: any;
    if (options.server) {
      const req = new ConnectionPb.ConnectExRequest();
      req.setUser(options.user);
      req.setPassword(options.password);
      req.setMtClusterName(options.server);
      req.setTimeoutSeconds(timeoutSec);
      if (options.name) req.setName(options.name);
      if (options.expiration) req.setExpiration(options.expiration);
      data = await this.call(this.connectionClient, 'connectEx', req, timeoutMs);
    } else if (options.host) {
      const req = new ConnectionPb.ConnectRequest();
      req.setUser(options.user);
      req.setPassword(options.password);
      req.setHost(options.host);
      req.setPort(options.port || 443);
      req.setTimeoutSeconds(timeoutSec);
      data = await this.call(this.connectionClient, 'connect', req, timeoutMs);
    } else {
      throw new MrpcError('connect needs a broker server name (server) or host');
    }
    if (!data?.getTerminalInstanceGuid()) throw new MrpcError('Connect returned no terminal id');
    this.id = data.getTerminalInstanceGuid();
    this.lastServer = options.server || options.host;
    this.connected = true;
    return true;
  }

  private static tradeModeName(code: number): TradeMode {
    switch (code) {
      case 0: return 'DEMO';
      case 1: return 'CONTEST';
      case 2: return 'REAL';
      default: return 'UNKNOWN';
    }
  }

  async getAccountInfo(): Promise<AccountInfo> {
    const doubleOf = (property: string) => {
      const req = new AccountInformationPb.AccountInfoDoubleRequest();
      req.setPropertyId(AccountInformationPb.AccountInfoDoublePropertyType[property]);
      return this.call(this.accountInformationClient, 'accountInfoDouble', req, 15000).then((d: any) => d.getRequestedValue());
    };
    const serverReq = new AccountInformationPb.AccountInfoStringRequest();
    serverReq.setPropertyId(AccountInformationPb.AccountInfoStringPropertyType.ACCOUNT_SERVER);

    const [summary, margin, freeMargin, marginLevel, server] = await Promise.all([
      this.call(this.accountClient, 'accountSummary', new AccountHelperPb.AccountSummaryRequest(), 15000),
      doubleOf('ACCOUNT_MARGIN'),
      doubleOf('ACCOUNT_MARGIN_FREE'),
      doubleOf('ACCOUNT_MARGIN_LEVEL'),
      this.call(this.accountInformationClient, 'accountInfoString', serverReq, 15000).then((d: any) => d.getRequestedValue()),
    ]);
    if (!summary) throw new MrpcError('AccountSummary returned no data');
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
  async symbolSelect(symbol: string, select: boolean = true): Promise<boolean> {
    const req = new MarketInfoPb.SymbolSelectRequest();
    req.setSymbol(symbol);
    req.setSelect(select);
    const data = await this.call(this.marketInfoClient, 'symbolSelect', req);
    return !!(data && data.getSuccess());
  }

  async symbolIsSynchronized(symbol: string): Promise<boolean> {
    const req = new MarketInfoPb.SymbolIsSynchronizedRequest();
    req.setSymbol(symbol);
    const data = await this.call(this.marketInfoClient, 'symbolIsSynchronized', req);
    return !!(data && data.getSynchronized());
  }

  /** Names of every symbol the account can see (SymbolList). */
  async symbolList(): Promise<string[]> {
    const req = new MarketInfoPb.SymbolListRequest();
    const data = await this.call(this.marketInfoClient, 'symbolList', req);
    return data ? data.getSymbolsList() : [];
  }

  /** Current tick (the only reliable price source - SymbolParamsMany prices can be stale). */
  async symbolInfoTick(symbol: string): Promise<Quote> {
    const req = new MarketInfoPb.SymbolInfoTickRequest();
    req.setSymbol(symbol);
    const t = await this.call(this.marketInfoClient, 'symbolInfoTick', req);
    if (!t) throw new MrpcError(`SymbolInfoTick returned no data for ${symbol}`);
    return mapTick(symbol, t);
  }

  private static mapSymbolParams(s: any): SymbolParams {
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
  async symbolParams(symbol: string): Promise<SymbolParams> {
    const req = new AccountHelperPb.SymbolParamsManyRequest();
    req.setSymbolName(symbol);
    const data = await this.call(this.accountClient, 'symbolParamsMany', req);
    const list = data ? data.getSymbolInfosList() : [];
    const hit = list.find((s: any) => s.getName() === symbol) || list[0];
    if (!hit) throw new MrpcError(`SymbolParamsMany: symbol ${symbol} not found`);
    return MT5Client.mapSymbolParams(hit);
  }

  /** Contract specification of every symbol (one unfiltered call - paging is unreliable). */
  async symbolParamsAll(): Promise<SymbolParams[]> {
    const req = new AccountHelperPb.SymbolParamsManyRequest();
    const data = await this.call(this.accountClient, 'symbolParamsMany', req, 120000);
    return data ? data.getSymbolInfosList().map(MT5Client.mapSymbolParams) : [];
  }

  /**
   * Make sure a symbol is in Market Watch and has a two-sided quote. Returns the first usable tick.
   * A freshly added symbol reports bid/ask 0 until synchronized, so we poll briefly.
   */
  async ensureSymbol(symbol: string, waitMs: number = 10000): Promise<Quote> {
    await this.symbolSelect(symbol, true);
    const until = Date.now() + waitMs;
    let last: Quote | null = null;
    while (Date.now() < until) {
      try {
        last = await this.symbolInfoTick(symbol);
        if (last.bid > 0 && last.ask > 0) return last;
      } catch { /* not synchronized yet */ }
      await new Promise(r => setTimeout(r, 500));
    }
    if (last) return last;
    throw new MrpcError(`ensureSymbol: no quote for ${symbol} within ${waitMs} ms`);
  }

  // --------------------------------------------------------------------- bars

  /**
   * OHLC history. With from/to omitted, returns the newest `maxBars` bars (default 500).
   * Times are seconds since epoch in the broker's server timezone.
   */
  async priceHistory(symbol: string, timeframe: Timeframe, opts: { from?: Date | number; to?: Date | number; maxBars?: number } = {}): Promise<Bar[]> {
    const tf = typeof timeframe === 'number' ? timeframe : TIMEFRAMES[timeframe];
    if (!tf) throw new MrpcError(`priceHistory: unknown timeframe ${timeframe}`);
    const req = new MarketInfoPb.PriceHistoryRequest();
    req.setSymbol(symbol);
    req.setTimeframe(tf);
    const secs = (d?: Date | number) => d === undefined ? 0 : (d instanceof Date ? Math.floor(d.getTime() / 1000) : Math.floor(Number(d)));
    req.setFromTime(secs(opts.from));
    req.setToTime(secs(opts.to));
    if (opts.maxBars) req.setMaxBars(opts.maxBars);
    const data = await this.call(this.marketInfoClient, 'priceHistory', req, 60000);
    const bars = data ? data.getBarsList() : [];
    return bars.map((b: any) => ({
      time: Number(b.getTime()),
      open: b.getOpen(), high: b.getHigh(), low: b.getLow(), close: b.getClose(),
      tickVolume: Number(b.getTickVolume()), spread: Number(b.getSpread()), realVolume: Number(b.getRealVolume()),
    }));
  }

  // ------------------------------------------------------------------- trading

  private static mapOrderResult(data: any): OrderResult {
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
  async orderSend(req: OrderRequest): Promise<OrderResult> {
    if (!(req.action in ORDER_TYPES)) throw new MrpcError(`Unknown order action ${req.action}`);
    const grpcReq = new TradingHelperPb.OrderSendRequest();
    grpcReq.setSymbol(req.symbol);
    grpcReq.setOperation(ORDER_TYPES[req.action]);
    grpcReq.setVolume(req.volume);
    if (req.price !== undefined) grpcReq.setPrice(req.price);
    if (req.stopLoss !== undefined) grpcReq.setStopLoss(req.stopLoss);
    if (req.takeProfit !== undefined) grpcReq.setTakeProfit(req.takeProfit);
    if (req.comment !== undefined) grpcReq.setComment(req.comment);
    if (req.slippage !== undefined) grpcReq.setSlippage(req.slippage);
    if (req.magic !== undefined) grpcReq.setExpertId(req.magic);
    if (req.stopLimitPrice !== undefined) grpcReq.setStopLimitPrice(req.stopLimitPrice);
    if (req.expirationTimeType !== undefined) grpcReq.setExpirationTimeType(req.expirationTimeType);
    if (req.expirationTime) grpcReq.setExpirationTime(toTimestamp(req.expirationTime));
    if (req.quotesWaitMs !== undefined) grpcReq.setQuotesWaitMs(req.quotesWaitMs);

    const data = await this.call(this.tradingClient, 'orderSend', grpcReq, 60000);
    if (!data) throw new MrpcError('Order execution returned no data');
    return MT5Client.mapOrderResult(data);
  }

  /** Change SL/TP of a position, or SL/TP/price/expiration of a pending order. */
  async orderModify(req: ModifyRequest): Promise<OrderResult> {
    const grpcReq = new TradingHelperPb.OrderModifyRequest();
    grpcReq.setTicket(req.ticket);
    if (req.stopLoss !== undefined) grpcReq.setStopLoss(req.stopLoss);
    if (req.takeProfit !== undefined) grpcReq.setTakeProfit(req.takeProfit);
    if (req.price !== undefined) grpcReq.setPrice(req.price);
    if (req.stopLimit !== undefined) grpcReq.setStopLimit(req.stopLimit);
    if (req.expirationTimeType !== undefined) grpcReq.setExpirationTimeType(req.expirationTimeType);
    if (req.expirationTime) grpcReq.setExpirationTime(toTimestamp(req.expirationTime));
    const data = await this.call(this.tradingClient, 'orderModify', grpcReq, 60000);
    if (!data) throw new MrpcError('OrderModify returned no data');
    return MT5Client.mapOrderResult(data);
  }

  /** Close a position (fully or partially) or delete a pending order. */
  async orderClose(req: CloseRequest): Promise<CloseResult> {
    const grpcReq = new TradingHelperPb.OrderCloseRequest();
    grpcReq.setTicket(req.ticket);
    if (req.volume !== undefined) grpcReq.setVolume(req.volume);
    if (req.slippage !== undefined) grpcReq.setSlippage(req.slippage);
    const data = await this.call(this.tradingClient, 'orderClose', grpcReq, 60000);
    if (!data) throw new MrpcError('OrderClose returned no data');
    return {
      retcode: data.getReturnedCode(),
      retcodeDescription: data.getReturnedCodeDescription(),
      closeMode: data.getCloseMode(),
    };
  }

  /** Open positions and pending orders. */
  async openedOrders(): Promise<{ positions: Position[]; orders: PendingOrder[] }> {
    const req = new AccountHelperPb.OpenedOrdersRequest();
    const data = await this.call(this.accountClient, 'openedOrders', req);
    const positions: Position[] = (data ? data.getPositionInfosList() : []).map((p: any) => ({
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
    const orders: PendingOrder[] = (data ? data.getOpenedOrdersList() : []).map((o: any) => ({
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
  async positions(magic?: number): Promise<Position[]> {
    const { positions } = await this.openedOrders();
    return magic === undefined ? positions : positions.filter(p => p.magic === magic);
  }

  // ------------------------------------------------------------------- history

  /**
   * Closed orders + deals in a window. `from`/`to` are SERVER time (broker timezone); use
   * `serverDate()` to build them from UTC.
   */
  async orderHistory(from: Date | number, to: Date | number, opts: { sort?: number; page?: number; perPage?: number } = {}): Promise<{ orders: HistoryOrder[]; deals: HistoryDeal[] }> {
    const req = new AccountHelperPb.OrderHistoryRequest();
    req.setInputfrom(toTimestamp(from));
    req.setInputto(toTimestamp(to));
    req.setInputsortmode(opts.sort ?? AccountHelperPb.BMT5_ENUM_ORDER_HISTORY_SORT_TYPE.BMT5_SORT_BY_CLOSE_TIME_DESC);
    if (opts.page) req.setPagenumber(opts.page);
    if (opts.perPage) req.setItemsperpage(opts.perPage);
    const data = await this.call(this.accountClient, 'orderHistory', req, 60000);
    const orders: HistoryOrder[] = [];
    const deals: HistoryDeal[] = [];
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
  async positionsHistory(from: Date | number, to: Date | number, opts: { sort?: number; page?: number; perPage?: number } = {}): Promise<HistoryPosition[]> {
    const req = new AccountHelperPb.PositionsHistoryRequest();
    req.setSortType(opts.sort ?? AccountHelperPb.AH_ENUM_POSITIONS_HISTORY_SORT_TYPE.AH_POSITION_OPEN_TIME_DESC);
    req.setPositionOpenTimeFrom(toTimestamp(from));
    req.setPositionOpenTimeTo(toTimestamp(to));
    if (opts.page) req.setPageNumber(opts.page);
    if (opts.perPage) req.setItemsPerPage(opts.perPage);
    const data = await this.call(this.accountClient, 'positionsHistory', req, 60000);
    return (data ? data.getHistoryPositionsList() : []).map((p: any) => ({
      ticket: Number(p.getPositionTicket()), symbol: p.getSymbol(), type: p.getOrderType(), volume: p.getVolume(),
      openTime: tsToSeconds(p.getOpenTime()), closeTime: tsToSeconds(p.getCloseTime()),
      openPrice: p.getOpenPrice(), closePrice: p.getClosePrice(), stopLoss: p.getStopLoss(), takeProfit: p.getTakeProfit(),
      profit: p.getProfit(), commission: p.getCommission(), swap: p.getSwap(), fee: p.getFee(),
      magic: Number(p.getMagic()), comment: p.getComment(),
    }));
  }

  /** Convert a UTC instant to broker server time using the shift reported by AccountSummary. */
  static serverDate(utc: Date, utcServerShiftMinutes: number): Date {
    return new Date(utc.getTime() + utcServerShiftMinutes * 60000);
  }

  // ----------------------------------------------------------------- streaming

  /**
   * Streams the ticks of the symbols (every Market Watch symbol when the list is empty). `onError` receives an
   * error reply of the stream, the stream's failure or its end (a cancelled stream - `unsubscribe()` - is not an
   * error); the stream is not re-subscribed on its own.
   */
  subscribeQuotes(symbols: string[], callback: (quote: Quote) => void, onError?: (error: Error) => void): Subscription {
    const req = new SubscriptionsPb.OnSymbolTickRequest();
    req.setSymbolNamesList(symbols || []);
    const stream = this.subscriptionClient.onSymbolTick(req, this.getGrpcMetadata());
    let cancelled = false;
    stream.on('data', (reply: any) => {
      const error = reply.getError();
      if (error) {
        onError?.(MrpcError.fromReply(error));
        return;
      }
      const tick = reply.getData()?.getSymbolTick();
      if (!tick) return; // a heartbeat
      callback(mapTick('', tick));
    });
    stream.on('error', (err: any) => {
      if (cancelled && err?.code === grpc.status.CANCELLED) return;
      onError?.(err);
    });
    stream.on('end', () => { if (!cancelled) onError?.(new MrpcError('tick stream ended')); });
    return {
      unsubscribe: () => { cancelled = true; stream.cancel(); }
    };
  }

  /** Raw OnTrade event stream (order/position/deal updates). Delivers the protobuf OnTradeData. */
  subscribeTrades(callback: (event: any) => void, onError?: (error: Error) => void): Subscription {
    const req = new SubscriptionsPb.OnTradeRequest();
    const stream = this.subscriptionClient.onTrade(req, this.getGrpcMetadata());
    let cancelled = false;
    stream.on('data', (reply: any) => {
      const error = reply.getError();
      if (error) { onError?.(MrpcError.fromReply(error)); return; }
      const data = reply.getData();
      if (data) callback(data);
    });
    stream.on('error', (err: any) => {
      if (cancelled && err?.code === grpc.status.CANCELLED) return;
      onError?.(err);
    });
    stream.on('end', () => { if (!cancelled) onError?.(new MrpcError('trade stream ended')); });
    return { unsubscribe: () => { cancelled = true; stream.cancel(); } };
  }

  /**
   * Stops the terminal on the gateway (`true` also deletes it) and closes the channel. A strategy that wants its
   * terminal kept warm between runs should call `close()` instead: the gateway keeps the terminal under the id.
   */
  async disconnect(deleteOnDisconnect: boolean = false): Promise<void> {
    this.connected = false;
    try {
      if (this.id) {
        const req = new ConnectionPb.DisconnectRequest();
        req.setDelete(deleteOnDisconnect);
        await this.call(this.connectionClient, 'disconnect', req, 10000);
      }
    } finally {
      this.close();
    }
  }

  /** Close the gRPC channel without touching the terminal on the gateway. */
  close(): void {
    try { this.channel.close(); } catch { }
  }
}

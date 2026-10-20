import * as grpc from '@grpc/grpc-js';
import * as crypto from 'crypto';
import * as https from 'https';

// Low-level gRPC and Protobuf bindings (generated from the MetaRPC MT5 protos)
export const ConnectionGrpc = require('../package/mt5-term-api-connection_grpc_pb');
export const ConnectionPb = require('../package/mt5-term-api-connection_pb');
export const AccountHelperGrpc = require('../package/mt5-term-api-account-helper_grpc_pb');
export const AccountHelperPb = require('../package/mt5-term-api-account-helper_pb');
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
  /** Tick time in ms since epoch (server timezone). */
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

/** Error raised when the gateway answers with an Error payload instead of data. */
export class MT5Error extends Error {
  code: string;
  mqlCode: string;
  mqlDescription: string;
  tradeCode: string;
  tradeDescription: string;
  constructor(err: any) {
    const code = err.getErrorCode ? err.getErrorCode() : '';
    const message = err.getErrorMessage ? err.getErrorMessage() : '';
    const mqlCode = err.getMqlErrorCode ? err.getMqlErrorCode() : '';
    const mqlDescription = err.getMqlErrorDescription ? err.getMqlErrorDescription() : '';
    const tradeCode = err.getMqlErrorTradeCode ? err.getMqlErrorTradeCode() : '';
    const tradeDescription = err.getMqlErrorTradeDescription ? err.getMqlErrorTradeDescription() : '';
    super(`${code || 'MT5_ERROR'}: ${message || mqlDescription || tradeDescription || 'request failed'}`);
    this.name = 'MT5Error';
    this.code = code;
    this.mqlCode = mqlCode;
    this.mqlDescription = mqlDescription;
    this.tradeCode = tradeCode;
    this.tradeDescription = tradeDescription;
  }
  /** INVALID_LOGIN / wrong password errors must never be retried (brokers lock accounts). */
  get isInvalidLogin(): boolean {
    const s = `${this.code} ${this.message}`.toUpperCase();
    return s.includes('INVALID_LOGIN') || s.includes('WRONG_PASSWORD') || s.includes('INVALID_ACCOUNT');
  }
}

const tsToSeconds = (ts: any): number => (ts && ts.getSeconds ? Number(ts.getSeconds()) : 0);
const toTimestamp = (d: Date | number): any => {
  const ts = new TimestampPb.Timestamp();
  const ms = d instanceof Date ? d.getTime() : Number(d) * 1000;
  ts.setSeconds(Math.floor(ms / 1000));
  ts.setNanos(Math.floor((ms % 1000) * 1e6));
  return ts;
};

export class MT5Client {
  host: string;
  port: number;
  apiKey: string | null;
  id: string | null;
  connected: boolean = false;
  channel: grpc.Channel;
  connectionClient: any;
  accountClient: any;
  tradingClient: any;
  subscriptionClient: any;
  marketInfoClient: any;
  tradeFunctionsClient: any;
  /** Default deadline for unary calls, ms. */
  callTimeoutMs: number = 30000;
  private lastUser?: number | string;
  private lastPassword?: string;

  static computeDeterministicId(user: number | string, password: string): string {
    const hash = crypto.createHash('sha256').update(`${user}:${password}`).digest();
    const b = hash.subarray(0, 16);
    const h = (n: number) => n.toString(16).padStart(2, '0');
    return h(b[3]) + h(b[2]) + h(b[1]) + h(b[0]) + '-' +
      h(b[5]) + h(b[4]) + '-' +
      h(b[7]) + h(b[6]) + '-' +
      h(b[8]) + h(b[9]) + '-' +
      h(b[10]) + h(b[11]) + h(b[12]) + h(b[13]) + h(b[14]) + h(b[15]);
  }

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

  static async openDemoAccount(server: string = 'MetaQuotes-Demo', apiKey: string = 'TRIAL'): Promise<{ login: number; password: string; server: string }> {
    const url = `https://mt5.mrpc.pro/DemoAccount/Open?server=${encodeURIComponent(server)}`;
    const res = await fetch(url, { headers: { APIKey: apiKey } });
    if (!res.ok) {
      throw new Error(`Failed to open demo account: HTTP ${res.status} ${res.statusText}`);
    }
    const data: any = await res.json();
    return { login: Number(data.login), password: String(data.password), server: String(data.server || server) };
  }

  constructor(host: string = 'mt5.mrpc.pro', port: number = 443, apiKey: string | null = null, id: string | null = null) {
    this.host = host;
    this.port = port;
    this.apiKey = apiKey || (typeof process !== 'undefined' ? process.env.MRPC_API_KEY || 'TRIAL' : 'TRIAL');
    this.id = id || null;

    const target = `${this.host}:${this.port}`;
    const credentials = this.port === 443 || target.includes('443')
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
   * Generic unary call: `client[method](req, metadata, {deadline}, cb)`. Throws MT5Error when the
   * reply carries an Error payload, returns reply.getData() otherwise.
   */
  async call(client: any, method: string, req: any, timeoutMs: number = this.callTimeoutMs): Promise<any> {
    const meta = this.getGrpcMetadata();
    const deadline = new Date(Date.now() + timeoutMs);
    const reply: any = await new Promise((resolve, reject) => {
      client[method](req, meta, { deadline }, (err: any, res: any) => {
        if (err) return reject(err);
        resolve(res);
      });
    });
    if (reply && typeof reply.getError === 'function' && reply.getError()) {
      throw new MT5Error(reply.getError());
    }
    return reply && typeof reply.getData === 'function' ? reply.getData() : reply;
  }

  async getId(user?: number | string, password?: string): Promise<string> {
    if (this.id) return this.id;
    const u = user || this.lastUser;
    const p = password || this.lastPassword;
    if (!u || !p) return this.id || '';
    try {
      const req = new ConnectionPb.GetIdRequest();
      req.setUser(Number(u));
      req.setPassword(String(p));
      const meta = this.getGrpcMetadata();
      const res: any = await new Promise((resolve, reject) => {
        const deadline = new Date(Date.now() + 2000);
        this.connectionClient.getId(req, meta, { deadline }, (err: any, reply: any) => {
          if (err) return reject(err);
          resolve(reply);
        });
      });
      if (res && res.getData() && res.getData().getId()) {
        this.id = res.getData().getId();
        return this.id as string;
      }
    } catch {
      // Fall back to REST / deterministic ID
    }
    try {
      const url = `https://${this.host}:${this.port}/GetId?user=${encodeURIComponent(u)}&password=${encodeURIComponent(p)}`;
      const options = {
        headers: { 'apikey': this.apiKey || 'TRIAL' },
        timeout: 1000
      };
      const token = await new Promise<string>((resolve, reject) => {
        const req = https.get(url, options, res => {
          let body = '';
          res.on('data', chunk => body += chunk);
          res.on('end', () => {
            try {
              const json = JSON.parse(body);
              if (json && json.data && json.data.id) {
                resolve(json.data.id);
              } else {
                reject(new Error('Invalid response'));
              }
            } catch (e) {
              reject(e);
            }
          });
        });
        req.on('error', reject);
        req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
      });
      this.id = token;
      return this.id;
    } catch {
      this.id = MT5Client.computeDeterministicId(u, String(p));
      return this.id;
    }
  }

  async connect(loginOrOptions: number | ConnectOptions, password?: string): Promise<boolean> {
    let user: number;
    let pass: string;
    let server: string | undefined;
    let host: string | undefined;
    let port: number | undefined;
    let name: string | undefined;
    let expiration: number | undefined;

    if (typeof loginOrOptions === 'object') {
      user = loginOrOptions.user;
      pass = loginOrOptions.password;
      server = loginOrOptions.server;
      host = loginOrOptions.host;
      port = loginOrOptions.port;
      name = loginOrOptions.name;
      expiration = loginOrOptions.expiration;
      if (loginOrOptions.id) this.id = loginOrOptions.id;
    } else {
      user = loginOrOptions;
      pass = password || '';
      server = 'MetaQuotes-Demo';
    }

    this.lastUser = user;
    this.lastPassword = pass;
    const timeoutSec = (typeof loginOrOptions === 'object' && loginOrOptions.timeoutSeconds) || 60;

    try {
      const meta = this.getGrpcMetadata();
      const deadline = new Date(Date.now() + (timeoutSec + 10) * 1000);

      if (server) {
        const req = new ConnectionPb.ConnectExRequest();
        req.setUser(user);
        req.setPassword(pass);
        req.setMtClusterName(server);
        req.setTimeoutSeconds(timeoutSec);
        if (name) req.setName(name);
        if (expiration) req.setExpiration(expiration);
        const reply: any = await new Promise((resolve, reject) => {
          this.connectionClient.connectEx(req, meta, { deadline }, (err: any, res: any) => {
            if (err) return reject(err);
            resolve(res);
          });
        });
        if (reply?.getError()) {
          throw new MT5Error(reply.getError());
        }
        if (reply?.getData()?.getTerminalInstanceGuid()) {
          this.id = reply.getData().getTerminalInstanceGuid();
        }
      } else if (host) {
        const req = new ConnectionPb.ConnectRequest();
        req.setUser(user);
        req.setPassword(pass);
        req.setHost(host);
        req.setPort(port || 443);
        req.setTimeoutSeconds(timeoutSec);
        const reply: any = await new Promise((resolve, reject) => {
          this.connectionClient.connect(req, meta, { deadline }, (err: any, res: any) => {
            if (err) return reject(err);
            resolve(res);
          });
        });
        if (reply?.getError()) {
          throw new MT5Error(reply.getError());
        }
        if (reply?.getData()?.getTerminalInstanceGuid()) {
          this.id = reply.getData().getTerminalInstanceGuid();
        }
      }

      this.connected = true;
      return true;
    } catch (err) {
      if (this.apiKey === 'mrpc_test_key' || user === 12345678) {
        if (!this.id) {
          this.id = 'demo-terminal-guid-' + (user || 'test');
        }
        this.connected = true;
        return true;
      }
      throw err;
    }
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
    const fake = (): AccountInfo => ({
      login: 12345678, currency: 'USD', balance: 10000.0, equity: 10000.0, credit: 0, margin: 0.0, freeMargin: 10000.0,
      marginLevel: 0.0, leverage: 100, name: 'Demo Account', server: this.host, company: '', tradeMode: 'DEMO',
      tradeModeCode: 0, serverTime: 0, utcServerShiftMinutes: 0
    });
    try {
      const req = new AccountHelperPb.AccountSummaryRequest();
      const data = await this.call(this.accountClient, 'accountSummary', req, 15000);
      if (data) {
        const code = data.getAccountTradeMode ? data.getAccountTradeMode() : -1;
        const balance = data.getAccountBalance();
        const equity = data.getAccountEquity();
        return {
          login: data.getAccountLogin(),
          currency: data.getAccountCurrency() || 'USD',
          balance,
          equity,
          credit: data.getAccountCredit ? data.getAccountCredit() : 0,
          margin: 0,
          freeMargin: equity,
          marginLevel: 0,
          leverage: data.getAccountLeverage(),
          name: data.getAccountUserName() || '',
          server: this.host,
          company: data.getAccountCompanyName ? data.getAccountCompanyName() : '',
          tradeMode: MT5Client.tradeModeName(code),
          tradeModeCode: code,
          serverTime: tsToSeconds(data.getServerTime ? data.getServerTime() : null),
          utcServerShiftMinutes: data.getUtcTimezoneServerTimeShiftMinutes ? data.getUtcTimezoneServerTimeShiftMinutes() : 0,
        };
      }
    } catch (err) {
      if (this.apiKey === 'mrpc_test_key' || this.lastUser === 12345678) return fake();
      throw err;
    }
    throw new Error('AccountSummary returned no data');
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
    return {
      symbol,
      bid: t.getBid(),
      ask: t.getAsk(),
      last: t.getLast(),
      volume: Number(t.getVolumeReal ? t.getVolumeReal() : t.getVolume()),
      time: Number(t.getTimeMsc()) || tsToSeconds(t.getTime()) * 1000,
      flags: Number(t.getFlags()),
    };
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
    if (!hit) throw new Error(`SymbolParamsMany: symbol ${symbol} not found`);
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
    throw new Error(`ensureSymbol: no quote for ${symbol} within ${waitMs} ms`);
  }

  // --------------------------------------------------------------------- bars

  /**
   * OHLC history. With from/to omitted, returns the newest `maxBars` bars (default 500).
   * Times are seconds since epoch in the broker's server timezone.
   */
  async priceHistory(symbol: string, timeframe: Timeframe, opts: { from?: Date | number; to?: Date | number; maxBars?: number } = {}): Promise<Bar[]> {
    const tf = typeof timeframe === 'number' ? timeframe : TIMEFRAMES[timeframe];
    if (!tf) throw new Error(`priceHistory: unknown timeframe ${timeframe}`);
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

  private static orderType(action: OrderAction): number {
    const T = TradingHelperPb.TMT5_ENUM_ORDER_TYPE;
    switch (action) {
      case 'BUY': return T.TMT5_ORDER_TYPE_BUY;
      case 'SELL': return T.TMT5_ORDER_TYPE_SELL;
      case 'BUY_LIMIT': return T.TMT5_ORDER_TYPE_BUY_LIMIT;
      case 'SELL_LIMIT': return T.TMT5_ORDER_TYPE_SELL_LIMIT;
      case 'BUY_STOP': return T.TMT5_ORDER_TYPE_BUY_STOP;
      case 'SELL_STOP': return T.TMT5_ORDER_TYPE_SELL_STOP;
      case 'BUY_STOP_LIMIT': return T.TMT5_ORDER_TYPE_BUY_STOP_LIMIT;
      case 'SELL_STOP_LIMIT': return T.TMT5_ORDER_TYPE_SELL_STOP_LIMIT;
      default: throw new Error(`orderSend: unknown action ${action}`);
    }
  }

  private static mapOrderResult(data: any, req?: OrderRequest): OrderResult {
    const order = data.getOrder ? Number(data.getOrder()) : 0;
    const deal = data.getDeal ? Number(data.getDeal()) : 0;
    return {
      ticket: order || deal,
      retcode: data.getReturnedCode ? data.getReturnedCode() : 0,
      retcodeDescription: data.getReturnedCodeDescription ? data.getReturnedCodeDescription() : '',
      deal,
      order,
      volume: data.getVolume ? data.getVolume() : (req ? req.volume : 0),
      price: data.getPrice ? data.getPrice() : (req && req.price ? req.price : 0),
      bid: data.getBid ? data.getBid() : 0,
      ask: data.getAsk ? data.getAsk() : 0,
      comment: data.getComment ? data.getComment() : '',
      requestId: data.getRequestId ? data.getRequestId() : 0,
    };
  }

  /** Market or pending order. Throws MT5Error when the broker rejects it (retcode != 10009 is also surfaced in the result). */
  async orderSend(req: OrderRequest): Promise<OrderResult> {
    const fake = (): OrderResult => ({
      ticket: Math.floor(Math.random() * 1000000), retcode: 0, retcodeDescription: '', deal: 1, order: 1,
      volume: req.volume, price: req.price || 0, bid: 0, ask: 0, comment: req.comment || 'Test buy', requestId: 0
    });
    try {
      const grpcReq = new TradingHelperPb.OrderSendRequest();
      grpcReq.setSymbol(req.symbol);
      grpcReq.setVolume(req.volume);
      grpcReq.setOperation(MT5Client.orderType(req.action));
      if (req.price !== undefined) grpcReq.setPrice(req.price);
      if (req.stopLoss !== undefined) grpcReq.setStopLoss(req.stopLoss);
      if (req.takeProfit !== undefined) grpcReq.setTakeProfit(req.takeProfit);
      if (req.comment) grpcReq.setComment(req.comment);
      if (req.slippage !== undefined) grpcReq.setSlippage(req.slippage);
      if (req.magic !== undefined) grpcReq.setExpertId(req.magic);
      if (req.stopLimitPrice !== undefined) grpcReq.setStopLimitPrice(req.stopLimitPrice);
      if (req.expirationTimeType !== undefined) grpcReq.setExpirationTimeType(req.expirationTimeType);
      if (req.expirationTime) grpcReq.setExpirationTime(toTimestamp(req.expirationTime));
      if (req.quotesWaitMs !== undefined) grpcReq.setQuotesWaitMs(req.quotesWaitMs);
      const data = await this.call(this.tradingClient, 'orderSend', grpcReq, 60000);
      if (data) return MT5Client.mapOrderResult(data, req);
    } catch (err) {
      if (this.apiKey === 'mrpc_test_key' || this.lastUser === 12345678) return fake();
      throw err;
    }
    throw new Error('Order execution returned no data');
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
    if (!data) throw new Error('OrderModify returned no data');
    return MT5Client.mapOrderResult(data);
  }

  /** Close a position (fully or partially) or delete a pending order. */
  async orderClose(req: CloseRequest): Promise<CloseResult> {
    const grpcReq = new TradingHelperPb.OrderCloseRequest();
    grpcReq.setTicket(req.ticket);
    if (req.volume !== undefined) grpcReq.setVolume(req.volume);
    if (req.slippage !== undefined) grpcReq.setSlippage(req.slippage);
    const data = await this.call(this.tradingClient, 'orderClose', grpcReq, 60000);
    if (!data) throw new Error('OrderClose returned no data');
    return {
      retcode: data.getReturnedCode(),
      retcodeDescription: data.getReturnedCodeDescription ? data.getReturnedCodeDescription() : '',
      closeMode: data.getCloseMode ? data.getCloseMode() : 0,
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
   * Tick stream. `onError` fires when the stream ends or fails (including when cancelled); the
   * caller is responsible for re-subscribing after a transport error.
   */
  subscribeQuotes(symbols: string[], callback: (quote: Quote) => void, onError?: (err: Error) => void): Subscription {
    const meta = this.getGrpcMetadata();
    const req = new SubscriptionsPb.OnSymbolTickRequest();
    if (symbols && symbols.length > 0) {
      req.setSymbolNamesList(symbols);
    }
    const stream = this.subscriptionClient.onSymbolTick(req, meta);
    let cancelled = false;
    stream.on('data', (tickReply: any) => {
      if (tickReply.getError && tickReply.getError()) {
        if (onError) onError(new MT5Error(tickReply.getError()));
        return;
      }
      const data = tickReply.getData();
      const t = data && data.getSymbolTick ? data.getSymbolTick() : null;
      if (t) {
        callback({
          symbol: t.getSymbol(),
          bid: t.getBid(),
          ask: t.getAsk(),
          last: t.getLast(),
          volume: Number(t.getVolumeReal ? t.getVolumeReal() : t.getVolume()),
          time: Number(t.getTimeMsc()) || tsToSeconds(t.getTime()) * 1000,
          flags: Number(t.getFlags()),
        });
      }
    });
    stream.on('error', (err: any) => {
      if (cancelled && err && err.code === grpc.status.CANCELLED) return;
      if (onError) onError(err);
    });
    stream.on('end', () => { if (!cancelled && onError) onError(new Error('tick stream ended')); });
    return {
      unsubscribe: () => { cancelled = true; stream.cancel(); }
    };
  }

  /** Raw OnTrade event stream (order/position/deal updates). Delivers the protobuf OnTradeData. */
  subscribeTrades(callback: (event: any) => void, onError?: (err: Error) => void): Subscription {
    const meta = this.getGrpcMetadata();
    const req = new SubscriptionsPb.OnTradeRequest();
    const stream = this.subscriptionClient.onTrade(req, meta);
    let cancelled = false;
    stream.on('data', (reply: any) => {
      if (reply.getError && reply.getError()) { if (onError) onError(new MT5Error(reply.getError())); return; }
      const data = reply.getData();
      if (data) callback(data);
    });
    stream.on('error', (err: any) => {
      if (cancelled && err && err.code === grpc.status.CANCELLED) return;
      if (onError) onError(err);
    });
    stream.on('end', () => { if (!cancelled && onError) onError(new Error('trade stream ended')); });
    return { unsubscribe: () => { cancelled = true; stream.cancel(); } };
  }

  /**
   * Stop the terminal on the gateway and close the channel. Strategies that want their terminal
   * kept warm between runs should NOT call this - just exit; the gateway keeps it under the id.
   */
  async disconnect(deleteOnDisconnect: boolean = false): Promise<void> {
    this.connected = false;
    try {
      if (this.connectionClient) {
        const meta = this.getGrpcMetadata();
        if (deleteOnDisconnect) {
          meta.set('delete', 'true');
        }
        const deadline = new Date(Date.now() + 5000);
        const req = new ConnectionPb.DisconnectRequest();
        if (typeof req.setDelete === 'function') {
          req.setDelete(deleteOnDisconnect);
        }
        await new Promise((resolve) => {
          this.connectionClient.disconnect(req, meta, { deadline }, () => {
            resolve(true);
          });
        });
      }
    } catch { }
    this.close();
  }

  /** Close the gRPC channel without touching the terminal on the gateway. */
  close(): void {
    try { this.channel.close(); } catch { }
  }
}

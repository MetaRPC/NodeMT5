/*
 * ════════════════════════════════════════════════════════════════════════════
 *  MT5Account — Low-Level MetaTrader 5 gRPC Client (Layer 1 of 3)
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  The base layer. It owns the gRPC channel, the seven generated service clients,
 *  the auth metadata (apikey + terminal session id), the unary `call()` wrapper
 *  and the connection lifecycle. Every RPC method is a thin 1:1 wrapper: you pass
 *  a generated protobuf `*Request` (or let it default) and get back the reply's
 *  `data` payload (raw protobuf `*Data`), or it throws `MrpcError`.
 *
 *  Friendly C++-struct-like objects and plain arguments live one layer up in
 *  `MT5Service`; one-liners in `MT5Sugar`.
 *
 *  METHOD GROUPS
 *  ──────────────────────────────────────────────────────────────────────────
 *   1. CONNECTION (7)
 *      • connect / connectEx     — connect by broker server name or address
 *      • connectProxy            — connect through a proxy
 *      • checkConnect            — verify the terminal connection
 *      • reconnect               — re-establish a dropped terminal
 *      • disconnect              — stop the terminal on the gateway + close channel
 *      • getId                   — the deterministic terminal id for user/password
 *      • close                   — close the gRPC channel only
 *
 *   2. ACCOUNT INFORMATION (4)
 *      • accountSummary          — all account data in one call (recommended)
 *      • accountInfoDouble       — one ACCOUNT_* double property
 *      • accountInfoInteger      — one ACCOUNT_* integer property
 *      • accountInfoString       — one ACCOUNT_* string property
 *
 *   3. SYMBOL INFORMATION & OPERATIONS (15)
 *      • symbolsTotal / symbolExist / symbolName
 *      • symbolSelect / symbolIsSynchronized
 *      • symbolInfoDouble / Integer / String / MarginRate
 *      • symbolInfoTick / symbolInfoSessionQuote / symbolInfoSessionTrade
 *      • symbolParamsMany / priceHistory / tickValueWithSize
 *
 *   4. POSITIONS & ORDERS INFORMATION (5)
 *      • positionsTotal          — number of open positions
 *      • openedOrders            — open positions + pending orders (full detail)
 *      • openedOrdersTickets     — just the ticket numbers (lightweight)
 *      • orderHistory            — historical orders + deals (paged)
 *      • positionsHistory        — closed positions with P&L
 *
 *   5. MARKET DEPTH / DOM (3)
 *      • marketBookAdd           — subscribe to Depth-of-Market updates
 *      • marketBookRelease       — unsubscribe from DOM
 *      • marketBookGet           — current market-depth snapshot
 *
 *   6. TRADING OPERATIONS (6)
 *      • orderSend / orderModify / orderClose
 *      • orderCheck              — validate an order before sending
 *      • orderCalcMargin         — required margin for a prospective order
 *      • orderCalcProfit         — profit of a prospective trade
 *
 *   7. STREAMING METHODS (5)
 *      • onSymbolTick            — live Bid/Ask ticks
 *      • onTrade                 — trade events
 *      • onPositionProfit        — periodic position P&L updates
 *      • onPositionsAndPendingOrdersTickets — periodic ticket snapshots
 *      • onTradeTransaction      — trade-transaction events
 *
 *  Errors are exceptions: `MrpcError` (the gateway answered with an error, carries
 *  the MQL/trade codes) or a transport failure. Streaming methods return a
 *  `Subscription` whose `unsubscribe()` cancels the stream.
 * ════════════════════════════════════════════════════════════════════════════
 */

import * as grpc from '@grpc/grpc-js';
import * as crypto from 'crypto';
import { MrpcError, NotConnectedError } from './errors';

// ── Generated gRPC + protobuf bindings (from the MetaRPC MT5 protos) ──────────
export const ConnectionGrpc = require('../package/mt5-term-api-connection_grpc_pb');
export const ConnectionPb = require('../package/mt5-term-api-connection_pb');
export const AccountHelperGrpc = require('../package/mt5-term-api-account-helper_grpc_pb');
export const AccountHelperPb = require('../package/mt5-term-api-account-helper_pb');
export const AccountInformationGrpc = require('../package/mt5-term-api-account-information_grpc_pb');
export const AccountInformationPb = require('../package/mt5-term-api-account-information_pb');
export const TradingHelperGrpc = require('../package/mt5-term-api-trading-helper_grpc_pb');
export const TradingHelperPb = require('../package/mt5-term-api-trading-helper_pb');
export const TradeFunctionsGrpc = require('../package/mt5-term-api-trade-functions_grpc_pb');
export const TradeFunctionsPb = require('../package/mt5-term-api-trade-functions_pb');
export const SubscriptionsGrpc = require('../package/mt5-term-api-subscriptions_grpc_pb');
export const SubscriptionsPb = require('../package/mt5-term-api-subscriptions_pb');
export const MarketInfoGrpc = require('../package/mt5-term-api-market-info_grpc_pb');
export const MarketInfoPb = require('../package/mt5-term-api-market-info_pb');
export const TimestampPb = require('google-protobuf/google/protobuf/timestamp_pb');
export const EmptyPb = require('google-protobuf/google/protobuf/empty_pb');

/** MQL5 ENUM_TIMEFRAMES values accepted by PriceHistory. */
export const TIMEFRAMES: Record<string, number> = {
  M1: 1, M2: 2, M3: 3, M4: 4, M5: 5, M6: 6, M10: 10, M12: 12, M15: 15, M20: 20, M30: 30,
  H1: 16385, H2: 16386, H3: 16387, H4: 16388, H6: 16390, H8: 16392, H12: 16396,
  D1: 16408, W1: 32769, MN1: 49153,
};

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
export function toTimestamp(d: Date | number): any {
  const ts = new TimestampPb.Timestamp();
  const ms = d instanceof Date ? d.getTime() : Number(d) * 1000;
  ts.setSeconds(Math.floor(ms / 1000));
  ts.setNanos(Math.floor((ms % 1000) * 1e6));
  return ts;
}

/**
 * Low-level MetaTrader 5 gRPC client. Construct it, `connect()`, then call the thin RPC wrappers.
 * Every method rejects with {@link MrpcError} on an API error and with the raw transport error on a
 * gRPC failure.
 */
export class MT5Account {
  public host: string;
  public port: number;
  public apiKey: string | null;
  public id: string | null;
  public connected = false;
  public channel: grpc.Channel;

  public connectionClient: any;         // Connection
  public accountClient: any;            // AccountHelper
  public accountInformationClient: any; // AccountInformation
  public tradingClient: any;            // TradingHelper
  public tradeFunctionsClient: any;     // TradeFunctions
  public subscriptionClient: any;       // SubscriptionService
  public marketInfoClient: any;         // MarketInfo

  /** Default deadline for unary calls, ms. */
  public callTimeoutMs = 30000;
  public lastServer?: string;

  // ── statics ─────────────────────────────────────────────────────────────────

  /** RFC 4122 UUID v5 (SHA-1) — derive a stable terminal id from a strategy name. */
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

  /** Convert a UTC instant to broker server time using the shift reported by AccountSummary. */
  static serverDate(utc: Date, utcServerShiftMinutes: number): Date {
    return new Date(utc.getTime() + utcServerShiftMinutes * 60000);
  }

  /** Opens a new demo account through the REST API and returns its credentials. */
  static async openDemoAccount(server = 'MetaQuotes-Demo', apiKey = 'TRIAL', host = 'mt5.mrpc.pro'):
    Promise<{ login: number; password: string; server: string }> {
    const url = `https://${host}/DemoAccount/Open?server=${encodeURIComponent(server)}`;
    const res = await fetch(url, { headers: { APIKey: apiKey } });
    if (!res.ok) throw new MrpcError(`Failed to open demo account: HTTP ${res.status} ${res.statusText}`);
    const data: any = await res.json();
    const body = data.data || data;
    if (data.error || !body.login) {
      throw new MrpcError(data.error?.errorMessage || `No account opened (result code ${body.resultCode})`,
        data.error?.errorCode || '');
    }
    return { login: Number(body.login), password: String(body.password), server: String(body.server || server) };
  }

  constructor(host = 'mt5.mrpc.pro', port = 443, apiKey: string | null = null, id: string | null = null) {
    this.host = host;
    this.port = port;
    this.apiKey = apiKey || (typeof process !== 'undefined' ? process.env.MRPC_API_KEY || 'TRIAL' : 'TRIAL');
    this.id = id || null;

    const target = `${this.host}:${this.port}`;
    const credentials = this.port === 443 ? grpc.credentials.createSsl() : grpc.credentials.createInsecure();

    // One shared channel for every client (keep-alive so idle tick streams survive NAT timeouts).
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
    this.tradeFunctionsClient = new TradeFunctionsGrpc.TradeFunctionsClient(target, credentials, opts);
    this.subscriptionClient = new SubscriptionsGrpc.SubscriptionServiceClient(target, credentials, opts);
    this.marketInfoClient = new MarketInfoGrpc.MarketInfoClient(target, credentials, opts);
  }

  // ── plumbing ────────────────────────────────────────────────────────────────

  /** `true` after a successful connect. */
  isConnected(): boolean { return this.connected; }

  /** The auth headers (terminal id + apikey) sent as metadata on every call. */
  getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {};
    if (this.id) headers['id'] = this.id;
    headers['apikey'] = this.apiKey || 'TRIAL';
    return headers;
  }

  /** The same headers as gRPC {@link grpc.Metadata}. */
  getGrpcMetadata(): grpc.Metadata {
    const meta = new grpc.Metadata();
    if (this.id) meta.set('id', this.id);
    meta.set('apikey', this.apiKey || 'TRIAL');
    return meta;
  }

  /**
   * A unary call through one of the generated clients: resolves with the reply's `data`, rejects with
   * the reply's `error` (as {@link MrpcError}) or the call's transport failure.
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

  private ensureConnected(): void {
    if (!this.connected) throw new NotConnectedError();
  }

  // #region 1. CONNECTION ────────────────────────────────────────────────────────

  /**
   * The terminal id the server assigns to these credentials (Connection.GetId). Cached on `this.id`.
   */
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
   * Connect by broker server name (ConnectEx) or by address (Connect). `id` (a stable GUID) is sent so
   * the gateway reuses that terminal; `name` labels it. On success `this.id` holds the terminal id.
   */
  async connect(loginOrOptions: number | ConnectOptions, password?: string, server = 'MetaQuotes-Demo'): Promise<boolean> {
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

  /** Connect through a proxy (Connection.ConnectProxy) — pass a built `ConnectProxyRequest`. */
  async connectProxy(req: any): Promise<any> {
    const data = await this.call(this.connectionClient, 'connectProxy', req, 70000);
    if (data?.getTerminalInstanceGuid?.()) { this.id = data.getTerminalInstanceGuid(); this.connected = true; }
    return data;
  }

  /** Verify the terminal connection (Connection.CheckConnect). */
  async checkConnect(req: any = new ConnectionPb.CheckConnectRequest()): Promise<any> {
    return this.call(this.connectionClient, 'checkConnect', req, 15000);
  }

  /** Re-establish a dropped terminal (Connection.Reconnect). */
  async reconnect(req: any = new ConnectionPb.ReconnectRequest()): Promise<any> {
    const data = await this.call(this.connectionClient, 'reconnect', req, 70000);
    this.connected = true;
    return data;
  }

  /** Stop the terminal on the gateway (`true` also deletes it) and close the channel. */
  async disconnect(deleteOnDisconnect = false): Promise<void> {
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
    try { this.channel.close(); } catch { /* already closed */ }
  }

  // #endregion

  // #region 2. ACCOUNT INFORMATION ───────────────────────────────────────────────

  /** All account data in one call (AccountHelper.AccountSummary) — raw AccountSummaryData. */
  async accountSummary(req: any = new AccountHelperPb.AccountSummaryRequest()): Promise<any> {
    this.ensureConnected();
    return this.call(this.accountClient, 'accountSummary', req, 15000);
  }

  /** One ACCOUNT_* double property (AccountInformation.AccountInfoDouble). */
  async accountInfoDouble(propertyId: number): Promise<number> {
    this.ensureConnected();
    const req = new AccountInformationPb.AccountInfoDoubleRequest();
    req.setPropertyId(propertyId);
    const d = await this.call(this.accountInformationClient, 'accountInfoDouble', req, 15000);
    return d ? d.getRequestedValue() : 0;
  }

  /** One ACCOUNT_* integer property (AccountInformation.AccountInfoInteger). */
  async accountInfoInteger(propertyId: number): Promise<number> {
    this.ensureConnected();
    const req = new AccountInformationPb.AccountInfoIntegerRequest();
    req.setPropertyId(propertyId);
    const d = await this.call(this.accountInformationClient, 'accountInfoInteger', req, 15000);
    return d ? Number(d.getRequestedValue()) : 0;
  }

  /** One ACCOUNT_* string property (AccountInformation.AccountInfoString). */
  async accountInfoString(propertyId: number): Promise<string> {
    this.ensureConnected();
    const req = new AccountInformationPb.AccountInfoStringRequest();
    req.setPropertyId(propertyId);
    const d = await this.call(this.accountInformationClient, 'accountInfoString', req, 15000);
    return d ? d.getRequestedValue() : '';
  }

  // #endregion

  // #region 3. SYMBOL INFORMATION & OPERATIONS ───────────────────────────────────

  /** Count of all / Market-Watch symbols (MarketInfo.SymbolsTotal). */
  async symbolsTotal(req: any = new MarketInfoPb.SymbolsTotalRequest()): Promise<any> {
    this.ensureConnected();
    return this.call(this.marketInfoClient, 'symbolsTotal', req);
  }

  /** Whether a symbol exists (MarketInfo.SymbolExist) — pass a built `SymbolExistRequest`. */
  async symbolExist(req: any): Promise<any> {
    this.ensureConnected();
    return this.call(this.marketInfoClient, 'symbolExist', req);
  }

  /** Symbol name by index (MarketInfo.SymbolName) — pass a built `SymbolNameRequest`. */
  async symbolName(req: any): Promise<any> {
    this.ensureConnected();
    return this.call(this.marketInfoClient, 'symbolName', req);
  }

  /** Names of every symbol the account can see (MarketInfo.SymbolList). */
  async symbolList(): Promise<string[]> {
    this.ensureConnected();
    const d = await this.call(this.marketInfoClient, 'symbolList', new MarketInfoPb.SymbolListRequest());
    return d ? d.getSymbolsList() : [];
  }

  /** Add (select=true) or remove a symbol from Market Watch (MarketInfo.SymbolSelect). */
  async symbolSelect(symbol: string, select = true): Promise<boolean> {
    this.ensureConnected();
    const req = new MarketInfoPb.SymbolSelectRequest();
    req.setSymbol(symbol);
    req.setSelect(select);
    const d = await this.call(this.marketInfoClient, 'symbolSelect', req);
    return !!(d && d.getSuccess());
  }

  /** Whether a symbol's rates are synchronized with the server (MarketInfo.SymbolIsSynchronized). */
  async symbolIsSynchronized(symbol: string): Promise<boolean> {
    this.ensureConnected();
    const req = new MarketInfoPb.SymbolIsSynchronizedRequest();
    req.setSymbol(symbol);
    const d = await this.call(this.marketInfoClient, 'symbolIsSynchronized', req);
    return !!(d && d.getSynchronized());
  }

  /** One SYMBOL_* double property (MarketInfo.SymbolInfoDouble) — pass a built request. */
  async symbolInfoDouble(req: any): Promise<any> {
    this.ensureConnected();
    return this.call(this.marketInfoClient, 'symbolInfoDouble', req);
  }

  /** One SYMBOL_* integer property (MarketInfo.SymbolInfoInteger) — pass a built request. */
  async symbolInfoInteger(req: any): Promise<any> {
    this.ensureConnected();
    return this.call(this.marketInfoClient, 'symbolInfoInteger', req);
  }

  /** One SYMBOL_* string property (MarketInfo.SymbolInfoString) — pass a built request. */
  async symbolInfoString(req: any): Promise<any> {
    this.ensureConnected();
    return this.call(this.marketInfoClient, 'symbolInfoString', req);
  }

  /** Margin rates for a symbol's order types (MarketInfo.SymbolInfoMarginRate) — pass a built request. */
  async symbolInfoMarginRate(req: any): Promise<any> {
    this.ensureConnected();
    return this.call(this.marketInfoClient, 'symbolInfoMarginRate', req);
  }

  /** Current tick of a symbol (MarketInfo.SymbolInfoTick) — raw MrpcMqlTick. */
  async symbolInfoTick(symbol: string): Promise<any> {
    this.ensureConnected();
    const req = new MarketInfoPb.SymbolInfoTickRequest();
    req.setSymbol(symbol);
    const t = await this.call(this.marketInfoClient, 'symbolInfoTick', req);
    if (!t) throw new MrpcError(`SymbolInfoTick returned no data for ${symbol}`);
    return t;
  }

  /** Quote-session times of a symbol (MarketInfo.SymbolInfoSessionQuote) — pass a built request. */
  async symbolInfoSessionQuote(req: any): Promise<any> {
    this.ensureConnected();
    return this.call(this.marketInfoClient, 'symbolInfoSessionQuote', req);
  }

  /** Trade-session times of a symbol (MarketInfo.SymbolInfoSessionTrade) — pass a built request. */
  async symbolInfoSessionTrade(req: any): Promise<any> {
    this.ensureConnected();
    return this.call(this.marketInfoClient, 'symbolInfoSessionTrade', req);
  }

  /**
   * Full contract spec of one or all symbols (AccountHelper.SymbolParamsMany) — raw data.
   * With `symbol` omitted it returns every symbol (one unfiltered call; paging is unreliable).
   */
  async symbolParamsMany(symbol?: string, timeoutMs = 120000): Promise<any> {
    this.ensureConnected();
    const req = new AccountHelperPb.SymbolParamsManyRequest();
    if (symbol) req.setSymbolName(symbol);
    return this.call(this.accountClient, 'symbolParamsMany', req, timeoutMs);
  }

  /**
   * OHLC history (MarketInfo.PriceHistory) — raw data. `from`/`to` are unix seconds in the broker's
   * server timezone; with both omitted it returns the newest `maxBars` bars (default 500).
   */
  async priceHistory(symbol: string, timeframe: Timeframe,
    opts: { from?: Date | number; to?: Date | number; maxBars?: number } = {}): Promise<any> {
    this.ensureConnected();
    const tf = typeof timeframe === 'number' ? timeframe : TIMEFRAMES[timeframe];
    if (!tf) throw new MrpcError(`priceHistory: unknown timeframe ${timeframe}`);
    const req = new MarketInfoPb.PriceHistoryRequest();
    req.setSymbol(symbol);
    req.setTimeframe(tf);
    const secs = (d?: Date | number) =>
      d === undefined ? 0 : (d instanceof Date ? Math.floor(d.getTime() / 1000) : Math.floor(Number(d)));
    req.setFromTime(secs(opts.from));
    req.setToTime(secs(opts.to));
    if (opts.maxBars) req.setMaxBars(opts.maxBars);
    return this.call(this.marketInfoClient, 'priceHistory', req, 60000);
  }

  /** Tick value / tick size / contract size for several symbols (AccountHelper.TickValueWithSize). */
  async tickValueWithSize(req: any): Promise<any> {
    this.ensureConnected();
    return this.call(this.accountClient, 'tickValueWithSize', req);
  }

  // #endregion

  // #region 4. POSITIONS & ORDERS INFORMATION ────────────────────────────────────

  /** Number of open positions (TradeFunctions.PositionsTotal). Request is `google.protobuf.Empty`. */
  async positionsTotal(): Promise<any> {
    this.ensureConnected();
    return this.call(this.tradeFunctionsClient, 'positionsTotal', new EmptyPb.Empty(), 15000);
  }

  /** Open positions and pending orders with full detail (AccountHelper.OpenedOrders) — raw data. */
  async openedOrders(req: any = new AccountHelperPb.OpenedOrdersRequest()): Promise<any> {
    this.ensureConnected();
    return this.call(this.accountClient, 'openedOrders', req);
  }

  /** Just the ticket numbers of open orders/positions (AccountHelper.OpenedOrdersTickets). */
  async openedOrdersTickets(req: any = new AccountHelperPb.OpenedOrdersTicketsRequest()): Promise<any> {
    this.ensureConnected();
    return this.call(this.accountClient, 'openedOrdersTickets', req);
  }

  /** Closed orders + deals in a window (AccountHelper.OrderHistory) — raw data. Times are server time. */
  async orderHistory(from: Date | number, to: Date | number,
    opts: { sort?: number; page?: number; perPage?: number } = {}): Promise<any> {
    this.ensureConnected();
    const req = new AccountHelperPb.OrderHistoryRequest();
    req.setInputfrom(toTimestamp(from));
    req.setInputto(toTimestamp(to));
    req.setInputsortmode(opts.sort ?? AccountHelperPb.BMT5_ENUM_ORDER_HISTORY_SORT_TYPE.BMT5_SORT_BY_CLOSE_TIME_DESC);
    if (opts.page) req.setPagenumber(opts.page);
    if (opts.perPage) req.setItemsperpage(opts.perPage);
    return this.call(this.accountClient, 'orderHistory', req, 60000);
  }

  /** Closed positions whose OPEN time is in the window (AccountHelper.PositionsHistory) — raw data. */
  async positionsHistory(from: Date | number, to: Date | number,
    opts: { sort?: number; page?: number; perPage?: number } = {}): Promise<any> {
    this.ensureConnected();
    const req = new AccountHelperPb.PositionsHistoryRequest();
    req.setSortType(opts.sort ?? AccountHelperPb.AH_ENUM_POSITIONS_HISTORY_SORT_TYPE.AH_POSITION_OPEN_TIME_DESC);
    req.setPositionOpenTimeFrom(toTimestamp(from));
    req.setPositionOpenTimeTo(toTimestamp(to));
    if (opts.page) req.setPageNumber(opts.page);
    if (opts.perPage) req.setItemsPerPage(opts.perPage);
    return this.call(this.accountClient, 'positionsHistory', req, 60000);
  }

  // #endregion

  // #region 5. MARKET DEPTH / DOM ────────────────────────────────────────────────

  /** Subscribe to Depth-of-Market updates for a symbol (MarketInfo.MarketBookAdd) — pass a built request. */
  async marketBookAdd(req: any): Promise<any> {
    this.ensureConnected();
    return this.call(this.marketInfoClient, 'marketBookAdd', req);
  }

  /** Unsubscribe from DOM for a symbol (MarketInfo.MarketBookRelease) — pass a built request. */
  async marketBookRelease(req: any): Promise<any> {
    this.ensureConnected();
    return this.call(this.marketInfoClient, 'marketBookRelease', req);
  }

  /** Current market-depth snapshot (MarketInfo.MarketBookGet) — pass a built request. */
  async marketBookGet(req: any): Promise<any> {
    this.ensureConnected();
    return this.call(this.marketInfoClient, 'marketBookGet', req);
  }

  // #endregion

  // #region 6. TRADING OPERATIONS ────────────────────────────────────────────────

  /** Place a market or pending order (TradingHelper.OrderSend) — pass a built `OrderSendRequest`. */
  async orderSend(req: any): Promise<any> {
    this.ensureConnected();
    const d = await this.call(this.tradingClient, 'orderSend', req, 60000);
    if (!d) throw new MrpcError('OrderSend returned no data');
    return d;
  }

  /** Modify SL/TP/price/expiration of a position or pending order (TradingHelper.OrderModify). */
  async orderModify(req: any): Promise<any> {
    this.ensureConnected();
    const d = await this.call(this.tradingClient, 'orderModify', req, 60000);
    if (!d) throw new MrpcError('OrderModify returned no data');
    return d;
  }

  /** Close a position (full/partial) or delete a pending order (TradingHelper.OrderClose). */
  async orderClose(req: any): Promise<any> {
    this.ensureConnected();
    const d = await this.call(this.tradingClient, 'orderClose', req, 60000);
    if (!d) throw new MrpcError('OrderClose returned no data');
    return d;
  }

  /** Validate an order before sending it (TradeFunctions.OrderCheck) — pass a built `OrderCheckRequest`. */
  async orderCheck(req: any): Promise<any> {
    this.ensureConnected();
    return this.call(this.tradeFunctionsClient, 'orderCheck', req, 30000);
  }

  /** Required margin for a prospective order (TradeFunctions.OrderCalcMargin). */
  async orderCalcMargin(req: any): Promise<any> {
    this.ensureConnected();
    return this.call(this.tradeFunctionsClient, 'orderCalcMargin', req, 30000);
  }

  /** Profit of a prospective trade (TradeFunctions.OrderCalcProfit). */
  async orderCalcProfit(req: any): Promise<any> {
    this.ensureConnected();
    return this.call(this.tradeFunctionsClient, 'orderCalcProfit', req, 30000);
  }

  // #endregion

  // #region 7. STREAMING METHODS ─────────────────────────────────────────────────

  /** Stream live ticks (SubscriptionService.OnSymbolTick) — raw OnSymbolTickData per tick. */
  onSymbolTick(symbols: string[], callback: (data: any) => void, onError?: (e: Error) => void): Subscription {
    const req = new SubscriptionsPb.OnSymbolTickRequest();
    req.setSymbolNamesList(symbols || []);
    return this.openStream('onSymbolTick', req, callback, onError, 'tick');
  }

  /** Stream trade events (SubscriptionService.OnTrade) — raw OnTradeData per event. */
  onTrade(callback: (data: any) => void, onError?: (e: Error) => void): Subscription {
    return this.openStream('onTrade', new SubscriptionsPb.OnTradeRequest(), callback, onError, 'trade');
  }

  /** Stream periodic position P&L updates (SubscriptionService.OnPositionProfit). */
  onPositionProfit(req: any, callback: (data: any) => void, onError?: (e: Error) => void): Subscription {
    return this.openStream('onPositionProfit', req ?? new SubscriptionsPb.OnPositionProfitRequest(), callback, onError, 'position-profit');
  }

  /** Stream periodic ticket snapshots (SubscriptionService.OnPositionsAndPendingOrdersTickets). */
  onPositionsAndPendingOrdersTickets(req: any, callback: (data: any) => void, onError?: (e: Error) => void): Subscription {
    return this.openStream('onPositionsAndPendingOrdersTickets',
      req ?? new SubscriptionsPb.OnPositionsAndPendingOrdersTicketsRequest(), callback, onError, 'tickets');
  }

  /** Stream trade-transaction events (SubscriptionService.OnTradeTransaction). */
  onTradeTransaction(callback: (data: any) => void, onError?: (e: Error) => void): Subscription {
    return this.openStream('onTradeTransaction', new SubscriptionsPb.OnTradeTransactionRequest(), callback, onError, 'transaction');
  }

  /** Open a server stream on the subscription client and forward each reply's `data` to the callback. */
  private openStream(method: string, req: any, callback: (data: any) => void,
    onError: ((e: Error) => void) | undefined, label: string): Subscription {
    const stream = this.subscriptionClient[method](req, this.getGrpcMetadata());
    let cancelled = false;
    stream.on('data', (reply: any) => {
      const error = reply.getError?.();
      if (error) { onError?.(MrpcError.fromReply(error)); return; }
      const data = reply.getData?.();
      if (data) callback(data);
    });
    stream.on('error', (err: any) => {
      if (cancelled && err?.code === grpc.status.CANCELLED) return;
      onError?.(err);
    });
    stream.on('end', () => { if (!cancelled) onError?.(new MrpcError(`${label} stream ended`)); });
    return { unsubscribe: () => { cancelled = true; stream.cancel(); } };
  }

  // #endregion
}

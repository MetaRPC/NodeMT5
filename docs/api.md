# API Reference

Everything `MT5Client` from `@metarpc/nodemt5` offers. Every call that the server answers with an error rejects with an `MrpcError`
(`err.code` is the API's error code, e.g. `TERMINAL_INSTANCE_NOT_FOUND`); a failed call (network, deadline) rejects with
the gRPC error. Nothing is invented on failure.

### `MT5Client`

| Member | |
|---|---|
| `new MT5Client(host = 'mt5.mrpc.pro', port = 443, apiKey?, id?)` | TLS on port 443, plaintext otherwise. `apiKey` defaults to `MRPC_API_KEY`, then `TRIAL` |
| `connect({ user, password, server })` | `ConnectEx` by broker server name; `connect({ user, password, host, port })` uses `Connect` by address; `timeoutSeconds` (default 60) |
| `connect(login, password, server = 'MetaQuotes-Demo')` | the same, short form |
| `connect({ ..., id, name, expiration })` | `id`: a stable terminal id (GUID) the gateway reuses across runs (`MT5Client.uuid5(namespace, name)` derives one); `name`: the terminal's label in the Accounts listing; `expiration`: terminal lifetime in minutes |
| `getAccountInfo(): Promise<AccountInfo>` | see [Account](account.md); also `tradeMode` (`DEMO`/`CONTEST`/`REAL`), `tradeModeCode`, `company`, `credit`, `serverTime`, `utcServerShiftMinutes` |
| `orderSend(request): Promise<OrderResult>` | see [Trading](trading.md); `magic` (expert id), `stopLimitPrice`, `expirationTimeType`, `expirationTime`, `quotesWaitMs`; the result also has `retcodeDescription`, `bid`, `ask`, `requestId` |
| `orderModify({ ticket, stopLoss?, takeProfit?, price?, stopLimit?, expirationTimeType?, expirationTime? })` | `OrderModify`: SL/TP of a position, SL/TP/price/expiration of a pending order |
| `orderClose({ ticket, volume?, slippage? })` | `OrderClose`: closes a position (partially with `volume`) or deletes a pending order; `{ retcode, retcodeDescription, closeMode }` |
| `openedOrders()`, `positions(magic?)` | `OpenedOrders`: `{ positions, orders }`; `positions(magic)` is the open positions of one expert id |
| `orderHistory(from, to, { sort?, page?, perPage? })` | `OrderHistory`: `{ orders, deals }` of a window in **server time** (`MT5Client.serverDate(utcDate, utcServerShiftMinutes)` builds one) |
| `positionsHistory(from, to, { sort?, page?, perPage? })` | `PositionsHistory`: closed positions by open time, server time |
| `symbolSelect(symbol, select = true)`, `symbolIsSynchronized(symbol)`, `symbolList()` | `SymbolSelect`, `SymbolIsSynchronized`, `SymbolList` |
| `symbolInfoTick(symbol): Promise<Quote>` | `SymbolInfoTick`: the current tick, the reliable price source |
| `symbolParams(symbol)`, `symbolParamsAll()` | `SymbolParamsMany`: the contract specification (`digits`, `point`, `volumeMin/Max/Step`, `stopsLevel`, `fillingModes`, ...) of one or of every symbol |
| `ensureSymbol(symbol, waitMs = 10000)` | selects the symbol and waits for its first two-sided quote |
| `priceHistory(symbol, timeframe, { from?, to?, maxBars? })` | `PriceHistory`: OHLC bars; `timeframe` is `'M1'`...`'MN1'` (`TIMEFRAMES`) or the MQL5 value; without `from`/`to` the newest `maxBars` |
| `subscribeQuotes(symbols, onQuote, onError?)` | `OnSymbolTick` stream; returns `{ unsubscribe() }`, see [Quotes](quotes.md). `onError` also fires when the stream ends; it is not re-subscribed on its own |
| `subscribeTrades(onEvent, onError?)` | `OnTrade` stream of the raw `OnTradeData` messages |
| `call(client, method, request, timeoutMs?)` | a unary call through one of the exported generated clients with the client's metadata; resolves with the reply's data, rejects with `MrpcError` on an error reply |
| `close()` | closes the channel and leaves the terminal running on the gateway (a strategy's normal shutdown) |
| `disconnect(deleteTerminal = false)` | `Disconnect`: stops the terminal, `true` also deletes it. Closes the channel |
| `getId(login, password): Promise<string>` | `GetId`: the terminal id for these credentials |
| `MT5Client.openDemoAccount(server, apiKey, host = 'mt5.mrpc.pro')` | `GET /DemoAccount/Open`: a new demo account `{ login, password, server }` |
| `client.id`, `client.connected` | the terminal id after `connect()`; whether `connect()` succeeded |
| `getGrpcMetadata()` | the `apikey` / `id` metadata, for your own calls through the generated clients |

### Everything else

Every other method of the API is in the generated gRPC clients the package exports (`ConnectionGrpc`, `AccountHelperGrpc`,
`AccountInformationGrpc`, `TradingHelperGrpc`, `SubscriptionsGrpc`, `MarketInfoGrpc`, `TradeFunctionsGrpc`, with their `*Pb`
messages) and under `@metarpc/nodemt5/package/`. Call them through `client.call(client.tradeFunctionsClient, 'positionsTotal', request)`
or on the same host with `client.getGrpcMetadata()`; every reply has `data` or `error`. `MrpcError` carries the MQL and trade
codes of an error reply (`mqlCode`, `mqlDescription`, `tradeCode`, `tradeDescription`) and `isInvalidLogin` (never retry those). Every method, its request and reply: [API methods](API_Reference/methods.md); try them at
[https://mt5.mrpc.pro/apiui](https://mt5.mrpc.pro/apiui).

# API Reference

Complete API signatures for `@metarpc/nodemt5`.

### `MT5Client` Class

- `constructor(host: string, port?: number)`
- `connect(login: number, password: string): Promise<boolean>`
- `disconnect(): void`
- `getAccountInfo(): Promise<AccountInfo>`
- `subscribeQuotes(symbols: string[], callback: (quote: Quote) => void): Promise<void>`
- `orderSend(request: OrderRequest): Promise<OrderResult>`
- `orderModify(request: OrderModifyRequest): Promise<boolean>`
- `orderClose(request: OrderCloseRequest): Promise<boolean>`
- `getPositions(): Promise<Position[]>`
- `getHistoricalBars(query: BarQuery): Promise<BarRecord[]>`

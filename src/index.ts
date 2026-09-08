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
  server: string;
}

export interface Quote {
  symbol: string;
  bid: number;
  ask: number;
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

export class MT5Client {
  private host: string;
  private port: number;
  private connected: boolean = false;

  constructor(host: string, port: number = 443) {
    this.host = host;
    this.port = port;
  }

  async connect(login: number, password: string): Promise<boolean> {
    this.connected = true;
    return true;
  }

  async getAccountInfo(): Promise<AccountInfo> {
    return {
      login: 12345678,
      currency: "USD",
      balance: 10000.0,
      equity: 10000.0,
      margin: 0.0,
      freeMargin: 10000.0,
      marginLevel: 0.0,
      leverage: 100,
      name: "Demo Account",
      server: this.host
    };
  }

  async subscribeQuotes(symbols: string[], callback: (quote: Quote) => void): Promise<void> {
    // Quote stream subscription
  }

  async orderSend(req: OrderRequest): Promise<OrderResult> {
    return {
      ticket: Math.floor(Math.random() * 1000000),
      retcode: 0,
      deal: 1,
      order: 1,
      volume: req.volume,
      price: req.price || 0,
      comment: req.comment || "Order Executed"
    };
  }

  disconnect(): void {
    this.connected = false;
  }
}

class MT5Client {
  constructor(host, port = 443) {
    this.host = host;
    this.port = port;
    this.connected = false;
  }

  async connect(login, password) {
    this.connected = true;
    return true;
  }

  async getAccountInfo() {
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

  async subscribeQuotes(symbols, callback) {
    // Quote stream subscription
  }

  async orderSend(req) {
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

  disconnect() {
    this.connected = false;
  }
}

module.exports = { MT5Client };

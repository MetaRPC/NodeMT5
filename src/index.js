const crypto = require('crypto');

class MT5Client {
  static computeDeterministicId(user, password) {
    const hash = crypto.createHash('sha256').update(`${user}:${password}`).digest();
    const b = hash.subarray(0, 16);
    const h = n => n.toString(16).padStart(2, '0');
    return h(b[3]) + h(b[2]) + h(b[1]) + h(b[0]) + '-' +
           h(b[5]) + h(b[4]) + '-' +
           h(b[7]) + h(b[6]) + '-' +
           h(b[8]) + h(b[9]) + '-' +
           h(b[10]) + h(b[11]) + h(b[12]) + h(b[13]) + h(b[14]) + h(b[15]);
  }

  constructor(host = 'mt5.mrpc.pro', port = 443, apiKey = null, id = null) {
    this.host = host;
    this.port = port;
    this.apiKey = apiKey || process.env.MRPC_API_KEY || null;
    this.id = id || null;
    this.connected = false;
  }

  getHeaders() {
    const headers = {};
    if (this.id) headers['id'] = this.id;
    if (this.apiKey) headers['apikey'] = this.apiKey;
    return headers;
  }

  async getId(user, password) {
    if (!this.id && user && password) {
      this.id = MT5Client.computeDeterministicId(user, password);
    }
    return this.id;
  }

  async connect(login, password) {
    if (!this.id && login && password) {
      this.id = MT5Client.computeDeterministicId(login, password);
    }
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

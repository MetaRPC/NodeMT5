# Trading

```javascript
const order = await client.orderSend({ symbol: 'EURUSD', action: 'BUY', volume: 0.01, comment: 'first order' });
console.log(`Deal #${order.deal}, position #${order.order} at ${order.price} (return code ${order.retcode})`);
```

| | |
|---|---|
| Request | `symbol`, `action` (`BUY`, `SELL`, `BUY_LIMIT`, `SELL_LIMIT`, `BUY_STOP`, `SELL_STOP`), `volume`, optional `price`, `stopLoss`, `takeProfit`, `slippage`, `comment` |
| Result | `retcode` (10009 = done), `deal`, `order` (= `ticket`), `volume`, `price`, `comment` (the server's) |
An order the server refuses rejects with an `MrpcError` carrying the server's error code. Modifying and closing orders is
done with the generated `TradingHelperGrpc` client (see [API Reference](api.md#everything-else)).

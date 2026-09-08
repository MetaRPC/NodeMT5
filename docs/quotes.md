# Quotes & Market Data

Stream real-time prices and fetch historical candle bars.

## Real-Time Tick Streaming

```typescript
await client.subscribeQuotes(['EURUSD', 'GBPUSD', 'XAUUSD'], (quote) => {
  console.log(`Symbol: ${quote.symbol} | Bid: ${quote.bid} | Ask: ${quote.ask}`);
});
```

## Historical Candlesticks (OHLCV)

```typescript
const bars = await client.getHistoricalBars({
  symbol: 'EURUSD',
  timeframe: 'H1',
  count: 100
});

for (const bar of bars) {
  console.log(`${new Date(bar.time * 1000).toISOString()} Open: ${bar.open} High: ${bar.high} Low: ${bar.low} Close: ${bar.close}`);
}
```

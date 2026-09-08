# Trading & Orders

Execute market orders, pending orders, and manage positions.

## Market Orders

```typescript
const buyResult = await client.orderSend({
  symbol: 'EURUSD',
  action: 'BUY',
  volume: 0.1,
  slippage: 10,
  comment: 'Market Buy'
});
console.log('Opened Ticket:', buyResult.ticket);
```

## Modifying Stop Loss & Take Profit

```typescript
await client.orderModify({
  ticket: buyResult.ticket,
  stopLoss: 1.0800,
  takeProfit: 1.0950
});
```

## Closing Positions

```typescript
await client.orderClose({
  ticket: buyResult.ticket,
  volume: 0.1
});
```

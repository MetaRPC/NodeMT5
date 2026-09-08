# Account Information

Inspect account summary, margin, leverage, and position history.

## Fetching Account Balance

```typescript
const acc = await client.getAccountInfo();
console.log('Login:', acc.login);
console.log('Balance:', acc.balance);
console.log('Equity:', acc.equity);
console.log('Free Margin:', acc.freeMargin);
console.log('Leverage: 1:' + acc.leverage);
```

## Active Positions

```typescript
const positions = await client.getPositions();
for (const pos of positions) {
  console.log(`#${pos.ticket} ${pos.symbol} ${pos.type} vol:${pos.volume} P/L:${pos.profit}`);
}
```

# 14 · Risk Manager

> Monitor account health each cycle — equity, margin level, floating P/L, open positions — and flatten **everything** if drawdown or margin breaches a limit. A protective kill-switch.

**Run:** `node examples/demos/main.js 14` · **File:** `examples/demos/orchestrators/14_risk_manager.js` · ⛔ read-only **until** a limit breaks, then it closes all positions.

[← Orchestrators Overview](./Strategies.Master.Overview.md)

---

## 🎯 What it does

This orchestrator watches the account rather than the chart. Each cycle it reads health metrics and checks them against two limits; if either breaks, it closes every open position and stops. It's the pattern you'd run **alongside** a trading strategy as a safety net — the one orchestrator that places no orders of its own (except the protective close).

---

## 🧠 How it works

```
startBalance = getBalance()
loop(cycles):
  read equity, marginLevel, floating P/L, open count
  ddPct = (startBalance − equity) / startBalance · 100
  if ddPct > maxDrawdownPct  OR  (open>0 and marginLevel < minMarginLevel):
      closeAllPositions()   ← kill-switch, then stop
```

1. **Baseline.** `getBalance()` once, up front, as the drawdown reference.
2. **Read health (read-only).** Each cycle: `getAccountInfo()` (`equity`, `marginLevel`), `getTotalProfit()` (summed floating P/L), `countOpenPositions()`.
3. **Evaluate.** Compute drawdown `ddPct` from `startBalance` vs `equity`. A **breach** is `ddPct > maxDrawdownPct` **or** (positions open **and** `0 < marginLevel < minMarginLevel`).
4. **Kill-switch.** On a breach, `closeAllPositions()` (returns how many it closed) and `return`. Otherwise wait `intervalMs` and loop.

> **Margin guard is conditional.** The margin check only fires when positions are open and `marginLevel > 0` — a flat account (margin level `0`) never trips it.

---

## 🎛️ Options

| Option | Default | Meaning |
| ------ | ------- | ------- |
| `maxDrawdownPct` | `5` | Max equity drawdown from the start balance, %. |
| `minMarginLevel` | `150` | Minimum margin level, % (below → breach). |
| `cycles` | `5` | How many times to check. |
| `intervalMs` | `800` | Delay between checks, ms. |

---

## 🔑 Key code

```ts
const startBalance = await sugar.getBalance();

for (let c = 1; c <= cycles; c++) {
  const a = await sugar.getAccountInfo();
  const floating = await sugar.getTotalProfit();
  const open = await sugar.countOpenPositions();
  const ddPct = startBalance > 0 ? ((startBalance - a.equity) / startBalance) * 100 : 0;

  const breach = ddPct > maxDrawdownPct || (open > 0 && a.marginLevel > 0 && a.marginLevel < minMarginLevel);
  if (breach) {
    const closed = await sugar.closeAllPositions();   // kill-switch
    console.log(`⚠ LIMIT BREACHED — closed ${closed}`);
    return;
  }
  await new Promise((r) => setTimeout(r, intervalMs));
}
```

---

## 🔗 Sugar methods used

[`getBalance`](../MT5Sugar/2.%20Balance_Margin.md) · [`getAccountInfo`](../MT5Sugar/12.%20Account_Information.md) · [`getTotalProfit`](../MT5Sugar/7.%20Position_Information.md) · [`countOpenPositions`](../MT5Sugar/7.%20Position_Information.md) · [`closeAllPositions`](../MT5Sugar/6.%20Position_Management.md).

---

## 🧩 Notes & adapting it

- **Safe to run anytime.** With no open positions it just reports and never trips — the kill-switch only closes what exists.
- **Pair it with a strategy.** Run this loop next to [Trailing Stop](./11_Trailing_stop.md) / [Grid Trader](./13_Grid_trader.md) as an independent guard.
- **Add a daily-loss limit:** combine with [`getDailyStats`](../MT5Sugar/12.%20Account_Information.md) (`totalProfit <= −limit`).
- **Partial de-risking:** instead of flattening everything, close only the worst positions (sort [`getOpenPositions`](../MT5Sugar/7.%20Position_Information.md) by `profit`).
- **Real use:** make it a long-lived loop (or timer) rather than a fixed cycle count.

---

## See also

* [Trailing Stop](./11_Trailing_stop.md) · [Grid Trader](./13_Grid_trader.md) · [Adaptive Preset](./16_AdaptiveOrchestratorPreset.md)
* [MT5Sugar — Risk Management](../MT5Sugar/10.%20Risk_Management.md) — pre-trade sizing & checks.

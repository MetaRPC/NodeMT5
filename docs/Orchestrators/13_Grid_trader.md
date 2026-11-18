# 13 · Grid Trader

> Lay a symmetric grid of pending orders around price — buy-limits below, sell-limits above — list them, then delete the whole grid.

**Run:** `node examples/demos/main.js 13` · **File:** `examples/demos/orchestrators/13_grid_trader.js` · ⚠ places small live pending orders on the demo account and deletes them.

[← Orchestrators Overview](./Strategies.Master.Overview.md)

---

## 🎯 What it does

A grid strategy brackets the current price with resting orders at regular intervals, so the market triggers entries as it moves either way — a classic approach for **range-bound** markets. This orchestrator builds the grid, confirms it's live, then tears it down — a complete place → inspect → cancel cycle for pending orders.

---

## 🧠 How it works

```
read bid/ask → for each level i (1..levels):
  buyLimit  @ bid − i·stepPips·pip
  sellLimit @ ask + i·stepPips·pip
→ getOpenedOrders() (count pendings)
→ closePosition(ticket) deletes each pending
```

1. **Select & measure.** `symbolSelect`, then `getSymbolInfo` → pip; read `bid` and `ask`.
2. **Place the grid.** For each level `i`, a **buy-limit** `i` steps below the bid and a **sell-limit** `i` steps above the ask. Each `buyLimit` / `sellLimit` returns a pending-order ticket (collected in `tickets`); individual rejections are caught and logged so one bad level doesn't abort the grid.
3. **Inspect.** `service().getOpenedOrders()` returns `{ positions, orders }`; `orders` are the live pendings — the demo prints the count.
4. **Clean up.** `closePosition(ticket)` on each placed ticket — the *same* call deletes a pending order as closes a position.

> **One call, two jobs.** [`closePosition`](../MT5Sugar/6.%20Position_Management.md) deletes a pending order or closes an open position depending on what the ticket refers to.

---

## 🎛️ Options

| Option | Default | Meaning |
| ------ | ------- | ------- |
| `levels` | `2` | Orders **per side** (so `2` = 2 buy-limits + 2 sell-limits). |
| `stepPips` | `20` | Spacing between levels, in pips. |

Volume comes from `cfg.testVolume`.

---

## 🔑 Key code

```ts
const tickets = [];
for (let i = 1; i <= levels; i++) {
  const below = bid - i * stepPips * pip;
  const above = ask + i * stepPips * pip;
  try { tickets.push(await sugar.buyLimit(sym, volume, below)); } catch (e) { /* log */ }
  try { tickets.push(await sugar.sellLimit(sym, volume, above)); } catch (e) { /* log */ }
}

const { orders } = await sugar.service().getOpenedOrders();
console.log(`pending orders live: ${orders.length}`);

for (const t of tickets) { try { await sugar.closePosition(t); } catch { /* already gone */ } }
```

---

## 🔗 Sugar methods used

[`buyLimit`](../MT5Sugar/4.%20Simple_Trading.md) · [`sellLimit`](../MT5Sugar/4.%20Simple_Trading.md) · [`getBid` / `getAsk`](../MT5Sugar/3.%20Prices_Quotes.md) · [`getSymbolInfo`](../MT5Sugar/9.%20Symbol_Information.md) · [`closePosition`](../MT5Sugar/6.%20Position_Management.md) · plus [`service().getOpenedOrders`](../MT5Service/3.%20Position_Orders_Methods.md).

---

## 🧩 Notes & adapting it

- **Too close to price rejects.** A limit inside the stops/freeze level fails (`10016`) — keep `stepPips` comfortably above [`getMinStopLevel`](../MT5Sugar/9.%20Symbol_Information.md).
- **Resilient placement.** Each level is wrapped in `try/catch`, so a single rejection doesn't abort the grid; if nothing places, the demo returns early.
- **Add SL/TP per level:** swap `buyLimit` → [`buyLimitWithSLTP`](../MT5Sugar/5.%20Trading_SLTP.md).
- **Asymmetric grids:** use different `levels`/`stepPips` per side, or only one side for a directional bias.
- **Real use:** keep the grid alive and refill filled slots instead of deleting everything.

---

## See also

* [Trailing Stop](./11_Trailing_stop.md) · [Risk Manager](./14_Risk_manager.md) · [Adaptive Preset](./16_AdaptiveOrchestratorPreset.md)
* [MT5Sugar — Simple Trading](../MT5Sugar/4.%20Simple_Trading.md) — the order helpers.

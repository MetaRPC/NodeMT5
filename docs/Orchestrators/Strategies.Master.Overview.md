# Orchestrators — Overview

> Small, self-contained **strategy loops** built entirely on [MT5Sugar](../MT5Sugar/MT5Sugar.API_Overview.md). Each is a plain async function `demo(sugar, cfg, opts)` you can read, run on the demo account, and adapt.

These are teaching examples of *coordinating* the SDK over time — not production trading systems. They show how the one-liners compose into a working loop.

---

## 🧩 Orchestrator vs preset

- An **orchestrator** runs **one** strategy end-to-end (open → manage → close, or monitor → act).
- A **preset** picks **which** orchestrator to run from the current market conditions, then delegates to it.

So the three orchestrators are the strategies; the preset is the coordinator on top.

---

## 📁 What's here

| # | File | Idea | Writes trades? |
| - | ---- | ---- | -------------- |
| 11 | **[Trailing Stop](./11_Trailing_stop.md)** | Open a BUY, ratchet its SL up as price advances, close. | ✅ one position |
| 13 | **[Grid Trader](./13_Grid_trader.md)** | Lay a symmetric grid of pending limits, list, delete. | ✅ pending orders |
| 14 | **[Risk Manager](./14_Risk_manager.md)** | Monitor equity / margin / drawdown; kill-switch on breach. | ⛔ read-only unless a limit breaks |
| 16 | **[Adaptive Preset](./16_AdaptiveOrchestratorPreset.md)** | Classify the market, dispatch to the matching orchestrator. | ↪ delegates |

> The numbering follows the demo files (`examples/demos/orchestrators/`, `.../presets/`). Slots 12 & 15 from the Go reference set are intentionally not ported.

### How the preset composes them

```
                 ┌──────────────── 16 Adaptive Preset ───────────────┐
  priceHistory → │ TRENDING → 11 Trailing   RANGING → 13 Grid        │
                 │                 VOLATILE → 14 Risk Manager        │
                 └───────────────────────────────────────────────────┘
```

---

## 🧱 The shape they share

```ts
module.exports = async function demo(sugar, cfg, opts = {}) {
  // sugar : a connected MT5Sugar
  // cfg   : { testSymbol, testVolume, ... }  (from examples/demos/config)
  // opts  : per-run tuning (cycles, pips, thresholds…)
};
```

* **`sugar`** — a connected [MT5Sugar](../MT5Sugar/MT5Sugar.API_Overview.md); reach down with `sugar.service()` / `sugar.account()`.
* **`cfg`** — `testSymbol` and `testVolume` drive what and how much; shared across demos.
* **`opts`** — each orchestrator documents its own knobs (trail distance, grid levels, risk limits…).

Run any of them from the demo menu:

```bash
node examples/demos/main.js 11      # trailing stop
node examples/demos/main.js 13      # grid trader
node examples/demos/main.js 14      # risk manager
node examples/demos/main.js 16      # adaptive preset
```

---

## 🧠 Shared building blocks

All four lean on the same handful of sugar calls:

| Concern | Sugar methods |
| ------- | ------------- |
| Price & spec | [`getBid` / `getAsk`](../MT5Sugar/3.%20Prices_Quotes.md) · [`getSymbolInfo`](../MT5Sugar/9.%20Symbol_Information.md) · [`service().priceHistory`](../MT5Service/2.%20Symbol_Methods.md) |
| Enter | [`buyMarket` / `buyLimit` / `sellLimit`](../MT5Sugar/4.%20Simple_Trading.md) |
| Manage | [`modifyPositionSL`](../MT5Sugar/6.%20Position_Management.md) · [`closePosition` / `closeAllPositions`](../MT5Sugar/6.%20Position_Management.md) |
| Watch | [`getAccountInfo`](../MT5Sugar/12.%20Account_Information.md) · [`getTotalProfit` / `countOpenPositions` / `getPositionByTicket`](../MT5Sugar/7.%20Position_Information.md) |

The **pip** convention is shared too: `pip = point × (digits is 3 or 5 ? 10 : 1)`.

---

## ⚠️ Safety

11, 13 and 16 place **live** orders on the configured **demo** account (tiny `cfg.testVolume`, self-closing). 14 is read-only until a risk limit is breached, at which point it closes everything. Never point these at a real account while learning.

---

## See also

* [MT5Sugar — API Overview](../MT5Sugar/MT5Sugar.API_Overview.md) — the building blocks.
* [Trailing Stop](./11_Trailing_stop.md) · [Grid Trader](./13_Grid_trader.md) · [Risk Manager](./14_Risk_manager.md) · [Adaptive Preset](./16_AdaptiveOrchestratorPreset.md).

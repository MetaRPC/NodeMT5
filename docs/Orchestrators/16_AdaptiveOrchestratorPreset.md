# 16 · Adaptive Preset

> A **preset** coordinates orchestrators behind one decision: read recent bars, classify the market, and dispatch to the orchestrator that fits — trend, range or volatility.

**Run:** `node examples/demos/main.js 16` · **File:** `examples/demos/presets/16_adaptive_preset.js` · ↪ delegates to whichever orchestrator it picks (so it may place demo orders via that one).

[← Orchestrators Overview](./Strategies.Master.Overview.md)

---

## 🎯 What it is

Where an orchestrator runs *one* strategy, a **preset** chooses *which* strategy to run. This one reads the recent price action, decides whether the market is **trending**, **ranging** or **volatile**, and hands off to the matching orchestrator:

| Market mode | → Orchestrator | Rationale |
| ----------- | -------------- | --------- |
| **TRENDING** | [Trailing Stop](./11_Trailing_stop.md) | ride the move |
| **RANGING** | [Grid Trader](./13_Grid_trader.md) | fade the range |
| **VOLATILE** | [Risk Manager](./14_Risk_manager.md) | stay defensive |

---

## 🧠 How it works

```
priceHistory(sym, 'H1', { maxBars: 20 })
  avgRange = mean(high − low)
  trend    = |lastClose − firstClose| / avgRange      // net move, in ranges
  spike    = max(high − low) / avgRange               // biggest bar vs average
→ mode = spike > 2.5 ? VOLATILE : trend > 2.0 ? TRENDING : RANGING
→ run the chosen orchestrator
```

1. **Gather bars.** `service().priceHistory(sym, 'H1', { maxBars: 20 })`. Fewer than 5 bars → default to **RANGING** (grid).
2. **Derive two ratios.** `trend` = net directional move measured in average ranges; `spike` = the largest single bar relative to the average — a volatility proxy.
3. **Classify.** `spike > 2.5` → **VOLATILE**; else `trend > 2.0` → **TRENDING**; else **RANGING**.
4. **Dispatch.** Call the matching orchestrator with the same `(sugar, cfg)` — each then runs its own API calls.

> **Thresholds are illustrative.** `2.5` (spike) and `2.0` (trend) are tuned for a teaching demo on H1 bars — adjust them for your timeframe and instrument.

---

## 🔑 Key code

```ts
const bars = await sugar.service().priceHistory(sym, 'H1', { maxBars: 20 });
if (bars.length < 5) return gridTrader(sugar, cfg);        // default: RANGING

let sumRange = 0, maxRange = 0;
for (const b of bars) { const r = b.high - b.low; sumRange += r; maxRange = Math.max(maxRange, r); }
const avgRange = sumRange / bars.length;
const move  = Math.abs(bars[bars.length - 1].close - bars[0].close);
const trend = avgRange > 0 ? move / avgRange : 0;
const spike = avgRange > 0 ? maxRange / avgRange : 1;

const mode = spike > 2.5 ? 'VOLATILE' : trend > 2.0 ? 'TRENDING' : 'RANGING';
if (mode === 'VOLATILE') return riskManager(sugar, cfg);
if (mode === 'TRENDING') return trailingStop(sugar, cfg);
return gridTrader(sugar, cfg);
```

Orchestrators are plain modules, so the preset just `require`s and calls them:

```ts
const trailingStop = require('../orchestrators/11_trailing_stop');
const gridTrader   = require('../orchestrators/13_grid_trader');
const riskManager  = require('../orchestrators/14_risk_manager');
```

---

## 🔗 Built on

[`service().priceHistory`](../MT5Service/2.%20Symbol_Methods.md) + the three orchestrators ([11](./11_Trailing_stop.md) · [13](./13_Grid_trader.md) · [14](./14_Risk_manager.md)). It adds **no** trading calls of its own — all orders come from the orchestrator it dispatches to.

---

## 🧩 Notes & adapting it

- **Composition, not inheritance.** A preset is just a function that calls other functions — the cleanest way to coordinate strategies.
- **Deterministic fallback.** Too little history → RANGING, so the preset always does *something* sensible.
- **Better classifiers:** swap the two ratios for ATR, ADX, or a regime model — the dispatch structure stays the same.
- **More modes:** add e.g. `QUIET` → do nothing, or `BREAKOUT` → a stop-grid.
- **Schedule it:** run the preset on a timer so the chosen mode re-evaluates as conditions change.

---

## See also

* [Orchestrators Overview](./Strategies.Master.Overview.md) — the shared shape & safety notes.
* [Trailing Stop](./11_Trailing_stop.md) · [Grid Trader](./13_Grid_trader.md) · [Risk Manager](./14_Risk_manager.md) — the strategies it dispatches to.

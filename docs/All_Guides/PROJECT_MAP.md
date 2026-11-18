# 🗺️ Project Map

> The whole project as one annotated tree, with links. **Links point to section *overviews*, never individual method pages** — open an overview to drill down into its methods. The API layers live here and on the [home page](../index.md) cards (they're intentionally kept out of the left sidebar).

---

## 🧱 The three layers

NodeMT5 is built in three decoupled layers. Your code can enter at any level, and each layer **owns** the one beneath it (`sugar.service()` → the `MT5Service`, `service.account()` → the `MT5Account`).

| Layer | Source | What it does | Overview |
| ----- | ------ | ------------ | -------- |
| **3 · MT5Sugar** | `src/MT5Sugar.ts` | One-line helpers: `buyMarket`, `closeAllPositions`, risk-based sizing, pip SL/TP, daily stats. 12 groups. | [MT5Sugar overview](../MT5Sugar/MT5Sugar.API_Overview.md) |
| **2 · MT5Service** | `src/MT5Service.ts` | Typed facade: plain args in, typed objects out (`AccountInfo`, `Quote`, `Position`…). No protobuf. 6 groups. | [MT5Service overview](../MT5Service/MT5Service.Overview.md) |
| **1 · MT5Account** | `src/MT5Account.ts` | Low-level gRPC: protobuf request/reply, connect/session, reconnect, streaming. Everything builds on it. 7 groups. | [MT5Account overview](../MT5Account/MT5Account.Master.Overview.md) |

```
Your code  →  MT5Sugar  →  MT5Service  →  MT5Account  →  gRPC  →  mt5.mrpc.pro:443  →  MT5 terminal
```

---

## 🌳 Repository tree

- **`NodeMT5/`** — repo root (SDK layers + runnable demos + docs)
  - `src/MT5Account.ts` — **Layer 1** source → [MT5Account overview](../MT5Account/MT5Account.Master.Overview.md)
  - `src/MT5Service.ts` — **Layer 2** source (+ all DTO interfaces) → [MT5Service overview](../MT5Service/MT5Service.Overview.md)
  - `src/MT5Sugar.ts` — **Layer 3** source → [MT5Sugar overview](../MT5Sugar/MT5Sugar.API_Overview.md)
  - `src/errors.ts` — `MrpcError` / `MT5Error` / `NotConnectedError` → [Return Codes & errors](./RETURN_CODES_REFERENCE.md)
  - `src/index.ts` — barrel: re-exports all three layers, errors, types and the `*Pb` stub modules
  - **`package/`** — generated protobuf stubs (`*_pb.js`, `*_grpc_pb.js`, `google/`) — the raw contract → [Protobuf Inspector](./PROTOBUF_INSPECTOR_GUIDE.md)
  - **`examples/`** — runnable code
    - `quickstart.js` — smallest connect-and-trade example
    - **`demos/`** — the demo suite (menu via `main.js`; see below) → [Getting Started](./GETTING_STARTED.md)
  - **`tests/`** — the `node --test` suite
  - **`docs/`** — this documentation site (mkdocs-material) — see the map below
  - `package.json` · `tsconfig.json` · `mkdocs.yml` — project / docs config

---

## 📚 Documentation tree

- **`docs/`**
  - [Home](../index.md) — landing page (cards into the three layers + Trade Copier)
  - **`All_Guides/`** — the guides in the left nav (Getting Started, MT5 for Beginners, Your First Project, SDK Ecosystem, Glossary, Concurrency, Streams, gRPC Stream Management, Enums, Return Codes, Errors, Protobuf Inspector, UserCode Sandbox)
  - **`MT5Account/`** — low-level gRPC docs → [overview](../MT5Account/MT5Account.Master.Overview.md) *(per-method pages inside)*
  - **`MT5Service/`** — typed facade docs → [overview](../MT5Service/MT5Service.Overview.md) *(per-group pages inside)*
  - **`MT5Sugar/`** — one-liner docs → [overview](../MT5Sugar/MT5Sugar.API_Overview.md) *(per-group pages inside)*
  - **`Orchestrators/`** — strategy loops & the adaptive preset → [overview](../Orchestrators/Strategies.Master.Overview.md)
  - `Guide_Images/` · `styles/` · `javascripts/` · `includes/` — assets & theme

> The `MT5Account/`, `MT5Service/` and `MT5Sugar/` folders hold the detail pages but are **not in the left sidebar** — reach them from the home cards or the overview links above. Each overview is the index into its own pages.

---

## 🎮 The demo suite (`examples/demos/`)

| Folder | Demos |
| ------ | ----- |
| `lowlevel/` | 01 general ops · 02 trading · 03 streaming — raw `MT5Account` |
| `service/` | 04 service demo · 05 service streaming — `MT5Service` |
| `sugar/` | 06 basics · 07 trading · 08 positions · 09 history · 10 advanced |
| `orchestrators/` | 11 trailing stop · 13 grid trader · 14 risk manager |
| `presets/` | 16 adaptive preset |
| `helpers/` | shared `connection.js` + `17_protobuf_inspector.js` (offline stub explorer) |
| `usercode/` | 18 sandbox for your own snippets |

```bash
node examples/demos/main.js 06                     # sugar basics
node examples/demos/main.js 11                     # trailing-stop orchestrator
node examples/demos/helpers/17_protobuf_inspector.js   # inspect the stubs (no connection)
```

Config comes from `examples/demos/config/config.json` or the env vars `MT5_LOGIN` / `MT5_PASSWORD` / `MT5_SERVER` / `MT5_SYMBOL` / `MT5_VOLUME` / `MRPC_API_KEY`.

---

## 🎯 Which layer should you use?

- **Most trading apps → [MT5Sugar](../MT5Sugar/MT5Sugar.API_Overview.md).** One-liners, risk-based sizing and pip SL/TP keep your code short and safe.
- **Custom execution → [MT5Service](../MT5Service/MT5Service.Overview.md).** Typed calls when you manage your own flow.
- **Protocol-level control → [MT5Account](../MT5Account/MT5Account.Master.Overview.md).** Raw protobuf requests and streams.
- **New to MT5?** → [MT5 for Beginners](./MT5_For_Beginners.md), then [Getting Started](./GETTING_STARTED.md).
- **Mirror trades to other accounts?** → [SDK Ecosystem → Trade Copier](./SDK_Ecosystem.md).

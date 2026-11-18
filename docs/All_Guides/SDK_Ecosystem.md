# The MetaRPC SDK family

> Where NodeMT5 sits — and how it pairs with the **Trade Copier** to mirror a strategy across accounts.

MetaRPC ships two families of SDKs. They share the **same authentication** (`ApiKey` + owner `user_key`), the **same gRPC-over-TLS transport** to `*.mrpc.pro`, the same [mrpc.pro](https://mrpc.pro/explorer/mt5-client) portal and the same $1 demo onboarding — but they do different jobs.

| Family | Job | Endpoint | SDKs |
| ------ | --- | -------- | ---- |
| **Terminal SDKs** | operate **one** trading account — connect, read, trade, stream | `mt5.mrpc.pro:443` (MT5) | **NodeMT5**, GoMT5, CSharpMT5, CppMT5, JavaMT5, PyMT5 (+ MT4 variants) |
| **Copier SDKs** | mirror trades **between** accounts (master → followers) | `copy.mrpc.pro:443` | [NodeCopier](https://github.com/MetaRPC/NodeCopier), GoCopier, CSharpCopier, PyCopier, … |

**NodeMT5 is a Terminal SDK.** When you want to *replicate* what happens on one account to others, reach for the **Copier** SDK — in Node that's **[NodeCopier](https://github.com/MetaRPC/NodeCopier)** (`@metarpc/nodecopier`).

---

## How NodeMT5 and NodeCopier relate

|  | **NodeMT5** (this SDK) | **NodeCopier** |
| --- | --- | --- |
| Scope | one account | a master → follower **pair** |
| Does | `connect`, quotes, `placeOrder`, streams | `start` · `list` · `pause` · `remove` a copier |
| Endpoint | `mt5.mrpc.pro:443` | `copy.mrpc.pro:443` |
| Thinks in | ticks, orders, positions | risk sizing, pause/resume, copy logs |

**One sentence:** NodeMT5 is where trades are *produced and observed* on an account; NodeCopier is how they're *distributed* to followers.

### The bridge — a shared terminal session

A copier's account carries an optional **`id`** — a terminal session GUID. That's exactly the value NodeMT5 obtains on connect: after `connect` / `connectEx`, the session GUID (`terminalInstanceGuid`) lives on **`account().id`**. So an account you're already running with NodeMT5 can be enrolled into a copier without reconnecting.

NodeCopier also understands MT5 account types **`MT5`** and **`MT5_MRPC`** (plus MT4, cTrader `CT`, TradeLocker `TL`) — the same MRPC-hosted terminals NodeMT5 drives.

---

## End-to-end: run a strategy on the master, replicate to a follower

```ts
import { MT5Sugar } from '@metarpc/nodemt5';
import { CopierSugar } from '@metarpc/nodecopier';

const KEY = process.env.MRPC_API_KEY;   // owner key — note: TRIAL is NOT an owner key for the copier

// 1 · Operate the MASTER account with NodeMT5
const master = MT5Sugar.create('mt5.mrpc.pro', 443, KEY);
await master.quickConnect(Number(process.env.MASTER_LOGIN), process.env.MASTER_PASSWORD!, 'MetaQuotes-Demo');
const masterSessionId = master.account().id;   // the ConnectEx terminal GUID → copier Account.id

// 2 · Start a copier: MASTER → FOLLOWER (NodeCopier, on copy.mrpc.pro)
await CopierSugar.create()
  .withCredentials(KEY!)
  .fromMaster({ type: 'MT5', user: Number(process.env.MASTER_LOGIN), password: process.env.MASTER_PASSWORD!, server: 'MetaQuotes-Demo', id: masterSessionId! })
  .toSlave({ type: 'MT5', user: Number(process.env.SLAVE_LOGIN), password: process.env.SLAVE_PASSWORD!, server: 'MetaQuotes-Demo' })
  .withLotMultiplier(1.0)   // or .withFixedLot(0.1)
  .withCopySl(true).withCopyTp(true)
  .start();

// 3 · Trades you now place on the master via NodeMT5 replicate to the follower
const ticket = await master.buyMarket('EURUSD', 0.01);
// … the copier mirrors the open (and the later close) onto the follower account
```

> **Install:** `npm install @metarpc/nodecopier` alongside `@metarpc/nodemt5`.

**Risk sizing** (the copier's `riskType`): `FixedLot` · `LotMultiplier` · `BalanceMultiplier` · `FixedBalanceMultiplier` · `EquityMultiplier`. Plus `copySl` / `copyTp` / `copyPendingOrders` / `reverseCopy`.

---

## 🧩 Notes & gotchas

- **Two services, two endpoints.** NodeMT5 talks to `mt5.mrpc.pro`; NodeCopier to `copy.mrpc.pro`. The copier is a *companion* service, not a replacement.
- **Owner key required for the copier.** `TRIAL` works for a first look on a terminal, but the copier needs a real owner `user_key`.
- **Transport success ≠ broker execution.** A successful `start` means the copier was created — confirm the follower actually opened the trade (NodeCopier's trade logs, or read the follower with NodeMT5's `getOpenedOrders`).
- **Demo-first.** Use disposable demo accounts for copier tests. Hosted terminals and running copiers are billed separately (see [pricing](https://mrpc.pro/#pricing)).

---

## See also

- **Copier SDK:** [NodeCopier on GitHub](https://github.com/MetaRPC/NodeCopier) · [NodeCopier docs](https://metarpc.github.io/NodeCopier/) · [Quickstart](https://metarpc.github.io/NodeCopier/quickstart/).
- **This SDK:** [Getting Started](./GETTING_STARTED.md) · [Project Map](./PROJECT_MAP.md) · [MT5Sugar](../MT5Sugar/MT5Sugar.API_Overview.md).

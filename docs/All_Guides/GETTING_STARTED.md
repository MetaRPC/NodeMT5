# Getting Started with NodeMT5

> **Quick setup** — connect to MetaTrader 5 from Node.js in a few minutes.

---

## What is NodeMT5?

**NodeMT5** is a Node.js / TypeScript client for MetaTrader 5 accounts over the MetaRPC gRPC API (`mt5.mrpc.pro:443`). It's organised in **three layers** you can mix freely:

* **[MT5Account](../MT5Account/MT5Account.Master.Overview.md)** — raw gRPC, protobuf in/out, full control.
* **[MT5Service](../MT5Service/MT5Service.Overview.md)** — typed objects, plain arguments.
* **[MT5Sugar](../MT5Sugar/MT5Sugar.API_Overview.md)** — one-line helpers.

See the [Project Map](./PROJECT_MAP.md) for how they fit together.

---

## Install & downloads

Two ways to use NodeMT5 — take **our ready-made project**, or take **only the protocol** and build your own client.

### 1 · Take our project (recommended)

The complete thing we built: the three layers (`MT5Sugar` / `MT5Service` / `MT5Account`), the TypeScript types, and the generated stubs — all wired together.

* **Just the library**, for your own app:

  ```bash
  npm install @metarpc/nodemt5
  ```

  Brings the SDK, the types, **and** the protobuf stubs under `@metarpc/nodemt5/package/`.

* **The full repo** (adds the runnable `examples/demos/` and the tests):

  ```bash
  git clone https://github.com/MetaRPC/NodeMT5.git
  cd NodeMT5
  npm install
  npm run build                     # compile the TypeScript
  node examples/demos/main.js 06    # run a demo (06 = sugar basics)
  ```

> 🎓 **New here? Start with the full repo (the `git clone` above).** It's the best way in: you get all **three layers** side by side (`MT5Account` → `MT5Service` → `MT5Sugar`) and ready-made **examples written on each of them** that you can run and read. Learn the SDK this way first — only once you're comfortable should you consider building your own from the raw protos (option 2 below).

### 2 · Take only the protos and build it yourself (raw gRPC)

**For advanced use — after you know the SDK.** Skip our layers and talk to the gateway from the generated stubs directly.

* The stubs ship in the **`package/`** folder (`*_pb.js`, `*_grpc_pb.js`). Take the **whole folder**, then install the runtime:

  ```bash
  npm install google-protobuf @grpc/grpc-js
  ```

* The raw **`.proto`** sources (to regenerate stubs for another language or version) are on the **[MT5 Client API Explorer](https://mrpc.pro/explorer/mt5-client)** → *Download MT5 Protos*.

> ⚠️ **The stubs are not standalone — take the whole `package/` folder, not single files.** Each `*_pb.js` cross-requires its siblings (e.g. `./mrpc-mt5-error_pb.js`), the `./google/` subfolder and `google-protobuf`. This path gives you **raw gRPC with no 3-layer SDK** — see the [Protobuf Inspector](./PROTOBUF_INSPECTOR_GUIDE.md).

---

## 🔑 API Key & Authentication

Connecting to the MetaRPC production endpoint (`mt5.mrpc.pro:443`) uses a personal **API key** — you get one just by registering on our site:

1. **Sign up** — create a free account at **[https://mrpc.pro/signup](https://mrpc.pro/signup)**.
2. **Copy your key** — it's **provisioned automatically**; open the **[MT5 Client API Explorer](https://mrpc.pro/explorer/mt5-client)** and your key is shown at the top (*Active* · **Copy key**). Nothing to generate.
3. **Use it** — pass the key to `MT5Sugar.create(host, port, apiKey)` (or set the `MRPC_API_KEY` environment variable instead of hard-coding it). In the web Explorer the key is attached to calls for you.

You'll also need an MT5 **demo** account (login / password / server, e.g. `MetaQuotes-Demo`) — see [MT5 for Beginners](./MT5_For_Beginners.md) to create one (one click for $1, or free via the MT5 terminal).

> 💡 **`TRIAL` / keyless.** No account yet? Pass the literal value `TRIAL` as the key to connect for a first look. Your own key — free from sign-up — is for normal use.

### 🆔 Session ID is automatic

You never call `GetId` or supply an `id` header. On `connect` / `connectEx` the server generates a terminal session GUID (`terminalInstanceGuid`) and the SDK attaches it — alongside your API key — to every later request and stream automatically.

---

## Connect & read the account

```ts
import { MT5Sugar } from '@metarpc/nodemt5';

const sugar = MT5Sugar.create('mt5.mrpc.pro', 443, 'YOUR_API_KEY');
await sugar.quickConnect(500000, 'password', 'MetaQuotes-Demo');

const info = await sugar.getAccountInfo();
console.log(`${info.name} #${info.login} — ${info.balance} ${info.currency} on ${info.server}`);
```

Prefer environment variables? Set `MT5_LOGIN` / `MT5_PASSWORD` / `MT5_SERVER` and call `sugar.quickConnect()` with no arguments.

---

## A first trade (demo)

```ts
const ticket = await sugar.buyMarket('EURUSD', 0.01);   // tiny demo position
console.log('opened #', ticket);
await sugar.closePosition(ticket);
```

Trading helpers **throw** `MrpcError` on a broker rejection — wrap them in `try/catch`. See [Return Codes & the error model](./RETURN_CODES_REFERENCE.md).

---

## Dropping down a layer

Need something the sugar layer doesn't expose? Go down:

```ts
const service = sugar.service();   // MT5Service — typed objects
const account = sugar.account();   // MT5Account — raw protobuf

const quote = await service.getSymbolTick('EURUSD');       // Quote
const tickData = await account.symbolInfoTick(/* req */);  // raw *Data
```

---

## Next

* [Your First Project](./Your_First_Project.md) — build a small script end to end.
* [MT5 for Beginners](./MT5_For_Beginners.md) — the trading concepts.
* [MT5Sugar API](../MT5Sugar/MT5Sugar.API_Overview.md) — every helper.
* [SDK Ecosystem](./SDK_Ecosystem.md) — how NodeMT5 pairs with the **Trade Copier** to mirror trades across accounts.

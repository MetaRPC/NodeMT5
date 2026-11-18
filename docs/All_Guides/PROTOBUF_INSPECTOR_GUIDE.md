# Protobuf Inspector Guide — Node

> The generated `package/*_pb.js` stubs are typed `any`, so TypeScript can't tell you a message's real getters, setters or enum names. This guide shows how to **discover them at runtime** — the fastest way to avoid "`x.setPrice is not a function`" surprises.

> 🛠️ **Ready-made tool.** The repo ships a runnable inspector — no need to write the snippets yourself:
>
> ```bash
> node examples/demos/helpers/17_protobuf_inspector.js                       # interactive REPL
> node examples/demos/helpers/17_protobuf_inspector.js OrderCalcMarginRequest # one-shot: getters/setters
> node examples/demos/helpers/17_protobuf_inspector.js enum MqlErrorTradeCode # one-shot: enum values
> node examples/demos/helpers/17_protobuf_inspector.js search Tick            # find message/enum names
> ```
>
> It's **offline** (loads the stubs only — no connection, no key). REPL commands: `list` · `<TypeName>` · `search <text>` · `enum <Name>` · `stats` · `help` · `exit`. The techniques below are what it does under the hood.

---

## 🎯 Why you need it

* **Field accessors aren't guessable.** Repeated fields append `List` (`getPositionInfosList`); some getters are oddly cased (`getTradetickvalue`, not `getTradeTickValue`).
* **Request setters vary.** `OrderCalcMarginRequest` uses `setOpenPrice`, not `setPrice`.
* **Enum namespaces surprise.** `SymbolInfoDoubleProperty`, `MrpcEnumAccountTradeMode` with `MRPC_`-prefixed values.
* **`any` typing hides all of it.** The only source of truth is the stub — inspect it.

---

## 🔍 List a message's getters / setters

```js
// node -e "...": print every getter of a message type
const Pb = require('@metarpc/nodemt5/package/mt5-term-api-trade-functions_pb');

const getters = Object.getOwnPropertyNames(Pb.OrderCalcMarginData.prototype)
  .filter((n) => n.startsWith('get'));
const setters = Object.getOwnPropertyNames(Pb.OrderCalcMarginRequest.prototype)
  .filter((n) => n.startsWith('set'));

console.log('getters:', getters.join(' '));
console.log('setters:', setters.join(' '));
```

> Tip: the SDK re-exports these modules too — `require('@metarpc/nodemt5').TradeFunctionsPb` is the same object.

---

## 🧱 Find a message type by name

```js
const Pb = require('@metarpc/nodemt5').SubscriptionsPb;

// which message types mention "Tick"?
console.log(Object.keys(Pb).filter((k) => /Tick/.test(k)));
// → [ 'OnSymbolTickData', 'OnSymbolTickReply', 'OnSymbolTickRequest', 'MrpcSubscriptionMqlTick', ... ]
```

Then inspect the one you want with the getter/setter trick above.

---

## 🎛️ List an enum's values

```js
const { MarketInfoPb } = require('@metarpc/nodemt5');

console.log(Object.keys(MarketInfoPb.SymbolInfoDoubleProperty).slice(0, 10));
// → [ 'SYMBOL_BID', 'SYMBOL_BIDHIGH', 'SYMBOL_BIDLOW', 'SYMBOL_POINT', ... ]

console.log(MarketInfoPb.SymbolInfoIntegerProperty.SYMBOL_DIGITS);  // the number
```

To find which namespace holds an enum:

```js
const mi = require('@metarpc/nodemt5').MarketInfoPb;
console.log(Object.keys(mi).filter((k) => /Property|Enum/.test(k)));
```

---

## 🧪 Inspect a live reply

Log what the server actually returned — handy when a getter comes back empty:

```ts
const data = await account.accountSummary();
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(data))
  .filter((n) => n.startsWith('get')));
console.log('balance:', data.getAccountBalance());
```

A reply message also serialises to an array: `data.toObject()` (where available) or `data.serializeBinary()` for the raw bytes.

---

## 🗺️ Where each service lives

| Package stub | Holds |
| ------------ | ----- |
| `mt5-term-api-connection_pb` | connect / disconnect / getId |
| `mt5-term-api-account-helper_pb` | account summary, symbol params, tick value |
| `mt5-term-api-account-information_pb` | `AccountInfo*` property enums |
| `mt5-term-api-market-info_pb` | symbol info, sessions, DOM, `SymbolInfo*Property` enums |
| `mt5-term-api-trading-helper_pb` | orderSend/modify/close, `TMT5_ENUM_ORDER_TYPE` |
| `mt5-term-api-trade-functions_pb` | orderCheck / orderCalc* |
| `mt5-term-api-subscriptions_pb` | the `On*` streams |

---

## ✅ A quick workflow

1. Suspect a wrong accessor? List the message's getters/setters.
2. Copy the exact name into your code.
3. Re-run — runtime confirms it.

This is exactly how the SDK's own methods were verified against the stubs.

---

## See also

* [Enums Usage Reference](./ENUMS_USAGE_REFERENCE.md) · [Usercode Sandbox](./USERCODE_SANDBOX_GUIDE.md) — a place to run these snippets.

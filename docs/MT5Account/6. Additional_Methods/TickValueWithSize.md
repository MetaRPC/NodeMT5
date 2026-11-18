# 🪙 Getting Tick Value & Size

> **Request:** tick value, tick size and contract size for several symbols (`TickValueWithSizeData`), on **MT5** — the inputs for client-side P&L and sizing.

**API Information:**

* **Low-level API:** `MT5Account.tickValueWithSize(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.AccountHelper`
* **Proto definition:** `TickValueWithSize` (in `mt5-term-api-account-helper.proto`)

### RPC

* **Service:** `mt5_term_api.AccountHelper`
* **Method:** `TickValueWithSize(TickValueWithSizeRequest) → TickValueWithSizeReply`
* **Low-level client (generated):** `AccountHelperClient.tickValueWithSize(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning, per requested symbol, the tick value / tick size / contract size.
* **Why you need it.** Turn a price move into account-currency P&L, or size a position by risk.
* **Sanity check.** `getSymbolTickSizeInfosList()` has one entry per requested symbol.

---

## 🎯 Purpose

* Compute "money per pip per lot" for several symbols in one round-trip.
* Feed a risk-based position sizer.

---

## 📚 Tutorial

1. **Build a `TickValueWithSizeRequest`** with the symbol names.
2. **Call** `account.tickValueWithSize(req)`.
3. **Iterate** `getSymbolTickSizeInfosList()` → `TickSizeSymbol`.

```ts
import { MT5Account, AccountHelperPb } from '@metarpc/nodemt5';

const req = new AccountHelperPb.TickValueWithSizeRequest();
req.setSymbolNamesList(['EURUSD', 'XAUUSD']);
for (const i of (await account.tickValueWithSize(req)).getSymbolTickSizeInfosList()) {
  console.log(i.getName(), i.getTradetickvalue(), i.getTradeticksize());
}
```

---

## 🧱 Signature

```ts
import { MT5Account, AccountHelperPb } from '@metarpc/nodemt5';

class MT5Account {
  // Tick value/size/contract for several symbols. Pass a built request (setSymbolNamesList). Raw data.
  tickValueWithSize(req: any /* TickValueWithSizeRequest */, timeoutMs?: number): Promise<any /* TickValueWithSizeData */>;
}
```

**Request message:** `TickValueWithSizeRequest` — `setSymbolNamesList(string[])`.

**Reply message:**

```protobuf
TickValueWithSizeReply {
  oneof response {
    TickValueWithSizeData data = 1;   // getSymbolTickSizeInfosList(): TickSizeSymbol[]
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Setter | Type | Description |
| ------ | ---- | ----------- |
| `setSymbolNamesList(names)` | `string[]` | Symbols to query. |

---

## ⬆️ Output — `TickValueWithSizeData`

`getSymbolTickSizeInfosList()` → array of **`TickSizeSymbol`**:

| Getter | Description |
| ------ | ----------- |
| `getName()` | Symbol name. |
| `getTradetickvalue()` | Money value of one tick. |
| `getTradetickvalueprofit()` | Tick value on the profit side. |
| `getTradetickvalueloss()` | Tick value on the loss side. |
| `getTradeticksize()` | Minimal price change per tick. |
| `getTradecontractsize()` | Contract size. |
| `getIndex()` | Position in the request order. |

> **Note the lowercase getters** (`getTradetickvalue`, not `getTradeTickValue`) — they follow the proto field names.

---

## 🧩 Notes & Tips

* **Value per pip per lot** ≈ `(pipSize / tickSize) × tickValue`.
* **Batch them.** One call for your whole watchlist beats one per symbol.
* **Profit vs loss tick value** can differ for some instruments — use the side you need.

---

## 🔗 Usage Examples

### 1) Tick value & size for a basket

```ts
import { MT5Account, AccountHelperPb } from '@metarpc/nodemt5';

const req = new AccountHelperPb.TickValueWithSizeRequest();
req.setSymbolNamesList(['EURUSD', 'GBPUSD', 'XAUUSD']);
for (const i of (await account.tickValueWithSize(req)).getSymbolTickSizeInfosList()) {
  console.log(`${i.getName()}  tickVal ${i.getTradetickvalue()}  tickSize ${i.getTradeticksize()}`);
}
```

### 2) Money value of a 1-tick move

```ts
const req = new AccountHelperPb.TickValueWithSizeRequest();
req.setSymbolNamesList(['EURUSD']);
const i = (await account.tickValueWithSize(req)).getSymbolTickSizeInfosList()[0];
console.log('per tick per lot:', i.getTradetickvalue());
```

### 3) Build a value map

```ts
async function tickValues(account: MT5Account, symbols: string[]) {
  const req = new AccountHelperPb.TickValueWithSizeRequest();
  req.setSymbolNamesList(symbols);
  const out = new Map<string, number>();
  for (const i of (await account.tickValueWithSize(req)).getSymbolTickSizeInfosList()) {
    out.set(i.getName(), i.getTradetickvalue());
  }
  return out;
}
```

---

## 🔧 Common Patterns

### Risk-based lot size

```ts
async function sizeByRisk(account: MT5Account, symbol: string, riskMoney: number, stopPips: number, pipSize: number): Promise<number> {
  const req = new AccountHelperPb.TickValueWithSizeRequest();
  req.setSymbolNamesList([symbol]);
  const i = (await account.tickValueWithSize(req)).getSymbolTickSizeInfosList()[0];
  const valuePerPipPerLot = (pipSize / i.getTradeticksize()) * i.getTradetickvalue();
  return riskMoney / (stopPips * valuePerPipPerLot);
}
```

---

## 📚 See Also

* [SymbolParamsMany](./SymbolParamsMany.md) · [SymbolInfoDouble](../2.%20Symbol_information/SymbolInfoDouble.md)
* **Friendly layer:** [`MT5Sugar.calculatePositionSize`](../../MT5Sugar/10.%20Risk_Management.md) uses these inputs.

# 🔢 Getting an Integer Symbol Property

> **Request:** one integer symbol property (`SymbolInfoIntegerData` → a `number`) from **MT5** — digits, spread, stops level, trade mode, visibility, and timing flags, selected by an enum.

**API Information:**

* **Low-level API:** `MT5Account.symbolInfoInteger(...)` (from `@metarpc/nodemt5`)
* **gRPC service:** `mt5_term_api.MarketInfo`
* **Proto definition:** `SymbolInfoInteger` (in `mt5-term-api-market-info.proto`)

### RPC

* **Service:** `mt5_term_api.MarketInfo`
* **Method:** `SymbolInfoInteger(SymbolInfoIntegerRequest) → SymbolInfoIntegerReply`
* **Low-level client (generated):** `MarketInfoClient.symbolInfoInteger(request, metadata, opts)`

---

## 💬 Just the essentials

* **What it is.** One RPC returning a single integer/flag property of a symbol, chosen by a `SymbolInfoIntegerProperty` value.
* **Why you need it.** `SYMBOL_DIGITS` to format prices, `SYMBOL_TRADE_STOPS_LEVEL` to keep SL/TP legal, `SYMBOL_SPREAD` for cost.
* **Sanity check.** `SYMBOL_DIGITS` returns `5` for EURUSD.

---

## 🎯 Purpose

Use it for a symbol's integer configuration:

* **Formatting** — `SYMBOL_DIGITS`.
* **Order legality** — `SYMBOL_TRADE_STOPS_LEVEL`, `SYMBOL_TRADE_FREEZE_LEVEL`.
* **State** — `SYMBOL_SELECT`, `SYMBOL_VISIBLE`, `SYMBOL_TRADE_MODE`.

---

## 📚 Tutorial

1. **Select the symbol** so its data is available.
2. **Build the request** with the symbol and the property enum.
3. **Call** `account.symbolInfoInteger(req)` and read `getValue()` (coerce with `Number(...)`).

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

const req = new MarketInfoPb.SymbolInfoIntegerRequest();
req.setSymbol('EURUSD');
req.setType(MarketInfoPb.SymbolInfoIntegerProperty.SYMBOL_DIGITS);
const digits = Number((await account.symbolInfoInteger(req)).getValue());
```

---

## 🧱 Signature

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';

class MT5Account {
  // Read one SYMBOL_* integer property. Pass a built SymbolInfoIntegerRequest.
  symbolInfoInteger(req: any /* SymbolInfoIntegerRequest */, timeoutMs?: number): Promise<any /* SymbolInfoIntegerData */>;
}
```

**Request message:** `SymbolInfoIntegerRequest { string symbol = 1; SymbolInfoIntegerProperty type = 2; }` — `setSymbol`, `setType`.

**Reply message:**

```protobuf
SymbolInfoIntegerReply {
  oneof response {
    SymbolInfoIntegerData data = 1;   // getValue(): int64 (and getValueUtc for time props)
    Error error = 2;
  }
}
```

---

## 🔽 Input

| Setter | Type | Description |
| ------ | ---- | ----------- |
| `setSymbol(symbol)` | `string` | Instrument. |
| `setType(property)` | `SymbolInfoIntegerProperty` | Which integer property to read. |

---

## ⬆️ Output — `SymbolInfoIntegerData`

| Field | JS accessor | Type | Description |
| ----- | ----------- | ---- | ----------- |
| value | `getValue()` | `number` | The property's value (coerce with `Number`). |
| value (UTC) | `getValueUtc()` | `number` | For time properties, the UTC variant. |

---

## 🧱 Related enums (from proto)

> Access as `MarketInfoPb.SymbolInfoIntegerProperty.SYMBOL_DIGITS` (a `number`).

### `SymbolInfoIntegerProperty` — common values

| Constant | Meaning |
| -------- | ------- |
| `SYMBOL_DIGITS` | Price decimal places. |
| `SYMBOL_SPREAD` | Current spread in points. |
| `SYMBOL_SPREAD_FLOAT` | `1` if spread is floating. |
| `SYMBOL_TRADE_STOPS_LEVEL` | Min SL/TP distance from price, in points. |
| `SYMBOL_TRADE_FREEZE_LEVEL` | Freeze distance for pending ops. |
| `SYMBOL_TRADE_MODE` | Trading mode (disabled / long-only / full…). |
| `SYMBOL_SELECT` | `1` if in Market Watch. |
| `SYMBOL_VISIBLE` | `1` if visible in Market Watch. |
| `SYMBOL_TIME` / `SYMBOL_TIME_MSC` | Last quote time (sec / ms). |
| `SYMBOL_START_TIME` / `SYMBOL_EXPIRATION_TIME` | Trading start / expiry (for CFDs/futures). |
| `SYMBOL_FILLING_MODE` / `SYMBOL_EXPIRATION_MODE` | Allowed fill / expiration modes (bitmask). |

---


<details markdown="1">
<summary><strong>All 37 <code>SymbolInfoIntegerProperty</code> integer / flag properties</strong> (click to expand)</summary>

| Constant | Value | Description |
| -------- | ----- | ----------- |
| `SYMBOL_SUBSCRIPTION_DELAY` | 0 | Subscription delay in milliseconds |
| `SYMBOL_SECTOR` | 1 | Economic sector (enum SYMBOL_SECTOR) |
| `SYMBOL_INDUSTRY` | 2 | Industry (enum SYMBOL_INDUSTRY) |
| `SYMBOL_CUSTOM` | 3 | Custom symbol flag (0=standard, 1=custom) |
| `SYMBOL_BACKGROUND_COLOR` | 4 | Background color in Market Watch |
| `SYMBOL_CHART_MODE` | 5 | Price chart mode (SYMBOL_CHART_MODE enum) |
| `SYMBOL_EXIST` | 6 | Symbol exists (0=no, 1=yes) |
| `SYMBOL_SELECT` | 7 | Symbol selected in Market Watch (0=no, 1=yes) |
| `SYMBOL_VISIBLE` | 8 | Symbol visible in Market Watch (0=no, 1=yes) |
| `SYMBOL_SESSION_DEALS` | 9 | Number of deals in current session |
| `SYMBOL_SESSION_BUY_ORDERS` | 10 | Number of Buy orders in current session |
| `SYMBOL_SESSION_SELL_ORDERS` | 11 | Number of Sell orders in current session |
| `SYMBOL_VOLUME` | 12 | Last deal volume |
| `SYMBOL_VOLUMEHIGH` | 13 | Maximum volume of the day |
| `SYMBOL_VOLUMELOW` | 14 | Minimum volume of the day |
| `SYMBOL_TIME` | 15 | Last quote time (seconds since 1970.01.01) |
| `SYMBOL_TIME_MSC` | 16 | Last quote time in milliseconds |
| `SYMBOL_DIGITS` | 17 | Number of decimal places |
| `SYMBOL_SPREAD_FLOAT` | 18 | Floating spread flag (0=fixed, 1=floating) |
| `SYMBOL_SPREAD` | 19 | Current spread in points |
| `SYMBOL_TICKS_BOOKDEPTH` | 20 | Maximum depth of market (DOM) |
| `SYMBOL_TRADE_CALC_MODE` | 21 | Margin calculation mode (SYMBOL_CALC_MODE enum) |
| `SYMBOL_TRADE_MODE` | 22 | Allowed trading mode (SYMBOL_TRADE_MODE enum) |
| `SYMBOL_START_TIME` | 23 | Date of symbol trade beginning |
| `SYMBOL_EXPIRATION_TIME` | 24 | Date of symbol trade end |
| `SYMBOL_TRADE_STOPS_LEVEL` | 25 | Minimum distance for SL/TP in points |
| `SYMBOL_TRADE_FREEZE_LEVEL` | 26 | Order freeze level in points |
| `SYMBOL_TRADE_EXEMODE` | 27 | Order execution type (SYMBOL_ORDER_EXEMODE enum) |
| `SYMBOL_SWAP_MODE` | 28 | Swap calculation mode (SYMBOL_SWAP_MODE enum) |
| `SYMBOL_SWAP_ROLLOVER3DAYS` | 29 | Day of week for triple swap (SYMBOL_SWAP_ROLLOVER enum) |
| `SYMBOL_MARGIN_HEDGED_USE_LEG` | 30 | Calculating hedged margin using larger leg |
| `SYMBOL_EXPIRATION_MODE` | 31 | Allowed order expiration modes |
| `SYMBOL_FILLING_MODE` | 32 | Allowed order filling modes |
| `SYMBOL_ORDER_MODE` | 33 | Allowed order types |
| `SYMBOL_ORDER_GTC_MODE` | 34 | StopLoss/TakeProfit mode (ORDER_GTC_MODE enum) |
| `SYMBOL_OPTION_MODE` | 35 | Option type (SYMBOL_OPTION_MODE enum) |
| `SYMBOL_OPTION_RIGHT` | 36 | Option right (Call/Put) |

</details>


> **Value enums.** The integer properties `SYMBOL_SECTOR` and `SYMBOL_INDUSTRY` **return** a value from these enums (not a selector you pass in). Decode the number you read against the lists below.

<details markdown="1">
<summary><strong>`BMT5_ENUM_SYMBOL_SECTOR` — 14 economic sectors</strong> (returned by `SYMBOL_SECTOR`)</summary>

| Constant | Value | Sector |
| -------- | ----- | ------ |
| `BMT5_SECTOR_UNDEFINED` | 0 | Undefined |
| `BMT5_SECTOR_BASIC_MATERIALS` | 1 | Basic Materials |
| `BMT5_SECTOR_COMMUNICATION_SERVICES` | 2 | Communication Services |
| `BMT5_SECTOR_CONSUMER_CYCLICAL` | 3 | Consumer Cyclical |
| `BMT5_SECTOR_CONSUMER_DEFENSIVE` | 4 | Consumer Defensive |
| `BMT5_SECTOR_CURRENCY` | 5 | Currency |
| `BMT5_SECTOR_CURRENCY_CRYPTO` | 6 | Currency Crypto |
| `BMT5_SECTOR_ENERGY` | 7 | Energy |
| `BMT5_SECTOR_FINANCIAL` | 8 | Financial |
| `BMT5_SECTOR_HEALTHCARE` | 9 | Healthcare |
| `BMT5_SECTOR_INDUSTRIALS` | 10 | Industrials |
| `BMT5_SECTOR_REAL_ESTATE` | 11 | Real Estate |
| `BMT5_SECTOR_TECHNOLOGY` | 12 | Technology |
| `BMT5_SECTOR_UTILITIES` | 13 | Utilities |

</details>

<details markdown="1">
<summary><strong>`BMT5_ENUM_SYMBOL_INDUSTRY` — 152 industries</strong> (returned by `SYMBOL_INDUSTRY`)</summary>

| Constant | Value | Industry |
| -------- | ----- | -------- |
| `BMT5_INDUSTRY_UNDEFINED` | 0 | Undefined |
| `BMT5_INDUSTRY_AGRICULTURAL_INPUTS` | 1 | Agricultural Inputs |
| `BMT5_INDUSTRY_ALUMINIUM` | 2 | Aluminium |
| `BMT5_INDUSTRY_BUILDING_MATERIALS` | 3 | Building Materials |
| `BMT5_INDUSTRY_CHEMICALS` | 4 | Chemicals |
| `BMT5_INDUSTRY_COKING_COAL` | 5 | Coking Coal |
| `BMT5_INDUSTRY_COPPER` | 6 | Copper |
| `BMT5_INDUSTRY_GOLD` | 7 | Gold |
| `BMT5_INDUSTRY_LUMBER_WOOD` | 8 | Lumber Wood |
| `BMT5_INDUSTRY_INDUSTRIAL_METALS` | 9 | Industrial Metals |
| `BMT5_INDUSTRY_PRECIOUS_METALS` | 10 | Precious Metals |
| `BMT5_INDUSTRY_PAPER` | 11 | Paper |
| `BMT5_INDUSTRY_SILVER` | 12 | Silver |
| `BMT5_INDUSTRY_SPECIALTY_CHEMICALS` | 13 | Specialty Chemicals |
| `BMT5_INDUSTRY_STEEL` | 14 | Steel |
| `BMT5_INDUSTRY_ADVERTISING` | 15 | Advertising |
| `BMT5_INDUSTRY_BROADCASTING` | 16 | Broadcasting |
| `BMT5_INDUSTRY_GAMING_MULTIMEDIA` | 17 | Gaming Multimedia |
| `BMT5_INDUSTRY_ENTERTAINMENT` | 18 | Entertainment |
| `BMT5_INDUSTRY_INTERNET_CONTENT` | 19 | Internet Content |
| `BMT5_INDUSTRY_PUBLISHING` | 20 | Publishing |
| `BMT5_INDUSTRY_TELECOM` | 21 | Telecom |
| `BMT5_INDUSTRY_APPAREL_MANUFACTURING` | 22 | Apparel Manufacturing |
| `BMT5_INDUSTRY_APPAREL_RETAIL` | 23 | Apparel Retail |
| `BMT5_INDUSTRY_AUTO_MANUFACTURERS` | 24 | Auto Manufacturers |
| `BMT5_INDUSTRY_AUTO_PARTS` | 25 | Auto Parts |
| `BMT5_INDUSTRY_AUTO_DEALERSHIP` | 26 | Auto Dealership |
| `BMT5_INDUSTRY_DEPARTMENT_STORES` | 27 | Department Stores |
| `BMT5_INDUSTRY_FOOTWEAR_ACCESSORIES` | 28 | Footwear Accessories |
| `BMT5_INDUSTRY_FURNISHINGS` | 29 | Furnishings |
| `BMT5_INDUSTRY_GAMBLING` | 30 | Gambling |
| `BMT5_INDUSTRY_HOME_IMPROV_RETAIL` | 31 | Home Improv Retail |
| `BMT5_INDUSTRY_INTERNET_RETAIL` | 32 | Internet Retail |
| `BMT5_INDUSTRY_LEISURE` | 33 | Leisure |
| `BMT5_INDUSTRY_LODGING` | 34 | Lodging |
| `BMT5_INDUSTRY_LUXURY_GOODS` | 35 | Luxury Goods |
| `BMT5_INDUSTRY_PACKAGING_CONTAINERS` | 36 | Packaging Containers |
| `BMT5_INDUSTRY_PERSONAL_SERVICES` | 37 | Personal Services |
| `BMT5_INDUSTRY_RECREATIONAL_VEHICLES` | 38 | Recreational Vehicles |
| `BMT5_INDUSTRY_RESIDENT_CONSTRUCTION` | 39 | Resident Construction |
| `BMT5_INDUSTRY_RESORTS_CASINOS` | 40 | Resorts Casinos |
| `BMT5_INDUSTRY_RESTAURANTS` | 41 | Restaurants |
| `BMT5_INDUSTRY_SPECIALTY_RETAIL` | 42 | Specialty Retail |
| `BMT5_INDUSTRY_TEXTILE_MANUFACTURING` | 43 | Textile Manufacturing |
| `BMT5_INDUSTRY_TRAVEL_SERVICES` | 44 | Travel Services |
| `BMT5_INDUSTRY_BEVERAGES_BREWERS` | 45 | Beverages Brewers |
| `BMT5_INDUSTRY_BEVERAGES_NON_ALCO` | 46 | Beverages Non Alco |
| `BMT5_INDUSTRY_BEVERAGES_WINERIES` | 47 | Beverages Wineries |
| `BMT5_INDUSTRY_CONFECTIONERS` | 48 | Confectioners |
| `BMT5_INDUSTRY_DISCOUNT_STORES` | 49 | Discount Stores |
| `BMT5_INDUSTRY_EDUCATION_TRAINIG` | 50 | Education Trainig |
| `BMT5_INDUSTRY_FARM_PRODUCTS` | 51 | Farm Products |
| `BMT5_INDUSTRY_FOOD_DISTRIBUTION` | 52 | Food Distribution |
| `BMT5_INDUSTRY_GROCERY_STORES` | 53 | Grocery Stores |
| `BMT5_INDUSTRY_HOUSEHOLD_PRODUCTS` | 54 | Household Products |
| `BMT5_INDUSTRY_PACKAGED_FOODS` | 55 | Packaged Foods |
| `BMT5_INDUSTRY_TOBACCO` | 56 | Tobacco |
| `BMT5_INDUSTRY_OIL_GAS_DRILLING` | 57 | Oil Gas Drilling |
| `BMT5_INDUSTRY_OIL_GAS_EP` | 58 | Oil Gas Ep |
| `BMT5_INDUSTRY_OIL_GAS_EQUIPMENT` | 59 | Oil Gas Equipment |
| `BMT5_INDUSTRY_OIL_GAS_INTEGRATED` | 60 | Oil Gas Integrated |
| `BMT5_INDUSTRY_OIL_GAS_MIDSTREAM` | 61 | Oil Gas Midstream |
| `BMT5_INDUSTRY_OIL_GAS_REFINING` | 62 | Oil Gas Refining |
| `BMT5_INDUSTRY_THERMAL_COAL` | 63 | Thermal Coal |
| `BMT5_INDUSTRY_URANIUM` | 64 | Uranium |
| `BMT5_INDUSTRY_EXCHANGE_TRADED_FUND` | 65 | Exchange Traded Fund |
| `BMT5_INDUSTRY_ASSETS_MANAGEMENT` | 66 | Assets Management |
| `BMT5_INDUSTRY_BANKS_DIVERSIFIED` | 67 | Banks Diversified |
| `BMT5_INDUSTRY_BANKS_REGIONAL` | 68 | Banks Regional |
| `BMT5_INDUSTRY_CAPITAL_MARKETS` | 69 | Capital Markets |
| `BMT5_INDUSTRY_CLOSE_END_FUND_DEBT` | 70 | Close End Fund Debt |
| `BMT5_INDUSTRY_CLOSE_END_FUND_EQUITY` | 71 | Close End Fund Equity |
| `BMT5_INDUSTRY_CLOSE_END_FUND_FOREIGN` | 72 | Close End Fund Foreign |
| `BMT5_INDUSTRY_CREDIT_SERVICES` | 73 | Credit Services |
| `BMT5_INDUSTRY_FINANCIAL_CONGLOMERATE` | 74 | Financial Conglomerate |
| `BMT5_INDUSTRY_FINANCIAL_DATA_EXCHANGE` | 75 | Financial Data Exchange |
| `BMT5_INDUSTRY_INSURANCE_BROKERS` | 76 | Insurance Brokers |
| `BMT5_INDUSTRY_INSURANCE_DIVERSIFIED` | 77 | Insurance Diversified |
| `BMT5_INDUSTRY_INSURANCE_LIFE` | 78 | Insurance Life |
| `BMT5_INDUSTRY_INSURANCE_PROPERTY` | 79 | Insurance Property |
| `BMT5_INDUSTRY_INSURANCE_REINSURANCE` | 80 | Insurance Reinsurance |
| `BMT5_INDUSTRY_INSURANCE_SPECIALTY` | 81 | Insurance Specialty |
| `BMT5_INDUSTRY_MORTGAGE_FINANCE` | 82 | Mortgage Finance |
| `BMT5_INDUSTRY_SHELL_COMPANIES` | 83 | Shell Companies |
| `BMT5_INDUSTRY_BIOTECHNOLOGY` | 84 | Biotechnology |
| `BMT5_INDUSTRY_DIAGNOSTICS_RESEARCH` | 85 | Diagnostics Research |
| `BMT5_INDUSTRY_DRUGS_MANUFACTURERS` | 86 | Drugs Manufacturers |
| `BMT5_INDUSTRY_DRUGS_MANUFACTURERS_SPEC` | 87 | Drugs Manufacturers Spec |
| `BMT5_INDUSTRY_HEALTHCARE_PLANS` | 88 | Healthcare Plans |
| `BMT5_INDUSTRY_HEALTH_INFORMATION` | 89 | Health Information |
| `BMT5_INDUSTRY_MEDICAL_FACILITIES` | 90 | Medical Facilities |
| `BMT5_INDUSTRY_MEDICAL_DEVICES` | 91 | Medical Devices |
| `BMT5_INDUSTRY_MEDICAL_DISTRIBUTION` | 92 | Medical Distribution |
| `BMT5_INDUSTRY_MEDICAL_INSTRUMENTS` | 93 | Medical Instruments |
| `BMT5_INDUSTRY_PHARM_RETAILERS` | 94 | Pharm Retailers |
| `BMT5_INDUSTRY_AEROSPACE_DEFENSE` | 95 | Aerospace Defense |
| `BMT5_INDUSTRY_AIRLINES` | 96 | Airlines |
| `BMT5_INDUSTRY_AIRPORTS_SERVICES` | 97 | Airports Services |
| `BMT5_INDUSTRY_BUILDING_PRODUCTS` | 98 | Building Products |
| `BMT5_INDUSTRY_BUSINESS_EQUIPMENT` | 99 | Business Equipment |
| `BMT5_INDUSTRY_CONGLOMERATES` | 100 | Conglomerates |
| `BMT5_INDUSTRY_CONSULTING_SERVICES` | 101 | Consulting Services |
| `BMT5_INDUSTRY_ELECTRICAL_EQUIPMENT` | 102 | Electrical Equipment |
| `BMT5_INDUSTRY_ENGINEERING_CONSTRUCTION` | 103 | Engineering Construction |
| `BMT5_INDUSTRY_FARM_HEAVY_MACHINERY` | 104 | Farm Heavy Machinery |
| `BMT5_INDUSTRY_INDUSTRIAL_DISTRIBUTION` | 105 | Industrial Distribution |
| `BMT5_INDUSTRY_INFRASTRUCTURE_OPERATIONS` | 106 | Infrastructure Operations |
| `BMT5_INDUSTRY_FREIGHT_LOGISTICS` | 107 | Freight Logistics |
| `BMT5_INDUSTRY_MARINE_SHIPPING` | 108 | Marine Shipping |
| `BMT5_INDUSTRY_METAL_FABRICATION` | 109 | Metal Fabrication |
| `BMT5_INDUSTRY_POLLUTION_CONTROL` | 110 | Pollution Control |
| `BMT5_INDUSTRY_RAILROADS` | 111 | Railroads |
| `BMT5_INDUSTRY_RENTAL_LEASING` | 112 | Rental Leasing |
| `BMT5_INDUSTRY_SECURITY_PROTECTION` | 113 | Security Protection |
| `BMT5_INDUSTRY_SPEALITY_BUSINESS_SERVICES` | 114 | Speality Business Services |
| `BMT5_INDUSTRY_SPEALITY_MACHINERY` | 115 | Speality Machinery |
| `BMT5_INDUSTRY_STUFFING_EMPLOYMENT` | 116 | Stuffing Employment |
| `BMT5_INDUSTRY_TOOLS_ACCESSORIES` | 117 | Tools Accessories |
| `BMT5_INDUSTRY_TRUCKING` | 118 | Trucking |
| `BMT5_INDUSTRY_WASTE_MANAGEMENT` | 119 | Waste Management |
| `BMT5_INDUSTRY_REAL_ESTATE_DEVELOPMENT` | 120 | Real Estate Development |
| `BMT5_INDUSTRY_REAL_ESTATE_DIVERSIFIED` | 121 | Real Estate Diversified |
| `BMT5_INDUSTRY_REAL_ESTATE_SERVICES` | 122 | Real Estate Services |
| `BMT5_INDUSTRY_REIT_DIVERSIFIED` | 123 | Reit Diversified |
| `BMT5_INDUSTRY_REIT_HEALTCARE` | 124 | Reit Healtcare |
| `BMT5_INDUSTRY_REIT_HOTEL_MOTEL` | 125 | Reit Hotel Motel |
| `BMT5_INDUSTRY_REIT_INDUSTRIAL` | 126 | Reit Industrial |
| `BMT5_INDUSTRY_REIT_MORTAGE` | 127 | Reit Mortage |
| `BMT5_INDUSTRY_REIT_OFFICE` | 128 | Reit Office |
| `BMT5_INDUSTRY_REIT_RESIDENTAL` | 129 | Reit Residental |
| `BMT5_INDUSTRY_REIT_RETAIL` | 130 | Reit Retail |
| `BMT5_INDUSTRY_REIT_SPECIALITY` | 131 | Reit Speciality |
| `BMT5_INDUSTRY_COMMUNICATION_EQUIPMENT` | 132 | Communication Equipment |
| `BMT5_INDUSTRY_COMPUTER_HARDWARE` | 133 | Computer Hardware |
| `BMT5_INDUSTRY_CONSUMER_ELECTRONICS` | 134 | Consumer Electronics |
| `BMT5_INDUSTRY_ELECTRONIC_COMPONENTS` | 135 | Electronic Components |
| `BMT5_INDUSTRY_ELECTRONIC_DISTRIBUTION` | 136 | Electronic Distribution |
| `BMT5_INDUSTRY_IT_SERVICES` | 137 | It Services |
| `BMT5_INDUSTRY_SCIENTIFIC_INSTRUMENTS` | 138 | Scientific Instruments |
| `BMT5_INDUSTRY_SEMICONDUCTOR_EQUIPMENT` | 139 | Semiconductor Equipment |
| `BMT5_INDUSTRY_SEMICONDUCTORS` | 140 | Semiconductors |
| `BMT5_INDUSTRY_SOFTWARE_APPLICATION` | 141 | Software Application |
| `BMT5_INDUSTRY_SOFTWARE_INFRASTRUCTURE` | 142 | Software Infrastructure |
| `BMT5_INDUSTRY_SOLAR` | 143 | Solar |
| `BMT5_INDUSTRY_UTILITIES_DIVERSIFIED` | 144 | Utilities Diversified |
| `BMT5_INDUSTRY_UTILITIES_POWERPRODUCERS` | 145 | Utilities Powerproducers |
| `BMT5_INDUSTRY_UTILITIES_RENEWABLE` | 146 | Utilities Renewable |
| `BMT5_INDUSTRY_UTILITIES_REGULATED_ELECTRIC` | 147 | Utilities Regulated Electric |
| `BMT5_INDUSTRY_UTILITIES_REGULATED_GAS` | 148 | Utilities Regulated Gas |
| `BMT5_INDUSTRY_UTILITIES_REGULATED_WATER` | 149 | Utilities Regulated Water |
| `BMT5_INDUSTRY_UTILITIES_FIRST` | 150 | Utilities First |
| `BMT5_INDUSTRY_UTILITIES_LAST` | 151 | Utilities Last |

</details>

## 🧩 Notes & Tips

* **`getValue()` is `int64`.** Coerce with `Number(...)`; all symbol integers fit safely.
* **Stops level is key for trading.** SL/TP closer than `SYMBOL_TRADE_STOPS_LEVEL` are rejected with retcode `10016` — see [Return Codes](../../All_Guides/RETURN_CODES_REFERENCE.md).
* **Flags are `0`/`1`.** Compare `=== 1` for `SYMBOL_SELECT` / `SYMBOL_VISIBLE` / `SYMBOL_SPREAD_FLOAT`.

---

## 🔗 Usage Examples

### 1) Digits for formatting

```ts
import { MT5Account, MarketInfoPb } from '@metarpc/nodemt5';
const I = MarketInfoPb.SymbolInfoIntegerProperty;

const req = new MarketInfoPb.SymbolInfoIntegerRequest();
req.setSymbol('EURUSD'); req.setType(I.SYMBOL_DIGITS);
const digits = Number((await account.symbolInfoInteger(req)).getValue());
console.log((1.23456).toFixed(digits));
```

### 2) Minimum stop level

```ts
const r = new MarketInfoPb.SymbolInfoIntegerRequest();
r.setSymbol('EURUSD'); r.setType(MarketInfoPb.SymbolInfoIntegerProperty.SYMBOL_TRADE_STOPS_LEVEL);
const minStopPts = Number((await account.symbolInfoInteger(r)).getValue());
console.log('min SL/TP distance:', minStopPts, 'points');
```

### 3) Current spread

```ts
const r = new MarketInfoPb.SymbolInfoIntegerRequest();
r.setSymbol('EURUSD'); r.setType(MarketInfoPb.SymbolInfoIntegerProperty.SYMBOL_SPREAD);
console.log('spread:', Number((await account.symbolInfoInteger(r)).getValue()), 'points');
```

### 4) Is the symbol selected?

```ts
const r = new MarketInfoPb.SymbolInfoIntegerRequest();
r.setSymbol('EURUSD'); r.setType(MarketInfoPb.SymbolInfoIntegerProperty.SYMBOL_SELECT);
const selected = Number((await account.symbolInfoInteger(r)).getValue()) === 1;
if (!selected) await account.symbolSelect('EURUSD', true);
```

### 5) A small reusable reader

```ts
function symbolInt(account: MT5Account, sym: string, prop: number): Promise<number> {
  const r = new MarketInfoPb.SymbolInfoIntegerRequest();
  r.setSymbol(sym); r.setType(prop);
  return account.symbolInfoInteger(r).then((d) => Number(d.getValue()));
}
```

### 6) Read digits + stops together

```ts
const I = MarketInfoPb.SymbolInfoIntegerProperty;
const [digits, stops] = await Promise.all([
  symbolInt(account, 'EURUSD', I.SYMBOL_DIGITS),
  symbolInt(account, 'EURUSD', I.SYMBOL_TRADE_STOPS_LEVEL),
]);
console.log({ digits, stops });
```

---

## 🔧 Common Patterns

### Legal-stop check before an order

```ts
async function stopIsLegal(account: MT5Account, sym: string, distancePoints: number): Promise<boolean> {
  const I = MarketInfoPb.SymbolInfoIntegerProperty;
  const r = new MarketInfoPb.SymbolInfoIntegerRequest();
  r.setSymbol(sym); r.setType(I.SYMBOL_TRADE_STOPS_LEVEL);
  const min = Number((await account.symbolInfoInteger(r)).getValue());
  return distancePoints >= min;
}
```

---

## 📚 See Also

* [SymbolInfoDouble](./SymbolInfoDouble.md) · [SymbolInfoString](./SymbolInfoString.md) · [SymbolInfoTick](./SymbolInfoTick.md)
* **Friendly layer:** [`MT5Service.getSymbolInteger`](../../MT5Service/2.%20Symbol_Methods.md) · [`MT5Sugar.getSymbolDigits / getMinStopLevel`](../../MT5Sugar/9.%20Symbol_Information.md).

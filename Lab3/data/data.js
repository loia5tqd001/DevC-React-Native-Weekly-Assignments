export const listSymbols = [ "USD", "CAD", "EUR", "GBP", "JPY", "KRW", "VND" ]

export const listCurrencies = {
  USD: {
    symbol: "$",
    name: "US Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "USD",
    name_plural: "US dollars",
    flag: require("/assets/flags/usd.png")
  },
  CAD: {
    symbol: "CA$",
    name: "Canadian Dollar",
    symbol_native: "$",
    decimal_digits: 2,
    rounding: 0,
    code: "CAD",
    name_plural: "Canadian dollars",
    flag: require("/assets/flags/cad.png")
  },
  EUR: {
    symbol: "€",
    name: "Euro",
    symbol_native: "€",
    decimal_digits: 2,
    rounding: 0,
    code: "EUR",
    name_plural: "euros",
    flag: require("/assets/flags/eur.png")
  },
  GBP: {
    symbol: "£",
    name: "British Pound Sterling",
    symbol_native: "£",
    decimal_digits: 2,
    rounding: 0,
    code: "GBP",
    name_plural: "British pounds sterling",
    flag: require("/assets/flags/gbp.png")
  },
  JPY: {
    symbol: "¥",
    name: "Japanese Yen",
    symbol_native: "￥",
    decimal_digits: 0,
    rounding: 0,
    code: "JPY",
    name_plural: "Japanese yen",
    flag: require("/assets/flags/jpy.png")
  },
  KRW: {
    symbol: "₩",
    name: "South Korean Won",
    symbol_native: "₩",
    decimal_digits: 0,
    rounding: 0,
    code: "KRW",
    name_plural: "South Korean won",
    flag: require("/assets/flags/krw.png")
  },
  VND: {
    symbol: "₫",
    name: "Vietnamese Dong",
    symbol_native: "₫",
    decimal_digits: 0,
    rounding: 0,
    code: "VND",
    name_plural: "Vietnamese dong",
    flag: require("/assets/flags/vnd.png")
  }
}

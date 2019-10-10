// /**
// |--------------------------------------------------
// | Sample input:
// |  - currency: "150,420,000.00"
// | => Sample output: 150420000
// |--------------------------------------------------
// */
// export function currencyToNumber (currency) {
//   return +(currency).replace(/,/g, "")
// }

// /**
// |--------------------------------------------------
// | Sample input:
// |  - amount: 12369
// |  - currencyInfo:
// | {
// |   symbol: "$",
// |   name: "US Dollar",
// |   symbol_native: "$",
// |   decimal_digits: 2,
// |   rounding: 0,
// |   code: "USD",
// |   name_plural: "US dollars",
// |   flag: require("../assets/data/usd.png")
// | }
// | => Sample output: 12,369.00
// |--------------------------------------------------
// */
// export function numberToCurrency(amount, currencyInfo) {
//   const numberDigits = currencyInfo.decimal_digits
//   return amount.toFixed(numberDigits).toLocaleString()
// }

/**
|--------------------------------------------------
| Code for testing
|--------------------------------------------------
*/
// if (testing = true) {
//   console.log(currencyToNumber("123,450,000"))
//   console.log(numberToCurrency(142232, { decimal_digits: 2 }))
// }

/**
|--------------------------------------------------
| @from: String. eg: "USD"
| @to: String. eg: "VND"
| @Output: Promise<Number>. eg: Promise<22.240>
|--------------------------------------------------
*/
// const fetch = require('node-fetch')
export function getExchangeRate(from, to) {
  const apiUrl = `https://api.exchangerate-api.com/v4/latest/${from}`
  return fetch(apiUrl)
    .then(response => response.json())
    .then(json => {
      return json.rates[to]
    })
    .catch(() => alert(`Cannot convert from ${from} to ${to}`))
}


// /**
// |--------------------------------------------------
// | @from: String. eg: "USD"
// | @amount: Number. eg: 120
// | @toCurrency: Object. eg: 
// | VND: {
// |   symbol: "₫",
// |   name: "Vietnamese Dong",
// |   symbol_native: "₫",
// |   decimal_digits: 0,
// |   rounding: 0,
// |   code: "VND",
// |   name_plural: "Vietnamese dong",
// |   flag: require("../assets/data/vnd.png")
// | }
// | @Output: Promise<String>. eg: Promise<"2,668,800">
// |--------------------------------------------------
// */
// export function convertCurrencyApi(from, amount, toCurrency) {
//   if (typeof amount === "string") {
//     amount = currencyToNumber(amount) 
//   }
  
//   return getExchangeRate(from, toCurrency.code)
//   .then(exchangeRate => 
//     numberToCurrency(amount * exchangeRate, toCurrency)
//   )
// }
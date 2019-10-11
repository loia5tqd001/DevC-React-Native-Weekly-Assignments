import { getGlobal } from "reactn"

/**
|--------------------------------------------------
| @from: String. eg: "USD"
| @to: String. eg: "VND"
| @Output: Promise<Number>. eg: Promise<22.240>
|--------------------------------------------------
*/
export function getExchangeRate(from, to) {
  const apiUrl = `https://api.exchangerate-api.com/v4/latest/${from}`
  return fetch(apiUrl)
    .then(response => response.json())
    .then(json => {
      return json.rates[to]
    })
    .catch(() => alert(`Cannot convert from ${from} to ${to}`))
}

/**
|--------------------------------------------------
| @from: Object (Currency)
| @to: Object (Currency)
| @Output: Object (Currency)
| Currency: { 
|   amount: , 
|   info: { 
|     code: , 
|     decimal_digits: , 
|     ... 
|   } 
| }
|--------------------------------------------------
*/
export function convertCurrency(from, to) {
  const usdRates = getGlobal().usdRates
  const exchangeRate = usdRates[to.info.code] / usdRates[from.info.code]
  const newAmount = (from.amount * exchangeRate).toFixed(to.info.decimal_digits)
  return { amount: newAmount, info: to.info }
}
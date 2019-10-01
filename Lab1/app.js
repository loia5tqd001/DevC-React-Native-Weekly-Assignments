const amountInput_ = document.getElementById('amount')
const fromSelect_ = document.getElementById('from')
const toSelect_ = document.getElementById('to')
const convertBtn_ = document.getElementById('btn-convert')
const resultText_ = document.getElementById('result')

convertBtn_.addEventListener("click", onClickConvert)

function getExchangeRate(from, to) {
  const url = `https://api.ratesapi.io/api/latest?base=${from}&symbols=${to}`

  return fetch(url)
    .then(response => response.json())
    .then(json => json["rates"][to])
    .catch(() => alert(`Cannot convert from ${from} to ${to}`));
}

function convertCurrency(from, amount, to) {
  return getExchangeRate(from, to)
    .then(exchangeRate => (amount * exchangeRate).toFixed(2));
}

function onClickConvert() {
  resultText_.innerHTML = 'Calculating...'

  const amount = amountInput_.value
	const from = fromSelect_.options[fromSelect_.selectedIndex].value
  const to = toSelect_.options[toSelect_.selectedIndex].value
  
  convertCurrency(from, amount, to)
    .then(result => {
      resultText_.innerHTML = `${amount} ${from} = ${result} ${to}`
    })
}
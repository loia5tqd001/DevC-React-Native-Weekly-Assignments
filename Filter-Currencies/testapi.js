// api page: https://www.exchangerate-api.com/docs/documentation
// $ npm install axios --save

const fs = require("fs")
const axios = require("axios")

const data = fs.readFileSync("./result/list-currencies.json", "utf-8")
const list = JSON.parse(data)

const prefixApi = "https://api.exchangerate-api.com/v4/latest/"
list.forEach(symbol => {
  axios.get(prefixApi + symbol)
    .then(o => console.log(`get api for ${symbol} succesfully`))
    .catch(err => console.log(`error get api for ${symbol}`, err))
})
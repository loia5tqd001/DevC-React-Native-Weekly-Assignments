const fs = require("fs").promises
const path = require("path")

// get list of interest currencies
function getList(listPath) {
  return fs.readFile(listPath, "utf-8")
  .then(data => data
      .toString()
      .trim()
      .split(",")
  )
}

// get javascript object from file json
function readJson(jsonPath) {
  return fs.readFile(jsonPath).then(data => JSON.parse(data))
}

// filter to get only interested currencies
function filterCurrency(data, symbols) {
  let interestCurrencies = {}
  for (const key of symbols) {
    interestCurrencies[key] = data[key]
  }
  return interestCurrencies
}

// write down javascript object to a json file
function writeJson(destination, data) {
  return fs
    .mkdir(path.dirname(destination), { recursive: true })
    .then(o => {
      const jsonString = JSON.stringify(data, null, "\t")
      fs.writeFile(destination, jsonString)
    })
    .catch(err => console.log(err))
}

// copy images of flags from one place to another
function copyFlags(symbols) {
  const flags = symbols.map(symbol => symbol.toLowerCase() + ".png")

  fs.mkdir("./result/", { recursive: true }) // ensure the directory ./result exists

  return Promise.all(
    flags.map(flag => {
      const fromFile = "./flags/" + flag
      const toFile = "./result/" + flag
      fs.copyFile(fromFile, toFile)
    })
  )
}

async function main() {
  // read
  const symbolsPromise = getList("./list.txt")
  const dataPromise = readJson("./Common-Currency.json")

  // process
  const [symbols, data] = await Promise.all([symbolsPromise, dataPromise])
  let filteredCurrencies = filterCurrency(data, symbols)

  // store
  copyFlags(symbols) // store flag images
  writeJson("./result/info-currencies.json", filteredCurrencies) // store currency info
  writeJson("./result/list-currencies.json", symbols) // store list of currencies
}

main()

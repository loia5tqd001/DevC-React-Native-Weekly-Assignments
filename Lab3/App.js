import React, { useState, useLayoutEffect, useEffect } from "react"
import { StyleSheet, View, TouchableOpacity } from "react-native"
import Constants from "expo-constants"
import { MaterialIcons } from "@expo/vector-icons"
import { CurrencyCard, InputCurrenyCard } from "./components/CurrencyCard"
import { shadow1 } from './constants/Shadows'
import { getExchangeRate } from "./utils/utils"

const listSymbols = require("./assets/data/list-currencies")
const listCurrencies = require("./assets/data/info-currencies")
const usdRates = {}

function convertCurrency(from, to) {
  const exchangeRate = usdRates[to.info.code] / usdRates[from.info.code]
  const newAmount = (from.amount * exchangeRate).toFixed(to.info.decimal_digits)
  return { amount: newAmount, info: to.info }
}


  // USD: {
  //   symbol: "$",
  //   name: "US Dollar",
  //   symbol_native: "$",
  //   decimal_digits: 2,
  //   rounding: 0,
  //   code: "USD",
  //   name_plural: "US dollars",
  //   flag: require("./assets/data/usd.png")
  // },
  // VND: {
  //   symbol: "₫",
  //   name: "Vietnamese Dong",
  //   symbol_native: "₫",
  //   decimal_digits: 0,
  //   rounding: 0,
  //   code: "VND",
  //   name_plural: "Vietnamese dong",
  //   flag: require("./assets/data/vnd.png")
  // }
// }

export default function App() {
  const [currentCurrency, setCurrentCurrency] = useState({
    amount: "",
    info: listCurrencies.USD
  })
  const [convertedCurrency, setConvertedCurrency] = useState({
    amount: 0,
    info: listCurrencies.VND
  })

  // ComponentDidMount equivalent
  // If don't use useEffect, it will be equivalent to ComponentDidUpdate, which will call api every time rerender
  useEffect(() => {
    for (const symbol of listSymbols) {
      getExchangeRate("USD", symbol).then(exchangeRate => {
        usdRates[symbol] = exchangeRate 
      })
    }
    console.log("Call Api...")
  }, [])

  // Load info for currencies 
  useEffect(() => {
    console.warn("hei")
    for (const symbol in listCurrencies) {
      if (listCurrencies.hasOwnProperty(symbol)) {
        const flagUri = `https://github.com/transferwise/currency-flags/tree/master/src/flags/${symbol.toLowerCase()}.png`
        listCurrencies[symbol].flag = { uri: flagUri }
      } else {
        console.warn("Can't find flag of " + symbol)
      }
    }
  }, [])



  const onCurrentCurrencyChange = (newCurrentCurrency) => {
    setCurrentCurrency(newCurrentCurrency)
    setConvertedCurrency(
      convertCurrency(newCurrentCurrency, convertedCurrency)
    )
  }

  const onConvertedCurrencyChange = (newConvertedCurrency) => {
    setConvertedCurrency(
      convertCurrency(currentCurrency, newConvertedCurrency)
    )
  }

  const onSwapClicked = () => {
    [currentCurrency.info, convertedCurrency.info] = 
    [convertedCurrency.info, currentCurrency.info] // swap 2 infos
    // setCurrentCurrency(currentCurrency) // NOTE: to enforce rerender, but seems no need
    setConvertedCurrency(
      convertCurrency(currentCurrency, convertedCurrency)
    )
  }

  return (
    <View style={styles.container}>
      {/* Input */}
      <InputCurrenyCard
        currency={currentCurrency}
        setCurrency={onCurrentCurrencyChange}
        listCurrencies={listCurrencies}
      />

      {/* Separator */}
      <View style={styles.separateContainer}>
        <View style={styles.separateLine} />
        <TouchableOpacity style={styles.swapButton} onPress={onSwapClicked}>
          <MaterialIcons name="swap-vert" size={32} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Converted Currency */}
      <CurrencyCard
        currency={convertedCurrency}
        setCurrency={onConvertedCurrencyChange}
        listCurrencies={listCurrencies}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  separateContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  separateLine: {
    width: "60%",
    height: 1,
    backgroundColor: "#ddd",
    ...shadow1
  },
  swapButton: {
    flexBasis: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    marginLeft: 25,
    marginVertical: 20,
    ...shadow1
  }
})

import React, { useEffect, useGlobal, setGlobal } from "reactn"
import { StyleSheet, View, Text } from "react-native"
import Constants from "expo-constants"
import MainConversion from "/components/MainConversion"
import ExtraConversion from "/components/ExtraConversion"
import { getExchangeRate } from "/utils/utils"
import { listSymbols, listCurrencies } from "/data/data"
import { shadow2 } from "/constants/shadows"

setGlobal({
  usdRates: {
    USD: 1,
    VND: 23000
  },
  currentCurrency: {
    amount: "",
    info: listCurrencies.USD
  }
})

export default function App() {
  const [usdRates, setUsdRates] = useGlobal("usdRates")

  // Another solution using setGlobal (more verbose)
  // const [global, setGlobal] = useGlobal();
  // useEffect(() => {
  //   for (const symbol of listSymbols) {
  //     getExchangeRate("USD", symbol).then(exchangeRate => {
  //       setGlobal(oldGlobal => ({
  //         ...oldGlobal,
  //         usdRates: {
  //           ...oldGlobal.usdRates,
  //           [symbol]: exchangeRate
  //         }
  //       }))
  //     })
  //   }
  // }, [])

  // ComponentDidMount
  useEffect(() => {
    for (const symbol of listSymbols) {
      getExchangeRate("USD", symbol)
      
      .then(exchangeRate => {
        usdRates[symbol] = exchangeRate
        console.log("Call api getting exchange rate for " + symbol)
        console.log("New usdRates:", usdRates)
      })
    }
    // setUsdRates(usdRates) // disable this line, it still works? don't know why...
  }, [])

  return (
    <View style={styles.container}>
      <MainConversion style={styles.mainConversion} />
      <ExtraConversion style={styles.extraConversion} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    height: "100%"
  },
  mainConversion: {
    // flex: 4
  },
  extraConversion: {
    // flex: 4,
    backgroundColor: "black",
    ...shadow2
  }
})

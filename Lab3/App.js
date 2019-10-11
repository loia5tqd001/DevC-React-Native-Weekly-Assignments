import React, { useEffect, useGlobal, setGlobal, getGlobal } from "reactn"
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

  // ComponentDidMount
  useEffect(() => {
    for (const symbol of listSymbols) {
      getExchangeRate("USD", symbol).then(exchangeRate => {
        console.log("Call api getting exchange rate for " + symbol)
        setUsdRates({
          ...usdRates, // keep old exchange rates,
          [symbol]: exchangeRate // and extend new exchange rate for new currency
        })
      })
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text>App loaded succesfullyy</Text>
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
    flex: 4
  },
  extraConversion: {
    flex: 4,
    backgroundColor: "white",
    ...shadow2
  }
})

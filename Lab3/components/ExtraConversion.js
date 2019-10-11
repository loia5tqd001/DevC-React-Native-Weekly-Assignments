import React, { useState, useGlobal, useEffect } from "reactn"
import { StyleSheet, View, TouchableOpacity, Image } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { CurrencyCard, InputCurrenyCard } from "/components/CurrencyCard"
import { convertCurrency } from "/utils/utils"
import { listSymbols, listCurrencies } from "/data/data"
import { shadow1 } from "/constants/shadows"
import colors from "/constants/colors"

export default ExtraConversion = () => {
  const [currentCurrency, setCurrentCurrency] = useGlobal("currentCurrency")
  const [extraCurrency, setExtraCurrency] = useState([
    {
      amount: "0",
      info: listCurrencies.JPY
    },
    {
      amount: "0",
      info: listCurrencies.KRW
    },
    {
      amount: "0",
      info: listCurrencies.EUR
    }
  ])

  function onCurrencyChange(newValue, index) {
    const convertedCurrency = convertCurrency(
      currentCurrency,
      newValue
    )
    setExtraCurrency(
      extraCurrency.splice(index, 1, convertedCurrency)
    )
  }

  return (
    <View style={styles.container}>
      {extraCurrency.forEach((_, index) => (
        <CurrencyCard
          style={styles.card}
          currency={extraCurrency[index]}
          setCurrency={newValue => onCurrencyChange(newValue, index)}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 35,
    paddingHorizontal: 20,
    height: "100%",
    backgroundColor: "blue"
  },
  card: {
    flex: 1,
    width: "80%",
    height: "30%",
    backgroundColor: "black"
  }
})

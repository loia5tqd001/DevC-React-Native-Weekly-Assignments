import React, { useState, useGlobal, useEffect } from "reactn"
import { StyleSheet, View, TouchableOpacity, Image } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { CurrencyCard, InputCurrenyCard } from "/components/CurrencyCard"
import { convertCurrency } from "/utils/utils"
import { listSymbols, listCurrencies } from "/data/data"
import { shadow2 } from "/constants/shadows"
import colors from "/constants/colors"

export default ExtraConversion = () => {
  const [currentCurrency, setCurrentCurrency] = useGlobal("currentCurrency")
  const [extraCurrencies, setExtraCurrencies] = useState([
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
    setExtraCurrencies(
      extraCurrencies.splice(index, 1, convertedCurrency)
    )
  }

  return (
    <View style={styles.container}>
      {extraCurrencies.map((currency, index) => (
        <CurrencyCard
          key={index}
          style={styles.card}
          currency={currency}
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
    justifyContent: "flex-start",
    paddingVertical: 35,
    paddingHorizontal: 20,
    ...shadow2
    // backgroundColor: "blue"
  },
  card: {
    flex: 1,
    width: "80%",
    height: "30%",
    backgroundColor: "black"
  }
})

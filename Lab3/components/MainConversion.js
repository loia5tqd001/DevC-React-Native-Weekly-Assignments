import React, { useState, useEffect, useGlobal } from "reactn"
import { StyleSheet, View, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { CurrencyCard, InputCurrenyCard } from "/components/CurrencyCard"
import { convertCurrency } from "/utils/utils"
import { listCurrencies } from "/data/data"
import { shadow1 } from "/constants/shadows"
import colors from "/constants/colors"

export default MainConversion = () => {
  // const [currentCurrency, setCurrentCurrency] = useState({
  //   amount: "",
  //   info: listCurrencies.USD
  // })
  // useEffect(() => {
  //   setGlobal({
  //     currentCurrency: {
  //       amount: "",
  //       info: listCurrencies.USD
  //     }
  //   })
  // }, [])
  // useEffect(() => {
  //   setGlobal({
  //     currentCurrency: {
  //       amount: "",
  //       info: listCurrencies.USD
  //     }
  //   })
  // }, [])
  // const [currentCurrency, setCurrentCurrency] = useGlobal({
  //   amount: "",
  //   info: listCurrencies.USD
  // })
  const [currentCurrency, setCurrentCurrency] = useGlobal("currentCurrency")
  const [convertedCurrency, setConvertedCurrency] = useState({
    amount: 0,
    info: listCurrencies.VND
  })

  const onCurrentCurrencyChange = newCurrentCurrency => {
    setCurrentCurrency(newCurrentCurrency)
    setConvertedCurrency(
      convertCurrency(newCurrentCurrency, convertedCurrency)
    )
  }

  const onConvertedCurrencyChange = newConvertedCurrency => {
    setConvertedCurrency(
      convertCurrency(currentCurrency, newConvertedCurrency)
    )
  }

  const onSwapClicked = () => {
    [currentCurrency.info, convertedCurrency.info] = 
    [convertedCurrency.info, currentCurrency.info ] // swap 2 infos
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
      />

      {/* Separator */}
      <View style={styles.separateContainer}>
        <View style={styles.separateLine} />
        <TouchableOpacity style={styles.swapButton} onPress={onSwapClicked}>
          <MaterialIcons name="swap-vert" size={32} color="white" />
        </TouchableOpacity>
      </View>

      {/* Converted Currency */}
      <CurrencyCard
        currency={convertedCurrency}
        setCurrency={onConvertedCurrencyChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 35,
    paddingHorizontal: 20
  },
  separateContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  separateLine: {
    width: "60%",
    height: 1,
    backgroundColor: colors.TurquoiseBlue,
    ...shadow1
  },
  swapButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.TurquoiseBlue,
    marginLeft: 25,
    marginVertical: 20,
    ...shadow1
  }
})

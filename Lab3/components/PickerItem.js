import React, { useState } from 'react'
import { View, StyleSheet, Image, Picker } from 'react-native'

const listSymbols = require("../assets/data/list-currencies")

export default PickerItem = ({ currency, setCurrency, listCurrencies }) => {
  return (
    <View style={styles.container}>
      <Image source={listCurrencies[currency].flag} />
      <Picker
        style={styles.picker} // for Android
        itemStyle={styles.picker} // for IOS
        selectedValue={currency}
        onValueChange={setCurrency}>
        {listSymbols.map((currency, index) => {
          return <Picker.Item key={index} label={currency} value={currency} />
        })}
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  picker: {
    height: 50,
    width: 55,
    backgroundColor: "white",
  }
})
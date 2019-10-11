import React, { useState } from 'react'
import { View, StyleSheet, Image, Picker } from 'react-native'
import { listSymbols, listCurrencies } from "/data/data"
import colors from "/constants/colors"

export default PickerItem = ({ currency, setCurrency }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={listCurrencies[currency].flag} 
        style={styles.flag}
      />
      <Picker
        style={styles.picker} // for Android
        itemStyle={styles.picker} // for IOS
        selectedValue={currency}
        onValueChange={setCurrency}>
        {listSymbols.map((currency, index) => {
          return (
            <Picker.Item
              key={index}
              label={currency}
              value={currency}
              color={colors.Paradiso}
            />
          )
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
  flag: {
    padding: 2,
    borderColor: colors.TurquoiseBlue,
    borderWidth: 1,
  },
  picker: {
    height: 50,
    width: 55,
    backgroundColor: "white"
  }
})
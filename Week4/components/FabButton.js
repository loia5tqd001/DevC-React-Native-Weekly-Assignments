import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Fab, Icon } from "native-base"
import COLORS from "../constants/Colors"

export default function FabButton ({ iconName, onPress }) {
  return (
    <Fab
      containerStyle={styles.buttonContainer}
      style={styles.button}
      position="bottomRight"
      onPress={onPress}>
      <Icon name={iconName} />
    </Fab>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginRight: 30,
    marginBottom: 70
  },
  button: {
    backgroundColor: COLORS.tintColorMedium
  }
})
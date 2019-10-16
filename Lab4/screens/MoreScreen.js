import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default MoreScreen = () => {
  return (
    <View style={styles.container}>
      <Text> More Screen </Text>
    </View>
  )
}

TimelineScreen.navigationOptions = {
  title: "More"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
import React, { useState } from "react"
import { View, StyleSheet, Text } from "react-native"

export default TimelineScreen = () => {
  return (
    <View style={styles.container}>
      <Text> TimelineScreen </Text>
    </View>
  )
}

TimelineScreen.navigationOptions = {
  title: "Timeline"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

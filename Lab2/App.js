import React from "react"
import { StyleSheet, View } from "react-native"
import Constants from "expo-constants"
import Header from "./components/Header"
import Feed from "./components/Feed"
import FeedData from "./mock-data/FeedData"

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Feed feedData={FeedData}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
})

export default App

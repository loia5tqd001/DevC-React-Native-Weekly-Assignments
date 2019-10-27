import React, { useRef } from "react"
import { StyleSheet, Text, Linking, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/core"
import { Card } from "react-native-elements"

export default function PublisherItem({ id, name, description, url }) {
  const navigation = useNavigation()

  const openUrl = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url)
      } else {
        console.log(`Don't know how to open URL: ${url}`)
      }
    })
  }

  const navigateToDetail = () => {
    const apiQuery = `https://newsapi.org/v2/top-headlines?sources=${id}`
    navigation.navigate("Detail", { apiQuery, title: name }) 
  }

  return (
    <TouchableOpacity onPress={navigateToDetail}>
      <Card title={name}>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity onPress={() => openUrl(url)}>
          <Text style={styles.url}>{url}</Text>
        </TouchableOpacity>
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  description: {
    fontSize: 16
  },
  url: {
    fontSize: 14,
    color: "black",
    marginRight: 10,
    marginVertical: 10,
    textDecorationLine: "underline",
    color: "blue"
  }
})

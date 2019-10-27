import React, { useState, useEffect } from "react"
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList
} from "react-native"
import PublisherItem from "../components/PublisherItem"
import { NEWS_API_KEY } from "../constants/api_keys"

const States = {
  hasErrored: "has-errored",
  loading: "loading",
  normal: "normal"
}

export default function PublishersScreen({ navigation, route }) {
  const [state, setState] = useState(States.loading)
  const [publishers, setPublishers] = useState([])

  useEffect(() => {
    navigation.setOptions({
      title: `Publishers Counts: ${publishers.length}`
    })
  }, [publishers])

  useEffect(() => {
    const getPublishers = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/sources?language=en&country=us&apiKey=${NEWS_API_KEY}`
        )
        const jsonData = await response.json()
        const listPublishers = jsonData.sources
        setPublishers(listPublishers)
        setState(States.normal)
      } catch (error) {
        setState(States.hasErrored)
      }
    }

    getPublishers()
  }, [])

  if (state === States.hasErrored) {
    return (
      <View style={styles.container}>
        <Text>{`Error =(`}</Text>
      </View>
    )
  } else if (state === States.loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" loading={true} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={publishers}
        renderItem={({ item }) => <PublisherItem {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center"
  }
})

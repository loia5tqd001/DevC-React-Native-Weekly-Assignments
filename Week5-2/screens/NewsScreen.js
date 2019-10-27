import React, { useState, useEffect } from "react"
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList
} from "react-native"
import Article from "../components/Article"
import uniquify from "../utils/uniquify"
import { NEWS_API_KEY } from "../constants/api_keys"

const States = {
  hasErrored: "has-errored",
  loading: "loading",
  normal: "normal",
  lastPageReached: "normal-last_page_reached"
}

export default function NewsScreen({ navigation, route }) {
  const [state, setState] = useState(States.loading)
  const [articles, setArticles] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    navigation.setOptions({
      title: `${route.params.title} (${articles.length})`
    })
  }, [articles])

  useEffect(() => {
    const getNews = async () => {
      if (state === States.lastPageReached) return

      try {
        const response = await fetch(
          `${route.params.apiQuery}&apiKey=${NEWS_API_KEY}&page=${pageNumber}`
        )
        const jsonData = await response.json()
        const hasMoreArticles = jsonData.articles.length > 0

        if (hasMoreArticles) {
          const newArticleList = uniquify([...articles, ...jsonData.articles])
          setArticles(newArticleList)
          setState(States.normal)
        } else {
          setState(States.lastPageReached)
        }
      } catch (error) {
        setState(States.hasErrored)
        console.warn(error)
      }
    }

    getNews()
  }, [pageNumber])

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
        data={articles}
        renderItem={({ item }) => <Article {...item} />}
        keyExtractor={item => item.url}
        onEndReached={() =>
          state === States.lastPageReached || setPageNumber(pageNumber + 1)
        }
        onEndReachedThreshold={1}
        ListFooterComponent={
          state === States.lastPageReached ? (
            <Text style={styles.end}>No more articles</Text>
          ) : (
            <ActivityIndicator size="large" loading={true} />
          )
        }
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
  },
  end: {
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "center",
    marginVertical: 10,
    color: "#03A9F4"
  }
})

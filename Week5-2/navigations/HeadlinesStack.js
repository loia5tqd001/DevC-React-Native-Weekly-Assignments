import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import NewsScreen from "../screens/NewsScreen"

const HeadlinesStack = createStackNavigator()

const HeadlineScreenConfig = ({ navigation, route }) => (
  <NewsScreen
    navigation={navigation}
    route={{
      ...route,
      params: {
        title: "Headlines",
        apiQuery: "https://newsapi.org/v2/top-headlines?country=us"
      }
    }}
  />
)

export default function _HeadlinesStack() {
  return (
    <HeadlinesStack.Navigator>
      <HeadlinesStack.Screen
        name="Headlines"
        component={HeadlineScreenConfig}
      />
    </HeadlinesStack.Navigator>
  )
}

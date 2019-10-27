import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import NewsScreen from "../screens/NewsScreen"
import PublishersScreen from "../screens/PublishersScreen"

const PublishersStack = createStackNavigator()

export default function _PublishersStack() {
  return (
    <PublishersStack.Navigator>
      <PublishersStack.Screen name="Publishers" component={PublishersScreen} />
      <PublishersStack.Screen name="Detail" component={NewsScreen} />
    </PublishersStack.Navigator>
  )
}

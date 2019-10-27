import React from "react"
import { NavigationNativeContainer } from "@react-navigation/native"

import TabsNavigator from "./navigations/TabsNavigator"

export default function App() {
  return (
    <NavigationNativeContainer>
      <TabsNavigator />
    </NavigationNativeContainer>
  )
}

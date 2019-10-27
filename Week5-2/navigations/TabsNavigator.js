import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "react-native-elements"

import PublishersStack from "../navigations/PublishersStack"
import HeadlinesStack from "../navigations/HeadlinesStack"

const TabsNavigator = createBottomTabNavigator()

const TabBarIconOption = (iconName, iconType) => ({
  tabBarIcon: ({ focused }) => (
    <Icon 
      name={iconName} 
      type={iconType} 
      color={focused ? "#2f95dc" : "#ccc"} 
    />
  )
})

export default function _TabsNavigator() {
  return (
    <TabsNavigator.Navigator>
      <TabsNavigator.Screen
        name="Headlines"
        component={HeadlinesStack}
        options={TabBarIconOption("globe", "feather")}
      />
      <TabsNavigator.Screen
        name="Publishers"
        component={PublishersStack}
        options={TabBarIconOption("news", "entypo")}
      />
    </TabsNavigator.Navigator>
  )
}

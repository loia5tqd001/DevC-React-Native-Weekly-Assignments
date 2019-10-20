import React from "react"
import { Platform } from "react-native"
import { createDrawerNavigator } from "react-navigation-drawer"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import TabBarIcon from "../components/TabBarIcon"
import { AllScreen, ActiveScreen, CompletedScreen } from "../screens/TabsScreen"
import AddTodoScreen from "../screens/AddTodoScreen"
import DetailTodoScreen from "../screens/DetailTodoScreen"

const ListTabs = createBottomTabNavigator(
  {
    All: AllScreen,
    Active: ActiveScreen,
    Completed: CompletedScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarLabel: navigation.state.routeName,
      tabBarIcon: ({ focused }) => {
        let iconName
        switch (navigation.state.routeName) {
          case "All":
            iconName = Platform.OS === "ios" ? "ios-today" : "md-today"
            break

          case "Active":
            iconName =
              Platform.OS === "ios"
                ? `ios-information-circle${focused ? "" : "-outline"}`
                : "md-information-circle"
            break

          case "Completed":
            iconName = Platform.OS === "ios" ? "ios-done-all" : "md-done-all"
            break
        }

        return <TabBarIcon focused={focused} name={iconName} />
      }
    })
  }
)

const TodayStack = createStackNavigator(
  {
    ListTodo: ListTabs,
    AddTodo: AddTodoScreen,
    DetailTodo: DetailTodoScreen
  },
  {
    initialRouteName: "ListTodo",
    defaultNavigationOptions: ({ navigation }) => ({
      title: navigation.state.params && navigation.state.params.title
    })
  }
)

const drawerNavigator = createDrawerNavigator({
  TODAY: TodayStack
})

export default drawerNavigator

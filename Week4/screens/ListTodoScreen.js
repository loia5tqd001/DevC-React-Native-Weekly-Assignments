import React, { useEffect } from "react"
import { FlatList, View, StyleSheet } from "react-native"
import COLORS from "../constants/Colors"
import TodoItem from "../components/TodoItem"
import { getKey } from "../mock-data"
import FabButton from '../components/FabButton'

export default function ListTodoScreen(props) {
  // useEffect(() => {
  //   const completed = 1
  //   const total = 12
  //   const title = `TODO (${completed}/${total})`
  //   props.navigation.navigate("All", { title })
  // }, [])
  // TODO: Remove

  return (
    <View style={styles.container}>
      <FlatList
        // inverted
        data={props.todo}
        renderItem={({ item }) => <TodoItem {...props} {...item} />}
        keyExtractor={item => getKey(item)}
      />
      <FabButton iconName="add" onPress={() => props.navigation.push("AddTodo")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  addButtonContainer: {
    marginRight: 20,
    marginBottom: 20
  },
  addButton: {
    backgroundColor: COLORS.tintColorMedium
  }
})

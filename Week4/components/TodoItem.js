import React, { useState } from "react"
import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native"
import COLORS from "../constants/Colors"
import TodoStore, {
  TOGGLE_TODO,
  DELETE_TODO,
  useStore
} from "../stores/TodoStore"
import { findIndex } from "../mock-data"
import ld from "lodash"
import IconButton from './IconButton'
import TodoContent from "./TodoContent"

function getColor (isCompleted) {
  return isCompleted ? COLORS.tintColorLight : COLORS.tintColor
}

export default function TodoItem(props) {
  const [todo, dispatchTodo] = useStore(TodoStore)

  const toggleTodo = () => {
    dispatchTodo({
      type: TOGGLE_TODO,
      index: findIndex(todo, props)
    })
  }

  const deleteTodo = () => {
    Alert.alert(
      "Delete your task?",
      `"${ld.startCase(props.task.toLowerCase())}"`, //https://stackoverflow.com/a/38084493/9787887
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            dispatchTodo({
              type: DELETE_TODO,
              index: findIndex(todo, props)
            })
          }
        }
      ],
      { cancelable: true }
    )
  }

  const viewDetail = () => {
    props.navigation.push("DetailTodo", { index: findIndex(todo, props) })
  }

  return (
    <TouchableOpacity
      style={styles.row}
      onPress={viewDetail}
      onLongPress={deleteTodo}>
      <IconButton
        name={`ios-checkmark-circle${props.isCompleted ? "" : "-outline"}`}
        onPress={toggleTodo}
        color={getColor(props.isCompleted)}
      />
      <TodoContent {...props} />
      <IconButton
        name="ios-remove-circle"
        onPress={deleteTodo}
        color={getColor(props.isCompleted)}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    height: 80,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1
  },
})

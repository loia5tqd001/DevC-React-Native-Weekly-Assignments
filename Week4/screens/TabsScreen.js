import React, { useEffect } from "react"
import ListTodoScreen from "./ListTodoScreen"
import TodoStore, { useStore } from "../stores/TodoStore"

// ====== AllScreen ======
export function AllScreen(props) {
  const [todo] = useStore(TodoStore)
    // useEffect(() => {
    //   const completed = 1
    //   const total = 12
    //   const title = `TODO (${completed}/${total})`
    //   props.navigation.navigate("All", { title })
    // }, [])
  return <ListTodoScreen navigator={AllScreen} todo={todo} {...props} />
}

// ====== ActiveScreen ======
export function ActiveScreen(props) {
  const [todo] = useStore(TodoStore)
  return (
    <ListTodoScreen todo={todo.filter(item => !item.isCompleted)} {...props} />
  )
}

// ====== CompletedScreen ======
export function CompletedScreen(props) {
  const [todo] = useStore(TodoStore)
  return (
    <ListTodoScreen todo={todo.filter(item => item.isCompleted)} {...props} />
  )
}

import { createStore, useStore } from "react-hookstore"
import mockData from '../mock-data'

const TodoStore = createStore("todo-store", mockData, reducer)

export const ADD_TODO = "add-todo"
export const UPDATE_TODO = "update-todo"
export const TOGGLE_TODO = "toggle-todo"
export const DELETE_TODO = "delete-todo"

function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.item]

    case UPDATE_TODO:
      const copy = [...state]
      copy.splice(action.index, 1, action.item)
      return copy

    case TOGGLE_TODO:
      const item = state[action.index]
      const toggledItem = { ...item, isCompleted: !item.isCompleted }
      
      return reducer(state, {
        type: UPDATE_TODO,
        index: action.index,
        item: toggledItem
      })

    case DELETE_TODO:
      return state.filter((_, index) => index !== action.index)

    default:
      return state
  }
}

export default TodoStore
export { useStore }

import React, { useState } from "react"
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Alert
} from "react-native"
import COLORS from "../constants/Colors"
import { Item, Label, Input, Textarea } from "native-base"
import TodoStore, { useStore, UPDATE_TODO } from "../stores/TodoStore"
import FabButton from "../components/FabButton"

export default function AddTodoScreen({ navigation }) {
  const [todo, dispatchTodo] = useStore(TodoStore)

  const { index } = navigation.state.params
  const [task, setTask] = useState(todo[index].task)  
  const [description, setDescription] = useState(todo[index].description)

  const updateTodo = () => {
    if (!task.trim()) {
      Alert.alert("Cannot complete", "Please fill in the task title")
      return
    }

    Alert.alert("Update this task?", `"${task}"`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            dispatchTodo({
              type: UPDATE_TODO,
              index,
              item: {
                ...todo[index],
                createdDate: new Date(),
                task,
                description
              }
            })
            navigation.pop()
          }
        }
      ],
      { cancelable: true }
    )
  }

  return (
    <KeyboardAvoidingView enabled behavior="height" style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.form}>
          <Item floatingLabel style={styles.taskInput}>
            <Label style={{ color: COLORS.tintColorMedium }}>Task...</Label>
            <Input
              value={task}
              onChangeText={text => setTask(text)}
              style={{ color: COLORS.tintColorMedium }}
            />
          </Item>
          <Text style={styles.date}>{todo[index].createdDate.toLocaleString()}</Text>
          <Textarea
            value={description}
            style={styles.description}
            rowSpan={15}
            bordered
            placeholder="Description..."
            placeholderTextColor={COLORS.tintColorMedium}
            onChangeText={text => setDescription(text)}
          />
        </View>
      </ScrollView>
      <FabButton iconName="checkmark" onPress={updateTodo} />
    </KeyboardAvoidingView>
  )
}

AddTodoScreen.navigationOptions = {
  title: "Update Task"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  form: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 20
  },
  taskInput: {
    marginBottom: 10,
    fontSize: 20,
    borderBottomColor: COLORS.tintColorMedium
  },
  date: {
    textAlign: "right",
    marginTop: 5,
    marginBottom: 15,
    fontSize: 15,
    color: COLORS.tintColorMedium
  },
  description: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 20,
    borderColor: COLORS.tintColorMedium,
    color: COLORS.tintColorMedium
  }
})

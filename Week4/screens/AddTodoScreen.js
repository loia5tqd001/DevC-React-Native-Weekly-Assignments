import React, { useRef } from "react"
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView, Alert } from "react-native"
import COLORS from "../constants/Colors"
import { Item, Label, Input, Textarea } from "native-base"
import TodoStore, { ADD_TODO, useStore } from "../stores/TodoStore"
import FabButton from "../components/FabButton"

export default function AddTodoScreen({ navigation }) {
  const [, dispatchTodo] = useStore(TodoStore)
  const taskRef = useRef("")
  const descriptionRef = useRef("")
  const dateCreated = new Date()

  const addTodo = () => {
    if (!taskRef.current.trim()) {
      Alert.alert("Cannot complete", "Please fill in the task title")
      return
    }

    Alert.alert(
      "Add this task?",
      `"${taskRef.current}"`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            dispatchTodo({
              type: ADD_TODO,
              item: {
                task: taskRef.current,
                createdDate: dateCreated,
                isCompleted: false,
                description: String(descriptionRef.current)
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
            <Label style={{ color: COLORS.tintColorMedium }}>
              Task...
            </Label>
            <Input
              onChangeText={text => (taskRef.current = text)}
              style={{ color: COLORS.tintColorMedium }}
            />
          </Item>
          <Text style={styles.date}>{dateCreated.toLocaleString()}</Text>
          <Textarea
            style={styles.description}
            rowSpan={15}
            bordered
            placeholder="Description..."
            placeholderTextColor={COLORS.tintColorMedium}
            onChangeText={text => (descriptionRef.current = text)}
          />
        </View>
      </ScrollView>
      <FabButton iconName="checkmark" onPress={addTodo} />
    </KeyboardAvoidingView>
  )
}

AddTodoScreen.navigationOptions = {
  title: "Create Task"
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

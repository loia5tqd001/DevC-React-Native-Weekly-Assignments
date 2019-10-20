import React, { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import COLORS from "../constants/Colors"

export default function TodoContent({ task, createdDate, isCompleted }) {
  const taskStyle = isCompleted
    ? {
      ...styles.task,
      color: COLORS.tintColorLight,
      textDecorationLine: "line-through"
    }
    : {
      ...styles.task,
      color: COLORS.tintColor,
      fontWeight: "bold"
    }

  const dateStyle = {
    ...styles.date,
    color: isCompleted ? COLORS.tintColorLight : COLORS.tintColor
  }

  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={taskStyle}>
        {task}
      </Text>
      <Text numberOfLines={1} style={dateStyle}>
        {new Date(createdDate).toLocaleString()}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  task: {
    fontSize: 20,
    textTransform: "capitalize"
  },
  date: {
    fontSize: 15
  }
})

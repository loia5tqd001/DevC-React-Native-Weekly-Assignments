import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function IconButton ({ name, color, onPress}) {
  return (
    <TouchableOpacity style={styles.iconButton} onPress={onPress}>
      <Ionicons name={name} color={color} size={35} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: "100%"
  }
})
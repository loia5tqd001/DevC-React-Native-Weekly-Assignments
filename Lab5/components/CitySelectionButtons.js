import React, { useState } from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { CITIES, getWeatherBackgroundImage, getWeatherIcon } from "../utils"

export default function(props) {
  return (
    <View style={styles.cityContainer}>
      <TouchableOpacity
        key="currentLocation"
        style={styles.currentLocation}
        onPress={() => props.onChooseCity("")}>
        <Text style={styles.cityName}>Current Location</Text>
      </TouchableOpacity>
      {CITIES.map(city => (
        <TouchableOpacity
          key={city.name}
          style={styles.cityButton}
          onPress={() => props.onChooseCity(city.name)}>
          <Text style={styles.cityName}>{city.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  cityContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  currentLocation: {
    margin: 3,
    height: 40,
    padding: 3,
    width: "72.5%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(20,33,61,0.6)"
  },
  cityName: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  cityButton: {
    margin: 3,
    height: 40,
    padding: 3,
    width: "25%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  }
})

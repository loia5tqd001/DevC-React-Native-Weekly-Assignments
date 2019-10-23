import React, { useState } from 'react'
import { View, StyleSheet, Text, ActivityIndicator } from "react-native"
import { CITIES, getWeatherBackgroundImage, getWeatherIcon } from "../utils"
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons"

export default function WeatherCard ({ location, error, loading }) {
  const temperatureC = (location.main.temp - 273.15).toFixed(2)
  const temperatureF = (((location.main.temp - 273.15) * 9) / 5 + 32).toFixed(2)
  const description = location.weather[0].description
  const windSpeed = location.wind.speed
  const icon = location.weather[0].main

  const capitalizedDescription =
    description && description.charAt(0).toUpperCase() + description.slice(1)

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error fetching weather!</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.weatherContainer}>
        {loading && <ActivityIndicator />}
        <View style={styles.row}>
          <MaterialIcons name="location-city" size={25} color="lightgrey" />
          <Text style={styles.locationText}>{location.name}</Text>
        </View>
        <View style={[styles.row, { marginTop: 10 }]}>
          <MaterialCommunityIcons
            size={25}
            color="lightgrey"
            name="speedometer"
          />
          <Text style={styles.text}>{windSpeed}</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons
            size={25}
            color="lightgrey"
            name={getWeatherIcon(icon)}
          />
          <Text style={styles.text}>{capitalizedDescription}</Text>
        </View>

        <View style={styles.tempRow}>
          <View style={styles.row}>
            <MaterialCommunityIcons
              size={25}
              color="lightgrey"
              name="temperature-fahrenheit"
            />
            <Text style={styles.text}>{temperatureF}</Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons
              size={25}
              color="lightgrey"
              name="temperature-celsius"
            />
            <Text style={styles.text}>{temperatureC}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  weatherContainer: {
    padding: 20,
    width: "90%",
    borderWidth: 1,
    maxWidth: "90%",
    minHeight: "20%",
    marginTop: "70%",
    borderRadius: 25,
    marginBottom: "2%",
    borderColor: "white",
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  tempRow: {
    alignSelf: "center",
    flexDirection: "row"
  },
  text: {
    fontSize: 20,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold"
  },
  locationText: {
    fontSize: 25,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
})
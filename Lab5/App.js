import React, { useState, useEffect } from "react"
import { StyleSheet, ImageBackground } from "react-native"
import * as Location from "expo-location"
import * as Permissions from "expo-permissions"
import CitySelectionButtons from "./components/CitySelectionButtons"
import WeatherCard from "./components/WeatherCard"
import { CITIES, getWeatherBackgroundImage, getWeatherIcon } from "./utils"

export default function App() {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState({
    name: "",
    main: { temp: "" },
    wind: { speed: "" },
    weather: [{ main: "", description: "" }]
  })

  onChooseCity = name => {
    let randImg = ""
    if (name !== "") {
      const city = CITIES.find(city => city.name === name)
      randImg = city.imgUrl[Math.floor(Math.random() * city.imgUrl.length)]
      getWeather(city.latitude, city.longitude, randImg)
    } else {
      getLocationAsync()
    }
  }

  useEffect(() => {
    getWeather = async (latitude, longitude, imgUrl = "") => {
      setLoading(true)
      const API_KEY = "3de6162d3745365b168ade2bbe4e1d66"
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

      try {
        const response = await fetch(api)
        const jsonData = await response.json()
        setLocation({ ...jsonData, imgUrl })
      } 
      catch {
        setError(true)
      }
      setLoading(false)
    }

    getLocationAsync = async () => {
      const permissionResonponse = await Permissions.askAsync(Permissions.LOCATION)
      if (permissionResonponse.status !== "granted") {
        return
      }

      const location = await Location.getCurrentPositionAsync()
      getWeather(location.coords.latitude, location.coords.longitude)
      // getWeather(10.817141, 106.707954)
    }

    getLocationAsync()
  }, [])

  const bgImage = {
    uri: location.imgUrl || getWeatherBackgroundImage(location.weather[0].main)
  }

  return (
    <ImageBackground source={bgImage} style={styles.bg}>
      <WeatherCard location={location} error={error} loading={loading} />
      <CitySelectionButtons onChooseCity={onChooseCity} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "black"
  },
})

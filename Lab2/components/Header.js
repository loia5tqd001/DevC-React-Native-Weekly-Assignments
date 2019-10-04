import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'

const Header = () => {
  const logoUri = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: logoUri }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Feather
        style={{ position: "absolute", right: 10 }}
        name="inbox"
        size={27}
        color="black"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#f3f6fa",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: '100%', 
    height: 55,
  }
})

export default Header
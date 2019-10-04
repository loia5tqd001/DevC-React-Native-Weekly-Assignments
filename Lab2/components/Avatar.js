import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const Avatar = ({ uri, name }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri }} 
        style={styles.image} 
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 10
  },
  name: {
    fontSize: 18,
    fontWeight: '600'
  }
})

export default Avatar

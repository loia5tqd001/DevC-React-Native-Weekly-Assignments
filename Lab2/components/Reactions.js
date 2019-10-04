import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Feather, FontAwesome } from "@expo/vector-icons"

const Reactions = ({ likeCount }) => {
  return (
    <>
      {/* Like, Comment, Share action */}
      <View style={styles.row}>
        <Reaction name="heart"/>
        <Reaction name="message-square"/>
        <Reaction name="share"/>
      </View>

      {/* How many liked */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => alert(`${likeCount} liked`)}>
          <FontAwesome 
            style={styles.reaction} 
            name="heart" 
            size={27} 
            color="black"
          />
        </TouchableOpacity>
        <Text style={styles.likeText}>{likeCount} likes</Text>
      </View>
    </>
  )
}

const Reaction = ({ name }) => {
  return (
    <Feather 
      style={styles.reaction} 
      name={name}
      size={30} 
      color="black" 
    />
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    minHeight: 55,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  reaction: {
    margin: 5
  },
  likeText: {
    marginHorizontal: 5,
    fontWeight: '400'
  }
})

export default Reactions

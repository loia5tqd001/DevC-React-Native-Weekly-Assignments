import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Avatar from './Avatar'
import Reactions from './Reactions'

const Post = ({ avatarUri, imageUri, name, likeCount }) => {
  return (
    <View>
      <Avatar 
        uri={avatarUri} 
        name={name} 
      />
      <Image 
        source={{ uri: imageUri }} 
        style={ styles.photo }
        resizeMode="cover"
      />
      <Reactions likeCount={ likeCount }/>
    </View>
  )
}

const styles = StyleSheet.create({
  photo: {
    width: '100%',
    height: 300
  }
})


export default Post

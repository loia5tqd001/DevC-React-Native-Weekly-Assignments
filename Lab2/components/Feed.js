import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Post from './Post'

const Feed = ({ feedData }) => {
  return (
    <FlatList
      data={feedData}
      renderItem={({item}) => <Post {...item}/>}
      keyExtractor={item => String(item.id)}
    />
  )
}

export default Feed


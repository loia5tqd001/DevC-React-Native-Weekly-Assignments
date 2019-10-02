import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native"
import Constants from "expo-constants"
import { Ionicons } from '@expo/vector-icons';

// const photoData = [
//   { id: 1, imgSource: { uri: "https://source.unsplash.com/random/800x601" } },
//   { id: 2, imgSource: { uri: "https://source.unsplash.com/random/800x602" } },
//   { id: 3, imgSource: { uri: "https://source.unsplash.com/random/800x603" } },
//   { id: 4, imgSource: { uri: "https://source.unsplash.com/random/800x604" } },
//   { id: 5, imgSource: { uri: "https://source.unsplash.com/random/800x605" } },
//   { id: 6, imgSource: { uri: "https://source.unsplash.com/random/800x606" } },
//   { id: 7, imgSource: { uri: "https://source.unsplash.com/random/800x607" } },
//   { id: 8, imgSource: { uri: "https://source.unsplash.com/random/800x608" } }
// ]

// const photoData = [...Array(30)].map((_, idx) => {
//   return {
//     id: idx,
//     imgSource: { uri: `https://source.unsplash.com/random/800x60${idx}` }
//   }
// })

const photoData = Array.from({length: 10}, (_, id) => {
  return {
    id,
    imgSource: { uri: `https://source.unsplash.com/random/800x60${id}` }
  }
})

export default function App() {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://i.pravatar.cc/300" }}
        />
        <View style={styles.userInfo}>
          <Text style={styles.nameText}>N. Huynh Loi</Text>
          <Text style={styles.jobText}>Frontend .Jr</Text>
          <View style={styles.buttonsWrapper}>
            <TouchableOpacity style={[ styles.followButton, styles.shadowButton ]}>
              <Text style={styles.followText}> Follow </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[ styles.sendMessageButton, styles.shadowButton ]}>
              <Ionicons name="md-send" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* User follow */}
      <View style={styles.userFollow}>
        <TouchableOpacity style={styles.followElement}>
          <Text style={styles.followCount}>210</Text>
          <Text style={styles.followType}>Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.followElement}>
          <Text style={styles.followCount}>69m</Text>
          <Text style={styles.followType}>Followers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.followElement}>
          <Text style={styles.followCount}>605</Text>
          <Text style={styles.followType}>Following</Text>
        </TouchableOpacity>
      </View>

      {/* Photos */}
      <View style={styles.photos}>
        <FlatList 
          data={photoData}
          keyExtractor={item => String(item.id)}
          numColumns={2}
          // contentContainerStyle={styles}
          // columnWrapperStyle={{flex: 1, justifyContent: "space-between"}}
          // ItemSeparatorComponent={() => <View style={{ width: 10, color: "pink" }}/>}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={shadow}>
                <Image 
                  style={styles.photo} 
                  source={item.imgSource}
                />
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </View>
  )
}

const POLO_BLUE_COLOR = "rgb(51,60,87)"
const FOLLOW_COLOR = "rgb(71,113,246)"
const SEND_MESSAGE_COLOR = "rgb(120,213,250)"

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.15,
  shadowRadius: 3.84,
}
const lightShadow = {
  ...shadow,
  shadowOpacity: 0.02,
  shadowOffset: {
    width: 0,
    height: 5
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // margin: 10,
    paddingTop: Constants.statusBarHeight
  },
  header: {
    flex: 0.23,
    flexDirection: "row"
  },
  userFollow: {
    flex: 0.15,
    flexDirection: "row",
  },
  photos: {
    // marginLeft: -10,
    // marginRight: -10,
    flex: 0.62,
    alignItems: "center"
  },

  avatar: {
    alignSelf: "center",
    width: 110,
    height: 110,
    borderRadius: 55,
    margin: 20
  },
  userInfo: {
    flex: 1,
    justifyContent: "center"
  },
  nameText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black"
  },
  jobText: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 5,
    marginBottom: 20,
    color: "gray"
  },

  buttonsWrapper: {
    flexDirection: "row"
  },
  shadowButton: {
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    ...shadow,
  },
  followButton: {
    backgroundColor: FOLLOW_COLOR,
    width: 110,
    marginRight: 10,
    marginLeft: -5
  },
  followText: {
    color: "white",
    fontSize: 15
  },
  sendMessageButton: {
    backgroundColor: SEND_MESSAGE_COLOR,
    width: 50,
  },

  followElement: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 5,
    marginHorizontal: 10,
    borderRadius: 15,
    ...lightShadow,
  },
  followCount: {
    fontSize: 22,
    fontWeight: "500"
  },
  followType: {
    fontSize: 15,
    color: "gray"
  },

  photo: {
    width: 150,
    height: 150,
    borderRadius: 10,
    margin: 10,
    ...lightShadow
  }

})



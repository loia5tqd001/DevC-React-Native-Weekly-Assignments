import React from "react"
import { StyleSheet, Text, View, Linking } from "react-native"
import moment from "moment"
import { Card, Button, Icon } from "react-native-elements"

export default function Article({
  title,
  urlToImage,
  source,
  content,
  publishedAt,
  url
}) {
  
  const openUrl = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url)
      } else {
        console.log(`Don't know how to open URL: ${url}`)
      }
    })
  }

  return (
    <Card title={title} image={{ uri: urlToImage }}>
      <Text style={{ marginBottom: 10 }}>{content}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Source</Text>
        <Text style={styles.info}>{source.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Published</Text>
        <Text style={styles.info}>{moment(publishedAt).format("LLL")}</Text>
      </View>
      <Button
        onPress={() => openUrl(url)}
        icon={<Icon />}
        title="Read more"
        backgroundColor="#03A9F4"
      />
    </Card>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginBottom: 5
  },
  label: {
    fontSize: 16,
    color: "black",
    marginRight: 10,
    fontWeight: "bold"
  },
  info: {
    fontSize: 16,
    color: "grey"
  }
})

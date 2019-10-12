import React, { Component } from "react"
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native"
import Constants from "expo-constants"
import * as MyUtils from "./utils.js"

export default class App extends Component {
  initState = {
    userScore: 0,
    computerScore: 0,
    userChoice: "rock-paper-scissors-init",
    computerChoice: "rock-paper-scissors-init",
    userStatus: "init"
  }
  state = this.initState

  onChoose(choice) {
    const userChoice = choice.name
    const computerChoice = MyUtils.getComputerChoice().name

    this.setState({ userChoice })
    this.setState({ computerChoice })

    switch (MyUtils.getWinner(userChoice, computerChoice)) {
      case MyUtils.COMPUTER_WIN_STRING:
        this.setState(prevState => ({
          computerScore: prevState.computerScore + 1
        }))
        this.setState({ userStatus: "lose" })
        break;

      case MyUtils.USER_WIN_STRING:
        this.setState(prevState => ({
          userScore: prevState.userScore + 1
        }))
        this.setState({ userStatus: "win" })
        break;
        
      case MyUtils.DRAW_STRING:
        this.setState({ userStatus: "draw" })
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Rock Paper Scissors</Text>

        <View sytle={styles.scoreBoard}>
          <Text style={styles.scores}>
            {this.state.userScore}:{this.state.computerScore}
          </Text>
          <Text style={[styles.label, styles.user]}>user</Text>
          <Text style={[styles.label, styles.comp]}>comp</Text>
        </View>

        <Text style={[styles.result, 
          this.state.userStatus === "win" ? { color: "#50a69a" } : 
          this.state.userStatus === "lose" ? { color: "#e2584d" } :
          { color: "white" }
        ]}>
          {MyUtils.getStatusString(this.state)}
        </Text>

        <View style={styles.choiceContainer}>
          {MyUtils.CHOICES.map(choice => (
            <TouchableOpacity
              key={choice.name}
              onPress={() => this.onChoose(choice)}>
              <Image source={choice.image} style={styles.choice} />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.chooseStatement}>Make your move.</Text>

        <TouchableOpacity 
          style={styles.resetButtonWrapper}
          onPress={() => this.setState(this.initState)}
        >
          <Text style={styles.resetButton}>Reset</Text>
        </TouchableOpacity>
      </View>
    ) 
  }
}

const text = {
  fontWeight: "500",
  color: "white",
  textAlign: "center"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#2c3a40"
  },
  title: {
    fontWeight: "500",
    fontSize: 30,
    backgroundColor: "white",
    color: "#2c3a40",
    width: "100%",
    textAlign: "center",
    padding: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  scoreBoard: {},
  scores: {
    ...text,
    width: 200,
    height: 60,
    borderColor: "white",
    borderWidth: 3,
    fontSize: 40,
    marginVertical: 20
  },
  label: {
    position: "absolute",
    top: 35,
    backgroundColor: "#e2584d",
    fontSize: 20,
    width: 55,
    height: 30,
    ...text
  },
  user: {
    left: -25
  },
  comp: {
    right: -25
  },
  result: {
    ...text,
    fontSize: 22,
    marginBottom: 60
  },
  choiceContainer: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row"
  },
  choice: {
    width: 140,
    height: 140,
    borderRadius: 70
  },
  chooseStatement: {
    ...text,
    fontSize: 24,
    marginTop: 10
  },
  resetButtonWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  resetButton: {
    ...text,
    fontSize: 40,
    borderColor: "white",
    borderWidth: 2,
    paddingHorizontal: 35,
    paddingVertical: 5,
  }
})

export const CHOICES = [
  {
    name: "rock",
    image: require("./assets/rock.png")
  },
  {
    name: "paper",
    image: require("./assets/paper.png")
  },
  {
    name: "scissors",
    image: require("./assets/scissors.png")
  }
]

export const getComputerChoice = () => {
  const index = ~~(Math.random() * CHOICES.length)
  return CHOICES[index]
}

export const capitalize = (s) => {
  if (typeof s !== "string") return ""
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const USER_WIN_STRING = "user"
export const COMPUTER_WIN_STRING = "computer"  
export const DRAW_STRING = "draw"

export const getWinner = (userChoice, computerChoice) => {
  userChoice = userChoice.charAt(0).toLowerCase()
  computerChoice = computerChoice.charAt(0).toLowerCase()

  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      return USER_WIN_STRING

    case "rr":
    case "ss":
    case "pp":
      return DRAW_STRING

    case "rp":
    case "ps":
    case "sr":
      return COMPUTER_WIN_STRING
      
    default:
      console.warn("Something's wrong in utils.js -> isUserWin()")
  }
}

export const getStatusString = ({ userChoice, computerChoice, userStatus }) => {
  if (userStatus === "init") {
    return "Welcome to Rock Paper Scissors!!!"
  }
  if (userStatus === "win") {
    return `${capitalize(userChoice)} covers ${capitalize(computerChoice)}. You Win.`
  }
  else if (userStatus === "lose") {
    return `${capitalize(computerChoice)} covers ${capitalize(userChoice)}. Computer Win.`
  }
  else {
    return `${capitalize(computerChoice)} with ${capitalize(userChoice)}. Draw.`
  }
}
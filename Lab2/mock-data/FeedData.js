/**
 |--------------------------------------------------
 | Feed data is generated randomly
 |--------------------------------------------------
 */

const numberOfPosts = randomInteger(10, 15)

const FeedData = [...Array(numberOfPosts)].map((_, i) => {
  return {
    id: i,
    avatarUri: "https://i.pravatar.cc/2" + randomInteger(50, 99),
    imageUri: "https://source.unsplash.com/random/800x6" + randomInteger(50, 99),
    name: randomName(),
    likeCount: randomInteger(0, 1000)
  }
})

function randomInteger(from, to) {
  return ~~(from + Math.random() * (to - from))
}

function randomName() {
  // List random name found from here: http://listofrandomnames.com/index.cfm?textarea
  const list = `
  Allegra Arredondo  
  Lonny Dearborn  
  Jodi Jeff  
  Awilda Remigio  
  Eura Mukai  
  Tenisha Jaynes  
  Nichol Kubacki  
  Aline Poisson  
  Sanda Romer  
  Gil Goehring  
  Margret Newland  
  Arlena Denning  
  Patricia Turnquist  
  Deedee Cull  
  Helena Bettcher  
  Gidget Joyal  
  Bambi Donoghue  
  Clementine Scanlon  
  Sherilyn Lovins  
  Elwanda Woodley
  `.split('\n')

  const randomIndex = randomInteger(0, list.length)
  return list.slice(randomIndex, randomIndex + 1)
}

export default FeedData
// const game = () => {
//   let userName = prompt('What is your name adventurer ?')
//   alert(`Hello ${userName}`)
//   alert(`Lets Play`)
// }
// game()

//All javascript logic for game

//Need global variables

//Need function for win

//Need function for counter for moves made/missed moves

//Need function for when game begins shows all cards

//Need function for random card placement on board

//Need function/event/promp that tells user congrats when clearing the board

//Need set timer

//Need Scoreboard

//

//creating a cards array with all the cards in them ? two for each card
//it includes the name of the card and the img source of the card
let counter = 0
let comparison = []
const cardsArray = [
  'chicken',
  'chicken',
  'creeper',
  'creeper',
  'diamond',
  'diamond',
  'dirt',
  'dirt',
  'horse',
  'horse',
  'pickaxe',
  'pickaxe',
  'pig',
  'pig',
  'pigman',
  'pigman',
  'skeleton',
  'skeleton',
  'spider',
  'spider',
  'TNT',
  'TNT',
  'enderman',
  'enderman'
]
//Grid board for the cards pulled from HTML
const grid = document.querySelector('.grid')
//Creating the board for the cards
function createGameBoard() {
  shuffleArray(cardsArray)

  //generate random number in for Loop (shuffle)
  //random number based on length of cardArray so it doesnt assign anything outside of that
  for (let i = 0; i < cardsArray.length; i++) {
    let card = document.createElement('img')
    //eventually replace i with random image.

    card.setAttribute('src', 'Photos/Minecraft/backCard.png')
    card.setAttribute('id', i)
    grid.appendChild(card)
    //need to creat an event listener but it goes here ?
    card.addEventListener('click', clickClick)
  }
}

function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5)
}
function clickClick(event) {
  console.log(event.target.id)
  if (comparison.length < 2) {
    let index = event.target.id
    flippingCards(index)
    makeComparisonArray(index)
  }
}

function flippingCards(index) {
  document
    .getElementById(index)
    .setAttribute('src', `Photos/Minecraft/${cardsArray[index]}.png`)
}

function makeComparisonArray(index) {
  comparison.push(index)
  if (comparison.length === 2) {
    //set timer
    setTimeout(() => checkComparison(), 1000)

    //checkComparison()
  }
}

function checkComparison() {
  let card1 = cardsArray[comparison[0]]
  let card2 = cardsArray[comparison[1]]
  if (card1 === card2) {
    handleMatch()
    // counter = 0
    // let score = document.querySelector('#score')
    // score++
    // document.querySelector('#score') = score
  } else {
    misMatch()
    //set timeout
  }
  comparison = []
}

function handleMatch() {
  //removes 2 cards that match from board
  document
    .getElementById(comparison[0])
    .setAttribute('src', 'Photos/Minecraft/blank.png')
  document
    .getElementById(comparison[1])
    .setAttribute('src', 'Photos/Minecraft/blank.png')
}

function misMatch() {
  document
    .getElementById(comparison[0])
    .setAttribute('src', 'Photos/Minecraft/backCard.png')
  document
    .getElementById(comparison[1])
    .setAttribute('src', 'Photos/Minecraft/backCard.png')
}
createGameBoard()

// flipping the board

//Math logic

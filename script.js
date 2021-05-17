let counter = 0
let score = document.querySelector('#score')
let madeDisplay = document.querySelector('.madeDisplay')
let missedDisplay = document.querySelector('.missedDisplay')
let madeTracker = 0
let missedTracker = 0
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
  madeDisplay.innerHTML = madeTracker
  missedDisplay.innerHTML = missedTracker
  shuffleArray(cardsArray)

  //generate random number in for Loop (shuffle)
  //random number based on length of cardArray so it doesnt assign anything outside of that
  for (let i = 0; i < cardsArray.length; i++) {
    let card = document.createElement('img')

    card.setAttribute('src', 'Photos/Minecraft/backCard.png')
    card.setAttribute('id', i)

    grid.appendChild(card)

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
  }
}

function checkComparison() {
  let card1 = cardsArray[comparison[0]]
  let card2 = cardsArray[comparison[1]]
  if (card1 === card2) {
    madeTracker++
    madeDisplay.innerHTML = madeTracker
    handleMatch()
  } else {
    missedTracker++
    missedDisplay.innerHTML = missedTracker
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

function restart() {
  grid.innerHTML = null
  madeTracker = 0
  missedTracker = 0
  createGameBoard()
}

createGameBoard()

document.querySelector('.restart').addEventListener('click', restart)

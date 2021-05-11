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

//Need function for flipping cards over when clicked

//Need function for flipping cards back over when clicked and are wrong

//Need function for eliminating cards off the board when matched

//Need function for when game begins shows all cards

//Need function for random card placement on board

//Need function/event/promp that tells user congrats when clearing the board

//

//creating a cards array with all the cards in them ? two for each card
//it includes the name of the card and the img source of the card
let comparison = []

const cardsArray = [
  {
    name: 'Chicken',
    img: 'Photos/Minecraft/Chicken.png'
  },
  {
    name: 'Chicken',
    img: 'Photos/Minecraft/Chicken.png'
  },
  {
    name: 'creeper',
    img: 'Photos/Minecraft/creeper.png'
  },
  {
    name: 'creeper',
    img: 'Photos/Minecraft/creeper.png'
  }
]

//Grid board for the cards pulled from HTML
const grid = document.querySelector('.grid')
//Creating the board for the cards
function createGameBoard() {
  for (let i = 0; i < cardsArray.length; i++) {
    let card = document.createElement('img')
    //eventually replace i with random image.
    card.setAttribute('src', 'Photos/Minecraft/BackCard.jpeg')
    card.setAttribute('id', i)
    grid.appendChild(card)
    //need to creat an event listener but it goes here ?
    card.addEventListener('click', clickClick)
  }
}
createGameBoard()

function clickClick(event) {
  console.log(event.target.id)
  if (comparison.length < 2) {
    let index = event.target.id
    flippingCards(index)
    makeComparisonArray(index)
  }
}

function flippingCards(index) {
  document.getElementById(index).setAttribute('src', cardsArray[index].img)
}

function makeComparisonArray(index) {
  comparison.push(index)
  if (comparison.length === 2) {
    checkComparison()
  }
}

function checkComparison() {
  console.log('running')
  let card1 = cardsArray[comparison[0]].img
  let card2 = cardsArray[comparison[1]].img
  if (card1 === card2) {
    handleMatch()
  } else {
    misMatch()
  }
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

function misMatch() {}

// flipping your card (or the idea of it flipping)

//

// }

// flipping the board

// check for matching cards

//for loop to add event listeners to each card
// for (var i = 0; i < cardArr.length; i++){
//   cardArr[i].addEventListener("click",);
// };

// //event listener (example)
// //document.getElementById("myBtn").addEventListener("click", displayDate);

// // window.onload = function (event) {
// //   // Random quote of the day generator
// //   const randomQuote = function () {
// //     document.querySelector('#quote-of-the-day').textContent = `"${
// //       quotes[Math.floor(Math.random() * quotes.length)]
// //     }"`
// //   }
// //   randomQuote()

// // document.querySelectorAll('.cell').forEach(function (cell) {
//   cell.addEventListener('click', makeYourMove)
// })

// document.querySelector('.button').addEventListener('click', startGame)

// // document.querySelectorAll('.cell').forEach(function (cell) {
// //   cell.addEventListener('click', makeYourMove)
// // })

// // document.querySelector('.button').addEventListener('click', startGame)

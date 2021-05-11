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
    var card = document.createElement('img')
    card.setAttribute('src', 'Photos/Minecraft/BackCard.jpeg')
    card.setAttribute('img-id', i)
    grid.appendChild(card)
    //need to creat an event listener but it goes here ?
    //card.addEventListener('click')
  }
}
createGameBoard()

// flipping your card (or the idea of it flipping)

function flippingCards(){
  var cardPhoto =

}


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

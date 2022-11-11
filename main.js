/************ CLICK EVENTS *************/
document.querySelector('.grid-container').addEventListener('click', playerMove)

document.querySelector('.reset').addEventListener('click', resetScore)

document.querySelector('.new-game').addEventListener('click', newGame)

/************ VARIABLES *************/
const grid = document.querySelector('.grid-container')
grid.setAttribute('playerTurn', 'player1')
grid.setAttribute('hasWon', false)
const player1Score = localStorage.getItem('player1Score')
const player2Score = localStorage.getItem('player2Score')
let arr = []

/************ ON PAGE LOAD *************/
if (player1Score) {
   document.querySelector('.scorep1').innerHTML = localStorage.getItem('player1Score')
}
if (player2Score) {
   document.querySelector('.scorep2').innerHTML = localStorage.getItem('player2Score')
}

document.querySelector('.player-turn').innerHTML = 'It\'s Player 1\'s turn'

/************ PLAYER OBJECT *************/
class Player {
   constructor(name) {
      this.name = name;
   }

   displayMarker(marker, color, textshadow) {
      let value = event.target.classList.value
      if (value.includes('square')) {
         document.querySelector(`.${value}`).innerHTML = marker
         document.querySelector(`.${value}`).style.color = color
         document.querySelector(`.${value}`).style.textShadow = textshadow
         console.log(value)
      }
   }
}

let player1 = new Player('player1')
let player2 = new Player('player2')

/************ FUNCTIONS *************/
function playerMove() {
   let turn = grid.getAttribute('playerturn')
   let value = event.target.classList.value
   let hasMarker = document.querySelector(`.${value}`).getAttribute('hasMarker')

   if (value.includes('square')) {
      document.querySelector(`.${value}`).setAttribute('hasMarker', true)
   }

   if (turn === 'player1') {
      if (hasMarker) {
         alert('Pick an empty square')
         return
      } else {
         player1.displayMarker('X')
         grid.setAttribute('playerTurn', 'player2')
      }
      document.querySelector('.player-turn').innerHTML = 'It\'s Player 2\'s turn'
   }

   if (turn === 'player2') {
      if (hasMarker) {
         alert('Pick an empty square')
         return
      } else {
         player2.displayMarker('O', '#ff00d0', '0 0 20px #ff00d0')
         grid.setAttribute('playerTurn', 'player1')
      }
      document.querySelector('.player-turn').innerHTML = 'It\'s Player 1\'s turn'
   }
   checkWin()
   checkForTie(event.target.classList.value)

   console.log(event.target.classList)
}

function updateScoreP1() {
   if (!player1Score) {
      localStorage.setItem('player1Score', 1)
      document.querySelector('.scorep1').innerHTML = localStorage.getItem('player1Score')
   }
   if (player1Score) {
      let parsed = JSON.parse(player1Score)
      parsed += 1
      localStorage.setItem('player1Score', parsed)
      document.querySelector('.scorep1').innerHTML = parsed
   }
}

function updateScoreP2() {
   if (!player2Score) {
      localStorage.setItem('player2Score', 1)
      document.querySelector('.scorep2').innerHTML = localStorage.getItem('player2Score')
   }
   if (player2Score) {
      let parsed = JSON.parse(player2Score)
      parsed += 1
      localStorage.setItem('player2Score', parsed)
      document.querySelector('.scorep2').innerHTML = parsed
   }
}

function checkForTie(square) {
   let hasWon = grid.getAttribute('hasWon')
   if (hasWon === 'true') {
      return
   } else {
      arr.push(square)
   }
   if (arr.length === 9) {
      displayWinner('It\'s a tie!')
   }
   console.log(arr)
}

function checkWin() {
   const player1 = 'Player 1 wins!'
   const player2 = 'Player 2 wins!'
   // HORIZONTAL COMBOS
   if ((document.querySelector('.square1').innerHTML === 'X') && (document.querySelector('.square2').innerHTML === 'X') && (document.querySelector('.square3').innerHTML === 'X')) {
      updateScoreP1()
      displayWinner(player1)
      grid.setAttribute('hasWon', true)
   }
   else if ((document.querySelector('.square1').innerHTML === 'O') && (document.querySelector('.square2').innerHTML === 'O') && (document.querySelector('.square3').innerHTML === 'O')) {
      updateScoreP2()
      displayWinner(player2)
      grid.setAttribute('hasWon', true)
   }
   else if ((document.querySelector('.square4').innerHTML === 'X') && (document.querySelector('.square5').innerHTML === 'X') && (document.querySelector('.square6').innerHTML === 'X')) {
      updateScoreP1()
      displayWinner(player1)
      grid.setAttribute('hasWon', true)
   }
   else if ((document.querySelector('.square4').innerHTML === 'O') && (document.querySelector('.square5').innerHTML === 'O') && (document.querySelector('.square6').innerHTML === 'O')) {
      updateScoreP2()
      displayWinner(player2)
      grid.setAttribute('hasWon', true)
   }
   else if ((document.querySelector('.square7').innerHTML === 'X') && (document.querySelector('.square8').innerHTML === 'X') && (document.querySelector('.square9').innerHTML === 'X')) {
      updateScoreP1()
      displayWinner(player1)
      grid.setAttribute('hasWon', true)
   }
   else if ((document.querySelector('.square7').innerHTML === 'O') && (document.querySelector('.square8').innerHTML === 'O') && (document.querySelector('.square9').innerHTML === 'O')) {
      updateScoreP2()
      displayWinner(player2)
      grid.setAttribute('hasWon', true)
   }
   // VERTICAL COMBOS
   else if ((document.querySelector('.square1').innerHTML === 'X') && (document.querySelector('.square4').innerHTML === 'X') && (document.querySelector('.square7').innerHTML === 'X')) {
      updateScoreP1()
      displayWinner(player1)
      grid.setAttribute('hasWon', true)
   }
   else if ((document.querySelector('.square1').innerHTML === 'O') && (document.querySelector('.square4').innerHTML === 'O') && (document.querySelector('.square7').innerHTML === 'O')) {
      updateScoreP2()
      displayWinner(player2)
      grid.setAttribute('hasWon', true)
   }
   else if ((document.querySelector('.square2').innerHTML === 'X') && (document.querySelector('.square5').innerHTML === 'X') && (document.querySelector('.square8').innerHTML === 'X')) {
      updateScoreP1()
      displayWinner(player1)
      grid.setAttribute('hasWon', true)
   }
   else if ((document.querySelector('.square2').innerHTML === 'O') && (document.querySelector('.square5').innerHTML === 'O') && (document.querySelector('.square8').innerHTML === 'O')) {
      updateScoreP2()
      displayWinner(player2)
      grid.setAttribute('hasWon', true)
   }
   else if ((document.querySelector('.square3').innerHTML === 'X') && (document.querySelector('.square6').innerHTML === 'X') && (document.querySelector('.square9').innerHTML === 'X')) {
      updateScoreP1()
      displayWinner(player1)
      grid.setAttribute('hasWon', true)
   }
   else if ((document.querySelector('.square3').innerHTML === 'O') && (document.querySelector('.square6').innerHTML === 'O') && (document.querySelector('.square9').innerHTML === 'O')) {
      updateScoreP2()
      displayWinner(player2)
      grid.setAttribute('hasWon', true)
   }
   // DIAGONAL COMBOS
   else if ((document.querySelector('.square1').innerHTML === 'X') && (document.querySelector('.square5').innerHTML === 'X') && (document.querySelector('.square9').innerHTML === 'X')) {
      updateScoreP1()
      displayWinner(player1)
      grid.setAttribute('hasWon', true)
   }
   else if ((document.querySelector('.square1').innerHTML === 'O') && (document.querySelector('.square5').innerHTML === 'O') && (document.querySelector('.square9').innerHTML === 'O')) {
      updateScoreP2()
      displayWinner(player2)
      grid.setAttribute('hasWon', true)
   }
   else if ((document.querySelector('.square3').innerHTML === 'X') && (document.querySelector('.square5').innerHTML === 'X') && (document.querySelector('.square7').innerHTML === 'X')) {
      updateScoreP1()
      displayWinner(player1)
      grid.setAttribute('hasWon', true)
   }
   else if ((document.querySelector('.square3').innerHTML === 'O') && (document.querySelector('.square5').innerHTML === 'O') && (document.querySelector('.square7').innerHTML === 'O')) {
      updateScoreP2()
      displayWinner(player2)
      grid.setAttribute('hasWon', true)
   }
}

function resetScore() {
   localStorage.setItem('player1Score', 0)
   localStorage.setItem('player2Score', 0)

   document.querySelector('.scorep1').innerHTML = 0
   document.querySelector('.scorep2').innerHTML = 0

   location.reload()
}

function newGame() {
   location.reload()
}

function displayWinner(player) {
   document.querySelector('.winner-overlay').style.display = 'flex'
   document.querySelector('.winner-overlay').style.position = 'absolute'

   document.querySelector('.winner').innerHTML = player
}
/*******************************************************************

Possible winning combinations:

HORIZONTAL
123
456
789

VERTICAL
147
258
369

DIAGONAL
159
357

******************************************************************/
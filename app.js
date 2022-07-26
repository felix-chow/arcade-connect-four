// Assign variables to IDs
let vsCPU = document.querySelector("#versus-cpu");
let twoPlayers = document.querySelector("#two-players");

// When player clicks "Two Players" option, call initializeTwoPlayerGame
twoPlayers.addEventListener("click", initializeTwoPlayerGame);

// Initialize all global variables
const boardDisplay = document.querySelector(".board");
const displayCurrentPlayer = document.querySelector(".current-player");
const currentPlayer = document.createTextNode("It is")
//   submitButton = document.querySelector("input");
// const newPlayerText = document.createTextNode("Please enter your name: ");


function initializeTwoPlayerGame() {
  // addPlayerNames();
  createBoard();
  // getPlayerTurn();
  // clickBoard();
}

// Initialize board to empty array
const board = [];

let gameState = {
  board: board,
  players: ["Jack", "Bob"]
}

// function retrievePlayerNames(event) {

//   submitButton.value = input.value;

//   console.log(submitButton.value);
//   currentPlayer.innerHTML
// }

// function addPlayerNames() {

//   vsCPU.remove();
//   twoPlayers.remove();


// currentPlayer.appendChild(newPlayerText);

// const input = document.createElement("input");
// input.id = "name";

// const submitButton = document.createElement("input");
// submitButton.setAttribute("type", "submit");

// currentPlayer.appendChild(input);
// currentPlayer.appendChild(submitButton);

// submitButton.addEventListener("click", retrievePlayerNames)

// const backButton = document.createElement("input");
// backButton.setAttribute("type", "submit");
// currentPlayer.appendChild(backButton);
// backButton.addEventListener("click", mainMenu);


// }

function getPlayerTurn() {
  return players[Math.floor(Math.random() * players.length)];
}

function createBoard() {

  let players = gameState.players;
  
  // for (let i = 0; i < players.length; i++) {
  //   currentPlayer.innerHTML = players;
  // }

  for (let i = 0; i < 7; i++) {
    const divColumn = document.createElement("div");
    divColumn.classList.add("column");
    boardDisplay.appendChild(divColumn);
  }

  for (let j = 0; j < 7; j++) {
    const divDisc = document.createElement("div");
    divDisc.classList.add("disc");
    divColumn = document.querySelector(".column");

    divColumn.appendChild(divDisc);
  }
}



function clickBoard() {

}

// function pushChip() {
//   // Loop through all 7 columns of the board
//   for (let i = 0; i < 7; i++) {
//     board.push([])
//   }
// }
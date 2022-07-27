// Assign variables to IDs
let vsCPU = document.querySelector("#versus-cpu");
let twoPlayers = document.querySelector("#two-players");

// When player clicks "Two Players" option, call initializeTwoPlayerGame
twoPlayers.addEventListener("click", initializeTwoPlayerGame);

// Initialize all global variables
let players = ["Jack", "Bob"]; // Test array
// let players = []
const boardDisplay = document.querySelector(".board");
const displayCurrentPlayer = document.querySelector(".current-player");
const divColumn = document.createElement("div");
// const currentPlayer = document.createTextNode("It is ");
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
  // board: board,
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

  vsCPU.remove();
  twoPlayers.remove();

  let players = getPlayerTurn();
  const currentPlayer = document.createTextNode(`${players}\'s turn`);
  displayCurrentPlayer.appendChild(currentPlayer);

  for (let i = 1; i < 7; i++) {
    
    divColumn.classList.add("column");

    for (let j = 1; j < 7; j++) {
      const divDisc = document.createElement("div");
      divDisc.classList.add("disc");
      divColumn.appendChild(divDisc);
    }
    boardDisplay.appendChild(divColumn);
  }

}



// function clickDisc(event) {
//   if (divColumn)
// }

// function pushChip() {
//   // Loop through all 7 columns of the board
//   for (let i = 0; i < 7; i++) {
//     board.push([])
//   }
// }
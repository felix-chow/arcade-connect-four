// Initialize all global variables

// Initialize board to empty array
let board = [
  [0, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29],
  [30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41]
];

// let players = ["Jack", "Bob"];
let players = [];

// Assign variables to IDs
let menu = document.querySelector(".main-menu");
let vsCPU = document.querySelector("#versus-cpu");
let twoPlayers = document.querySelector("#two-players");

// When player clicks "Two Players" option, call initializeTwoPlayerGame
twoPlayers.addEventListener("click", initializeTwoPlayerGame);

const boardDisplay = document.querySelector(".board");
const displayCurrentPlayer = document.querySelector(".current-player");
const displayPlayerChips = document.querySelector(".player-chips");
// let disc = document.querySelector(".disc");

// const currentPlayer = document.createTextNode("It is ");
//   submitButton = document.querySelector("input");

let gameState = {};

function initializeTwoPlayerGame() {
  menu.remove();
  getPlayerNames();
  // displayPlayerTurn();
  // createBoard();
  // clickBoard();
}

function setPlayerNames() {


  const newPlayerText = document.createTextNode("Please enter your name: ");
  displayCurrentPlayer.appendChild(newPlayerText);

  const nameInput = document.createElement("input");
  nameInput.id = "name";

  const submitButton = document.createElement("button");
  submitButton.innerText = "submit";

  displayCurrentPlayer.appendChild(nameInput);
  displayCurrentPlayer.appendChild(submitButton);


  submitButton.addEventListener("click", getPlayerNames)

  // const backButton = document.createElement("input");
  // backButton.setAttribute("type", "submit");
  // displayCurrentPlayer.appendChild(backButton);
  // backButton.addEventListener("click", mainMenu);


}

function getPlayerNames(event) {
  let button = event.target;
  const name = button.innerText;
  setPlayerTurn(name);

  // console.log(button.value);
  // currentPlayer.innerHTML
}

function setPlayerTurn(name) {
  gameState.player = getPlayerNames();
  // gameState.player = getPlayerTurn();
  players.push([]) = gameState.player;
}

// function getPlayerTurn() {
//   return players[Math.floor(Math.random() * players.length)];
// }

// function displayPlayerTurn() {
//   let player = gameState.player;

//   const currentPlayer = document.createTextNode(`${player}\'s turn`);
//   displayCurrentPlayer.appendChild(currentPlayer);
// }

// function createBoard() {

  // let player = gameState.player;

  // const redChip = document.createElement("div");
  // redChip.classList.add("red-chip");
  // displayPlayerChips.appendChild(redChip);

  // const yellowChip = document.createElement("div");
  // yellowChip.classList.add("yellow-chip");
  // displayPlayerChips.appendChild(yellowChip);

  // if (this.currentPlayer === player[0]) {
  //   yellowChip.remove();
  // } else {
  //   redChip.remove();
  // }

  // for (let i = 1; i < 8; i++) {
  //   const divColumn = document.createElement("div");
  //   divColumn.classList.add("column");

  //   for (let j = 1; j < 7; j++) {
  //     const divDisc = document.createElement("div");
  //     divDisc.classList.add("disc");
  //     divColumn.appendChild(divDisc);
  //   }
  //   boardDisplay.appendChild(divColumn);
  // }
  // let disc = document.querySelector(".disc");
  // disc.addEventListener("click", clickDisc);
// }



// function clickDisc() {
//   console.log("you have clicked a disc!");
//     // Loop through all 7 columns of the board
//     for (let i = 0; i < 7; i++) {
//       board.push([])
//     }
// }

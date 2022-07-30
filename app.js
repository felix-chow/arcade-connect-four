// Initialize all global variables

// Initialize board to empty array
// let board = [
//   [0, 1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11],
//   [12, 13, 14, 15, 16, 17],
//   [18, 19, 20, 21, 22, 23],
//   [24, 25, 26, 27, 28, 29],
//   [30, 31, 32, 33, 34, 35],
//   [36, 37, 38, 39, 40, 41]
// ];

let players = ["Jack", "Bob"];
// let players = [];

// Assign variables to IDs
const menu = document.querySelector(".main-menu");
const vsCPU = document.querySelector("#versus-cpu");
const twoPlayers = document.querySelector("#two-players");

// When player clicks "Two Players" option, call initializeTwoPlayerGame
twoPlayers.addEventListener("click", initializeTwoPlayerGame);

const boardDisplay = document.querySelector(".board");
const displayCurrentPlayer = document.querySelector(".current-player");
const disc = document.querySelector(".disc");

// const currentPlayer = document.createTextNode("It is ");
//   submitButton = document.querySelector("input");

let gameState = {};

function initializeTwoPlayerGame() {
  menu.remove();
  // getPlayerNames();
  displayPlayerTurn();
  createBoard();
}

// function setPlayerNames() {


//   const newPlayerText = document.createTextNode("Please enter your name: ");
//   displayCurrentPlayer.appendChild(newPlayerText);

//   const nameInput = document.createElement("input");
//   nameInput.id = "name";

//   const submitButton = document.createElement("button");
//   submitButton.innerText = "submit";

//   displayCurrentPlayer.appendChild(nameInput);
//   displayCurrentPlayer.appendChild(submitButton);


//   submitButton.addEventListener("click", getPlayerNames)

// const backButton = document.createElement("input");
// backButton.setAttribute("type", "submit");
// displayCurrentPlayer.appendChild(backButton);
// backButton.addEventListener("click", mainMenu);


// }

// function getPlayerNames(event) {
//   let button = event.target;
//   const name = button.innerText;
//   setPlayerTurn(name);

// console.log(button.value);
// currentPlayer.innerHTML
// }

// function setPlayerTurn(name) {
//   gameState.player = name;
//   gameState.player = getPlayerTurn();
//   players.push([]) = gameState.player;
// }

function setPlayerTurn() {
  gameState.players = players;
}

function getPlayerTurn() {
  return players[Math.floor(Math.random() * players.length)];
}

function displayPlayerTurn() {
  players = getPlayerTurn();
  let activePlayer = players;

  // if (activePlayer === players[0]) {
  const currentPlayer = document.createTextNode(`${activePlayer}\'s turn`);
  displayCurrentPlayer.appendChild(currentPlayer);
  // }

  // else if (activePlayer === players[1]) {
    // const currentPlayer = document.createTextNode(`${activePlayer}\'s turn`);
    // displayCurrentPlayer.appendChild(currentPlayer);
  // }

}

function createBoard() {
  for (let i = 1; i < 8; i++) {
    const divColumn = document.createElement("div");
    divColumn.classList.add("column");

    for (let j = 1; j < 7; j++) {
      const divDisc = document.createElement("div");
      divDisc.classList.add("disc");
      divColumn.appendChild(divDisc);
    }
    boardDisplay.appendChild(divColumn);
  }

  const restartButton = document.createElement("button");
  restartButton.id = "restart";
  restartButton.innerText = "Restart";
  boardDisplay.appendChild(restartButton);
}

function onDiscClick(event) {
  disc = event.target;
  dropChip(disc);
}

function dropChip(disc) {
  let activePlayer = players;
  // Loop through all 7 columns of the board
  for (let i = 0; i < disc.length; i++) {
    console.log("Disc has been clicked!");




    // if (disc.classList.contains("taken")) {
    //   if (activePlayer === players[0]) {
    //     disc[i].classList.add("taken");
    //     disc[i].classList.add("player-one");
    //     displayCurrentPlayer();
    //   } else if (activePlayer === players[0]) {
    //     disc[i].classList.add("taken");
    //     disc[i].classList.add("player-two");
    //     displayCurrentPlayer();
    //   }
    // } else {
    //   const spotTaken = document.createTextNode("That spot's taken.")
    // }
  }
}

function playAgain() {
  gameState = {};
  playAgainButton.style.display = "none";
  initializeTwoPlayerGame();
}

if (disc) {
  disc.addEventListener("click", onDiscClick, false);
}

const restartButton = document.querySelector("#restart");

if (restartButton) {
  restartButton.addEventListener("click", playAgain);
}

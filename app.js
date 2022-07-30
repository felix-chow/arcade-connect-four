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

// let winningBoard = [
//   [0, 1, 2, 3],
//   [6, 7, 8, 9],
//   [12, 13, 14, 15],
//   [18, 19, 20, 21],
//   [24, 25, 26, 27],
//   [30, 31, 32, 33],
//   [36, 37, 38, 39],
//   [0, 6, 12, 18],
//   [6, 12, 18, 24],
//   [12, 18, 24, 30],
//   [18, 24, 30, 36],
//   [1, 7, 13, 19],
//   [7, 13, 19, 25],
//   [13, 19, 25, 31],
//   [19, 25, 31, 37],
//   [2, 8, 14, 20],
//   [8, 14, 20, 26],
//   [14, 20, 26, 32],
//   [20, 26, 32, 38],
//   [3, 9, 15, 21],
//   [9, 15, 21, 27],
//   [15, 21, 27, 33],
//   [21, 27, 33, 39],
//   [4, 10, 16, 22],
//   [10, 16, 22, 28],
//   [16, 22, 28, 34],
//   [22, 28, 34, 40],
//   [5, 11, 17, 23],
//   [11, 17, 23, 29],
//   [17, 23, 29, 35],
//   [23, 29, 35, 41],
//   [0, 7, 14, 21],
//   [7, 14, 21, 28],
//   [14, 21, 28, 35],
//   [6, 13, 20, 27],
//   [13, 20, 27, 34],
//   [20, 27, 34, 41],
//   [12, 19, 26, 33],
//   [19, 26, 33, 40],
//   [18, 25, 32, 39],

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

function displayPlayerTurn() {
  let activePlayer = players;
  activePlayer = players[0];

  const currentPlayer = document.createTextNode(`${activePlayer}\'s turn`);
  displayCurrentPlayer.appendChild(currentPlayer);
}

function createBoard() {
  for (let i = 1; i < 8; i++) {
    const divColumn = document.createElement("div");
    divColumn.classList.add("column");

    for (let j = 1; j < 7; j++) {
      const divSlot = document.createElement("div");
      divSlot.classList.add("disc");
      divColumn.appendChild(divSlot);
    }
    boardDisplay.appendChild(divColumn);
  }

  // const restartButton = document.createElement("button");
  // restartButton.id = "restart";
  // restartButton.innerText = "Restart";
  // boardDisplay.appendChild(restartButton);
}

function onSlotClick(event) {
  const slot = event.target.closest(".disc");
  if (!slot) {
    console.log("Not a valid space. Please click on a slot.");
  } else {
    console.log("Slot has been clicked!");
  }

  dropChip(slot);
}

function dropChip(slot) {
  let activePlayer = players;
  // if (activePlayer === players[0]) {
  // let column = document.querySelector(".column");
  // let divSlot = document.querySelector(".disc");
  console.log(slot);
  if (!slot.classList.contains("taken")) {
    slot.classList.add("taken");
    slot.classList.add("player-one");
    // activePlayer = players[1];
    // displayPlayerTurn();
  } else {
    const spotTaken = document.createTextNode("That spot's taken.");
    displayCurrentPlayer.appendChild(spotTaken);
  }

  // }
}
// }
// }

// function playAgain() {
//   gameState = {};
//   playAgainButton.style.display = "none";
//   initializeTwoPlayerGame();
// }

boardDisplay.addEventListener("click", onSlotClick);

// const restartButton = document.querySelector("#restart");

// if (restartButton) {
//   restartButton.addEventListener("click", playAgain);
// }

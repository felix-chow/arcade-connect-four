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

let winningBoard = [
  [0, 1, 2, 3],
  [41, 40, 39, 38],
  [7, 8, 9, 10],
  [34, 33, 32, 31],
  [14, 15, 16, 17],
  [27, 26, 25, 24],
  [21, 22, 23, 24],
  [20, 19, 18, 17],
  [28, 29, 30, 31],
  [13, 12, 11, 10],
  [35, 36, 37, 38],
  [6, 5, 4, 3],
  [0, 7, 14, 21],
  [41, 34, 27, 20],
  [1, 8, 15, 22],
  [40, 33, 26, 19],
  [2, 9, 16, 23],
  [39, 32, 25, 18],
  [3, 10, 17, 24],
  [38, 31, 24, 17],
  [4, 11, 18, 25],
  [37, 30, 23, 16],
  [5, 12, 19, 26],
  [36, 29, 22, 15],
  [6, 13, 20, 27],
  [35, 28, 21, 14],
  [0, 8, 16, 24],
  [41, 33, 25, 17],
  [7, 15, 23, 31],
  [34, 26, 18, 10],
  [14, 22, 30, 38],
  [27, 19, 11, 3],
  [35, 29, 23, 17],
  [6, 12, 18, 24],
  [28, 22, 16, 10],
  [13, 19, 25, 31],
  [21, 15, 9, 3],
  [20, 26, 32, 38],
  [36, 30, 24, 18],
  [5, 11, 17, 23],
  [37, 31, 25, 19],
  [4, 10, 16, 22],
  [2, 10, 18, 26],
  [39, 31, 23, 15],
  [1, 9, 17, 25],
  [40, 32, 24, 16],
  [9, 17, 25, 33],
  [8, 16, 24, 32],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [1, 2, 3, 4],
  [5, 4, 3, 2],
  [8, 9, 10, 11],
  [12, 11, 10, 9],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [36, 37, 38, 39],
  [40, 39, 38, 37],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
];

let players = ["Jack", "Bob"];
let activePlayer = players[0];
// console.log(activePlayer);
// let players = [];

// Assign variables to IDs
const menu = document.querySelector(".main-menu");
const vsCPU = document.querySelector("#versus-cpu");
const PvP = document.querySelector("#PvP");

const boardDisplay = document.querySelector(".board");
const displayCurrentPlayer = document.querySelector(".current-player");
//   submitButton = document.querySelector("input");

function mainMenu() {
  // When player clicks "Versus CPU" option, call initializeVersusCPUGame
  // vsCPU.addEventListener("click", initializeVersusCPUGame);
  
  // When player clicks "Two Players" option, call initializeTwoPlayerGame
  PvP.addEventListener("click", initializePvPGame);
}

let gameState = {};

// function initializeVersusCPUGame() {
//   menu.remove();
//   displayVersusCPUGameMode();
//   // getPlayerNames();
//   displayPlayerTurn();
//   createBoard();
// }

function initializePvPGame() {
  menu.remove();
  // displayPvPGameMode();
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

// function displayVersusCPUGameMode() {
//   const gameMode = document.createElement("div");
//   gameMode.classList.add("game-mode");
//   const gameModeTitle = document.createElement("h2");
//   gameModeTitle.innerHTML = "Versus CPU";
//   gameMode.appendChild(gameModeTitle);
// }

// function displayPvPGameMode() {
//   const gameMode = document.createElement("div");
//   gameMode.classList.add("game-mode");
//   const gameModeTitle = document.createElement("h2");
//   gameModeTitle.innerHTML = "PvP"
//   gameMode.appendChild(gameModeTitle);
// }

function setPlayers() {
  gameState.players = players;
  // activePlayer = players[0];

  activePlayer = players;
  activePlayer = players[0];
  displayPlayerTurn(activePlayer);
  console.log("here");
}

function displayPlayerTurn(activePlayer) {

  if (activePlayer === players[0]) {
    const currentPlayer = document.createTextNode(`${activePlayer}\'s turn`);
    displayCurrentPlayer.appendChild(currentPlayer);
  } else if (activePlayer === players[1]) {
    const currentPlayer = document.createTextNode(`${activePlayer}\'s turn`);
    displayCurrentPlayer.appendChild(currentPlayer);
  }

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

boardDisplay.addEventListener("click", onSlotClick);

function onSlotClick(event) {
  const slot = event.target.closest(".disc");
  if (!slot) {
    console.log("Not a valid space. Please click on a slot.");
  } else {
    // console.log("Slot has been clicked!");
    // console.log("dropped");
    dropChip(slot);
  }

}

function dropChip(slot) {
  // let activePlayer = players;
  // activePlayer = players[0];
  // console.log(activePlayer);
  if (activePlayer === players[0]) {
    if (slot.classList.contains("taken")) {
      const spotTaken = document.createTextNode("That spot's taken.");
      displayCurrentPlayer.appendChild(spotTaken);
      // console.log("spot taken");
    } else {
      slot.classList.add("taken");
      slot.classList.add("player-one");
      activePlayer = players[1];
      // console.log("Player one's turn is over");
    }
  } else {
    // console.log(activePlayer);
    if (activePlayer === players[1]) {
      // console.log(displayPlayerTurn(activePlayer));
      if (slot.classList.contains("taken")) {
        const spotTaken = document.createTextNode("That spot's taken.");
        displayCurrentPlayer.appendChild(spotTaken);
        // console.log("spot taken");
      } else {
        slot.classList.add("taken");
        slot.classList.add("player-two");
        // console.log("Player two's turn is over");
      }
      activePlayer = players[0];
      // console.log(activePlayer);
      // displayPlayerTurn(activePlayer);
    }
  }
}

function checkBoard() {
  for (let x = 0; x < winningBoard.length; x++) {
    const winningSlots1 = slot[winningBoard[x][0]];
    const winningSlots2 = slot[winningBoard[x][1]];
    const winningSlots3 = slot[winningBoard[x][2]];
    const winningSlots4 = slot[winningBoard[x][3]];
    
    if (winningSlots1.classList.contains("player-one") && winningSlots2.classList.contains("player-one") &&
    winningSlots3.classList.contains("player-one") && winningSlots4.classList.contains("player-one")) { 
      const result = document.createTextNode(`${players[0]} wins!`);
      displayCurrentPlayer.appendChild(result);
    }
    
    if (winningSlots1.classList.contains("player-two") && winningSlots2.classList.contains("player-two") &&
    winningSlots3.classList.contains("player-two") && winningSlots4.classList.contains("player-two")) { 
      const result = document.createTextNode(`${players[1]} wins!`);
      displayCurrentPlayer.appendChild(result);
    }

  }
}

function playAgain() {
  gameState = {};
  playAgainButton.style.display = "none";
  initializeTwoPlayerGame();
}

mainMenu();

// const restartButton = document.querySelector("#restart");

// if (restartButton) {
  // restartButton.addEventListener("click", playAgain);
// }

// Initialize all global variables

// let players = ["Jack", "Bob", "Computer"];
let players = [];
let CPU = "Computer";
players.push(CPU);
let player1;
let player2;

// Assign variables to classes and IDs
const menu = document.querySelector(".main-menu");
const vsCPU = document.querySelector("#versus-cpu");
const PvP = document.querySelector("#PvP");
const boardDisplay = document.querySelector(".board");
const displayCurrentPlayer = document.querySelector(".current-player");
// const restartButtonContainer = document.querySelector(".restart-button-container");
let activePlayer;

function mainMenu() {
  // When player clicks "Versus CPU" option, call initializeVersusCPUGame
  vsCPU.addEventListener("click", initializeVersusCPUGame);

  // When player clicks "Two Players" option, call initializeTwoPlayerGame
  PvP.addEventListener("click", initializePvPGame);
}

let gameState = {};

// Single player mode

// function initializeVersusCPUGame() {
//   menu.remove();
//   setPlayerNames();
// }

// function changeTurnsWithCPU() {
//   if (activePlayer === player1) {
//     activePlayer = CPU;
//   } else {
//     activePlayer = player1;
//   }
// }

// function displayPlayerAndCPUTurn() {
//   console.log(activePlayer);
//   displayCurrentPlayer.innerText = `${activePlayer}\'s turn`;
// }

// boardDisplay.addEventListener("click", onSlotClick_vsCPU);

// function onSlotClick_vsCPU(event) {
//   const slot = event.target.closest(".disc");
//   if (!slot) {
//     alert("Not a valid space. Please click on a slot.");
//   } else {

//     dropChipWithCPU(slot);
//   }

// }

// function dropChipWithCPU(slot) {
//   if (activePlayer === players[0]) {
//     if (slot.classList.contains("taken")) {
//       const spotTaken = document.createTextNode("That spot's taken.");
//       displayCurrentPlayer.appendChild(spotTaken);
//     } else {
//       slot.classList.add("taken");
//       slot.classList.add("player-one");
//       changeTurnsWithCPU();
//       displayPlayerAndCPUTurn();
//     }
//   } else {
//     if (activePlayer === CPU) {
//       Math.floor(Math.random() * 7);
//       slot.classList.add("taken");
//       slot.classList.add("computer");
//       changeTurnsWithCPU();
//       displayPlayerAndCPUTurn();
//     }
//   }

//   fourInARow(slot);
// }


// Multiplayer mode

function initializePvPGame() {
  menu.remove();
  setPlayerOneName();
}


function setPlayerOneName() {
  const playerOneParagraph = document.createElement("p");
  const playerOneText = document.createTextNode("Player 1, please enter your name: ");
  playerOneParagraph.appendChild(playerOneText);
  displayCurrentPlayer.appendChild(playerOneParagraph);

  const playerOneNameInput = document.createElement("input");
  playerOneNameInput.id = "name";

  const playerOneSubmitButton = document.createElement("button");
  playerOneSubmitButton.innerText = "submit";

  displayCurrentPlayer.appendChild(playerOneNameInput);
  displayCurrentPlayer.appendChild(playerOneSubmitButton);

  playerOneSubmitButton.addEventListener("click", getPlayerOneName)

}

// const backButton = document.createElement("input");
// backButton.setAttribute("type", "submit");
// displayCurrentPlayer.appendChild(backButton);
// backButton.addEventListener("click", mainMenu);

function getPlayerOneName() {
  const playerOneSubmitButton = document.querySelector("#name");
  let name = playerOneSubmitButton.value;
  setPlayerOne(name);
}

function setPlayerOne(name) {
  gameState.players = players;
  const playerOneSubmitButton = document.querySelector("#name");
  name = playerOneSubmitButton.value;
  player1 = name;
  players.push(player1);
  console.log(players);
  activePlayer = player1;
  setPlayerTwoName();
}

function setPlayerTwoName() {
  const playerOneParagraph = document.querySelector("p");
  playerOneParagraph.remove();
  const playerOneNameInput = document.querySelector("input");
  playerOneNameInput.remove();
  const playerOneSubmitButton = document.querySelector("button");
  playerOneSubmitButton.remove();

  const playerTwoParagraph = document.createElement("p");
  const playerTwoText = document.createTextNode("Player 2, please enter your name: ");
  playerTwoParagraph.appendChild(playerTwoText);
  displayCurrentPlayer.appendChild(playerTwoParagraph);

  const playerTwoNameInput = document.createElement("input");
  playerTwoNameInput.id = "name";

  const playerTwoSubmitButton = document.createElement("button");
  playerTwoSubmitButton.innerText = "submit";

  displayCurrentPlayer.appendChild(playerTwoNameInput);
  displayCurrentPlayer.appendChild(playerTwoSubmitButton);

  playerTwoSubmitButton.addEventListener("click", getPlayerTwoName)

}

function getPlayerTwoName() {
  const playerTwoNameInput = document.querySelector("#name");
  let name = playerTwoNameInput.value;
  setPlayerTwo(name);
}

function setPlayerTwo(name) {
  gameState.players = players;
  const playerTwoNameInput = document.querySelector("#name");
  name = playerTwoNameInput.value;
  player2 = name;
  players.push(player2);
  console.log(players);
  createBoard();

}

function changeTurn() {

  if (activePlayer === player1) {
    activePlayer = player2;
  } else {
    activePlayer = player1;
  }
}

function displayPlayerTurn() {
  displayCurrentPlayer.innerText = `${activePlayer}\'s turn`;
}

function createBoard() {
  const playerTwoParagraph = document.querySelector("p");
  playerTwoParagraph.remove();
  const playerTwoNameInput = document.querySelector("input");
  playerTwoNameInput.remove();
  const playerTwoSubmitButton = document.querySelector("button");
  playerTwoSubmitButton.remove();

  displayPlayerTurn();

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

}

boardDisplay.addEventListener("click", onSlotClick);

function onSlotClick(event) {
  const slot = event.target.closest(".disc");
  if (!slot) {
    alert("Not a valid space. Please click on a slot.");
  } else {

    dropChip(slot);
  }

}

function dropChip(slot) {
  if (activePlayer === players[1]) {
    if (slot.classList.contains("taken")) {
      const spotTaken = document.createTextNode("That spot's taken.");
      displayCurrentPlayer.appendChild(spotTaken);
    } else {
      slot.classList.add("taken");
      slot.classList.add("player-one");
      changeTurn();
      displayPlayerTurn();
    }
  } else {
    if (activePlayer === players[2]) {
      if (slot.classList.contains("taken")) {
        const spotTaken = document.createTextNode("That spot's taken.");
        displayCurrentPlayer.appendChild(spotTaken);
      } else {
        slot.classList.add("taken");
        slot.classList.add("player-two");
        changeTurn();
        displayPlayerTurn();
      }
    }
  }

  fourInARow(slot);

}

function fourInARow(slot) {
  let numSlotsTaken = 0;
  while (numSlotsTaken = 4) {
    if ((slot === "taken") && (slot === "player-one")) {
      return `${players[0]} wins!`;
    } else {
      return `${players[1]} wins!`;
    }

  }
}

// function displayRestartButton() {
//   const restartButton = document.createElement("button");
//   restartButton.id = "restart";
//   restartButtonContainer.append(restartButton);
// }

// function playAgain() {
//   gameState = {};
//   restartButtonContainer.style.display = "none";
//   initializeTwoPlayerGame();
// }

// mainMenu();

// const restartButton = document.querySelector("#restart");

  // restartButton.addEventListener("click", playAgain);

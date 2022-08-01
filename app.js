// Initialize all global variables

let players = ["Jack", "Bob", "Computer"];
let player1 = players[0];
let player2 = players[1];
let CPU = players[2];

// Assign variables to classes and IDs
const menu = document.querySelector(".main-menu");
const vsCPU = document.querySelector("#versus-cpu");
const PvP = document.querySelector("#PvP");
const boardDisplay = document.querySelector(".board");
const displayCurrentPlayer = document.querySelector(".current-player");
// const restartButtonContainer = document.querySelector(".restart-button-container");
let activePlayer = player1;

function mainMenu() {
  // When player clicks "Versus CPU" option, call initializeVersusCPUGame
  vsCPU.addEventListener("click", initializeVersusCPUGame);

  // When player clicks "Two Players" option, call initializeTwoPlayerGame
  PvP.addEventListener("click", initializePvPGame);
}

let gameState = {};

function initializeVersusCPUGame() {
  menu.remove();
  // getPlayerNames();
  displayPlayerAndCPUTurn();
  createBoard();
}

function initializePvPGame() {
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

function setPlayers() {
  gameState.players = players;

}

// Single player mode

function changeTurnsWithCPU() {
  if (activePlayer === player1) {
    activePlayer = CPU;
  } else {
    activePlayer = player1;
  }
}

function displayPlayerAndCPUTurn() {
  console.log(activePlayer);
  displayCurrentPlayer.innerText = `${activePlayer}\'s turn`;
}

boardDisplay.addEventListener("click", onSlotClick_vsCPU);

function onSlotClick_vsCPU(event) {
  const slot = event.target.closest(".disc");
  if (!slot) {
    alert("Not a valid space. Please click on a slot.");
  } else {

    dropChipWithCPU(slot);
  }

}

function dropChipWithCPU(slot) {
  if (activePlayer === players[0]) {
    if (slot.classList.contains("taken")) {
      const spotTaken = document.createTextNode("That spot's taken.");
      displayCurrentPlayer.appendChild(spotTaken);
    } else {
      slot.classList.add("taken");
      slot.classList.add("player-one");
      changeTurnsWithCPU();
      displayPlayerAndCPUTurn();
    }
  } else {
    if (activePlayer === CPU) {
      Math.floor(Math.random() * 7);
      slot.classList.add("taken");
      slot.classList.add("computer");
      changeTurnsWithCPU();
      displayPlayerAndCPUTurn();
    }
  }

  fourInARow(slot);
}


// PvP mode

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

function onSlotClick(event) {
  const slot = event.target.closest(".disc");
  if (!slot) {
    alert("Not a valid space. Please click on a slot.");
  } else {

    dropChip(slot);
  }

}

function dropChip(slot) {
  if (activePlayer === players[0]) {
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
    if (activePlayer === players[1]) {
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

mainMenu();

// const restartButton = document.querySelector("#restart");

  // restartButton.addEventListener("click", playAgain);

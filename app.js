// Initialize all global variables

let players = [];
let CPU = "Computer";
players.push(CPU);
let player1;
let player2;

// Assign variables to classes and IDs
const menu = document.querySelector(".main-menu");
const vsCPU = document.querySelector("#versus-cpu");
const PvP = document.querySelector("#PvP");
const boardContainer = document.querySelector(".board-container");
const displayCurrentPlayer = document.querySelector(".current-player");
// const restartButtonContainer = document.querySelector(".restart-button-container");
let activePlayer;

// When player clicks "Versus CPU" option, call initializeVersusCPUGame
vsCPU.addEventListener("click", initializeVersusCPUGame);

// When player clicks "Two Players" option, call initializeTwoPlayerGame
PvP.addEventListener("click", initializePvPGame);

let gameState = {};

// Single player mode

function initializeVersusCPUGame() {
  menu.remove();
  setPlayerName();
}

function setPlayerName() {
  const playerParagraph = document.createElement("p");
  const playerText = document.createTextNode("Please enter your name: ");
  playerParagraph.appendChild(playerText);
  displayCurrentPlayer.appendChild(playerParagraph);

  const playerNameInput = document.createElement("input");
  playerNameInput.id = "name";

  const playerSubmitButton = document.createElement("button");
  playerSubmitButton.innerText = "submit";

  displayCurrentPlayer.appendChild(playerNameInput);
  displayCurrentPlayer.appendChild(playerSubmitButton);

  playerSubmitButton.addEventListener("click", getPlayerName)

}

function getPlayerName() {
  const playerSubmitButton = document.querySelector("#name");
  let name = playerSubmitButton.value;
  setPlayer(name);
}

function setPlayer(name) {
  gameState.players = players;
  const playerSubmitButton = document.querySelector("#name");
  name = playerSubmitButton.value;
  player1 = name;
  players.push(player1);
  console.log(players);
  activePlayer = player1;
  createBoard();
}

function dropChipWithCPU(slot) {
  let cellClicked = event.target.cellIndex;

  let row = [];
  const tableRow = document.getElementsByTagName("tr");

  for (i = 5; i > -1; i--) {
    if (tableRow[i].children[cellClicked].style.backgroundColor === "white") {
      row.push(tableRow[i].children[cellClicked]);
      if (activePlayer === players[1]) {
        console.log(activePlayer);
        row[0].style.backgroundColor = "red";
        console.log(row[0].style.backgroundColor);
        displayCurrentPlayer.innerText = `${player1}\'s turn`;
        return activePlayer = players[1];
      }
      else {
        row[0].style.backgroundColor = "yellow";
        displayCurrentPlayer.innerText = `${CPU}\'s turn`;
        return activePlayer = players[0];
      }
    }
  }

}


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


function getPlayerOneName() {
  const playerOneSubmitButton = document.querySelector("#name");
  let name = playerOneSubmitButton.value;
  setPlayerOne(name);
  alert("You will be the red chip.");
}

function setPlayerOne(name) {
  gameState.players = players;
  const playerOneSubmitButton = document.querySelector("#name");
  name = playerOneSubmitButton.value;
  player1 = name;
  players.push(player1);
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
  alert("You will be the yellow chip.");
}

function setPlayerTwo(name) {
  gameState.players = players;
  const playerTwoNameInput = document.querySelector("#name");
  name = playerTwoNameInput.value;
  player2 = name;
  players.push(player2);
  createBoard();

}

function displayPlayerTurn() {
  displayCurrentPlayer.innerText = `${activePlayer}\'s turn`;
}

function createBoard() {
  displayPlayerTurn();

  const table = document.createElement("table");

  for (let row = 1; row < 7; row++) {
    const divRow = document.createElement("tr");

    for (let column = 1; column < 8; column++) {
      const divCell = document.createElement("td");
      divCell.classList.add("slot");
      divRow.appendChild(divCell);
    }
    table.appendChild(divRow);
  }
  boardContainer.appendChild(table);

  let tableData = document.getElementsByTagName("td");

  Array.prototype.forEach.call(tableData, (cell) => {
    cell.addEventListener("click", dropChip);
    cell.style.backgroundColor = "white";
  });
}


function dropChip(event) {
  let cellClicked = event.target.cellIndex;

  let droppedRow = -1;

  let row = [];
  const tableRow = document.getElementsByTagName("tr");

  for (i = 5; i > -1; i--) {
    if (tableRow[i].children[cellClicked].style.backgroundColor === "white") {
      droppedRow = i;
      console.log(droppedRow, cellClicked);
      console.log(getBoard(event.target));
      row.push(tableRow[i].children[cellClicked]);
      if (activePlayer === players[1]) {
        console.log(activePlayer);
        row[0].style.backgroundColor = "red";
        checkBoard(droppedRow, cellClicked, "red");
        displayCurrentPlayer.innerText = `${player2}\'s turn`;
        return activePlayer = players[2];
      } else {
        row[0].style.backgroundColor = "yellow";
        checkBoard(droppedRow, cellClicked, "yellow");
        displayCurrentPlayer.innerText = `${player1}\'s turn`;
        return activePlayer = players[1];
      }
    }
  }
}

function getBoard() {
  displayPlayerTurn();

  const table = document.getElementsByTagName("table");

  const rows = document.getElementsByTagName("tr");

  const board = [];

  for (let row = 0; row < 6; row++) {
    const cells = rows[row].getElementsByTagName("td");
    const boardRow = [];
    for (let cell = 0; cell < 7; cell++) {
      boardRow.push(cells[cell].style.backgroundColor);

    }
    board.push(boardRow);
  }
  return board;

}

function getMatchingChipsLeft(connectFourBoard, moveRow, moveColumn, color) {
  const rowArray = connectFourBoard[moveRow];

  let matchingChips = 0;

  for (col = moveColumn - 1; col >= 0; col--) {
    if (rowArray[col] !== color) {
      break;
    } else {
      matchingChips++;
    }
  }

  return matchingChips;
}

function getMatchingChipsRight(connectFourBoard, moveRow, moveColumn, color) {
  const rowArray = connectFourBoard[moveRow];

  let matchingChips = 0;

  for (col = moveColumn + 1; col < rowArray.length; col++) {
    if (rowArray[col] !== color) {
      break;
    } else {
      matchingChips++;
    }
  }

  return matchingChips;
}

function getMatchingChipsHorizontal(connectFourBoard, moveRow, moveColumn, color) {
  return getMatchingChipsLeft(connectFourBoard, moveRow, moveColumn, color) + getMatchingChipsRight(connectFourBoard, moveRow, moveColumn, color) + 1;
}


function checkBoard(moveRow, moveColumn, color) {
  const connectFourBoard = getBoard();
  const matchingToLeft = getMatchingChipsLeft(connectFourBoard, moveRow, moveColumn, color);
  const matchingToRight = getMatchingChipsRight(connectFourBoard, moveRow, moveColumn, color);
  const matchingHorizontal = getMatchingChipsHorizontal(connectFourBoard, moveRow, moveColumn, color);
  console.log(`Checking left of ${moveColumn}`);
  console.log(`Checking right of ${moveColumn}`);
  console.log(`${matchingToLeft} ${color} Chips found to the left`);
  console.log(`${matchingToRight} ${color} Chips found to the right`);
  console.log(`${matchingHorizontal} ${color} Chips found`);
}

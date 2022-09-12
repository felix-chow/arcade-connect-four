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

// CPU Functionality

// Play chip on random open slots
// Find any column that's available

function CPUDropChip(slot) {
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
  menu.style.display = "none";
  setPlayerOneName();
}

// Just have one input field for player name input and clear after player one submits.
// Player one name will still be in array.

function setPlayerOneName() {
  console.log(players);
  const playerOneParagraph = document.createElement("label");
  playerOneParagraph.classList.add("player-one-label");
  const playerOneText = document.createTextNode("Player 1, please enter your name: ");
  playerOneParagraph.appendChild(playerOneText);
  displayCurrentPlayer.appendChild(playerOneParagraph);

  let playerNameInput = document.createElement("input");
  playerNameInput.classList.add("player-input");

  const playerOneSubmitButton = document.createElement("button");
  playerOneSubmitButton.classList.add("submit");
  playerOneSubmitButton.innerText = "Submit";

  displayCurrentPlayer.appendChild(playerNameInput);
  displayCurrentPlayer.appendChild(playerOneSubmitButton);

  playerOneSubmitButton.addEventListener("click", getPlayerOneName)

}

// Retrieve player 1's name from input box

function getPlayerOneName() {
  let playerNameInput = document.querySelector(".player-input");
  let name = playerNameInput.value;
  setPlayerOne(name);
  alert("You will be the red chip.");
  playerNameInput.value = "";
}

// Set player 1 name

function setPlayerOne(playerOneName) {
  gameState.players = players;
  console.log(gameState);
  let playerNameInput = document.querySelector(".player-input");
  playerOneName = playerNameInput.value;
  player1 = playerOneName;
  players.push(player1);
  activePlayer = player1;
  setPlayerTwoName();
}

function setPlayerTwoName() {
  const playerOneParagraph = document.querySelector(".player-one-label");
  playerOneParagraph.style.display = "none";
  const playerOneSubmitButton = document.querySelector(".submit");
  playerOneSubmitButton.style.display = "none";
  const playerTwoParagraph = document.createElement("label");
  playerTwoParagraph.classList.add("player-two-label")
  const playerTwoText = document.createTextNode("Player 2, please enter your name: ");
  playerTwoParagraph.appendChild(playerTwoText);
  displayCurrentPlayer.appendChild(playerTwoParagraph);

  let playerNameInput = document.querySelector(".player-input");

  const playerTwoSubmitButton = document.createElement("button");
  playerTwoSubmitButton.classList.add("submit");
  playerTwoSubmitButton.innerText = "Submit";
  displayCurrentPlayer.appendChild(playerNameInput);
  displayCurrentPlayer.appendChild(playerTwoSubmitButton);
  playerTwoSubmitButton.addEventListener("click", getPlayerTwoName)

}

function getPlayerTwoName() {
  let playerNameInput = document.querySelector(".player-input");
  console.log(playerNameInput.value);
  let playerTwoName = playerNameInput.value;
  console.log(playerTwoName);
  setPlayerTwo(playerTwoName);
  alert("You will be the yellow chip.");
}

function setPlayerTwo(name) {
  gameState.players = players;
  console.log(gameState);
  let playerNameInput = document.querySelector(".player-input");
  playerTwoName = playerNameInput.value;
  player2 = playerTwoName;
  players.push(player2);
  activePlayer = player2;
  createBoard();
}

function displayPlayerTurn() {
  displayCurrentPlayer.innerText = `${activePlayer}\'s turn`;
}

function getBoard() {
  displayPlayerTurn();

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

function getMatchingChipsDownward(connectFourBoard, moveColumn, moveRow, color) {


  let matchingChips = 0;

  console.table(connectFourBoard);
  console.log(moveRow);

  // Check every row for that column
  for (row = moveRow + 1; row < connectFourBoard.length; row++) {
    const rowArray = connectFourBoard[moveRow];
    if (rowArray[moveColumn] !== color) {
      console.log("Clicked!");
      console.log(rowArray);
      console.log(rowArray[moveColumn]);
      break;
    } else {
      matchingChips++;
    }
  }

  return matchingChips;
}

// function columnFull(connectFourBoard, moveRow, moveColumn, color) {
//   const colArray = connectFourBoard[moveColumn];

//   console.log(colArray);

//   for (row = moveRow + 1; row < colArray.length; row++) {

//       color++;
//   }

//   return color;
// }

function getMatchingChipsLeft(connectFourBoard, moveRow, moveColumn, color) {
  const rowArray = connectFourBoard[moveRow];

  let matchingChips = 0;

  console.log(rowArray);

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
  console.log(rowArray);

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

function getMatchingChipsDiagonalLeftUp(connectFourBoard, moveRow, moveColumn, color) {

  let matchingChips = 0;

  console.table(connectFourBoard);
  console.log(moveRow);

  for (row = moveRow - 1; row >= 0; row--) {
    for (col = moveColumn - 1; col >= 0; col--) {
      if (connectFourBoard[row][col] !== color) {
        break;
      } else {
        matchingChips++;
      }
    }
    
  }
  return matchingChips;
}

function getMatchingChipsDiagonalLeftUp(connectFourBoard, moveRow, moveColumn, color) {

  let matchingChips = 0;

  console.table(connectFourBoard);
  console.log(moveRow);

  for (row = moveRow - 1; row >= 0; row--) {
    for (col = moveColumn - 1; col >= 0; col--) {
      if (connectFourBoard[row][col] !== color) {
        break;
      } else {
        matchingChips++;
      }
    }
    
  }
  return matchingChips;
}

function getMatchingChipsDiagonalRightUp(connectFourBoard, moveRow, moveColumn, color) {

  let matchingChips = 0;

  console.table(connectFourBoard);
  console.log(moveRow);

  for (row = moveRow - 1; row <= 0; row++) {
    for (col = moveColumn - 1; col <= 0; col++) {
      if (connectFourBoard[row][col] !== color) {
        break;
      } else {
        matchingChips++;
      }
    }
    
  }
  return matchingChips;
}

// function DrawCheck(connectFourBoard, moveRow, moveColumn, color) {
//   const rowArray = connectFourBoard[moveRow];

//   let matchingChips = 0;

//   for (col = moveColumn + 1; col < rowArray.length; col++) {
//     for (col = moveColumn - 1; col >= 0; col--) {
//       if (rowArray[col] !== color) {
//         break;
//       } else {
//         matchingChips++;
//       }

//     }
//   }

//   return matchingChips;
// }

function getMatchingChipsHorizontal(connectFourBoard, moveRow, moveColumn, color) {
  return getMatchingChipsLeft(connectFourBoard, moveRow, moveColumn, color) + getMatchingChipsRight(connectFourBoard, moveRow, moveColumn, color) + 1;
}

function checkBoard(connectFourBoard, moveRow, moveColumn, color) {
  const matchingDownward = getMatchingChipsDownward(connectFourBoard, moveRow, color);
  const matchingToLeft = getMatchingChipsLeft(connectFourBoard, moveRow, moveColumn, color);
  const matchingToRight = getMatchingChipsRight(connectFourBoard, moveRow, moveColumn, color);
  const matchingHorizontal = getMatchingChipsHorizontal(connectFourBoard, moveRow, moveColumn, color);
  const matchingDiagonalLeftUp = getMatchingChipsDiagonalLeftUp(connectFourBoard, moveRow, moveColumn, color);
  const matchingDiagonalRightUp = getMatchingChipsDiagonalRightUp(connectFourBoard, moveRow, moveColumn, color);
  // const fullColumn = columnFull(connectFourBoard, moveRow, moveColumn, color);
  // const drawCheck = DrawCheck(connectFourBoard, moveRow, moveColumn, color);
  console.log(`Checking below ${moveRow}`);
  console.log(`Checking left of ${moveColumn}`);
  console.log(`Checking right of ${moveColumn}`);
  console.log(`Checking diagonally up to the left of ${moveColumn}`);
  console.log(`${matchingDownward} ${color} Chips found below`);
  console.log(`${matchingToLeft} ${color} Chips found to the left`);
  console.log(`${matchingToRight} ${color} Chips found to the right`);
  console.log(`${matchingDiagonalLeftUp} ${color} Chips found diagonally up to the left of`);
  console.log(`${matchingDiagonalRightUp} ${color} Chips found diagonally up to the right of`);
  console.log(`${matchingHorizontal} ${color} Chips found`);

  if (matchingHorizontal === 4 || matchingDownward === 4 || matchingDiagonalLeftUp === 4) {
    if (color === "red") {
      alert(`${player1} wins!`);
    }
    else {
      alert(`${player2} wins!`);

    }
  }
}


// isBoardFull()
// Loop through every row, column for an empty space

// Function for if column is full
// Does row array contain white (using .contain() function)

// If chip is dropped and not winner and board is full, alert that it's a draw

function createBoard() {
  displayPlayerTurn();

  const table = document.createElement("table");
  table.classList.add("connect-four-board");

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

  
  const backBtn = document.createElement("button");
  backBtn.classList.add("back-to-menu");
  boardContainer.appendChild(backBtn);
  backBtn.innerText = "Back to Menu";

  const restartBtn = document.createElement("button");
  restartBtn.classList.add("restart-game");
  boardContainer.appendChild(restartBtn);
  restartBtn.innerText = "Restart Game";
  restartBtn.addEventListener("click", restartGame);



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
        checkBoard(getBoard(), droppedRow, cellClicked, "red");
        displayCurrentPlayer.innerText = `${player2}\'s turn`;
        
        return activePlayer = players[2];
      } else {
        row[0].style.backgroundColor = "yellow";
        checkBoard(getBoard(), droppedRow, cellClicked, "yellow");
        displayCurrentPlayer.innerText = `${player1}\'s turn`;
        return activePlayer = players[1];
      }
    }
  }
}

function restartGame() {
  const slots = document.querySelectorAll(".slot");
  console.log(slots);
  slots.forEach(slot => {
    slot.style.backgroundColor = "white";
  });
}
menu.style.display = "flex";
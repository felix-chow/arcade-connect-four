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
let isCPUOpponent = false;
let activePlayer;

// When player clicks "Versus CPU" option, call initializeVersusCPUGame
vsCPU.addEventListener("click", initializeVersusCPUGame);

// When player clicks "Two Players" option, call initializeTwoPlayerGame
PvP.addEventListener("click", initializePvPGame);

let gameState = {};

// Single player mode

function initializeVersusCPUGame() {
  menu.style.display = "none";
  setPlayerName();
  isCPUOpponent = true;
}

function setPlayerName() {
  console.log(players);
  const playerLabel = document.createElement("label");
  playerLabel.classList.add("player-one-label");
  const playerText = document.createTextNode("Please enter your name: ");
  playerLabel.appendChild(playerText);
  displayCurrentPlayer.appendChild(playerLabel);

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




// Multiplayer mode

function initializePvPGame() {
  menu.style.display = "none";
  setPlayerOneName();
}

// Just have one input field for player name input and clear after player one submits.
// Player one name will still be in array.

function setPlayerOneName() {
  console.log(players);
  const playerOneLabel = document.createElement("label");
  playerOneLabel.classList.add("player-one-label");
  const playerOneText = document.createTextNode("Player 1, please enter your name: ");
  playerOneLabel.appendChild(playerOneText);
  displayCurrentPlayer.appendChild(playerOneLabel);

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
  const playerOneLabel = document.querySelector(".player-one-label");
  playerOneLabel.style.display = "none";
  const playerOneSubmitButton = document.querySelector(".submit");
  playerOneSubmitButton.style.display = "none";
  const playerTwoLabel = document.createElement("label");
  playerTwoLabel.classList.add("player-two-label")
  const playerTwoText = document.createTextNode("Player 2, please enter your name: ");
  playerTwoLabel.appendChild(playerTwoText);
  displayCurrentPlayer.appendChild(playerTwoLabel);

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

function getMatchingChipsDownward(connectFourBoard, moveRow, moveColumn, color) {


  let matchingChips = 0;

  console.table(connectFourBoard);
  console.log(moveRow);
  console.log(connectFourBoard.length);

  // Check every row for that column
  for (row = moveRow + 1; row < connectFourBoard.length; row++) {
    const rowArray = connectFourBoard[moveRow];
    console.log(color);
    if (rowArray[moveColumn] !== color) {
      console.log(rowArray);
      console.log(rowArray[moveColumn]);
      break;
    } else {
      matchingChips++;
    }
  }

  return matchingChips;
}

function getMatchingChipsLeft(connectFourBoard, moveRow, moveColumn, color) {
  const rowArray = connectFourBoard[moveRow];

  let matchingChips = 0;

  console.log(rowArray);

  for (col = moveColumn - 1; col >= 0; col--) {
    if (rowArray[col] !== color) {
      break;
    } else {
      console.log("test");
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

  for (row = moveRow + 1; row < connectFourBoard.length ; row++) {
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

  for (row = moveRow + 1; row < connectFourBoard.length; row++) {
    for (col = moveColumn - 1; col <= 0; col--) {
      if (connectFourBoard[row][col] !== color) {
        break;
      } else {
        matchingChips++;
      }
    }

  }
  return matchingChips;
}

function columnFull(connectFourBoard, moveRow, moveColumn, color) {
  let chips = 0;

  for (row = moveRow + 1; row < connectFourBoard.length; row++) {
    const rowArray = connectFourBoard[moveRow];
    if (!rowArray.includes("white")) {
      chips++;
    }
  }

  return chips;
}

function getMatchingChipsHorizontal(connectFourBoard, moveRow, moveColumn, color) {
  return getMatchingChipsLeft(connectFourBoard, moveRow, moveColumn, color) + getMatchingChipsRight(connectFourBoard, moveRow, moveColumn, color) + 1;
}

function getMatchingChipsVertical(connectFourBoard, moveRow, moveColumn, color) {
  return getMatchingChipsDownward(connectFourBoard, moveRow, moveColumn, color) + 1;
}

function checkBoard(connectFourBoard, moveRow, moveColumn, color) {
  const matchingDownward = getMatchingChipsDownward(connectFourBoard, moveRow, moveColumn, color);
  const matchingToLeft = getMatchingChipsLeft(connectFourBoard, moveRow, moveColumn, color);
  const matchingToRight = getMatchingChipsRight(connectFourBoard, moveRow, moveColumn, color);
  const matchingHorizontal = getMatchingChipsHorizontal(connectFourBoard, moveRow, moveColumn, color);
  const matchingVertical = getMatchingChipsVertical(connectFourBoard, moveRow, moveColumn, color);
  const matchingDiagonalLeftUp = getMatchingChipsDiagonalLeftUp(connectFourBoard, moveRow, moveColumn, color);
  const matchingDiagonalRightUp = getMatchingChipsDiagonalRightUp(connectFourBoard, moveRow, moveColumn, color);
  const fullColumn = columnFull(connectFourBoard, moveRow, moveColumn, color);
  console.log(`Checking below ${moveRow}`);
  console.log(`Checking left of ${moveColumn}`);
  console.log(`Checking right of ${moveColumn}`);
  console.log(`Checking diagonally up to the left of ${moveColumn}`);
  console.log(`${matchingDownward} ${color} Chips found below`);
  console.log(`${matchingToLeft} ${color} Chips found to the left`);
  console.log(`${matchingToRight} ${color} Chips found to the right`);
  console.log(`${matchingDiagonalLeftUp} ${color} Chips found diagonally up to the left of`);
  console.log(`${matchingDiagonalRightUp} ${color} Chips found diagonally up to the right of`);
  console.log(`${matchingVertical} ${color} Chips found vertically`);
  console.log(`${matchingHorizontal} ${color} Chips found horizontally`);
  console.log(`${fullColumn} chips found in ${moveColumn}`);

  if (matchingHorizontal === 4 || matchingVertical === 4) {
    if (color === "red") {
      alert(`${player1} wins!`);
    }
    else {
      alert(`${player2} wins!`);

    }
  }

  if (isBoardFull()) {
    alert("It is a draw!")
  }

  if (fullColumn === 6) {
    alert("Column is full!");
  }
}

function isBoardFull(connectFourBoard, moveRow, moveColumn) {
  let chips = 0;

  console.table(connectFourBoard);

  for (row = moveRow - 1; row <= 0; row--) {
    for (col = moveColumn - 1; col <= 0; col--) {
      if (!connectFourBoard[row][col].includes("white")) {
        chips++;
      }
    }
  }
  return chips;
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
    // cell.addEventListener("click", (event) => { dropChip(event.target.cellIndex) });
    cell.addEventListener("click", dropChip);
    cell.style.backgroundColor = "white";
  })

  // if (isCPUOpponent === true) {
  //   console.log("test");
  //   CPUDropChip();
  // }
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

  // function dropChip(cellClicked) {
  // let cellClicked = event.target.cellIndex;

  //   let droppedRow = -1;

  //   let row = [];
  //   const tableRow = document.getElementsByTagName("tr");
  //   for (i = 5; i > -1; i--) {

  //     // console.log(style);
  //     if (tableRow[i].children[cellClicked].style.backgroundColor === "white") {
  //       droppedRow = i;
  //       row.push(tableRow[i].children[cellClicked]);
  //       playerTurn(row, droppedRow, cellClicked);
  //     }
  //   }
  // }

  // CPU Functionality

  // Play chip on random open slots
  // Find any column that's available

  // function getRandomSlot(randomColumn) {
  // const tableRow = document.getElementsByTagName("tr");
  // let row = [];
  // let droppedRow = -1;
  // const randomRow = Math.floor(Math.random() * 6);
  // if (randomRow[i].children[randomColumn].style.backgroundColor === "white") {
  //   droppedRow = i;
  //   row.push(randomRow[i].children[randomColumn]);
  //   playerTurn(row, droppedRow, randomColumn);
  // }
  // const randomColumn = Math.floor(Math.random() * 7);
  // return { row: randomRow, column: randomColumn };
  // }

  // function CPUDropChip() {
  // const rowArray = connectFourBoard[moveRow];
  // getRandomSlot();
  // dropChip(getRandomSlot);

  // }

  // Extract all logic related to changing turn to its own function. In dropChip function execute player change function at the end.

  // at the end of player turn ended function if the next player is cpu run cpu drop chip

  // Extract player transition

  // function playerTurn(row, droppedRow, cellClicked) {
  //   console.log();
  //   if (activePlayer === players[0]) {
  //     console.log(activePlayer);
  //     row[0].style.backgroundColor = "red";
  //     checkBoard(getBoard(), droppedRow, cellClicked, "red");
  //     displayCurrentPlayer.innerText = `${player1}\'s turn`;

  //     activePlayer = players[1];
  //   } else {
  //     row[0].style.backgroundColor = "yellow";
  //     checkBoard(getBoard(), droppedRow, cellClicked, "yellow");
  //     console.log(players[0]);
  //     displayCurrentPlayer.innerText = `${CPU}\'s turn`;
  //     activePlayer = players[0];
  //   }

  //   // Check if active player is CPU
  //   if (activePlayer === "Computer") {
  //     console.log("Computer displayed.");
  //     CPUDropChip();
  //   }
  //
}

function restartGame() {
  const slots = document.querySelectorAll(".slot");
  console.log(slots);
  slots.forEach(slot => {
    slot.style.backgroundColor = "white";
  });
}
menu.style.display = "flex";
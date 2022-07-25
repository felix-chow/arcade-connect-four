// Assign variables to IDs
let vsCPU = document.querySelector("#versus-cpu");
let twoPlayers = document.querySelector("#two-players");

// When player clicks "Two Players" option, call initializeTwoPlayerGame
twoPlayers.addEventListener("click", initializeTwoPlayerGame);


// Loop through all 7 columns of the board
// for (let i = 0; i < 7; i++) {
//   board.push([])

function initializeTwoPlayerGame() {
  getPlayerNames();
}

// Initialize board to empty array
const board = [];

const gameState = {
  board: board,
  players: []
}

function getPlayerNames() {

  vsCPU.remove();
  twoPlayers.remove();

  const currentPlayer = document.querySelector(".current-player");
  const newPlayer = document.createTextNode("Please enter your name: ");
  currentPlayer.appendChild(newPlayer);

  const input = document.createElement("input");
  input.id = "name";

  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  
  currentPlayer.appendChild(input);
  currentPlayer.appendChild(submitButton);

  submitButton.addEventListener("click", )

  console.log(input.querySelector("#name").value);


  // const backButton = document.createElement("input");
  // backButton.setAttribute("type", "submit");
  // currentPlayer.appendChild(backButton);
  // backButton.addEventListener("click", mainMenu);

  
}

function createBoard() {

  const boardDisplay = document.querySelector(".board");

  for (let i = 1; i <= 7; i++) {
    const divColumn = document.createElement("div");
    divColumn.classList.add("column");
    boardDisplay.appendChild(divColumn);
  }

  for (let j = 0; j <= 6; j++) {
    const divDisc = document.createElement("div");
    divDisc.classList.add("disc");
    divColumn = document.querySelector(".column");

    divColumn.appendChild(divDisc);
  }

}

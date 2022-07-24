// Initialize board to empty array
const board = [];

// Loop through all 7 columns of the board
for (let i = 0; i < 7; i++) {
  board.push([])
}

const gameState = {
    board: board, // from above
    players: ['red', 'yellow'] // or whatever
  }
let board;
let players = ["X", "O"];
let activePlayer = 0;

function startGame() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  activePlayer = 0;
  renderBoard(board);
}

function click(row, column) {
  board[row][column] = players[activePlayer];
  renderBoard(board);

  if ( checkLane() || checkDiagonal() ) {
    showWinner(activePlayer);
  }

  switch(activePlayer) {
    case 0:
      activePlayer = 1;
      break;
    case 1:
      activePlayer = 0;
      break;
  }
}

function checkLane() {
  let row, column;
  for (let i = 0; i < 3; i++) {
    row = true;
    column = true;
    for (let j = 0; j < 3; j++) {
      row = row && (board[i][j] === players[activePlayer]);
      column = column && (board[j][i] === players[activePlayer]);
    }
    if (row || column) {
      return true;
    }
  }
  return false;
}

function checkDiagonal() {
  let diagonal1 = true;
  let diagonal2 = true;
  for (let i = 0; i < 3; i++) {
    diagonal1 = diagonal1 && (board[i][i] === players[activePlayer]);
    diagonal2 = diagonal2 && (board[i][2-i] === players[activePlayer]);
  }
  if (diagonal1 || diagonal2) {
    return true;
  }
  return false;
}
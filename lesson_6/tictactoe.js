const readline = require("readline-sync");

const EMPTY_SQUARE = " ";
const USER_PIECE = "X";
const COMP_PIECE = "O";

// formats displayed messages
function userPrompt(message) {
  console.log(`>> ${message}`);
}

// displays the board based on gameplay
function displayBoard(board) {
  console.clear();

  userPrompt(
    `You are playing as ${USER_PIECE}. The computer is ${COMP_PIECE}.`
  );

  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
}

// displays initial board
function emptyBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = EMPTY_SQUARE;
  }

  return board;
}

// checks for empty squares
function findEmptySquare(board) {
  return Object.keys(board).filter((key) => {
    return board[key] === EMPTY_SQUARE;
  });
}

function joinOr(board, punctuate = ", ", delimiter = " or") {
  board = findEmptySquare(board);
  let boardAllButLast = board.slice(0, board.length - 1).join(punctuate);

  if (board.length > 1) {
    return userPrompt(
      `Choose a square (${boardAllButLast}${delimiter} ${
        board[board.length - 1]
      }):`
    );
  } else {
    return userPrompt(`Choose a square (${board}):`);
  }
}

// player chooses a square to place their X
function playerChoice(board) {
  let square;

  while (true) {
    joinOr(board, "; ", " and");
    square = readline.question().trim();
    if (findEmptySquare(board).includes(square)) break; // guard clause

    userPrompt("Not a valid choice, please try again.");
  }

  board[square] = USER_PIECE;
}

// computer randomly chooses a square to place O
function computerChoice(board) {
  let randomIndex = Math.floor(Math.random() * findEmptySquare(board).length);

  let square = findEmptySquare(board)[randomIndex];
  board[square] = COMP_PIECE;
}

function boardFull(board) {
  return findEmptySquare(board).length === 0;
}

// logic to find the final winner, or a tie
function findWinner(board) {
  let winningThree = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9], // rows
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9], // columns
    [1, 5, 9],
    [3, 5, 7], // diagonals
  ];

  for (let line = 0; line < winningThree.length; line++) {
    let [sq1, sq2, sq3] = winningThree[line];

    if (
      board[sq1] === USER_PIECE &&
      board[sq2] === USER_PIECE &&
      board[sq3] === USER_PIECE
    ) {
      return "Player";
    } else if (
      board[sq1] === COMP_PIECE &&
      board[sq2] === COMP_PIECE &&
      board[sq3] === COMP_PIECE
    ) {
      return "Computer";
    }
  }

  return null;
}

// returns true or false
function existingWinner(board) {
  return findWinner(board);
}

while (true) {
  let board = emptyBoard();

  // loop that calls functions repeatedly until the board is full or winner declared
  while (true) {
    displayBoard(board);

    playerChoice(board);
    if (existingWinner(board) || boardFull(board)) break; // checks for winner after each turn

    computerChoice(board);
    if (existingWinner(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (existingWinner(board)) {
    userPrompt(`${findWinner(board)} won!`);
  } else {
    userPrompt(`It's a tie!`);
  }

  userPrompt(`Play again? (y/n)`);
  let answer = readline.question().toLowerCase()[0];
  if (answer !== "y") break;
}

console.clear();
userPrompt(`Goodbye!`);

const readline = require("readline-sync");

const EMPTY_SQUARE = " ";
const USER_PIECE = "X";
const COMP_PIECE = "O";
const MAX_WINS = 3;
const SQUARE_FIVE = "5";
const FIRST_PLAYER = ["player", "p", "computer", "c"];
const VALID_ANSWERS = ["y", "yes", "no", "n"];
const WIN_COMBOS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // rows
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], // columns
  [1, 5, 9],
  [3, 5, 7], // diagonals
];

// formats displayed messages
function userPrompt(message) {
  console.log(`>> ${message}`);
}

function welcome(scores) {
  console.clear();
  console.log(scores);
  userPrompt(
    `Welcome to Tic-Tac-Toe!\n The first player to win ${MAX_WINS} games is the grand winner!`
  );
  userPrompt(`You are ${USER_PIECE}. The computer is ${COMP_PIECE}.\n`);
}

// displays the board based on gameplay
function displayBoard(board, scores) {
  welcome(scores);

  console.log("     |     |".padStart(27));
  console.log(
    `  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`.padStart(30)
  );
  console.log("     |     |".padStart(27));
  console.log("-----+-----+-----".padStart(32));
  console.log("     |     |".padStart(27));
  console.log(
    `  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`.padStart(30)
  );
  console.log("     |     |".padStart(27));
  console.log("-----+-----+-----".padStart(32));
  console.log("     |     |".padStart(27));
  console.log(
    `  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`.padStart(30)
  );
  console.log("     |     |     \n".padStart(33));
}

// displays initial board
function emptyBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = EMPTY_SQUARE;
  }

  return board;
}

function chooseFirstPlayer() {
  userPrompt(`Who shall go first? You ('p') or the computer ('c')?`);
  let startingPlayer = readline.question().toLowerCase().trim();
  while (!FIRST_PLAYER.includes(startingPlayer)) {
    userPrompt(`Not valid, try again.`);
    userPrompt(`Who shall go first? You ('p') or the computer ('c')?`);
    startingPlayer = readline.question().toLowerCase().trim();
  }
  return startingPlayer;
}

// checks for empty squares
function findEmptySquare(board) {
  return Object.keys(board).filter((key) => {
    return board[key] === EMPTY_SQUARE;
  });
}

// square number choices separated by punctuation
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
function chooseRandomSquare(board) {
  let randomIndex = Math.floor(Math.random() * findEmptySquare(board).length);
  let square = findEmptySquare(board)[randomIndex];
  return square;
}

// AI COMPUTER (OFFENSIVE AND DEFENSIVE MOVES)
function findVulnerableSquare(line, board, piece) {
  let piecesInLine = line.map((square) => board[square]); // returns pieces in play on board

  if (piecesInLine.filter((val) => val === piece).length === 2) {
    let emptySquare = line.find((square) => board[square] === EMPTY_SQUARE); // if empty, finds ID of square
    if (emptySquare !== undefined) {
      // if unused, the key is returned to the caller filter
      return emptySquare;
    }
  }

  return null;
}

function offenseOrDefense(board) {
  let square;

  // DEFENSIVE
  for (let index = 0; index < WIN_COMBOS.length; index++) {
    let line = WIN_COMBOS[index];
    square = findVulnerableSquare(line, board, COMP_PIECE);
    if (square) break;
  }

  // OFFENSIVE
  if (!square) {
    for (let index = 0; index < WIN_COMBOS.length; index++) {
      let line = WIN_COMBOS[index];
      square = findVulnerableSquare(line, board, USER_PIECE);
      if (square) break;
    }
  }
  board[square] = COMP_PIECE;
}

// computer places game piece
function computerChoice(board) {
  let square;

  offenseOrDefense(board);

  // MIDDLE SQUARE
  if (!square) {
    if (board[SQUARE_FIVE] === EMPTY_SQUARE) {
      square = 5;
    }
  }

  // RANDOM SQUARE
  if (!square) {
    square = chooseRandomSquare(board);
  }

  board[square] = COMP_PIECE;
}

// choose a square depending on the current player
function chooseSquare(board, currentPlayer) {
  if (currentPlayer === "p") {
    playerChoice(board);
  } else if (currentPlayer === "c") {
    computerChoice(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === "p") {
    return "c";
  } else {
    return "p";
  }
}

function boardFull(board) {
  return findEmptySquare(board).length === 0;
}

// logic to find the final winner, or a tie
function findWinner(board) {
  for (let line = 0; line < WIN_COMBOS.length; line++) {
    let [sq1, sq2, sq3] = WIN_COMBOS[line];

    if (
      board[sq1] === USER_PIECE &&
      board[sq2] === USER_PIECE &&
      board[sq3] === USER_PIECE
    ) {
      return "player";
    } else if (
      board[sq1] === COMP_PIECE &&
      board[sq2] === COMP_PIECE &&
      board[sq3] === COMP_PIECE
    ) {
      return "computer";
    }
  }

  return null;
}

function someoneWon(board) {
  return !!findWinner(board);
}

function updateScore(scores, winner) {
  if (Object.keys(scores).includes(winner)) {
    scores[winner]++;
  }
}

// determines when the match ends
function matchEnds(scores) {
  return scores["player"] === MAX_WINS || scores["computer"] === MAX_WINS;
}

// match winner displayed
function grandWinner(scores) {
  if (scores["player"] > scores["computer"]) {
    userPrompt(`Congrats, you are the GRAND WINNER!`);
  } else if (scores["computer"] > scores["player"]) {
    userPrompt(`THE COMPUTER IS THE GRAND WINNER!!`);
  }
}

// option to play another match
function playAgain() {
  userPrompt(`Another match? (y/n)`);
  let nextMatch = readline.question().toLowerCase().trim();
  while (!VALID_ANSWERS.includes(nextMatch)) {
    userPrompt(`Not valid, try again.`);
    userPrompt(`Another match? (y/n)`);
    nextMatch = readline.question().toLowerCase().trim();
  }
  return nextMatch[0];
}

// option to quit between rounds
function playNextRound(scores, activeGame) {
  if (!matchEnds(scores)) {
    let answer = readline
      .question(userPrompt(`Press enter to play next round, or 'q' to quit.`))
      .toLowerCase()
      .trim()[0];
    activeGame = answer !== `q`;
  }

  return activeGame;
}

// PROGRAM LOOP
while (true) {
  console.clear();
  let activeGame = true;
  let board = emptyBoard();
  let chosenFirst = chooseFirstPlayer();
  let scores = { player: 0, computer: 0 };

  // MATCH LOOP
  while (activeGame) {
    board = emptyBoard();
    let currentPlayer = chosenFirst;

    // GAME LOOP
    while (true) {
      displayBoard(board, scores);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    if (someoneWon(board)) {
      updateScore(scores, findWinner(board));
      displayBoard(board, scores);
      userPrompt(`${findWinner(board)} won!`);
    } else {
      updateScore(scores, findWinner(board));
      displayBoard(board, scores);
      userPrompt(`It's a tie!`);
    }
    activeGame = playNextRound(scores);

    if (matchEnds(scores)) break;
  }
  grandWinner(scores);
  if (playAgain() !== "y") break;
}
console.clear();
userPrompt(`Goodbye!`);

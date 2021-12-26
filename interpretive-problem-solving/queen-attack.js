/*
// UNDERSTANDING THE PROBLEM
- INPUT: string rep of board w/ 2 queens
 - characters: `-`, `W`, `B`
- OUTPUT: true/false
 - true if queens can attack each other, false if they can't

- RULES: 
 - The queens can attack if they are on the 
  - same row: W row number === B row number
  - same column: w column number === B column number
  - same diagonal: diff btw row numbers === diff btw column numbers
   - distance of rows === distance of columns
    - distance: Math.abs(x1 - x2) or Math.abs(y1 - y2)
  - what does diagonal mean? how about distance?
  - each row length is 8
  - 8 rows on board

// EXAMPLES/EDGE CASES: 
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ W _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ B _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
white queen: (2,3)
black queen (5,6)
queens are on the same diagonal so they can attack each other (true)

// DATA STRUCTURE(S): 
chess board: 8x8 array of arrays
 - coordinates, x and y axis
 above as array of arrays:
 [
  ['_', '_', '_', '_', '_', '_', '_', '_'], 0
  ['_', '_', '_', '_', '_', '_', '_', '_'], 1
  ['_', '_', '_', 'W', '_', '_','_', '_'], 2
  ['_', '_', '_', '_', '_', '_','_', '_'], 3
  ['_', '_', '_', '_', '_', '_', '_', '_'], 4
  ['_', '_', '_', '_', '_', '_', '_', '_'], 5
  ['_', '_', '_', '_', '_', '_', 'B', '_'], 6
  ['_', '_', '_','_', '_', '_','_', '_'], 7
  ['_', '_', '_','_', '_', '_','_', '_'] 8
]
coordinates of queens represented by arrays with 2 integer elements (idx 0 is row, idx 1 is col)

// ALGORITHM:
1. take input string and convert to 8x8 array data structure 
 - split input string by \n
 - iterate through array of rows and split each row by " "
2. iterate through array of subarrays to get coordinates of white and black queens
white queen = (x1,y1)
black queen = (x2, y2)
 x1/x2 === idx of row (subarray)
 y1/y2 === idx (of letter/piece w/in row)
3. determine if queens can attack each other
 - are queens on same row? 
   - same row: W row number === B row number
  - x1 === x2
 - same column? 
  - same column: w column number === B column number
  - y2 === y2
 - or same diagonal?
 - distance of rows === distance of columns
    - distance: Math.abs(x1 - x2) or Math.abs(y1 - y2)
*/

// same diagonal
let game1 =
  "_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ W _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ B _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _"; // true

// // queens on same row
// let game2 =
//   "_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ W _ _ B _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _"; // true

// // queens on same column
// let game2 =
//   "_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ B _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ _ _\n_ _ _ _ _ _ W _"; // true

function queenAttack(board) {
  let boardArray = board.split("\n").map((row) => row.split(" "));
  let whiteQueen = findCoordinates("W", boardArray);
  let blackQueen = findCoordinates("B", boardArray);
  return blackQueen;
}

function findCoordinates(queen, boardArray) {
  let coordinates = [0, 0];
  boardArray.forEach((row, idx) => {
    if (row.includes(queen)) {
      coordinates[0] = idx;
      coordinates[1] = row.indexOf(queen);
    }
  });
  return coordinates;
}

console.log(queenAttack(game1));

/* 
// REQUIREMENTS:  
- displays an 8-pointed star (N x N grid)
- N is odd integer
- smallest star = 7 x 7 grid (N is 7)

// input: odd integer N

// output: string asterisks * display of 8 point star

// EXAMPLES/TEST CASES: see below
N = 7
7 lines of asterisks and spaces (all lines length = N):
line 1: 1 star, 2 spaces, 1 star, 2 spaces, 1 star
line 2: 1 space, 1 star, 1 space, 1 star, 1 space, 1 star, 1 space
line 3: 2 spaces, 3 stars, 2 spaces
line 4: 7 stars
line 5: repeat line 3
line 6: repeat line 2
line 7: repeat line 1

N = 9
9 lines of asterisks and spaces (all lines length = N):
line 1: 1 star, 3 spaces, 1 star, 3 spaces, 1 star
line 2: 1 space, 1 star, 2 spaces, 1 star, 2 spaces, 1 star, 1 space
line 3: 2 spaces, 1 star, 1 space, 1 star, 1 space, 1 star, 2 spaces
line 4: 3 spaces, 3 stars, 3 spaces
line 5: 9 stars
line 6: repeat line 4
line 7:  repeat line 3
line 8: repeat line 2
line 9: repeat line 1

// DATA STRUCTURES 
- all rows except the middle row have 3 stars (asterisks) and N - 3 spaces
 - first row:
  - star (0) + ((N - 3) / 2) spaces + star (index N / 2 floored) + ((N - 3) / 2) spaces + star (last index)
  - the stars are separated by (N - 3) / 2 spaces
  - first and last char are stars
  - middle star is in index Math.ceil(N / 2)
 - 2nd row:
  - space + star + ((N - 3) / 3) spaces + star + ((N - 3) / 3) spaces + star + space
 - 3rd row:
  - 
- the middle row always has N stars

ALGORITHM:
- function star logs the appropriate number of rows
 - iterate and log rows before middle row: (n - 1) / 2
 - then log the middle row (n stars)
 - then iterate and low rows after middle row: ((n - 1) / 2) - 1 until you reach 0 rows left
- function printRows calculates the number of spaces and stars then prints them
 - the number of spaces between stars (middle spaces): (n - 3) / 2 - row 
 - number of spaces padding stars (outside/exterior): (n - 3) / 2 - middle spaces 
*/

function star(n) {
  let middleRow = (n - 1) / 2; // ex n = 7; (7 - 1) / 2 = 3

  // logs all rows up until before the middle row
  for (let row = 0; row < middleRow; row += 1) {
    printRows(row, n);
  }
  console.log("*".repeat(n)); // prints middle row

  // logs the appropriate number of rows after middle row
  for (let row = middleRow - 1; row >= 0; row -= 1) {
    printRows(row, n);
  }
}

// calculates the number of stars and spaces and prints them
function printRows(row, n) {
  let middleSpaces = (n - 3) / 2 - row;
  let outerSpaces = (n - 3) / 2 - middleSpaces;
  console.log(
    " ".repeat(outerSpaces) + ["*", "*", "*"].join(" ".repeat(middleSpaces))
  );
}

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

// star(9);
// // logs
// // *   *   *
// //  *  *  *
// //   * * *
// //    ***
// // *********
// //    ***
// //   * * *
// //  *  *  *
// // *   *   *

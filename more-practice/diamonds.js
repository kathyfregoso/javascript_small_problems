/*
// UNDERSTANDING THE PROBLEM
- INPUT: a string letter (uppercase)
- OUTPUT: diamond string (printed)

- RULES: 
 - top of diamond point is an 'A'
 - input letter at widest point
 - last row is one 'A'
 - all rows (not 1st and last) have exactly 2 identical letters
 - horizontally and vertically symmetric diamond
 - square shape (width === height)
 - letters form diamond shape
 - top half letters in ascending order
 - bottom half letters in descending order
 - 4 corners (with spaces) are triangles

implicit:
- if input is A, return itself
- input can be btw A - Z
A === 1 row, B = 3 rows, C = 5 rows, D = 7, E = 9, 

// EXAMPLES/EDGE CASES: see below

// DATA STRUCTURE(S): 
string input and output
store alphabet in list (position is idx + 1)

// ALGORITHM:
1. number of rows === number of letters before input letter (position of letter - count of letters behind letter) ex A: 1 - 0 = 1 row
2. if input is A, return A
3. if input is not A:
 - left spaces (top row) is letter pos - 1
 - every loop, decrement space # by 1 until reaching 0
4. middle row middle spaces === letter position
*/

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function diamonds(letter) {
  if (letter === "A") return "A";
  let letterPosition = ALPHABET.indexOf(letter) + 1;
  let middleRow = letter + " ".repeat(letterPosition) + letter;

  let topHalf = makeTop(letter, letterPosition);
  let bottomHalf = makeBottom(letter, letterPosition);

  return (
    " ".repeat(letterPosition) +
    "A" +
    topHalf +
    middleRow +
    bottomHalf +
    " ".repeat(letterPosition) +
    "A"
  );
}

function makeTop(letter, letterPosition) {
  for (let row = 0; row < letterPosition; row += 1) {
    console.log(ALPHABET[row]);
  }
}

function makeBottom(letter, letterPosition) {}

console.log(diamonds("A"));
// A

console.log(diamonds("B"));
//  A
// B B
//  A

console.log(diamonds("C"));
//   A
//  B B
// C   C
//  B B
//   A

console.log(diamonds("D"));
//    A
//   B B
//  C   C
// D     D
//  C   C
//   B B
//    A

console.log(diamonds("E"));
/* 
		A
   B B
  C   C
 D     D
E       E
 D     D
  C   C
   B B
    A
*/

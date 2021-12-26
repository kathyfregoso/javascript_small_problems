/*
// UNDERSTANDING THE PROBLEM
- INPUT: string word
- OUTPUT: integer (scrabble score)
- RULES: 
  -letter values:
    A, E, I, O, U, L, N, R, S, T  -  1
    D, G  -  2
    B, C, M, P  - 3
    F, H, V, W, Y  -  4
    K  -  5
    J, X  -  8
    Q, Z  -  10

// EXAMPLES/EDGE CASES:  see below

// DATA STRUCTURE(S): 
- object for looking up letter values
- string word => array of characters (abstraction)

// ALGORITHM:
- split str word into array of characters
- iterate through array of chars:
 - use object to look up score to replace current letter
- when all letters have been replaced with their score,
 reduce (sum up) the letter scores to get the sum
  and return the sum

*/

const LETTER_VALUES = {
  aeioulnrst: 1,
  dg: 2,
  bcmp: 3,
  fhvwy: 4,
  k: 5,
  jx: 8,
  qz: 10,
};

function score(string) {
  let chars = string.toLowerCase().split("");

  let charValues = chars.map((letter) => {
    let value = findValue(letter);
    return LETTER_VALUES[value];
  });

  return charValues.reduce((curr, acc) => curr + acc, 0);
}

function findValue(letter) {
  let valueKeys = Object.keys(LETTER_VALUES).filter((key) =>
    key.includes(letter)
  );
  return valueKeys;
}

console.log(score("a")); // 1
console.log(score("cabbage")); // 14
console.log(score("Cabbage")); // 14
console.log(score("quiz")); // 22

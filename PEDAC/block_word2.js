/*
// UNDERSTANDING THE PROBLEM
- INPUT: string word
- OUTPUT: boolean
 - true if word can be spelled with blocks 
 - false otherwise
- RULES: 
- case insensitive letters
  - collection of spelling blocks has two letters per block:
  B:O   X:K   D:Q   C:P   N:A
  G:T   R:E   F:S   J:W   H:U
  V:I   L:Y   Z:M
  - can only spell words that don't use both letters from any given block
  - each block can only be used 1x

// EXAMPLES/EDGE CASES: see below

// DATA STRUCTURE(S): array to hold blocks
- string input, string elements in array to represent blocks

// ALGORITHM:
- create an array of uppercase string pairs as shown 
- uppercase input to make it case insensitive
- split input word into array of chars
- remove any non-alphabetic characters from input str
- iterate through string of characters:
 - if char exists in one of the pair elements, remove element from pairs array
  then continue iteration
 - if char doesn't exist in pair within array, then return false
- if all letters pass the check, return true
*/

function isBlockWord(word) {
  let pairs = [
    "BO",
    "XK",
    "DQ",
    "CP",
    "NA",
    "GT",
    "RE",
    "FS",
    "JW",
    "HU",
    "VI",
    "LY",
    "ZM",
  ];
  let wordCopy = word
    .toUpperCase()
    .split("")
    .filter((char) => /[a-z]/gi.test(char));
  let output = true;

  wordCopy.forEach((char) => {
    if (blockExists(char, pairs)) {
      let block = findBlock(char, pairs);
      let blockIdx = pairs.indexOf(block);
      pairs.splice(blockIdx, 1);
    } else {
      output = false;
    }
  });
  return output;
}

function blockExists(char, arr) {
  return arr.some((pair) => pair.includes(char));
}

function findBlock(char, arr) {
  return arr.filter((pair) => pair.includes(char))[0];
}

console.log(isBlockWord("BATCH")); // true
console.log(isBlockWord(" B A T C H . ")); // true
console.log(isBlockWord("BUTCH")); // false
console.log(isBlockWord("jest")); // true
console.log(isBlockWord("bananas")); // false
console.log(isBlockWord("KeYs")); // true

/*
// UNDERSTANDING THE PROBLEM
- INPUT: string
- OUTPUT: boolean
 - true if word can be spelled with blocks
 - false otherwise
- RULES: collection of spelling blocks has 2 letters per block:
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
 - can't spell words that use both letters in a block
 - use each block only 1x
 - case insensitive (make letters lowercase)
 - same letter can appear twice?

// EXAMPLES/EDGE CASES: 
BATCH - B:O N:A G:T C:P H:U - true
BUTCH - B:O H:U <= uses both H and U - false
jest = J:W, R:E, F:S, G:T - true
bonfires - B:O fails, N:A ok, F:S fails, V:I ok, R:E fails
 false
loves = L:Y ok, B:O ok, V:I ok, R:E ok, F:S ok

// DATA STRUCTURE(S): strings, arrays
- structure to hold blocks: array of subarrays

// ALGORITHM:
- create array of subarrays holding block letter pairs
- lowercase input string
- remove extra spaces
- turn word into array of chars
- loop through arry of chars. for each letter:
 - if we can't find a block with that letter, return false
 - else remove block with that letter from array of blocks
- return true otherwise
*/

function isBlockWord(string) {
  let blocks = [
    "bo",
    "xk",
    "dq",
    "cp",
    "na",
    "gt",
    "re",
    "fs",
    "jw",
    "hu",
    "vi",
    "ly",
    "zm",
  ];
  let chars = string.toLowerCase().trim().split("");

  for (let idx = 0; idx < chars.length; idx += 1) {
    let letter = chars[idx];
    let matchBlock = blocks.filter((block) => block.includes(letter))[0];

    if (matchBlock === undefined) {
      return false;
    } else {
      blocks.splice(blocks.indexOf(matchBlock), 1);
    }
  }

  return true;
}

console.log(isBlockWord("bonfires")); // false
console.log(isBlockWord("battery")); // false
console.log(isBlockWord("loVeS ")); // true
console.log(isBlockWord("BATCH")); // true
console.log(isBlockWord("BUTCH")); // false
console.log(isBlockWord("jest")); // true

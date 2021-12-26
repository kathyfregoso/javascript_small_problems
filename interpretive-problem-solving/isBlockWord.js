/* 
// REQUIREMENTS: 
collection of 13 2-letter blocks:
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M 
- words you can spell w/ blocks limited to words that don't use both letters for any given block
- use each block only once
- case insensitive

// input: word (string)

// output: boolean
true unless:
false if input contains any 2 letters from same block
false if block is used more than once (if followed, the prev. line also true)

// EXAMPLES/TEST CASES: see below

// DATA STRUCTURES and ALGORITHMS:
- use array to hold blocks:
['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM']

- uppercase string then split into array of letters for iteration
- loop through array of letters:
 - for each letter, if no block contains the letter, return false
 - else, remove block that contains the letter from blocks array
- return true after all letters in input string are processed

*/

function isBlockWord(str) {
  let blocks = [
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
  let arr = str.toUpperCase().split("");
  let boolean = true;

  arr.forEach((letter) => {
    if (checkBlock(letter, blocks)) {
      blocks = blocks.filter((block) => !block.includes(letter));
    } else if (!checkBlock(letter, blocks)) {
      boolean = false;
    }
  });
  console.log(boolean);
  return boolean;
}

function checkBlock(char, blocks) {
  return blocks.some((el) => el.includes(char));
}

isBlockWord("BATCH"); // true
isBlockWord("BUTCH"); // false
isBlockWord("jest"); // true
isBlockWord("floW"); // true
isBlockWord("APPLE"); // false
isBlockWord("apple"); // false
isBlockWord("apPLE"); // false
isBlockWord("Box"); // false

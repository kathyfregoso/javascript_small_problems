// REQUIREMENTS:
// input: array with string elements

// output: array of the same values with all the vowels removed (a, e, i, o, u)

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:

// ALGORITHMS:
// declare var with empty array
// loop through input array
// - loop through string element (split to arr of chars) - SUB PROCESS
// - remove non-vowels in str element
// - continue to next array string element
// output new array

const VOWELS = ["a", "e", "i", "o", "u"];

// removes vowels from a string
function deVowel(str) {
  let arrOfChar = str.split("");

  return arrOfChar
    .filter((char) => !VOWELS.includes(char.toLowerCase()))
    .join("");
}

// transforms each array str element to a string with no vowels using helper function deVowel
function removeVowels(arrOfStr) {
  console.log(arrOfStr.map((str) => deVowel(str)));
  return arrOfStr.map((str) => deVowel(str));
}

removeVowels(["abcdefghijklmnopqrstuvwxyz"]); // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(["green", "YELLOW", "black", "white"]); // ["grn", "YLLW", "blck", "wht"]
removeVowels(["ABC", "AEIOU", "XYZ"]); // ["BC", "", "XYZ"]

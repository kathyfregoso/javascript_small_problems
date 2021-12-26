// INPUT:
// a string of words separated by spaces

// OUTPUT:
// a string of words with the first and last letters of every word swapped

// REQUIREMENTS:
// every word contains at least one letter
// the string will always contain at least one word
// each string contains nothing but words and spaces
// no leading, trailing, or repeating spaces

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// strings
// arrays

// ALGORITHMS:
// 1. split the string into an array of words delimited by spaces
// 2. loop through the array
// 3. in each loop, switch the first letter with last letter of current element
// 4. each word gets put into a new array
// 5. return the new array

function swap(string) {
  let wordsArr = string.split(" ");

  // it's ok to modify contents of array here, since we are only changing the values of the array elements
  // we are not mutating the array
  for (let i = 0; i < wordsArr.length; i++) {
    wordsArr[i] = swapChars(wordsArr[i]); // extracts logic from swapChars function
  }

  return wordsArr.join(" ");
}

// switches characters in a single word
function swapChars(string) {
  if (string.length === 1) {
    // guard clause
    return string;
  }

  // last char + middle characters + first char
  return string[string.length - 1] + string.slice(1, -1) + string[0];
  // middle characters = slice extracted 2nd char to second to last char
}

swap("Oh what a wonderful day it is"); // "hO thaw a londerfuw yad ti si"
swap("Abcde"); // "ebcdA"
swap("a"); // "a"

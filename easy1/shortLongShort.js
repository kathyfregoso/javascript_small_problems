// INPUTS: 
// two strings, one is shorter than the other

// OUTPUTS:
// concatenation of strings in this order: 1) short string, 2) long string, 3) short string again

// EXPLICIT REQUIREMENTS: 
// assume both strings are of different lengths

// IMPLICIT REQUIREMENTS: 
// the input string can be empty or white spaces

// QUESTIONS?:

// EXAMPLES / TEST CASE:
// shortLongShort('abc', 'defgh');    // "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
// shortLongShort('', 'xyz');         // "xyz"


// DATA STRUCTURES:
// strings

// ALGORITHM:
// create a function that accepts two strings of different lengths as arguments
// inside the function, find the length of each input string
// use a conditional:
// - if the string length is shorter, concatenate it first and at the end
// - if the string length is longer than the other, concatenate it in the middle of the two repeated short strings
// return the concatenated string

function shortLongShort(str1, str2) { // JS automatically converts string primitives to string objects when needed
  if (str1.length < str2.length) { // both inputs can use the .length property even though they reference primitive values not string objects
    return str1 + str2 + str1;
  } else if (str2.length < str1.length) {
    return str2 + str1 + str2;
  }
}


console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

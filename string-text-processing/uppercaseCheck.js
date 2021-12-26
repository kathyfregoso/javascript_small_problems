// REQUIREMENTS:
// input: string

// output:
// - true if all of the alphabetic chars inside the string are uppercase
// - false otherwise

// ignore chars that aren't alphabetic

// QUESTIONS:

// EXAMPLES/TEST CASES:
// empty strings return true

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// strictly compare the input string to a string where all the alphabetic letters are uppercased
// if that string is truthy,  return the boolean true
// else return false

function isUppercase(str) {
  console.log(str.toUpperCase() === str);
  return str.toUpperCase() === str;
}

isUppercase("t"); // false
isUppercase("T"); // true
isUppercase("Four Score"); // false
isUppercase("FOUR SCORE"); // true
isUppercase("4SCORE!"); // true
isUppercase(""); // true

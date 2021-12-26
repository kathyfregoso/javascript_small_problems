// INPUT:
// string: "The Munsters are creepy and spooky.";

// OUTPUT:
// string w/ swapped cases: `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

// REQUIREMENTS:
// return a new string
// swap the casing of each letter
// - lowerCase -> upperCase
// - upperCase => lowerCase

// QUESTIONS:

// EXAMPLES/TEST CASES:
// "" => ""
// accepts single char strings

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// convert str to array of chaars with split('')
// initialize var with " " value
// loop through array of chars with forEach
// if char is uppercase, change it to lowercase and concat to output string
// if char is lowercase, change it to uppercase and concat to output string
// return output string

let munstersDescription = "The Munsters are creepy and spooky.";

// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

function switchCases(string) {
  let output = " ";
  string.split("").forEach((el) => {
    if (el === el.toLowerCase() && el !== el.toUpperCase()) {
      output += el.toUpperCase();
    } else {
      output += el.toLowerCase();
    }
  });
  return output;
}

console.log(switchCases(munstersDescription));
console.log(switchCases(""));

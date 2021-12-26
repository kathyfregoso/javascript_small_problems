// INPUT: string

// OUTPUT: new string with every consonant character double

// REQUIREMENTS:
// double every consonant character
// does not double:
// - vowels ('a','e','i','o','u')
// - digits
// - punctuation
// - whitespace

// QUESTIONS:

// EXAMPLES/TEST CASES:
// 'String' => "SSttrrinngg"
// 'Hello-World!' => "HHellllo-WWorrlldd!"
// 'July 4th' => "JJullyy 4tthh"
// '' => ''

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// save empty string into a variable
// LOOP:
// - iterate through input string
// - IF the current string is not a vowel, digit, punctuation, or whitespace:
//   - double the consonant by concatenating current char to itself
// return the new str

const CONSONANTS = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function doubleConsonants(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (CONSONANTS.includes(str[i].toLowerCase())) {
      newStr += str[i] + str[i];
    } else {
      newStr += str[i];
    }
  }
  console.log(newStr);
}

doubleConsonants("String"); // "SSttrrinngg"
doubleConsonants("Hello-World!"); // "HHellllo-WWorrlldd!"
doubleConsonants("July 4th"); // "JJullyy 4tthh"
doubleConsonants(""); // ""

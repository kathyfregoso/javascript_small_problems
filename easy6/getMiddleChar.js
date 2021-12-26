// REQUIREMENTS:
// input: non-empty string
// output: middle char(s) of the string

// explicit:
// - if the string has an odd length, return exactly 1 char
// - if the string has an even length, return exactly 2 chars

// QUESTIONS:
// what if the length of the string is 2? assume we return the entire string

// EXAMPLES/TEST CASES:
// 'I Love JavaScript' - 'a' (17 chars)
// 'Launch School' - ' '
// 'Launch' - 'un'
// 'Launchschool' - 'hs'
// 'x' - 'x'

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// determine the input string length
// use the index of the string characters to determine the middle char(s)
// if odd, extract and return 1 middle character
// if even, extract and return 2 middle characters

// my solution
function centerOf(str) {
  if (str.length % 2 === 1) {
    let middleChar = Math.floor(str.length / 2);
    return str[middleChar];
  } else if (str.length % 2 === 0) {
    let charOne = str.length / 2 - 1;
    let charTwo = str.length / 2;
    return str[charOne] + str[charTwo];
  }
}

// alternative solution
function centerOf(string) {
  if (string.length % 2 === 1) {
    let centerIndex = (string.length - 1) / 2;
    return string[centerIndex];
  } else {
    let leftIndex = string.length / 2 - 1;
    return string.substring(leftIndex, leftIndex + 2);
  }
}

centerOf("I Love JavaScript"); // "a"
centerOf("Launch School"); // " "
centerOf("Launch"); // "un"
centerOf("Launchschool"); // "hs"
centerOf("x"); // "x"
centerOf("ah"); // 'ah'

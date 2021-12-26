// INPUT:
// string of digits
// - may or may not start with + or -

// OUTPUT:
// signed integer (negative or positive number)

// REQUIREMENTS:
// convert a string of digits to signed integer (with + or -)
// - if first char is +, return a positive number
// - if first char is -, return a negative number
// - if no sign given, return a positive number
// always assume input string contains a valid number
// no standard conversion methods ie parseInt() or Number()
// you CAN use stringToInteger() function from prev exercise

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:

// ALGORITHMS:

// solution 1:
// function stringToSignedInteger(string) {
//   return string * 1;
// }

// solution 2:
// function stringToSignedInteger(string) {
//   return +string;
// }

// solution 3:
function stringToInteger(string) {
  let digits = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  let arrayOfDigits = string.split("").map((character) => digits[character]);
  let val = 0;
  arrayOfDigits.forEach((digit) => (val = val * 10 + digit));
  return val;
}

function stringToSignedInteger(string) {
  if (string[0] === "-") {
    return -stringToInteger(string.slice(1, string.length)); // removes '-' char at index 0
  } else if (string[0] === "+") {
    return stringToInteger(string.slice(1, string.length)); // removes '+' char at index 0
  } else {
    return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

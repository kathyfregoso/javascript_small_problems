// INPUTS:
// string of digits

// OUTPUT:
// returns number (converted string input)

// REQS:
// assum all input chars are numeric
// don't worry about + or - signs
// do not use standard conversion methods like String() or Number()
// calculate the result by analyzing the chars in the string
// do not use parseInt()
// do not worry about invalid characters

// QUESTIONS:

// EXAMPLES / TEST CASES:

// DATA STRUCTURES:
// strings
// numbers

// ALGORITHM:
// solution 1:
// use + to implicitly convert input string to a number

// solution 2:
// use binary operation * to multiply string by 1; this coerces a string operand to a number

// solution 3:
// using an object for conversion:
// conversion of strings = each digit + 10 times the previous value
// example convert '431' to 431
// 10 * 0 + 4 => 4
// 10 * 4 + 3 => 43
// 10 * 43 + 1 => 431

// CODE:

function stringToInteger(string) {
  return +string;
}

// OR

function stringToInteger(string) {
  return string * 1;
}

// OR

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

// let output = stringToInteger("570");
// console.log(stringToInteger("431") === 431); // logs true
// console.log(stringToInteger("570") === 570); // logs true
// console.log(typeof output);

// further exploration:
// input: string of digits representing hexadecimal number

// output: converted input string to hexadecimal number

// reqs:
// - hexadecimal uses base 16 (not base 10)
// - "digits" A, B, C, D, E, F (and lowercase equivalents) correspond to decimal vals 10-15

// questions:

// exs:
// '4D9F' to 19871
// '4D9F' = (4 * (16^3)) + (13 * (16^2)) + (9 * (16^1)) + (15 * (16^0)))
// '4D9F' = 16384 + 3328 + 144 + 15
// '4D9F' = 19871 (in decimal/base-10 number)

// data structures:
// strings
// numbers

// algos:

function hexadecimalToInteger(string) {
  let newStr = string.toUpperCase();
  let hexDigits = {
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
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };
  let result = 0;
  let digitVal = 0;
  let stringArr = newStr.split("").forEach((el) => {
    digitVal = hexDigits[el];
    result = result * 16 + digitVal;
  });
  return result;
}

console.log(hexadecimalToInteger("4D9f")); // 19871
console.log(hexadecimalToInteger("9Dca")); // 40394;

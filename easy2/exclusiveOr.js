// INPUTS:
// 2 values

// OUTPUT:
// if exactly one arg is true, return boolean true
// if exactly one arg is false, return boolean false

// REQ'S:
// returns true if exactly one of its args is truthy, else false
// looking for boolean result instead of a truthy/falsy value as returned by || and &&.

// QUESTIONS:
// can the inputs be any value? are strings and objects accepted?

// EXAMPLES / TEST CASES:
// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

// DATA STRUCTURES:
// numbers
// object (Boolean obj wrapper)

// ALGORITHM:

function xor(val1, val2) {
  if (val1 !== val2) {
    return true;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

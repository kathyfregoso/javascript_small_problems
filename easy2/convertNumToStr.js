// INPUT:
// - non-negative integer value

// OUTPUT:
// - str representation of input integer

// REQUIREMENTS:
// converts non-negative integer value to str representation of that integer
// don't use conversion functions like toString
// don't use expression like "" + number
// construct string by analyzing and manipulating the number

// QUESTIONS:

// EXAMPLES/TEST CASES:
// - 0, 1, 2, 3, etc (non-negative integer values)

// DATA STRUCTURES:
// numbers
// strings

// ALGORITHMS:
// base case for number 0 is "0"
// remove last digit 1-by-1 by looping
// initialize empty array in a variable

// while loop
// condition: num > 0
// body:
// push num % 10 into array
// num = Math.floor(num / 10)

// reverse the array and join the characters, then return

function integerToString(num) {
  if (num === 0) return "0";

  let result = [];

  while (num > 0) {
    // pushes remainder digit every loops [1] -> [1,2] -> [1,2,3] -> [1,2,3,4]
    result.push(num % 10);
    num = Math.floor(num / 10);
  }

  return result.reverse().join("");
}

console.log(integerToString(4321));

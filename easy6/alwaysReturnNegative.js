// REQUIREMENTS:
// input: number (positive or negative)
// output: negative number

// QUESTIONS:

// EXAMPLES/TEST CASES:
// 5 => -5
// -3 => -3
// 0 => -0

// DATA STRUCTURES:
// numbers

// ALGORITHMS:
// if number is positive, return it as a negative number
// if the number is negative, return it as is (negative)
// always return a negative number

// my solution
// Math.abs() returns the absolute value of a num (distance from 0) which is always a positive number
// we prefix the method with the - unary operator to always return a negative
// function negative(num) {
//   return -Math.abs(num);
// }

// alt. solution
// function negative(number) {
//   return Math.abs(number) * -1;
// }

// further exploration (use ternary operator)
function negative(num) {
  return Math.sign(num) === -1 ? num : -Math.abs(num);
}

negative(5); // -5
negative(-3); // -3
negative(0); // -0

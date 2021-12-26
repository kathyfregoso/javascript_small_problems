// INPUTS:
// 2 positive integers

// OUTPUT:
// print the results of these operations:
// - addition
// - subtraction
// - product
// - quotient
// - remainder
// - power

// REQ'S:
// no need to validate the input
// readline-sync library

// QUESTIONS:

// EXAMPLES / TEST CASES:
// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 141050039560662968926103

// DATA STRUCTURES:
// numbers
// strings

// ALGORITHM:
// require readline sync library
// user prompt - input 1st number
// - save user input in variable w/ readline.question method
// user prompt - input 2nd number
// - save user input in variable w/ readline.question method
// convert string inputs to numbers w/ Number() method
// perform operations in and save results in variables:
// - add, subtract, product, quotient, remainder, power
// use template literals to log outputs of ALL operations listed

const readline = require("readline-sync");

function prompt(message) {
  console.log("==> " + message);
}

prompt("Enter the first number:");
let firstNum = Number(readline.question());

while (Number.isNaN(firstNum) || firstNum < 1) {
  console.log("Type a number greater than 0");
  firstNum = Number(readline.question());
}

prompt("Enter the second number:");
let secondNum = Number(readline.question());

while (Number.isNaN(secondNum) || secondNum < 1) {
  console.log("Type a number greater than 0");
  secondNum = Number(readline.question());
}

prompt(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
prompt(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
prompt(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
prompt(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
prompt(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
prompt(`${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`);

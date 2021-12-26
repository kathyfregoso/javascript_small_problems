// USER INPUT:
// 6 numbers

// OUTPUT:
// log a message (string)
// 'The number ${userInputSix} appears in ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.'
// OR
// 'The number ${userInputSix} does not appear in ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.'

// REQUIREMENTS:
// log message that tells whether or not the 6th number appears among first 5 numbers

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// strings
// numbers

// ALGORITHM:
// require readline sync
// ask user for 1st number
// save user input to variable
// ask user for 2nd number
// save user input to variable
// ask user for 3rd number
// save user input to variable
// ask user for 4th number
// save user input to variable
// ask user for 5th number
// save user input to variable
// ask user for 6th number
// put the first 5 numbers in an array and assign to variable
// search to see if the 6th number is in the array
// save user input to variable
// log output message with template literal

const readline = require("readline-sync");
let firstFiveNumbers = [];

console.log(`Enter the 1st number:`);
let num1 = readline.question();
firstFiveNumbers.push(num1);

console.log(`Enter the 2nd number:`);
let num2 = readline.question();
firstFiveNumbers.push(num1);

console.log(`Enter the 3rd number:`);
let num3 = readline.question();
firstFiveNumbers.push(num3);

console.log(`Enter the 4th number:`);
let num4 = readline.question();
firstFiveNumbers.push(num4);

console.log(`Enter the 5th number:`);
let num5 = readline.question();
firstFiveNumbers.push(num5);

console.log(`Enter the last number:`);
let num6 = readline.question();

if (firstFiveNumbers.includes(num6)) {
  console.log(
    `The number ${num6} appears in ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.`
  );
} else {
  console.log(
    `The number ${num6} does not appear in ${num1}, ${num2}, ${num3}, ${num4}, ${num5}.`
  );
}

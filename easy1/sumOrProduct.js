// INPUTS: 
// number greater than 0 (user input)

// OUTPUTS:
// sum of integers between 1 and user input number OR
// product of integers between 1 and user input number

// EXPLICIT REQUIREMENTS: 
// output is inclusive of the numbers 1 - user input number

// IMPLICIT REQUIREMENTS: 
// use readline sync library to collect user inputs

// EXAMPLES / TEST CASE:
// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.


// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

// DATA STRUCTURES:
// numbers
// arrays? for iteration
// strings (user input)

// ALGORITHM:
// use readline-sync to capture the user input number with readline.question method
// use the Number() method to convert each input string into a number
// then use readline-sync to capture the user input for "s" or "p" with readline.question method
// initialize a variable called output that starts at 0, will store each iteration's sum or product and return the final output value
// use a loop to add each number from 1 to user input number
// use a loop to multiply each number from 1 to user input number
// return the variable output

const readline = require('readline-sync');

let inputNum = Number(readline.question('Please enter an integer greater than 0:\n'));

while (Number.isNaN(inputNum) || inputNum <= 0) {
  console.log(`Not a valid number, try again.`);
  inputNum = Number(readline.question('Please enter an integer greater than 0:\n'));
}

let operation = readline.question(`Enter "s" to compute the sum, or "p" to compute the product:\n`);

if (operation === "s") {
  let sum = 0;
  for (let iterator = 1; iterator <= inputNum; iterator++) {
    sum += iterator;
  }
  console.log(`The sum of the integers between 1 and ${inputNum} is ${sum}.`);
} else if (operation === "p") {
  let product = 1;
  for (let iterator = 1; iterator <= inputNum; iterator++) {
    product *= iterator;
  }
  console.log(`The product of the integers between 1 and ${inputNum} is ${product}.`);
  } else {
    console.log(`Incorrect, please type "s" or "p".`)
  }

// FURTHER EXPLORATION: 

// Given an array of integers, I would use use bracket notation to access elements and utilize index values, or the reduce method for a more declarative approach.

// let array = [1,2,3,4];
// let sum = 0;
// let product = 1;
  
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
//   product *= array[i];
// }

// console.log(sum);
// console.log(product);

// Reduce is simply a higher level abstraction of a loop that iterates through an array, see below:

// console.log(array.reduce((a,b) => a + b, 0)) // returns the sum of all the values
// console.log(array.reduce((a,b) => a * b, 1)) // returns the product of all the values 





  



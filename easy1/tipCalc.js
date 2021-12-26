// INPUTS: 
// - bill amount
// - tip rate

// OUTPUT:
// console log:
// - tip amount
// - total bill amount with tip

// EXPLICIT REQ'S:
// ignore input validation
// assume the user will enter numbers

// IMPLICIT REQ'S:
// how to calculate a tip

// EXAMPLES / TEST CASES: 

// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

// DATA STRUCTURES:
// numbers -> math operations

// ALGORITHM:
// require the readlineSync library at the top of the page
// log a question that asks the user to input the bill amount
// to capture the user input of the bill amount, assign the return value of readline.question, a string, to a var called bill
// log a question that asks the user to input the tip rate
// capture the user input for the tip rate by assigning the return value of readline.question to a var called tipPercent
// divide the tipPercent by 100 and multiply that result by the value assigned to the variable bill 
// return above result with the method .toFixed(2)

const readline = require('readline-sync');

let bill = Number(readline.question(`What is the bill?\n`));

let tipPercent = Number(readline.question(`What is the tip percentage?\n`));

let tipAmount = (tipPercent / 100) * bill;

let billTotal = tipAmount + bill;

console.log(`The tip is $${tipAmount.toFixed(2)}\nThe total is $${billTotal.toFixed(2)}`);

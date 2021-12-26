// INPUTS: 
// the two user input variables:
// length of a room in meters 
// the width of a room in meters 

// OUTPUTS:
// logs the area of the room in square meters AND
// logs the area of the room in square feet

// EXPLICIT REQUIREMENTS: 
// 1 square meter == 10.7639 square feet
// don't need to validate the input
// use readlineSync.prompt to collect user input

// IMPLICIT REQUIREMENTS: 
// installing readlineSync with npm locally

// EXAMPLES / TEST CASE:
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).

// howBig(50, 20) => The area of the room is 1000.00 square meters (10763.90 square feet)

// DATA STRUCTURE:
// numbers -> math operations
// string -> template literal, user input

// ALGORITHM:
// require the readlineSync library at the top of the page
// log a question that asks the user to input the length of the room
// to capture the user input, assign the return value of readline.question, a string, to a var
// log a question that asks the user to input the width of the room
// to capture the user input, assign the return value of readline.question, a string, to a var 
// multiply the arguments (length * width) and assign the result to a let variable called squareMeters
// multiply the value of the squareMeters variable with 10.7639 and assign the result to a let variable called squareFeet
// log squareMeters and squareFeet outputs as strings in a sentence using a template literal
// inside the ${}, format the squareMeters and squareFeet number values with the .toFixed(2) method (only 2 digits appear after the decimal point)

const readline = require('readline-sync');

console.log('Choose your preferred method of measurement: meters or feet.');
let metersOrFeet = readline.question();

console.log('Enter the length of the room:');
let length = readline.question();

console.log('Enter the width of the room:');
let width = readline.question();

let squareMeters = length * width;
let squareFeet = length * width;
let convertToFeet = squareFeet * 10.7639;
let convertToMeters = squareMeters / 10.7639;

if (metersOrFeet === "meters") {
  console.log(`The area of the room is ${squareMeters.toFixed(2)} (${convertToFeet.toFixed(2)} square feet)`);
} else if (metersOrFeet === "feet") {
  console.log(`The area of the room is ${squareFeet.toFixed(2)} (${convertToMeters.toFixed(2)} square meters)`);
} 
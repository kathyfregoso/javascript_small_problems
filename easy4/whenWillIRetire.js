// INPUT: 2 numbers
// current age
// desired retirement age

// OUTPUT:
// concat in a str sentence:
// - current year
// - retirement year
// - number of years left till retirement

// REQUIREMENTS:
// readline-sync
// finding current year

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// numbers
// strings

// ALGORITHMS:
// ask user for current age, save to variable
// ask user for desired retirement age, save to variable
// yearsTillRetirement = retirementAge - currentAge
// let currentYear = new Date().getFullYear();
// let retirementYear = currentYear + yearsTillRetirement
// log `It's ${currentYear}. You will retire in ${retirementYear}.\n
// You have only ${yearsTillRetirement} years of work to go!`

const readline = require("readline-sync");

console.log(`What is your age?`);
let currentAge = readline.question();

console.log(`At what age would you like to retire?`);
let retirementAge = readline.question();

let yearsTillRetirement = retirementAge - currentAge;
let currentYear = new Date().getFullYear();
let retirementYear = currentYear + yearsTillRetirement;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsTillRetirement} years of work to go!`);

// further exploration
// if the new keyword wasn't used in the currentYear variable,
// we get an error: 'TypeError: Date(...).getFullYear is not a function'

// question 3 //

// INPUT:
// array
// number

// OUTPUT:
// boolean (true or false)

// REQUIREMENTS:
// given a number and an array, find if number is in the array

// QUESTIONS:

// EXAMPLES/TEST CASES:
// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// DATA STRUCTURES:
// arrays
// numbers

// ALGORITHMS:
// use the includes method to return true or false

// solution:

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

console.log(numbers.includes(8)); // false
console.log(numbers.includes(16)); // true

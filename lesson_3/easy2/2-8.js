// INPUT:
// array
// object

// OUTPUT:
// boolean (true or false)
// REQUIREMENTS:
// HOW? - check whether the objects assigned to variables numbers and table below are arrays

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// arrays
// objects
// booleans

// ALGORITHMS:
// this method determines if pass values is an Array:
// Array.isArray(numbers)
// Array.isArray(table)

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers)); // true
console.log(Array.isArray(table)); // false

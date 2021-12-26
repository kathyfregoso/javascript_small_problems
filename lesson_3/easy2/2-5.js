// INPUT:
// array of numbers

// OUTPUT:
// mutated array (removed number at index 2)

// REQUIREMENTS:
// mutate the array by removing the number at index 2

// QUESTIONS:

// EXAMPLES/TEST CASES:
// [1, 2, 3, 4, 5] => [1, 2, 4, 5]

// DATA STRUCTURES:
// arrays

// ALGORITHMS:
// use splice method to remove index 2
// this mutates the og array

let array = [1, 2, 3, 4, 5];

array.splice(2, 1); // returns removed element
console.log(array); // new mutated array is logged

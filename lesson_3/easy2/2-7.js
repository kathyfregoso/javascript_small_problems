// INPUT:
// object
// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// OUTPUT:
// new array with 2 elements (one key-value pair) from object:
// ['Barney', 2]

// REQUIREMENTS:
// Create an array from this object that contains only two elements

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// arrays
// objects

// ALGORITHMS:
// initialize a variable with an assigned value of an empty array literal
// Object.entries saved in variable -> returns an arr of nested arrays
// each nested array has 2 els: object key and its value
// access value at index 2 in array = ['Barney', 2]

let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};

// solution:

let barney = Object.entries(flintstones)[2];
console.log(barney);

// alternative:

Object.entries(flintstones)
  .filter((pair) => pair[0] === "Barney")
  .shift();

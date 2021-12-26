// REQUIREMENTS:
// input: array with nested objects
// output: array containing only the objects where all the nums are even

// QUESTIONS:

// EXAMPLES/TEST CASES:
// [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ]
// =>
// [
//   { e: [8], f: [6, 10] },
// ]

// DATA STRUCTURES:
// nested array, objects, numbers

// ALGORITHMS:
// loop through the nested array of objects
// - filter for objects that contain only values of even numbers
// return a new array with only objects that meet the filter criteria

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

// my solution:
// filter returns all elements for which cb returns a truthy value,
// and we only want objects where every num is even
// every combined with the remainder operator works after flattening the subarrays
let result = arr.filter((obj) => {
  return Object.values(obj)
    .flat()
    .every((num) => num % 2 === 0);
});

console.log(result); // => [ { e: [ 8 ], f: [ 6, 10 ] } ]

// alt. solution (without flattening subarrays):
// If all of the nums in an inner array are even, then the inner cb returns true to the innermost call to every.
// If all of the inner callbacks for a particular object return true,
// then the middle callback returns true to the outer call to every,
// which in turn causes the outer callback to return true to the filter method for that iteration

arr.filter((obj) => {
  return Object.values(obj).every((subArr) => {
    return subArr.every((num) => num % 2 === 0);
  });
});

// => [ { e: [ 8 ], f: [ 6, 10 ] } ]

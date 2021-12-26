// REQUIREMENTS:
// input:
// - array with nested subaarrays
// output:
// - object where the key is the first item in each subarray, value is the second
// implicit:
// - reverse Object.entries();

// QUESTIONS:

// EXAMPLES/TEST CASES:
// [
//   ["a", 1],
//   ["b", "two"],
//   ["sea", { c: 3 }],
//   ["D", ["a", "b", "c"]],
// ]
// =>
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// DATA STRUCTURES:
// arrays, objects, strings, numbers

// ALGORITHMS:
// - initialize empty object variable
// LOOP
// - loop through input outer array
// - loop through each subarray
//  - index 0 is the key of new object
//  - index 1 is the value of that key
// - exit loop once finished going through each subarray
// - return the new object

let arr = [
  ["a", 1],
  ["b", "two"],
  ["sea", { c: 3 }],
  ["D", ["a", "b", "c"]],
];

// my solution
// you only have to work at the initial sub-level to reach a solution
function objectEntries(arr) {
  let newObj = {};

  arr.forEach((subArr) => {
    let key = subArr[0];
    let val = subArr[1];

    newObj[key] = val;
  });

  console.log(newObj);
}

// expected return value of function call
objectEntries(arr); // { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// INPUT: nested array with object elements

// OUTPUT: same data structure with each num incremented by 1

// REQUIREMENTS:
// - use map to return a new array identical in structure to the original
// but with each num incremented by 1
// - don't modify original data structure

// QUESTIONS:

// EXAMPLES/TEST CASES:
// [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }] =>
// [{ a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 }]

// DATA STRUCTURES:
// nested array with object elements, and numeric key values
// each array has:
// - three object elements
// - 1. one key value pair: a, value of 1
// - 2. two key value pairs: b and c, values of 2 and 3
// - 3. three key value pairs: d, e, f, values of 4, 5, and 6

// ALGORITHMS:
// - loop through arr with map method
// - each iteration, increment each object element's key values by one
// - return new array

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let result = arr.map((object) => {
  // each iteration, callback creates a new object
  // then iterates through key-val pairs on current object from og array
  let incrementObj = {};
  // uses the keys and current obj to create a new key-val pair in new object
  for (let prop in object) {
    // ++ operator doesn't work
    incrementObj[prop] = object[prop] + 1;
  }
  // the return value of callback is used by map to transform each element in the array
  // even though map returns a new array, the new array and the OG array still point to same object!
  // that's why you have to create new object elements each iteration!
  return incrementObj;
});

console.log(arr);

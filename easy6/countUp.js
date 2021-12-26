// REQUIREMENTS:
// input: integer
// output: array of all integers between 1 and the argument (inclusive), in ascending order
// explicit:
// - assume the argument is always a positive integer (>0)

// QUESTIONS:

// EXAMPLES/TEST CASES:
// 5 => [1,2,3,4,5]
// 3 => [1,2,3]
// 1 => [1]

// DATA STRUCTURES:
// integers, arrays

// ALGORITHMS:
// assign an empty array literal to a variable
// start a loop that begins at value of 1
// the first loop pushes 1 to the array
// then it adds 1 to the the starting value of 1
// each subsequent iteration pushes the current sum number to the array
// the function returns the new array

function sequence(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  console.log(arr);
  return arr;
}

// further exploration
// using map

function sequence(num) {
  // returns an array with the length of num
  // the spread operator ensures the new array accepts zero or more elements
  // [...Array(num)]

  // the returns an array of a given object's own enumberable property names
  // the object array's property names are 0-based index values represented as string digits ('0', '1', '2'...etc)
  // [...Array(num).keys()]

  // .map method iterates over the array and transforms each elements based on
  // the return value of the callback function on each iteration
  // the cb argument i represents each array index
  // the prefixed ++ is a binary increment operator returns the value AFTER incrementing
  // a postfixed ++, in contrast would have returned the value before incrementing
  //[...Array(num).keys()].map((i) => ++i)

  console.log([...Array(num).keys()].map((i) => ++i));
}

sequence(5); // [1, 2, 3, 4, 5]
sequence(3); // [1, 2, 3]
sequence(1); // [1]

// question 2 //

// INPUT:
// array

// OUTPUT:
// new sorted array

// REQUIREMENTS:
// Write two distinct ways of reversing the array without mutating the original array.
// use reverse for the first solution
// use sort for the second

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// arrays

// ALGORITHMS:
// first solution:
// - use slice to return a shallow copy of array into a new array object (no args)
// - save new arr into a variable
// - use reverse method on the new array

// second solution:
// - use spread syntax to copy array
// - save new arr into a variable
// - use sort method on to reverse the new array

// first solution:
let numbers = [1, 2, 3, 4, 5];
let newArr = numbers.slice();
console.log(newArr.reverse());

// second solution:
let secondArr = [...numbers];
secondArr.sort((a, b) => b - a);
console.log(secondArr);

// BONUS use foreach:
secondArr.forEach((el, i) => {
  if (el[i] < el[i + 1]) {
    el[i] = el[i + 1];
  }
});
console.log(secondArr);

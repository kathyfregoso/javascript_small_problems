// INPUTS:
// an Array

// OUTPUT:
// returns an Array that contains every other element of the Array input

// REQ'S:
// values in the returned list should be those vals that are in 1st, 3rd, 5th, etc

// QUESTIONS:

// EXAMPLES / TEST CASES:
// if empty array, return empty array
// if one el, return 1st el

// DATA STRUCTURES:
// arrays
// objects

// ALGORITHM:
// initialize empty array in variable
// loop through input array
// - initialize at index 0 (first el)
// - every iteration, index += 2
// - every iteration, push odd el into new array

function oddities(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i += 2) {
    newArr.push(array[i]);
  }
  return newArr;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// further exploration

function evens(arr) {
  let newArr = [];
  let n = 1;

  while (n < arr.length) {
    newArr.push(arr[n]);
    n += 2;
  }
  return newArr;
}

console.log(evens([2, 3, 4, 5, 6])); // logs [3,5]
console.log(evens([1, 2, 3, 4, 5, 6])); // logs [2,4,6]
console.log(evens(["abc", "def"])); // logs ['def']
console.log(evens([123])); // logs []
console.log(evens([])); // logs []

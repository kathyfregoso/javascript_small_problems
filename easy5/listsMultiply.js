// INPUT: two arrays, each a list of numbers

// OUTPUT: new array with product of each pair of numbers from the arguments w/ same index

// REQUIREMENTS:
// each array arg contains the same number of elements
// multiply element in array 1 with array 2 element at same index
// put and return products in a new array

// QUESTIONS:

// EXAMPLES/TEST CASES:
// [3, 5, 7], [9, 10, 11] => [27, 50, 77]

// DATA STRUCTURES:
// arrays, integers
// [3, 5, 7], [9, 10, 11] => [(3 * 9), (5 * 10), (7 * 11)] => [27, 50, 77]

// ALGORITHMS:
// create empty array and store in variable
// LOOP:
//  - loop through both arrays
//  - multiply index 0 of arr1 w/ index 0 of arr2
//  - store that product in empty outer array variable
//  - multiply index 1 of arr1 w/ index 1 of arr2
//  - store that product in empty outer array variable
//  - repeat above steps until the end of each array
// return the new array

function multiplyList(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i] * arr2[i]);
  }
  console.log(newArr);
  return newArr;
}

multiplyList([3, 5, 7], [9, 10, 11]); // [27, 50, 77]

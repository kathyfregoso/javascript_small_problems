// INPUT: array of sub-arrays

// OUTPUT: new array with same structure and appropriately ordered sub-array elements

// REQUIREMENTS:
// return new array with same structure
// order subarrays alphabetically or numerically as appropriate

// EXAMPLES/TEST CASES:
// ["b", "c", "a"] => ["a", "b", "c"]
// [2,1,3] => [1,2,3]
// ["blue", "black", "green"] => ["black", "blue", "green"]

// DATA STRUCTURES:
// arrays, numbers, strings

// ALGORITHMS:
// 1. loop through outer array
// 2. each sub-array get an inner loop
// 3. each inner loop for each sub-array sorts elements either:
//  - numerically
//  - alphabetically
// 4. return new array

//  my solution
let arr = [
  ["b", "c", "a"],
  [2, 1, 3],
  ["blue", "black", "green"],
];

function sortSubArrays(arr) {
  let newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    if (typeof newArr[i][i] === "string") {
      newArr[i].sort();
    } else {
      // use callback for numbers, to avoid sorting by their UTF-16 values
      newArr[i].sort((a, b) => a - b);
    }
  }
  console.log(newArr);
}

sortSubArrays(arr);

// // alternative solution
arr.map((subArr) => {
  if (typeof subArr[0] === "string") {
    // we have an array of strings
    // slice obtains a copy of the subarray, since sort is a destructive operation
    return subArr.slice().sort();
  } else {
    // we have an array of numbers
    return subArr.slice().sort((a, b) => a - b);
  }
});

// [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ], [ 'black', 'blue', 'green' ] ]

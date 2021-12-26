// INPUT: array of sub-arrays

// OUTPUT: ew array with same structure and descending ordered sub-array elements

// REQUIREMENTS:
// return new array with same structure
// order subarrays alphabetically or numerically as appropriate (descending)

// EXAMPLES/TEST CASES:
// ["b", "c", "a"] => ["c", "b", "a"]
// [2,1,3] => [3,2,1]
// ["blue", "black", "green"] => ["green", "blue", "black"]

// DATA STRUCTURES:
// arrays, numbers, strings

// ALGORITHMS:
// 1. loop through outer array
// 2. each sub-array get an inner loop
// 3. each inner loop for each sub-array sorts elements in descending order
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
      newArr[i].sort().reverse();
    } else {
      newArr[i].sort((a, b) => b - a);
    }
  }
  console.log(newArr);
}

sortSubArrays(arr);

// alternative solution

arr.map((subArr) => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === "number") {
      return b - a;
    }
    // compares strings with each other and sorts based on comparison
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});

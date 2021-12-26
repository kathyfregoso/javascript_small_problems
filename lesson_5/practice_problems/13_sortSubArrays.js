// INPUT: array with three nested subarrays

// OUTPUT: sorted nested array

// REQUIREMENTS:
// output order of nested subarrays is based on the sum of the odd numbers they contain
// ascending order (smallest to largest)

// QUESTIONS:

// EXAMPLES/TEST CASES:
// [[1, 6, 7], [1, 5, 3], [1, 8, 3]] => [[1 + 7], [1 + 5 + 3], [1 + 3]] =>[[8], [9], [4]] =>
// 1 + 3 (4) < 1 + 7 (8) < 1 + 5 + 3 (9) =>
// [[4], [8], [9]] => [[1, 8, 3], [1, 6, 7], [1, 5, 3]]

// DATA STRUCTURES:
// arrays, integers

// ALGORITHMS:
// SUBARRAY ODD NUM SUMS:
// computes the sum of each subarrays' odd number elements
// - loop through the outer array
// - then loop through subarrays
// - for each subarray, check that the current value is odd
// - if the value is odd, add value to sum
// - if not add, skip that element
// - return the sum of subarray
// - output nested array of sums

// SORT BY ODD NUM SUMS:
// use the computeOddSums function to sort
// assign output of computeOddSums(arr) to oddNumsTotal variable
// compre value of subarrays to oddNumsTotal variable by corresponding index
// sort based on the value of the sum of odd nums variable

let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];

let result = arr.sort((a, b) => {
  // here, a and b are assigned to the subarrays
  // reduce finds the sum of filtered odd numbers in subarrays, and returns their difference, which'll be used to sort the arrays
  // use a and b only for comparison callbacks

  let oddSumA = a
    .filter((num) => num % 2 === 1)
    .reduce((sum, curr) => sum + curr);
  let oddSumB = b
    .filter((num) => num % 2 === 1)
    .reduce((sum, curr) => sum + curr);

  return oddSumA - oddSumB;
});

console.log(result);

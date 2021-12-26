// REQUIREMENTS:
// input: array of numbers
// output: sum of the sums of each leading sub-sequence for that array
// the array always contains at least one number

// QUESTIONS:

// EXAMPLES/TEST CASES:
// [3, 5, 2] => (3) + (3 + 5) + (3 + 5 + 2) --> 21
// [1, 5, 7, 3] => (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// [4] => 4
// [1,2,3,4,5] => (1) + (1 + 2) + (1 + 2 + 3) + (1 + 2 + 3 + 4) + (1 + 2 + 3 + 4 + 5) => 35

// DATA STRUCTURES:
// arrays, numbers

// ALGORITHMS:
// CALCULATE SUM OF SUMS
// declare a sub-sequences variable of sum of sub-sequences
// use a separate function to find the sum of leading subsequence - SUB PROCESS
// loop through the array of leading subsequence sum
// - sum the current element with the next element
// - each iteration, save the sum to a variable
// - exit loop
// return the sum of sums

// EXTRACT ALL LEADING SUB-SEQUENCES SUMS
// declare a variable and assign an empty array value
// declare a variable with no initialized value (to hold the numbers)
// loop through input array
// - each iteration set the number variable to 0
// - then add the current element to the number variable
// - then push that number the empty array
// - repeat until the end
// return the sum of leading substrings

// my solution
function sumOfSums(numsArr) {
  console.log(sumSubSequences(numsArr).reduce((sum, el) => sum + el));
  return sumSubSequences(numsArr).reduce((sum, el) => sum + el);
}

function sumSubSequences(numsArr) {
  let outputArr = [];

  let nums = 0;
  for (let i = 0; i < numsArr.length; i++) {
    nums += numsArr[i];
    outputArr.push(nums);
  }

  return outputArr;
}

// alternative solution
// iterating from 1 upto numbers.length
// in each iteration we first slice the original array and then sum all the values
// from the created subarray using reduce, and finally add it to sumTotal.
function sumOfSums(numbers) {
  let sumTotal = 0;

  for (let idx = 1; idx <= numbers.length; idx++) {
    sumTotal += numbers.slice(0, idx).reduce((accum, num) => accum + num);
  }
  return sumTotal;
}

sumOfSums([3, 5, 2]); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]); // 4
sumOfSums([1, 2, 3, 4, 5]); // 35

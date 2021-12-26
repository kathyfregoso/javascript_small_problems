// INPUT: array of integers

// OUTPUT: average of all integers in array (rounded down to the integer component of the avg)

// REQUIREMENTS:
// compute and return the average of all the nums in the array
// the output should be rounded down to the integer component of the avg (whole number)
// to compute average: sum of all elements / array length
// the array will never be empty
// all numbers are positive

// QUESTIONS:

// EXAMPLES/TEST CASES:
// [1, 5, 87, 45, 8, 8] => [1 + 5 + 87 + 45 + 8 + 8] => [154 / 6] => [25.66....7] => 25
// [9, 47, 23, 95, 16, 52] => => [9 + 47 + 23 + 95 + 16 + 52] => [242 / 6] => [40.333....] => 40

// DATA STRUCTURES:
// arrays, integers

// ALGORITHMS:
// - create a variable for the output, equal to 0
// LOOP (doesn't mutate input array)
// - loop through array to calculate sum
// - each iteration, add the current element to the output variable
// - continue until the end of the array
// CALC and RETURN AVG
// - divide output var by array length
// - round down to the integer (full number)
// - return output variable

// first solution
function average(array) {
  let avgOutput = 0;
  for (let i = 0; i < array.length; i++) {
    avgOutput += array[i];
  }
  avgOutput = Math.floor(avgOutput / array.length);
  console.log(avgOutput);
  return avgOutput;
}

// solution with forEach
function average(array) {
  let avg = 0;
  array.forEach((el) => (avg += el));
  avg = Math.floor(avg / array.length);
  console.log(avg);
  return avg;
}

// solution with reduce
function average(array) {
  let avg = array.reduce((acc, curr) => acc + curr);
  avg = Math.floor(avg / array.length);
  console.log(avg);
  return avg;
}

average([1, 5, 87, 45, 8, 8]); // 25
average([9, 47, 23, 95, 16, 52]); // 40

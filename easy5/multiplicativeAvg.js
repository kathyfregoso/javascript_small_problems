// INPUT: array of integers

// OUTPUT:
// string that is the result of:
// - multiplying all the integers together
// - dividing the result by the num of entries in the array
// - and then returning the result as a string w/ value rounded to three decimal places

// REQUIREMENTS:
// multiply integers in array, divide by array length, convert to str w/ value rounded to three decimal places

// QUESTIONS:

// EXAMPLES/TEST CASES:
// [3, 5] => "7.500"
// [2, 5, 7, 11, 13, 17] => "28361.667"

// DATA STRUCTURES:
// arrays, strings, integers
// [3, 5] => [3 * 5] => [15] => [15 / 2] => [7.5] => 7.5 => 7.500 => "7.500"
// [2, 5, 7, 11, 13, 17] =>
// [2 * 5 * 7 * 11 * 13 * 17] => [170170] => [170170 / 6] => [28361.666....7] => 28361.666....7 => 8361.667 => "28361.667"

// ALGORITHMS:
// LOOP:
// - set up a output variable that has a value of 1
// - loop through the array of integers
//  - this loop should only change the value of the outer variable output, not the input array
//  - multiply output by the current element
//  - store the product in the output variable
//  - repeat process until the end of the array is reached
// INTEGER TO STRING W DECIMALS
// - divide output by the input array length
// - convert the integer into a string with 3 fixed decimal places
// - return/log the output variable

function multiplicativeAverage(array) {
  let output = 1;
  for (let i = 0; i < array.length; ++i) {
    output *= array[i];
  }
  output = (output / array.length).toFixed(3);
  console.log(output);
  return output;
}

multiplicativeAverage([3, 5]); // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]); // "28361.667"

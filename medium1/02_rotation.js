// REQUIREMENTS:
// input: number and last count digits to rotate

// output: rotates last (count) digits of number
// count = 1 rotates last 1 digit
// count = 2 rotates last 2 digits
// count = 3 rotates last 3 digits
// etc...

// QUESTIONS:

// EXAMPLES/TEST CASES:
//shift rightmost digits to the left
// shift first digit to the end
// 91 => 19 (shifts 9 to the end)
// 291 => 9 => 1 => 2 => 912 (shifts 2 to the end)
// 5291 => 2 => 9 => 1 => 5 => 2915 (shifts 5 to the end)
// 35291 => 5 => 2 => 9 => 1 => 3 => 52913 (shifts 3 to the end)

// DATA STRUCTURES:
// numbers, strings

// ALGORITHMS:
// if count is equal to 1, return number as is
// else, convert number to collection (to string, then to array?)
// extract (length - count) from digits collection
// reverse the last count of digits
// concatenate remaining (starting digits) + reversed count of rightmost digits
// convert rotated collection of digits to number
// return the reversed/rotated number

function rotateRightmostDigits(number, count) {
  let digits = String(number);
  let rightMost = digits.slice(digits.length - count);
  let rotated = rightMost.slice(1) + rightMost[0];
  let unRotated = digits.slice(0, digits.length - count);

  console.log(Number(unRotated + rotated));
  return Number(unRotated + rotated);
}

rotateRightmostDigits(735291, 1); // 735291
rotateRightmostDigits(735291, 2); // 735219
rotateRightmostDigits(735291, 3); // 735912
rotateRightmostDigits(735291, 4); // 732915
rotateRightmostDigits(735291, 5); // 752913
rotateRightmostDigits(735291, 6); // 352917

// REQUIREMENTS:
// input: integer

// output: max rotation of integer

// use rotateRightmostDigits function from previous exercise

// QUESTIONS:

// EXAMPLES/TEST CASES:
// 735291 => (7)35291 => 35291(7) => 352917 rotate first digit to the end
// => 3(5)2917 => 32917(5) => 329175 => rotate second digit to the end
// 32(9)175 => 32175(9) => 321759 => rotate third digit to the end
// 321(7)59 => 32159(7) => 321597 => rotate 4th digit to the end
// 3215(97) => 321579 => rotate (switch) the final 2 digits
//

// DATA STRUCTURES:
// integers

// ALGORITHMS:
// save length of integer to variable, conver to string
// loop starting from the length of the array (digitsTotal), until count >=2
// decrement count on each iteration
// on each iteration, integer is equal to invocation of rotateRightmostDigits
// - pass integer and count as args
// return the rotated integer

function maxRotation(integer) {
  let digitsTotal = String(integer).length;

  for (let count = digitsTotal; count >= 2; count--) {
    integer = rotateRightmostDigits(integer, count);
  }
  console.log(integer);
  return integer;
}

maxRotation(735291); // 321579
maxRotation(3); // 3
maxRotation(35); // 53
maxRotation(105); // 15 -- the leading zero gets dropped
maxRotation(8703529146); // 7321609845

function rotateRightmostDigits(number, count) {
  let digits = String(number);
  let rightMost = digits.slice(digits.length - count);
  let rotated = rightMost.slice(1) + rightMost[0];
  let unRotated = digits.slice(0, digits.length - count);

  return Number(unRotated + rotated);
}

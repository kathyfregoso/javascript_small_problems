// INPUT: positive integer

// OUTPUT: number with digits reversed

// REQUIREMENTS:
// reverse the digits of the input number
// return the reversed integer

// QUESTIONS:

// EXAMPLES/TEST CASES:
// 12345 => 54321
// 12213 => 31221
// 456 => 654
// 12000 => 21
// 1 => 1

// DATA STRUCTURES:
// integers
// arrays

// ALGORITHMS:
// convert the input num to a string
// save that str to a variable
// convert str to an array
// LOOP
// - loop through the array to reverse digits
// - exit loop at the end of the array
// conver the arr to a str
// then convert the str to a number
// return the string

function reverseNumber(num) {
  num = String(num).split("");
  let output = [];

  for (let i = num.length - 1; i >= 0; i--) {
    output.push(num[i]);
  }

  output = output.join("");
  console.log(Number(output));
  return Number(output);
}

reverseNumber(12345); // 54321
reverseNumber(12213); // 31221
reverseNumber(456); // 654
reverseNumber(12000); // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1); // 1

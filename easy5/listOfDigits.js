// INPUT: one positive integer

// OUTPUT: array list of digits in the number

// REQUIREMENTS:
// convert integer into an array list of digits

// QUESTIONS:

// EXAMPLES/TEST CASES:
// 12345 -> [1,2,3,4,5]
// 7 -> [7]
// 375290 -> [3, 7, 5, 2, 9, 0]
// 444 -> [4,4,4]

// DATA STRUCTURES:
// arrays, integers

// ALGORITHMS:
// convert input integer into a string
// split the string into an array of digits ("" delimiter)
// loop through the array:
// - convert each element into a number
// return the new array

function digitList(integer) {
  let output = String(integer).split("");
  for (let i = 0; i < output.length; i++) {
    output[i] = Number(output[i]);
  }
  return output;
}

// futher exploration: map

function digitList(integer) {
  let output = String(integer)
    .split("")
    .map((digit) => Number(digit));
  console.log(output);
}

digitList(12345); // [1, 2, 3, 4, 5]
digitList(7); // [7]
digitList(375290); // [3, 7, 5, 2, 9, 0]
digitList(444); // [4, 4, 4]

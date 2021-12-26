// REQUIREMENTS:
// input: positive integer
// output: sum of the integer's digits
// do this w/out for, while or do/while loops
// instead, use a series of method calls

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// numbers, arrays, strings
// 23 => '23' => [2, 3] => [2 + 3] => [5] => 5

// ALGORITHMS:
// conver integer to a string
// split the string of digits into a new array
// sum the array of digits in the new array using a method call
// return the sum of digits

function sum(integer) {
  let sum = String(integer)
    .split("")
    .reduce((sum, el) => sum + Number(el), 0);

  console.log(sum);
  return sum;
}

sum(23); // 5
sum(496); // 19
sum(123456789); // 45

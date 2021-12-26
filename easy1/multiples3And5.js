// INPUTS: 
// a number greater than 1

// OUTPUTS:
// sum of all numbers between 1 and the input (inclusive) that are multiples of 3 or 5

// EXPLICIT REQUIREMENTS: 
// sum of numbers between 1 and input 
// these numbers must be multiples of 3 and 5 
// the sum is inclusive of 1 and input number

// IMPLICIT REQUIREMENTS: 
// exclude numbers that ARE NOT multiples of 3 and 5 from sum output

// EXAMPLES / TEST CASE:
// see below

// similar problems:
// the sumOrProduct.js problem!

// DATA STRUCTURE:
// numbers

// ALGORITHM:
// declare a variable output with a value of 0, this will store the sum output
// use a loop to iterate from 1 to input number
// inside the loop, a conditional determines if the number is a multiple of 3 or 5
// if it is, add that number to the output

function multisum(num) {
  let output = 0;
  for (let iterable = 1; iterable <= num; iterable++) {
    if (iterable % 3 === 0 || iterable % 5 === 0) {
      output += iterable;
    }
  }
  console.log(output);
  return output;
}


multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(20);      // 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20)
multisum(1000);    // 234168
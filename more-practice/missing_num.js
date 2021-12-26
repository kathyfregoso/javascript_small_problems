/*
// UNDERSTANDING THE PROBLEM
- INPUT: array of numbers btw 1-10 (unsorted)
- OUTPUT:  missing number (in input array)

- RULES: only 1 number missing

// EXAMPLES/EDGE CASES: see below
example 1:
1+2+3+4+5+6+7+8+9+10  === 55
input => 1+2+3+4+6+7+8+9+10 === 50
55 - 50 = 5 (output)

// DATA STRUCTURE(S): 
array of numbers
use calculation to get sum of numbers!

// ALGORITHM:
1. save sum of numbers 1-10 (1+2+3+4+5+6+7+8+9+10  === 55)
2. reduce to get sum of input array numbers
3. substract sum of input numbers from 55 to get missing numbers
*/

function missingNum(array) {
  let sumOfTenNumbers = 55;
  return sumOfTenNumbers - array.reduce((acc, curr) => acc + curr, 0);
}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); // 5
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])); // 10
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); // 7

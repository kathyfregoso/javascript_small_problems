/*
// UNDERSTANDING THE PROBLEM
- INPUT: array of integers
- OUTPUT: filtered array of integers
 - only contains multiples of 3 and 5

- RULES: remove numbers from array of integers that aren't multiples of 3 OR 5
 - assume some input numbers are negative

// EXAMPLES/EDGE CASES: 
[1, 3, 5, 7, 11, 18, 16, 15] => [ 3, 5, 18, 15 ]

// DATA STRUCTURE(S): 
-input is an array of positive and sometimes negative integers

// ALGORITHM:
1. filter input array to check if number el is % 3 or % 5 (=== 0)
2. return filtered array
*/

function multiplesOfThreeOrFive(values) {
  return values.filter((num) => num % 3 === 0 || num % 5 === 0);
}

console.log(multiplesOfThreeOrFive([])); // []
console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15])); // [ 3, 5, 18, 15 ]
console.log(multiplesOfThreeOrFive([-1, -3, -5, 7, 11, 18, 16, -15])); // [-3,-5,18,-15]

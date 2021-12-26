/*
// UNDERSTANDING THE PROBLEM
- INPUT: 2 integers (m,n)
 - 1 <= m <= n
 - m can be 1 or higher and less than n
 - n is always higher than n
- OUTPUT: array of subarrays
 - subarrays have 2 elements:
  1. the number of the squared divisors which is a square
  2. the sum of the squared divisors 

- RULES: 
 - find all integers btw m and n in which the sum of their squared divisors is itself a square

// EXAMPLES/EDGE CASES: 
example:
1, 246, 2, 123, 3, 82, 6, 41 are divisors of number 246. 
Square these divisors to get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. 
sum of these squares === 84100 which is 290 * 290.

// DATA STRUCTURE(S): 
arrays
subarrays
numbers for calculation

// ALGORITHM:
1. start iteration from m to n 
2. for each current number
 - get a list of all its divisors
 - square these divisors
 - then sum these squares together
 - if the sum of these squares is itself a square:
  -create subarray that includes number AND the sum of squares
return array of subarrays
*/

function list_squared(m, n) {
  let output = [];
  for (let currNum = m; currNum <= n; currNum += 1) {
    let currNumDivisors = findDivisors(currNum);
    let getSquares = squaredDivisors(currNumDivisors);
    let sumSquares = getSumSquaredDivisors(getSquares);
    if (isPerfectSquare(sumSquares)) {
      output.push([currNum, sumSquares]);
    }
  }
  return output;
}

function findDivisors(number) {
  return [...Array(number + 1).keys()]
    .slice(1)
    .filter((currNum) => number % currNum === 0);
}

function squaredDivisors(arrayOfDivisors) {
  return arrayOfDivisors.map((divisor) => divisor * divisor);
}

function getSumSquaredDivisors(squaredDivisors) {
  return squaredDivisors.reduce((acc, curr) => acc + curr, 0);
}

function isPerfectSquare(sumOfDivisors) {
  return Number.isInteger(Math.sqrt(sumOfDivisors));
}

// console.log(list_squared(12, 12)); // []
console.log(list_squared(1, 250)); // [[1, 1], [42, 2500], [246, 84100]]
console.log(list_squared(42, 250)); // [[42, 2500], [246, 84100]]

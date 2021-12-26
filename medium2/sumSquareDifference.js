// REQUIREMENTS:
// input: integer

// output:
// difference between the square of the input's positive integers
// and the sum of the squares of the input's positive integers

// EXAMPLES/TEST CASES:
// input of 3: 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// input of 10: 2640 -> (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)**2 - (1**2 + 2**2 + 3**2 + 4**2 + 5**2 + 6**2 + 7**2 + 8**2 + 9**2 + 10**2)
// input of 1: returns 0

// DATA STRUCTURES:
// numbers

// ALGORITHMS:
// if the input is 1, return 0
// else, get all the numbers from 1 to the input and store in collection
// add all the count integers and then square the sum - SUB PROCESS
// square all the individual count integers, then add them all together - SUB PROCESS
// subtract sum of squares from the square of sum
// return the difference

// my solution
function sumSquareDifference(num) {
  let count = [];

  if (num === 1) {
    console.log(0);
    return 0;
  }

  for (let start = 1; start <= num; start++) {
    count.push(start);
  }

  console.log(squareOfSum(count) - sumOfSquares(count));
  return squareOfSum(count) - sumOfSquares(count);
}

function squareOfSum(arr) {
  let sumNums = arr.reduce((sum, num) => sum + num, 0);
  return sumNums * sumNums;
}

function sumOfSquares(arr) {
  let squareNums = arr.map((num) => num * num);
  return squareNums.reduce((sum, num) => sum + num, 0);
}

// alternative solution
function sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let number = 1; number <= count; number++) {
    sum += number;
    sumOfSquares += Math.pow(number, 2);
  }
  return Math.pow(sum, 2) - sumOfSquares;
}

sumSquareDifference(3); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10); // 2640
sumSquareDifference(1); // 0
sumSquareDifference(100); // 25164150

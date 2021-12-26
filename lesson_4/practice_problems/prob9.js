// INPUT: object with names and ages of Munster family

// OUTPUT: number that is the sum of all the family ages

// REQUIREMENTS:

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// object
// numbers

// ALGORITHMS:
// 1. access the values of each property in the ages object
// 2. put all the ages values into an new array, save to variable
// 3. create a sum variable with value of 0
// 4. using a loop, add up all the numbers in the new array
// 5. same the total sum to the sum variable
// 6. return the sum variable

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
}; // outputs 6147

// my solution
function addUpAges(object) {
  let agesArr = Object.values(object);
  let sum = 0;
  for (let i = 0; i < agesArr.length; i++) {
    sum += agesArr[i];
  }
  console.log(sum);
  return sum;
}

addUpAges(ages);

// alternative solution: forEach
let totalAges = 0;
Object.values(ages).forEach((age) => (totalAges += age));
totalAges; // => 6174

// alternative solution: reduce
Object.values(ages).reduce((agesSum, currAge) => agesSum + currAge, 0); // 6174

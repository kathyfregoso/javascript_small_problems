// INPUT: object (Munster family names and ages)

// OUTPUT: number (minimum age or youngest age)

// REQUIREMENTS:
// Pick out and return the minimum age from Munster family object

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// objects
// arrays
// numbers

// ALGORITHMS:
// 1. access the values in ages and put them in a new array
// 2. assign that array to a variable
// 3. create variable minAge
// 4. sort the array from lowest to highest
// 5. grab the element on index 0 (the lowest age) and assign to minAge
// 6. log minAge

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
}; // returns 10

// my solution
let ageArr = Object.values(ages);
ageArr = ageArr.sort((a, b) => a - b);
let minAge = ageArr[0];
console.log(minAge);

// alternative solution with Math.min
let agesArr = Object.values(ages);
Math.min(...agesArr); // => 10
// Math.min takes multiple numbers as args and returns the minimum of those numbers
// the spread operator (...) converts the array to a list of arguments

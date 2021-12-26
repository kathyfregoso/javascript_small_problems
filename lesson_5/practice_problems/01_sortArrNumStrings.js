let arr = ["10", "11", "9", "7", "8"];

// How to sort the array of number strings by descending numeric value (largest number value to smallest)?

// INPUT: array of number strings

// OUTPUT: sorted array of numbers by descending numeric value

// REQUIREMENTS:
// sort the array of numbers from highest to lowest

// EXAMPLES/TEST CASES:
// ['10', '11', '9', '7', '8'] => ['11', '10', '9', '8', '7']

// DATA STRUCTURES:
// arrays, strings, numbers

// ALGORITHM:
// 1. convert all the string digits in the array to numbers
// 2. sort the numbers with the sort method
// 3. the sort method accepts two arguments for the callback = > a,b
// 4. the body of the sort method should have this expression to sort by descending: b - a
//  - subtracting two strings implicitly coerces both operands to numbers
// 5. sort convert all elements to strings and returns them
// 6. return the new array of sorted string digits

function sortDigits(arr) {
  let newArr = [...arr];
  newArr = newArr.sort((a, b) => b - a);
  console.log(newArr);
  return newArr;
}

sortDigits(arr); // [ '11', '10', '9', '8', '7' ]

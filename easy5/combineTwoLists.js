// INPUT: two arrays

// OUTPUT: combined argument arrays, each element take in alternation

// REQUIREMENTS:
// assume both input arrays are non-empty
// both arg arrays have same num of elements

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// arrays
// [1, 2, 3], ["a", "b", "c"] => [1, "a", 2, "b", 3, "c"]
// [2,4], ['two', 'four'] => [2, 'two', 4, 'four']
// first array = even indexes of new array
// second array = odd indexes of new array

// ALGORITHMS:
// 1. initiate empty array in variable
// 2. loop through both arrays
// 3. first element of first arg = 1st element of new array
// 4. first element of 2nd arg = 2nd element of new array
// 5. second element of first arg = 3rd element of new array
// 6. second element of first arg = 4th element of new array
// 7. and so on... until you reach the end of both argument arrays
// 8. exit loop and return new array

// first solution
function interleave(arr1, arr2) {
  // returns new array
  let newArr = [];
  let length = arr1.length;
  for (let i = 0; i < length; i++) {
    newArr.push(arr1[i]); // each iteration pushes el from arr1 to new array
    newArr.push(arr2[i]); // each iteration pushes el from arr2 to new array
  }
  console.log(newArr);
  return newArr;
}

// further exploration

// solve with forEach
function interleave(arr1, arr2) {
  // returns new array
  let newArr = [];
  arr1.forEach((num1, i) => {
    let num2 = arr2[i];
    newArr.push(num1, num2);
  });
  console.log(newArr);
  return newArr;
}

interleave([1, 2, 3], ["a", "b", "c"]); // [1, "a", 2, "b", 3, "c"]
interleave([2, 4], ["two", "four"]); // [2, 'two', 4, 'four']

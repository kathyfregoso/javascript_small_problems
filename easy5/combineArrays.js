// INPUT: two arrays

// OUTPUT: array containing the union of the values from the two input arrays

// REQUIREMENTS:
// no duplicate values in output
// both args will always be arrays

// QUESTIONS:
// do the values have to be in order from smallest to largest?
// are the array values always integers?

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// arrays

// ALGORITHMS:
// 1. combine the arrays
// 2. save combined arrays in a new array variable
// 3. sort the new array
// 4. filter and remove duplicate numbers
// 5. return union array

function union(array1, array2) {
  let newArr = [...array1, ...array2]; // spread operator combines arrays
  newArr = newArr
    .sort((a, b) => a - b) // sorts array from smallest to largest
    .filter((el, i) => newArr.indexOf(el) === i); // removes non-truthy cb return values

  console.log(newArr);
  return newArr;
}

union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]

// note about .indexOf method:
// it works cause it returns index of the element it finds FIRST, does not look for duplicates
// [1, 3, 3, 5, 6, 9].indexOf(3) returns 1 (stops search when it finds 3 at index 1)

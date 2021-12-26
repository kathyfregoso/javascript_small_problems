// INPUT:
// array with four nested subarray elements of varying lengths

// OUTPUT:
// same data structure as input array, but containing only nums that are multiples of 3

// REQUIREMENTS:
// use a combination of methods, including filter, to return a new array
// new array should have an identical data structure to the OG
// new array should only contain multiples of 3

// QUESTIONS:
// do the lengths of the output subarrays change? or do we return non-multiples of 3 as 'undefined'?

// EXAMPLES/TEST CASES:
// [[2], [3, 5, 7], [9], [11, 15, 18]] =>
// [[], [3], [9], [15, 18]]

// DATA STRUCTURES:
// array with four subarrays that contain integer elements

// ALGORITHMS:
// - save new empty array in a variable
// - loop through the input array
// - if the nested sub array contains a number that is a multiple of 3, continue
// - if the nested sub array contains a num that isn't a multiple of 3, remove that element
// - return the new array
//  - remember: arrays contains other objs, like a nested array, then objs are shared, not copied!
//  - when you change a shared object in an array, the shared object is affected, not the collection

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

function multOfThree(arr) {
  // map transforms each array based on return of cb
  let output = arr.map((subArr) => {
    // filters subarrays based on cb truthiness, cb returns els that are truthy only
    return subArr.filter((num) => num % 3 === 0);
  });

  console.log(output);

  return output;
}

multOfThree(arr);

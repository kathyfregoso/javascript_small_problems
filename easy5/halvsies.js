// INPUT: array

// OUTPUT: 2-d array with 2 elements, each of which is an array

// REQUIREMENTS:
// put first half of OG array elements in the first element of return value
// put the second half in the second element of return value
// if the OG array contains an odd num of elements, place middle el in the first half array

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// [1, 2, 3, 4] => [[1, 2], [3, 4]]
// [1, 5, 2, 4, 3] => [[1, 5, 2], [4, 3]]
// [5] => [[5], []]
// [] => [[], []]

// ALGORITHMS:
// 1. initialize an empty array
// 2. assign empty array into a variable
// 3. if array has an even number of elements:
//  - put first half of elements into array
//  - put 2nd half of elements into array
//  - put the 2 new array elements into the empty array variable
// 4. if array has an odd number of elements (or no elements):
//  - put half + 1 elements into an array
//  - put remaining elements into another array
//  - put the 2 new array elements into the empty array variable
// 5. return the new array with 2 sub array elements

function halvsies(array) {
  let output = [];
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  output.push(firstHalf, secondHalf);
  console.log(output);
  return output;
}

halvsies([1, 2, 3]); // [[1, 2], [3]]
halvsies([1, 2, 3, 4]); // [[1, 2], [3, 4]]
halvsies([1, 2, 3, 4, 5, 6]); // [[1, 2, 3], [4, 5, 6]]
halvsies([1, 5, 2, 4, 3]); // [[1, 5, 2], [4, 3]]
halvsies([1, 5, 2, 4, 3, 7, 8]);
halvsies([5]); // [[5], []]
halvsies([]); // [[], []]

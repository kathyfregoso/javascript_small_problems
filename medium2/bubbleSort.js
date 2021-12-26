// REQUIREMENTS:
// input: array (assume at least 2 elements contained)

// output: sorted array (in-place/mutated, using bubble sort algorithm)

// bubble sort:
// - simple sorting algorithm
// - inefficient
// - multiple iterations thru an array:
//  - each pass, 2 values of each pair of consec. els are compared
//  - if first val > second val, vals are swapped
//  - repeated until complete pass (iteration) made w/out performing any swaps
//  - this means array is completely sorted

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:

// ALGORITHMS:
// sort through the input array using a loop
// keep track of swapped elements
// loop through array until it is sorted completely
// - on each pass, compare two consecutive values
// - if first val > second val, swap vals
// - else, continue
// - repeat until pass w/ no swaps is made
// return mutated array

// my first solution
function bubbleSort(arr) {
  for (let idx = 0; idx <= arr.length; idx += 1) {
    for (let innerIdx = 0; innerIdx < arr.length; innerIdx += 1) {
      if (arr[innerIdx] > arr[innerIdx + 1]) {
        let temp = arr[innerIdx];
        arr[innerIdx] = arr[innerIdx + 1];
        arr[innerIdx + 1] = temp;
      }
    }
  }
  return arr;
}

// pseudocode:
// outer loop handles the task of repeating the iteration until arr is completely sorted
// loop terminates the first time it iterates thru all comparisons w/out any swaps
// this is tracked thru the swapped variable
// inner loop compares vals of each pair of consec. els. and swaps them if first el of pair > 2nd
// - swap uses destructuring assignment:
//  [a, b] = [b, a]

// alternative 2nd solution
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let idx = 0; idx < arr.length; idx += 1) {
      if (arr[idx] > arr[idx + 1]) {
        [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

// alternative 3rd solution (LS)
function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let idx = 1; idx < array.length; idx++) {
      if (array[idx - 1] <= array[idx]) continue;
      [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]];
      swapped = true;
    }
    if (!swapped) break;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

let array3 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

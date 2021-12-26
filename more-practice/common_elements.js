/*
// UNDERSTANDING THE PROBLEM
- INPUT: 3 arrays of integers
- OUTPUT: sum of elements that are common in all 3 arrays

- RULES: 
 - assume all integers are valid in array
 - if empty array, return 0
 - if only one common element? return element itself

// EXAMPLES/EDGE CASES: 
example 1:
[1, 2, 3], [5, 3, 2], [7, 3, 2]
2 + 3 = 5 (2,3 common)

example 2:
[1], [1, 2], [7, 1]
1 is output (only common element, none to sum with)

ex 3:
[1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]
output is 7
2 + 2 + 3 = 7 (2, 2, 3 are common)
if a number repeats 2+ times in all 3 arrays, include in common elements

ex 4: 
[1, 2, 2, 3], [], [7, 3, 2, 2]
output is 0 (no common elements)


// DATA STRUCTURE(S): 
arrays for comparison and iteration
integers for summing

// ALGORITHM:
1. iterate through longest array to check if its elements exist in the other 2 arrays
2. place each common element in new list
3. reduce to get sum of common elements
4. return sum
*/

function common(arr1, arr2, arr3) {
  return arr1.reduce((acc, curr, idx) => {
    let idx2 = arr2.indexOf(curr);
    let idx3 = arr3.indexOf(curr);

    if (idx2 !== -1 && idx3 !== -1) {
      arr2.splice(idx2, 1);
      arr3.splice(idx3, 1);
      acc += curr;
    }
    return acc;
  }, 0);
}

console.log(common([1], [1, 2], [7, 1])); // 1, because 1 is common in all arrays
console.log(common([1, 2, 3], [5, 3, 2], [7, 3, 2])); // 5 because 2 & 3 are common in all 3 arrays
console.log(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2])); // 7 because 2,2 & 3 are common in the 3 arrays
console.log(common([1, 2, 2, 3], [], [7, 3, 2, 2])); // 0 because no common elements in all 3 arrays

/*
// UNDERSTANDING THE PROBLEM
- INPUT: array of numbers or strings
- OUTPUT: array of subarrays
 - repeat values should be in same subarray
 - sorted in order of each elements first appearance in input array
- RULES: 

// EXAMPLES/EDGE CASES: see below

// DATA STRUCTURE(S): 
- arrays, subarrays
- string elements
- number elements

// ALGORITHM:
- iterate through input array
 - get the value and count (number of appearances) for each unique element in order
  - save as object values

 - filter through input array and remove any duplicates (maintaining og sort order)
 - iterate through array with no duplicates:
  - replace each element with subarray that has element repeated the same amount of times it was
   repeated in input array (use object as reference for count info)
- return output array
*/

function arraySort(array) {
  let arrOfSubarrays = removeDuplications(array);
  let elementCount = getCount(array);

  return arrOfSubarrays.map((element) => {
    let count = elementCount[element];
    return Array(count).fill(element);
  });
}

function removeDuplications(array) {
  return array.filter((element, idx) => array.indexOf(element) === idx);
}

function getCount(array) {
  let count = {};
  array.forEach((element) => {
    if (count[element] >= 0) {
      count[element] += 1;
    } else if (!count[element]) {
      count[element] = 1;
    }
  });
  return count;
}

console.log(arraySort([0, 10, 0, 10, 9])); // [[0, 0], [10, 10], [9]]
console.log(arraySort([3, 4, 12, 2, 3, 3, 9, 12, 12, 12, 8, 9]));
//[[3, 3, 3], [4], [12, 12, 12, 12], [2], [9, 9], [8]]

console.log(arraySort(["abc", "mnop", "xyz", "def", "ghijk", "xyz", "abc"]));
// [['abc', 'abc'], ['mnop'], ['xyz', 'xyz'], ['def'], ['ghijk']]
console.log(arraySort(["1", "2", "3"])); // [['1'], ['2'], ['3']]

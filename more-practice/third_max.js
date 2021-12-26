/*
// UNDERSTANDING THE PROBLEM
- INPUT: array (nums)
- OUTPUT: number (3rd max number)
 - if 3rd max number doesn't exist, return max number

- RULES: 
 - third max number: 3rd highest distinct number (if present)
 - does order of nums matter? no, only value
 - will input include negatives? assume yes
 - empty input or empty array: return 0

// EXAMPLES/EDGE CASES: 
Input: nums = [3,2,1]
Output: 1
Explanation: The third max is 1.
(2nd max is 2, 1st max is 3)

Input: nums = [1,2]
Output: 2
Explanation: 
The third max doesn't exist, so max (2) is returned instead.

Input: nums = [2,2,3,1]
Output: 1
Explanation: third max distinct num === third max num
Both nums with value 2 are considered as second maximum.

// DATA STRUCTURE(S): 
-input is array (iteration, filtering)
 - elements are numbers

// ALGORITHM:
1. iterate thru input array to filter out duplicates
2. sort array from largest => smallest (desc)
3. return value at idx 2 (third element) - third max number
 - if no third max return largest element
*/

function thirdMax(arr) {
  if (!arr || arr.length === 0) return 0;
  let noDuplicates = arr.filter((num, idx, arr) => arr.indexOf(num) === idx);
  let sorted = noDuplicates.sort((a, b) => Number(b) - Number(a));

  return sorted[2] ? sorted[2] : sorted[0];
}

console.log(thirdMax());
console.log(thirdMax([])); // 0
console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
console.log(thirdMax([12, 2, -1])); // -1
console.log(thirdMax([6, 8, 8, 7, 7, 6, 5])); // 6

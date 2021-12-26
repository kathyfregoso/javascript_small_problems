/*
// UNDERSTANDING THE PROBLEM
- INPUT: array of digits
- OUTPUT: number (of 'boomerangs') in arrat
- RULES: 
 -boomerang: subarray length 3, where 1st and last digtis
  are the same and the middle digit is different
 - are boomerangs in consecutive order? YES!
 - boomerangs can overlap
 - triple identical digits =/= boomerang! ex [5,5,5]

// EXAMPLES/EDGE CASES: 
ex 1)
input: [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
output: 3
boomerangs: [3,7,3] [1,5,1] [2,-2,2] 

ex 2)
input: [1, 7, 1, 7, 1, 7, 1]
output: 5
boomerangs: [1,7,1], [7,1,7], [1,7,1]

ex 3)
input: [9,5,9,5,1,1,1]
output: 2
boomerangs: [9,5,9], [5,9,5]

ex 4)
input: [5, 6, 6, 7, 6, 3, 9]
output: 1
boomerangs: [6,7,6]

ex 5) 
input: [4, 4, 4, 9, 9, 9, 9]
output: 0
boomerangs: none

// DATA STRUCTURE(S): 
arrays - for iterating and finding 3 corresponding elements
integers - for comparing digits
boomerang: [digit, middleDigit, digit]

// ALGORITHM:
SMALLER PROBLEMS:
1. iterate through input array, incr. idx by 1 each loop
2. grab 3 consecutive elements (subsequence) starting at idx 1
3. identify whether subsequence is a boomerang
  - first and last element match
  - middle element unique
4. if 3 elements are boomerang, increment boomerang count
5. return boomerang count
*/

function countBoomerangs(array) {
  let boomerangCount = 0;

  for (let idx = 0; idx < array.length - 2; idx += 1) {
    let subsequence = array.slice(idx, idx + 3);
    if (verifyBoomerang(subsequence)) {
      boomerangCount += 1;
    }
  }
  return boomerangCount;
}

function verifyBoomerang(subsequence) {
  return (
    subsequence.length === 3 &&
    subsequence[0] === subsequence[2] &&
    subsequence[1] !== subsequence[0] &&
    subsequence[1] !== subsequence[2]
  );
}

console.log(countBoomerangs([])); // 0

console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));
// 3

console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1])); // 5

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])); // 2

console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])); // 1

console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9])); // 0

console.log(countBoomerangs([5, 5, 5, 1, 5])); // 1

/*
// UNDERSTANDING THE PROBLEM
- INPUT: M (binary str), N (binary str) 
- OUTPUT: number of swaps
- false if not possible 

- RULES: 

// EXAMPLES/EDGE CASES: 
Input: str1 = "1110000", str2 = "0001101"

// DATA STRUCTURE(S): 
strings for iteration

// ALGORITHM:
1. initialize count var with value of 0
2. iterate over M
 - if non-equal els found in both binary strings, incr
  counter
3. after iteration, if count val is even number, return
 count / 2
  - count of unidentical elements must be even, otherwise
   str1 can't be swapped into str2 ex:
    '321' '4321'
*/

function minSwap(str1, str2) {
  let count = 0;

  for (let idx = 0; idx < str1.length; idx += 1) {
    if (str1[idx] !== str2[idx]) {
      count += 1;
    }
  }

  return count / 2;
}

console.log(minSwap("1101", "1110")); // 1
console.log(minSwap("1110000", "0001101")); // 3
console.log(minSwap("321", "4321")); // false

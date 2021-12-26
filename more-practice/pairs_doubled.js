/*
// UNDERSTANDING THE PROBLEM
- INPUT: array of integers 
 - even length (ex: l = 6, l = 4)
- OUTPUT: 
 - true if possible to reorder
 - false if not 

- RULES: 
only possible to reorder if arr[2 * i + 1] = 2 * arr[2 * i] for every 0 <= i < len(arr) / 2
for every 0 <= i < len(arr) / 2
 in english: for every 0 less than or equal to (curr idx less than length of array divided by 2
  0 <

// EXAMPLES/EDGE CASES: 
Example 1:
Input: arr = [3,1,3,6]
Output: false


Example 2:
Input: arr = [2,1,2,6]
Output: false

Example 3:
Input: arr = [4,-2,2,-4]
Output: true
Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].


Example 4:
Input: arr = [1,2,4,16,8,4]
Output: false

// DATA STRUCTURE(S): 

// ALGORITHM:
*/

/*
// UNDERSTANDING THE PROBLEM
- INPUT: 
 1) string digit(s) 
  - can be 1+ digits
  -top of sequence/pattern
 2) length of sequence (number)
- OUTPUT: array of string digits
 - length of array same as input length given
 - each element corresponds to number pattern that follows sequence below

- RULES: a sequence of numbers follows this pattern:
					1
         11
         21
        1211
       111221
       312211
      13112221
     1113213211
          .
          .
          .

 - starting with the first line at the top:
  - 'one'
  - 'one one'
  - 'two one(s)'
  - 'one two one one'

// EXAMPLES/EDGE CASES: 
input: '1'
					1
         11
         21
        1211
       111221
       312211
          .
          .
          .

input: '1259'
					1259
         11121519
         311211151119
        13211231153119
       1113122112132115132119
       31131122211211131221151113122119
          .
          .
          .

// DATA STRUCTURE(S): 

// ALGORITHM:

*/

function lookAndSay(data, length) {}

console.log(lookAndSay("1", 5)); // ['11','21','1211','111221','312211']
console.log(lookAndSay("1259", 5));
// ['11121519', '311211151119', '13211231153119', '1113122112132115132119', '31131122211211131221151113122119']

/*
// UNDERSTANDING THE PROBLEM
- INPUT: string
- OUTPUT: true or false (boolean)
 - true if valid, false otherwise
- RULES:
 - luhn formula: checksum to validate ID numbers
 -  test conditions:
  - count from right to left, double value of every 2nd digit
  - if any digit becomes 10 ore more, subtract 9 from result
   - 1111 => (1*2)1(1*2)1 => 2121  (no digit becomes more than 10)
   - 8763 => (7)7(3)3 => 7733 
    - (8*2)7(6*2)3 => (16)7(12)3
    - since 12 and 16 > 10...
     - subtract 9 from 12 to get 3 => (16)7(3)3
     - subtract 9 from 16 to get 7 => (7)7(3)3
  - once the digits are transformed, add them all together
   - 2+1+2+1 => 6 (not valid, doesn't end in 0)
   -7+7+3+3 => 20 (valid, ends in 0)

// EXAMPLES/EDGE CASES: 
"2323 2005 7766 3554" is valid, returns true

- ignore all non-numeric characters in input

// DATA STRUCTURE(S): 
input is string -> ignore non digits (0-9) 
 - filter them out? regex +/or split into array
digits => number vals for calculation
 - doubling every 2nd digit by multiplying
 - subtracting 9 from result if result >= 10
 - reduce to get sum of all numbers
 -if modulo 10 === 0, result is true

// ALGORITHM:
1. split input string into array of digits
 - delimiter is str.split(/[^0-9]/).join('').split('')
2. turn each digit into a number
 - reverse array of digits
3. iterate from right to left starting from second to last idx (str.length - 2)
 - for each 2nd digit, double the value by multiplying it
 - if new result is >= 10, subtract 9
 - return new value
4. once values are tranformed, get the sum of numbers
5. if sum % 10 === 0, return true, else false
*/

function checkSum(number) {
  let arrayOfNums = number
    .split(/[^0-9]/)
    .join("")
    .split("")
    .map((digit) => Number(digit))
    .reverse();

  let transformNums = arrayOfNums.map((num, idx) => {
    if ((idx + 1) % 2 === 0) {
      let newNum = num * 2;
      if (newNum >= 10) {
        newNum -= 9;
      }
      return newNum;
    } else {
      return num;
    }
  });

  return transformNums.reduce((acc, curr) => acc + curr, 0) % 10 === 0;
}

("1111");

console.log(checkSum("2323 2005 7766 3554")); // true
console.log(checkSum("1111")); // false
console.log(checkSum("8763")); // true
console.log(checkSum("2323..2005//7766    3554")); // true
console.log(checkSum("1323   2005//7766 3555")); // false

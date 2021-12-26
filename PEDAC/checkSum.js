/*
// UNDERSTANDING THE PROBLEM
- INPUT: string of digits 
 - ignore all non-numeric characters
- OUTPUT: boolean 
 - true if input is valid
 - false if not valid
- RULES: check if input string number is valid per Luhn formula
 - Luhn formula: checksum that validates ID numbers
  - verifies a number against its included check digit, usually appended to a partial number
   to generate the full number
  - number must pass test:
   - starting from rightmost digit, double the value of every 2nd digit
   - for any digit that thus becomes 10+, subtract 9 from the result
    - 1111 => [1]1[1]1 => 2121 (from 2 * [1] = 2 AND 2 * [1] = 2) 
     - no need to subtract 9 since multiplying number by 2 does not equal more than 10
    - 8763 => [8]7[6]3 => 7733 (from 2 x [6] = 12 -> 12 - 9 = 3 AND 2 x [8] = 16 -> 16 - 9 = 7)
     - subtract 9 from result because multiplying the digit by 2 results in product greater than 10
   - add all digits together:
    - 1111 becomes 2121 === 2 + 1 + 2 + 1 = 6
    - 8763 becomes 7733 === 7 + 7 + 3 + 3 = 20
  - if the total (checksum) ends in 0, the number is valid, else it's not valid
   - 1111 isn't valid (becomes 6, does not end in 0)
   - 8763 is valid (becomes 20, ends in 0)
// EXAMPLES/EDGE CASES: 
"2323 2005 7766 3554" => valid
"[2]3[2]3 [2]0[0]5 [7]7[6]6 [3]5[5]4" =>
"4343 4005 5736 6514" => 4+3+4+3+4+0+0+5+5+7+3+6+6+5+1+4 = 60 (valid)
2 * [5] = 10 -> 10 - 9 = 1
2 * [3] = 6
2 * [6] = 12 -> 12 - 9 = 3
2 * [7] = 14 -> 14 - 9 = 5
2 * [0] = 0
2 * [2] = 4
2 * [2] = 4
2 * [2] = 4

"79927398713" => valid
"7[9]9[2]7[3]9[8]7[1]3" =>
"79947697723" => 7+9+9+4+7+6+9+7+7+2+3 = 70 (valid)
2 * [1] = 2
2 * [8] = 16 -> 16 - 9 = 7
2 * [3] = 6
2 * [2] = 4
2 * [9] = 18 -> 18 - 9 = 9

// DATA STRUCTURE(S): split string into array of digits for transformation and summation

// ALGORITHM:
- remove non-integer digits from stirng
- split string itno array of single digits (delimiter is "")
- turn all string elements into numbers
- start iteration from the digit that's lest of rightmost digit (2nd to last)
 - every 2nd digit, double the number
 - if number is 10 and up, subtract 9 and change the element to that result
 - else the result becomes the new element
- reduce (sum) all the numbers together 
- transform sum into string
- get the last digit, if the last digit is 0 (or if modulo 10 is === 0), return true
- else return false
*/

function checkSum(number) {
  let digits = number
    .split("")
    .filter((digit) => /[0-9]/.test(digit))
    .map((digit) => Number(digit));

  for (let idx = digits.length - 2; idx >= 0; idx -= 2) {
    digits[idx] *= 2;
    if (digits[idx] >= 10) {
      digits[idx] -= 9;
    }
  }

  let sum = digits.reduce((curr, acc) => curr + acc, 0);
  return sum % 10 === 0;
}

console.log(checkSum("1111")); // false
console.log(checkSum("8763")); // true
console.log(checkSum("2323 2005 7766 3554")); // true
console.log(checkSum("79927398713")); // true
console.log(checkSum("2323/2005 7767.3554")); // false
console.log(checkSum("2323/2005 7766.3554")); // true

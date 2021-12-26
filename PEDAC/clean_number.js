/*
// UNDERSTANDING THE PROBLEM
- INPUT: string of digits (phone number)
 - special chars ok: ' ', '-', '.', ()
- OUTPUT: cleaned up phone number 
 - if bad number, return a string of 10 '0's
- RULES: 
 - phone number must be 10+ digits
  - 10+ digits === good number
  - <10 digits === bad number
 - if 11 digits AND first number is 1, trim 1, and use
   the last 10 digits only
  - if 11 digits & the 1st number isn't 1, it's a bad number
  - if phone number 11+ digits, it's a bad number
  - spaces, dashes, dots, and parens don't count towards digit count
   - remove them for clean up
// EXAMPLES/EDGE CASES: 

// DATA STRUCTURE(S): strings, arrays for transformation

// ALGORITHM:
clean up:
- start by removing any non-digits from string
 - this includes spaces, dash, dot, and parentheses

check # of digits
- once non-digits removed, check how long string is
 - if less than 10, return '0000000000'
 - if 10 exactly, return the string as is
 - if 11:
  - if 1st digit === '1', return as is
  - if 1st digit !== '1', return '0000000000'
 - if digit count > 11, return '0000000000'
- return cleaned up string 
*/

function cleanNumber(number) {
  let digits = number
    .split("")
    .filter((char) => /[0-9]/.test(char))
    .join("");
  return checkDigitCount(digits);
}

function checkDigitCount(digits) {
  let first = digits[0];
  if (digits.length === 10) {
    return digits;
  } else if (digits.length === 11) {
    return first === "1" ? digits : "0000000000";
  } else if (digits.length > 11 || digits.length < 10) {
    return "0000000000";
  }
}

// less than 10 digits
console.log(cleanNumber("")); // '0000000000'
console.log(cleanNumber("911")); // '0000000000's
console.log(cleanNumber("999 999 999")); // '0000000000'
console.log(cleanNumber("999-999-999")); // '0000000000'

// 10 digits
console.log(cleanNumber("(310)451-8971")); // '3104518971'
console.log(cleanNumber("(310) 451 -   8971")); // '3104518971'
console.log(cleanNumber("310.451.8971  ...")); // '3104518971'

// 11 digits
console.log(cleanNumber("1-999-999-9999")); // '9999999999'
console.log(cleanNumber("8..310.999. 9999")); // '0000000000'

// more than 11 digits
console.log(cleanNumber("0118 999 881 999 119 725...3"));
// '0000000000'

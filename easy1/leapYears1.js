// INPUTS: 
// any year (number) greater than 0

// OUTPUT:
// true boolean value if the year IS a leap year
// false if the year IS NOT a leap year

// EXPLICIT REQ'S:
//  leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100
// If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.
// Assume this rule is valid for any year greater than year 0. 

// IMPLICIT REQ'S/QUESTIONS:
// can we assume the input will be a primitive number value?

// EXAMPLES / TEST CASES: 
// see below

// ERRORS - return undefined: 2015,  240001, 1 (explicitly wrote a conditional for years not divisible by 4 returning false)

// DATA STRUCTURES:
// numbers 

// ALGORITHM:
// write a func that accepts a number representing a year
// use a conditional to determine if the input is a leap year
// 
// - if (input < 0) return false
// - else if (input % 4 === 0 && input % 100 !== 0) return true
// - else if (input % 100 === 0 && input % 400 === 0) return true

function isLeapYear(year) {
  if (year % 400 === 0) return true;
    else if (year % 4 === 0 && year % 100 !== 0) return true;
    else return false;
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

// future reference: test for least common cases first (years div by 400, years div by 100). anything else, if the year is div by 4, returns true.
// the ORDER in which you perform tests for a leap year calculation is important

// will this fail?

// function isLeapYear(year) {
//   if (year % 100 === 0) {
//     return false;
//   } else if (year % 400 === 0) {
//     return true;
//   } else {
//     return year % 4 === 0;
//   }
// }

// yes, the above test will fail because if the first condition on line 71 is false, the function returns true, but it doesn't check if the year is ALSO divisible by 400
// if a year is div by 400, we can assume it is ALSO divisible by 100
// INPUTS: 
// any year (number) greater than 0
// gregorian == any year starting 1752 and after
// julian == any year before 1752

// OUTPUT:
// 2 possible outputs: 
// gregorian leap year - true or false (divisible by 4 or 400)
// julian leap year - true or false (divisible by 4)
// the output depends on the year that is inputted (gregorian vs julian)

// EXPLICIT REQ'S:
// Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

// calculate leap years in Gregorian calendar using current leap year rules:
// - leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100
// - If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.
// - Assume this rule is valid for any year greater than year 0. 


// IMPLICIT REQ'S/QUESTIONS:


// EXAMPLES / TEST CASES: 
// see below

// DATA STRUCTURES:
// numbers

// ALGORITHM:
// first determine if the input follows the Gregorian calendar (1752+) or the Julian Calendar (pre-1752)
// create helper functions for gregorian and julian calendars
// if (input >= 1752) return gregorian(input)
// else if (input <= 1751) return julian(input)

function julian(year) {
  if (year % 4 === 0) return true;
    else if (year % 4 !== 0) return false;
}

function gregorian(year) {
  if (year % 400 === 0) return true;
    else if (year % 4 === 0 && year % 100 !== 0) return true;
    else return false;
}

function isLeapYear(year) {
  let output;
  if (year >= 1752) output = gregorian(year);
    else if (year <= 1751) output = julian(year);
  return output;
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true
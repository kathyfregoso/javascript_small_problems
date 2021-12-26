/*
// UNDERSTANDING THE PROBLEM
- INPUT: integer (year)
- OUTPUT: string (century)
 - starts with century number
 - ends with: st, nd, rd, or th
- RULES: 
 - new centurys start with 01: 1901 - 2000
 - century = (year / 100) + 1 rounded down

// EXAMPLES/EDGE CASES: 
all end in 'th' 
EXCEPT centuries that end in digits: 1 (st), 2 (nd), 3 (rd)
 1st (1)   11th (1001)    21st (2001)
 2nd  (101) 12th  (1101)
 3rd (201)  13th (1201)
 4th  (301) 14th (1301)
 5th (401)  15th (1401)
 6th  (501)  16th (1501)
 7th  (601)  17th (1601)
 8th  (701) 18th (1701)
 9th  (801) 19th (1801)
 10th (901)  20th (1901)

// DATA STRUCTURE(S): numbers for computation
numbers to strings

// ALGORITHM:
- take the input number and calculate the century:
  - century = (year / 100) + 1 rounded down
  - turn century number into a string
  - check if the number ends in 1, 2 or 3
    - if it doesn't, concat with 'th' 
    - if it does, use st, nd, or rd
- return century string
*/

function century(year) {
  let century = String(Math.floor(year / 100) + 1);
  let lastDigit = century[century.length - 1];

  if (lastDigit === "1") {
    return century + "st";
  } else if (lastDigit === "2") {
    return century + "nd";
  } else if (lastDigit === "3") {
    return century + "rd";
  }
  return century + "th";
}

console.log(century(1)); // '1st'
console.log(century(100)); // '1st'
console.log(century(101)); // '2nd'
console.log(century(133)); // '2nd'
console.log(century(245)); // '3rd'
console.log(century(1052)); // '11th'
console.log(century(1152)); // '12th'
console.log(century(1252)); // '13th'
console.log(century(2012)); // '21st'
console.log(century(2112)); // '22nd'
console.log(century(22222)); // '223rd'
console.log(century(22512)); // '226th'

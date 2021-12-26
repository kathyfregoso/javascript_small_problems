/*
// UNDERSTANDING THE PROBLEM
- INPUT: string with digits (representation of octal number)
- OUTPUT: number/integer (decimal version of input)
- RULES:
- octalToDecimal function : octal to decimal conversion
- decimal (base-10 system)
 - The rightmost digit gets multiplied by 10^0 = 1
 - The next number to the left gets multiplied by 10^1 = 10
 - the nth number multiplied by 10^n-1
 - all these values are summed
 DECIMAL EXAMPLE:
  233                         // decimal
  = 2*10^2 + 3*10^1 + 3*10^0
  = 2*100  + 3*10   + 3*1

- octal (powers of 8, base-8)
 - The rightmost digit gets multiplied by 8^0 = 1
 - The next number to the left gets multiplied by 8^1 = 8
 - the nth number multiplied by 8^n-1

// EXAMPLES/EDGE CASES:

OCTAL EXAMPLE:
233                          // octal
[2, 3, 3]
= 2*8^2 + 3*8^1 + 3*8^0 
= 2*64  + 3*8   + 3*1 
= 128   + 24    + 3 [128, 24, 3]
= 155                          // decimal

// DATA STRUCTURE(S):
arrays, numbers, strings

// ALGORITHM:
- split input string into array of digits
 - reverse the array
- map this digit array to an array of digits multiplied by the powers of 8
- reduce these numbers to get the sum (total decimal value)
*/

function octalToDecimal(numberString) {
  let digitsArray = numberString.split("").reverse();
  let exponent = -1;

  let powersOfEight = digitsArray.map((digit) => {
    exponent += 1;
    return Number(digit) * Math.pow(8, exponent);
  });

  return powersOfEight.reduce((acc, curr) => curr + acc, 0);
}

console.log(octalToDecimal("233")); // 155
console.log(octalToDecimal("10")); // 8
console.log(octalToDecimal("130")); // 88
console.log(octalToDecimal("1")); // 1
console.log(octalToDecimal("17")); // 15
console.log(octalToDecimal("2047")); // 1063
console.log(octalToDecimal("011")); // 9

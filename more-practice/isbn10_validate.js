/*
// UNDERSTANDING THE PROBLEM
- INPUT: string of digits (isbn-10)
 - 10 digit length
 - first 9 chars: 0-9
 - last digit: 0-9 OR X 
  - X is 10
- OUTPUT: true if valid isbn-10, false if not
 - return false if length is > 10
 - return false if first 9 digits are not 0-9
- RULES: 
 - isbn-10 is valid if:
  - sum of digits multiplied by their position modulo 11
   is equal to 0

// EXAMPLES/EDGE CASES: 
example:
ISBN     : 1 1 1 2 2 2 3 3 3  9
position : 1 2 3 4 5 6 7 8 9 10
valid?: true
(1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0

input:   "1 1 1 2 2 2 3 3 3 9   X"
position  1 2 3 4 5 6 7 8 9 10  11
false ... too long!

// DATA STRUCTURE(S): 
- input: make into array of digitis for iteration 
- string digits => numbers for calculation
 - multiplication
 - modulo 11

// ALGORITHM:
1. split input string of digits into array of digits
2. reduce each str digit in array by:
 - converting digit to number
 - multiplying num by its respective place (number * (index + 1))
 - sum all the products
3. then once you reduced the array of numbers, do sum % 11
4. if result is 0, return true, if not, return false

EDGE CASE:
 - if digit = X, replace with 10!
*/

function validateISBN(isbn) {
  if (isbn.length > 10 || isbn.length < 10) return false;
  if (/[^0-9]/gi.test(isbn.slice(0, 9))) return false;

  let calculation = isbn.split("").reduce((acc, curr, idx) => {
    if (curr === "X") {
      curr = 10 * (idx + 1);
    } else {
      curr = curr * (idx + 1);
    }

    return acc + curr;
  }, 0);

  return calculation % 11 === 0;
}

console.log(validateISBN("1112223339")); //  true
console.log(validateISBN("111222333")); //  false
console.log(validateISBN("1112223339X")); // false
console.log(validateISBN("1234554321")); // true
console.log(validateISBN("1234512345")); //  false
console.log(validateISBN("048665088X")); // true
console.log(validateISBN("X123456788")); //  false
console.log(validateISBN("1234")); // false

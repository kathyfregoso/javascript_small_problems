/*
// UNDERSTANDING THE PROBLEM
- INPUT: string
- OUTPUT: object
 - lowercase letter count
 - uppercase letter count
 - count of chars that are neither upper or lower

- RULES: 
 - take a string and return object with case count
  (properties of object: lowercase, uppercase, neither)
 - 'neither' prop: spaces, digits, punctuation, etc

// EXAMPLES/EDGE CASES: 
'abCdef 123'
{ lowercase: 5, uppercase: 1, neither: 4 }

'123' => { lowercase: 0, uppercase: 0, neither: 3 }

"" =>
{ lowercase: 0, uppercase: 0, neither: 0 }

// DATA STRUCTURE(S): 
- string input
 - account for case of each character
 - iteration thru string of chars possible

- object to hold properties with number values
 representing the count of case chars

// ALGORITHM:
1. declare variable and assign empty object w/ 3 props, all
 w/ initial value of 0:
  - lowercase, uppercase, neither
2. iterate thru list of chars:
 - if letter is lowercase alphabetic, increment object.lowercase property by 1
 - if letter is upper alpha, increment object.uppercase by 1
 - if not alphabetic, increment object.neither by 1
3. return count object
*/

function letterCaseCount(str) {
  let countChars = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  str.split("").forEach((char) => {
    if (/[a-z]/g.test(char)) {
      countChars.lowercase += 1;
    } else if (/[A-Z]/g.test(char)) {
      countChars.uppercase += 1;
    } else {
      countChars.neither += 1;
    }
  });

  return countChars;
}

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }

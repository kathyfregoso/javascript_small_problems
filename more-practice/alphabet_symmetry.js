/*
// UNDERSTANDING THE PROBLEM
- INPUT: array of strings
 - each string includes alphabetic letters
 - letters both upper and lowercase
 - assume no numbers/punctuation
- OUTPUT: array of numbers
 - each number is the COUNT (total amount) of chars
  in that string element whose index in string
  corresponds with that letter's index in the
  alphabet
- RULES: 
 - make check case insensitive (default to lowercase)

// EXAMPLES/EDGE CASES: 
["abode", "ABc", "xyzD"] => [4,3,1]

"abode"
a = 0 *
b = 1 *
o = 2 X
d = 3 *
e = 4 *
* count = 4

"ABc" => "abc"
a = 0 *
b = 1 *
c = 2 *
* count = 3

'xyzD' => 'xyzd'
x = 0 X
y = 1 X
z = 2 X
d = 3 *
* count = 1

// DATA STRUCTURE(S): 
- string for alphabet => 
let alpha = 'abcdefghijklmnopqrstuvwxyz'
for simplicity, match by indexes, not length/count of 
letter characters in alpha:
 - a = 0, b = 1, c = 2, d = 3, e = 4, ... z = 25

- string elements => number elements

// ALGORITHM:
- declare variable with alpha string (lowercase)

- declare variable with empty array value

- map to iterate and transform each input arr's elements 
  to respective count (number) of letters in their corresponding
  alphabetic position (index)
  HELPER FUNCTION
  - declare count variable with value of 0 to start
  - lowercase the string
  - iterate through string/list of chars (inner loop)
   - compare current letter's index to the matching
    letter's index in the alpha string
   - if the indexes match, increment count by 1
   - if not, don't increment count by anything
   - do this for all letters
   - return count number
- return mapped array
*/

const ALPHA = "abcdefghijklmnopqrstuvwxyz";

function alphabetSymmetry(arrStrings) {
  return arrStrings.map((string) => {
    return countMatching(string); // returns count number
  });
}

function countMatching(string) {
  let count = 0;
  string
    .toLowerCase()
    .split("")
    .forEach((char, idx) => {
      if (idx === ALPHA.indexOf(char)) {
        count += 1;
      }
    });
  return count;
}

// empty array input returns empty array
console.log(alphabetSymmetry([])); // []
console.log(alphabetSymmetry(["abode", "ABc", "xyzD"]));
// // [4,3,1]

console.log(alphabetSymmetry(["abcdefghijklmnopqrstuvwxyz"]));
// // [26]

console.log(alphabetSymmetry(["aaadeeeeejklmmmpqrrruvwxxz"]));
// // "[a]aa[d][e]eeee[j][k][l][m]mm[p][q][r]rr[u][v][w][x]x[z]"
// // [15]

console.log(alphabetSymmetry(["crickey"]));
// // [0]
// c = 0, r = 1, i = 2, c = 3, k = 4, e = 5, y = 6

/*
// UNDERSTANDING THE PROBLEM
- INPUT: string
- OUTPUT: integer (length of longest palindromic substring)

- RULES: find the length of longest palindromic substring of input string
- palindrome: word/str that can be read same forwards and backwards
- if input is empty str, return 0
- exclude non letters

// EXAMPLES/EDGE CASES: 
"babad" -> "bab" => 3
"abababa" -> "abababa" => 7
"cbbd" => "bb" => 2
"ab" => "a" => 1?
“I like racecars that go fast” => "racecar" => 7
"aab" -> "aa" => 2  
"abcde" -> "1"
"zzbaabcd" => "baab" => 4
"" => 0

// DATA STRUCTURE(S): 
string input
counting integers
count of letters stored in obj

// ALGORITHM:
1. iterate over input string using loop
2. add count of each letter to obj for reference (increment count by 1 each time)
 - if letter prop non-existent, add key and initialize to 1
3. iterate over object using keys (Object.keys)
 - for every letter, add the highest even number of the count to the result
 - if any letter has an uneven (odd) count, add 1 to the result
*/

longestPalindrome = function (s) {
  let countObj = s
    .replace(/[^a-z]/gi, "")
    .split("")
    .reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr] += 1;
      } else if (!acc[curr]) {
        acc[curr] = 1;
      }
      return acc;
    }, {});
  let longestPal = 0;

  // Object.keys(countObj).forEach((letter) => {
  //   console.log(countObj[letter]);
  // });
  return countObj;
};

console.log(longestPalindrome("abababa")); // 7
console.log(longestPalindrome("cbbd")); // 2
// console.log(longestPalindrome("ab")); // 1
//console.log(longestPalindrome("I like racecars that go fast")); // 7
// console.log(longestPalindrome("aab")); // 2
// console.log(longestPalindrome("abcde")); // 1
console.log(longestPalindrome("zzbaabcd")); // 4
// console.log(longestPalindrome("")); // 0

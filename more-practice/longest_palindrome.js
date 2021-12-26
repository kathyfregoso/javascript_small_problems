/*
// UNDERSTANDING THE PROBLEM
- INPUT:
- OUTPUT: 

- RULES: 
"given a string, what is the length of the longest palindrome that can be formed from the letters
in the string. the string is no longer than 100 chars"

// EXAMPLES/EDGE CASES: 

// DATA STRUCTURE(S): 
strings => array to get substrings
arrays for iterations

// ALGORITHM:
1. get all leading substrings
2. get all substrings using leading substrings function (for each starting char)
3. iterate through all substrings filter for palindromes
 - valid palindrome check:
  - make copy of substring
  - split copy and reverse then join
  - if copy === original substring, keep palindrome
4. filter palindromes and for palindrome
5. return length of longest palindrome
*/

function longestPalindrome(str) {
  if (str.length === 0) return 0;
  let substrings = allSubstrings(str);
  let palindromes = validPalindrome(substrings).filter(
    (palindrome) => palindrome.length > 1
  );
  if (palindromes.length === 0) return 0;

  return palindromes.sort((a, b) => {
    return b.length - a.length;
  })[0].length;
}

function leadingSubstrings(str) {
  return str.split("").map((_, idx) => str.slice(0, idx + 1));
}

function allSubstrings(str) {
  let output = leadingSubstrings(str);

  for (let idx = 1; idx < str.length; idx += 1) {
    output.push(leadingSubstrings(str.slice(idx)));
  }
  return output.flat();
}

function validPalindrome(arrayOfSubstrings) {
  return arrayOfSubstrings.filter((substring) => {
    let copy = substring.split("").reverse().join("");
    return substring === copy;
  });
}

console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("madam")); // 5
console.log(longestPalindrome("abcd")); // 0
console.log(longestPalindrome("")); // 0
console.log(longestPalindrome("abababalllllllll")); // 9

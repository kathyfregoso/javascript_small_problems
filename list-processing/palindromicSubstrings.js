// REQUIREMENTS:
// input: string

// output:
// - a list of all palindromic substrings of the string
// - each substr. must consist of a sequence of chars that read the same forward and backward
// - aka a palindrome
// - the substrings in the returned list should be sorted by their order of appearance in input str
// - duplicate substrings should be included multiple times
// - use the substrings function from previous exercise

// rules:
// - consider all the chars
// - pay attention to case
// - 'AbcbA' is a palindrome, not 'Abcba' or 'Abc-bA'
// - single chars are NOT palindromes

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// arrays, strings

// ALGORITHMS:
// PALINDROMES FUNCTION
// use the substrings function to obtain an array of all the substrings from the input string
// save the evaluated result of the substrings function to a variable
// initialize new variable with reference to empty array
// loop through the substrings variable
// - each loop check the current substring element to see if it is a palindrome - SUB PROCESS
// - if it IS a palindrome: push the element to the palindromes substrings array
// - if it is NOT a palindrome: ignore and continue to the next element
// - exit loop after each substring is examined
// return the palindrome substrings array

// CHECK IF STRING IS PALINDROM FUNCTION
// if input string is one character, return false
// palindrome check is case sensitive
// if the input string is the same as the string reversed, it IS a palindrome
// return true
// else if input string is not the same as the string reversed, it's NOT a palindrom
// return false

// my solution
function palindromes(str) {
  let allSubstrings = substrings(str);
  let palindromSubstr = [];

  for (let i = 0; i < allSubstrings.length; i++) {
    if (palindromeCheck(allSubstrings[i])) {
      palindromSubstr.push(allSubstrings[i]);
    } else {
      continue;
    }
  }
  console.log(palindromSubstr);
  return palindromSubstr;
}

// alternative shorter solution
function palindromes(str) {
  console.log(substrings(str).filter(palindromeCheck));
  return substrings(str).filter(palindromeCheck);
}

// checks if string is palindrome
function palindromeCheck(substr) {
  if (substr.length <= 1) {
    return false;
  }

  return substr === substr.split("").reverse().join("");
}

palindromeCheck("aba");

palindromes("abcd"); // []
palindromes("madam"); // [ "madam", "ada" ]

palindromes("hello-madam-did-madam-goodbye");
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

palindromes("knitting cassettes");
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// HELPER FUNCTIONS (prev excercises)!

// extracts all possible str substrings into array
function substrings(str) {
  let substrArr = [];

  for (let i = 0; i < str.length; i++) {
    substrArr.push(leadingSubstrings(str.slice(i)));
  }

  return substrArr.flat();
}

// substrings("abcde");
// substrings("Kathy");

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

// extracts leading substrings from str into array
function leadingSubstrings(str) {
  let chars = str.split("");
  let substrings = [];
  let curr = "";

  for (let i = 0; i < chars.length; i++) {
    curr += chars[i];
    substrings.push(curr);
  }

  return substrings;
}

//leadingSubstrings("abc"); // ["a", "ab", "abc"]
// leadingSubstrings("a"); // ["a"]
// leadingSubstrings("xyzzy"); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

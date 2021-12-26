// INPUT:
// string

// OUTPUT:
// true if string is palindrome
// false if string is NOT palindrome

// REQUIREMENTS:
// a palindrome reads the same forwards and backwards
// case-insensitive
// ignore all non-alphanumeric characters

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// us isPalindrome function as helper function
// without regex:
// - create isRealPalindrom function
// - create helper function to remove non-characters + num (separate concerns)
// - remove noncharacters and numbers with helper function, and lowercase input string
// removeNonCharsNums function
// - create empty output string and save to variable
// - use a for loop to iterate thru string
//  - check if char is character btw a-z
//  - check if char is digit btw 0-9
//  - push alphanumeric chars to empty string variable
//  - return variable

function isPalindrome(string) {
  let reverseString = string.split("").reverse().join("");
  return reverseString === string;
}

// SOLUTION 1 (NO REGEX)
function isRealPalindrome(string) {
  string = removeNonCharsNums(string.toLowerCase());
  console.log(isPalindrome(string));
  return isPalindrome(string);
}

function removeNonCharsNums(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (
      (string[i] >= "a" && string[i] <= "z") ||
      (string[i] >= "0" && string[i] <= "9")
    ) {
      result += string[i];
    }
  }
  return result;
}

// SOLUTION 2: w/ regex
function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/\W/g, "");
  console.log(isPalindrome(string));
  return isPalindrome(string);
}

isRealPalindrome("madam"); // true
isRealPalindrome("Madam"); // true (case does not matter)
isRealPalindrome("Madam, I'm Adam"); // true (only alphanumerics matter)
isRealPalindrome("356653"); // true
isRealPalindrome("356a653"); // true
isRealPalindrome("123ab321"); // false

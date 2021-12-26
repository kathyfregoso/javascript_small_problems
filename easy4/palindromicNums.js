// INPUT:
// number

// OUTPUT:
// true of integer arg is palindromic
// false if integer argument is not palindromic

// REQUIREMENTS:
// a palindromic numbere reads the same forwards and backwards

// DATA STRUCTURES:
// numbers
// booleans

// ALGORITHMS:
// use the isPalindrome function from prev exercise
// pass as argument of isPalindrome:
// - convert input num to string
// return isPalindrome to get evaluated result

function isPalindrome(string) {
  let reverseString = string.split("").reverse().join("");
  return reverseString === string;
}

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

isPalindromicNumber(34543); // true
isPalindromicNumber(123210); // false
isPalindromicNumber(22); // true
isPalindromicNumber(5); // true

// further exploration:

// When passing a number with leading zero to as an argument, JS will transform it into an octal
// octal literals and octal escape sequences are deprecated
// this throws error in strict mode because this is an invalid octal literal
// the error message "SyntaxError: Octal literals are not allowed in strict mode."

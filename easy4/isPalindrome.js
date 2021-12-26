// INPUT:
// string

// OUTPUT:
// true if string is palindrome
// false if string is NOT palindrome

// REQUIREMENTS:
// a palindrome reads the same forwards and backwards
// case matters and ALL characters matter

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// reverse string input and save to variable
// if reversed string doesn't strictly equal input, return false
// else return true

function isPalindrome(string) {
  let reverseString = string.split("").reverse().join("");
  return reverseString === string;
}

isPalindrome("madam"); // true
isPalindrome("Madam"); // false (case matters)
isPalindrome("madam i'm adam"); // false (all characters matter including ')
isPalindrome("356653"); // true

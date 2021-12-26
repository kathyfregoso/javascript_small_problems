/*
// UNDERSTANDING THE PROBLEM
- INPUTS: 
  1) string word 
  2) array of string words
- OUTPUT:
 - array of string words that are anagrams of the string word argument

// EXAMPLES/EDGE CASES:
example 1:
'listen', ['enlists', 'google', 'inlets', 'banana'] => [ "inlets" ]

example 2: 'listen', ['enlist', 'google', 'inlets', 'banana'] => [ "enlist", "inlets" ]

// DATA STRUCTURE(S):
- arrays, strings

// ALGORITHM:
- filter list of words for those that're anagrams of the input word
 - each loop:
  - compare current candidate word to input word
  - determine if candidate is an anagram of input word (findAnagrams)

- helper function: findAnagrams
 - split words into arrays of letters
 - sort the arrays
 - join list of characters into a string
 - compare the two strings (same length with same values)

*/

function anagram(word, list) {
  return list.filter((currentWord) => findAnagrams(word, currentWord));
}

function findAnagrams(inputWord, comparisonWord) {
  let inputWordLetters = inputWord.split("").sort().join("");
  let comparisonWordLetters = comparisonWord.split("").sort().join("");

  return inputWordLetters === comparisonWordLetters;
}

// console.log(findAnagrams("listen", "inlets"));
console.log(anagram("listen", ["enlists", "google", "inlets", "banana"])); // [ "inlets" ]
console.log(anagram("listen", ["enlist", "google", "inlets", "banana"])); // [ "enlist", "inlets" ]

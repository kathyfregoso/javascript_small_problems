/*
// UNDERSTANDING THE PROBLEM
- INPUT: string of text (1+ words)
 - includes vowels
 - may or may not include spaces
- OUTPUT: monkey language string exs:
  "Ook", "Eek" (can be lowercase)
  - always ends with period '.'
  - 1-3 ooks or eeks (either/or, not both?)
  - only 1st word in output capitalized

- RULES: 
 - can ook + eek be combined in monkey language?
 - something to do with vowels?
 - word count input === word count output

// EXAMPLES/EDGE CASES: 
input: "Mubashir Hassan" output: "Ook ook."
vowels: u, a, i  a, a
words: 2 in input, 2 in output

input: "Hello" output: "Ook."
vowels: e, o

input: "Matt" output: "Ook."
vowels: a

input: "Everyone" output: "Eek."
vowels: E, e, o, e

input: "Edabit is Amazing" output: "Eek eek eek."
vowels: E, a, i   i   A, a, i

// DATA STRUCTURE(S): 

// ALGORITHM:
*/

console.log(monkeyTalk("Mubashir Hassan")); // "Ook ook."
// console.log(monkeyTalk("Hello")); // "Ook."
// console.log(monkeyTalk("Matt")); // "Ook."
// console.log(monkeyTalk("Everyone")); // "Eek."
// console.log(monkeyTalk("Edabit is Amazing")); // "Eek eek eek."

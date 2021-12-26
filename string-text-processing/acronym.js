/*
// UNDERSTANDING THE PROBLEM
- INPUT: string of words
- OUTPUT: acronym from string of words 
- RULES:
 - count strings separated with - as separate words

// EXAMPLES/EDGE CASES:
"Hyper-text Markup Language" => HTML
 - compound word: Hyper-text => HT
  - Capitalize 't'

// DATA STRUCTURE(S): strings, array

// ALGORITHM:
- split string into array by spaces and dashes
- iterate through string
 - grab first letter of each word element and capitalize
 - push first letter to new string
- return new acronym string
*/

function acronym(string) {
  let strArray = string.split("-").join(" ").split(" ");
  return strArray.map((word) => word[0].toUpperCase()).join("");
}

console.log(acronym("Portable Network Graphics")); // "PNG"
console.log(acronym("First In, First Out")); // "FIFO"
console.log(acronym("PHP: HyperText Preprocessor")); // "PHP"
console.log(acronym("Complementary metal-oxide semiconductor")); // "CMOS"
console.log(acronym("Hyper-text Markup Language")); // "HTML"

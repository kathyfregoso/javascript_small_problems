/*
// UNDERSTANDING THE PROBLEM
- INPUT: string sentence
- OUTPUT: string with first char of every word capitalized (rest in word lowercase)
- RULES: assume a word is sequence of non-whitespace chars

// EXAMPLES/EDGE CASES: 
word that starts with non alpha char ("quoted") not capitalized

// DATA STRUCTURE(S): strings, arrays

// ALGORITHM:
- split string into array of words (delimiter is whitespace)
 - loop through array to transform each element
 - concat uppercase first letter with spliced end of word
- join transformed array to string (" ")
- return string of capitalized words
*/

function wordCap(string) {
  let strArr = string.split(" ");
  return strArr
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

console.log(wordCap("four score and seven")); // "Four Score And Seven"
console.log(wordCap("the javaScript language")); // "The Javascript Language"
console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'

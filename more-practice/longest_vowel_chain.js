/*
// UNDERSTANDING THE PROBLEM
- INPUT: string   
 - lowercase
 - alphabetic chars only
 - no spaces
- OUTPUT: length (number) of longest vowel substring 
- RULES: 
 - vowels: a, e, i, o, u

// EXAMPLES/EDGE CASES: 
'codewarriors' => o, e, a, io => longest length is 2

'supercalifragilisticexpialidocious' =>
u, e, a, i, a, i, i, i, e, ia, i, o, iou => 3

"xyzct" => 0

empty string input returns 0:
'' -> ''

'aeiou' => 5

// DATA STRUCTURE(S): 
strings
arrays?

// ALGORITHM:
- take the input string split by non-vowels (delimiter: consonants or non-vowels)
- this splits the string into an array of vowel substrings
- iterate through the array to find the length of longest substring
*/

function longestVowel(string) {
  let vowelSubstrings = string.split(/[^aeiou]/);
  let longest = "";

  vowelSubstrings.forEach((substring) => {
    if (substring.length > longest.length) {
      longest = substring;
    }
  });

  return longest.length;
}

console.log(longestVowel("")); // 0
console.log(longestVowel("xyzct")); // 0
console.log(longestVowel("aeiou")); // 5
console.log(longestVowel("codewarriors")); // 2
console.log(longestVowel("supercalifragilisticexpialidocious")); // 3

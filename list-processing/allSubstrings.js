// REQUIREMENTS:
// input: string
// output: array of all of the string's substrings
// - order by where in the string the substring begins
//  - all substrings that start at position 0 come first, then position 1, etc
// - multiple substrings occur at each position,
//    so return the substrings at a given position from shortest to longest
// - user the leadingSubtrings function

// QUESTIONS:
// is the input string only one word? are there white spaces?

// EXAMPLES/TEST CASES:
// 'abcde' =>
// [ "a", "ab", "abc", "abcd", "abcde",
// "b", "bc", "bcd", "bcde",
// "c", "cd", "cde",
// "d", "de",
// "e" ]

// 'Kathy' =>
// ['K', 'Ka', 'Kat', 'Kath', 'Kathy',
//  'a', 'at', 'ath', 'athy',
//  't', 'th', 'thy',
//  'h', 'y',
//  'y']

// DATA STRUCTURES:
// arrays, strings

// ALGORITHMS:
// initialize variable with empty array
// loop through the input str
// - start from index 0 all the way to the index in str
// - each iteration, slice the trailing substrings starting from current index
// - first loop the arg is the entire string, second loop removes the first char, etc..
// - pass the sliced copy of the word into the leadingSubstrings function
// - push the evaluated result of the leadingSubstrings function into the substrArr array
// flatten the array of substring arrays
// return the array of substrings

function substrings(str) {
  let substrArr = [];

  for (let i = 0; i < str.length; i++) {
    substrArr.push(leadingSubstrings(str.slice(i)));
  }

  console.log(substrArr.flat());
  return substrArr.flat();
}
substrings("abcde");
substrings("Kathy");

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

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

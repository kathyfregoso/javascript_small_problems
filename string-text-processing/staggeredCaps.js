// REQUIREMENTS:
// input: string

// output: string with staggered capitalization
// - starting with the first char, every other char should be capitalized
// and followerd by a lowercase or non-alpha char

// - non-alpha chars shouldn't change, but should be counted as chars that determine
// when to switch btw upper and lower case

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// declare a var and assign an empty string value to it
// loop through input string
// - char case dependent on the index of string
// - if index is even, change char case to uppercase and concat to the string output var
// - if idx is odd, change char case to lowercase and concat to the str output var
// - else, concat curr char to the output  str var
// return output str var with staggered caps

function staggeredCase(str) {
  let staggered = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      staggered += str[i].toUpperCase();
    } else if (i % 2 === 1) {
      staggered += str[i].toLowerCase();
    }
  }
  console.log(staggered);
  return staggered;
}

staggeredCase("I Love Launch School!"); // "I LoVe lAuNcH ScHoOl!"
staggeredCase("ALL_CAPS"); // "AlL_CaPs"
staggeredCase("ignore 77 the 4444 numbers"); // "IgNoRe 77 ThE 4444 nUmBeRs"

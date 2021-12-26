// REQUIREMENTS:
// input: string

// output: string with staggered capitalization
// - starting with the first char, every other char should be capitalized
// and followerd by a lowercase or non-alpha char

// - non-alpha chars shouldn't change (not counted)

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// rewrite staggeredCase function
// declare a var and assign an empty string value to it
// create variable that tracks status of alternating caps
// status always begins with the value of false
// loop through input string
// - if check if char is a-z and that status is false value, if it is:
// =>  uppercase, concat to output str
// - next index, check if char is a-z and that the status is a true value, if it is:
// => lowercase the letter, concat to output str
// - else, concat to output str
// return output str

// my solution
function staggeredCase(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let staggered = "";
  let status = false;

  for (let i = 0; i < str.length; i++) {
    if (status === false && alphabet.includes(str[i].toLowerCase())) {
      status = true;
      staggered += str[i].toUpperCase();
    } else if (status === true && alphabet.includes(str[i].toLowerCase())) {
      status = false;
      staggered += str[i].toLowerCase();
    } else {
      staggered += str[i];
    }
  }
  console.log(staggered);
  return staggered;
}

// alternate solution
// uses an array to iterate, rather than the string
function staggeredCase(string) {
  let needUpper = true;

  return string
    .split("")
    .map((char) => {
      char = char.toLowerCase();
      if (char >= "a" && char <= "z") {
        if (needUpper) {
          needUpper = false;
          return char.toUpperCase();
        } else {
          needUpper = true;
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

// further exploration:
// modify so the caller can determine whether non-alphabetic chars should be counted
// when determining upper/lowercase state
// you want a func. that can perform the same actions of this one, or that operates like prev version

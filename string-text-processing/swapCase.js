// REQUIREMENTS:
// input: string

// output: string with every lowercase letter changed to uppercase
// and every uppercase letter changed to lowercase

// all other chars are unchanged (don't by default)

// ALGORITHMS:
// declare variable with an empty string value ""
// loop through the input string
// - if the current char is lowercase, uppercase it, then concat to the output string variable
// - if the curr char is uppercase, lowercase it, then concat to the output string variable
// - else, concat the char to the string variable
// return the new string with swapped cases

function swapCase(str) {
  let swapped = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      swapped += str[i].toUpperCase();
    } else if (str[i] === str[i].toUpperCase()) {
      swapped += str[i].toLowerCase();
    }
  }
  console.log(swapped);
  return swapped;
}

swapCase("CamelCase"); // "cAMELcASE"
swapCase("Tonight on XYZ-TV"); // "tONIGHT ON xyz-tv"

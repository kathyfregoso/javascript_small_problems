// INPUT:
// a string that consists of some words and an assortment of non-alphabetic characters

// OUTPUT:
// returns a string with all of the non-alphabetic chars replaced by spaces

// REQUIREMENTS:
// if one or more non-alpha chars occur in a row, you should only have one space in the result
// the result string should never have consecutive spaces

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// make an array containing all the alphabetic letters
// loop through the string
// if the char is not contained in the alpha array, replace with a " "
// if multiple non-alpha chars in a row, replace with one white space!

function cleanUp(str) {
  let newStr = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i].toLowerCase())) {
      newStr += str[i];
    } else if (newStr[newStr.length - 1] !== " ") {
      newStr += " ";
    }
  }
  console.log(newStr);
}

cleanUp("---what's my +*& line?"); // " what s my line "

cleanUp("HALlo!!!!! 124 thAr");

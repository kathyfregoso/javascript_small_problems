// INPUT:
// string with zero or more space separated words

// OUTPUT:
// object that shows the num of words of diff sizes

// REQUIREMENTS:
// words consist of any sequence of non-space characters
// string length count EXCLUDES non-letters (ie ', !, .)

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
//arrays
// objects

// ALGORITHMS:
// write a helper function that removes non-letter characters from the input string
// - this function looks for letters a-z/A-Z and white spaces only
// - removes anything that is not a letter or white space

function removeNonLetters(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] >= "a" && string[i] <= "z" ||  || string[i] === " ") {
      result += string[i];
    }
  }
  return result;
}

function wordSizes(string) {
  let object = {};
  string = removeNonLetters(string.toLowerCase());
  let arrOfStrings = string.split(" ");

  for (let i = 0; i < arrOfStrings.length; i++) {
    let stringLength = arrOfStrings[i].length;
    if (stringLength === 0) {
      continue;
    }
    // uses bang prefix !
    if (!object[stringLength]) {
      object[stringLength] = 0; // if the property does not exist, set to 0
    }
    object[stringLength] += 1; // increment count for particular stringLength by 1
  }
  console.log(object);
  return object;
}

wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 2 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 3 }
wordSizes("What's up doc?"); // { "2": 1, "3": 1, "5": 1 }
wordSizes(""); // {}

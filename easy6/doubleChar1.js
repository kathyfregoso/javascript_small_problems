// INPUT: string

// OUTPUT: new string with every char doubled

// REQUIREMENTS:
// takes a string
// doubles every char in the string
// returns the result as a new string

// QUESTIONS:

// EXAMPLES/TEST CASES:
// 'Hello' => "HHeelllloo"
// 'Good job!' => "GGoooodd  jjoobb!!"
// '' => ''

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// split the input string into an array of characters
// LOOP THROUGH ARRAY OF CHARS:
// - each iteration, the current element is concatenated with itself
// outside the loop, join all the characters
// return the new string

// my solution
function repeater(str) {
  let newStr = str.split("");

  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i] + newStr[i];
  }

  return newStr.join("");
}

// alternative solution
function repeater(string) {
  let stringArray = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    stringArray.push(string[idx], string[idx]);
  }

  return stringArray.join("");
}

//no arrays
function repeater(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + str[i];
  }
  console.log(newStr);
}

repeater("Hello"); // "HHeelllloo"
repeater("Good job!"); // "GGoooodd  jjoobb!!"
repeater(""); // ""

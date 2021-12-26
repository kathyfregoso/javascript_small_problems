// INPUT:
// string with zero or more space separated words

// OUTPUT:
// object that shows the num of words of diff sizes

// REQUIREMENTS:
// words consist of any sequence of non-space characters

// QUESTIONS:

// EXAMPLES/TEST CASES:
// 'Four score and seven.' -> { "3": 1, "4": 1, "5": 1, "6": 1 }
// 'four' is 4 chars
// 'score' is 5 chars
// 'and' is 3 chars
// 'seven.' is 6 chars

// DATA STRUCTURES:
// arrays
// object

// ALGORITHMS:
// 1. have a variable hold an empty object literal
// 2. convert string input into an array delimited by white spaces
// 3. save the array into a variable
// 4. loop through the array
// 5. with the loop, have the object show the num of words of diff sizes - SUB PROCESS
// 6. return the object

// ALGO for STEP 5
// 1. find the length of each string element
// 2. give the object a property name equal to the length of the current string element
// 3. for every new property, give it a value of 1
// 4. upon encountering a string with a new length value, repeat steps 2-3
// 5. if an element contains a repeat length, add 1 to the appropriate key value
// 6. exit loop after the last element length is counted

function wordSizes(string) {
  let object = {};
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

wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
// wordSizes(""); // {}

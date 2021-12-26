// REQUIREMENTS:
// input: string

// output: object w/ three properties:
// 1. represents the num of chars in the string that are lowercase letters
// 2. represents the num of chars that are uppercase letters
// 3. represents the num of chars that are neither

// DATA STRUCTURES:
// strings, objects

// ALGORITHMS:
// declare a variable and assign the value of an empty object literal
// LOOP through input string (array of chars?):
// - if the char is 1) a letter AND 2) lowercase
//  - create a key 'lowercase' with the value of 1
//  - increment this property val everytime another char meets the reqs
// - if the char is 1) a letter AND 2) uppercase
//  - create a key 'uppercase' with the value of 1
//  - increment this property val everytime another char meets the reqs
// - if the char is NOT a letter:
//  - create a key called 'neither` and assign the value of 1
//  - increment this property val everytime another char meets the reqs
// - exit the loop after you count the last char
// return the new count object

function letterCaseCount(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let countObj = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let i = 0; i < str.length; i++) {
    if (alphabet.toUpperCase().split("").includes(str[i])) {
      countObj["uppercase"] += 1;
    } else if (alphabet.toLowerCase().split("").includes(str[i])) {
      countObj["lowercase"] += 1;
    } else {
      countObj["neither"] += 1;
    }
  }
  console.log(countObj);
  return countObj;
}

letterCaseCount("abCdef 123"); // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount("AbCd +Ef"); // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount("123"); // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount(""); // { lowercase: 0, uppercase: 0, neither: 0 }

/*
// UNDERSTANDING THE PROBLEM
- INPUT: array of strings
- OUTPUT: single letter
 - most frequent starting letter of names in list

- RULES: 
 - input always array (assumed)
 - array of strings
 - first letter is capital

// EXAMPLES/EDGE CASES:  see below

// DATA STRUCTURE(S): 
input is an array 
elements are strings
obj to hold count

// ALGORITHM:
1. get all the starting letters of each element (map)
 - slice idx 0,1
2. get a count of each unique letter (obj)
3. filter obj to get highest count letter (key name)
*/

let names = [
  "Heather",
  "Gisella",
  "Katsuki",
  "Hua",
  "Katy",
  "Kathleen",
  "Otakar",
];

let dogs = ["Buster", "Bella", "Kelly", "Sandy", "Belinda", "Hawkins"];

function startingLetters(list) {
  let letters = list.map((str) => str.slice(0, 1));
  let count = letters.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else if (acc[curr]) {
      acc[curr] += 1;
    }
    return acc;
  }, {});

  return Object.keys(count).reduce((letter) => {
    let highestCountLetter;
    let highestCount = 0;
    if (count[letter] > highestCount) {
      highestCount = count[letter];
      highestCountLetter = letter;
    }
    return highestCountLetter;
  });
}

console.log(startingLetters(names)); // H
console.log(startingLetters(dogs)); // D

let obj = {
  first: ["the", "quick"],
  second: ["brown", "fox"],
  third: ["jumped"],
  fourth: ["over", "the", "lazy", "dog"],
};

// gets all values of the object arrays
let newArr = Object.values(obj);
const VOWELS = "aeiou";

// loops through outer newArr array
newArr.forEach((arr) => {
  // loops through each array's word elements
  arr.forEach((word) => {
    // split called within cb to split each word to char array
    // then we loop through char array with forEach
    word.split("").forEach((char) => {
      // determines if curr char is a vowel
      if (VOWELS.includes(char)) {
        // logs vowel
        console.log(char);
      }
    });
  });
});

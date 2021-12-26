// REQUIREMENTS:
// input: array of integers between 0 and 19
// output: array of these integers sorted based on the english word for each number:
// zero, one, two, three, four, five, six, seven, eight, nine, ten
// eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
//

// QUESTIONS:

// EXAMPLES/TEST CASES:
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// =>
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// DATA STRUCTURES:
// strings and integers

// ALGORITHMS:
// create a new object with key of integer name in english, and value of the corresponding number
// do this for 20 total key-value pairs (0-19)
//  make an array of english words from the object keys
// transform the input array by transforming each element to the corresponding el in the array of words
// then that array of words is sorted
// then each word is transformed back to the number value of each english word
// - using bracket notation to access the value in the object's pair
// return the array of sorted integers

// return the new array of sorted integer values

// solution 1
let numbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
};

function alphabeticNumberSort(array) {
  let keys = Object.keys(numbers);

  return array
    .map((el) => keys[el])
    .sort()
    .map((el) => numbers[el]);
}

// // solution 2
let numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

function alphabeticNumberSort(arr) {
  arr.sort((a, b) => {
    if (numbers[a] > numbers[b]) {
      return 1;
    } else if (numbers[a] < numbers[b]) {
      return -1;
    } else {
      return 0;
    }
  });
  console.log(arr);
}

// // solution 3

function alphabeticNumberSort(array) {
  return array
    .map((num) => numbers[num]) // transforms each input arr's els to english word
    .sort() // alphabetizes/sorts the array of words
    .map((eng) => numbers.indexOf(eng)); // transforms each word el to the index of words in the original array of words
}

alphabeticNumberSort([
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

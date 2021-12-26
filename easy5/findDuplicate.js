// INPUT: unordered array

// OUTPUT: duplicate value in input array

// REQUIREMENTS:
// exactly one value in input array occurs twice
// - every other value occurs exactly once
// find and return which value occurs twice

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// arrays

// ALGORITHMS:
// 1. filter through input array
// 2. identify duplicate number
// 3. return duplicate number

// my first solution
function findDup(array) {
  let duplicate = array.filter((el, i) => array.indexOf(el) !== i);
  console.log(duplicate[0]);
}

// // manual looping
// function findDup(array) {
//   let element;
//   for (let index = 0; index < array.length; index++) {
//     element = array[index]; // the value of element changes to current el on each iteration
//     if (array.includes(element, index + 1)) break; // starts searching at the index after current
//   }
//   return element;
// }

// another solution
// function findDup(array) {
//   for (idx = 0; idx < array.length; idx += 1) {
//     if (array.indexOf(array[idx]) !== array.lastIndexOf(array[idx])) {
//       return array[idx];
//     }
//   }
// }

findDup([1, 5, 3, 1]); // 1
findDup([
  18,
  9,
  36,
  96,
  31,
  19,
  54,
  75,
  42,
  15,
  38,
  25,
  97,
  92,
  46,
  69,
  91,
  59,
  53,
  27,
  14,
  61,
  90,
  81,
  8,
  63,
  95,
  99,
  30,
  65,
  78,
  76,
  48,
  16,
  93,
  77,
  52,
  49,
  37,
  29,
  89,
  10,
  84,
  1,
  47,
  68,
  12,
  33,
  86,
  60,
  41,
  44,
  83,
  35,
  94,
  73,
  98,
  3,
  64,
  82,
  55,
  79,
  80,
  21,
  39,
  72,
  13,
  50,
  6,
  70,
  85,
  87,
  51,
  17,
  66,
  20,
  28,
  26,
  2,
  22,
  40,
  23,
  71,
  62,
  73,
  32,
  43,
  24,
  4,
  56,
  7,
  34,
  57,
  74,
  45,
  11,
  88,
  67,
  5,
  58,
]); // 73

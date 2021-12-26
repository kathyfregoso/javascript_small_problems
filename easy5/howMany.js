// INPUT: array

// OUTPUT: console output of each element and the num of times it occurs

// REQUIREMENTS:
// - case sensitive
// - count num of times each element appears
// - output a string and count for each element

// QUESTIONS:

// EXAMPLES/TEST CASES:
// ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'] =>
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

// DATA STRUCTURES:
// string, array, number

// ALGORITHMS:
// initialize variable with empty object
// LOOP
// - loop through the input array
// - each loop, lowercase the array element
// - if object does not contain that property, create a new property key (el name) with a value of 1
// - if object contains that property, add 1 to the value
// - repeat the above steps until the end of the array
// LOOP THROUGH OBJECT
// - loop through each property in the object
// - each iteration, log prop => value

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "motorcycle",
  "car",
  "truck",
  "suv",
];

// my solution
function countOccurrences(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (Object.keys(obj).includes(arr[i])) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let prop in obj) {
    console.log(`${prop} => ${obj[prop]}`);
  }
}

// alternative solution
function countOccurrences(elements) {
  let occurrences = {};

  for (let idx = 0; idx < elements.length; idx += 1) {
    occurrences[elements[idx]] = occurrences[elements[idx]] || 0;
    occurrences[elements[idx]] += 1;
  }

  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  for (let item in occurrences) {
    console.log(item + " => " + String(occurrences[item]));
  }
}

countOccurrences(vehicles);

// INPUT: array of numbers

// OUTPUT: array with same number of els, with each el value being running total from input

// REQUIREMENTS:
// returns an array with the same number of elements,
// with each element's value being the running total from the original array.
// the first element of return array is always the same as the input array's first element

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// arrays
// [i, i + 1, i + 2] -> [total = arr[i], total = total + arr[i+1], total = total + arr[i + 2]]
// [2, 5, 13] -> [total = 2, total = total + 5, total = total + 13]
// [14, 11, 7, 15, 20] -> [total = 14, total += 11, total += 7, total += 15, total += 20]
// [3] -> [3]
// [] -> []

// ALGORITHMS:
// initialize total variable that holds value of 0
// assign an empty array literal to a variable
// loop through the input array
// add the current value to total variable
// push the latest value of total variable to the output array
// return the output array

function runningTotal(arr) {
  let outputArr = [];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    outputArr.push(total);
  }
  return outputArr;
}

// with map method

function runningTotal(arr) {
  let sum = 0;
  let sumArr = arr.map((num) => {
    sum += num;
    return sum;
  });
  console.log(sumArr);
  return sumArr;
}

runningTotal([2, 5, 13]); // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]); // [14, 25, 32, 47, 67]
runningTotal([3]); // [3]
runningTotal([]); // []

// further exploration

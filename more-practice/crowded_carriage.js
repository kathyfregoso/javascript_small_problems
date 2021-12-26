/*
// UNDERSTANDING THE PROBLEM
- INPUT:
 - number (n) aka max train capacity overall
 - array of numbers
- OUTPUT: idx (num) of 1st carriage holding 50% or less of its max capacity 
  - return -1 if no carriage is empty enough
- RULES: 
 - each carriage shares equal proportion of max capacity ex: if n = 200, array.length = 5, 200/5 = 40 per carriage
 - All carriage nums are positive integers that divide evenly.

// EXAMPLES/EDGE CASES: 
n = 200, carriages = [35, 23, 18, 10, 40]
// There are 5 carriages which each have a max capacity of 40 (200 / 5 = 40).
// Index 0's carriage is too full (35 is 87.5% of the maximum).
// Index 1's carriage is too full (23 is 57.5% of the maximum).
// Index 2's carriage is good enough (18 is 45% of the maximum).
// Return 2.

// DATA STRUCTURE(S): 
- numbers for calculating
- array for iteration

// ALGORITHM:
1. get max capacity of each carriage => 
  maxTrainCapacity / carriage.length === maxCarriageCapacity
2.  iterate through array of carriages to check each integer el (curr num of passengers)
 - if passengerNumber <= maxCarriageCapacity / 2, return that index number
3. if no carriage is at 50% or less of its capacity, return -1
*/

function findASeat(maxTrainCapacity, carriages) {
  let maxCarriageCapacity = maxTrainCapacity / carriages.length;
  let output = -1;

  for (let idx = 0; idx < carriages.length; idx += 1) {
    let passengerNumber = carriages[idx];
    if (passengerNumber <= maxCarriageCapacity / 2) {
      output = idx;
      break;
    }
  }
  return output;
}

console.log(findASeat(200, [35, 23, 18, 10, 40])); // 2
console.log(findASeat(20, [3, 5, 4, 2])); // 3
console.log(findASeat(1000, [50, 20, 80, 90, 100, 60, 30, 50, 80, 60])); // 0
console.log(findASeat(200, [35, 23, 40, 21, 38])); // -1

// REQUIREMENTS:
// input: Array
// output: reversed Array (mutated)
// do not use reverse()

// QUESTIONS:

// EXAMPLES/TEST CASES:
// single length arrays or empty arrays are returned as is

// DATA STRUCTURES:
// arrays

// ALGORITHMS:
// loop through the input array and reverse it through mutation
// first loop: first element is switched with the last element
// second loop: second element is switched with the second to last element
// terminate loop when you reach the middle of the array (middle = divide length of the arr by 2)
// - if you didn't stop in the middle, we would end up rebuilding the original array
// if array length 1 or less:
// - return array as is
// return mutated array

// my solution
function reverse(list) {
  for (let i = 0; i < list.length / 2; i++) {
    let switchVar = list[i]; // resets to next element every loop

    if (list.length > 1) {
      list[i] = list[list.length - 1 - i];
      list[list.length - 1 - i] = switchVar;
    }
  }
  console.log(list);
  return list;
}

// alternative solution
function reverse(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < array.length / 2) {
    [array[leftIndex], array[rightIndex]] = [
      array[rightIndex],
      array[leftIndex],
    ];
    leftIndex += 1;
    rightIndex -= 1;
  }
  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

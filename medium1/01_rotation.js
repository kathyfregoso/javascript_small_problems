// REQUIREMENTS:
// input: array

// output: new rotated array that moves the first element to the end of the array

// - do not mutate the original array
// - if not array, return undefined
// - if input is empty array, return []

// QUESTIONS:

// EXAMPLES/TEST CASES:
// [7, 3, 5, 2, 9, 1] => [3, 5, 2, 9, 1, 7]
// ["a", "b", "c"] => ["b", "c", "a"]
// ["a"] => ["a"]
// [1, "a", 3, "c"] => ["a", 3, "c", 1]
// [{ a: 2 }, [1, 2], 3] => [[1, 2], 3, { a: 2 }]
// [] => []
// {} => undefined
// 1 => undefined
// no arg provided => undefined

// DATA STRUCTURES:
// arrays/objects (nested and not nested), numbers, strings

// ALGORITHMS:
// check that input is an array, if not, return undefined
// if the arg is an array, copy the array and assign the reference to a variable
// remove the first element of the aarray copy
// then in that same copy, push it to the end of the array
// return the rotated array

function rotateArray(arr) {
  let output;
  if (!Array.isArray(arr)) {
    output = undefined;
  } else if (arr.length < 1) {
    output = [];
  } else if (Array.isArray(arr)) {
    output = [...arr];
    let first = output.splice(0, 1)[0];
    output.push(first);
  }
  console.log(output);
  return output;
}

rotateArray([7, 3, 5, 2, 9, 1]); // [3, 5, 2, 9, 1, 7]
rotateArray(["a", "b", "c"]); // ["b", "c", "a"]
rotateArray(["a"]); // ["a"]
rotateArray([1, "a", 3, "c"]); // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]); // [[1, 2], 3, { a: 2 }]
rotateArray([]); // []

// return `undefined` if the argument is not an array
rotateArray(); // undefined
rotateArray(1); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array); // [2, 3, 4, 1]
array; // [1, 2, 3, 4]

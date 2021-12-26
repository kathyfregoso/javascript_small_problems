// TEMPLATE

// REQUIREMENTS:
// input: two arrays (list of numbers)
// output:
// - new array containing the products of all combinations of number pairs btw 2 arrays
// - sorted in ascending numerical order

// assume neither arg will be an empty array

// EXAMPLES/TEST CASES:
// [2,4], [4,3,1,2] => [2, 4, 4, 6, 8, 8, 12, 16]
// 2 X 1
// 2 X 2
// 4 x 1
// 2 x 3
// 4 x 2
// 2 x 4
// 4 x 3
// 4 x 4

// DATA STRUCTURES:
// arrays, integers

// ALGORITHMS:
// initialize variable with a reference to an empty array
// loop through the first array
// - multiply the first element by all the elements in the second array
// - save each product in the empty array
// - then multiply the second element by all els in the second array
// ... and repeat the above steps until you reach the end of the first array
// sort the new array of products (ascending)
// return the new array of products

// my solution
function multiplyAllPairs(arr1, arr2) {
  let products = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      products.push(arr1[i] * arr2[j]);
    }
  }
  console.log(products.sort((a, b) => a - b));
  return products.sort((a, b) => a - b);
}

// with forEach
function multiplyAllPairs(array1, array2) {
  let products = [];
  array1.forEach((item1) => {
    array2.forEach((item2) => {
      products.push(item1 * item2);
    });
  });
  return products.sort((item1, item2) => item1 - item2);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]); // [2, 4, 4, 6, 8, 8, 12, 16]

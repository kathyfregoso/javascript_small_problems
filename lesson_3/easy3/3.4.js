let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice(); // makes a shallow copy of arr1
arr2[0].first = 42; // mutates first obj element of arr1 + arr2 => { first: 42 }
console.log(arr1); // logs [{ first: 42 }, { second: "value2" }, 3, 4, 5]

// on L2, the slice method made only a SHALLOW copy (not a deep copy) of arr1
// arr1[0] and arr2[0] point to the same object, { first: "value1" }
// when replacing the val of first in that object in arr2, it changes arr1 too

// For object references (and not the actual object),
// slice copies object references into the new array.
// The copy maintains references to the original array.
// Meaning both the original and new array refer to the same object.
// If a referenced object changes, the changes are visible to both the new and original arrays.

// for strings, numbers and booleans, slice copies the values into the new array
// changes to the string, number or boolean in one array do not affect the other array!!!

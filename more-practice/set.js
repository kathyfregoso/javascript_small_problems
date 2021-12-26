/*
// UNDERSTANDING THE PROBLEM
- INPUT: array of object elements (representing a set)
  - each card represented by object (keys/values)
- OUTPUT: 
 - true: 3 cards make a valid 'set'
 - false: 3 cards are invalid 'set'

- RULES: 
 - determine if three cards make a valid 'set'
 - game Set rules:
  - 3 cards === set IF:
   - all 3 cards have at least 1 identical property (out of 4) OR
    1. same color
    2. same number
    3. same shade
    4. same shape
   - if any of the 4 properties differ across cards, they must all be UNIQUE:
      1. diff colors
      2. diff numbers
      3. diff shades
      4. diff shapes
  - 4 properties are:
    - colors: red, purple, green
    - numbers: 1, 2, 3
    - shades: empty, lined, full
    - shapes: squiggle, oval, diamond

// EXAMPLES/EDGE CASES: see below

// DATA STRUCTURE(S): 
input: array 
 - object elements
output: boolean 

// ALGORITHM:
1. craete array of subarrays to represent 4 properties
 - each subarray is a property
2. iterate thru input array of objects
 - push color prop to color array
 - push number prop to number array
 - push shade prop to shade array
 - push shape prop to shape array
3. iterate through arr of subarrays:
 - check that every subarry has either
  - completely unique elements
  - completely identical elements
4. if all subarrays true, return true, else false
*/

function isSet(cardsArray) {
  let properties = [[], [], [], []];

  cardsArray.forEach((card) => {
    properties[0].push(card["color"]);
    properties[1].push(card["number"]);
    properties[2].push(card["shade"]);
    properties[3].push(card["shape"]);
  });

  return properties.every((prop) => {
    return propsIdentical(prop) || propsDistinct(prop);
  });
}

function propsIdentical(property) {
  return property.every((prop, _, arr) => prop === arr[0]);
}

function propsDistinct(property) {
  return property.every((prop, idx, arr) => arr.indexOf(prop) === idx);
}

// "Same" properties: color
// "Different" properties: numbers, shading and shapes
console.log(
  isSet([
    { color: "red", number: 1, shade: "empty", shape: "squiggle" },
    { color: "red", number: 2, shade: "lined", shape: "diamond" },
    { color: "red", number: 3, shade: "full", shape: "oval" },
  ])
);
// true

// "Same" properties: shade, shape
// "Different" properties: numbers, colors
console.log(
  isSet([
    { color: "red", number: 3, shade: "empty", shape: "diamond" },
    { color: "purple", number: 1, shade: "empty", shape: "diamond" },
    { color: "green", number: 2, shade: "empty", shape: "diamond" },
  ])
);
// // true

// fails because the colors properties are not all identical
// OR unique (2 are purple, 1 is green)
console.log(
  isSet([
    { color: "purple", number: 3, shade: "lined", shape: "oval" },
    { color: "purple", number: 1, shade: "empty", shape: "oval" },
    { color: "green", number: 2, shade: "full", shape: "oval" },
  ])
);
// // false

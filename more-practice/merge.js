/*
// UNDERSTANDING THE PROBLEM
- INPUT: 2+ objects
- OUTPUT: new object (combined input objects)
 - input objects combined so values of matching key
 strings names/props are added together 

- RULES: 
 - don't mutate OG input object
 - assume all key values are integers
 - if input is empty obj, return empty obj 
 - non-like keys are simply included in output array, no changed value
// EXAMPLES/EDGE CASES: see below

// DATA STRUCTURE(S): 
- objects as input:
 - string keys
 - integer values

// ALGORITHM:
goal: build new object with combined properties (sum if same key name)
1. declare variable and assign value of first object and second object combined (Object.assign({}, obj1, obj2))
2. using this method, properties from obj1 will overwrite prop vals from obj2, so you have to grab keys with same string name
 from obj2 and sum them with smae props in new obj
3. determine what keys in output object match with names in input obj2
 - iterate thru new output object
 - for every prop, check if that key matches with key in obj2
 - if it does, add the value of obj2.prop with output.prop 
4. return new object
*/

function combine(obj1, obj2) {
  let output = Object.assign({}, obj1, obj2); // obj2 overwrites obj1
  let arrObj1 = Object.keys(obj1);
  let arrObj2 = Object.keys(obj2);

  for (let prop in output) {
    if (arrObj1.includes(prop) && arrObj2.includes(prop)) {
      output[prop] += obj1[prop];
    }
  }
  return output;
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
console.log(combine(objA, objB));
// Returns { a: 13, b: 20, c: 36, d: 3 }

console.log(combine({}, {})); // {}

console.log(combine({ name: "Tyler" }, {}));
// {'name': 'Tyler'}

const objC = { 1: 4, 2: 2, 3: 12 };
const objD = { 2: 2, 3: 5, 6: 1 };
console.log(combine(objC, objD));
// Returns { 1: 4, 2: 4, 3: 17, 6: 1 }

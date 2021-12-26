/*
// UNDERSTANDING THE PROBLEM
- INPUT: object with objects as property values
 - each sub object has these key values:
  - the key value names start at 0 and go up in numeric
   consecutive order
  - age (num), name (str), marks (3 digit string)
- OUTPUT: filtered object
 - output obj has only props where the object.marks
  value is unduplicated/not repeated
  - if duplicated marks val, remove the 2nd sub obj
 - sub objects with duplicate object.marks values 
  are removed
 - if all sub obj marks are the same, return only 
 person sub obj(s) with highest age value 
- RULES: 
 - when an object is removed, this affects the key/prop 
  name of all other sub-objects UNLESS only the last 
  sub object was removed
 - change remaining object key str names to remove gaps,
  output names should read '0', '1', '2', '3'...

// EXAMPLES/EDGE CASES: 
{
  0: { age: 18, name: "john", marks: "400" }, 
  1: { age: 17, name: "julie", marks: "400" }, -- removed
  2: { age: 16, name: "Robin", marks: "200" }, 
  -- key val updated from 2 -> 1
  3: { age: 16, name: "Bella", marks: "300" },
  -- key val updated from 3 -> 2
}
===> filtered object ===>
{
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 16, name: "Robin", marks: "200" },
  "2": { age: 16, name: "Bella", marks: "300" }
}

EXAMPLE 2:
{
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 17, name: 'julie', marks: '400'},--removed
  2: {age: 16, name: 'Robin', marks: '200'},
  -- key val changed from 2 -> 1
  3: {age: 16, name: 'Bella', marks: '300'},
  -- key val changed from 3 -> 2
  4: {age: 16, name: 'john', marks: '250'},
  -- key val changed from 4 -> 3
  5: {age: 15, name: 'julie', marks: '250'}--removed
}
===> filtered object ===>
{
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 16, name: 'Robin', marks: '200'},
  2: {age: 16, name: 'Bella', marks: '300'},
  3: {age: 16, name: 'john', marks: '250'}
}

// DATA STRUCTURE(S): 
- input is object with subobject key values
 - mix of num and string values
 - filter object, update key names, remove duplicates,
  compare subobject values

- maybe involve arrays for easier iteration? use of 
functional abstractions?
 - use Object.keys or Object.values
 - iterate with array method 

// ALGORITHM:
1. turn input object into array of objects
2. use Object.values to get array of objects
3. filter arr of objects - remove duplicates (2nd 
  instance)
4. check the length of filtered array, if the length
 equals the number of properties that exist in input property
 , then no duplicates were found
5. if no duplicates found, return array with highest 
 age key value
5. turn filtered object into new object with indexes
as prop/key names using Object.assign
6. return new object
*/

function getObject(obj) {
  let marks = [];
  let outputObj = Object.values(obj).filter((subObject) => {
    let marksVal = subObject.marks;

    if (!marks.includes(marksVal)) {
      marks.push(marksVal);
      return subObject;
    }
  });

  return Object.keys(obj).length !== outputObj.length
    ? Object.assign({}, outputObj)
    : findEldest(obj);
}

function findEldest(obj) {
  let currEldest = 0;
  let output = [];
  Object.values(obj).forEach((subObject) => {
    if (subObject.age >= currEldest) {
      currEldest = subObject.age;
      output.push(subObject);
    }
  });

  return output;
}

// console.log(
//   getObject({
//     0: { age: 18, name: "john", marks: "400" },
//     1: { age: 17, name: "julie", marks: "400" },
//     2: { age: 16, name: "Robin", marks: "200" },
//     3: { age: 16, name: "Bella", marks: "300" },
//   })
// );
// // {
// //   "0": { age: 18, name: "john", marks: "400" },
// //   "1": { age: 16, name: "Robin", marks: "200" },
// //   "2": { age: 16, name: "Bella", marks: "300" }
// // }

// no duplicate marks
// console.log(
//   getObject({
//     0: { age: 18, name: "john", marks: "400" },
//     1: { age: 17, name: "julie", marks: "100" },
//     2: { age: 16, name: "Robin", marks: "200" },
//     3: { age: 16, name: "Bella", marks: "300" },
//   })
// );

console.log(
  getObject({
    0: { age: 18, name: "john", marks: "400" },
    1: { age: 17, name: "julie", marks: "400" },
    2: { age: 16, name: "Robin", marks: "200" },
    3: { age: 16, name: "Bella", marks: "300" },
    4: { age: 16, name: "john", marks: "250" },
    5: { age: 15, name: "julie", marks: "250" },
  })
);
//  {
// 0: {age: 18, name: 'john', marks: '400'},
// 1: {age: 16, name: 'Robin', marks: '200'},
// 2: {age: 16, name: 'Bella', marks: '300'},
// 3: {age: 16, name: 'john', marks: '250'}
//}

/*
// UNDERSTANDING THE PROBLEM
- INPUT: array of objects
 - each object represents makeup item
 - properties: brand, name (string values)
- OUTPUT: simplified array of objects
   - combine duplicate items
   - add a count property 
QUESTIONS:
- will input have key/values that are equal but have 
  different char casing?
- will the output order of elements differ from input
 order of object elements? (no)

- RULES: 
 - TASK: simplify the input list

// EXAMPLES/EDGE CASES: 
example below:
- NARS brand count is 2, Urban Decay count is 1,
     Stila count is 3
  - combined objects with same properties and names

// DATA STRUCTURE(S): 
- nested array with object elements
 - filtering thru method abstractions
- working with string values and numbers for count

// ALGORITHM:
1. iterate thru input array and push every unique object to 
 new empty array
  - if item not in new array, add count prop w value of 1 
2. during iteration, if element is duplicate (exists in
  new arr already), do not push object, simply incr
  count by 1
3. once iteration is complete and new array is done,
return new array

*/

function simplifyList(array) {
  let output = [];
  let brands = [];

  array.forEach((obj) => {
    if (brands.includes(obj.brand)) {
      let itemIdx = output.findIndex((item) => item.brand === obj.brand);
      output[itemIdx].count += 1;
    } else if (!brands.includes(obj.brand)) {
      brands.push(obj.brand);
      obj.count = 1;
      output.push(obj);
    }
  });
  return output;
}

let makeupList = [
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
];

console.log(
  simplifyList([
    { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
    { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
    { brand: "Urban Decay", name: "Naked Honey Pallete" },
    { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
    { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
    { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  ])
);
//➞ [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
//   { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
// ]
// res = {NARS: "Cosmetics Voyageur Pallete"}

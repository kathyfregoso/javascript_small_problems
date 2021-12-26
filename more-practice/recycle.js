/*
// UNDERSTANDING THE PROBLEM
- INPUT: array of objects
 - object properties:
  - type (string description)
  - material: 'paper', 'glass', 'organic', 'plastic' (str)
  - secondMaterial (optional)
- OUTPUT: array of subarrays
 - each subarray represents recycling bin for materials
- RULES: 
 - GOAL: sort objects across 4 recycling bins according to their material (+ secondMaterial if present) by listing
 types of objects that should go into bins

 - bins in this order: paper, glass, organic, plastic
 - all bins (subarrays) in output, even if empty
 - if object has 2 materials, list obj in both bins (subarrays)
 - order of types in each bin (subarray) same as order in input

// EXAMPLES/EDGE CASES: see below

// DATA STRUCTURE(S): 
input: array of objects
 - iteration and accessing/extracting key values in objects
output: array of subarrays (bins): paper, glass, organic, plastic

// ALGORITHM:
PROBLEM 1: SORT ITEMS BY TYPE (main function)
1. declare 4 empty arrays and assign to variables paper, glass, organic, plastic
2.  iterate thru input object, on each loop:
 - PROBLEM 2: IDENTIFY MATERIAL TYPE 
 - input.material is paper, push to subarr at idx 0
 - ... if glass, push to subarr at idx 1
 - ... if organic, push to subarr at idx 2
 - ... if plastic, push to subarr at idx 3
 - ALSO check for secondMaterial, if present, push to appropriate 
3. return arr of subarrays
*/

function recycle(input) {
  let paper = [];
  let glass = [];
  let organic = [];
  let plastic = [];

  input.forEach((item) => {
    let material = item.material;
    let secondMaterial = item.secondMaterial;
    let currentItem = item.type;
    if (material === "paper" || secondMaterial === "paper") {
      paper.push(currentItem);
    }
    if (material === "glass" || secondMaterial === "glass") {
      glass.push(currentItem);
    }

    if (material === "organic" || secondMaterial === "organic") {
      organic.push(currentItem);
    }

    if (material === "plastic" || secondMaterial === "plastic") {
      plastic.push(currentItem);
    }
  });
  return Array(paper, glass, organic, plastic);
}

let input1 = [
  { type: "rotten apples", material: "organic" },
  {
    type: "out of date yogurt",
    material: "organic",
    secondMaterial: "plastic",
  },
  { type: "wine bottle", material: "glass", secondMaterial: "paper" },
  { type: "amazon box", material: "paper" },
  { type: "beer bottle", material: "glass", secondMaterial: "paper" },
];

console.log(recycle(input1));

// [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]

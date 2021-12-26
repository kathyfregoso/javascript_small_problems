/*
// UNDERSTANDING THE PROBLEM
- INPUT: array of objects
- OUTPUT: fixed array of objects
- RULES: process input band Array and return Array
 with fixed info
 - band countries === 'Canada'
 - band name has all words capitalized
 - all dots removed from band names

// EXAMPLES/EDGE CASES: 
 - capitalize letters
 - remove dots
 - change country to 'Canada'

// DATA STRUCTURE(S): 
- object elements
- array for iteration and transformation

// ALGORITHM:
- iterate thru input array to transform (map) it
 - for each element object (band):
  - change band.name str value to capitalize it
  - remove dots from band.name
  - change band.country to 'Canada'
- return transformed array
*/

let bands = [
  { name: "sunset rubdown", country: "UK", active: false },
  { name: "women", country: "Germany", active: false },
  { name: "a silver mt. zion", country: "Spain", active: true },
];

function processBands(data) {
  return data.map((band) => {
    band.name = band.name.split(".").join("");
    band.name = band.name
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
    band.country = "Canada";
    return band;
  });
}

console.log(processBands(bands));
// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]

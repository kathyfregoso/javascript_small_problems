/*
// UNDERSTANDING THE PROBLEM
- INPUT: array of objects
 - each object has properties for band name, country, and active boolean
- OUTPUT: processed array of objects with fixed property info
 - all the bands should have 'Canada' as the country
 - band name should have all words capitalized
 - Remove all dots from the band names

// EXAMPLES/EDGE CASES:
see below

// DATA STRUCTURE(S):
arrays, objects, strings, booleans

// ALGORITHM:
 - map the input array to transform the data for each band
  - for each object on each loop:
   - update the country
   - capitalize the band name
   - remove dots from band name
*/

const { array } = require("yargs");

let bands = [
  { name: "sunset rubdown", country: "UK", active: false },
  { name: "women", country: "Germany", active: false },
  { name: "a silver mt. zion", country: "Spain", active: true },
];

function processBands(data) {
  return data.map((band) => {
    updateCountry(band);
    capitalizeBandName(band);
    removeDots(band);
    return band;
  });
}

function updateCountry(band) {
  band["country"] = "Canada";
  return band;
}
// console.log(
//   updateCountry({ name: "sunset rubdown", country: "UK", active: false })
// );

function capitalize(array) {
  return array
    .split(" ")
    .map((word) => {
      let firstLetter = word[0];
      return firstLetter.toUpperCase() + word.slice(1, word.length);
    })
    .join(" ");
}

function capitalizeBandName(band) {
  band["name"] = capitalize(band["name"]);
  return band;
}

// console.log(
//   capitalizeBandName({ name: "sunset rubdown", country: "UK", active: false })
// );

function removeDots(band) {
  band["name"] = band["name"].replace(/\./g, "");
  return band;
}

// console.log(
//   removeDots({ name: "a silver mt. zion", country: "Spain", active: true })
// );

console.log(processBands(bands));

// should return:
// [
//   { name: "Sunset Rubdown", country: "Canada", active: false },
//   { name: "Women", country: "Canada", active: false },
//   { name: "A Silver Mt Zion", country: "Canada", active: true },
// ];

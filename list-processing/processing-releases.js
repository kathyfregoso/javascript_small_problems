/*
// UNDERSTANDING THE PROBLEM
- INPUT: array of objects with movie release data
- OUTPUT: array of objects with only:
  - the id and title key/val pairs
- RULES:
- write a function that processes movie release data 
- id and title (when existing) = integar > 0 (id) and non-empty string (title)
- Keep only releases that have both id and title property present.
- Keep only the id and title data for each release.

// EXAMPLES/EDGE CASES:
output example:
// [
//   { id: 70111470, title: "Die Hard" },
//   { id: 675465, title: "Fracture" },
// ];

// DATA STRUCTURE(S):
- nested objects with string, number, array properties
- arrays

// ALGORITHM:
- filter input array of objects:
 - remove elements that don't include id and/or title properties
- now that you have an array of objects which includes required id and title properties, 
 - transform each element into a new object with only id and title properties
*/

const { title } = require("process");

let newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

function processReleaseData(data) {
  return data
    .filter((movie) => movie.id && movie.title)
    .map((release) => {
      return {
        id: release.id,
        title: release.title,
      };
    });
}

console.log(processReleaseData(newReleases));

// should return:
// [
//   { id: 70111470, title: "Die Hard" },
//   { id: 675465, title: "Fracture" },
// ];

// INPUT: munsters object with family ages and names

// OUTPUT: total age of the male members of the family

// REQUIREMENTS:
// compute and display the sum (total) age of all male members of family

// QUESTIONS:

// EXAMPLES/TEST CASES:
// Herman = 32
// Grandpa = 402
// Eddie = 10
// 32 + 402 + 10 = 444

// DATA STRUCTURES:
// arrays, objects, numbers, strings

// ALGORITHMS:
// 1. access male family member properties
// 2. add male family member age property value to a new array
// 3. sum ages in the new array
// 4. use a loop to calculate the sum
// 4. return the total age of male members of family

let munsters = {
  // the values within outer objectt are also objects
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

// solution with for/in loop
let sumMaleAges = 0;
for (let prop in munsters) {
  if (munsters[prop]["gender"] === "male") {
    sumMaleAges += munsters[prop]["age"];
  }
}
console.log(sumMaleAges); // 444

// alternative solution w/ Object.values and forEach
let memberInfo = Object.values(munsters);
let sumMaleAges = 0;

memberInfo.forEach((member) => {
  if (member.gender === "male") {
    sumMaleAges += member.age;
  }
});
console.log(sumMaleAges);

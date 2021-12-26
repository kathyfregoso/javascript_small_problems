let munsters = {
  herman: { age: 32, gender: "male" },
  lily: { age: 30, gender: "female" },
  grandpa: { age: 402, gender: "male" },
  eddie: { age: 10, gender: "male" },
  marilyn: { age: 23, gender: "female" },
};

// output string substitution:
// (Name) is a (age)-year-old (male or female).

// my solution
let munstersInfo = Object.values(munsters);
let names = Object.keys(munsters);

for (let i = 0; i < munstersInfo.length; i++) {
  console.log(
    `${names[i]} is a ${munstersInfo[i].age}-year-old ${munstersInfo[i].gender}.`
  );
}

// LS solution with Object.entries
Object.entries(munsters).forEach((entry) => {
  let name = entry[0];
  let age = entry[1]["age"];
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});

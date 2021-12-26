let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach((familyMember) => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

console.log(messWithDemographics(munsters));

// yes, even though the body of the function does not contain the return keyword, it still
// changes the object argument
// the munsters object was passed as an arg to the demoObject parameter
// objects are passed by reference, and the demoObject param points to the munsters object arg
// demoObject is not reassigned (as it would with primitives), it is used as is
// thus the munsters object gets changed by the function

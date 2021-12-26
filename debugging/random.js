// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice(); // makes a copy of input array
  let randomElements = []; // output array

  //
  while (n > 0 && elements.length > 0) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements; // returns array
}

// Ingredients

let ingredients = [
  "rice",
  "green bell pepper",
  "mushrooms",
  "carrot",
  "kebab",
  "spinach",
  "soy bean sprouts",
  "mashed potatoes",
  "corn",
  "cucumber",
  "peas",
];

let spices = [
  "peri peri",
  "cinnamon",
  "nutmeg",
  "cardamom",
  "ground ginger",
  "poppy seed",
  "cumin",
];

let extras = ["peanuts", "sesame seeds", "egg", "wasabi", "soy sauce"];

// Name

let adjective = ["Delicious", "Hot", "Exotic", "Creative", "Festive", "Dark"];
let firstNoun = ["Power", "After Work", "Holiday", "Disco", "Late Night"];
let secondNoun = ["Mix", "Delight", "Bowl", "Chunk", "Surprise", "Bliss"];

// Generate!

// former code:
// random invocations always return an array
// so when you concatenate arrays with '+', they are already coerced to strings
// therefore, using join method on dish and dishName doesn't work because they are strings,
// not arrays, resulting in a typeerror

// let dishName = random(adjective) + random(firstNoun) + random(secondNoun);
// let dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);

// console.log("How about: " + dishName.join(" "));
// console.log("You need: " + dish.join(", "));

//fixed code:
// we use template literals to join the return values of the random function iterations as one string
//

let dishName = `${random(adjective)} ${random(firstNoun)} ${random(
  secondNoun
)}`;
let dish = `${random(ingredients, 3).join(", ")}, ${random(spices, 2).join(
  ", "
)}, ${random(extras, 1).join(", ")}`;

console.log("How about: " + dishName);
console.log("You need: " + dish);

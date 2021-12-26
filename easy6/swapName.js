// REQUIREMENTS:
// input: string of a first name, a space, and a last name
// output: new string with the last name, a comma, a space, and the first name

// QUESTIONS:

// EXAMPLES/TEST CASES:
// 'Joe Roberts' =>  "Roberts, Joe"

// DATA STRUCTURES:
// strings

// ALGORITHMS:
// find the white space in the input string
// use the white space as a distinguishing separator between the first name and last name
// - separate the chars to the left of the white space (first name)
// - separate the chars to the right of the white space (last name)
// in a new string, concatenate: last name + ', ' + first name
// return the new string

function swapName(name) {
  let space = name.indexOf(" ");
  let first = name.slice(0, space);
  let last = name.slice(space + 1);

  return last + ", " + first;
}

swapName("Joe Roberts"); // "Roberts, Joe"
swapName("Kathy Fregoso"); // 'Fregoso, Kathy'

// alt. solution:
function swapName(name) {
  return name.split(" ").reverse().join(", ");
}

// further exploration:
// what if person has one or more names?

function swapNames(name) {
  let spaces = [];

  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      spaces.push(i);
    }
  }

  let spaceBeforeLast = spaces[spaces.length - 1];
  let names = name.slice(0, spaceBeforeLast);
  let last = name.slice(spaceBeforeLast + 1);

  return last + ", " + names;
}

// alt further exploration solution:
function swapName(string) {
  let [lastName, ...givenNames] = string.split(" ").reverse();
  givenNames = givenNames.reverse().join(" ");

  return `${lastName}, ${givenNames}`;
}

swapNames("Karl Oskar Henriksson Ragvals"); // "Ragvals, Karl Oskar Henriksson"
swapNames("Kathleen Livier Fregoso Hernandez");

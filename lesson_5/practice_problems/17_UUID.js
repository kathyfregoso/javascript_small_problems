// REQUIREMENTS:
// input: none!
// output: outputs a UUID string value

// UUID:
// - type of identifier often used to uniquely identify items, even when created on diff. server or by diff. app
// - w/out synchonization, two or more comp. systems can create new items and label them w/ a UUID
// - no significant risk of stepping on each other's toes
// - done thru mass randomization
// - num of possible UUID values is 3.4 X 10E38 (massive)
// - chance of conflict is tiny w/ such a large num of possible values

// structure of UUID:
// - 32 hexadecimal chars (digits 0-9 and letters a-f) represented as a string
// - value broken into 5 sections
// - 8-4-4-4-12 pattern, e.g. 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'
// - must use form "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

// this function can generate up to approx. 3.4 X 10E38 UUID values

// QUESTIONS:
// can each section have any number of letters or digits?
// can each section have as little as 0 letters or digits? as many as the max that space allows?

// EXAMPLES/TEST CASES:
// 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'

// DATA STRUCTURES:
// string of random letters and digits, broken in 5 sections delimited by '-'
// 8 char-4 char-4 char-4 char-12 char

// ALGORITHMS:
// - create a collection that holds digits 0-9 and letters a-f
// - create collection of section lengths (8-4-4-4-12)
// - create empty string
// - loop through sections collection
// - set a random index variable that identifies a floord random num * char length
// - each iteration, empty string += a random index of the characters collection
// - if the section index is less than then section's last index
// - the empty string += a '-' character
// - return empty string

function generateUUID() {
  let chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  // represents the num of chars in each section
  let sections = [8, 4, 4, 4, 12];

  let uuid = "";
  sections.forEach((section, sectionIdx) => {
    for (let i = 0; i < section; i++) {
      let randomIdx = Math.floor(Math.random() * chars.length);
      uuid += chars[randomIdx];
    }

    if (sectionIdx < sections.length - 1) {
      uuid += "-";
    }
  });
  console.log(uuid);
  return uuid;
}

generateUUID();

// INPUTS:
// 'name'
// OR
// 'name!'

// OUTPUT:
// if input 'name': 'Hello name.'
// if input 'name!': 'HELLO NAME. WHY ARE WE SCREAMING?'

// EXPLICIT REQ'S:
// 2 possible inputs & 2 possible outputs

// IMPLICIT REQ'S/QUESTIONS:
// readline-sync

// EXAMPLES / TEST CASES:
// What is your name? Bob
// Hello Bob.

// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

// DATA STRUCTURES:
// strings

// ALGORITHM:
// ask for user name
// if ('name') return 'Hello name.'
// if ('name!') return 'HELLO NAME. WHY ARE WE SCREAMING?'

const readline = require("readline-sync");

console.log("What is your name?");
let username = readline.question();

if (username[username.length - 1] !== "!") {
  console.log("Hello " + username + ".");
} else if (username[username.length - 1] === "!") {
  username = username.slice(0, username.length - 1);
  console.log("HELLO " + username.toUpperCase() + ". WHY ARE WE SCREAMING?");
}

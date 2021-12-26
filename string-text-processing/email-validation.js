/*
// UNDERSTANDING THE PROBLEM
- INPUT: string email
 - local part: name of the mailbox; usually a username
 - domain part: domain name (e.g., gmail.com, yahoo.com.ph, etc); contains
  server name mail server name, top level domain (.com, .ph, etc)
- OUTPUT: boolean
 - true if valid
 - false if invalid
- RULES:
 - must be 1 @ sign
 - local part (before @) must:
  - contains 1+ letters (A-Z, a-z) AND/OR digits (0-9) ONLY
  - no non-alphanumeric chars (punctuation etc)
 - domain part (after @) must: 
  - contain 2+ components with 1 dot in between them
  - each component must have 1+ letters (A-Z, a-z only)
// EXAMPLES/EDGE CASES:
- see below
// DATA STRUCTURE(S):
 - strings
// ALGORITHM:
- iterate through input:
 - check that input string has 1 '@' sign
- split string into 2 parts:
 - local part (before @) 
 - domain part (after @)
- loop through local part:
 -  check that it contains 1+ letters (A-Z, a-z) AND/OR digits (0-9) ONLY
  - no non-alphanumeric chars (punctuation etc)
- loop through domain part:
 - check that it has exactly 1 dot
  - if no dot or more than 1 consecutive dot, return false
 - split string into componenets by dot
  - each component must be at least 1 char in length
  - each component must have 1+ letters (A-Z, a-z only)
*/

function isValidEmail(email) {
  return email.includes("@") && isValidLocal(email) && isValidDomain(email);
}

function isValidLocal(email) {
  let localPart = email.slice(0, email.indexOf("@"));
  let regex = new RegExp(/^[a-z0-9]+$/i);
  return regex.test(localPart);
}

function isValidDomain(email) {
  if (!email.includes(".")) return false;
  if (/(.)\1\1/.test(email)) return false;
  let domainParts = email
    .slice(email.indexOf("@") + 1)
    .split(".")
    .filter((component) => component.length >= 1);
  let regex = new RegExp(/^[a-zA-Z]*$/);

  return domainParts.every(
    (component) => regex.test(component) && domainParts.length > 1
  );
}

console.log(isValidEmail("Foo@baz.com.ph")); // returns true
console.log(isValidEmail("Foo@mx.baz.com.ph")); // returns true
console.log(isValidEmail("foo@baz.com")); // returns true
console.log(isValidEmail("foo@baz.ph")); // returns true
console.log(isValidEmail("HELLO123@baz")); // returns false
console.log(isValidEmail("foo.bar@baz.to")); // returns false
console.log(isValidEmail("foo@baz.")); // returns false
console.log(isValidEmail("foo_bat@baz")); // returns false
console.log(isValidEmail("foo@bar.a12")); // returns false
console.log(isValidEmail("foo_bar@baz.com")); // returns false
console.log(isValidEmail("foo@bar.....com")); // returns false

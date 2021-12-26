/*
// UNDERSTANDING THE PROBLEM
- INPUT: plaintext, key (# of positions away in alphabet)
- OUTPUT: ciphertext (encrypted text)
- RULES: encrypt plaintext for secure msg transmission
 - each letter in plaintext subsituted by letter located
  a given number of positions away in the alphabet
 - the ciphertext can be decoded with key value
 - only encrypts letters (both upper/lower) - others untouched
 - substituted letters have same letter case as OG letter
 - if key value for shifting > length of alphabet, wrap
  from the beginning

// EXAMPLES/EDGE CASES: 
'A', 0 => 'A'
'A', 3 => 'D'

wrap around:
'y', 5 => 'd'
'a', 47 => 'v'

all letters:
'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25 =>
"ZABCDEFGHIJKLMNOPQRSTUVWXY"

'The quick brown fox jumps over the lazy dog!', 5 =>
"Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

many non letters:
'There are, as you can see, many punctuations. Right?; Wrong?', 2 =>
"Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// DATA STRUCTURE(S): hold alphabet in string
 => indexes for positions?

// ALGORITHM:
- create two variables and assign uppercase and lowercase alphabets as string values
- split plaintext into list of chars and start iteration:
 - for each char, check whether it is:
  - uppercase alphabetic char using regex OR
  - lowercase alphabetic char w/ regex OR
      - use helper function to locate appropriate replacement letter - key positions away
      - everytime loop reaches the end of the alpha string, concat the string to itself
       to create the 'wrap around'/shift starting from the beginning during iteration
      - every iteration, the letter is reassigned to the current position from OG letter
  - a non-alphabetic character
   - in this case, no encryption necessary, simply concat to output string
 
*/

function caesarEncrypt(plaintext, key) {
  let upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
  let cipherText = "";

  plaintext.split("").forEach((char) => {
    if (/[A-Z]/g.test(char)) {
      cipherText += encrypt(char, key, upperAlpha);
    } else if (/[a-z]/g.test(char)) {
      cipherText += encrypt(char, key, lowerAlpha);
    } else {
      cipherText += char;
    }
  });
  return cipherText;
}

function encrypt(letter, key, alphaCase) {
  let originalLetterIdx = alphaCase.indexOf(letter);

  for (let paces = 1; paces <= key; paces += 1) {
    // when you reach the end of the alphabet (no letter after 'z/Z')
    // append alphabet to the end of itself to continue iteration
    // as if wrapping around the alphabet from the beginning starting at 'a/A'
    if (!alphaCase[originalLetterIdx + paces]) {
      alphaCase += alphaCase;
    }
    // reassign the letter value for every pace taken in the alphabet to the
    // right of the original idx location of the letter
    letter = alphaCase[originalLetterIdx + paces];
  }
  return letter;
}

// simple shift
// console.log(caesarEncrypt("A", 0)); // "A"
// console.log(caesarEncrypt("A", 3)); // "D"

// // wrap around
// console.log(caesarEncrypt("y", 5)); // "d"
// console.log(caesarEncrypt("a", 47)); // "v"

// // all letters
// console.log(caesarEncrypt("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 25));
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt("The quick brown fox jumps over the lazy dog!", 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(
  caesarEncrypt(
    "There are, as you can see, many punctuations. Right?; Wrong?",
    2
  )
);
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

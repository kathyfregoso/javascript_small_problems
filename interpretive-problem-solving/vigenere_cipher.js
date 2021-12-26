/*
// UNDERSTANDING THE PROBLEM
- INPUT: 
 - plaintext (sequence of chars)
 - keyword (sequence of chars - case irrelevant)
- OUTPUT:
 - ciphertext (sequence of chars)
  - same # of chars as plaintext
  - encrypted version of plaintext
- RULES: 
 - Vigenere Cipher:
  - series of Caesar Ciphers
   - each char of a keyword is a "shift" value
    - shift value === key used to encrypt plaintext letter
    - multiple key values (not just one like Caesar Cipher)
    - assume keyword only has letters (case implies letters) 
   - in order, apply shift values to each alpha char w. Caesar Cipher
    - each shift value used one at a time, over and over, for all
     alpha chars in ciphertext
    - shift value wraps around when there's a need to go past letter
     'z'/'Z'
    - wrapping continues for as long as there remain chars left in 
    plaintext to encrypt

// EXAMPLES/EDGE CASES: 
A = 0, B = 1, C = 2, D = 3, .... Y = 24, Z = 25

EX 1:
plaintext: Pineapples don't go on pizzas!
keyword: A 

Vigenere Cipher
plaintext: P i n e a p p l e s d o n t g o o n p i z z a s
A = 0
shift:     A A A A A A A A A A A A A A A A A A A A A A A A
ciphertext: P i n e a p p l e s d o n t g o o n p i z z a s

result: Pineapples don't go on pizzas!

EX 2 - case doesn't matter:
plaintext: Pineapples don't go on pizzas!
keyword: Aa

Vigenere Cipher
plaintext: Pi ne ap pl es do nt go on pi zz as
A = 0, a = 0
shift:     Aa Aa Aa Aa Aa Aa Aa Aa Aa Aa Aa Aa
ciphertext: Pi ne ap pl es do nt go on pi zz as

result: Pineapples don't go on pizzas!

EX 3:
plaintext: Pineapples don't go on pizzas!
keyword: cab

Vigenere Cipher
plaintext: Pin eap ple sdo ntg oon piz zas
c = 2, a = 0, b = 1
shift:     cab cab cab cab cab cab cab cab

Pin => Rio
P => 2 => R, i => 0 => i, n => 1 => o

eap => gaq
e => 2 => g, a => 0 => a, p => 1 => q
...
ciphertext: Rio gaq rlf udp pth qoo ria bat

result: Riogaqrlfu dpp't hq oo riabat!

EX 4 - keyword longer than plaintext: 
plaintext: Dog
keyword: Rabbit

Vigenere Cipher: shift letters only as long as the length of plaintext
plaintext: Dog
R = 17, a = 0, b = 1 
shift:     Rab
D => 17 => U, o => 0 => o, g => 1 => h
ciphertext: Uoh

result: Uoh

// DATA STRUCTURE(S): strings, arrays

// ALGORITHM:
- assign empty str to ciphertext var
- assign value of 0 to keyPosition variable
- capitalize/uppercase all of keyword input's letters
- loop over chars of plaintext:
 - if char is alpha, check if upper or lower, encrypt it, then
  concat to ciphertext
   - identify current keyword letter's location in alphabet
    and assign it to key var
   - identify current plaintext letter's location in alphabet
   - move rightwards key times from this letter position
   - if paces exceed last letter (z/Z) in alpha, concat 
    another copy of alphabet
   - once paces completed, concat encrypted letter to ciphertext
   - add 1 to keyPos and divide result by the length of keyword to
    get remainder. reassign value of keyPos to remainder
  - if char is not in alpha, concat to ciphertext (no changes)
- return ciphertext
*/

function vigenereCipher(plaintext, keyword) {
  let upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
  let cipherText = "";
  let keyPosition = 0;
  keyword = keyword.toUpperCase();
  let key;

  plaintext.split("").forEach((letter) => {
    if (/[A-Z]/g.test(letter)) {
      key = upperAlpha.indexOf(keyword[keyPosition]);
      cipherText += encrypt(letter, key, upperAlpha);
      keyPosition = (keyPosition + 1) % keyword.length;
    } else if (/[a-z]/g.test(letter)) {
      key = upperAlpha.indexOf(keyword[keyPosition]);
      cipherText += encrypt(letter, key, lowerAlpha);
      keyPosition = (keyPosition + 1) % keyword.length;
    } else {
      cipherText += letter;
    }
  });
  return cipherText;
}

function encrypt(letter, key, alphaCase) {
  let originalLetterIdx = alphaCase.indexOf(letter);

  for (let paces = 1; paces <= key; paces += 1) {
    if (!alphaCase[originalLetterIdx + paces]) {
      alphaCase += alphaCase;
    }

    letter = alphaCase[originalLetterIdx + paces];
  }
  return letter;
}

console.log(vigenereCipher(`Pineapples don't go on pizzas!`, "A"));
// `Pineapples don't go on pizzas!`
console.log(vigenereCipher(`Pineapples don't go on pizzas!`, "Aa"));
// `Pineapples don't go on pizzas!`

console.log(vigenereCipher(`Pineapples don't go on pizzas!`, "cab"));
// Riogaqrlfu dpp't hq oo riabat!

console.log(vigenereCipher(`Dog`, "Rabbit")); // Uoh

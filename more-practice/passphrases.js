/*
// UNDERSTANDING THE PROBLEM
- INPUT: string (all caps, may include digits and non-alpha letters), shift number
- OUTPUT: encrypted string (passphrase altered)

- RULES: 
1. shift each letter by a given number (2nd arg) but the transformed letter must be a letter (circular shift),
2. replace each digit by its complement to 9,
3. keep such as non alphabetic and non digit characters,
4. downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
5. reverse the whole result.

// EXAMPLES/EDGE CASES: 
example 1:
your text: "BORN IN 2015!", shift 1

steps 1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

// DATA STRUCTURE(S): 

// ALGORITHM:
*/

function playPass(passPhrase, shift) {}

console.log(playPass("BORN IN 2015!", 1)); // "!4897 Oj oSpC"
console.log(playPass("I LOVE YOU!!!", 1)); // "!!!vPz fWpM J"
console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2));
// "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"

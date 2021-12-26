/*
// UNDERSTANDING THE PROBLEM
- INPUT: version1, version2 (string version numbers)
 - appear like decimals
- OUTPUT: 
 - version1 > version2 returns 1
 - version2 > version1 returns -1
 - version1 === version2 returns 0
 - if chars other than 0-9 and ., return null

- RULES: compare 2 version numbers
 - result: show if first is <, =, > second number
 - legal version numbers:
 1
1.0
1.2
3.2.3
3.0.0
4.2.3.0

0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

// EXAMPLES/EDGE CASES: see below

// DATA STRUCTURE(S): 
inputs are strings
if possible, convert input strings to numbers using Number(), and then compare
otherwise iterate to convert version numbers to arrays

// ALGORITHM:
1. check if version1 and version2 are valid version number strings (return null if they dont):
 - contain only 0-9 and .
 - start and end with digits
 - '.' do not repeat in row of 2 or more

2. if inputs are valid, see if strings can be converted to number with Number()
 - if not NaN, do comparison btw numbers and return result

3. so if numbers can't be converted to number with function:
 - find length of longest version number
 - if shorter version number exists, fill with .0 until length corresponds with longer number
 - split both strings into array of numbers (delim is .)
 - convert digits to numbers

4. iterate through v1 and compare digit by digit
 - any any number in v1 > equivalent piece in v2, return 1
 - if any piece in v2 > equivalent piece in v1, return -1
 - if all pieces equal, return 0
*/

function compareVersions(version1, version2) {
  if (containsNonDigits(version1) || containsNonDigits(version2)) return null;
  if (startsOrEndsWithNonDigit(version1) || startsOrEndsWithNonDigit(version2))
    return null;
  if (consecutiveDots(version1) || consecutiveDots(version2)) return null;

  if (Number(version1) && Number(version2)) {
    return numberComparison(version1, version2);
  }
  let v1Arr = version1.split(".");
  let v2Arr = version2.split(".");
  if (v1Arr.length !== 4) {
    let diff = 4 - v1Arr.length;
    v1Arr = [...v1Arr, ...Array(diff).fill("0")];
  }

  if (v2Arr.length !== 4) {
    let diff = 4 - v2Arr.length;
    v2Arr = [...v2Arr, ...Array(diff).fill("0")];
  }
  let output = 0;

  v1Arr.forEach((piece, idx) => {
    piece = piece;
    if (piece > v2Arr[idx]) {
      output = 1;
    }

    if (piece < v2Arr[idx]) {
      output = -1;
    }
  });
  return output;
}

function numberComparison(version1, version2) {
  let v1Num = Number(version1);
  let v2Num = Number(version2);
  let bigger = Math.max(v1Num, v2Num);

  if (v1Num === v2Num) {
    return 0;
  } else {
    return bigger === v1Num ? 1 : -1;
  }
}

function containsNonDigits(versionNumber) {
  return /[a-z]/gi.test(versionNumber);
}

function startsOrEndsWithNonDigit(versionNumber) {
  let start = versionNumber.slice(0, 1);
  let end = versionNumber[versionNumber.length - 1];

  return /[^0-9]/gi.test(start) || /[^0-9]/gi.test(end);
}

function consecutiveDots(versionNumber) {
  return versionNumber.split(/[0-9]/gi).some((dot) => dot.length > 1);
}

// non decimal equality
console.log(compareVersions("1", "1")); // 0

// // v1 > v2
console.log(compareVersions("1.1", "1.0")); // 1
// // ends with non-digit 'a'
console.log(compareVersions("1.a", "1")); // null

// starts with non-digit '.'
console.log(compareVersions(".1", "1")); // null

// // ends with non-digit '.'
console.log(compareVersions("1.", "2")); // null

// // 2 consecutive '.' returns null
console.log(compareVersions("1..0", "2.0")); // null

// v2 > v1
console.log(compareVersions("2.3.4", "2.3.5")); // -1

// // // v1 and v2 are equal despite different version number lengths
console.log(compareVersions("1.0", "1.0.0")); // 0

// // // v2 > v1 (different lengths)
console.log(compareVersions("1.0.0", "1.1")); // -1
console.log(compareVersions("1.0", "1.0.5")); // -1

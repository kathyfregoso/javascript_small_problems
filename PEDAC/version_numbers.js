/*
// UNDERSTANDING THE PROBLEM
- INPUT: version1, version2 (numbers)
- OUTPUT: integer (1, -1 or 0) OR null
 - if version1 > version2, return 1
 - if version1 < version2, return -1
 - if version1 === version2, return 0
 - if either contains non-digit chars and chars other than . return null
- RULES: compares software version numbers
- version numbers part of number system
- legal version numbers:
1
1.0
1.2
3.2.3
3.0.0
4.2.3.0

// EXAMPLES/EDGE CASES: 
0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

1.2 === 1.2.0.0
1 === 1.0
1.1 < 1.2
1.1 < 1.2.0.0
1.2 < 1.18.2 
1.2.0.0 < 1.18.2
1.18.2 < 13.37.00

other examples:
"8.1" > "2.3.4.5" (1)
0,1,a 1.1.1 (null)

// DATA STRUCTURE(S): strings, numbers
- split input string into array

// ALGORITHM:
- check both input strings:
 - if string has non-numeric charactes OR non '.' chars, return null
 - if string has more than 1 '.' in a row, return null
- check length of string
 - if length < 4, repeatedly concat '.0' as many times equal === 4 - current length
- all input versions should now be the same length
- split into array of digits, delimiter '.'
- iterate through array to transform each digit element into a number 
- now iterate through version1 and compare each element with the corresp element on version2
 - if version1 index 0 > version2 index 0, return 1
 - if version2 index 0 > version1 index 0, return -1
 - if equal, compare the next index 
  - repeat above until you reach the end
  - if all places equal, return null

*/

function compareVersions(version1, version2) {
  if (!checkValidInput(version1) || !checkValidInput(version2)) {
    return null;
  }
  let v1Array = adjustLength(version1)
    .split(".")
    .map((part) => Number(part));
  let v2Array = adjustLength(version2)
    .split(".")
    .map((part) => Number(part));

  for (let part = 0; part < v1Array.length; part += 1) {
    let v1Part = v1Array[part] || 0;
    let v2Part = v2Array[part] || 0;

    if (v1Part > v2Part) {
      return 1;
    } else if (v1Part < v2Part) {
      return -1;
    }
  }
  return 0;
}

function adjustLength(string) {
  if (string.length < 4) {
    let difference = 4 - string.length;
    return string + ".0".repeat(difference);
  } else {
    return string;
  }
}

function checkValidInput(string) {
  return /^[0-9]+(\.[0-9]+)*$/.test(string);
}

console.log(compareVersions("1", "1")); // 0
console.log(compareVersions("8.1", "2.3.4.5")); // 1
console.log(compareVersions("1.1", "1.0")); // 1
console.log(compareVersions("2.3.4", "2.3.5")); // -1
console.log(compareVersions("1.a", "1")); // null
console.log(compareVersions(".1", "1")); // null
console.log(compareVersions("1.", "2")); // null
console.log(compareVersions("1..0", "2.0")); // null
console.log(compareVersions("1.0", "1.0.0")); // 0
console.log(compareVersions("1.0.0", "1.1")); // -1
console.log(compareVersions("1.0", "1.0.5")); // -1

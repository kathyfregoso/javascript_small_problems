// REQUIREMENTS:
// input: string

// output:
// object w/ 3 properties:
// - % of chars that are lowercase
// - % of chars that are uppercase
// - % of chars that are neither

// assume string will always contain at least 1 char

// QUESTIONS:

// EXAMPLES/TEST CASES:

// DATA STRUCTURES:
// strings, object

// ALGORITHMS:
// declare variable and assign it to object w/ 3 properties: lowercase, uppercase, neither, vals all 0
// find the length of the string and save it

// loop through string:
// - check if char is alphabetical:
//  - if char is lowercase, increment key-val by 1
//  - if char is lowercase, increment key-val by 1
// - if neither lowercase or uppercase letter, increment key-val by 1
// - exit loop

// SUB - PROCESS - compute percentages
// - loop through object property values
// - find percentage of lowercase, uppercase, neither (count / string length)
// - save count to key-val, convert to string, add 2 decimal places
// return object

function letterPercentages(string) {
  let count = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let idx = 0; idx < string.length; idx++) {
    if (
      /^[A-Z]$/i.test(string[idx]) &&
      string[idx] === string[idx].toLowerCase()
    ) {
      count["lowercase"]++;
    } else if (
      /^[A-Z]$/i.test(string[idx]) &&
      string[idx] === string[idx].toUpperCase()
    ) {
      count["uppercase"]++;
    }
    count["neither"]++;
  }

  console.log(computeCasePercent(count, string.length));
  return computeCasePercent(count, string.length);
}

function computeCasePercent(counts, length) {
  for (let prop in counts) {
    counts[prop] = ((counts[prop] / length) * 100).toFixed(2);
  }
  return counts;
}

letterPercentages("abCdef 123");
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages("AbCd +Ef");
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages("123");
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

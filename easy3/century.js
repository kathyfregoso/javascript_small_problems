// QUESTIONS:

// INPUT: year

// OUTPUT: century (string)

// REQUIREMENTS:
// the output str should begin with century number
// output str should end with 'st', 'nd', 'rd', or 'th'
// new centurys begin in years that end in 01
// - ex 1901 - 2000 are the 20th century

// DATA STRUCTURES:
// string
// number

// ALGORITHMS:
// formula pattern: century number = century / 100 + 1
// exception: century divisible by 100 (no remainder) = century / 100

// concatenate appropriate ending to century:
// - if the str ends with 11, 12, 13 - th
// - if the string ends with 1 - st
// - if the string ends with 2 - nd
// - if the string ends with 3 - rd
// - all else ends with "th"

function endsWithChars(century) {
  century = String(century);
  let lastTwoDigits = century.slice(century.length - 2);

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return century + "th";
  } else if (century[century.length - 1] === "1") {
    return century + "st";
  } else if (century[century.length - 1] === "2") {
    return century + "nd";
  } else if (century[century.length - 1] === "3") {
    return century + "rd";
  } else {
    return century + "th";
  }
}

function century(year) {
  let centuryOutput = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryOutput -= 1;
  }

  console.log(endsWithChars(centuryOutput));
}

century(1295);
century(2000); // "20th"
century(2001); // "21st"
century(1965); // "20th"
century(256); // "3rd"
century(5); // "1st"
century(10103); // "102nd"
century(1052); // "11th"
century(1127); // "12th"
century(11201); // "113th"
century(10000); // '100th"
century(10001); // '101st'

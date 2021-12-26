// REQUIREMENTS:
// input: integer

// output: next featured num > than integer
// - error message if no next featured number

// largest possible: 9876543201

// QUESTIONS:

// EXAMPLES/TEST CASES:
// featured numbers: 7, 21, 35, 49, 63, 77, 91, 105, 119, etc
// not featured numbers: 98 (not odd), 97 (not multiple of 7), 133 (digit 3 appears x2), 77, 56

// DATA STRUCTURES:
// numbers

// ALGORITHMS:
// start a loop that begins at the input integer
// add 1 to the input every iteration
// every loop, check if incremented integer is a featured number
// - odd num that's a multiple of 7, w/ all of its digits occuring exactly once each
// if it is, return that number
// if it isn't, continue the loop

function featured(num) {
  if (num >= 9876543201) {
    console.log(
      "There is no possible number that fulfills those requirements."
    );
    return "There is no possible number that fulfills those requirements.";
  }

  let multiple = findClosestOddMultiple(num);
  if (checkIfValidFeaturedNum(multiple) && multiple !== num) {
    // console.log(multiple);
    return multiple;
  } else {
    do {
      multiple = multiple + 7;
    } while (!checkIfValidFeaturedNum(multiple));
    // console.log(multiple);
    return multiple;
  }
}

function findClosestOddMultiple(num) {
  if (7 > num) return 7;

  let calc1 = num + 7 / 2;
  let calc2 = calc1 - (calc1 % 7);
  return calc2;
}

function checkIfValidFeaturedNum(num) {
  return num % 2 == 1 && num % 7 === 0 && noRepeatDigits(num);
}

function noRepeatDigits(num) {
  let digits = String(num).split("");
  let count = {};
  for (let index = 0; index < digits.length; index++) {
    if (!count[digits[index]]) {
      count[digits[index]] = 1;
    } else if (count[digits[index]]) {
      count[digits[index]] += 1;
    }
  }

  return Object.values(count).every((amount) => amount === 1);
}

featured(12); // 21
featured(20); // 21
featured(21); // 35
featured(997); // 1029
featured(1029); // 1043
featured(999999); // 1023547
featured(999999987); // 1023456987
featured(9876543200); // 9876543201
featured(9876543201); // "There is no possible number that fulfills those requirements."

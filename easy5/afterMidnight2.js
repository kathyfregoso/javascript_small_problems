// INPUT: string in 24 hour format (hh:mm) time

// OUTPUT:
// afterMidnight function: number of minutes after midnight (integer)
// beforeMidnight function: number of minutes before midnight (integer)

// REQUIREMENTS:
// write 2 new functions that each take a time of day in 24 hour format:
// - one returns the num of minutes before midnight
// - one returns the num of minutes after midnight
// both funcs. return value in range 0..1439

// EXAMPLES/TEST CASES:
// after midnight:
// "12:34" => (12 * 60) + 34 => 720 + 34 => 754
// before midnight:
// "12:34" => (24 - 13) => (11 * 60) => 660 + (60 - 24) = 660 + 26 = 686

// DATA STRUCTURES:
// strings, integers

// ALGORITHMS:
// declare a variable minutes per hour
// declare variable hours per day
// - replace ':' with '.' decimal
// - convert string to integer and save to variable integerTime
// - hours variable = floored integerTime (ex 12.34 = 12)
// - minutes variable = integerTime - hours

// FUNCTION afterMidnight:
// - minutes after midnight = (hours * minsPerHour) + minutes

// FUNCTION beforeMidnight:
// - minutes before midnight =
// ((hoursPerDay - (hours + 1)) * minsPerHour) + (minsPerHour - hoursPerDay)

const MINS_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

function conversion(time) {
  time = time.replace(":", ".");
  let integerTime = Number(time);
  if (integerTime === 24) {
    return 0;
  } else {
    return integerTime;
  }
}

function afterMidnight(string) {
  let newIntegerTime = conversion(string);
  let hours = Math.floor(newIntegerTime);
  let minutes = Number(string.slice(3));
  if (newIntegerTime === 0) {
    return newIntegerTime;
  } else {
    let minsAfterMidnight = hours * MINS_PER_HOUR + minutes;
    return minsAfterMidnight;
  }
}

function beforeMidnight(string) {
  let newIntegerTime = conversion(string);
  let hours = Math.floor(newIntegerTime);
  let minutes = Number(string.slice(3));

  if (newIntegerTime === 0) {
    return newIntegerTime;
  } else {
    hours = hours + 1;
    let minsBeforeMidnight =
      (HOURS_PER_DAY - hours) * MINS_PER_HOUR + (MINS_PER_HOUR - minutes);
    return minsBeforeMidnight;
  }
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

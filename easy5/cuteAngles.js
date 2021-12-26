// INPUT:
// floating point number representing angle btw 0-360 degrees

// OUTPUT:
// string representing that angle in degrees, minutes, and seconds

// REQUIREMENTS:
// degree symbol (˚) = degrees
// single quote ( ' ) = minutes
// double quote = ( " ) = seconds
// 60 minutes in a degree
// 60 seconds in a minute
// results may differ slightly depending on how you round values
// but they should generally be within a second or two of the results shown.
// implicit:
// - integers have no decimals
// - formula to convert degrees -> minutes -> seconds with remaining decimals

// QUESTIONS:

// EXAMPLES/TEST CASES:
// whole number in degrees: 76.73 is 76
// multiply remaining decimal by 60: .73 * 60 = 43.8, whole number 43 equals minutes
// multiply remaining decimal by 60: .8 * 60 = 48 seconds
// decimal degrees 76.73 converts to: 76 degrees, 43 minutes, and 48 seconds = 76°43'48"
// 76°43'48"

// DATA STRUCTURES:
// numbers and strings

// ALGORITHMS:
// 1. check if floating point number is an integer
// 2. if it it doesn't, output => degree°00'00"
// 3. if it does, proceed to step 4
// 4. round degrees to a whole number and save to variable
// 5. save remaining decimal of the degree to a variable
// 6. multiply remaining decimal of degrees by 60 (minutes) and save to variable
// 7. multiply the reminaing decimal of minutes by 60 (seconds) and save to a variable
// 8. round seconds to whole number
// 9. convert degrees, minutes and seconds to strings
// 9. concatenate degrees, minutes, and seconds and save to output variable
// 10. return output

function dms(degree) {
  if (Number.isInteger(degree)) {
    degree = String(degree);
    console.log(`${degree}°00'00`);
  } else {
    let wholeDegrees = Math.floor(degree);
    let degreeDecRem = degree - wholeDegrees;
    let minutes = 60 * degreeDecRem;
    let wholeMins = Math.floor(minutes);
    let minutesDecRem = minutes - wholeMins;
    let secs = Math.floor(60 * minutesDecRem);
    console.log(`${wholeDegrees}°${padZero(wholeMins)}'${padZero(secs)}`);
  }
}

function padZero(number) {
  let numString = String(number);
  return numString.length < 2 ? "0" + numString : numString;
}

dms(30); // 30°00'00"
dms(76.73); // 76°43'48"
dms(254.6); // 254°35'59"
dms(93.034773); // 93°02'05"
dms(0); // 0°00'00"
dms(360); // 360°00'00" or 0°00'00"

// further exploration tbd

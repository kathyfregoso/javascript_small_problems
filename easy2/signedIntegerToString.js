function integerToString(num) {
  if (num === 0) return "0";

  let result = [];

  while (num > 0) {
    // pushes remainder digit every loops [1] -> [1,2] -> [1,2,3] -> [1,2,3,4]
    result.push(num % 10);
    num = Math.floor(num / 10);
  }

  return result.reverse().join("");
}

function signedIntegerToString(num) {
  if (Math.sign(num) === -1) {
    return "-" + integerToString(-num);
  } else if (Math.sign(num) === 1) {
    return "+" + integerToString(num);
  } else {
    return integerToString(num);
  }
}

console.log(signedIntegerToString(4321)); // "+4321"
console.log(signedIntegerToString(-123)); // "-123"
console.log(signedIntegerToString(0)); // "0"

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

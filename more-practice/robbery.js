/*
// UNDERSTANDING THE PROBLEM
- INPUT: object (stolenItems)
- OUTPUT: 
 - number (total # of stolen objects) OR
 - string - 'Lucky you!' (if nothing stolen)
- RULES: 
 - add up the number of stolen items (property values)
 - assume each property value is a number
 - possible input of empty obj

// EXAMPLES/EDGE CASES: 
input: {}
output: "Lucky you!"

input: 
{
	tv: 30, 
	skate: 20, 
	stereo: 50,
}; 
output: 30 + 20 + 50 === 100

// DATA STRUCTURE(S): 
- object input
- key values are numbers
- array to reduce sum of stolen objects

// ALGORITHM:
1. convert input obj into array of values 
  (# items stolen by category)
2. reduce array values to get sum
3. if sum is > 0, return sum 
4. if sum is === 0, return 'Lucky you!' string
*/

const stolenItems1 = {
  tv: 30,
  skate: 20,
  stereo: 50,
};
// 100

const stolenItems2 = {
  painting: 20000,
};
// 20000

const stolenItems3 = {};
// "Lucky you!"

function robbery(stolenItems) {
  let totalStolen = Object.values(stolenItems).reduce(
    (total, curr) => total + curr,
    0
  );

  return totalStolen > 0 ? totalStolen : "Lucky you!";
}

console.log(robbery(stolenItems1)); // 100
// console.log(robbery(stolenItems2)); // 20000
// console.log(robbery(stolenItems3)); // "Lucky you!"

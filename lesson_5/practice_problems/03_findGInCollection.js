// access 'g' in each collection object:

let arr1 = ["a", "b", ["c", ["d", "e", "f", "g"]]];
// arr[2] = ["c", ["d", "e", "f", "g"]]
// arr[2][1] = ["d", "e", "f", "g"]
// arr[2][1][3] = 'g'
console.log(arr1[2][1][3]);

let arr2 = [
  { first: ["a", "b", "c"], second: ["d", "e", "f"] },
  { third: ["g", "h", "i"] },
];
// arr2[1] = { third: [ 'g', 'h', 'i' ] }
// arr2[1].third = [ 'g', 'h', 'i' ]
// arr2[1].third[0] = 'g'
console.log(arr2[1].third[0]);

let arr3 = [["abc"], ["def"], { third: ["ghi"] }];
// arr3[2] = { third: [ 'ghi' ] }
// arr3[2].third = [ 'ghi' ]
// arr3[2].third[0] = 'ghi'
// arr3[2].third[0][0] = 'g'
console.log(arr3[2].third[0][0]);

let obj1 = { a: ["d", "e"], b: ["f", "g"], c: ["h", "i"] };
// obj1.b = [ 'f', 'g' ]
// obj1.b[1] = 'g'
console.log(obj1.b[1]);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } };
// Object.keys(obj2.third) = [ 'g' ]
// Object.keys(obj2.third)[0] = 'g'
console.log(Object.keys(obj2.third)[0]);

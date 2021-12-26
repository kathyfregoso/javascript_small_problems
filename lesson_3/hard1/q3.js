// What will each code snippet print?

// A)

// A, B and C all demonstrate variable shadowing: when a local var in inner scope shares the same name as a var in outer scope
// variable shadowing prevents inner vars from accessing outer scope vars
// params one, two and three are not the same as global vars one, two and three

function messWithVars(one, two, three) {
  // reassignment, this  var now points to obj local var 2 was pointing to.
  // currently, one and two point to the same object
  // Note that global variable one still points to the same object `["one"]`
  one = two;

  // reassignment, local variable two now points to same obj as local variable three
  // now local variables two and three point to the same object
  // Note that global variable two still points to the same object `["two"]`
  two = three;

  // reassignment, local variable thre now points to same obj as local variable one
  // which is `["two"]` (we reassigned it up above)
  // And, global variable three wasn't changed so it still points to the same object.
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // outputs 'one is: one'
console.log(`two is: ${two}`); // outputs 'two is: two'
console.log(`three is: ${three}`); // outputs 'three is: three'

// B)

function messWithVars(one, two, three) {
  // here on line 2 both local var one and global var one reference the same array obj.
  // Same goes for variables two and three

  // reassigning local var one to point to a completely new arr obj w/ value ["two"].
  // not the same obj that var two is pointing to.
  // Again, we are reassigning local variable one, so global variable one remains unchanged.
  one = ["two"];

  // ... same for the other two lines of code
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // logs 'one is: one'
console.log(`two is: ${two}`); // outputs 'two is: two'
console.log(`three is: ${three}`); // outputs 'three is: three'

// the same principles about variable shadowing from A) apply to B)

// C)

function messWithVars(one, two, three) {
  // as before, here both local var one and global var one point to the same object.
  // Same goes for other variables.

  // call mutating method `splice` on the obj local var one references
  // We are mutating this obj and since global var one points to the same obj, it is mutated too!
  one.splice(0, 1, "two");

  // same here, call mutating method `splice` on the obj that local var two references
  // We are mutating this obj and since global var two points to the same obj, it is mutated too!
  two.splice(0, 1, "three");

  // same as above
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

// because inner vars of messWithVars point to the same array objects as global vars,
// the output displays the value of the mutated array object!
console.log(`one is: ${one}`); // logs 'one is: two'
console.log(`two is: ${two}`); // outputs 'two is: three'
console.log(`three is: ${three}`); // outputs 'three is: one'

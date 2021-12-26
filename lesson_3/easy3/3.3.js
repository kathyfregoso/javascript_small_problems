let str1 = "hello there";
let str2 = str1; // assigns a new string that's a copy of str1
str2 = "goodbye!"; // assigns str2 an entirely new copy of a string
console.log(str1);

// this will log "hello there", because reassigning variables does not affect primitive values
// strings, like all primitives, are immutable and can't be changed, and are passed by value,
// so variable str1 passes a copy of the string

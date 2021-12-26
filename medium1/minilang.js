// REQUIREMENTS:
// input: string (program)

// output: number(s)/integer(s)

// rules for stack machine interpretation:
// implement a function that implements a mini stack-and-register-based programming language
// all operations are integer operations (only important w/ DIV and MOD)
// language function - string arg provides programs
// assume all args. are valid programs
// - ex: they won't try to pop a non-existent val from stack
// - ex: won't contain any unknown tokens
// initialize the stack to []
// initialize register to 0

// stack:
// - list of values that grows + shrinks dynamically
// - may be implemented as an Array that uses 2 push + pop methods

// stack-and-register programming language:
// - uses a stack of values
// - operates on a register (current value)
// - not part of the stack
// - operation that req's 2 values:
//  - pops the topmost item (removes most recently pushed value) from stack
//  - then operates on the popped value and the register value
//  - then stores the result back in the register

// MULT operation:
// - multiplies the stack value w/ register value
// - removes the value from the stack
// -  stores the result back in the register
// - EXAMPLE:
//  - stack of [3, 6, 4] (4 is topmost item) and register = 7
//  - transforms the stack to [3, 6] (4 is removed)
//  - product of register x topmost item, 28 (4 x 7 = 28), stored in the register
//  - if we do another MULT, stack transformed to [3], register value now (6 x 28) = 168

// DATA STRUCTURES:
// strings, numbers, arrays

// ALGORITHMS:
// LANG FUNCTION:
// - initialize register w/ 0
// - initialize stack w/ []
// - split input string into array of strings w/ ' ' separator (arr of programs)
// - save commands to a collection(s) that can be accessed - SUB PROCESS
// - Loop thru array of programs:
//  - match current element w/ command
//  -proceed until all commands are executed

// COMMANDS COLLECTION (object):
// - n: place a value, n, in the register (don't modify the stack)
// - PUSH: push the register value onto the stack. leave value in register
// - ADD: pop a value from the stack and add it to the register val, storing result in register
// - SUB: pop a val from the stack and subtract it from register, store result in register
// - MULT: pop a val from the stack and multiply it by register, store result in register
// - DIV: pop a val from stack and divide it into the register val, store integer result in register
// - MOD: pop val from stack and divide it into register val, store the integer remainder of div. in register
// - POP: remove the topmost item from the stack and place in register
// - PRINT: print register val

function minilang(programs) {
  let register = 0;
  let stack = [];
  let programsArr = programs.split(" ");

  for (let i = 0; i < programsArr.length; i++) {
    let cmd = programsArr[i];
    switch (cmd) {
      case "ADD":
        register += stack.pop();
        break;
      case "MULT":
        register *= stack.pop();
        break;
      case "PUSH":
        stack.push(register);
        break;
      case "SUB":
        register -= stack.pop();
        break;
      case "DIV":
        register = Math.floor(register / stack.pop());
        break;
      case "MOD":
        register = Math.floor(register % stack.pop());
        break;
      case "POP":
        register = stack.pop();
        break;
      case "PRINT":
        console.log(register);
        break;
      default:
        if (Number(cmd)) {
          register = Number(cmd);
        } else {
          console.log(`Unknown command: ${cmd}`);
        }
    }
  }
  return register;
}

minilang("printter"); // error message

minilang("PRINT");
// 0

minilang("5 PUSH 3 MULT PRINT");
// 15

minilang("5 PRINT PUSH 3 PRINT ADD PRINT");
// 5
// 3
// 8

minilang("5 PUSH POP PRINT");
// 5

minilang("3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT");
// 5
// 10
// 4
// 7

minilang("3 PUSH PUSH 7 DIV MULT PRINT");
// 6

minilang("4 PUSH PUSH 7 MOD MULT PRINT");
// 12

minilang("-3 PUSH 5 SUB PRINT");
// 8

minilang("6 PUSH");
// (nothing is printed because the `program` argument has no `PRINT` commands)

// further exploration:
// add error handling:
// - detect + report empty stack conditions (ex trying to use val when ther are no vals in stack)
// - invalid cmd. tokens in program
// return error message if error occurs, or undefined if program runs successfully

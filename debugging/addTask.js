// let todos = [
//   "wash car",
//   "exercise",
//   "buy groceries",
//   "balance budget",
//   "call plumber",
//   "feed fido",
//   "get gas",
//   "organize closet",
// ];

// function addTask(task) {
//   if (todos.includes(task)) {
//     console.log("That task is already on the list.");
//   } else {
//     todos.push(task);
//   }
// }

// function completeTasks(n = 1) {
//   let tasksComplete = 0;

//   while (todos.length > 0 && tasksComplete < n) {
//     console.log(`${todos[0]} complete!`);
//     delete todos[0];
//     tasksComplete++;
//   }

//   if (todos.length === 0) {
//     console.log("All tasks complete!");
//   } else {
//     console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
//   }
// }

// function displayTaskList() {
//   console.log(`ToDo list (${todos.length} tasks):`);
//   console.log("---------------------");

//   for (let idx = 0; idx < todos.length; idx++) {
//     console.log(`-- ${todos[idx]}`);
//   }
// }

// // Utilizing our task manager

// addTask("oil change");
// addTask("dentist");
// addTask("homework");

// completeTasks(3);
// displayTaskList();

// as is, the above code is that it outputs the following:

// wash car complete!
// undefined complete!
// undefined complete!
// 3 tasks completed; 11 remaining.
// ToDo list (11 tasks):
// ---------------------
// -- undefined
// -- exercise
// -- buy groceries
// -- balance budget
// -- call plumber
// -- feed fido
// -- get gas
// -- organize closet
// -- oil change
// -- dentist
// -- homework

// the code outputs a series of 'undefined' completed tasks, and the first element of the 'todo'
// list remains undefined. the addTask function seems to be working appropriately. This points
// to the fact that the error may be in the completeTasks function

// To fix this code, I changed the line in the while loop w/in completeTasks that removes
// the first element in the array. I used the shift method over the delete keyword. When you
// use delete to delete an array element, the array length is not affected. Thus the element
// at the specified index is replaced w/ 'undefined', which results in an error in the code.

let todos = [
  "wash car",
  "exercise",
  "buy groceries",
  "balance budget",
  "call plumber",
  "feed fido",
  "get gas",
  "organize closet",
];

function addTask(task) {
  if (todos.includes(task)) {
    console.log("That task is already on the list.");
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    todos.shift(); // fixed!!
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log("All tasks complete!");
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {
  console.log(`ToDo list (${todos.length} tasks):`);
  console.log("---------------------");

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask("oil change");
addTask("dentist");
addTask("homework");

completeTasks(3);
displayTaskList();

// Synchronous and Asynchronous operations refer to how tasks are executed, particularly in relation
// to time and the order of execution.

// Execution Order:
// Synchronous: Code runs sequentially, one line after the other.
// Asynchronous: Code runs out of order, depending on when tasks are completed.

// Blocking:
// Synchronous: Tasks are blocking, meaning the next task must wait for the current one to complete.
// Asynchronous: Tasks are non-blocking, allowing the next task to start even if the current one isn't finished.

// Synchronous Operations
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

// Output
// Task 1
// Task 2
// Task 3

// Asynchronous Operations
// console.log("Task 1");
// setTimeout(() => {
//   console.log("Task 2"); // This will run after 2 seconds
// }, 2000);
// console.log("Task 3");

// Output
// Task 1
// Task 3
// Task 2

// Async and await in javascript
// A new way of writing asynchronous code in javascript,

// async: Marks a function as asynchronous and ensures it returns a Promise.
// await: Pauses the execution of the function until a Promise is resolved or rejected,

// Benefits of async and await
// Readability: async/await allows you to write code that looks synchronous but is asynchronous, making it easier to understand and maintain.
// Error Handling: async/await works well with try...catch blocks, making error handling straightforward.
// Control Flow: It helps avoid the "callback hell" and "promise chaining" that can make code difficult to follow.

// async function getUserData() {
//   try {
//     let response = await fetch("https://api.example.com/user");
//     let data = await response.json();
//     console.log(data); // Logs the user data
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// }
// getUserData();

// 23/11/2024 - UI React js

// hiddenbrains.in interview question
const obj = { prop: "old" };
const arr = [obj];
console.log(arr);
console.log(arr[0].prop);
obj.prop = "new";
console.log(arr[0].prop);

// Creat custom hook for fetching data
// Create a Global state to maintain the data and pass to multiple components useReducer
// Performance optimization tehniques in react
// Unit test cases using jest or Cypress

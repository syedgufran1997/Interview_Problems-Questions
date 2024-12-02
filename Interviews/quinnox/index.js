// Quinnox - 2/12/2024 L1 for React Developer

// Javascript Questions
// Debounce method in plain javascript write code
// Explain any one scenario where you have used debounce method
// how can we do caching in plain javascript
// what is currying in javascript
// where do we use currying explain any live example

// React Questions
// Why do we use SSR deep questions
// why do we use Fragments in react
// Diff btwn React and Next
// Why do we use Next js
// How to pass values from child to parent component in react
// How to avoid unnecessary rerendering of callback funciton used in parent component
// Have you worked with React Optimizations and explain

// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// output: 6

// [2, -1, 2, -1, 2]
// output: 4

// [1, 2, -5, 4, 5]
// output: 9

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let output = 0;
function callSum(array) {
  for (let i = 0; i <= array.length; i++) {
    let a = array[i];
    let b = array[i + 1];
    array[i] = a + b;
  }
}
callSum(array);

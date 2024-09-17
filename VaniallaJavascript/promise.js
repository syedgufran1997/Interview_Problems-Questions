// A promise is an object representing the eventual completion/failure of an asynchronous operation.
// Promise has 3 states Pending, Fullfilled, Rejected.
// Promises are immutable.
// We can resolve promise just once.

// Avoid using callbacks because it will create callback hell and inversion of control
// Always prefer to use promises in you code

// // PROMISES IN JAVASCRIPT
// function promise(n) {
//   return new Promise((resolve, reject) => {
//     if (n % 2 === 0) {
//       resolve(`${n} is even number`);
//     } else if (n % 2 !== 0) {
//       reject(`${n} is odd number`);
//     }
//   });
// }
// promise(3)
//   .then((res) => console.log("result", res))
//   .catch((err) => console.log("error", err));

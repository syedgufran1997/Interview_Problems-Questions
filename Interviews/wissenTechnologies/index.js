// Wissen technologies pvt ltd 15-Oct-2024 6PM
// Answer the questions in CRISP and CLEAR way in one sentence
// 1. Difference between CSR and SSR
// 2. Difference between Apollo Client and Redux
// 3. What and How javascript Event loop works

// What will be the result for the code and how will the code prints explain using event loop concept
// for (var i = 0; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// output 6 prints 6 times
// 6 6 6 6 6 6

// Using var inside ForLoop print from 0 to 5 and it should wait for 2 miliseconds after each number prints
// output 1 wait 2 wait 3 wait 4 wait 5

for (var i = 1; i <= 5; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    }, i * 2000);
  })(i);
}

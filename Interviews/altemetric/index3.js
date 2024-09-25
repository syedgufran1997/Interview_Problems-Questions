// Altemetric round 3

// function recursiveFactorial(n) {
//   let reNum;
//   for (let i = 1; i <= n; i++) {
//     return (reNum = n[i] * n[i - 1]);
//   }
// }
// // 1,2,3,4
// // 24
// console.log(recursiveFactorial(4));

function* GeneratorFunction() {
  console.log("first Line");
  yield;

  console.log("second Line");
  yield;
}

const invokeGenerotor = GeneratorFunction();
console.log(invokeGenerotor.next());

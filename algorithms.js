// Algorithms

// Big O notation using the time complexity for sum numbers

// Time Complexity O(n) - linear
// function sumN(n = 4) {
//   let sum = 0; // runs 1 time
//   for (let i = 0; i <= n.length; i++) {
//     sum += i; // runs 4 time
//   }
//   return sum; // runs 1 time
// }

// similarly to reduce the time complexity for sum
// function summation(n) {
//   return (n * (n + 1)) / 2;
// }
// console.log(summation(4));

// Time Complexity
// O(n) - linear
// O(n>2) - Quadratic 3n>2 + 5n + 1
// O(n>3) - cubic
// O(logn) - Logarithmic here input size reduces by half iteration

// Problems

// 1. Fibonacci sequence  - Sequence in which each number is the sum of two precedings ones.

// Fibonacci series
// function Fibonacci(n) {
//   let array = [0, 1];
//   for (let i = 2; i < n; i++) {
//     array[i] = array[i - 1] + array[i - 2];
//   }
//   return array;
// }

// console.log(Fibonacci(2)); // [0,1]
// console.log(Fibonacci(3)); // [0,1,1]
// console.log(Fibonacci(7)); // [0,1,1,2,3,5,8]

// alternate method of fibonnaci series
// function Fibonacci(n) {
//   let array = [0, 1];
//   for (let i = 2; i < n; i++) {
//     let a = i - 1;
//     let b = i - 2;
//     array.push(a + b);
//   }
//   return array;
// }
// console.log(Fibonacci(2)); // [0,1]
// console.log(Fibonacci(3)); // [0,1,1]
// console.log(Fibonacci(7)); // [0,1,1,2,3,5,8]

// 2. Factorial of a number
// factorail of a non-negative integer n, denoted n!,
// is the product of all positive integers less than or equal to n

// function Factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// }
// console.log(Factorial(3)); // [1,2,3] it will multiply with result
// console.log(Factorial(5)); // [1,2,3,4,5] it will multiply with result

// 3. Prime Number
// A prime number is a natural number greater than 1 that is not product of
// two smaller natural numbers

// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }

//   // for more optimal solution
//   //   for (let i = 2; i <= Math.sqrt(n); i++) {}

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(1)); // false
// console.log(isPrime(5)); // true
// console.log(isPrime(4)); // false
// console.log(isPrime(8)); // true

// Recursion
// Recursion is when a function calls itself.
// Recursion is problem solving technique where the solution depends on
// solution to smaller instances of same problem

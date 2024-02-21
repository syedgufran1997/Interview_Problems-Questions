// Algorithms

// 3 types of algoithms
// Math , Search and Sorting

//
//
// Exmaple using sum
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
// console.log(Factorial(3)); // output  6  - [1,2,3] it will multiply with result
// console.log(Factorial(5)); // output 120 - [1,2,3,4,5] it will multiply with result

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

// Recursive Fibonacci Sequence
// It is a sequence in which each number is a sum of two procedings ones
// Problem Given number n find the nth elemnet of fibonacci sequence

// function recursiveFibonacci(n) {
//   if (n < 2) {
//     return n;
//   }
//   return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// }

// console.log(recursiveFibonacci(0));
// console.log(recursiveFibonacci(1));
// console.log(recursiveFibonacci(4));
// console.log(recursiveFibonacci(6));

// Recursive Factorial of a number  formula n! = n * (n-1)
// function recursiveFactorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * recursiveFactorial(n - 1);
// }
// console.log(recursiveFactorial(3)); // output  6  - [1,2,3] it will multiply with result
// console.log(recursiveFactorial(5)); // output 120 - [1,2,3,4,5] it will multiply with result

//
//
// SEARCH ALOGORITHMS   - IMPORTANT

// 1. Linear Search Algorithm
// Problem Given an array of n elements and a target element t, find the
// index of t in the array, return -1 if the target element is not found

// function LinearFunciton(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(LinearFunciton([-5, 2, 10, 4, 6], 10)); // output 2

// 2. Binary Search Algorithm
// Problem Given an sorted array of 'n' elements and a target element 't', find
// th index of 't' in the array, return -1 if target element not found

// note: Binary searh only works on sorted array,So if array not sorted
// sort an array first then run funciton
// using Math.floor to get lower integer value if we have even numbers array

// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;

//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//     if (target === arr[middleIndex]) {
//       return middleIndex;
//     } else {
//       leftIndex = middleIndex + 1;
//     }
//   }

//   return -1;
// }
// console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // output 4

// 3. Recursive Binary Search Algorithm
// function binarySearchRecursive(arr, target) {
//   return search(arr, target, 0, arr.length - 1);
// }

// function search(arr, target, leftIndex, rightIndex) {
//   if (leftIndex > rightIndex) {
//     return -1;
//   }

//   let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//   if (target === arr[middleIndex]) {
//     return middleIndex;
//   }

//   if (target < arr[middleIndex]) {
//     return search(arr, target, leftIndex, middleIndex - 1);
//   } else {
//     return search(arr, target, middleIndex + 1, rightIndex);
//   }
// }
// console.log(binarySearchRecursive([-5, 2, 4, 6, 10], 10)); // output 4

//
//
// SORTING ALGORITHMS

// 1. Bubble Sort Algorithm - It will compare each value with next/unsorted value in a loop
// const arr = [1, 2, 4, 7, 9, 3, 6, 8];
// function bubbleSort(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     for (j = 0; j <= arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort(arr));

// 2. Insertion Sort Algorithm - It will compare sorted array with next unnsorted elements/array and swap them
// const arr = [8, 20, -2, 4, -6];
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentValue = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > currentValue) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = currentValue;
//   }
//   return arr;
// }
// console.log(insertionSort(arr));

// 3. Quick Sort Algorithm -
// by identifying the pivot element in array, we can take first, last, median, random element
// our approach by picking last element of array as pivot
// check push all values less than pivot to leftarrray and values greater than pivot to the right

// const arr = [-6, 20, 8, -2, 4];
// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }
// console.log(quickSort(arr));

// 4. Merge Sort Algorithm
// Divide array into sub array, each containing only one element.
// and compare untill theleft array is null and push it to the right array

// const arr = [-6, 20, 8, -2, 4];

// function mergeArray(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let mid = Math.floor(arr.length / 2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);
//   return merge(mergeArray(left), mergeArray(right));
// }
// function merge(left, right) {
//   let sortedArray = [];
//   while (left.length && right.length) {
//     if (left[0] <= right[0]) {
//       sortedArray.push(left.shift());
//     } else sortedArray.push(right.shift());
//   }
//   return [...sortedArray, ...left, ...right];
// }
// console.log(mergeArray(arr));

// Misc Problems

// 1. Cartesian product
// const a = [1, 2];
// const b = [3, 4];
// output const A*B = [[1,3],[1,4], [2,3] , [2,4]] // output

// function cartesianProduct(arr1, arr2) {
//   let array = [];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       array.push([arr1[i], arr2[j]]);
//     }
//   }

//   return array;
// }
// console.log(cartesianProduct(a, b));

// Climbing Stair Case
// function climbingStairCase(n) {
//   let noOfWays = [1, 2];
//   for (let i = 2; i < n; i++) {
//     noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
//   }
//   return noOfWays[n - 1];
// }

// console.log(climbingStairCase(1)); // 1
// console.log(climbingStairCase(2)); // 2
// console.log(climbingStairCase(3)); // 3
// console.log(climbingStairCase(4)); // 5
// console.log(climbingStairCase(5)); // 8

// Tower of Hanoi
// A, B, C towers

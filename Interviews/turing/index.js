// How do you handle asynchronous operations in Node.js? Can you discuss the pros and cons of using callbacks, promises, and async/await for managing asynchronous code?
// How do you manage environment variables in a Node.js application? Can you discuss best practices for securely handling sensitive information like API keys and database credentials?

// Explain the concept of variable scoping in Python and provide examples of how global and local variables are accessed within different scopes.
// Discuss the differences between shallow copy and deep copy in Python and provide scenarios where each is useful.
// Explain the concept of generators in Python and provide an example of how they can be used to efficiently process large datasets.

/**
 * Write a function that takes an array of integers and an integer k, and returns the maximum sum of any contiguous subarray of length k.
 * array => [2, 3, 4, 10, 9, 5, 1]
 * k = 2
 * Output => 19
 */

// use sliding window method for the above

let array = [2, 3, 4, 10, 9, 5, 1];
let k = 2;

function maxSum(arr, k) {
  if (k <= 0) {
    return null;
  }

  let maxSum = 0;
  for (let i = 0; i <= k; i++) {
    maxSum += arr[i];
  }

  let currentSum = maxSum;

  for (i = k; i < array.length; i++) {
    currentSum += arr[i] - arr[i - k];
    console.log(currentSum);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
console.log(maxSum(array, k));

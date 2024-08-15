// Given an integer array nums, find the subarray with the largest sum, and return its sum.

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // Output: 6;
// let nums = [1]; // Output: 1;
// let nums = [5, 4, -1, 7, 8]; // Output: 23;

// using Kadane's algorithm
function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubArray(nums));

// It initializes maxSum and currentSum to the first element.
// It iterates through the rest of the elements, updating currentSum to be the maximum of the current element or the sum of the current element and the previous currentSum.
// It updates maxSum to be the maximum of the current maxSum and the current currentSum.
// Finally, it returns maxSum, which contains the largest sum of any subarray in the input array.

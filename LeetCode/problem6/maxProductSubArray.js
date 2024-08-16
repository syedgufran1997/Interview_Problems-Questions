// Given an integer array nums, find a subarray that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.

let nums = [2, 3, -2, 4]; // Output: 6;
// let nums = [-2, 0, -1];   // Output: 0;

function maxProduct(nums) {
  if (nums.length === 0 && !nums) {
    return 0;
  }
  let maxProduct = nums[0];
  let minProduct = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let n = nums[i];
    if (n < 0) {
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }
    maxProduct = Math.max(n, maxProduct * n);
    minProduct = Math.min(n, minProduct * n);
    result = Math.max(result, maxProduct);
  }

  return result;
}

console.log(maxProduct(nums));

// Summary of Each Iteration
// Let's summarize what happens at each step:

// Iteration 1 (i = 1):

// num = 3
// Calculate maxProduct and minProduct:
// maxProduct = 6 (from 2 * 3)
// minProduct = 3 (from 2 * 3)
// Update result to 6.
// Iteration 2 (i = 2):

// num = -2
// Swap maxProduct and minProduct due to the negative number.
// Calculate maxProduct and minProduct:
// maxProduct = -2 (from 3 * -2)
// minProduct = -12 (from 6 * -2)
// result remains 6.
// Iteration 3 (i = 3):

// num = 4
// Calculate maxProduct and minProduct:
// maxProduct = 4 (from -2 * 4)
// minProduct = -48 (from -12 * 4)
// result remains 6.

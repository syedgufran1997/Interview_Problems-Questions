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

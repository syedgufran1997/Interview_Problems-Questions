// Given an integer array nums, return an array answer such that answer[i] is equal to the product of
// all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Function Overview
// The function aims to return an array where each element at index i is the product of all elements in
// the input array nums except the one at nums[i]. This is achieved in two main steps:
// Calculating prefix products: Stores the product of all elements before each index i in the result array.
// Calculating suffix products: Multiplies each element in result by the product of all elements after index i.

// let nums = [-1, 1, 0, -3, 3] //result:[0, 0, 9, 0, 0];
let nums = [1, 2, 3, 4]; //result:[24, 12, 8, 6]

function productExceptSelf(nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);

  let prefixProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefixProduct;
    prefixProduct *= nums[i];
  }

  let suffixProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffixProduct;
    suffixProduct *= nums[i];
  }

  return result;
}

console.log(productExceptSelf(nums));

// Two-pointer technique
// This involves sorting the array first and then using two pointers to find the pair of
// numbers that add up to the target.

// Explanation
// 1. Create an Array of Objects: let numsWithIndices = nums.map((value, index) => ({ value, index })); creates an array of objects, each containing the value and its original index.
// 2. Sort the Array: numsWithIndices.sort((a, b) => a.value - b.value); sorts the array by values while maintaining the original indices.
// 3. Initialize Two Pointers: let left = 0; and let right = numsWithIndices.length - 1; initialize two pointers.
// 4. Two-Pointer Technique:
// Calculate the sum of the numbers at the two pointers.
// If the sum is equal to the target, print and return the original indices of the two numbers.
// If the sum is less than the target, move the left pointer to the right.
// If the sum is greater than the target, move the right pointer to the left.

function twoPointersSum(nums, target) {
  let numWithIndex = nums.map((num, index) => ({ num, index }));
  numWithIndex.sort((a, b) => a.num - b.num);

  // actual 2 pointers methods start
  let left = 0;
  let right = numWithIndex.length - 1;

  while (left < right) {
    let sum = numWithIndex[left].num + numWithIndex[right].num;
    if (sum === target) {
      return [numWithIndex[left].index, numWithIndex[right].index];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
// let nums = [3, 2, 4];
// let target = 6;
// console.log(twoPointersSum(nums, target));

// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

// let nums = [4,5,6,7,0,1,2], target = 3  // Output: -1
// let nums = [1], target = 0  // Output: -1
// let nums = [4, 5, 6, 7, 0, 1, 2]; target = 0; // Output: 4
// let nums = [1, 3]; target = 3; //Output = 1
let nums = [3, 1];
target = 1; //Output = 1

const searchInSortedArray = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    // check which side the array is sorted
    if (nums[left] <= nums[mid]) {
      // if left side sorted
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // right sorted
      // if not left side then it will be right side for sure
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};

console.log(searchInSortedArray(nums, target));

// Explanation;
// 1. Initialization:
// left and right pointers are initialized to the start and end of the array, respectively.

// 2. Binary Search Loop:
// Calculate mid as the average of left and right.
// Check if the element at mid is the target. If it is, return the mid index.
// Determine whether the left side (nums[left] to nums[mid]) or the right side (nums[mid] to nums[right]) is sorted.
// If the left side is sorted:
// Check if the target is within the range of the left side. If it is, search the left half by updating right.
// If not, search the right half by updating left.
// If the right side is sorted:
// Check if the target is within the range of the right side. If it is, search the right half by updating left.
// If not, search the left half by updating right.

// 3. Termination:
// If the loop exits without finding the target, return -1.

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
// For example, the array nums = [0,1,2,4,5,6,7] might become:
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.

// let nums = [3, 4, 5, 1, 2]; // 1
// let nums = [4, 5, 6, 7, 0, 1, 2]; //0
let nums = [11, 13, 15, 17]; //11

// Using the Mofified Binary Search approach
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  // If the array is not rotated at all
  if (nums[left] < nums[right]) {
    return nums[left];
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    // If mid element is greater than the rightmost element,
    // the smallest value must be to the right of mid
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // If mid element is less than or equal to the rightmost element,
      // the smallest value must be at mid or to the left of mid
      right = mid;
    }
  }

  // At this point, left == right, pointing to the smallest element
  return nums[left];
}

console.log(findMin(nums));

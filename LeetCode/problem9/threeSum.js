// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// let nums = [-1, 0, 1, 2, -1, -4]; // Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:
let nums = [0, 1, 1]; // Output: [] Explanation: The only possible triplet does not sum up to 0.
// Example 3:
// let nums = [0,0,0] // Output: [[0,0,0]] Explanation: The only possible triplet sums up to 0.

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip the same element to avoid duplicates
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = 0; // Initialize the left pointer
    let right = nums.length - 1; // Initialize the right pointer

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // Found a triplet
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for the left and right pointers
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        // Move pointers to the next unique elements
        left++;
        right--;
      } else if (sum < 0) {
        left++; // Need a larger sum, so move the left pointer to the right
      } else {
        right--; // Need a smaller sum, so move the right pointer to the left
      }
    }
  }

  return result;
}

console.log(threeSum(nums));

// Approach
// Sort the Array: Start by sorting the array. This helps in easily avoiding duplicates and efficiently finding triplets that sum to zero using the two-pointer technique.
// Iterate Through the Array: Use a for-loop to fix one element of the triplet. The idea is to then find two other numbers that, together with the fixed element, sum up to zero.
// Two-Pointer Technique: For the two remaining numbers, use two pointers: one starting just after the fixed element and the other starting from the end of the array. Adjust these pointers based on the sum:
// If the sum is less than zero, move the left pointer to the right to increase the sum.
// If the sum is greater than zero, move the right pointer to the left to decrease the sum.
// If the sum equals zero, you've found a valid triplet.
// Avoid Duplicates: Skip any duplicates by moving the pointers past any repeated values.
// Store the Result: Collect all unique triplets and return them.

// Explanation
// Sorting: The array nums is first sorted to make it easier to avoid duplicates and use the two-pointer technique.
// Outer Loop: The for loop iterates through each element of the array. The element at index i is considered the first element of the triplet.
// Two-Pointer Technique: The left pointer starts right after i, and the right pointer starts at the end of the array. By moving these pointers inward, we can find pairs that sum up to -nums[i], forming a valid triplet that sums to zero.
// Avoiding Duplicates: The condition if (i > 0 && nums[i] === nums[i - 1]) continue; ensures that we skip over any duplicate values for the first element of the triplet. Similarly, we skip duplicates for the second and third elements by adjusting the left and right pointers after finding a valid triplet.
// Result Collection: Valid triplets are stored in the result array, which is returned at the end.
// This approach ensures that we find all unique triplets in O(n^2) time, where n is the length of the array.

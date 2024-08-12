// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

let nums = [1, 2, 3, 1]; // Output: true
// let nums = [1,2,3,4] // Output: false
// let nums = [1,1,1,3,3,4,3,2,4,2] // Output: true

function containsDuplicate(nums) {
  let numSet = new Set();
  for (let num of nums) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }
  return false;
}
console.log(containsDuplicate(nums));

// Time and Space Complexity
// Time Complexity: 𝑂(𝑛) because we iterate through the array once.
// Space Complexity: 𝑂(𝑛) because we may store up to all elements in the set.

// Using Chat GPT for this solution

// Initialization
// Hash map: numToIndex = {} (empty at the start)
// Iterations
// First Iteration (index = 0):

// Current number: num = 3
// Complement: complement = 6 - 3 = 3
// Check hash map: numToIndex does not have the key 3 (complement is not found)
// Update hash map: Add 3 to numToIndex with its index: numToIndex = { 3: 0 }
// Second Iteration (index = 1):

// Current number: num = 2
// Complement: complement = 6 - 2 = 4
// Check hash map: numToIndex does not have the key 4 (complement is not found)
// Update hash map: Add 2 to numToIndex with its index: numToIndex = { 2: 1, 3: 0 }
// Third Iteration (index = 2):

// Current number: num = 4
// Complement: complement = 6 - 4 = 2
// Check hash map: numToIndex has the key 2 (complement is found)
// Return indices: [numToIndex[2], 2] which is [1, 2]
// At this point, we have found the solution, so we return the indices [1, 2].

function twoSum(nums, target) {
  // Initialize an empty hash map (object in JavaScript)
  const numToIndex = {};

  // Iterate through the array
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];

    // Calculate the complement
    const complement = target - num;

    // Check if the complement is in the hash map
    if (numToIndex.hasOwnProperty(complement)) {
      // If found, return the indices
      return [numToIndex[complement], index];
    }

    // Add the current number and its index to the hash map
    numToIndex[num] = index;
  }

  // If no solution is found, return an empty array (though we assume there's always one solution)
  return [];
}

// Example usage
const nums = [3, 2, 4];
const target = 6;
// console.log(twoSum(nums, target));
// Output: [1, 2]

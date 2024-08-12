let nums = [1, 2, 3, 1];
// Output: true

// let nums = [1,2,3,4]
// Output: false

// let nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

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

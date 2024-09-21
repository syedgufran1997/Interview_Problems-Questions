// Altemetric L2 round Assesment javascript question
// Write a function
// findDuplicates(arr)
// that takes in an array of integers as an argument and returns an array of all the integers that
// occur more than once in the input array. The returned array should not have any repeated values,
//  and can be in any order.

// Example:

const arr = [1, 2, 3, 2, 4, 5, 6, 3, 7, 8, 6];
// console.log(findDuplicates(arr)); // should return [2, 3, 6]

function Duplicates() {
  let element = {};
  let result = [];

  //    const dupCheck = arr.filter((item,index) => arr.indexOf(item) !== index ) // [2,3,6]

  // const result = arr.reduce((acc, curr) => ((acc[curr] = acc[curr] + 1 || 1), acc), {})
  // { 1: 1, 2: 2, 3: 2, 4: 1, 5: 1, 6: 2, 7: 1, 8: 1 }

  arr.forEach((num) => {
    element[num] = (element[num] || 0) + 1;
  });
  // { 1: 1, 2: 2, 3: 2, 4: 1, 5: 1, 6: 2, 7: 1, 8: 1 }

  for (let key in element) {
    if (element[key] > 1) {
      result.push(Number(key));
    }
  }
  // const result = Object.entries(arr).map(([key, value]) => {return {key: (key), value }})
  // console.log(result);

  return result;
}

console.log(Duplicates());

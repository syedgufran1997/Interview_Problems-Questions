// Difference between splice, slice and filter array method in Javascript
let array = [1, 2, 3, 4, 5, 6, 7];

//
// Splice ------------------------
// A JS method which modifies the original array by adding, removing or replacing elements
// Mutates the original array.
// Used to add, remove, or replace elements within an array.
// Returns an array of removed elements.

// syntax = splice(start, deleteCount, item1, item2...)
// let removed = array.splice(2, 2, 8, 9);
// console.log(removed); // [3, 4]
// console.log(array);   // [1, 2, 8, 9, 5, 6, 7]

//
// Slice ------------------------
// A JS method which creates a copy of an array without modifying the original array
// Does not mutate the original array.
// Used to extract a portion of an array into a new array.
// Returns a new array containing the sliced elements.

// syntax - slice(start, end)
// let newArr = array.slice(2,4)
// console.log(newArr); // [3 ,4]
// console.log(array); // [1, 2, 3, 4, 5, 6, 7]

//
// Filter ------------------------
// Creates a new array containing all elements that pass a test provided by a function, without modifying the original array
// Does not mutate the original array.
// Used to create a new array containing elements that satisfy a specified condition.
// Returns a new array with elements that pass the test.

// syntax = filter(currentItem, index, array)
// const filterArray = array.filter((item) => item < 3)
// console.log(filterArray); // [1 ,2]
// console.log(array); // [1, 2, 3, 4, 5, 6, 7]

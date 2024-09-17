// Object.entries(), Object.values(), and Object.assign() are methods that deal with objects but serve different purposes.

// Object.entries(): ---------
// Converts an object into an array of [key, value] pairs.
// Useful for iterating over both keys and values.
// const obj = { a: 1, b: 2, c: 3 };
// console.log(Object.entries(obj));
// Output: [['a', 1], ['b', 2], ['c', 3]]

// Object.values(): ---------
// Converts an object into an array of values only.
// Useful for retrieving just the values from an object.
// const obj = { a: 1, b: 2, c: 3 };
// console.log(Object.values(obj));
// Output: [1, 2, 3]

// Object.assign(): ---------
// Copies properties from source objects to a target object.
// Useful for merging objects or copying properties from one object to another.

// const target = { a: 1 };
// const source1 = { b: 2 };
// const source2 = { c: 3 };

// Object.assign(target, source1, source2);
// console.log(target);
// Output: { a: 1, b: 2, c: 3 }

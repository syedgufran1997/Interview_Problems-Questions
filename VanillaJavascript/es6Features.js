// 1. let and const -----
// Both are used to declare variables

// 2. Arrow functions -----
// Used to define functions in a concise way and lexically binds "this" value
// let addFn = (a, b) => a + b;
// console.log(addFn(2,3)) // 5

// 3. Template Literals -----
// Used to write expressions inside string literals using backticks (` `) and ${} syntax
// let name = "John";
// let age = 30;
// let str = `My name is ${name} and I am ${age} years old`;

// 4. Default Parameters -----
// Allows initializing default values if no value or undefined is passed for function parameters
// function greet(name = "Guest") {
//   return `Hello, ${name}!`;
// }
// console.log(greet());          // "Hello, Guest!"
// console.log(greet('John'));    // "Hello, John!"
// console.log(greet(undefined)); // "Hello, Guest!" (default is used)
// console.log(greet(null));      // "Hello, null!" (null is passed as the value)

// 5. Destructuring Assignments -----
// Destructuring is a convenient way of accessing properties and values from other objects and arrays;
// Object Destructuring
// const person = {
//   name: "John",
//   age: 21,
//   address: {
//     city: "New York",
//     state: "NY",
//   },
// };
// const { name, age, address } = person;

// Array Destructuring
// const array = ["apple", "bat", "cat", "dog", "egg"];
// const [array1, array2, ...rest] = array;
// console.log(rest);
// console.log(array);

// 6. Rest and Spread Operators -----
// Rest Operators - Gathers the remaining elements into an Array
// const user = { name: "syed", age: 10, address: "cpt" };
// const { age, ...rest } = user;
// console.log(rest); // {name: 'syed', address: "cpt"}

// Spread Operators - It takes an iterable and expands it into individual elements.
// const user = { name: "syed", age: 10, address: "cpt" };
// const updateUser = { ...user, sal: 100, age: 20 };
// console.log(updateUser); // { name: 'syed', age: 20, address:"cpt", sal: 100 }

// 7. Classes -----
// New syntax for creating Object and dealing with inheritance
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello ${this.name}`);
//   }
// }
// let details = new Person("syed", 10);
// details;

// 8. Modules -----
// ES6 introduced native support for modules, alowing you to split code into smaller, reusable pieces.
// Exporting
// export const add = (a, b) => a + b;
// export const multiply = (a, b) => a * b;
// Importing
// import { add, multiply } from './math.js';
// console.log(add(2, 3)); // 5
// console.log(multiply(2, 3)); // 6

// 9. Promises -----
// Promises are objects which returns a value in future as either resolved or rejected
// Promises provide a cleaner way to handle Asynchronous operations compared to callbacks.
// const addNumbers = (n) => {
//   return new Promise((resolve, reject) => {
//     if (n % 2 === 0) {
//       resolve("number is even");
//     } else if (n % 2 !== 0) {
//       reject("number is odd");
//     }
//   });
// };
// addNumbers(3)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// 10. Enhanced Object Literals
// They make objet creation more concise and expressive.
// They provide several improvements to the way objects are defined, making code easier to read and write.
// const prop = 'email';
// const person = {
//   name: 'John',
//   age: 30,
//   [prop]: 'john@example.com',  // Computed property name
//   greet() {                    // Shorthand method definition
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// };

// person.greet(); // "Hello, my name is John and I am 30 years old."
// console.log(person.email); // "john@example.com"

// 11. Iterators and for of loop
// Iterators provide a way to define custom iteration behavior for objects,
// and for...of is a new loop that iterates over iterable objects like arrays.
// const array = [1, 2, 3];
// for (const value of array) {
//   console.log(value); // 1, 2, 3
// }

// 12. Map and Set
// Map - A Map object is a simple data structure that allows you to store key-value pairs.
// const map = new Map();
// map.set('key1', 'value1');
// console.log(map.get('key1')); // "value1"

// Set - Collection of unique values
// const set = new Set([1, 2, 3, 3]);
// console.log(set); // Set { 1, 2, 3 }

// 13. Symbol
// A new primitive data type that is unique and immutable, often used to add unique property keys to an object.
// const sym = Symbol('description');
// const Odj = {
// ['sym']: 'value'
// };
// console.log(Obj[sym]); //value

// 14. Generator Functions - using yield and next()
// Special javascript functions that implement the iterator protocol.
// Generator is a function that can stop midway and continue from where it stopped

// function* generatorFunction() {
//   console.log("Syed");
//   yield "first Name";
//   console.log("Gufran");
//   yield "Last Name";
// }
// const generatorObject = generatorFunction();
// console.log(generatorObject.next().value);
// console.log(generatorObject.next().value);

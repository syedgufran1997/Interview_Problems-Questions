// const array = [1, 2, [3, 4], [4, 5], [6, 7], [8, 9]];
// let result = []; //output [1, 2, 3, 4, 4, 5, 6, 7, 8, 9]
// function flatArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       flatArray(array[i]);
//     } else result.push(array[i]);
//   }
//   return result;
// }
// console.log(flatArray(array));

// SUM of n numbers in closure way (Amazon questins for AS)
// input sum(1)(2)(3)(4)(5)(6)  //output 21
// let sum = function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   };
// };
// const sum = (a) => (b) => b ? sum(a + b) : a;
// console.log(sum(1)(2)(3)(4)(5)(6)());

// Recursion using Linked List for objects list
// const list = {
//   name: "Jhon",
//   age: 15,
//   next: {
//     name: "Lilly",
//     age: 27,
//     next: {
//       name: "Simon",
//       age: 5,
//       next: { name: "Helen", age: 20, next: null },
//     },
//   },
// };

// output all persons in format:
// {name} of age {age} - Recursion
// function AllPersons(list) {
//   if (!list) {
//     return console.log("Finish");
//   }
//   console.log(`${list.name} of age ${list.age}`);
//   AllPersons(list.next);
// }
// AllPersons(list);

// const tree = {
//   name: "john",
//   children: [
//     {
//       name: "Doe",
//       children: [],
//     },
//     {
//       name: "Tony",
//       children: [
//         { name: "Kyle", children: [] },
//         { name: "Sophia", children: [] },
//       ],
//     },
//   ],
// };
// let nameArray = [];
// function ExtractName(tree) {
//   nameArray.push({ firstname: tree.name });
//   for (let child of tree.children) {
//     ExtractName(child);
//   }
//   return nameArray;
// }
// console.log(ExtractName(tree));

// output print names only in an array - Recursion
// expected output [  {firstName: 'Jhon'}, {firstName: 'Lilly'},
//    {firstName: 'Simon'},firstName: 'Helen'}  ]
// let namesArray = [];
// function recurrArray(list) {
//   if (!list) {
//     return;
//   }
//   namesArray.push({ firstName: list.name });
//   recurrArray(list.next);
//   return namesArray;
// }
// console.log(recurrArray(list));

// const users = [
//   {
//     firstname: "John",
//     lastname: "Smith",
//     age: 21,
//   },
//   {
//     firstname: "John0",
//     lastname: "Smith0",
//     age: 21,
//   },
//   {
//     firstname: "John1",
//     lastname: "Smith1",
//     age: 75,
//   },
//   {
//     firstname: "John2",
//     lastname: "Smith2",
//     age: 50,
//   },
// ];
// result {21: 2, 50: 1, 75: 1}
// const result = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age]++;
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(result);

// find the same as above using reduce method
// const result = users.reduce((acc, curr) => {
//   if (curr.age < 30) {
//     return curr.firstname;
//   }
//   return acc;
// }, []);

// Implement this unique fn which increment the value after each call
// no global variable no args
// unique()-> 1
// unique()-> 2
// unique()-> 3
// unique()-> 4
// function UniqueFunction() {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// }
// const CounterFunction = UniqueFunction();
// console.log("first call", CounterFunction());
// console.log("second call", CounterFunction());
// console.log("Third call", CounterFunction());
// console.log("Fourth call", CounterFunction());

// find max number
// const array = [1, 2, 4, 6, 8, 9];
// const output = array.reduce((acc, curr) => {
//   if (curr > acc) {
//     acc = curr;
//   }
//   return acc;
// }, 0);
// console.log(output);

// function Fibonacci(n) { // output [0, 1, 1, 3, 5, 7, 9]
//   let array = [0, 1];
//   for (let i = 2; i < n; i++) {
//     let a = i - 1;
//     let b = i - 2;
//     array.push(a + b);
//   }
//   return array;
// }
// console.log(Fibonacci(7));

// const arr = [1, 2, 3, [4, 5, 6, [7, 8, [9, 10], [11, 12]]]];
// function flattenArray() {
//   let newArray = [];
//   function flatArray(arr) {
//     for (let element of arr) {
//       if (Array.isArray(element)) {
//         flatArray(element);
//       } else {
//         newArray.push(element);
//       }
//     }
//   }
//   flatArray(arr);
//   return newArray;
// }
// console.log(flattenArray(arr));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// function reverseArray() {
//   let newArray = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       newArray.push(arr[i]);
//     } else {
//       for (let j = arr.length - 1; j >= 0; j--) {
//         if (arr[j] % 2 !== 0) {
//           newArray.push(arr[j]);
//           break;
//         }
//       }
//     }
//   }
//   return newArray;
// }
// console.log(reverseArray());
// console.log(result);
// console.log(reverse);

// const arr = [1, 2, 3, 6, 5, 9, 8, 7];
// function bubbleSort(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = 0; j <= arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let x = arr[i];
//         arr[i] = arr[j];
//         arr[j] = x;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort(arr));

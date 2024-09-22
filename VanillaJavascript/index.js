// scope chain / block scope and shadowing
// Block is also know as Compound statement
// var a = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// Closure
// function C is lexically inside function a
// function a() {
//   let a = 100;
//   function c() {
//     console.log(a);
//   }
//   c();
// }
// a();

// function app() {
//   let count = 0;
//   return function () {
//     return ++count;
//   };
// }

// console.log(app()());
// console.log(app());

// function Counter() {
//   var count = 0;
//   return function incrementCounter() {
//     ++count;
//     console.log(count);
//   };
// }
// const counter1 = Counter();
// counter1();
// counter1();
// counter1();
// const counter1 = Counter();

// First Class Functions
// var b = function (param1) {
//   return param1();
// };
// // xyz is first class function
// function xyz() {
//   return console.log("this is first class function");
// }
// b(xyz);

// HOF Higher Order Functions
// X is Callback function
// function x() {
//   console.log("x is callback");
// }
// // Y is Higher order function
// function y(x) {
//   console.log("y is HOF");
//   x();
// }
// y(x);

// Pure funtions: Always returns same o/p for same i/p
// function PureFuntion() {
//   let sum = 0;
//   sum++;
//   return console.log(sum);
// }
// PureFuntion();
// PureFuntion();

// PureFuntion(12);
// PureFuntion(1, 2);

// Destructuring
// Destructuring is a convenient way of accessing propertis and values from other objects and arrays.
// const person = {
//   name: "John",
//   age: 21,
//   address: {
//     city: "New York",
//     state: "NY",
//   },
// };
// const { name, age, address } = person;

// const array = ["apple", "bat", "cat", "dog", "egg"];
// const [array1, array2, ...rest] = array;
// console.log(rest);
// console.log(array);

// destructuring both objects and arrays at same time
// const groceryList = [
//   { item: "apple", price: 25 },
//   { item: "bat", price: 25 },
//   { item: "tomato", price: 25 },
//   { item: "egg", price: 25 },
// ];
// const [array1] = groceryList;
// const [, { item }] = groceryList;
// console.log(item);

// const users = [["John", "Doe"],["John1", "Doe1"],
// ["John2", "Doe2"],["John3", "Doe3"],["John4", "Doe4"],];
// expected result
// const expectedResult = [
//   {
//     firstname: "John",
//     lastname: "Doe",
//   },
//   {
//     firstname: "John1",
//     lastname: "Doe1",
//   },
//   {
//     firstname: "John2",
//     lastname: "Doe2",
//   },
//   {
//     firstname: "John3",
//     lastname: "Doe3",
//   },
//   {
//     firstname: "John4",
//     lastname: "Doe4",
//   },
// ];
// const result = users.map(([first, last]) => {
//   return { firstname: first, lastname: last };
// });
// console.log(result);

// Promise using settimeout
// const uno = () => {
//   return "I am Uno";
// };
// const duo = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("I am Duo");
//     }, 2000);
//   });
// };
// const thre = () => {
//   return "I am Thre";
// };
// const result = async () => {
//   let R1 = uno();
//   console.log(R1);

//   let R2 = await duo();
//   console.log(R2);

//   let R3 = thre();
//   console.log(R3);
// };
// result(); // uno duo three

// Call Apply and Bind method
// let printfullName = function (hometown, state) {
//   console.log(
//     this.firstname + " " + this.lastname + " " + hometown + " " + state
//   );
// };
// let name2 = {
//   firstname: "john1",
//   lastname: "doe1",
// };
// // call method
// printfullName.call(name2, "cpt", "kar");
// // apply method
// printfullName.apply(name2, ["apply CPT", "KAR"]);
// // bind method
// const printFullname = printfullName.bind(name2, "bind CPT", "kar");
// printFullname();

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function sumNF() {
//   let sum = 0;
//   for (let i = 0; i <= number.length; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumNF(number));

// const sumN = number.reduce((acc, curr) => (acc = acc + curr), 0);
// console.log(sumN);

// function sumFL() {
//   let sum = 0;
//   for (num of number) {
//     sum += num;
//   } return sum;
// }
// console.log("for of loop ", sumFL(number));

// Print sum of 2 numbers is target number in array
// function TargetSum(number, target) {
//   let targetArray = [];
//   for (let i = 0; i < number.length; i++) {
//     for (let j = i + 1; j < number.length; j++) {
//       if (target === number[i] + number[j]) {
//         sumArray.push([number[i], number[j]]);
//       }
//     }
//   }
//   return targetArray;
// }
// TargetSum(number, 9);

// const arr = [1, 2, 3, 4, 2, 3, 9, 6, 5, 7, 8, 5, 2, 8, 1];
// function duplicateNumbers() {
//   const result = arr
//     .filter((item, index) => arr.indexOf(item) === index)
//     .sort((a, b) => a - b);
//   console.log(result);
// }
// duplicateNumbers();

// const arr = ["a", "e", "c", "d", "a", "c", "b", "c", "d", "e"];
// const repeatedNumbers = arr.reduce(
//   (acc, curr) => ((acc[curr] = acc[curr] + 1 || 1), acc),
//   {}
// );
// console.log(repeatedNumbers);

// Find the max value in the array
// const arr = [2,1,4,6,3,5,6,8,7]
// const findMax = (arr) => {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(radius));

// Find max value in array using reduce method
// const output = radius.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);
// console.log(output);

// check if the str1 exists in the string if yes print true else false
// let data = [
//   { fileName: "MoreInfo_syedhu_012132132.pdf" },
//   { fileName: "Denial__012132132.pdf" },
//   { fileName: "MoreInfo_AlenjandraCastilo_012132132.pdf" },
//   { fileName: "Denial_Alenjandra_012132132.pdf" },
//   { fileName: "_syedhu_012132132.pdf" },
// ];

// let str1 = "More Info";
// let str2 = "Denial";

// using for loop
// function checkStringExist(data, str1) {
//   let string1 = str1.split(" ").join("").toLowerCase();
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].fileName.includes(string1)) {
//       return true;
//     }
//     return false;
//   }
// }
// console.log(checkStringExist(data, str1));

// Using Array helper methods
// function result(data) {
//     // let e = "More Info";
//     let e = "Deneil";
//     let value = e.split(" ").join("").toLowerCase();
//   const result = data
//      .map((item) => item.fileName.split("_")[0].toLowerCase())
//      .some((item) => item === value);
//     // .find((item) => (item === value ? (isValid = true) : (isValid = false)));
//   return result;
// }
// console.log(result(data));

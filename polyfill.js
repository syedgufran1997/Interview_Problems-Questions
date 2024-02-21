// POLYFILL FOR ARRAY METHODS - forEach, map, filter, find,
// Polyfill for forEach loop ---------
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((currentvalue, index, arr) => console.log(currentvalue, index, arr) );
// Array.prototype.myforEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };
// arr.myforEach((item, index, arr) => console.log(item, index, arr));

// Polyfill for map method -----------
// const arr = [1, 2, 3, 4, 5];
// Array.prototype.myMap = function(callback){
//   let array = [];
//   for(let i = 0; i < arr.length; i++){
//     array.push(callback(this[i], i , this))
//   }
//   return array;
// }
//const result =  arr.myMap((item, index, arr) =>  item * 2 , index ,arr);
// console.log(result);

// Polyfill for filter method
// const arr = [1, 2, 3, 4, 5];
// Array.prototype.myFilter = function (callback) {
//   let array = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(this[i], i, this)) {
//       array.push(this[i]);
//     }
//   }
//   return array;
// };
// const result = arr.myFilter((item) => item > 3);
// console.log(result);

// Polyfill for find method -------
// const arr = [1, 2, 3, 4, 5];
// const result = arr.find((item) => item > 3);
// console.log(result);

// Array.prototype.myFind = function (callback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(this[i], i, arr)) {
//       return this[i];
//     }
//   }
// };
// console.log(arr.myFind((item) => item > 4));

// Polyfill for reduce method
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reduce((accumulator, currentValue, index, arr) =>
// {return (accumulator + currentValue)}, 0));

// Array.prototype.myReduce = function (callback, initialValue) {
//   let accumulater = initialValue;
//   for (let i = 0; i < arr.length; i++) {
//     accumulater = callback(accumulater, this[i], i, this);
//   }
//   return accumulater;
// };
// console.log(
//   arr.myReduce(
//     (accumulater, currentValue, index, arr) => accumulater + currentValue,
//     0
//   )
// );

// Using Reduce methods in 4 ways
// summing numbers using reduce
// const numbers = [1, 2, 3, 4, 5];
// const total = numbers.reduce((acc, num) => acc + num, 0);
// console.log(total);

// Reducing an array into an object using Reduce
// const fruits = ["apple","mango", "orange", "banana"];
// const tally = fruits.reduce((accumulator, fruit) => {
//   if(accumulator[fruit]){
//     accumulator[fruit] = accumulator[fruit] + 1;
//   }else{
//     accumulator[fruit] = 1
//   };
//   return accumulator
// }, {} )
// console.log(tally)

// Flattening an array using Reduce
// const array = [
//   [1,2,3,4,5],
//   [6,7,8,9,10]
// ]
// const flattened = array.reduce((accumulator, currentValue) => [...accumulator, ...currentValue], [])
// console.log(flattened)

// using reduce to find max number in an Array
// const output = array.reduce((acc, curr) => {
//     if (curr > acc) {
//       acc = curr;
//     }
//     return acc;
//   }, 0);
//   console.log(output);

// using reduce to same age in an array
// const users = [
//     {
//       firstname: "John",
//       lastname: "Smith",
//       age: 21,
//     },
//     {
//       firstname: "John0",
//       lastname: "Smith0",
//       age: 21,
//     },
//     {
//       firstname: "John1",
//       lastname: "Smith1",
//       age: 75,
//     },
//     {
//       firstname: "John2",
//       lastname: "Smith2",
//       age: 50,
//     },
//   ];
//   const result = users.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//       acc[curr.age]++;
//     } else {
//       acc[curr.age] = 1;
//     }
//     return acc;
//   }, {});
//   console.log(result);

// Polyfill for flat array method -----------
// const arr = [1, 2, 3, [4, 5, 6, [7, 8, [9, 10], [11, 12]]]];
// const result = arr.flat()

// Array.prototype.myFlat =
// function flatten(arr) {
//   let flatArray = arr.reduce((acc, curr) => {
//     if (Array.isArray(curr)) {
//       acc = acc.concat(flatten(curr));
//     } else {
//       acc.push(curr);
//     }
//     return acc;
//   }, []);
//   return flatArray;
// }

// function flatten(arr){
//   let flatArray = [];
//   arr.forEach(element => {
//     if(Array.isArray(element)){
//       flatArray = flatArray.concat(flatten(element))
//     }else {
//       flatArray.push(element)
//     }}
//   )
//   return flatArray;
// }
// console.log(flatten(arr));

// Polyfill for Call,Apply, Bind method --------
// let name = {
//   firstName: "Syed",
//   lastName: "Gufran",
// }
// let PrintFullName = function(hometown, state){
//   return console.log( this.firstName + " " + this.lastName + " from " + hometown + " " + state)
// }
// PrintFullName.call(name, "bangalore", "karnataka")
// PrintFullName.apply(name, ["bangalore", "karnataka"])
// let printName = PrintFullName.bind(name,"bangalore" , "Kar")
// printName()

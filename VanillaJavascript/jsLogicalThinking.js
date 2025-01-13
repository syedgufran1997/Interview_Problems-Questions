// const a = 12;
// console.log(a ** 12);  //8916100448256 12 is multiplied 12 times

// function test(){
//     console.log(test.abc)
// }
// console.log(test());  // undefined
// test.abc = 400;
// test.abc = 600;
// console.log(test());  // undefined

// output for test
// undefined
// 600

// console.log({} == {}); // false
// console.log({} === {});  // false

// let a = {name: 'syed'}
// let b = {
//     ...a
// }
// b.name = 'Gufran'
// console.log(a.name); // syed

// let a = 10;
// let b = new Number(10);
// let c = 10;
// console.log(a === b );
// console.log(b === c);

// function test(record){
//     if(record == {age: 18}){
//         console.log("youre an adult");
//     }else if(record == {age: 28}){
//         console.log("you're still an adult");
//     }else{
//         console.log('no record');
//     }
// }
// console.log(test({age: 28}))

// console.log(+true); // 1
// console.log(!'abcd'); // false

// var a = {};
// var b = {key: 'b'}
// var c = { key: "c" };
// a[b]=600;
// b[c]=700;
// // b[b] = 400;
// console.log(a[c]); // 600
// console.log(a[b]); // 600
// console.log(b[b]); // 700
// console.log(b[c]); // 700

// // Round 1
// const arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }
// Answer is 5

// let x = [1, 2, 3];
// let y = [1, 2, 3];
// let z = y;
// console.log(x == y); // false
// console.log(x === y); // false
// console.log(z == y); // true
// console.log(z == x); // false

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);

// const person = {
//   name: "John",
//   age: 30,
// };
// Object.freeze(person);
// person.age = 40;
// console.log(person.age);
// ⦁	A: 30
// ⦁	B: 40
// ⦁	C: TypeError
// ⦁	D: ReferenceError
// ANSWER is = 30 because freeze it freezes all the values and original values doest not change

// let a = [1, 2, 3];
// let b = a;
// b[0] = 100;
// console.log(a);
// // [100, 2, 3]

// console.log(1 < 2 < 3); // true
// console.log(3 > 2 > 1); // false

// let x = 10;
// let y = (x++, x + 1, x * 2);
// console.log(y); // 22
// // (10, 11, 20)

// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C"));
// console.log("D");

// ("A");
// ("D");
// ("C");
// ("B");

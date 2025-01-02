// Problem 1
// function fibonacciN(n){
//     let array = [0 , 1];
//     for(let i = 2; i <= n; i++){
//         let a = i - 1;
//         let b = i - 2;
//         array.push(a + b);
//     }
//     return array;
// }
// console.log(fibonacciN(4))

// Problem 2
// function factorialN(n){
//     let num = 1;
//     for(let i = 2; i <= n;i++){
//         num = num * i
//     }
//     return num;f
// }
// console.log(factorialN(4));

// problem 3
// function recursiveFibonacci(n, arr=[0,1]){
//     if(arr.length >= n){ return arr }
//    const nextFB = arr[arr.length - 1] + arr[arr.length - 2]
//    arr.push(nextFB)
//    return recursiveFibonacci(n, arr);
// }
// console.log(recursiveFibonacci(8));

// problem 4
// function recursiveFactorial(n){
//     if(n === 0){ return 1 }
//     return n *= recursiveFactorial(n - 1);
// }
// console.log(recursiveFactorial(4));

// problem 5
// const words = ["flower", "flow", "flask", "flown"];
// // result = "flow";
// function App(words){
//     words.sort((a,b) => a.length - b.length )
//     console.log(words);
//     let firstWord = words[0];
//     let lastWord = words[words.length - 1]
//     let i = 0;
//     while (i < firstWord.length && firstWord[i] === lastWord[i]) {
//         i++
//     }
//     return firstWord.slice(0,i)
// }
// console.log(App(words))

// problem 6
// const str1 = "abac";
// const str2 = "acba";
// Expected output = true if all str2 letters are in str1 || else false
// function compareStrings(str1, str2){
//     const string2 = str2.split('');
//     for(let char of str1){
//         let index = string2.indexOf(char)
//         if(index === -1){
//             return false
//         };
//         string2.splice(index,1);
//     };
//     return true;
// }
// console.log(compareStrings(str1, str2))

// problem 7
// let input = "hello javascript";
// output = { l: 2, a: 2 };
// function compareCharacters(input){
//   let char = {};
//   let result = {};
//   for (let key of input) {
//     char[key] = (char[key] || 0) + 1;
//   }
//   for(let key in char){
//     if(char[key] >= 2){
//         result[key] = char[key]
//     }
//   }
//   return result;
// }
// console.log(compareCharacters(input));

// problem 8 - Expand string letters to number of time present after letter
// let input = "a2b1cd1e2f";
// // output: aaabbcddeeef;

// function expandString(input) {
//   let outputString = "";

//   for (let i = 0; i < input.length; i++) {
//     let char = input[i];
//     let nextChar = parseInt(input[i + 1]);

//     if (!isNaN(nextChar)) {
//       outputString += char.repeat(nextChar);
//       i++;
//     } else {
//       outputString += char;
//     }
//   }

//   return outputString;
// }
// console.log(expandString(input));

// Problem 9
// Print the sum of all digits
// let arr = [1234, 5678, "apple12", "Bat234k", 1278, 1289]; // output: 86

// const res = arr
//   .join("")
//   .split("")
//   .reduce((sum, e) => {
//     if (!isNaN(e)) sum += +e;
//     return sum;
//   }, 0);

// console.log(res);

// Problem 10
// const anagrams = ["eat", "tea", "tan", "ate", "nat", "bat"];
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// Problem 11
// let string = "hello world";
// expected output = {l: 3}

// function reverseString() {
//   let character = {};

//   for (let char of string) {
//     if (char !== " ") {
//       character[char] = (character[char] | 0) + 1;
//     }
//   }
//   console.log(character);

//   let maxValue = "";
//   let maxCount = 0;

//   for (let key in character) {
//     if (character[key] > maxCount) {
//       maxValue = key;
//       maxCount = character[key];
//     }
//   }

//   return { [maxValue]: maxCount };
// }
// console.log(reverseString());

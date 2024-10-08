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

// function factorialN(n){
//     let num = 1;
//     for(let i = 2; i <= n;i++){
//         num = num * i
//     }
//     return num;
// }
// console.log(factorialN(4));

// function recursiveFibonacci(n) {
//   if (n < 2) { return n }
//   return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// }
// console.log(recursiveFibonacci(4));

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

// const str1 = "abac";
// const str2 = "acba";
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

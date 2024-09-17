// Debouncing in javascript
// let counter = 0;
// const apiCall = () => {
//   console.log("Fetch API Loading....", counter++);
// };
// const debounceMethod = function (fn, delay) {
//   let timer;
//   return function () {
//     let context = this,
//       args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);

//   };
// };
// const betterFunction = debounceMethod(apiCall, 300);

// Throttling in Javascript (walmart)
// let counter = 0;
//   const getData = () => {
//     console.log("Throttling Loading...", counter++);
//   };
//   const ThrottlingMethod = (fn, delay) => {
//     let flag = true;
//     return function () {
//       let context = this,
//         args = arguments;
//       if (flag) {
//         fn.apply(context, args);
//         flag = false;
//         setTimeout(() => {
//           flag = true;
//         }, delay);
//       }
//     };
//   };
//   const betterFunction = ThrottlingMethod(getData, 500);

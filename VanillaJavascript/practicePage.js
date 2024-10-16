// callstack queue
// var x = 7;
// function getName() {
//   console.log("Cognizant");
// }
// getName();
// console.log(x);
// console.log(getName);

// Function Execution in JS
// var x = 1;
// a();
// b();

// function a() {
//   var x = 10;
//   console.log(x);
// }`
// function b() {
//   var x = 100;
//   console.log(x);
// }

// for (let i = 0; i <= 5; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 4000);
//   })(i);
// }
for (var i = 1; i <= 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, i * 2000); // Delay increases by 2 milliseconds for each iteration
  })(i);
}

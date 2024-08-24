// var x = 10;
// function foo() {
//   x = 5;
//   console.log(x); // 5
// }
// foo(); // undefined
// console.log(x); //5

// Output:
// The first console.log(x) inside the foo() function outputs 5.
// The second console.log(x) outside the foo() function also outputs 5.

// Explanation:
// Global Variable Declaration:

// The variable x is declared globally with the value 10 using var.
// Inside the foo Function:

// When the function foo() is called, the code x = 5; is executed.
// Since x is already declared globally, the assignment x = 5; modifies the global variable x.
// The console.log(x); inside the foo() function then prints 5.
// Outside the foo Function:

// After the function foo() has been executed, the global variable x now holds the value 5.
// The console.log(x); outside the function prints 5 because x was modified by the foo function.
// Key Points:
// The variable x is declared with var, making it a global variable.
// The function foo() modifies the global x from 10 to 5.
// Both console.log(x); statements print 5 because the global variable x has been altered within the function.
// Summary:
// The global variable x starts with the value 10.
// The foo function changes this value to 5.
// Both log statements reflect this change, outputting 5.

// let x = "5";
// let y = 2;
// console.log(x + y);
// console.log(x - y);

// Output:
// x + y results in "52".
// x - y results in 3.

// Explanation:
// x + y:
// In JavaScript, the + operator, when used between a string and a number, results in string concatenation.
// Here, x is a string ("5") and y is a number (2).
// So, "5" + 2 results in "52", where the number 2 is converted to a string and concatenated to "5".
// x - y:

// The - operator only works with numbers in JavaScript. So, when you use -, JavaScript tries to convert the string "5" into a number.
// "5" is successfully converted to the number 5, and then 5 - 2 is calculated.
// Thus, 5 - 2 results in 3.
// Summary:
// The + operator leads to string concatenation if any operand is a string.
// The - operator forces both operands to be treated as numbers, so type conversion occurs where necessary.

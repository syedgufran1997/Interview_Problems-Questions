// Problem 1
const person = {
  name: "Sarah",
  arrowFunc: function () {
    console.log(this.name); // this will refer to 'person'
  },
};
person.arrowFunc(); // Sarah

// Problem 2
const obj = {
  name: "Tom",
  showName: function () {
    console.log(this.name);
  },
};
const reference = obj.showName;
reference(); // undefined
obj.showName(); // Tom

// Problem 3
console.log(foo); // Undefined
var foo = function () {
  console.log("Function expression"); // Function expression
};
foo();
// undefined
// Function expression

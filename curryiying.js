// Currying in javascript is a technique in functional programming where a function that takes
// multiple arguments is transformed into sequence of functions, each taking a single argument

// function currying using closures mehtod
function CurryingFunctions(a) {
  let sum = 0;
  return function (b) {
    return function (c) {
      return (sum = a + b + c);
    };
  };
}

console.log(CurryingFunctions(1)(2)(3));

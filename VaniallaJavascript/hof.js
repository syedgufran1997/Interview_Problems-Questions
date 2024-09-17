// Higher Order Functions
// A function which is passed into another functions as an argument or returns a
// function from it is called higher order function.

// DRY = Dont Repeat Yourself

const radius = [3, 5, 7];
const circumference = (radius) => {
  return 2 * Math.PI * radius;
};
const area = (radius) => {
  return Math.PI * radius * radius;
};
const Diameter = (radius) => {
  return 2 * radius;
};

const CircumferenceOfCircle = (radius, logic) => {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
// console.log(CircumferenceOfCircle(radius, area));
// console.log(CircumferenceOfCircle(radius, circumference));
// console.log(CircumferenceOfCircle(radius, Diameter));

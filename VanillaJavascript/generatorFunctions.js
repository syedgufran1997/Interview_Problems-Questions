// Genetrators are special Javascript functions that implement iterator protocol,
// This funtions can stop midway and then continue from where it stopped.
// The Generator is a function which returns an object on which you can call using next()

function* generatorFunction() {
  console.log("This will execute first");
  yield "Hello ,";

  console.log("i will print after pause");
  yield "World !";
  // after this it will print undefined as there is no value
}
const generatorObject = generatorFunction();
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);

// Best example for Generator Functions usinf Infinite Data Streams
// Please console each one and check the values for better understanding
function* naturalNumbers() {
  let num = 1;
  while (true) {
    yield num;
    num = ++num;
  }
}
const numbers = naturalNumbers();

// console.log(numbers.next().value);
// console.log(numbers.next().value)
// console.log(numbers.next().value)

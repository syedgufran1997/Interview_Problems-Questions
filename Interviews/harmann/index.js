// react and Javascript basics

// 1. What is promise in javascript?
// 2. How to create custom hooks in react?
// 3. what/How to create HOC in react?
// 4. What are keys in react?
// 5. what is Virtual DOM?
// 6. What is Array.prototype in react
// 7. what is diff btn forEach loop and map method

let input = "hello javascript";
// output = { l: 2, a: 2 };

function result(input) {
  let count = {};
  let output = {};
  for (let char of input) {
    if (char !== " ") {
      count[char] = (count[char] || 0) + 1;
    }
  }

  for (let char in count) {
    if (count[char] === 2) {
      output[char] = count[char];
    }
  }
  return output;
}

console.log(result(input));

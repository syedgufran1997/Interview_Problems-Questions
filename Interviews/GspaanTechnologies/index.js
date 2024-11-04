input = [
  [1, 1, 2, 5, 8],
  [4, 5],
  [3, 6, 9, 1, 7],
];
// output=[1,4,3,5,6,2,9,8,7]

function result(input) {
  let output = [];

  for (let i = 0; i < input.length; i++) {
    let a = input[i];
    if (Array.isArray(a)) {
      let value = a[0];
      output.push(value);
    }
  }

  return output;
}
console.log(result(input));

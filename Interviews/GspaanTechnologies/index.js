let input = [
  [1, 1, 2, 5, 8],
  [4, 5],
  [3, 6, 9, 1, 7],
];
// output=[1,4,3,5,6,2,9,8,7]

function result(input) {
  let output = [];

  let maxLength = Math.max(...input.map((item) => item.length));

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[j][i] !== undefined) {
        output.push(input[j][i]);
      }
    }
  }

  let finalResult = [...new Set(output)];

  return output;
}
console.log(result(input));

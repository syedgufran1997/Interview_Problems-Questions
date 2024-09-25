let input = "a2b1cd1e2f";
// output: aaabbcddeeef;

function expandString() {
  let output = "";

  for (i = 0; i < input.length; i++) {
    let char = input[i];
    let nextChar = parseInt(input[i + 1], 10);
    if (!isNaN(nextChar)) {
      output += char.repeat(nextChar);
      i++;
    } else {
      output += char;
    }
  }
  return output;
}

console.log(expandString());

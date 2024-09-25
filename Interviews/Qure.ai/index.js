/* function App() {
  return function() {
    return sum++
    let sum = 0;
    console.log(sum)
    var sum = 20;
  }
 }
 const result = App()(); */
/* console.log(result()) */
/* console.log(result())
console.log(result()) */
const words = ["flower", "flow", "flask", "flown"];
// result = "flow"
function prefixString(words) {
  let prefixValue = {};
  let result = "";

  for (let char of words) {
    prefixValue[char] = (prefixValue[char] || 0) + 1;
  }
}

console.log(prefixString(words));

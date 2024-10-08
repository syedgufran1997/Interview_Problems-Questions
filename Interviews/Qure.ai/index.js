// cookies, authentication,
// what all storages we have in browser
// are cookies session or broswer oriented and how they work for autihentication
// if we have 2 logins can i accces credential/cookies of login 1 in login 2 console

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
result = "flow";

const longetCommonPrefix = (words) => {
  words.sort((a, b) => a.length - b.length);
  console.log(words);

  const first = words[0];
  const last = words[words.length - 1];

  let i = 0;

  while (i < first.length && first[i] === last[i]) {
    i++;
  }

  return first.slice(0, i);
};

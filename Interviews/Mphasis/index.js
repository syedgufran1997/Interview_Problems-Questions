// Fetch api and show results in react
// Javascript Anagram problem

// check if all the values in str1 is in str2 then print true or false
const str1 = "abac";
const str2 = "acba";

function areValuesIn(str1, str2) {
  // Convert str2 into an array to allow removal of characters
  let str2Array = str2.split("");
  for (let char of str1) {
    const index = str2Array.indexOf(char);
    if (index === -1) {
      // Character from str1 is not found in str2
      return false;
    }
    // Remove the character from str2Array to avoid duplicate counting
    str2Array.splice(index, 1);
  }
  return true;
}
console.log(areValuesIn(str1, str2));

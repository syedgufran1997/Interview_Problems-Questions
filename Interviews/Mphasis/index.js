// Role: React Js developer 5pm
// Date: 30/Aug/2024

// Fetch api and show results in react
// Javascript Anagram problem

// check if all the values in str1 is in str2 then print true or false
const str1 = "abac";
const str2 = "acba";

// const str1 = "abacd";
// const str2 = "acba";

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

// Explanation
// Convert str2 to an Array:
// We first convert str2 to an array (str2Array) so that we can modify it by removing characters as we find matches.
// Loop through str1:
// For each character in str1, we check if it exists in str2Array using the indexOf method.
// indexOf returns the index of the character if it exists in the array, or -1 if it doesn't.
// Character Matching:
// If the character from str1 is found in str2Array, we remove it using splice to ensure that it can't be matched again.
// If the character isn't found, the function returns false immediately.
// Return true:
// If all characters in str1 are found and removed from str2Array, then str1's characters are all in str2, and the function returns true.

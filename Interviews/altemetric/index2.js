// const sampleObject = {
//   name: "syed",
//   age: "26",
//   address: {
//     homeAddress: "Bangalore",
//   },
// };

// const {
//   name,
//   age,
//   address: { homeAddress },
// } = sampleObject;
// console.log(homeAddress);

// const evenOdd = (n) => new Promise((resolve, reject) => {
//   if(n % 2 === 0){
//     resolve(`${n} is even`)
//   }else if(n % 2 !== 0){
//     reject(`${n} is not even `)
//   }
// })

// evenOdd(3)
// .then(response => console.log(response))
// .catch(error => console.log(error))

// output: aaabbcddeeef;
let input = "a2b1cd1e2f";

// Please provide the solution for this approach
function repeatedCount(input) {
  let output = "";

  let spiltArray = input.split("");

  //   for (let i = 0; i < spiltArray; i++) {
  //     if (!isNaN(i)) {
  //       return i;
  //       repeatedCount(input);
  //     }
  //   }

  return spiltArray;

  // join
}

console.log(repeatedCount(input));

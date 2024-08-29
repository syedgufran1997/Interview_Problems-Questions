// const person = {
//   name: "John",
//   age: 21,
//   address: {
//     city: "New York",
//     state: "NY",
//   },
// };

// Shallow Copy: Where original Object values are changed -----
// let ShallowCopy = person;
// ShallowCopy.name = "Doe";

// console.log("person", person); // Doe - changed
// console.log("ShallowCopy", ShallowCopy); - changed

// Deep Copy: where original object values are not Changed -----
// let deepCopy = JSON.parse(JSON.stringify(person));
// deepCopy.name = "Parse method";

// console.log("person", person); // John - unchanged
// console.log("DeepCopy", deepCopy); // unchanged

// Destructuring method in array and object using map -----
// users = [S
//     ["John", "Doe"],
//     ["John1", "Doe1"],
//     ["John2", "Doe2"],
//     ["John3", "Doe3"],
//     ["John4", "Doe4"],
//   ];
// const expectedResult = [
//   { firstname: "John",lastname: "Doe",},
//   {firstname: "John1",lastname: "Doe1",},
//   { firstname: "John2",lastname: "Doe2",},
//   { firstname: "John3",lastname: "Doe3",},
//   {firstname: "John4",lastname: "Doe4",}
// ];
//   const result = users.map(([first, last]) => {
//     return { firstname: first, lastname: last };
//   });
//   console.log(result);

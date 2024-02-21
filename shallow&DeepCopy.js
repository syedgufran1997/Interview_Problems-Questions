// Shallow Copy: Where original Object values are also changed
// let ShallowCopy = person;
// ShallowCopy.name = "Doe";

// console.log("person", person);
// console.log("ShallowCopy", ShallowCopy);

// Deep Copy: where original object values are not Changed
// method 1
// let DeepCopy = { ...person };
// DeepCopy.name = "Spred Operators";

// method 2
// let deepCopy = Object.assign({}, person);
// deepCopy.name = "Assign Method";

// method 3
// let deepCopy = JSON.parse(JSON.stringify(person));
// deepCopy.name = "Parse method";

// console.log("person", person);
// console.log("DeepCopy", deepCopy);

// Destructuring method in array and object using map
// users = [
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

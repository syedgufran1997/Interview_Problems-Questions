// const array = [
//   { severity: 10 },
//   { severity: 100 },
//   { severity: 20 },
//   { severity: 90 },
//   { severity: 50 },
//   { severity: 40 },
//   { severity: 20 },
// ];
// expected answer = [100, 90, 50, 40, 20]

// const result = array.map(({ severity }) => severity).sort((a, b) => b - a);

// console.log(result);

// const filArr = result.filter((item, index) => result.indexOf(item) === index).slice(0, 5)

// console.log(filArr);

// On the following ArrayList:
// [{"severity":10},{"severity":100},{"severity":20},{"severity":90},{"severity":50},{"severity":40},{"severity":20}]
// Pick the values, remove the duplicates, sort the values in descending order, then show the first 5 values only:
// Result: [100, 90, 50, 40, 20]

// const array = [
//   { severity: 10 },
//   { severity: 100 },
//   { severity: 20 },
//   { severity: 90 },
//   { severity: 50 },
//   { severity: 40 },
//   { severity: 20 },
// ];

// function output(array) {
//   // const result = array.filter((items, index) => array.indexOf(items.severity) !== index )
//   // .sort((a,b) => b.severity - a.severity)
//   // .slice(0, 6);

//   // return result;

//   const result = array.map(({ severity }) => severity).sort((a, b) => b - a);

//   const filterArr = result.filter(
//     (value, index) => array.indexOf(value) === index
//   );

//   // result.filter((item, index) => array.indexOf(item) === index);
//   // .slice(0, 6);

//   return result;
// }

// console.log(output(array));

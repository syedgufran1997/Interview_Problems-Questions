function counter() {
  let count = 0;
  return function a() {
    return count++;
  };
}

let counter1 = counter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

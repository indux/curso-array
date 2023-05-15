const numbers = [1, 30, 49, 29, 10, 13];

// FOR

let forFind = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 30) {
    forFind = element;
    break;
  }
}

// FIND

const find = numbers.find((item) => item === 30);

// CONSOLE LOG

console.log("for", forFind);
console.log("find", find);

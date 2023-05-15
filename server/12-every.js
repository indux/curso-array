const numbers = [1, 30, 39, 29, 10, 13];

// FOR

let forEvery = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    forEvery = false;
  }
}

// EVERY

const every = numbers.every((item) => item <= 40);

// CONSOLE LOG

console.log("for", forEvery);
console.log("every", every);

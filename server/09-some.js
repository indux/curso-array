const numbers = [1, 2, 3, 4];

// FOR

let forSome = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    forSome = true;
    break;
  }
}

// SOME

const some = numbers.some((item) => item % 2 === 0);

// CONSOLE LOG

console.log("for", forSome);
console.log("some", some);

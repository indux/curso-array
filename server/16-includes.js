const pets = ["cat", "dog", "bat"];

// FOR

let forIncludes = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "cat") {
    forIncludes = true;
    break;
  }
}

// FIND

const find = pets.includes("cat");

// CONSOLE LOG

console.log("for", forIncludes);
console.log("find", find);

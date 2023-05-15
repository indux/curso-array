const elements = ["Fire", "Air", "Water"];

// FOR

let forJoin = "";
const separetor = "--";
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  forJoin = forJoin + element + separetor;
}

// JOIN

const join = elements.join("-");

// CONSOLE LOG

console.log("for", forJoin);
console.log("join", join);

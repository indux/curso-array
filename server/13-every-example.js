const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

// MAP (SACAR EDADES)

const edad = team.map((item) => item.age);

// EVERY (VERIFICAR SI TODOS SON MAYORES DE 15)

const verificar = team.every((edad) => edad <= 15);

// CONSOLE LOG

console.log(edad);
console.log(verificar);

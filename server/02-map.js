const letters = ["a", "b", "c"];

// METODOD DE MAPEO CON FOR

const forArr = [];
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  forArr.push(element + " For");
}

// METODO DE MAPEO CON FOR EACH

const forEachArr = [];
letters.forEach((element) => {
  forEachArr.push(element + " forEach");
});

// METODO DE MAPEO CON MAP (EL MEJOR Y MÁS USADO)

const mapArr = letters.map((item) => item + " Map");

// CONSOLE LOG

console.log("original", letters);
console.log("nuevo - for", forArr);
console.log("nuevo - foreach", forEachArr);
console.log("nuevo - map", mapArr);

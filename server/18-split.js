const title = "Curso de Manipulación de Array";

// SPLIT (DIVIDIR TODO EN UN ARRAY)

const split = title.split(" ");

// JOIN (SEPARANDOLOS CON UN (-) PERFECTO PARA URLs)

const join = split.join("-");

// LOWER CASE (PASAR TODAS LAS MAYUSCULAS A MINUSCULAS)

const lower = split.toLowerCase();

// URL FINAL (TODO EN UNA LINEA DE CODIGO)

const url = title.split(" ").join("-").toLowerCase();

// CONSOLE LOG

console.log(split);
console.log(join);
console.log(lower);
console.log(url);

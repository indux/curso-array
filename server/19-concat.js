const elements = [1, 2, 3, 4];
const otherElements = [5, 6, 7, 8];

// FOR

const forConcat = [...elements];
for (let index = 0; index < otherElements.length; index++) {
  const element = otherElements[index];
  forConcat.push(element);
}

// CONCAT

const concat = elements.concat(otherElements);

// OTRA FORMA (ES OPCIONAL, PERO MUY MAL RECOMENDADA)

const extraConcat = [...elements, ...otherElements];

// CONSOLE LOG

console.log("for", forConcat);
console.log("concat", concat);
console.log("extra", extraConcat);

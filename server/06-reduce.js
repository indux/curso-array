const totals = [1, 2, 3, 4, 5];

// FOR

let sum = 0; 
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum = sum + element;
}

// REDUCE

const reduce = totals.reduce((sum, element) => sum + element, 0);

// CONSOLE LOG

console.log("for", sum);
console.log("reduce", reduce);

const array = ['a', 'bb', 'ccc']; 
const rta = array.map(item => item.length);

console.log(rta)
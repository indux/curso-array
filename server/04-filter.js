const words = ["spray", "limit", "elites", "exuberant"];

// FILTER USANDO FOR

const forArr = [];
for (let index = 0; index < words.length; index++) {
  const item = words[index];
  if (item.length >= 6) {
    forArr.push(item);
  }
}

// FILTER

const filter = words.filter((item) => item.length >= 6);

// CONSOLE LOG

console.log("original", words);
console.log("nuevo - for", forArr);
console.log("nuevo - filter", filter);

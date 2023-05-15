const users = [
  { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "Mike", attributes: ["Lovely"] },
  { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

// UNIENDO MAP Y FLAT

const getAttributes = users.map((user) => user.attributes).flat();

// FLATMAP

const getFlatMap = users.flatMap((user) => user.attributes);

// CONSOLE LOG

console.log("map y flat", getAttributes);
console.log("flatmap", getFlatMap);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  }, 
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

// SOME

const some = orders.some((item) => item.delivered);

// CONSOLE LOG

console.log(some);

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

// MAP

const newArr = orders.map((item) => item.total);

// TRANFORMATION

const newTran = orders.map((item) => {
  return {
    ...item,
    iva: 19,
  };
});

// TRANFORMATION MALA (CAMBIA EL ORIGINAL)

const newFailTran = orders.map((item) => {
  item.iva = 40;
  return item;
});

// CONSOLE LOG

console.log("original", orders);
console.log("nuevo", newArr);
console.log("tranformación", newTran);
console.log("tranformación mala", newFailTran);

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

// FILTER (ORDENES ENTREGADAS Y MAYORES A 120 EN PRECIO)

const filter = orders.filter((item) => item.delivered && item.total >= 120);

// BUSCADOR POR NOMBRES O COMO COMIENCEN

const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};

// CONSOLE LOG

console.log("original", orders);
console.log("filter", filter);
console.log("buscador", search("Vale"));

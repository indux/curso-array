const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const update = {
  id: "🥞",
  changes: {
    price: 200,
    description: "delicioso!",
  },
};

const getProduct = products.findIndex((item) => item.id === update.id);
products[getProduct] = {
  ...products[getProduct],
  ...update.changes,
};

console.log(products);

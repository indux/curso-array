const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

// MUTABLE (OBTENER HAMBURGUESA MUTANDO EL ORIGINAL)

const myProducts = [];
const getProduct = products.findIndex((item) => item.id === "🍔");
if (getProduct !== -1) {
  myProducts.push(products[getProduct]);
  products.splice(getProduct, 1);
}

// CONSOLE LOG

console.log("products", products);
console.log("myProducts", myProducts);

const express = require("express");
const app = express();
const { products } = require("./2-express-tutorial/data");

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1>Get List of Products</h1><p><a href="/products">Products</a></p>'
    );
});
app.get("/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, image, name } = product;
    return { id, image, name };
  });
  res.status(200).json(newProducts);
});
app.get("/product/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!product) return res.status(404).send("Product doesnot exist");
  res.json(singleProduct);
});
app.listen(5000, () => {
  console.log("Server is listening  on port 5000...");
});

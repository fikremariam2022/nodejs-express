const express = require("express");
const app = express();
const { products } = require("./2-express-tutorial/data");

app.get("/api/v1/product", logger, (req, res) => {
  res.send("Product Page");
});

app.listen(5000, () => {
  console.log("Server is listening  on port 5000...");
});

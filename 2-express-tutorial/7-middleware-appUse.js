const express = require("express");
const app = express();
const { products } = require("./2-express-tutorial/data");

const { logger } = require("./2-express-tutorial/logger");
app.use("/api/v2/products", logger);
app.get("/api/v1/product", logger, (req, res) => {
  res.send("Product Page");
});

app.listen(5000, () => {
  console.log("Server is listening  on port 5000...");
});

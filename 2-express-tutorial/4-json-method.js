const express = require("express");
const app = express();
const { product } = require("./data");

app.get("/data", (req, res) => {
  res.json(product);
});
app.listen(5000, () => {
  console.log("listening...");
});

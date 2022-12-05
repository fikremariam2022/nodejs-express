const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res
    .status(200)
    .sendFile(path.resolve(__dirname, "2-express-tutorial/home.html"));
});
app.get("/about", (req, res) => {
  res
    .status(200)
    .send(path.resolve(__dirname, "2-express-tutorial/about.html"));
});
app.get("*", (req, res) => {
  res.status(404).send("<h1>Page was not found</h1>");
});
app.listen(5000, () => {
  console.log("listening port 5000...");
});

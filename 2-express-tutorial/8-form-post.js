const express = require("express");
const app = express();
app.use(express.json());
const authorize = require("./2-express-tutorial/authorize");

//app.use(express.urlencoded({ extended: false }));
app.post("/", (req, res) => {
  console.log(req.body);
  const { name } = req.body.user;
  if (name) {
    res.status(200).send(`Welcome ${name}`);
    return;
  }
  res.status(401).send("Error! You have not provided name.");
});

app.listen(5000, () => {
  console.log("Server is listening  on port 5000...");
});

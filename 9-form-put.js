const express = require("express");
const app = express();
app.use(express.json());
const authorize = require("./2-express-tutorial/authorize");
const { products, people } = require("./2-express-tutorial/data");

app.put("api/people/:id", authorize, (req, res) => {
  const { id } = req.params.id;
  const { name } = req.body.user;

  const person = people.find((p) => p.id === Number(id));

  if (!person) {
    res.status(404).json({
      success: false,
      msg: `No prouduct was found with requested id: ${req.params.id}`,
    });
    return;
  }
  user.name = name;
  res.status(200).json({ success: true, data: user });
});

app.listen(5000, () => {
  console.log("Server is listening  on port 5000...");
});

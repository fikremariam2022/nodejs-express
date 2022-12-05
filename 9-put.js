const express = require("express");
const app = express();
app.use(express.json());
let { people } = require("./2-express-tutorial/data");

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;

  const person = people.find((p) => p.id === Number(id));

  if (!person) {
    res.status(404).json({
      success: false,
      msg: `No person with id: ${id}`,
    });
    return;
  }
  people = people.filter((p) => {
    return p.id !== Number(id);
  });

  res.status(200).json({ success: true, data: [...people] });
});

app.listen(5000, () => {
  console.log("Server is listening  on port 5000...");
});

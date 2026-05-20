const express = require("express");

const app = express();

app.use(express.json()); //middleware for req body data reading

const notes = [];

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.send("note created");
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});

const express = require("express");

const app = express();

const notes = [];

app.use(express.json());
app.get("/", (req, res) => res.send("Hello"));

// post
app.post("/notes", (req, res) => {
  notes.push(...req.body);

  res.status(201).json({
    message: "Note created successfully...",
  });
});

// get

app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Note has been sent to client side successfully...",
    notes: notes,
  });
});

//delete /notes/:index

// app.delete("/notes/:idx", (req, res) => {
//   delete notes[req.params.idx];

//   res.status(204).json({
//     message: "Note is deleted successfully...",
//   });
// });

app.delete("/notes/:idx", (req, res) => {
  notes.splice(req.params.idx, 1);

  res.status(200).json({
    message: "Note is deleted successfully...",
  });
});

// patch - update the particular part of the data

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].description = req.body.description;

  res.status(200).json({
    message: "Note updated successfully....",
  });
});
module.exports = app;

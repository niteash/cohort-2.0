const express = require("express");
const noteModel = require("./models/note.models");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

//post = /api/notes (create new note)

app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;
  const note = await noteModel.create({
    title,
    description,
  });

  res.status(201).json({
    message: "Note has been created Successfully...",
    note,
  });
});

//get - /api/notes (fetch notes from database)

app.get("/api/notes", async (req, res) => {
  const notes = await noteModel.find();

  res.status(200).json({
    message: "Notes has been fetched successfully...",
    notes,
  });
});

//delete - /api/notes/:id (delete from database)

app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const deletedNote = await noteModel.findByIdAndDelete(id);
  console.log(id);

  res.status(200).json({
    message: "Note deleted successfully...",
    deletedNote,
  });
});

//patch - /api/notes/:id (update the data)
//- req.body = {description}

app.patch("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;

  //method
  const noteUpdated = await noteModel.findByIdAndUpdate(id, { description });

  res.status(200).json({
    message: "Note updated successfully...",
    noteUpdated,
  });
});

console.log(__dirname);

// wildcard route

app.use("*name", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));
});

module.exports = app;

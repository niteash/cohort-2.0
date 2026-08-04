import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [notes, setnotes] = useState([
    {
      title: "test title 1 ",
      description: "Hello,world this is test desctiption 1",
    },
    {
      title: "test title 2 ",
      description: "Hello,world this is test desctiption 2",
    },
    {
      title: "test title 3",
      description: "Hello,world this is test desctiption 3",
    },
    {
      title: "test title 4",
      description: "Hello,world this is test desctiption 4",
    },
  ]);

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setnotes(res.data.notes);
    });
  }
  useEffect(() => {
    fetchNotes();
  }, []);

  function HandleSubmit(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;

    console.log(title.value, description.value);

    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      });
  }

  function HandleDeleteNote(noteId) {
    axios.delete("http://localhost:3000/api/notes/" + noteId).then((res) => {
      console.log(res.data);
      fetchNotes();
    });
  }

  function HandleUpdate(noteId) {
    const newDescription = prompt("Enter the new description");
    axios
      .patch("http://localhost:3000/api/notes/" + noteId, {
        description: newDescription,
      })
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      });
  }
  return (
    <>
      <form className="note-create-form" onSubmit={HandleSubmit}>
        <input name="title" type="text" placeholder="Enter the title" />
        <input
          name="description"
          type="text"
          placeholder="Enter the Description"
        />
        <button>Create note</button>
      </form>
      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button
                onClick={() => {
                  HandleDeleteNote(note._id);
                }}
              >
                Delete
              </button>

              <button
                onClick={() => {
                  HandleUpdate(note._id);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

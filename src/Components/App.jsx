import React, { useState } from "react";

import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevVal) => {
      return [...prevVal, newNote];
    });
  }

  function removeNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onChecked={removeNote}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;

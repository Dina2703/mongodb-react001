import { useEffect, useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([
    {
      title: "",
      content: "",
    },
  ]);

  useEffect(() => {
    fetch("/notes")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => setNotes(data));
  });
  return (
    <div className="container">
      <h3>Notes</h3>
      {notes.map((note) => (
        <div>
          <h1>{note.title}</h1>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Notes;

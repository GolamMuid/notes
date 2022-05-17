import React, { useState } from "react";
import "./CreateNote.css";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const addEvent = (e) => {
    e.preventDefault();

    props.passNote(note);

    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={InputEvent}
          placeholder="Title"
          autoComplete="off"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={InputEvent}
          placeholder="Write a note"
        />
        <button onClick={addEvent}>Submit</button>
      </form>
    </div>
  );
}

export default CreateNote;

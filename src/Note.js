import React from "react";
import "./Note.css";

function Note(props) {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <div className="note">
      <div className="note-title"> {props.title} </div>
      <br />
      <div className="note-content"> {props.content} </div>
      <button onClick={deleteNote}> Delete </button>
    </div>
  );
}

export default Note;

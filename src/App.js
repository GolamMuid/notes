import { useState } from "react";
import CreateNote from "./CreateNote";
import Header from "./Header";
import Note from "./Note";
import "./App.css";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevValue) => {
      return [...prevValue, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((prevValue) =>
      prevValue.filter((currentValue, index) => {
        return index !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="note-container">
        {addItem.map((value, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={value.title}
              content={value.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;

import React from "react";
import notes from "../assets/data";
// import ListItem from "./components/ListItem";
import Note from "./Note";
import ListItem from "../components/ListItem";
const NotesPage = () => {
  return (
    <div className="notes">
         <div className="notes-header">
            <h2 className="notes-title">&#9782;Notes</h2>
            <p className="notes-count"> {notes.length}</p>
        </div>
        <div className="notes-list">
        {notes.map((note,key) => (
        <ListItem key={key} note={note}/>
      ))}
        </div>
     
    </div>
  );
};

export default NotesPage;

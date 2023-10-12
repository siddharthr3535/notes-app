import React, { useEffect, useState }  from "react";
// import notes from "../assets/data";
// import ListItem from "./components/ListItem";
import AddButton from "../components/AddButton";
import Note from "./Note";
import ListItem from "../components/ListItem";
const NotesPage = () => {
  useEffect(() => {
    getNotes()
  },[])
  let [notes,setNotes] = useState([]);
  const getNotes = async () => {
    let response= await fetch('http://localhost:5000/notes') 
    let data = await response.json()
    setNotes(data);
  }
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
     <AddButton/>
    </div>
  );
};

export default NotesPage;

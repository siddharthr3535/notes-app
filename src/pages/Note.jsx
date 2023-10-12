import React, { useEffect, useState } from "react";

// import notes from "../assets/data";
import "../App.css";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";
const Note = ({ match }) => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [note, setNote] = useState(null);
  useEffect(() => {
    
    getNote();
  }, [id]);
  // let note = notes.find((note) => note.id == id);
  const getNote = async () => {
    if(id==='new') return
    const response = await fetch(`http://localhost:5000/notes/${id}`);
    let data = await response.json();
    setNote(data);
  };
  let createNote= async () => {
    await fetch('http://localhost:5000/notes/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({...note,'updated':new Date()})
    })
  }
  let updateNote= async () => {
    await fetch(`http://localhost:5000/notes/${id}/`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({...note,'updated':new Date()})
    })
  }
  let handleSubmit = () => {
    if(id!== 'new' && !note.body){
      deleteNote()
    }
    else if(id!=='new')
    updateNote()
  else if (id==='new' && note!==null){
    createNote()
  }
    navigate('/')
  }

  let deleteNote = async() => {
    await fetch(`http://localhost:5000/notes/${id}/`,{
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
  })
    navigate('/')
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to={"/"}>
            <ArrowLeft onClick={handleSubmit}/>
          </Link>
        </h3>
        {console.log("dei inna da" , id)}
        {id!=='new'? (
  <button onClick={deleteNote}>Delete</button>
) : (
  <button onClick={handleSubmit}>Done</button>
)}

       
      </div>
      <textarea onChange={(e) => {setNote({...note,'body':e.target.value})}} value={note?.body}></textarea>
    </div>
  );
};

export default Note;

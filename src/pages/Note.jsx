import React from "react";
import notes from "../assets/data";
import "../App.css";
import { useParams } from "react-router-dom";
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import { Link } from "react-router-dom";
const Note = ({ match }) => {
  let { id } = useParams();
  let note = notes.find((note) => note.id == id);
  return (
    <div className="note">
      <div className="note-header">
        <h3>
        <Link to ="/">
            <ArrowLeft/>
        </Link>
        </h3>
        
      </div>
      <textarea value={note?.body}></textarea>
    </div>
  );
};

export default Note;

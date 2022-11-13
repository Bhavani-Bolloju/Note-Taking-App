import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import classes from "./NoteList.module.css";

const NoteList = function (props) {
  return (
    <div className={classes.noteList}>
      {props.noteList.map((note) => (
        <Note
          title={note.text}
          key={note.id}
          id={note.id}
          date={note.date}
          onDeleteNote={props.onDelete}
        />
      ))}

      <AddNote onNewItem={props.onNewNote} />
    </div>
  );
};

export default NoteList;

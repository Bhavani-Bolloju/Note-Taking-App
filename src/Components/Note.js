import React from "react";
import { MdDeleteForever } from "react-icons/md";
import classes from "./Note.module.css";

const Note = function ({ id, date, title, onDeleteNote }) {
  return (
    <div className={classes.note}>
      <p className={classes.text}>{title}</p>
      <div className={classes.footer}>
        <span className={classes.date}>{date}</span>
        <MdDeleteForever
          onClick={function () {
            onDeleteNote(id);
          }}
          className={classes.delete}
        />
      </div>
    </div>
  );
};

export default Note;

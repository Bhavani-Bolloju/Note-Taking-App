import React, { useState } from "react";
import classes from "./AddNote.module.css";

const AddNote = function (props) {
  const [inputText, setInputText] = useState("");

  const addTextHandler = function (e) {
    if (e.target.value.trim().length <= 200) {
      setInputText(e.target.value);
    }
  };

  const addNewNoteHandler = function () {
    if (inputText.trim().length > 0) {
      props.onNewItem(inputText);
      setInputText("");
    }
  };

  return (
    <div className={classes.addnote}>
      <textarea
        onChange={addTextHandler}
        value={inputText}
        rows="8"
        cols="10"
        placeholder="type to add a new note.."
      ></textarea>
      <div className={classes.footer}>
        <span>{200 - `${inputText.length}`} characters</span>
        <button className={classes.btn} onClick={addNewNoteHandler}>
          save
        </button>
      </div>
    </div>
  );
};

export default AddNote;

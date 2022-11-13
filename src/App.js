import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NoteList from "./Components/NoteList";
import Search from "./Components/Search";
import Header from "./Components/Header";
// console.log(process.env.REACT_APP_API_KEY);

const App = function () {
  const notesList = [
    {
      id: nanoid(),
      text: "this is my first Note!",
      date: "24/07/2022",
    },
  ];
  const [notes, setNotes] = useState(notesList);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  //storing notes to local storage

  useEffect(() => {
    const jsonData = JSON.parse(localStorage.getItem("React-Note-app-Lists"));
    if (jsonData) {
      setNotes(jsonData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("React-Note-app-Lists", JSON.stringify(notes));
  }, [notes]);

  //updating notes state upon adding new notes
  const newNoteItemHandler = function (text) {
    const date = new Date();
    const addNotes = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    setNotes(function (prev) {
      return [...prev, addNotes];
    });

    localStorage.setItem("React-Note-app-Lists", JSON.stringify(notes));
  };

  //deleting note
  const deleteNoteHandler = function (id) {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  //filter notes on search
  const filterNotesHandler = function (inputText) {
    setSearch(inputText.toLowerCase());
  };

  const filterNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(search)
  );

  //dark mode
  const onToggleDarkMode = function () {
    setDarkMode(function (prev) {
      return !prev;
    });
  };

  return (
    <div className={darkMode ? "darkMode" : ""}>
      <div className="container">
        <Header onDark={darkMode} onToggle={onToggleDarkMode}></Header>
        <Search onSearch={filterNotesHandler} />
        <NoteList
          noteList={filterNotes}
          onDelete={deleteNoteHandler}
          onNewNote={newNoteItemHandler}
        />
      </div>
    </div>
  );
};

export default App;

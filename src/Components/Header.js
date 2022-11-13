import React from "react";
import classes from "./Header.module.css";

const header = function (props) {
  return (
    <div className={classes.header}>
      <h1
        className={`${classes.heading} ${
          props.onDark ? classes.darkHeading : ""
        }`}
      >
        Notes
      </h1>
      <button onClick={props.onToggle} className={classes.btn}>
        Toggle Mode
      </button>
    </div>
  );
};

export default header;

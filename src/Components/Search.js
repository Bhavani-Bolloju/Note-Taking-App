import React from "react";
import { MdSearch } from "react-icons/md";
import classes from "./Search.module.css";

const Search = function (props) {
  const inputSearchHandler = function (e) {
    props.onSearch(e.target.value);
  };

  return (
    <div className={classes.search}>
      <MdSearch className={classes.searchIcon}></MdSearch>
      <input
        type="text"
        onChange={inputSearchHandler}
        placeholder="Search Here......"
      ></input>
    </div>
  );
};

export default Search;

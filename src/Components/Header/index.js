import React from "react";
import Title from "../Title";
import SelectionButton from "../SelectionButton";
import css from "./Header.module.css";

function Header({ handleChange, handleClickButton }) {
  return (
    <header>
      <Title />
      <SelectionButton handleChange={handleChange} handleClickButton={handleClickButton}/>
    </header>
  );
}

export default Header;

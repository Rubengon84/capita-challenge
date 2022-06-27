import React from "react";
import Title from "../Title";
import SelectionButton from "../SelectionButton";
import css from "./Header.module.css";

function Header() {
  return (
    <header>
      <Title />
      <SelectionButton />
    </header>
  );
}

export default Header;

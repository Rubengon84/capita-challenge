import React from "react";
import css from "./Title.module.css";

function Title() {
  return (
    <div className={css.titleContainer}>
      <h1>Technical Challenge</h1>
      <div className={css.logoContainer}></div>
    </div>
  );
}

export default Title;

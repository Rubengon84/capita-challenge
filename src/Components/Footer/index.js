import React from "react";
import css from "./Footer.module.css";

function Footer() {
  return (
    <footer className={css.footer}>
      <p> &copy; 2022 Powered and Designed by<span className={css.letterR}>&#x00AE;</span>ubengon</p>
    </footer>
  );
}

export default Footer;

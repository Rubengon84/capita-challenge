import React from "react";
import css from "./SelectionButton.module.css";

function SelectionButton({ handleChange, handleClickButton }) {
  return (
    <section>
      <div>
        <label>Choose the data to retrieve</label>
        <select name="endPoint" onChange={(e) => handleChange(e)}>
          <option value="posts">Posts</option>
          <option value="comments">Comments</option>
          <option value="albums">Albums</option>
          <option value="photos">Photos</option>
          <option value="todos">Todos</option>
          <option value="users">Users</option>
        </select>
      </div>
      <button onClick={() => handleClickButton()}>Get new Random Data</button>
    </section>
  );
}

export default SelectionButton;

import React from "react";
import LargeData from "../LargeData";
import SmallData from "../SmallData";
import css from "./Main.module.css";

function Main({ data, endPoint }) {
  return (
    <main>
      {data === null ? (
        <p>No data yet</p>
      ) : endPoint === "users" ? (
        <LargeData data={data} />
      ) : (
        <SmallData data={data} />
      )}
    </main>
  );
}

export default Main;

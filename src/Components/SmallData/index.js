import React from "react";
import css from "./SmallData.module.css";

function SmallData({ data }) {
  return (
    <section className={css.smallDataContainer}>
      <div>
        {data.userId ? (
          <p>
            User-Id: <span>{data.userId}</span>
          </p>
        ) : data.name ? (
          <p>
            Name: <span>{data.name}</span>
          </p>
        ) : (
          <p>
            Album: <span>{data.albumId}</span>
          </p>
        )}
      </div>
      <div>
        {data.title ? (
          <h3>{data.title}</h3>
        ) : (
          <p>
            Email: <span>{data.email}</span>
          </p>
        )}
      </div>
      <div>
        {data.photo ? (
          <img src={data.photo} alt="description" />
        ) : data.body ? (
          <p>{data.body}</p>
        ) : data.completed ? (
          <p>
            Completed: {data.completed ? <span> ✔ </span> : <span>❌</span>}
          </p>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default SmallData;

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
        {data.url ? (
          <div className={css.imageContainer}>
            <img src={data.url} alt="description" />
          </div>
        ) : data.body ? (
          <p>{data.body}</p>
        ) : data.completed === false || data.completed ? (
          <p>
            Completed:{" "}
            {data.completed ? (
              <span className={css.mark}> ✔</span>
            ) : (
              <span className={css.mark}>❌</span>
            )}
          </p>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default SmallData;

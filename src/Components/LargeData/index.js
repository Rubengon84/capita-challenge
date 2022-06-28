import React from 'react'
import css from "./LargeData.module.css";

function LargeData({data}) {
  return (
    <section className={css.largeDataContainer}>
      <p>
        User Id: <span>{data.id}</span> Name: <span>{data.name}</span>
      </p>
      {data.address && <p>City: <span>{data.address.city}</span></p>}
      <p>Email: <span>{data.email}</span></p>
      <p>Phone: <span>{data.phone}</span></p>
      {data.company && <p>Company: <span>{data.company.name}</span></p>}
      <p>
        Website:{" "}
        <a href={data.website} target="_blank" rel="noreferrer">
          {data.website}
        </a>
      </p>
    </section>
  );
}

export default LargeData;
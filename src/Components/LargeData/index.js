import React from 'react'
import css from "./LargeData.module.css";

function LargeData({data}) {
  return (
    <section>
      <p>
        <span>User-Id: {data.userId}</span> Name: {data.name}
      </p>
      {data.address && <p>City: {data.address.city}</p>}
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      {data.company && <p>Company: {data.company.name}</p>}
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
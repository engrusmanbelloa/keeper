import React from "react";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.tell}</p>
      <p>{props.email}</p>
      <img src="" alt="" />
    </div>
  );
}

export default Card;

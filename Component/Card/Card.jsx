import React from "react";
import H5 from "../Typography/H5";

const Card = ({ src, title, price }) => {
  return (
    <div>
      <img src={src} alt={title} />
      <H5>{title}</H5>
      <p>{price}</p>
    </div>
  );
};

export default Card;

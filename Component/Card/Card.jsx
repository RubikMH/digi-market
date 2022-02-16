import React from "react";
import H5 from "../Typography/H5";
import { css, cx } from "@emotion/css";
import Button from "../Button";

const Card = ({ src, title, price, width = 100, height }) => {
  return (
    <div
      className={css`
        padding-top: 10px;
        width: 500px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        align-content: center;
        justify-content: center;
        margin: 30px;
        padding-bottom: 10px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
          rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      `}
    >
      <img src={src} alt={title} width={`${width}%`} height={`${height}px`} />
      <H5>{title}</H5>
      <p>{price}</p>
    </div>
  );
};

export default Card;

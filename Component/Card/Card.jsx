import React from "react";
import H5 from "../Typography/H5";
import { css, cx } from "@emotion/css";
import Button from "../Button";
import convertInt from "../../helpers/convertInt";
import HyperLink from "../HyperLink/HyperLink";

const Card = ({
  src,
  title,
  price,
  width = 100,
  height = 200,
  numberOfPurchases,
  score,
  id,
}) => {
  return (
    <div
      className={css`
        padding-top: 0px;
        max-width: 20vw;
        // height: 5vh;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        align-content: center;
        justify-content: flex-end;
        margin: 30px;
        // max-width: 30vw;
        padding-bottom: 10px;
        border-radius: 20px;
        transition: all 0.5s;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
          rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        &:hover {
          transform: translateY(-5px);
        }
      `}
    >
      <img
        src={src}
        alt={title}
        width={`${width}%`}
        height={`${height}px`}
        className={css`
          border-radius: 20px 20px 0 0;
        `}
      />
      <HyperLink
        href={{
          pathname: "/Courses/[id]",
          query: { id: `${id}` },
        }}
      >
        <H5>{title}</H5>
      </HyperLink>
      <div
        className={css`
          width: 100%;
        `}
      >
        <hr
          className={css`
            opacity: 0.2;
          `}
        />
      </div>
      <div
        className={css`
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          position: relative;
        `}
      >
        <span
          className={css`
            margin-right: 20px;
          `}
        >
          <img
            src="programmer.png"
            alt="programmer.png"
            width={"30px"}
            height={"30px"}
            className={css`
              margin-left: 5px;
              margin-top: 0px;
            `}
          />
          {convertInt(numberOfPurchases)}
        </span>
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: stretch;
            flex-wrap: wrap;
        }
        `}
        >
          <button
            className={css`
              cursor: pointer;
              padding: 0.5rem;
              border-radius: 25px;
              position: absolute;
              top: 2rem;
              width: 10rem;
              display: flex;
              justify-content: space-evenly;
              background-color: white;
              transition: all 0.5s;
              &:hover {
                box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
                  rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
                background-color: rgba(179, 222, 230, 0.78);
                transform: translateY(10px);
              }
              border: 1px solid black;
            `}
          >
            اضافه کردن به سبد
            <img
              src="plus.png"
              alt="plus.png"
              width={`20px`}
              className={css`
                // margin-top: 5px;
              `}
            />
          </button>
        </div>
        <span
          className={css`
            margin-left: 20px;
          `}
        >
          {`${convertInt(price)} تومان`}
        </span>
      </div>
    </div>
  );
};

export default Card;

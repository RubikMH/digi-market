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
  height = 100,
  numberOfPurchases,
  score,
  id,
}) => {
  return (
    <div
      className="flex min-w-xs w-1/4 p-0 flex-col flex-nowrap items-center content-center justify-end m-6  
      pb-3 md:transition-all  rounded-md  delay-75 shadow-xl hover:shadow-2xl hover:-translate-y-2 border-2 "
    >
      <div className=" h-48 w-full">
        <img
          src={src}
          alt={title}
          width={`${width}%`}
          height={`${height}%`}
          className="rounded-md h-full w-full "
        />
      </div>
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
      ></div>
      <div
        className={css`
          width: 100%;
        `}
      >
        <hr className=" opacity-80" />
      </div>
      <div
        className={css`
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        `}
      >
        <div className=" flex justify-center flex-row m-1">
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
        </div>
        <div
          className={css`
            display: flex;
            justify-content: center;
            align-items: stretch;
            flex-wrap: wrap;
            position: relative;
          `}
        >
          <button
            className="flex w-40 top-8 absolute rounded-md  justify-evenly p-2 
          bg-white transition-all duration-150 border-2 delay-75 hover:shadow-md
          hover:bg-blue-200 hover:translate-y-3 text-sm active:bg-slate-400"
          >
            افزودن به سبد خرید
          </button>
        </div>
        <div className=" flex justify-center flex-row m-1">
          <span>{`${convertInt(price)} تومان`}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

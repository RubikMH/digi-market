import React from "react";
import H5 from "../Typography/H5";
import { css, cx } from "@emotion/css";
import Button from "../Button";
import convertInt from "../../helpers/convertInt";
import HyperLink from "../HyperLink/HyperLink";
import { ADD_COURSES_ACTION } from "../../actions/index";
import { useDispatch } from "react-redux";

const Card = ({ card, height = 100, width = 100 }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="flex min-w-xs w-1/4 p-0 flex-col flex-nowrap items-center content-center justify-end m-6  
      pb-3 md:transition-all  rounded-md  delay-75 shadow-xl hover:shadow-2xl hover:-translate-y-2 border-2 "
    >
      <div className=" h-48 w-full">
        <img
          src={card.fields.imgCard.fields.file.url}
          alt={card.fields.titleProduct}
          width={`${width}%`}
          height={`${height}%`}
          className="rounded-md h-full w-full "
        />
      </div>
      <HyperLink
        href={{
          pathname: "/courses/[id]",
          query: { id: `${card.sys.id}` },
        }}
      >
        <H5>{card.fields.titleProduct}</H5>
      </HyperLink>
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
          {convertInt(card.fields.numberOfPurchases)}
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
          hover:bg-blue-200 hover:translate-y-1 text-sm active:bg-slate-400"
            onClick={() => dispatch(ADD_COURSES_ACTION(card))}
          >
            افزودن به سبد خرید
          </button>
        </div>
        <div className=" flex justify-center flex-row m-1">
          <span>{`${convertInt(card.fields.price)} تومان`}</span>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     courses: state.addCourses.courses,
//     added: state.addCourses.add,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     ADD_COURSES_ACTION: () => dispatch(ADD_COURSES_ACTION()),
//   };
// };

export default Card;

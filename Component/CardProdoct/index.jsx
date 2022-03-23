import React from "react";
import convertInt from "../../helpers/convertInt";
import { useDispatch } from "react-redux";
import { DELETE_COURSES_ACTION } from "../../actions";
import HyperLink from "../HyperLink/HyperLink";

function CardProdoct({ courses }) {
  const dispatch = useDispatch();

  const stars = [];
  for (let i = 1; i <= courses.fields.score; i++) {
    stars.push(i);
  }
  console.log("courses.sys.id", courses.sys.id);
  return (
    <>
      <div className=" flex flex-col justify-around p-4">
        <ul className=" flex flex-row justify-around">
          <li className="w-40 h-20 ">
            <img
              src={courses.fields.imgCard.fields.file.url}
              alt={courses.fields.titleProduct}
              className=" w-40 h-20 relative"
            />
            <button
              onClick={() => dispatch(DELETE_COURSES_ACTION(courses))}
              className=" absolute -translate-y-24 translate-x-4 w-8"
            >
              <img
                src="cancel.png"
                alt="cancel.png"
                className=" w-full h-full"
              />
            </button>
          </li>
          <HyperLink
            href={{
              pathname: "/courses/[id]",
              query: { id: `${courses.sys.id}` },
            }}
          >
            <li className="w-40">{courses.fields.titleProduct}</li>
          </HyperLink>
          <li className="w-40">{convertInt(courses.fields.price)}</li>
          <li className="w-40 flex flex-row ">
            {stars.map((star) => (
              <img
                src="star.png"
                alt="star.png"
                key={star}
                className="w-8 h-8"
              />
            ))}
          </li>
        </ul>
      </div>
    </>
  );
}

export default CardProdoct;
{
  /* <div className=" max-w-xs w-44 max-h-20 flex justify-center ">
        <img
          src={courses.fields.imgCard.fields.file.url}
          alt=""
          className=" w-full h-20"
        />
      </div>
      <div>
        <span>{courses.fields.titleProduct}</span>
      </div>
      <div>
        <span>{courses.fields.price}</span>
      </div>
      <div>
        <span>{courses.fields.score}</span>
      </div> */
}

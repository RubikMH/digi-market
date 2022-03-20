import React from "react";

function CardProdoct({ courses }) {
  //   console.log("courses", courses);
  return (
    <div className=" flex flex-row justify-around">
      <div className=" max-w-xs w-44 max-h-20 flex justify-center ">
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
        <span>{courses.fields.price}</span>
      </div>
    </div>
  );
}

export default CardProdoct;

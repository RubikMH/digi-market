import React from "react";
import Card from "../Card/Card";

const CardList = ({ courses }) => {
  return (
    <div className=" flex flex-row flex-wrap justify-center content-center w-5/6">
      {courses.map((card) => (
        <Card card={card} key={`Card_${card.sys.id}`} />
      ))}
    </div>
  );
};

export default CardList;

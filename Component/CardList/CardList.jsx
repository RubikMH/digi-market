import React from "react";
import Card from "../Card/Card";

const CardList = ({ courses }) => {
  // let listCard = [];

  const listCard = courses;
  // const listCard = [
  //   {
  //     id: 1,
  //     card: "js ",
  //   },
  //   {
  //     id: 2,
  //     card: "vue ",
  //   },
  //   {
  //     id: 3,
  //     card: "react ",
  //   },
  // ];
  console.log("listCard", listCard);
  return (
    <div>
      {listCard.map((card) => (
        <Card
          key={`Card_${card.id}`}
          title={card.course_name}
          src={`${card.pic}`}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default CardList;

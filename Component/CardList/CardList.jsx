import React from "react";
import Card from "../Card/Card";
import { css, cx } from "@emotion/css";
import Link from "next/link";

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
  // console.log("listCard", listCard);
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        max-width: 70vw;
      `}
    >
      {listCard ? (
        listCard.map((card) => (
          <Card
            id={card.sys.id}
            key={`Card_${card.sys.id}`}
            title={card.fields.titleProduct}
            src={`${card.fields.imgCard.fields.file.url}`}
            price={card.fields.price}
            // width={50}
            // height={100}
            score={card.fields.score}
            numberOfPurchases={card.fields.numberOfPurchases}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default CardList;

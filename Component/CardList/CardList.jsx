import React from "react";
import Card from "../Card/Card";
import { css, cx } from "@emotion/css";
import Link from "next/link";
import HyperLink from "../HyperLink/HyperLink";

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
      `}
    >
      {listCard ? (
        listCard.map((card) => (
          <HyperLink
            key={`URL_${card.sys.id}`}
            href={{
              pathname: "/courses/[id]",
              query: { id: `${card.sys.id}` },
            }}
          >
            <Card
              key={`Card_${card.sys.id}`}
              title={card.fields.titleProduct}
              src={`${card.fields.imgCard.fields.file.url}`}
              price={card.fields.price}
              width={90}
            />
          </HyperLink>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default CardList;

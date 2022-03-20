import React from "react";
import CardProdoct from "../CardProdoct";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

function CardProdoctLIst() {
  const { courses } = useSelector((state) => state.addCourses);
  console.log(courses);
  return (
    <div>
      {courses.map((element) => {
        return <CardProdoct courses={element} key={uuidv4()} />;
      })}
    </div>
  );
}

export default CardProdoctLIst;

import React from "react";
import CardProdoct from "../CardProdoct";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

function CardProdoctLIst() {
  const { courses } = useSelector((state) => state.addCourses);
  console.log(courses);
  return (
    <div>
      <ul className="flex flex-row justify-around mb-5">
        <li className="w-40 flex text-2xl">عکس کالا</li>
        <li className="w-40 flex text-2xl">نام کالا</li>
        <li className="w-40 flex text-2xl">قیمت </li>
        <li className="w-40 flex text-2xl">تعداد</li>
      </ul>
      {courses.map((element) => {
        return <CardProdoct courses={element} key={uuidv4()} />;
      })}
    </div>
  );
}

export default CardProdoctLIst;

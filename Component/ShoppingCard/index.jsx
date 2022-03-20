import React from "react";
import { useSelector } from "react-redux";

const ShoppingCard = () => {
  const counterProdocts = useSelector((state) => state.addCourses);
  const coouter = counterProdocts.courses.length;
  return (
    <div className="flex flex-row relative justify-center h-full ml-2 cursor-pointer  ">
      <div className=" h-full">
        <img src="shoppingCart.png" alt="shopping-cart.png" />
      </div>
      <div className=" absolute bottom-3 left-5 text-white bg-red-500  pl-0.5 pr-0.5 h-6 w-5  rounded-full flex justify-center">
        {coouter}
      </div>
    </div>
  );
};
export default ShoppingCard;

import React from "react";
import styles from "./CardInfo.module.css";
import H4 from "../Typography/H4";
import H3 from "../Typography/H3";

const CardInfo = () => {
  return (
    <div className="bg-[url('../public/jackson.jpg')] bg-cover m-0 w-full h-screen p-0 ">
      <div className="bg-black opacity-75 h-full w-full flex  content-center items-center flex-col justify-evenly ">
        <div className=" text-cyan-50 ">
          <H3>خدمات ما</H3>
        </div>
        <div className="flex flex-row-reverse flex-wrap justify-start items-start">
          {" "}
          <div className=" max-w-sm h-72 flex justify-center items-center flex-col justify-items-center bg-slate-50 text-black  rounded-2xl transition-all translate-y-4 shadow-sm m-16">
            <div className=" flex w-full flex-nowrap justify-start h-20">
              <img
                src="MyService.png"
                alt="MyService.png"
                className=" w-16 h-16 mr-8"
              />

              <h4 className="mt-5 mr-3 font-normal text-2xl">طراحی سایت</h4>
            </div>
            <div className=" pr-5 pl-5 ">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که
              </p>
            </div>
          </div>
          <div className=" max-w-sm h-72 flex justify-center items-center flex-col justify-items-center bg-slate-50 text-black  rounded-2xl transition-all translate-y-16 shadow-sm m-16">
            <div className="flex w-full flex-nowrap justify-start h-20">
              <img
                src="MyService.png"
                alt="MyService.png"
                className=" w-16 h-16 mr-8"
              />
              <h4 className="mt-5 mr-3 font-normal text-2xl">طراحی سایت</h4>
            </div>
            <div className="pr-5 pl-5">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که
              </p>
            </div>
          </div>
          <div className=" max-w-sm h-72 flex justify-center items-center flex-col justify-items-center bg-slate-50 text-black  rounded-2xl transition-all -translate-y-8 shadow-sm m-16">
            <div className="flex w-full flex-nowrap justify-start h-20">
              <img
                src="MyService.png"
                alt="MyService.png"
                className="w-16 h-16 mr-8"
              />
              <h4 className="mt-5 mr-3 font-normal text-2xl">طراحی سایت</h4>
            </div>
            <div className="pr-5 pl-5">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;

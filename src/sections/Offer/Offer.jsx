import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import offerImg from "../../asserts/store-906722_1920.jpg";

export const Offer = () => {
  return (
    <div className=" pb-[5rem]  md:flex md:items-center md:mx-[5rem]">
      <div className="h-[10rem] w-full md:h-[18rem] md:w-[50rem] ">
        <img
          src={offerImg}
          alt="Offer image"
          className="h-full w-full   object-cover object-center md:rounded-l-lg "
        />
      </div>
      <div className="bg-gray-800    h-[18rem] w-full md:rounded-r-lg ">
        <div className="pt-4 md:pt-0 text-center  md:ml-[2rem]  md:mt-[2rem]  md:space-y-3">
          <p className=" text-lg   md:text-md  md:text-start  text-gray-400 font-bold">
            LIMITED OFFER
          </p>
          <p className="text-4xl   text-white md:text-start font-bold md:text-5xl md:w-[40rem]">
            35% off only thus friday and get special gift
          </p>
          <div className="my-4 flex  items-center justify-center md:justify-start">

          <Link to={`shop/`}>
            <button className="flex  items-center justify-between w-[12rem]  py-2 px-6   xl:w-[13rem] rounded-xl  transition bg-white shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 ">
              <span className="block text-[1rem]   text-gray-700  font-bold ">
                Grab it now
              </span>
              <BsArrowRightShort className="text-gray-700  h-8 w-8" />
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

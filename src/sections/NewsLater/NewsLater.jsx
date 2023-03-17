import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export const NewsLater = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="pb-5">
      <div className=" space-y-4">
        <h2 className="text-xl text-center   text-gray-700 font-bold md:text-4xl md:mx-[20rem] ">
          Subscribe to our newsletter to get updates to our latest collections
        </h2>
        <p className="text-sm  text-center mx-3   md:text-lg    text-gray-400 font-bold md:mx-0">
          Get 20% off on your first order just by subscribing to our newsletter
        </p>
      </div>
      <div className="space-y-3 md:flex md:items-center md:justify-center py-5  md:space-x-4 md:space-y-0">
        <div className="flex justify-center">
          <div className="flex  items-center  space-x-6  ">
            <input
              className="relative text-md  bg-[#fff]  h-[2rem] py-[1.4rem] text-gray-600 font-bold pl-[4rem] w-[20rem] drop-shadow-md dark:text-[#fff] dark:bg-[#2B3945] rounded-lg md:h-[3.2rem] md:w-[25rem] md:text-lg md:pl-[5rem]"
              placeholder="Enter your Email "
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MdOutlineMailOutline className=" absolute text-2xl text-[#858585] h-5 w-5  md:h-7 md:w-7 " />
          </div>
        </div>
        <div className="flex justify-center ">
          <button className="text-center w-[10rem] h-[3.2rem]  py-2 px-6   xl:w-[8rem] rounded-xl  transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 ">
            <span className="block text-[1rem]   text-white  font-bold ">
              Subscribe
            </span>
          </button>
        </div>
      </div>
      <div className="text-center">
        <p className="text-gray-400 font-bold text-md">
          You will be able to unsubscribe at any time.
        </p>
        <p className="text-gray-400 font-bold text-md">
          Read our Privacy Policy{" "}
          <Link to="/" className="underline decoration-gray-500 text-gray-600">
            here
          </Link>
        </p>
      </div>
    </div>
  );
};

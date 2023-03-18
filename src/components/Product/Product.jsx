import React from "react";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

export const Product = ({
  price,
  title,
  discountPercentage,
  description,
  addToCartToaster,
  id,
  productImg,
  addToCart,
}) => {




  const handleAddToCart = () => {
    addToCart(id);
    addToCartToaster()
  };

  return (
    <>
      <div
        key={id}
        className="group p-3 mb-7   rounded-xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 sm:p-8 dark:shadow-none dark:border-gray-700 dark:bg-gray-800"
      >
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={productImg}
            alt="art cover"
            loading="lazy"
            className="h-[10rem]  w-full object-cover object-top transition duration-500 group-hover:scale-105 md:h-[12rem]"
          />
        </div>
        <div className="space-y-5">
          <div className="flex items-center justify-between pt-3 ">
            <div>
              <p className="text-md text-gray-700 w-[5rem] md:w-[9rem] font-extrabold md:text-md">
                {title}
              </p>
            </div>
            <div className="flex items-end space-x-2 md:space-x-1">
              <p className="text-sm text-gray-800 font-extrabold md:text-md">
                ${(price - (discountPercentage / 100) * price).toFixed(2)}
              </p>
              <p className="hidden text-[0.8rem] text-red-400 font-bold line-through md:text-[0.7rem] md:block">
                ${price}
              </p>
            </div>
          </div>
          <div className="w-[8rem] md:w-[10rem]">
            <p className=" truncate   text-gray-600 text-bold dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-3 space-x-2">
          <button
            onClick={handleAddToCart}
            className="w-full py-2 px-3 md:py-2 md:px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max"
          >
            <span className="block text-white font-semibold text-[0.7rem] md:text-md">
              Add to Cart
            </span>
          </button>
          <Link
            to={`${id}`}
            className=" py-3 px-3  md:py-3 md:px-3 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 "
          >
            <MdOutlineRemoveRedEye className="block text-white font-semibold  h-5 w-5 " />
          </Link>
        </div>
      </div>
    </>
  );
};

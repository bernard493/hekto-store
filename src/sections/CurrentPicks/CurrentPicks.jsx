import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import shoMenImg from "../../asserts/CurrentPicks/man-1866574_1920.jpg";

const cardInfo = [
  {
    cardImg:
      "https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/iman.webp",
    path: "best-seller",
    pathName: "Best Seller",
  },
  {
    cardImg:
      "https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/iman.webp",
    path: "shop-men",
    pathName: "Shop Men",
  },
  {
    cardImg:
      "https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/iman.webp",
    path: "shop-women",
    pathName: "Shop Women",
  },
  {
    cardImg:
      "https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/iman.webp",
    path: "shop-casual",
    pathName: "Shop Casual",
  },
];

const CardComponent = ({ cardImg, path, pathName }) => {
  return (
    <div key={path} className="rounded-xl relative  ">
      <div className="">
        <img
          src={cardImg}
          alt="card img"
          className="h-[14rem] xl:h-[17rem] xl:w-[17rem]  object-cover object-center rounded-xl md:"
        />
      </div>
      <Link
      
      to={`/shop`}
        type="button"
        title="Start buying"
        className="w-[8rem] flex justify-center hover:no-underline my-2 py-1 px-6 text-center xl:absolute   xl:w-[13rem] rounded-xl xl:top-[12rem] left-9 transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 "
      >
        <button className="flex items-center justify-between ">
          <span className="block text-[0.8rem]  text-white font-semibold">
            {pathName}
          </span>
          <BsArrowRightShort className="text-white h-8 w-8" />
        </button>
      </Link>
    </div>
  );
};

export const CurrentPicks = () => {
  return (
    <div>
      <h2 className="text-3xl text-center text-gray-700 font-bold md:text-4xl md:text-start">
        Current Picks
      </h2>
      <div className="grid grid-cols-2 gap-4   xl:mx-[5rem] py-[3rem] xl:flex flex-row justify-between md:space-x-8">
        {cardInfo.map((card) => (
          <CardComponent
          key={card.path}
            cardImg={card.cardImg}
            path={card.path}
            pathName={card.pathName}
          />
        ))}
      </div>
    </div>
  );
};

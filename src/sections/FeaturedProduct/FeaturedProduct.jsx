import React, { useContext, useRef, useMemo } from "react";
import { useFetch } from "../../Hooks/useFetch";
import Slider from "react-slick";
import { MdAddShoppingCart } from "react-icons/md";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import heroImg from "../../asserts/image168.png";
import "react-multi-carousel/lib/styles.css";
import { ProductDetailContext } from "../../Hooks/Context/ProductDetailContext";
import { CartContext } from "../../Hooks/Context/CartContext";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const FeaturedProduct = () => {
  const [data] = useFetch("https://dummyjson.com/products");
  const { addToCart } = useContext(CartContext);
  const slider = useRef(null);
  const addToCartToaster = () => toast.success('Added to Cart Successfully');

  //console.log(productDetails)

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };


  
  const handleAddToCart = (id) => {
    addToCart(id);
    addToCartToaster()
  };



  return (
    <div className="pt-[5rem]">
      <h2 className="text-3xl text-center text-gray-700 font-bold md:text-4xl ">
        Featured Product
      </h2>
      <div className=" py-[5rem]  md:px-[2rem] ">
        <div className="flex justify-end items-center space-x-3 pb-4">
          <button
            onClick={() => slider?.current?.slickPrev()}
            className=" py-3 px-3  md:py-3 md:px-3 text-center rounded-xl transition bg-gray-200 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 "
          >
            <BsArrowLeftShort className="block text-black font-semibold h-5 w-5" />
          </button>
          <button
            onClick={() => slider?.current?.slickNext()}
            className=" py-3 px-3  md:py-3 md:px-3 text-center rounded-xl transition bg-gray-200 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 "
          >
            <BsArrowRightShort className="text-black h-5 w-5" />
          </button>
        </div>
        {data ? (
          <Slider ref={slider} {...settings}>
            {data.map((product) => (
              <div key={product.id} className="px-[1rem] md:px-[2rem] ">
                <Link to={`shop/${product.id}`}>
                  <div className="rounded-xl relative">
                    <img
                      src={product.images[0]}
                      alt=""
                      className="h-[10rem] w-full object-cover rounded-xl md:h-[18rem] "
                    />
                    <div className="h-[1.7rem] w-[3rem] bg-red-600  text-center rounded-lg absolute top-3 left-3">
                      <p className="  text-[0.8rem] text-white  font-bold pt-1">
                        SALE
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="flex items-center justify-between py-3">
                  <div className="space-y-1 md:space-y-2">
                    <div>
                      <Link to={`shop/${product.id}`} className='hover:no-underline'>
                        <p className="text-md text-gray-700 w-[5rem] md:w-[12rem] font-bold md:text-lg hover:text-gray-500">
                          {product.title}
                        </p>
                      </Link>
                    </div>
                    <div className="flex items-end space-x-2 md:space-x-4">
                      <p className="text-sm text-gray-800 font-extrabold md:text-lg">
                        $
                        {(
                          product.price -
                          (product.discountPercentage / 100) * product.price
                        ).toFixed(2)}
                      </p>
                      <p className="text-[0.8rem] text-red-400 font-bold line-through md:text-md">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <button
                      onClick={(e)=>handleAddToCart(product.id)}
                      className=" py-3 px-3  md:py-3 md:px-3 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 "
                    >
                      <MdAddShoppingCart className="block text-white font-semibold md:h-5 md:w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <h2>memmm</h2>
        )}
      </div>
      <Toaster position="top-right" reverseOrder={false} />

    </div>
  );
};

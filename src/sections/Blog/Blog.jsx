import React, { useRef } from "react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { BlogCard } from "../../components";
import Slider from "react-slick";

const post = [
  {
    id: 1,
    postImg:
      "https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    tittle: " De fuga fugiat lorem ispum laboriosam expedita.",
    text: " Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus harum aliquam totam, doloribus eum impedit atque!",
  },
  {
    id: 2,
    postImg:
      "https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/kushagra.webp",
    tittle: " De fuga fugiat lorem ispum laboriosam expedita.",
    text: " Temporibus harum aliquam totam, doloribus eum impedit atque!     Temporibus harum aliquam totam, doloribus eum impedit atque!",
  },
  {
    id: 3,
    postImg:
      "https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/iman.webp",
    tittle: " De fuga fugiat lorem ispum laboriosam expedita.",
    text: "   Temporibus harum aliquam totam, doloribus eum impedit atque!",
  },
  {
    id: 4,
    postImg:
      "https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/daniel.webp",
    tittle: " De fuga fugiat lorem ispum laboriosam expedita.",
    text: " Temporibus harum aliquam totam, doloribus eum impedit atque! Temporibus",
  },
  {
    id: 5,
    postImg:
      "https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/daniel.webp",
    tittle: " De fuga fugiat lorem ispum laboriosam expedita.",
    text: " Temporibus harum aliquam totam, doloribus eum impedit atque! Temporibus",
  },
  {
    id: 6,
    postImg:
      "https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/daniel.webp",
    tittle: " De fuga fugiat lorem ispum laboriosam expedita.",
    text: " Temporibus harum aliquam totam, doloribus eum impedit atque! Temporibus",
  },
];

export const Blog = () => {
  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl text-center text-gray-700 font-bold md:text-4xl ">
        Latest Blogs
      </h2>
      <div className="mx-2">
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
        <Slider ref={slider} {...settings}>
          {post.map((postDetail) => (
            <div className="px-[1rem] md:px-[2rem]">
              <BlogCard
                id={postDetail.id}
                postImg={postDetail.postImg}
                tittle={postDetail.tittle}
                text={postDetail.text}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

import React from "react";
import Slider from "react-slick";

const heroImg = [
  {
    id: 1,
    img: "https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/kushagra.webp",
  },
  {
    id: 2,
    img: "https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/iman.webp",
  },
  {
    id: 3,
    img: "https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/iman.webp",
  },
  {
    id: 4,
    img: "https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/iman.webp",
  },
  {
    id: 5,
    img: "https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/iman.webp",
  },
  {
    id: 6,
    img: "https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/iman.webp",
  },

  {
    id: 7,
    img: "https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/daniel.webp",
  },
];

export const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-[2rem]">
      <h2 className="text-3xl text-center text-gray-700 font-bold md:text-4xl md:text-start">
        Brands
      </h2>
      <div className="p-[2rem]">
        <Slider {...settings}>
          {heroImg.map((img) => (
            <div key={img.id} className="px-[0.5rem]">
              <img
                src={img.img}
                alt=""
                className="w-full h-[5rem] object-cover  object-center rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

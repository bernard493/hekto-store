import React from "react";
import moneyIcon from '../../asserts/googleIcons/currency_exchange_FILL0_wght400_GRAD0_opsz48.png'
import GuardIcon from '../../asserts/googleIcons/verified_user_FILL0_wght400_GRAD0_opsz48.png'
import arrivalIcon from '../../asserts/googleIcons/all_inbox_FILL0_wght400_GRAD0_opsz48.png'
import shippingIcon from '../../asserts/googleIcons/local_shipping_FILL0_wght400_GRAD0_opsz48.png'

const experienceOffers = [
  {
    icon: moneyIcon,
    tittle: "Original Products",
    text: " We provide money back guarantee if the product are not original",
  },
  {
    icon: GuardIcon,
    tittle: "Satisfaction Guarantee",
    text: "Exchange the product you've purchased if it doesn't fit on you",
  },
  {
    icon: arrivalIcon,
    tittle: "New Arrival Everyday",
    text: " We updates our collections almost everyday",
  },
  {
    icon:shippingIcon,
    tittle: "Fast & Free Shipping",
    text: " We offer fast and free shipping for our loyal customers",
  },
];

const Offers = ({ icon, tittle, text }) => {
  return (
    <div key={tittle} className="pl-[1rem] md:pl-0">
      <div className="bg-[#F1F3F4] max-w-screen-lg  pt-3  flex justify-center h-[4rem] w-[4rem] rounded-lg">
        <img src={icon} alt=""  className=" object-center  h-[2rem] w-[2rem]"/>
      </div>
      <div className="py-[1rem] w-[9rem] md:w-[15rem]">
        <p className="text-gray-700 font-bold text-xl">{tittle}</p>
        <p className=" text-gray-400 font-bold  text-md">{text}</p>

      </div>
    </div>
  );
};

export const CustomerExperiences = () => {
  return (
    <div className="py-[2rem]">
      <div className="flex flex-col   md:flex-row md:justify-between">
        <div className="">
          <h2 className="text-3xl text-center text-gray-700 font-bold md:text-4xl md:text-start md:w-[35rem]">
            We provide best customer experiences
          </h2>
        </div>
        <div className="flex items-center space-y-5 md:space-x-10 md:space-y-0">
          <div className="hidden md:block md:border-l-4 border-gray-700 h-[6rem]" />
          <div className="text-lg text-center  text-gray-400 font-bold md:text-start">
            <p>We ensure our customers have the best shopping experience </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4   xl:px-[5rem] py-[3rem] xl:flex flex-row justify-between md:space-x-8">
        {experienceOffers.map((offerItem) => (
          <Offers
            icon={offerItem.icon}
            tittle={offerItem.tittle}
            text={offerItem.text}
          />
        ))}
      </div>
    </div>
  );
};

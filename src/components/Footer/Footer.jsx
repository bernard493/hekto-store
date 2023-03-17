import React, { useEffect, useState } from "react";
import logo from "../../asserts/Hekto.png";
import cardPayment from '../../asserts/cardpayment.png'
import { Link } from "react-router-dom";
import { BiCopyright } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export const Footer = () => {
  const [getCurrentYear, setGetCurrentYear] = useState(null);

  useEffect(() => {
    const year = new Date().getFullYear();
    setGetCurrentYear(year)
  }, []);

  return (
    <div className="bg-[#E5E7EB] p-[2rem] md:pt-[3rem] md:px-[5rem]">
      <div className="space-y-5 md:grid md:grid-cols-6 md:gap-4">
        <div className=" space-y-5 col-span-2">
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="" className="" />
          </div>
          <div className="md:w-[20rem]">
            <p className="text-[1rem]  font-bold  md:text-start  md:text-[0.9rem]    text-gray-400">
              Specializes in providing hight-quality, stylish products for your
              wardrobe
            </p>
          </div>
        </div>
        <div className="space-y-2 text-center md:text-start">
          <h3 className="text-[1.2rem] font-bold  text-gray-800">SHOP</h3>
          <ul className="space-y-2 text-[1rem]   font-bold md:text-md    text-gray-400 md:text-[0.9rem] ">
            <li>
              <Link>All Collections</Link>
            </li>
            <li>
              <Link>Winter Edition</Link>
            </li>
            <li>
              <Link>Discount</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2 text-center md:text-start">
          <h3 className="font-bold text-[1.2rem] text-gray-800">COMPANY</h3>
          <ul className="space-y-2 text-[1rem]   font-bold md:text-md    text-gray-400 md:text-[0.9rem] ">
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Link>Affiliates</Link>
            </li>
          </ul>{" "}
        </div>
        <div className="space-y-2 ">
          <h3 className="font-bold text-[1.2rem] text-center  text-gray-800">SUPPORT</h3>
          <ul className="space-y-2 text-[1rem] text-center  md:text-left   font-bold md:text-md    text-gray-400 md:text-[0.9rem] ">
            <li>
              <Link>FAQs</Link>
            </li>
            <li>
              <Link>Cookies Policy</Link>
            </li>
            <li>
              <Link>Terms of Use</Link>
            </li>
          </ul>{" "}
        </div>
        <div className="space-y-2  text-center md:text-start">
          <h3 className="font-bold text-[1.2rem] text-gray-800">
            PAYMENT METHODS
          </h3>
          <div className="flex justify-center md:justify-start">
            <img src={cardPayment} alt="" />
          </div>
        </div>
      </div>
      <div className="pt-[3rem] space-y-9">
        <div className=" flx justify-center border-t-2 border-gray-300 " />
        <p className="text-[1rem] text-center   font-bold md:text-md    text-gray-400 md:text-[0.9rem] ">
          Copyright ©{getCurrentYear} Bernard. All right reserved
        </p>
      </div>
    </div>
  );
};

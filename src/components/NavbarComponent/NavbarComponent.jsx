import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import logo from "../../asserts/Hekto.png";
import { Badge } from "rsuite";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import CartIcon from "../../asserts/googleIcons/shopping_cart_checkout_FILL0_wght400_GRAD0_opsz48.png";
import profileIcon from "../../asserts/googleIcons/person_FILL0_wght400_GRAD0_opsz48.png";

import { CartContext } from "../../Hooks/Context/CartContext";

export const NavbarComponent = () => {
  const [search, setSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  //const [navLinkStyle , setNavLinkStyle] = useState(false)
  const { cartItems } = useContext(CartContext);

  const menuLinks = [
    {
      page: "Shop",
      path: "hekto-store/shop",
      icon: BiSearchAlt2,
    },
    {
      page: "Most wanted",
      path: "hekto-store/shop/",
      icon: BiSearchAlt2,
    },
    {
      page: "New Arrival",
      path: "hekto-store/shop",
      icon: BiSearchAlt2,
    },
    {
      page: "Brands",
      path: "hekto-store/brands",
      icon: BiSearchAlt2,
    },
  ];

  

  return (
    <>
      <div className="hidden shadow-sm mb-[5rem]  bg-slate-50  top-0  md:block">
        <div className="flex items-center justify-between py-[1rem] px-[2rem] ">
          <div className="">
            <Link to="/hekto-store">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className=" text-[1rem] font-Poppins font-bold space-x-[1.5rem]">
            {menuLinks.map((link) => (
              <Link className="hover:no-underline" to={link.path} key={link.page}>
                {link.page}
              </Link>
            ))}
          </div>
          <div className=" flex items-center  gap-6">
            <div className=" flex items-center space-x-6 ">
              <input
                className="relative text-md text-[#858585] bg-[#fff]  h-[2rem] py-[1.4rem] pl-[4rem] w-[15rem] drop-shadow-md dark:text-[#fff] dark:bg-[#2B3945] rounded-md  "
                placeholder="Search Products ...."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <BiSearchAlt2 className=" absolute text-2xl text-[#858585] " />
            </div>
            <div className=" flex items-center space-x-5">
              <div className="">
                <Link to="cart">
                  <Badge color="green" content={cartItems.length}>
                    <img src={CartIcon} alt="cartIcon" className="h-6 w-6" />
                  </Badge>
                </Link>
              </div>
              <img src={profileIcon} alt="profileIcon" className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
      {/** Moblie Menu */}
      <div className=" block shadow-sm mb-[5rem] bg-slate-50  top-0  md:hidden">
        <div className="flex items-center justify-between py-[1.5rem] px-[1.5rem]">
          <div className="">
            <Popover className="relative">
              <Popover.Button
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                }}
                className={`
               
                group inline-flex items-center rounded-md bg-gray-300 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                {mobileMenu ? (
                  <IoIosArrowDown
                    className={`${mobileMenu ? "" : "text-opacity-70"}
                  h-6 w-6 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
                    aria-hidden="true"
                  />
                ) : (
                  <FiMenu
                    className={`${mobileMenu ? "" : "text-opacity-70"}
                  h-6 w-6 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
                    aria-hidden="true"
                  />
                )}
              </Popover.Button>
            </Popover>
          </div>
          <div className="">
            <Link to="/hekto-store">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className=" flex items-center space-x-5">
            <div className="">
              <Link to="cart">
                <Badge color="green" content={cartItems.length}>
                  <img src={CartIcon} alt="cartIcon" className="h-6 w-6" />
                </Badge>
              </Link>
            </div>
            <Link className="group inline-flex items-center rounded-md bg-gray-300 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <img src={profileIcon} alt="profileIcon" className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {mobileMenu && (
          <Popover className="relative">
            <Transition
              as={Fragment}
              show={true}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {menuLinks.map((item) => (
                      <Link
                        to={item.path}
                        key={item.page}
                        className="-m-3 flex items-center hover:no-underline rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-[1rem]  font-bold text-gray-900">
                            {item.page}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4">
                    <div className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                      <div className=" flex items-center space-x-6 ">
                        <input
                          className="relative text-md text-[#858585] bg-[#fff]  h-[2rem] py-[1.4rem] pl-[4rem] w-[20rem] drop-shadow-md dark:text-[#fff] dark:bg-[#2B3945] rounded-md  "
                          placeholder="Search "
                          type="text"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                        <BiSearchAlt2 className=" absolute text-2xl text-[#858585] h-5 w-5 " />
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        )}
      </div>
    </>
  );
};

{
  /** {navLink.map((link) => (
                  <Link to={link.path} key={link.id} onClick={''}>
                      <p  className={ link.active ? "font-bold text-[#FB2E86] border-b-2 border-pink-500" : ''}>{link.display}</p>
                   </Link>
            ))
          } */
}

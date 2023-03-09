import React, { useMemo, useState, useEffect } from "react";
import { useContext } from "react";
import { CartProduct } from "../components";
import { CartContext } from "../Hooks/Context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export const CartPage = () => {
  const { cartItems, removeFromCart, setCartItems } = useContext(CartContext);
  const [totalItemPrice, setTotalItemPrice] = useState(0);
  const [tax, setTax] = useState(20);
  const [totalOrderAmount, setTotalOrderAmount] = useState(0);
  const navigate = useNavigate();

  useMemo(() => {
    const price = cartItems.map((product) =>
      product.quantity > 1 ? product.price * product.quantity : product.price
    );
    const totalPrice = price.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setTotalItemPrice(totalPrice);
    setTotalOrderAmount((prev) => totalItemPrice + tax);
  }, [cartItems, tax, totalItemPrice]);

  const navigateToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className=" ">
      <div className="bg-[#F1F0FF] h-[10rem] flex justify-start items-center ">
        <div className="ml-10">
          
        </div>
        <div className=" lg:text-start">
          <h1 className="text-xl font-mono font-bold pl-[1rem] pt-[5rem] lg:pl-[10rem] ">
            Shopping Cart
          </h1>
        </div>
      </div>
      <div className="space-y-10 px-[1rem]   lg:grid grid-cols-2 gap-10 lg:px-[10rem] ">
        <div className="m-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartItems.length > 0 ? (
                cartItems.map((product) => (
                  <CartProduct
                    id={product.id}
                    img={product.thumbnail}
                    title={product.title}
                    price={product.price}
                    quantity={product.quantity}
                    removeFromCart={removeFromCart}
                  />
                ))
              ) : (
                <h2>h2llo</h2>
              )}
            </ul>
          </div>
        </div>
        <div className="bg-[#F9FAFC] h-[26rem] my-5 p-3">
          <h2 className="text-lg font-mono font-bold ">Order Summary</h2>
          <div className="py-5 space-y-5">
            <div className="flex justify-between items-center border-b-2">
              <p className="text-md font-bold">Subtotal</p>
              <p className="font-bold">$ {totalItemPrice}</p>
            </div>
            <div className="flex justify-between items-center border-b-2">
              <p className="text-md font-bold">Tax Estimate</p>
              <p className="font-bold">$ {tax}</p>
            </div>
            <div className="flex justify-between items-center border-b-2">
              <p className="text-md font-bold">Order total</p>
              <p className="font-bold">${totalOrderAmount}</p>
            </div>
            <p className="text-[0.8rem]">Shipping is calculated at checkout.</p>
          </div>
          <Link to='/checkout'
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

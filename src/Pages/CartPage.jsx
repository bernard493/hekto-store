import React, { useMemo, useState } from "react";
import { useContext } from "react";
import { CartProduct } from "../components";
import { CartContext } from "../Hooks/Context/CartContext";
import { Link } from "react-router-dom";
import emptyCartImg from "../asserts/shopping-mall-1316787_1920.jpg";
import toast, { Toaster } from "react-hot-toast";

export const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [totalItemPrice, setTotalItemPrice] = useState(0);
  const [tax, setTax] = useState(20);
  const [totalOrderAmount, setTotalOrderAmount] = useState(0);

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

  const removeFromCartToaster = () =>
    toast.success("Removed from Cart Successfully");

  

  return (
    <div className=" ">
      <div className=" lg:text-start">
        <h2 className="text-3xl text-center text-gray-700 font-bold md:text-4xl md:text-start md:w-[35rem]">
          Cart
        </h2>
      </div>
      {cartItems.length > 0 ? (
        <>
          <div className="space-y-10 px-[1rem]   lg:grid grid-cols-2 gap-10 lg:px-[10rem] ">
            <div className="my-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartItems.map((product) => (
                    <CartProduct
                      key={product.id}
                      id={product.id}
                      img={product.thumbnail}
                      removeFromCartToaster={removeFromCartToaster}
                      title={product.title}
                      price={product.price}
                      quantity={product.quantity}
                      removeFromCart={removeFromCart}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-[#F9FAFC] h-[26rem] my-5 p-3">
              <h2 className="text-lg text-gray-700 font-bold ">
                Order Summary
              </h2>
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
                <p className="text-[0.8rem] text-gray-400 font-bold">
                  Shipping is calculated at checkout.
                </p>
              </div>
              <Link
                to="/checkout"
                className="flex items-center text-white font-bold justify-center rounded-md border border-transparent hover:no-underline bg-gray-600 px-6 py-3 text-base  shadow-sm hover:bg-gray-700"
              >
                Checkout
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-rows-2 gap-7 py-[5rem] md:flex md:items-center">
          <div className="order-last  space-y-6 md:pt-[9rem]">
            <p className="text-xl text-gray-700 text-center font-bold md:text-5xl">
              Opps!! shopping Cart is empty{" "}
            </p>
            
          </div>

          <div className=" flex justify-center  rounded-xl">
            <img
              src={emptyCartImg}
              alt="Empty Cart image"
              className="w-full p-3  object-center object-cover  rounded-xl h-[10rem]  md:h-[30rem]"
            />
          </div>
        </div>
      )}

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

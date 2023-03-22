import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import thankYouImg from "../asserts/store-906722_1920.jpg";


const getOrders = JSON.parse(localStorage.getItem("ORDER_PLACED"));
    


export const ThankYouPage = () => {
  const [orderedItems, setOrderedItems] = useState(getOrders);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = getOrders.map((order) => order.product);
    setProducts((prev) => getProducts[0]);
  }, []);

  console.log(orderedItems)

  const { address, apartment, city, State, ZipCode, FirstName, LastName } = orderedItems[0];
  const { totalOrderAmount, taxAmount, subTotal } = orderedItems[0].orderAmount;
  return (
    <div className="mx-3 ">
      <h2 className="text-2xl text-center my-3 font-bold md:text-start">
        Order Summary
      </h2>
      <div className="flex flex-col  md:grid grid-cols-2 gap-[5rem]">
        <div className="py-3">
          <img src={thankYouImg} alt="thank-You" className="rounded-lg" />
        </div>
        <div className="">
          <div className="mx-2 space-y-2  md:mt-[5rem]">
            <p className="text-[#234DBB] font-bold">Ordered Placed Successful</p>
            <h2 className="text-4xl font-bold ">Thanks for ordering from us  {orderedItems[0]?.FirstName}</h2>
            <p className=" md:w-[30rem] text-gray-500 font-bold">
              We appreciate your order and we're currently processing it. So hang on
              tight and we'll send you a confirmation very soon!
            </p>
          </div>
          <div className="my-[5rem] space-y-4 ">
            <div className="pb-3 border-b-2 space-y-2">
              <p className="text-md font-bold">Tracking Number</p>
              <div>
                <Link className="text-[#234DBB] font-bold text-[0.8rem]">
                  {orderedItems[0].orderId}
                </Link>
              </div>
            </div>
            <div className="">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {products &&
                  products.map((product) => (
                    <li key={product.id} className="flex py-6">
                      <div className="h-24 w-24 lg:h-[6rem] lg:w-[6rem] flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={product.thumbnail}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col space-y-3">
                        <div className="flex justify-between text-base items-center font-medium text-gray-900">
                          <p className="text-[.8rem] font-bold  ">
                            {product.title}
                          </p>
                          <p className=" text-[0.8rem] font-bold ">
                            $ {product.price}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <p className="text-[.8rem] font-bold w-20 ">
                            Brand: {product.brand}
                          </p>
                          <p className="text-[.8rem] font-bold  ">
                            Qnt: {product.quantity}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className=" space-y-6 py-4 border-t-2">
              <div className=" flex justify-between">
                <p className="font-bold text-gray-800 text-[1rem]">Subtotal</p>
                <p className="font-bold text-md ">$ {subTotal}</p>
              </div>
              <div className=" flex justify-between">
                <p className="font-bold text-gray-800 text-[1rem]">Shipping</p>
                <p className="font-bold text-md ">
                  $ {orderedItems[0].shippingMethod.price}
                </p>
              </div>
              <div className=" flex justify-between">
                <p className="font-bold text-gray-800 text-[1rem]">Taxes</p>
                <p className="font-bold text-md ">$ {taxAmount}</p>
              </div>
              <div className=" flex justify-between">
                <p className="font-bold text-gray-800 text-[1rem]">Total</p>
                <p className="font-bold text-md ">$ {totalOrderAmount}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <p className="font-bold text-gray-800 text-[1rem]">
                  Shipping Address
                </p>
                <p className="font-bold text-[0.8rem] ">{`${FirstName} ${LastName}`}</p>
                <p className="font-bold text-[0.8rem] w-[8rem] ">{`${address} ${apartment} ${city} ${State}, ${ZipCode} `}</p>
              </div>
              <div className="">
                <p className="font-bold text-gray-800 text-[1rem]">
                  Payment Information
                </p>
                <p className="font-bold text-[0.8rem] ">Ending with 4567 </p>
                <p className="font-bold text-[0.8rem] text-gray-500">
                  Expires 12/27{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

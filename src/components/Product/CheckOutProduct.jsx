import React from "react";

export const CheckOutProduct = ({ key, id, img, title, price, quantity }) => {
  return (
    <li key={key} className="flex py-2">
      <div className="h-20 w-20 lg:h-24 lg:w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={img}
          alt=""
          className="h-20 w-20 lg:h-24 lg:w-24 object-cover object-center"
        />
      </div>

      <div className="ml-4 grid grid-rows-2  gap-y-10 text-sm ">
        <div className="grid grid-cols-2 gap-x-10 justify-between">
          <div>
            <p className="w-[6rem]">{title}</p>
          </div>
          <div>
            <p className="ml-4 ">$ {price}</p>
          </div>
        </div>
        <div>
          <p className="text-gray-500">
            Qty <span className="font-bold">{quantity}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

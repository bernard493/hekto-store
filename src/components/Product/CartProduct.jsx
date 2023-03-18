import React, { useContext, useState } from "react";
import { CartContext } from "../../Hooks/Context/CartContext";
import { InputNumber } from "rsuite";
import {MdDeleteForever} from 'react-icons/md'


export const CartProduct = ({
  id,
  img,
  title,
  price,
  removeFromCart,
  removeFromCartToaster,
  quantity,
}) => {
  const { handleProductQuantity } = useContext(CartContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (value) => {
    setValue(value);
    handleProductQuantity(id, value);
    //console.log(id)
    //console.log(value)
  };

  const handelRemoveFromCart = () => {
    removeFromCart(id);
    removeFromCartToaster()
  };

  return (
    <li key={id} className="flex py-6">
      <div className="h-24 w-24 lg:h-[10rem] lg:w-[10rem] flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col space-y-8">
        <div className="flex justify-between text-base items-center font-medium text-gray-900">
          <p className="text-[.8rem] font-bold md:text-sm ">{title}</p>
          <p className=" text-[0.8rem] font-bold md:text-sm">$ {price}</p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div style={{ width: 100 }}>
            <InputNumber
              defaultValue={value === 0 ? quantity : value}
              max={100}
              min={1}
              onChange={handleChange}
              className="font-bold"
            />
          </div>
          <div className="">
            <button
              onClick={handelRemoveFromCart}
              className="flex  items-center  w-[6rem] px-6  border-2 border-gray-600 hover:bg-slate-500  xl:w-[7rem] rounded-xl  transition bg-white   "
            >
              <MdDeleteForever className="text-gray-700  h-8 w-8" />
              <span className="block text-[0.7rem]   text-gray-700  font-bold ">
              Remove
              </span>
            </button>
            
          </div>
        </div>
      </div>
    </li>
  );
};

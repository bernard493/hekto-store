import React ,{useContext,useState} from 'react'
import { CartContext } from '../../Hooks/Context/CartContext'
import { InputNumber } from 'rsuite';

import{
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} 
from '@chakra-ui/react'







export const CartProduct = ({id,img,title,price,removeFromCart,quantity }) => {
  const {handleProductQuantity} = useContext(CartContext)
  const [value, setValue] = React.useState(0)


  const handleChange = (value) =>{ 
    setValue(value)
    handleProductQuantity(id,value)
    //console.log(id)
    //console.log(value)
  }


 
  


  return (
    <li key={id} className="flex py-6">
    <div className="h-24 w-24 lg:h-[10rem] lg:w-[10rem] flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img
        src={img}
        alt=''
        className="h-full w-full object-cover object-center"
      />
    </div>

    <div className="ml-4 flex flex-1 flex-col">
   
        <div className="flex justify-between text-base items-center font-medium text-gray-900">
          <p className="text-[.8rem] md:text-sm " >
            {title}
          </p>
          <p className=" text-[.8rem] md:text-sm">$ {price}</p>
        </div>
      
      <div className="flex flex-1 items-end justify-between text-sm">
        <div style={{ width: 160 }}>
          <InputNumber defaultValue={value === 0 ? quantity : value} max={100} min={1} onChange={handleChange} />
        </div>
        <div className="flex">
          <button
          onClick={() => removeFromCart(id)}
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </li>
  )
}

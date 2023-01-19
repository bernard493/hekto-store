import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
export const Navbar = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-between  '>
        <div className='flex items-center space-x-3 py-[0.5rem]'>
          <div className='flex items-center space-x-2'>
              <AiOutlineMail className='text-sm'/>
              <p className='text-sm'>mhhasanul@gmail.com</p>
          </div>
          <div className='flex items-center space-x-2'>
              <AiOutlineMail className='text-sm'/>
              <p className='text-sm'>+233 5412 85990</p>
          </div>
          
        </div>
        <div className=' flex items-center space-x-2'>
          <AiOutlineMail/>
          <p>mhhasanul@gmail.com</p>
        </div>
       
      </div>
      
    </div>
  )
}

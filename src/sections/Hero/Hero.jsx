import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../asserts/sofa.png'

export const Hero = () => {
    



  return (
    <div className='flex flex-col   py-[3rem] bg-[#F2F0FF] md:flex md:flex-row md:space-x-20 justify-center  md:py-[5rem]'>
      <div className='py-[1rem] mx-[2rem] space-y-6 md:w-[30rem] md:pt-[5rem]'>
         <p className='text-sm text-center text-[#FB2E86] font-bold md:text-md md:text-start'>Best Furniture For Your Castle....</p>
         <h1 className='text-center text-3xl font-mono font-bold md:text-start md:text-4xl'>New Furniture Collection Trends in 2020</h1>
         <p className='text-center  md:text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscin in ph asellus non in justo.</p>
         <div className=' flex justify-center md:justify-start'>
            <Link to='/shop'>
               <button className='bg-[#FB2E86] h-[3rem] w-[8rem] text-[#fff] rounded-md'>Shop Now</button>
            </Link >
         </div>
      </div>
      <div className='flex justify-center py-[1rem] pt-[2rem]'>
         <img src={heroImg} alt="" className='h-[20rem] md:h-[25rem]' />
      </div>
      
    </div>
  )
}

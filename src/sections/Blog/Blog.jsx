import React from 'react'
import {BsVectorPen ,BsCalendar2Date} from  'react-icons/bs'










export const Blog = () => {


  
  return (
    
   <div className='py-[3rem] px-[5rem]'>
       <h2 className='text-center text-3xl text-[#3F509E] py-[2rem] font-mono font-bold'>Leatest Blog</h2>
       <div className="grid grid-cols gap-y-10 gap-x-6 px-[10rem] justify-center xl:grid-cols-3 xl:gap-x-1">
        <div className='flex justify-center'>
              <div className='rounded-xl border w-[17rem] h-[25rem]'>
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                className=' h-[13rem] w-[20rem] object-cover ' alt="" />
                <div className='pb-[1rem] px-[1rem]'>
                    <div className='flex space-x-6 py-[1rem] pl-[0.1rem]'>
                      <div className='flex items-center space-x-2'>
                          <BsVectorPen className='text-[#FB2E86]'/>
                          <p className='text-[0.7rem] font-bold'>Surfouxion</p>
                      </div>
                      <div className='flex items-center space-x-2'>
                          <BsCalendar2Date className='text-[#FFA454] '/>
                          <p className='text-[0.7rem] font-bold'>21 August,2020</p>
                      </div>

                    </div>
                    <div className='space-y-4 pb-[0.5rem]'>
                        <h3 className='text-md text-[#FB2E86] font-bold'>Top essential trends in 2021</h3>
                        <p className='text-sm'>More off this less hello samlande lied much
                         over tightly circa horse taped mightly</p>
                    </div>
                    <a href="" className='text-sm text-[#FB2E86] border-b-2 border-[FB2E86]-500 courser-pointer'>Read More</a>
                </div>
              </div>
        </div>

        <div className='flex justify-center'>
              <div className='rounded-xl border w-[17rem] h-[25rem]'>
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                className=' h-[13rem] w-[20rem] object-cover ' alt="" />
                <div className='pb-[rem] px-[1rem]'>
                    <div className='flex space-x-6 py-[1rem] pl-[0.1rem]'>
                      <div className='flex items-center space-x-2'>
                          <BsVectorPen className='text-[#FB2E86]'/>
                          <p className='text-[0.7rem] font-bold'>Surfouxion</p>
                      </div>
                      <div className='flex items-center space-x-2'>
                          <BsCalendar2Date className='text-[#FFA454] '/>
                          <p className='text-[0.7rem] font-bold'>21 August,2020</p>
                      </div>

                    </div>
                    <div className='space-y-4 pb-[0.5rem]'>
                        <h3 className='text-md text-[#FB2E86] font-bold'>Top essential trends in 2021</h3>
                        <p className='text-sm'>More off this less hello samlande lied much
                         over tightly circa horse taped mightly</p>
                    </div>
                    <a href="" className='text-sm text-[#FB2E86] border-b-2 border-[FB2E86]-500 courser-pointer'>Read More</a>
                </div>
              </div>
        </div>


        <div className='flex justify-center'>
              <div className='rounded-xl border w-[17rem] h-[25rem]'>
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                className=' h-[13rem] w-[20rem] object-cover ' alt="" />
                <div className='pb-[1rem] px-[1rem]'>
                    <div className='flex space-x-6 py-[1rem] pl-[0.1rem]'>
                      <div className='flex items-center space-x-2'>
                          <BsVectorPen className='text-[#FB2E86]'/>
                          <p className='text-[0.7rem] font-bold'>Surfouxion</p>
                      </div>
                      <div className='flex items-center space-x-2'>
                          <BsCalendar2Date className='text-[#FFA454] '/>
                          <p className='text-[0.7rem] font-bold'>21 August,2020</p>
                      </div>

                    </div>
                    <div className='space-y-4 pb-[0.5rem]'>
                        <h3 className='text-md text-[#FB2E86] font-bold'>Top essential trends in 2021</h3>
                        <p className='text-sm'>More off this less hello samlande lied much
                         over tightly circa horse taped mightly</p>
                    </div>
                    <a href="" className='text-sm text-[#FB2E86] border-b-2 border-[FB2E86]-500 courser-pointer'>Read More</a>
                </div>
              </div>
        </div>
            
    </div>
   </div>
      
   
  )
}

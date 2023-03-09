import React, { useContext, useMemo } from 'react'
import {useFetch} from '../../Hooks/useFetch'
import Carousel from 'react-multi-carousel';
import {BsFillCartCheckFill} from 'react-icons/bs'
import {FaEye} from 'react-icons/fa'
import heroImg from '../../asserts/image168.png'
import 'react-multi-carousel/lib/styles.css';
import { ProductDetailContext } from '../../Hooks/Context/ProductDetailContext';
import {CartContext} from '../../Hooks/Context/CartContext'
import { useState } from 'react';
import { Link } from 'react-router-dom';



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const FeaturedProduct = () => {
    const [data ] = useFetch('https://dummyjson.com/products')
    const [productDetails,setProductDetails] = useContext(ProductDetailContext)
    const {cartItems,addToCart} = useContext(CartContext)



    
  

   function getCurrentProductDetails(currentProductId){
    const currentProduct = data.filter(product => {
      return product.id === currentProductId && product
    })
     console.log(currentProduct)
     setProductDetails(prev => currentProduct)
        
   }
    
   
   //console.log(productDetails)
     
  
    return (
      <div className='pt-[5rem]'>
        <h3 className='text-center text-2xl font-mono font-bold rounded-md  md:text-3xl'>Featured Products</h3>
        <div className=' py-[rem] md:px-[6rem]'>
        <Carousel responsive={responsive}>
                { data ? data.map(product => (
               
                 <div className='flex justify-center my-[2rem] px-3' key={product.id}> 
                   <div className='bg-[#fff] h-[22rem] group  drop-shadow-md transition ease-in-out duration-300   hover:-translate-y-1 hover:scale-110  duration-300  w-[17rem] cursor-pointer  rounded-md '>
                       <div className='relative flex justify-center bg-[#F6F7FB] hover:bg-[#F7F7F7]'>
                         <img src={product.thumbnail} alt="" className='h-[12rem] p-3  drop-shadow-md  ' />
                              <div className='absolute md:hidden group-hover:block  w-full h-full  pt-[1rem] '>
                                <div className='flex space-x-1 ml-2'>
                                    <button  className=' bg-[#fff] h-[2.1rem] w-[2rem] flex items-center justify-center rounded-md text-md  '
                                    onClick={()=> addToCart(product.id)} > 
                                        <BsFillCartCheckFill className=''/>
                                        
                                    </button>
                                    <Link to={`shop/${product.id}`} > 
                                      <button 
                                      onClick={()=>(getCurrentProductDetails(product.id))}
                                       className=' bg-[#fff] h-[2.1rem] w-[2rem] flex items-center justify-center rounded-md text-md  ' > 
                                          
                                          <FaEye/>
                                      </button>
                                    </Link>
                                     
                                </div>
                                
                               
                              </div>
                            
                         
                       </div>
                       <div className=' pt-[1rem] mb-[2rem] text-center space-y-2 '>
                         <h3 className='pb-[0.5rem] font-bold text-[#FB2E86] '>{product.title}</h3>
                         <div className='flex justify-center space-x-1'>
                             <div className='bg-[#05E6B7] h-[0.3rem] w-[1rem]'/>
                             <div className='bg-[#FB2E86] h-[0.3rem] w-[1rem]'/>
                             <div className='bg-[#00009D] h-[0.3rem] w-[1rem]'/>
                         </div>
                         <p className='text-sm'>Code - Y523201</p>
                         <p className='text-sm'>${product.price}</p>
                           
                       </div>
                       
                        
                  </div>
             </div>
           
                  )):
                  <button type="button" className="bg-indigo-500 ..." disabled>
                  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                    
                  </svg>
                  Processing...
                </button>

                }
      
                
      </Carousel>
            
        </div>
      </div>
    )
}

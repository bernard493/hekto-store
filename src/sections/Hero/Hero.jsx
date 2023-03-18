import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

export const Hero = () => {
    const [discount ,setDiscount] = useState(70)

     const heroImg  = {
         img1 : 'https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/kushagra.webp',
         img2 : 'https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/iman.webp',
         img3 : 'https://tailus.io/sources/blocks/ecommerce-site/preview/images/products/daniel.webp',
     }

  return (
   <div className="py-13 p-4 bg-gray-100 rounded-2xl">
    <div  className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:p-10">
        <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
            <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                <h1 className="text-4xl text-gray-700 font-bold md:text-5xl">Buy now and benefit up to <span className="text-blue-500">{discount}% off</span></h1>
                <p className="text-lg">Be part of millions people around the world using tailus in modern User Interfaces.</p>
                <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                    <Link  to="/shop" type="button" title="Start buying" className="w-full py-3 hover:no-underline px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max">
                        <span className="block text-white font-semibold ">
                            Start buying
                        </span>
                    </Link>
                   
                </div>
            </div>
            <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12 ">
                <div className="col-span-2 row-span-4">
                    <img src={heroImg.img1} className="rounded-full" width="540" height="860" alt="shoes" loading="lazy" />
                </div>
                <div className="col-span-2 row-span-2">
                    <img src={heroImg.img2} className="w-full h-full object-cover object-top rounded-xl" width="540" height="540" alt="shoe" loading="lazy" />
                </div>
                <div className="col-span-3 row-span-3">
                    <img src={heroImg.img3} className="w-full h-full object-cover object-top rounded-xl" width="640" height="427" alt="shoes" loading="lazy" />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

import React from 'react'
import {Hero, Blog ,DiscountItem, FeaturedProduct, ProductSection, Offer, Features} from '../sections/index'

export const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <FeaturedProduct/>
      <ProductSection/>
      <Offer/>
      <Features/>
      <Blog/>
      
    </div>
  )
}

import React from 'react'
import {Hero, Blog , FeaturedProduct, Offer, Brands,CurrentPicks,CustomerExperiences ,NewsLater} from '../sections/index'

export const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <Brands/>
      <CustomerExperiences/>
      <CurrentPicks/>
      <FeaturedProduct/>
      <Offer/>
      <NewsLater/>
      <Blog/>
      
    </div>
  )
}

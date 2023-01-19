import React from 'react'
import {Navbar,Footer,Product} from '../components/index'
import {Hero, Blog ,DiscountItem} from '../sections/index'

export const Home = () => {
  return (
    <div className='px-[1rem] xl:px-[3rem]'>
      <Navbar/>
      <Hero/>
      <Blog/>
      <DiscountItem/>
      <Footer/>
    </div>
  )
}

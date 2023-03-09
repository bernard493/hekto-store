import React from 'react'
import img1 from '../../asserts/Group153.png'

export const Features = () => {
  return (
    
      <div className=' py-[3rem] bg-[#F1F0FF] md:grid grid-cols-2 gap-2'>
          <div className='flex justify-center py-[1rem] '>
              <img src={img1} alt="" className=' h-[20rem] md:h-[30rem]' />
          </div>
      <div className='text-center space-y-5  px-[1rem] md:pt-[4rem] md:text-start'>
        <div className='py-[3rem] md:pr-[3rem]'>
            <h2 className='text-xl font-bold font-mono  text-[#0D0E43] md:text-3xl'>Unique Features Of leatest & Trending Poducts</h2>
        </div>
        <div>
          
        </div>
          <div className='flex space-x-3 items-center'>
              <div className='bg-[#F52B70] h-3 w-3 rounded-xl'/>
              <p className='text-sm md:text-md'>All frames constructed with hardwood solids and laminates</p>
          </div>
          <div className='flex space-x-3 items-center'>
              <div className='bg-[#2B2BF5] h-3 w-3 rounded-xl'/>
              <p className='text-sm md:text-md'>Reinforced with double wood dowels, glue, screw - nails corner 
                 blocks and machine nails</p>
          </div>
          <div className='flex space-x-3 items-center'>
              <div className='bg-[#2BF5CC] h-3 w-3 rounded-xl'/>
              <p className='text-sm md:text-md'>Arms, backs and seats are structurally reinforced</p>
          </div>
          
      </div>
      
    </div>
    
  )
}

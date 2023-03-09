import React from 'react'
import img1 from '../../asserts/Group.png'
import img2 from '../../asserts/premium-quality 1.png'
import img3 from '../../asserts/24-hours-support.png'
import img4 from '../../asserts/cashback .png'

export const Offer = () => {
  return (
    <div className='py-[5rem]'>
      <div className='text-center text-[#0D0E43] pb-[3rem]'>
           <h2 className='text-2xl font-bold md:text-3xl'>What Shopex Offer!</h2>
      </div>
      <div className='px-[3rem] space-y-4 md:px-[15rem] md:grid grid-cols-4 gap-4'>
        <div className='text-center rounded-xl shadow-md'>
          <div className='flex justify-center pt-4'>
            <img src={img2} alt="" className='object-cover object-center '/>
          </div>
          <div className='p-4  space-y-3'>
            <h3  className='text-[#0D0E43] font-bold'>24/7 Support</h3>
            <p className='text-[#1A0B5B]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>

        </div>
        <div className='text-center rounded-xl shadow-md'>
           <div className='flex justify-center pt-4'>
            <img src={img2} alt="" className='object-cover object-center '/>
          </div>        
            <div className='p-4  space-y-3'>
            <h3 className='text-[#0D0E43] font-bold'>24/7 Support</h3>
            <p className='text-[#1A0B5B]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>

        </div>
        <div className='text-center rounded-xl shadow-md'>
          <div className='flex justify-center pt-4'>
            <img src={img3} alt="" className='object-cover object-center '/>
          </div>          
          <div className='p-4  space-y-3'>
            <h3 className='text-[#0D0E43] font-bold'>24/7 Support</h3>
            <p className='text-[#1A0B5B]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>

        </div>
        <div className='text-center rounded-xl shadow-md'>
             <div className='flex justify-center pt-4'>
               <img src={img4} alt="" className='object-cover object-center '/>
             </div>        
              <div className='p-4  space-y-3'>
            <h3 className='text-[#0D0E43] font-bold'>24/7 Support</h3>
            <p className='text-[#1A0B5B]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
          </div>

        </div>
         
      </div>

    </div>
  )
}

import React from 'react'
import logo from '../../asserts/Hekto.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Footer = () => {
  return (
    <div className='bg-[#F1F0FF] '>
             <div className="grid grid-cols gap-y-10 gap-x-6 px-[10rem] py-[3rem] justify-center text-center  xl:grid-cols-4 xl:gap-x-10">
              <div className='space-y-5'>
                <img src={logo} alt="" />
                  <InputGroup className="mb-3">
                        <Form.Control
                          placeholder="Enter Email Address"
                          aria-label="Enter Email Address"
                          aria-describedby="basic-addon2"
                        />
                        <Button variant="secondary"  id="button-addon2">
                          Sign Up
                        </Button>
                    </InputGroup>
                    <div>
                    <p>Address</p>
                    <p className='text-sm'>17 Princess Road, London, Greater London NW1 8JR, UK</p>  
                    </div>
                                  
              </div>
              <div className='space-y-6'>
                <div>
                  <h2 className="text-xl font-bold font-mono">Catagories</h2>
                </div>
                <div className=''>
                  <ul className='space-y-2'>
                    <li><a href="" className='text-sm'>Laptops & Computers</a></li>
                    <li><a href="" className='text-sm'>Cameras & Photography</a></li>
                    <li><a href="" className='text-sm'>Smart Phones & Tablets</a></li>
                    <li><a href="" className='text-sm'>Video Games & Consoles</a></li>
                    <li><a href="" className='text-sm'>Waterproof Headphones</a></li>
                  </ul>
                </div>

              </div>
              <div className='space-y-6'>
                <div>
                  <h2 className="text-xl font-bold font-mono">Catagories</h2>
                </div>
                <div className=''>
                  <ul className='space-y-2'>
                    <li><a href="" className='text-sm'>Laptops & Computers</a></li>
                    <li><a href="" className='text-sm'>Cameras & Photography</a></li>
                    <li><a href="" className='text-sm'>Smart Phones & Tablets</a></li>
                    <li><a href="" className='text-sm'>Video Games & Consoles</a></li>
                    <li><a href="" className='text-sm'>Waterproof Headphones</a></li>
                  </ul>
                </div>

              </div>
              <div className='space-y-6'>
                <div>
                  <h2 className="text-xl font-bold font-mono">Catagories</h2>
                </div>
                <div className=''>
                  <ul className='space-y-2'>
                    <li><a href="" className='text-sm'>Laptops & Computers</a></li>
                    <li><a href="" className='text-sm'>Cameras & Photography</a></li>
                    <li><a href="" className='text-sm'>Smart Phones & Tablets</a></li>
                    <li><a href="" className='text-sm'>Video Games & Consoles</a></li>
                    <li><a href="" className='text-sm'>Waterproof Headphones</a></li>
                  </ul>
                </div>

              </div>

            </div>
      
    </div>
  )
}

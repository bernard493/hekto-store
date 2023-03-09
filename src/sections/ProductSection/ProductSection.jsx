import React ,{useState ,useContext} from 'react'
import {useFetch} from '../../Hooks/useFetch'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {AiFillLike} from 'react-icons/ai'
import {FaEye} from 'react-icons/fa'
import { ProductDetailContext } from '../../Hooks/Context/ProductDetailContext';
import { Link } from 'react-router-dom'
import { Tab } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const ProductSection = () => {
  const [category ,setCategory ] = useState('smartphones')
  const [data ] = useFetch('https://dummyjson.com/products')
  const [productDetails,setProductDetails] = useContext(ProductDetailContext)
  const [categories ,setCategories] = useState(['Smartphones','Laptops','Skincare', 'Fragrances'])




  function getCurrentProductDetails(currentProductId){
    const currentProduct = data.filter(product => {
      return product.id === currentProductId && product
    })
     console.log(currentProduct)
     setProductDetails(prev => currentProduct)
        
   }
    
console.log(data)
    




 
  return (
     <div className=''>
      <div className='text-center space-y-4 '>
          <h3 className='text-center text-[#3F509E] text-2xl font-mono font-bold rounded-md  md:text-3xl'>Leatest Products</h3>
          
      </div>
      <div className="w-full px-[1rem] py-16  md:px-[20rem] ">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                {categories.map((category,index) => (
                  <Tab
                    key={index}
                    onClick={()=>{setCategory(prev => category.toLocaleLowerCase())}}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                        selected
                          ? 'bg-white shadow'
                          : 'text-black hover:bg-white/[0.12] hover:text-white'
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
             
            </Tab.Group>
          </div>       

      <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-10 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-[10rem]">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-2 gap-y-10 gap-x-6  xl:grid-cols-3 xl:gap-x-8">
          {data.filter(product => product.category === category ).slice(0,6).map((product) => (
         
            <a  key={product.id} className="group font-mono cursor-pointer	" >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.thumbnail}
                  alt=''
                  className=" h-full w-full object-cover object-center group-hover:opacity-75"
                />
                <div className='hidden group-hover:block space-y-3 ml-3 mt-3'>
                                    <button  className=' bg-[#fff] h-[2.1rem] w-[2rem] flex items-center justify-center rounded-md text-md  ' > 
                                        <BsFillCartCheckFill className=''/>
                                        
                                    </button>
                                    <Link to={'/shop/'+ product.id} >
                                        <button 
                                        onClick={()=>(getCurrentProductDetails(product.id))}
                                         className=' bg-[#fff] h-[2.1rem] w-[2rem] flex items-center justify-center rounded-md text-md  ' > 
                                            
                                            <FaEye/>
                                        </button>
                                    </Link>
                                    
                                     
                                
                
                </div>
              </div>
              <div className='flex justify-between items-center mt-2 md:flex flex-col space-y-3'>
                  <h3 className="text-sm md:text-lg text-[#2F1AC4] font-bold">{product.title}</h3>
                  <div className='flex items-center space-x-3'>
                      <p className=" text-sm  text-[#2F1AC4]">{product.price}</p>
                      <p className=" text-sm "><span className='text-[red]'>{product.price}</span></p>
                  </div>
                 
              </div>
              
            </a>
        
          ))}
        </div>
      </div>
    </div>
     </div>
  )
}



{/** <div className='flex space-x-3 md:space-x-10 justify-center items-center font-mono font-bold text-[#3F509E]'>
              <p className='text-[0.8rem] md:text-sm hover:text-[#FB2E86] hover:border-b-2 border-pink-500' onClick={()=>{setCategory(prev => 'smartphones')}}>Smart Phones</p>
              <p className='text-[0.8rem] md:text-sm hover:text-[#FB2E86] hover:border-b-2 border-pink-500' onClick={()=>{setCategory(prev => 'laptops')}}>Laptops</p>
              <p className='text-[0.8rem] md:text-sm hover:text-[#FB2E86] hover:border-b-2 border-pink-500' onClick={()=>{setCategory(prev => 'skincare')}}>Skin Care</p>
              <p className='text-[0.8rem] md:text-sm hover:text-[#FB2E86] hover:border-b-2 border-pink-500' onClick={()=>{setCategory(prev => 'fragrances')}}>Fragrances</p>
          </div>   */}
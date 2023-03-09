import React,{useState ,useContext} from 'react'
import { Product, ProductDetail } from '../components';
import { Loader } from 'rsuite';
import { Drawer, RadioGroup, Radio, ButtonToolbar, Button, IconButton, Placeholder } from 'rsuite';
import {useFetch} from '../Hooks/useFetch'
import { ProductDetailContext } from '../Hooks/Context/ProductDetailContext';
import  'rsuite/dist/rsuite.min.css'
import { ProductDetails } from './ProductDetails';
import {CartContext} from '../Hooks/Context/CartContext'

export const Shop = () => {
  const [data ] = useFetch('https://dummyjson.com/products');
  const [productDetail,setProductDetail] = useContext(ProductDetailContext);
  const [size, setSize] = useState('full');
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const {cartItems, addToCart,removeFromCart}= useContext(CartContext)

  

  const getCurrentProductDetails = (e,currentProductId) => {
    const currentProduct = data.filter(product => {
      return product.id === currentProductId && product
    })
    
        if(currentProduct){
          setProductDetail(prev => currentProduct)
          setOpen(true);
          
        }
     
   }

   
   //setCart(1)
   //console.log(cartItems)

  const product = 
    data.map((product) => (
       <Product  
          getCurrentProductDetails={getCurrentProductDetails}
          id={product.id}
          productImg = {product.thumbnail}
          title={product.title}
          brand={product.brand}
          price={product.price}
          addToCart={addToCart}
          //add the rest of props here 
       />
       ))
  
 

  

  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

      <div className="grid grid-cols-2 gap-y-10 gap-x-10  xl:grid-cols-4 xl:gap-x-8">
         {data.length > 0 ? product :
         (<Loader content="Loading..." />)}  
      </div>
    </div>
    
     <Drawer size={size} placement={placement} open={open} onClose={() => setOpen(false)}>
        <Drawer.Header>
          <Drawer.Title>Product Detail</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpen(false)} appearance="primary">
            Cancel
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <ProductDetails  />
        </Drawer.Body>
      </Drawer>
  </div>
  )
}
{/** <Link to={'/shop/'+ product.id} key={product.id} >
          
        </Link> */}
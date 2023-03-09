import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Product = ({price,brand,title,getCurrentProductDetails,id,productImg,addToCart}) => {
 
  

  return (
    <>
     <Card className='w-10rem' key={id}>
      <Card.Img variant="top" style={{ height: '11rem' }} src={productImg} />
      <Card.Body>
        <div className='flex justify-between'>
         <Card.Title style={{ fontSize: '1rem' ,width: '10rem' }}>{title}</Card.Title>
         <Card.Title>${price}</Card.Title>
        </div>
        <Card.Text style={{ paddingBottom: '1rem' }}>
          Brand: {brand}
        </Card.Text>
        <Button variant="primary" onClick={(e)=> getCurrentProductDetails(e,id)} >View Detail</Button>
        <Button variant="outline-success" onClick={() => addToCart(id)} >Add to cart</Button>
      </Card.Body>
    </Card>
        
   </>
  )
}

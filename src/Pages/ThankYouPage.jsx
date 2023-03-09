import React ,{useState ,useEffect}from "react";
import thankYouImg from "../asserts/store-906722_1920.jpg";




export const ThankYouPage = () => {
   const [orderedItems ,setOrderedItems] = useState([])      
   const [products ,setProducts] = useState(null)      


   useEffect(()=>{
    const getOrders = JSON.parse(localStorage.getItem("ORDER_PLACED"))
    setOrderedItems(prev => getOrders)
    setProducts(prev =>getOrders.map(order => order.product))
    console.log(getOrders)

   },[])

   

//console.log(products)
  return (
    <div className="mx-3 ">
      <h2 className="text-2xl text-center my-3 font-bold md:text-start">
        Order Summary
      </h2>
      <div className="flex flex-col  md:grid grid-cols-2 gap-[5rem]">
        <div className="py-3">
          <img
            src={thankYouImg}
            alt="thank-You"
            className="rounded-t-lg  md:rounded-l-lg"
          />
        </div>
        <div className="">
          <div className="mx-2 space-y-2  md:mt-[5rem]">
            <p className="text-[#234DBB]">Payment Successful</p>
            <h2 className="text-4xl font-bold ">Thanks for ordering</h2>
            <p className=" md:w-[30rem]">
              We appreciate your order,we're currently processing it. So hang
              tight and we'll send you a confirmation very soon
            </p>
          </div>
          <div className="my-[5rem] ">
            <div className="pb-3 border-b-2">
              <p className="text-md">Tracking Number</p>
              <p className="text-[#234DBB] text-[1rem]">584684968492495452</p>
            </div>
            <div className="">
              {/** dislay order producs  */}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

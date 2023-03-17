import React, { useContext } from "react";
import { Product } from "../components";
import { Loader } from "rsuite";
import toast, { Toaster } from "react-hot-toast";

import { useFetch } from "../Hooks/useFetch";
import "rsuite/dist/rsuite.min.css";
import { CartContext } from "../Hooks/Context/CartContext";

export const Shop = () => {
  const [data] = useFetch("https://dummyjson.com/products");
  const { addToCart } = useContext(CartContext);

  const addToCartToaster = () => toast.success('Added to Cart Successfully');

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16  sm:py-24  lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight pb-3 md:pb-10 text-gray-900">
          Products
        </h2>
        <div className="">
          <div className="grid grid-cols-2 gap-x-2 md:gap-y-10 md:gap-x-10  xl:grid-cols-4 xl:gap-x-8">
            {data.length > 0 ? (
              data.map((product) => (
                <Product
                  id={product.id}
                  discountPercentage={product.discountPercentage}
                  description={product.description}
                  productImg={product.thumbnail}
                  title={product.title}
                  brand={product.brand}
                  addToCartToaster={addToCartToaster}
                  price={product.price}
                  addToCart={addToCart}
                  //add the rest of props here
                />
              ))
            ) : (
              <>
                <Loader content="Loading" />
              </>
            )}
          </div>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </div>
    </div>
  );
};

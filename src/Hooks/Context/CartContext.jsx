import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { useFetch } from "../../Hooks/useFetch";

export const CartContext = createContext(null);

const getCartItems = JSON.parse(localStorage.getItem("SET_CART_ITEMS") || "[]");

export const CartContextProvider = (props) => {
  const [data] = useFetch("https://dummyjson.com/products");
  const [cartItems, setCartItems] = useState(getCartItems);
  const [cartItemsQuantity, setCartItemsQuantity] = useState([]);
  //const navigate = useNavigate();
  
  useEffect(() => {
    localStorage.setItem("SET_CART_ITEMS", JSON.stringify(cartItems));
    
  }, [cartItems]);

  const addToCart = (productId) => {
    const product = data.find((product) => product.id === productId);
    const productExist = cartItems.filter((item) => item.id === product.id);
    if (productExist.length >= 1) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([{ ...product, quantity: 1 }, ...cartItems]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleProductQuantity = (id, value) => {
    setCartItems((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Number(value),
            }
          : product
      )
    );
  };

  const cartContextValue = {
    cartItems,
    cartItemsQuantity,
    addToCart,
    removeFromCart,
    setCartItems,
    handleProductQuantity,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

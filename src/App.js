import React, { useContext, useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ProductDetailContext } from "./Hooks/Context/ProductDetailContext";
import { CartContextProvider } from "./Hooks/Context/CartContext";
import { Layout } from "./components/Layout/Layout";

function App() {
  const [productDetail, setProductDetail] = useState(null);

  const productData = useMemo(
    () => [productDetail, setProductDetail],
    [productDetail, setProductDetail]
  );

  return (
    <ChakraProvider>
      <ProductDetailContext.Provider value={productData}>
        <CartContextProvider>
          <Layout />
        </CartContextProvider>
      </ProductDetailContext.Provider>
    </ChakraProvider>
  );
}

export default App;

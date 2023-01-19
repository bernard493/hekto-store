import React from "react";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import {Home,AboutUs,ContactUs} from './Pages/index'

function App() {
  return (
    <ChakraProvider>
        <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/aboutus' element={<AboutUs/>} />
              <Route exact path='/contactus' element={<ContactUs/>} />
            </Routes>
        </BrowserRouter>     
    </ChakraProvider>

  );
}

export default App;

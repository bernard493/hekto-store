import React from 'react'
import { Routers } from '../../Routers/Routers'
import { NavbarComponent  , Footer} from "../index";

export const  Layout = () => {
  return (
    <>
    <NavbarComponent/>
        <div>
        <Routers/>
        </div>
    <Footer/>
    </>
  )
}

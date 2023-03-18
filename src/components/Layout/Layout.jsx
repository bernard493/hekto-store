import React from "react";
import { Routers } from "../../Routers/Routers";
import { NavbarComponent, Footer } from "../index";

export const Layout = () => {
  return (
    <div className="font-Poppins">
      <NavbarComponent />
      <div className="mx-[1rem] md:mx-[3rem] ">
        <Routers />
      </div>

      <Footer />
    </div>
  );
};

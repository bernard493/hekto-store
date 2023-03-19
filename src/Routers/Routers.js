import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  AboutUs,
  ContactUs,
  Blogs,
  BlogDetails,
  ThankYouPage,
  CartPage,
  Faq,
  NotFound,
  ProductDetails,
  Shop,
  Checkout,
  OrderComplete,
} from "../Pages/index";

export const Routers = () => {
  return (
    <Routes>
      <Route exact path="/hekto-store" element={<Home />} />
      <Route exact path="blogs" element={<Blogs />} />
      <Route exact path="blog-detail/:id" element={<BlogDetails />} />
      <Route exact path="/cart" element={<CartPage />} />
      <Route exact path="order"  element={<OrderComplete />} />
      <Route exact path="faq" element={<Faq />} />
      <Route exact path="404" element={<NotFound />} />
      <Route exact path="hekto-store/shop/:id" element={<ProductDetails />} />
      <Route exact path="hekto-store/checkout" element={<Checkout />} />
      <Route exact path="hekto-store/shop" element={<Shop />} />
      <Route exact path="aboutus" element={<AboutUs />} />
      <Route exact path="contactus" element={<ContactUs />} />
      <Route exact path="hekto-store/Thank-You-Page" element={<ThankYouPage />} />
    </Routes>
  );
};

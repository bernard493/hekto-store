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
      <Route exact path="/hekto-store/blogs" element={<Blogs />} />
      <Route exact path="/blog-detail/:id" element={<BlogDetails />} />
      <Route exact path="/hekto-store/cart" element={<CartPage />} />
      <Route exact path="/hekto-store/order" element={<OrderComplete />} />
      <Route exact path="/hekto-store/faq" element={<Faq />} />
      <Route exact path="/hekto-store/404" element={<NotFound />} />
      <Route exact path="/hekto-store/Shop/:id" element={<ProductDetails />} />
      <Route exact path="/hekto-store/checkout" element={<Checkout />} />
      <Route exact path="/hekto-store/Shop" element={<Shop />} />
      <Route exact path="/hekto-store/aboutus" element={<AboutUs />} />
      <Route exact path="/hekto-store/contactus" element={<ContactUs />} />
      <Route exact path="/hekto-store/Thank-You-Page" element={<ThankYouPage />} />
    </Routes>
  );
};

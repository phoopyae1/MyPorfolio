import React from "react";
import ITName from "../components/intro/ITName";
import ProductList from "../components/productList/ProductList";
import Contact from "../components/contact/Contact";
import Aboutv1 from "../components/about/Aboutv1";

const Home = () => {
  return (
    <>
      <ITName />
      <Aboutv1 />
      <ProductList />
      <Contact />
    </>
  );
};

export default Home;

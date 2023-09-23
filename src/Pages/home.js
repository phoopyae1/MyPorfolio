import React from "react";
import About from "../components/about/About";
import ITName from "../components/intro/ITName";
import ProductList from "../components/productList/ProductList";

const Home = () => {
  return (
    <>
      <ITName />
      <About />
      <ProductList />
    </>
  );
};

export default Home;

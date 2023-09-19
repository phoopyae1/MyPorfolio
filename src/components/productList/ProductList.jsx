import React from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">
          Phoo Pyae Pyae Soe's creation & inspiration
        </h1>
        <p className="pl-desc">
          "From 2016 to the present, I have been actively involved in projects .
          You can explore these projects in detail in my portfolio."
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

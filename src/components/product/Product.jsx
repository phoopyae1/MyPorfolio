import React from "react";
import "./product.css";
const Product = ({ img, link, text }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Product;

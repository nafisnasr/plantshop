import React from "react";
import "./ProductBox.css";

export default function ProductBox({ img, title, price }) {
  return (
    <div className="col-lg-3 col-md-5 col-6">
      <div className="product-box">
        <div className="img-box">
          <img src={img} className="container-fluid" alt={title} />
        </div>
        <div className="text-box">
          <h6 className="title">{title}</h6>
          <span className="price">${price}</span>
        </div>
      </div>
    </div>
  );
}

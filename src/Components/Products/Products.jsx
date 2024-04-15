import React, { useState } from "react";
import "./Products.css";
import ProductBox from "../ProductBox/ProductBox";
import { productsData } from "../../data";
import MoreBtn from "../MoreBtn/MoreBtn";

export default function Products() {
  const [products] = useState(productsData);

  return (
    <div className="products">
      <div className="container">
        <div className="wrapper row">
          <div className="col-lg-3 col-md-5 col-6">
            <h4>Best Selling Plants</h4>
            <p className="sub-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <MoreBtn title="See more" backcolor="light-blue"/>
          </div>
          {products.map((item) => (
            <ProductBox key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

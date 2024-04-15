import React from "react";
import "./CategoryBox.css"

export default function CategoryBox({ img, title }) {
  return (
    <div className="col-lg-3 col-7">
      <div className="category-box">
        <img src={img} alt={title} />
        <span>{title}</span>
      </div>
    </div>
  );
}

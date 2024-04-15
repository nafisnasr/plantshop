import React, { useState } from "react";
import TitleSection from "../TitleSection/TitleSection";
import "./Categories.css";
import CategoryBox from "../CateoryBox/CategoryBox";
import { categoriesData } from "../../data";
import MoreBtn from "../MoreBtn/MoreBtn";

export default function Categories() {
  const [categories] = useState(categoriesData);

  return (
    <div className="categories">
      <TitleSection title="Category" desc="Find what are you looking" />

      <div className="categories-container">
        <div className="wrapper row">
          {categories.map((item) => (
            <CategoryBox key={item.id} {...item} />
          ))}
        </div>
        <div className="more-info-box my-3">
          <p className="w-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
            ipsum dolor sit.
          </p>
          <MoreBtn title="See more" backcolor="white"/>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./FeatureBox.css";

export default function FeatureBox({ title, img }) {
  return (
    <div className="col-lg-4 col-md-3 col-11">
      <div className="feature-box">
        <div className="icon-box">
          <img className="icon" src={img} alt={title} />
        </div>
        <div className="text-box">
          <h4 className="title">{title}</h4>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quos dicta aut dolorum?
          </p>
        </div>
      </div>
    </div>
  );
}

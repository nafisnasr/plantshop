import React from "react";
import "./QuoteBox.css";

export default function QuoteBox() {
  return (
    <div className="col-lg-6 col-md-5 col-11 my-3">
      <div className="quote-box">
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi maiores
          est deleniti enim?Lorem ipsum dolor sit amet, consectetur adipisicing
          elit.
        </p>

        <div className="icon-box my-2 container-fluid">
          <div className="author-box">
            <img className="quote" src="./images/quote.png" alt="" />
            <div className="author mx-3">
              <span className="name">John don</span>
              <span className="sub-text">Writer</span>
            </div>
          </div>
          <div className="rate-box">
            <img src="./images/rate.png" alt="" />
            <span className="mx-2">4.5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

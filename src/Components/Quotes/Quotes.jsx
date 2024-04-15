import React from "react";
import "./Quotes.css";
import QuoteBox from "../QuoteBox/QuoteBox";

export default function Quotes() {
  return (
    <div className="quotes">
      <div className="title-box container my-3">
        <h3 className="title">What customers say about</h3>
        <h3 className="title">GREENMIND ?</h3>
      </div>

      <div className="container">
        <div className="wrapper row my-3">
          <QuoteBox />
          <QuoteBox />
        </div>
      </div>
    </div>
  );
}

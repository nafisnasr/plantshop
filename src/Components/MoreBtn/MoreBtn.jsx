import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./MoreBtn.css"

export default function MoreBtn({ title, backcolor }) {
  return (
    <button className={`see-more-btn ${backcolor}`}>
      {title}
      <FaArrowRight className="icon" />
    </button>
  );
}

import React from "react";
import "./TitleSection.css";

export default function TitleSection({ title, desc }) {
  return (
    <section className="my-2 container" id="title-section">
      <h3 className="title">{title}</h3>
      <p className="text">{desc}</p>
    </section>
  );
}

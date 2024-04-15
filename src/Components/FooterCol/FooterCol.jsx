import React from "react";

export default function FooterCol({ title, children }) {
  return (
    <div className="col-lg-2 col-4">
      <div className="footer-wrapper my-2">
        <h5 className="title">{title}</h5>
        <div className="list">{children}</div>
      </div>
    </div>
  );
}

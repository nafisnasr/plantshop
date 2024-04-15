import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container p-2">
        <a className="navbar-brand" href="#">
          GREENMIND
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Contacts
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <a href="#" className="mx-3">
              <FaRegUser className="icon" />
            </a>
            <a href="#" className="mx-3">
              <MdOutlineShoppingCart className="icon" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

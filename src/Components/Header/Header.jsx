import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import "./Header.css";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-box container">
                <h1 className="title">Buy your</h1>
                <h1 className="title">dream plants</h1>
              </div>
              <div className="charts">
                <div className="chart-box">
                  <h3>50+</h3>
                  <p>plant species</p>
                </div>
                <div className="chart-box right-chart">
                  <h3>100+</h3>
                  <p>customers</p>
                </div>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="type here..."
                />
                <button className="search-btn">
                  <IoSearchOutline className="icon" />
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-section">
                <img
                  src="/images/arrow.png"
                  alt="PlantShop"
                  className="top-arrow arrow"
                />
                <div className="img-container">
                  <img
                    src="/images/flower.png"
                    alt="PlantShop"
                    className="img"
                  />
                </div>
                <img
                  src="/images/arrow.png"
                  alt="PlantShop"
                  className="bottom-arrow arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

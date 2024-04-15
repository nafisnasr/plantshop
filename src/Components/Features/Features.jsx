import React, { useState } from "react";
import "./Features.css";
import TitleSection from "../TitleSection/TitleSection";
import FeatureBox from "../FeatureBox/FeatureBox";
import { featuresData } from "../../data";

export default function Features() {

  const [features] = useState(featuresData);

  return (
    <div className="features">
      <TitleSection
        title={"Features"}
        desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
      />
      <div className="container">
        <div className="wrapper row">
          {features.map((item) => (
            <FeatureBox key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

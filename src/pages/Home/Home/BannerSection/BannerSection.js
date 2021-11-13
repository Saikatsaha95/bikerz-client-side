import React from "react";
import "./BannerSection.css";
import cycle from "../../../../images/cycle-banner.jpg";

const BannerSection = () => {
  return (
    <div className="container">
      <img className="img-fluid" src={cycle} alt="" />
    </div>
  );
};

export default BannerSection;

import React from "react";
import about from "../assets/about.svg";

const About = () => {
  return (
    <div className="about-container">
      <div className="container">
        <div className="image">
          <img src={about} alt="about-image" />
        </div>
        <div className="title-container">
          <div className="title">About us</div>
          <div className="subtitle">
            Our mission is to build business solutions
          </div>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default About;

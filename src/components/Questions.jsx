import React from "react";
import questions from "../assets/questions.svg";

const Questions = () => {
  return (
    <div className="questions-container">
      <div className="container">
        <div className="title-container">
          <div className="title">Have any questions ?</div>
          <div className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptate voluptates eius quia dolor voluptatem nam. Accusantium
            voluptatibus sequi neque officiis, eum dolore. Natus a laborum nisi
            aliquid inventore harum.
          </div>
          <button>Contact us</button>
        </div>
        <div className="image">
          <img src={questions} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Questions;

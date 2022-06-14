import React from "react";
import avatar from "../assets/avatar.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

const Feedback = () => {
  return (
    <div className="about-us-container">
      <div className="container">
        <div className="title-container">
          <div className="title">What people say about us</div>
          <div className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            libero eius nesciunt porro! Ad in ab tenetur aliquam ullam nihil
            sunt ut voluptatem temporibus mollitia quod nemo, vero nesciunt
            totam?{" "}
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda praesentium doloribus quidem eaque quasi quas
              accusantium, porro voluptatum! Eos, aperiam debitis. Placeat id
              aperiam animi delectus ullam numquam aut cupiditate!
            </div>
            <div className="photo">
              <img src={avatar} alt="" />
            </div>
            <div className="name">Kishan</div>
            <div className="profile">Developer</div>
          </div>
          <div className="card">
            <div className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda praesentium doloribus quidem eaque quasi quas
              accusantium, porro voluptatum! Eos, aperiam debitis. Placeat id
              aperiam animi delectus ullam numquam aut cupiditate!
            </div>
            <div className="photo">
              <img src={avatar2} alt="" />
            </div>
            <div className="name">Aaron</div>
            <div className="profile">Developer</div>
          </div>
          <div className="card">
            <div className="description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda praesentium doloribus quidem eaque quasi quas
              accusantium, porro voluptatum! Eos, aperiam debitis. Placeat id
              aperiam animi delectus ullam numquam aut cupiditate!
            </div>
            <div className="photo">
              <img src={avatar3} alt="" />
            </div>
            <div className="name">Bobby</div>
            <div className="profile">Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

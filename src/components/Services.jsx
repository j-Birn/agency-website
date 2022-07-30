import React from "react";
import { FaDesktop, FaHandsHelping, FaPalette } from "react-icons/fa";

const Services = () => {
  return (
    <div className="services-container">
      <div className="title-container">
        <h2 className="title">Our services</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
          obcaecati corporis ipsum suscipit non rerum autem totam earum,
          repudiandae beatae quibusdam alias, fugit dicta nihil laborum adipisci
          ullam optio minima. Aut tenetur et labore a, dolores repudiandae
          eligendi similique exercitationem possimus ea necessitatibus veniam
          eius? Veniam illo nulla laboriosam. Fugiat repellat iure explicabo
          soluta ut? Dolorem suscipit quod debitis magni.
        </p>
      </div>
      <div className="services">
        <div className="service">
          <div className="icon">
            <FaDesktop className="i" />
          </div>
          <div className="content">
            <div className="services-title">Web development</div>
            <div className="services-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              culpa vel reiciendis cupiditate sunt natus obcaecati repellendus
              consectetur! At voluptate optio voluptates sapiente tempora culpa
              velit excepturi accusamus ullam quod.
            </div>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <FaHandsHelping className="i" />
          </div>
          <div className="content">
            <div className="services-title">Consulting</div>
            <div className="services-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              culpa vel reiciendis cupiditate sunt natus obcaecati repellendus
              consectetur! At voluptate optio voluptates sapiente tempora culpa
              velit excepturi accusamus ullam quod.
            </div>
          </div>
        </div>
        <div className="service">
          <div className="icon">
            <FaPalette className="i" />
          </div>
          <div className="content">
            <div className="services-title">Design</div>
            <div className="services-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              culpa vel reiciendis cupiditate sunt natus obcaecati repellendus
              consectetur! At voluptate optio voluptates sapiente tempora culpa
              velit excepturi accusamus ullam quod.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

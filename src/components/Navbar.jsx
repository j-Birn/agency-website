import React from "react";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const borger = () => {
    setMenu(!menu);
  };

  return (
    <nav>
      <MdOutlineMenu className="toggle" onClick={borger} />
      <div className={`links ${menu ? "nav-toggle" : ""}`}>
        <ul>
          <li id="nav-link">
            <a href="#home">Home</a>
          </li>
          <li id="nav-link">
            <a href="#services">Services</a>
          </li>
          <li id="nav-link">
            <a href="#about">About</a>
          </li>
          <li id="nav-link">
            <a href="#milestones">Milestones</a>
          </li>
          <li id="nav-link">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li id="nav-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

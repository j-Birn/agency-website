import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="links">
          <ul>
            <li id="nav-link" class="active">
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
      </div>
    </nav>
  );
};

export default Navbar;

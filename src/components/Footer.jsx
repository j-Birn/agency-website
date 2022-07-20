import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaReddit,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <FaFacebookF className="i" />
        <FaInstagram className="i" />
        <FaTwitter className="i" />
        <FaYoutube className="i" />
        <FaGithub className="i" />
        <FaReddit className="i" />
      </div>
      <div className="copy">2022 Digital agency</div>
    </div>
  );
};

export default Footer;

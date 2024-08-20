import React from "react";
import "./footer.css";
import logo from "../assets/smart lights_logo.svg";


const Footer = () => {
  return (
    <div className="fot">
      <div className="headerContainer">
        <div className="logoContainer">
          <img
            src={logo}
            alt="Logo"
            width="150"
            height="24"
            className="d-inline-block align-text-top"
          />
        </div>
        <div className="navContainer">
          <span className="navItem">Product</span>
          <span className="navItem">Software Services</span>
          <span className="navItem">Follow Us</span>
        </div>
      </div>
      <div className="footerContainer">
        <span className="footerItem">Privacy Policy</span>
        <span className="footerItem">Terms & Conditions</span>
        <span className="footerItem">Cookie Policy</span>
      </div>
    </div>
  );
};


export default Footer;
  
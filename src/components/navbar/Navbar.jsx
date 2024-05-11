import React from "react";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="container navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact me</li>
      </ul>
    </div>
  );
};

export default Navbar;

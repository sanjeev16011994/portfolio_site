import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className=" me-auto logo"></div>
      <div className="navbar-items">
        <a href="#home">Home</a>
      </div>
      <div className="navbar-items">
        <a href="#about">About</a>
      </div>
      <div className="navbar-items">
        <a href="#skills">Skills</a>
      </div>
      <div className="navbar-items">
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-items border-1 border-white cv-download  ">
        <button className="btn btn-outline-light  " >Download CV</button>
      </div>
    </div>
  );
};

export default Header;
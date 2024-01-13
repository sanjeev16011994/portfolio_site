// src/components/About.js
import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about-container" id="about">
      <h1 className="heading">About Me</h1>
      <div className="about-wrapper">
        <div className="about   ">
          <h3>About</h3>
          <p>
            Software Engineer with a demonstrated history of working in the
            information technology and services industry. Skilled in HTML,
            Bootstrap, Cascading Style Sheets (CSS), AngularJS, ReactJS ,NodeJS
            and MongoDB, Python. Strong engineering professional with a Master's
            degree focused in Computer ScienceSoftware
          </p>
        </div>
        <div className="education ">
          <h3>Education</h3>
          <p>
            {" "}
            Software Engineer with a demonstrated history of working in the
            information technology and services industry. Skilled in HTML,
            Bootstrap, Cascading Style Sheets (CSS), AngularJS, ReactJS ,NodeJS
            and MongoDB, Python. Strong engineering professional with a Master's
            degree focused in Computer ScienceSoftware
          </p>
        </div>
        <div className="education ">
          <h3>Experience  </h3>
          <p>
            Software Engineer with a demonstrated history of working in the
            information technology and services industry. Skilled in HTML,
            Bootstrap, Cascading Style Sheets (CSS), AngularJS, ReactJS ,NodeJS
            and MongoDB, Python. Strong engineering professional with a Master's
            degree focused in Computer ScienceSoftware
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

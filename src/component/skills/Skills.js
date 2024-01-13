import React from "react";
import "./skills.scss";
import html from "../../images/html (1).png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import nodejs from "../../images/node.png";
import angular from "../../images/angular.png";
import react from "../../images/react.png"

const Skills = () => {
  return (
    <div className="skills-container" id="skills" >
      <div className="skills-wrapper">
        <div className='skills-heading' >
          <h1>Skills</h1>
        </div>
        <div className="skill-container">
          <div className="skill border-orange">
            <div className="skill-img ">
              <img src={html} alt="html" ></img>
            </div>
          </div>
          <div className="skill  border-blue ">
            <div className="skill-img ">
              <img src={css} alt="css" ></img>
            </div>
          </div>
          <div className="skill border-yellow">
            <div className="skill-img">
              <img src={js} alt="js"></img>
            </div>
          </div>
          <div className="skill border-green">
            <div className="skill-img ">
              <img src={nodejs} alt="nodejs" ></img>
            </div>
          </div>
          <div className="skill border-red">
            <div className="skill-img ">
              <img src={angular} alt="angular" ></img>
            </div>
          </div>
          <div className="skill border-cyan">
            <div className="skill-img ">
              <img src={react} alt="reactjs" ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
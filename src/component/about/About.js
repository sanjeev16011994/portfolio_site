// src/components/About.js
import React from "react";
import "./about.scss";
import { SlUser } from "react-icons/sl";
import { SlGraduation } from "react-icons/sl";
import { SlBriefcase } from "react-icons/sl";

const About = () => {
  return (
    <div className="about-container" id="about">
      <h1 className="heading">About Me</h1>
      <div className="about-wrapper">
        <div className="about   ">
          <h3 className="border-bottom pb-3  ">
            <SlUser className="me-2"></SlUser>
            About
          </h3>
          <p>
            Software Engineer with a demonstrated history of working in the
            information technology and services industry. Skilled in HTML,
            Bootstrap, Cascading Style Sheets (CSS), AngularJS, ReactJS ,NodeJS
            and MongoDB, Python. Strong engineering professional with a Master's
            degree focused in Computer Science.
            Like's to explore new technologies.
          </p>
        </div>
        <div className="education ">
          <h3 className="border-bottom pb-3  ">
            <SlGraduation className="me-2" />
            Education
          </h3>
          <div className="degrees">
            <ul>
              <li>
                <p>Masters in computer science</p>
                <p>2015 - 2017</p>
              </li>
              <li>
                <p>Bachelors in computer science</p>
                <p>2011 - 2014</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="education ">
          <h3 className="border-bottom pb-3  ">
            <SlBriefcase className="me-2" />
            Experience
          </h3>
          <p>Datamoulds Pvt. Ltd. 2021 - Present</p>
          <p>
            <ul>
              <li>Working as full stack developer.</li>
              <li>
                Build single page application's using technologies like React,
                Angular.
              </li>
              <li>Worked on backend technologies like Nodejs, Python.</li>
              <li>Build mobile app using React Native.</li>
              <li>
                Deployed mobile apps on Google Play Store and Apples Store
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

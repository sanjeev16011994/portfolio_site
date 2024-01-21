import React from "react";
import "./projects.scss";
import { MY_PORJECTS } from "../../assets/data";
import angular from "../../images/angular.png";

const Projects = () => {
  return (
    <div className="projects-container" id="skills">
      <div className="projects-wrapper">
        <div className="projects-heading">
          <h1>Projects</h1>
        </div>
        <div className="projects-tiles">
          {MY_PORJECTS.map((project, index) => {
            return (
              <div
                className="tile"
                key={project.id}
                onClick={() => {
                  window.open(project.url, "_blank");
                }}
              >
                <div className="project-image-container ">
                  <img
                    className="project-image"
                    src={project.cover}
                    alt="project-img"
                  ></img>
                </div>
                <div className="project-info">
                  <h5 className="project-name">{project.name}</h5>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

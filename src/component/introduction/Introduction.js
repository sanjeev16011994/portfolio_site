import React from "react";
import "./introduction.scss";
import myimage from "../../images/my_image.jpg";

const Introduction = () => {
  return (
    <div className="introduction-container" id="home">
      <div className="profile-wrapper">
        <div className="profile-image">
          <img className=" img-thumbnail " src={myimage}></img>
        </div>
        <div className="profile-info">
          <div className="heading">
            <p className="name typewriter ">
              <span className="text-danger">Hi</span>, I am Sanjeev ;)
            </p>
            <p className="role">Software Developer</p>
          </div>
          <div className="short-info"></div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
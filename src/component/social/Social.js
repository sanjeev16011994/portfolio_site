import React from "react";
import "./social.scss"
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import facebook from "../../images/facebook.png"
import twitter from "../../images/twitter.png"

const Social = () => {
  return (
    <div className="social-container">
      <div className="icons-container">
        <div className="icon">
          <a
            href="https://github.com/sanjeev16011994"
            target="_blank"
            title="Github"
          >
            <img src={github}></img>
          </a>
        </div>
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/sanjeev-thakur-735652113"
            target="_blank"
            title="Linkedin"
          >
            <img src={linkedin}></img>
          </a>
        </div>
        <div className="icon">
            <img src={facebook}></img>
        </div>
        <div className="icon">
            <img src={twitter}></img>
        </div>
      </div>
    </div>
  );
};

export default Social;
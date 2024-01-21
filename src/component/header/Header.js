import React, { useEffect, useState } from "react";
import "./header.scss";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const [scrolledvalue, setScrolledValue] = useState(0);

  const getResume = async () => {
    setLoading(true);
    const storage = getStorage();
    getDownloadURL(ref(storage, "Resume.pdf"))
      .then((url) => {
        window.open(url, "_blank");
      })
      .catch((error) => {
        alert("Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    setScrolledValue(scrolled);
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className={`header ${scrolledvalue && "change-header"}`}>
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
        <a href="#projects">Projects</a>
      </div>
      <div className="navbar-items">
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-items border-1 border-white cv-download  ">
        <button className="btn btn-outline-light" onClick={getResume}>
          {loading ? (
            <div>
              <span
                className="spinner-grow spinner-grow-sm text-info "
                role="status"
              ></span>
              <span
                className="spinner-grow spinner-grow-sm text-warning ms-2"
                role="status"
              ></span>
              <span
                className="spinner-grow spinner-grow-sm text-danger  ms-2"
                role="status"
              ></span>
            </div>
          ) : (
            <span>Download CV</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;

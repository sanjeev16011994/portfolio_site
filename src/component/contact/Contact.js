import React from "react";
import "./contact.scss";


const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-wrapper">
        <div className="form-container">
          <div className="contact-heading">
            <h3>Get in touch</h3>
          </div>
          <form>
            <div>
              <input type="text" placeholder="Name"></input>
            </div>
            <div>
              <input type="email" placeholder="Email"></input>
            </div>
            <div>
              <input type="tel" placeholder="Phone"></input>
            </div>
            <div>
              <textarea placeholder="Your message"></textarea>
            </div>
            <div>
              <button type="button" className="btn  me-auto contact-button">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="form-container">
          <div className="contact-heading">
            <h3>Address</h3>
            <address>
              At-Govirle, Post-Balavali ,
              Dist-Raigad, State-Maharashtra,
              Pin-402107
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
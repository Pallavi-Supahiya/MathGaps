import React from "react";
import Image from "../../../images/Home/Mail/Mailbox.svg";
import dots from "../../../images/dots.png"

import "./style.scss";

const Mail = () => {

  return (


   
    <div className="mail">
      <div className="container">
      <img className="dots-up" src={dots} alt="..." />
        <img className="dots-down" src={dots} alt="..." />
        <div className="mail-container">
          <div className="mail-content">
            <div className="mail-heading">
              <span className="sub-heading"><i>Get In Touch</i></span>
              <h2 className="Heading">Let’s discuss MathGaps.</h2>
            </div>
            <form className="mail-form" >
              <input placeholder="Enter E-mail" type="email"   />
              <input placeholder="Enter Message" type="text"   />
              <div className="button-div">
                <button>Submit</button>
              </div>
            </form>
          </div>
          <div className="mail-image">
            <img src={Image} alt="mailbox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
